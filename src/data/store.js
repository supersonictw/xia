/*jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

import Vue from "vue";
import Vuex from "vuex";

import Constant from "@/data/const.js";
import lineClient from "@/computes/line.js";
import lineType from "@/computes/line/line_types.js";

import assert from "assert";
import hash from "js-sha256";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    authToken: "",
    ready: 0,
    profile: {},
    contactIds: [],
    messageBox: [],
    indexedDB: null,
    groupJoinedIds: [],
    groupInvitedIds: [],
    allContactMetaData: [],
    allGroupMetaData: [],
  },
  getters: {
    contactInfo: (state) => {
      const layout = new Map();
      state.allContactMetaData.forEach((contact) => {
        layout.set(contact.mid, {
          displayName: contact.displayName,
          picturePath: contact.picturePath,
          statusMessage: contact.statusMessage,
        });
      });
      return layout;
    },
    groupInfo: (state) => {
      const layout = new Map();
      state.allGroupMetaData.forEach((group) => {
        layout.set(group.id, {
          displayName: group.name,
          picturePath: `/${group.pictureStatus}`,
          members: group.members,
          invitee: group.invitee,
        });
      });
      return layout;
    },
    chatIdByHash: (state) => {
      const layout = new Map();
      []
        .concat(state.allContactMetaData, state.allGroupMetaData)
        .forEach((obj) => {
          layout.set(hash.sha256(obj.id || obj.mid), obj.id || obj.mid);
        });
      return layout;
    },
  },
  mutations: {
    registerIndexedDB(state, handler) {
      state.indexedDB = handler;
    },
    registerAuthToken(state, authToken) {
      state.authToken = authToken;
    },
    setReady(state) {
      state.ready++;
    },
    updateProfile(state, profileData) {
      state.profile.UserId = profileData.mid;
      state.profile.UserIdHashed = hash.sha256(profileData.mid);
      state.profile.DisplayName = profileData.displayName;
      state.profile.PicturePath = profileData.picturePath;
      state.profile.StatusMessage = profileData.statusMessage;
    },
    pushContactId(state, { dataName, id }) {
      const dataType = {
        [Constant.STORAGE_CONTACT_IDS]: state.contactIds,
        [Constant.STORAGE_GROUP_JOINED_IDS]: state.groupJoinedIds,
        [Constant.STORAGE_GROUP_INVITED_IDS]: state.groupInvitedIds,
      };
      assert(
        Object.keys(dataType).includes(dataName),
        "Invalid Name in pushContactId:" + dataName
      );
      dataType[dataName].push(id);
    },
    pushContactMetaData(state, { typeName, data }) {
      const dataType = {
        [lineType.SyncCategory.CONTACT]: state.allContactMetaData,
        [lineType.SyncCategory.GROUP]: state.allGroupMetaData,
      };
      assert(
        Object.keys(dataType).includes(typeName.toString()),
        "Invalid Name in pushContactMetaData"
      );
      dataType[typeName].push(data);
    },
    pushMessageBox(state, originData) {
      if (state.messageBox.length > Constant.OPERATIONS_NUM_LIMIT) {
        for (let i = 0; i < Constant.OPERATIONS_NUM_LIMIT; i++) {
          state.messageBox.pop(state.messageBox[i]);
        }
        console.warn(
          "Automatically release some messageBox cache for preventing memory leak."
        );
      }
      let data = {};
      Object.assign(data, originData);
      data.message.target = (function(op, msg) {
        switch (msg.toType) {
          case lineType.MIDType.USER:
            if (op.type == lineType.OpType.SEND_MESSAGE) {
              return msg.to;
            } else {
              return msg.from_;
            }
          case lineType.MIDType.ROOM:
          case lineType.MIDType.GROUP:
            return msg.to;
        }
      })(data, data.message);
      // Uint8Array to String
      data.message.createdTime = data.message.createdTime.toString();
      data.message.deliveredTime = data.message.deliveredTime.toString();
      state.messageBox.push(data);
    },
    popMessageBox(state, data) {
      state.messageBox.pop(data);
    },
  },
  actions: {
    async opHandler(context, operations) {
      for (let operation of operations) {
        if (operation.revision > 0) {
          switch (operation.type) {
            case lineType.OpType.UPDATE_PROFILE: {
              const data = await lineClient(
                Constant.LINE_QUERY_PATH,
                context.state.authToken
              ).getProfile();
              context.commit("updateProfile", data);
              break;
            }
            case lineType.OpType.UPDATE_CONTACT: {
              const data = await lineClient(
                Constant.LINE_QUERY_PATH,
                context.state.authToken
              ).getContact(operation.param1);
              context.commit("pushContactMetaData", {
                typeName: lineType.SyncCategory.CONTACT,
                data,
              });
              break;
            }
            case lineType.OpType.UPDATE_GROUP:
            case lineType.OpType.NOTIFIED_UPDATE_GROUP: {
              const data = await lineClient(
                Constant.LINE_QUERY_PATH,
                context.state.authToken
              ).getGroup(operation.param1);
              context.commit("pushContactMetaData", {
                typeName: lineType.SyncCategory.GROUP,
                data,
              });
              break;
            }
            case lineType.OpType.SEND_MESSAGE:
            case lineType.OpType.RECEIVE_MESSAGE:
              context.commit("pushMessageBox", operation);
              break;
          }
        }
      }
    },
    async syncContactIds({ commit }, { dataName, idList }) {
      assert(
        Constant.ALL_CONTACT_IDS_STORAGES.includes(dataName),
        "Invalid Name in syncContactIds:" + dataName
      );
      idList.forEach((id) =>
        commit("pushContactId", {
          dataName,
          id,
        })
      );
    },
    async syncContactMetaData({ commit }, { typeName, data }) {
      assert(
        [lineType.SyncCategory.CONTACT, lineType.SyncCategory.GROUP].includes(
          typeName
        ),
        "Invalid typeName in syncContactMetaData"
      );
      data.forEach((obj) =>
        commit("pushContactMetaData", {
          typeName,
          data: obj,
        })
      );
    },
  },
});

export default Store;
