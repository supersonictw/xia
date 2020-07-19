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
import lineType from "@/computes/line/line_types.js";

import assert from "assert";
import hash from "js-sha256";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    ready: 0,
    profile: {},
    contactIds: [],
    groupJoinedIds: [],
    groupInvitedIds: [],
    allContactMetaData: [],
    allGroupMetaData: [],
    operations: [],
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
          layout.set(hash.sha256(obj.id), obj.id);
        });
      return layout;
    },
    messageBox: (state) => {
      const layout = new Map();
      state.operations.forEach((operation) => {
        if (
          operation.type == lineType.OpType.SEND_MESSAGE ||
          operation.type == lineType.OpType.RECEIVE_MESSAGE
        ) {
          layout.set(
            (function(obj) {
              switch (obj.message.toType) {
                case lineType.MIDType.USER:
                  switch (obj.type) {
                    case lineType.OpType.SEND_MESSAGE:
                      return obj.message.to;
                    case lineType.OpType.RECEIVE_MESSAGE:
                      return obj.message.from_;
                    default:
                      return null;
                  }
                case lineType.MIDType.ROOM:
                case lineType.MIDType.GROUP:
                  return obj.message.to;
              }
            })(operation),
            operation.message
          );
        }
      });
      return layout;
    },
  },
  mutations: {
    setReady(state) {
      state.ready++;
    },
    updateProfile(state, profileData) {
      state.profile.UserId = profileData.mid;
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
    pushOperations(state, data) {
      state.operations.push(data);
    },
    popOperations(state, data) {
      state.operations.pop(data);
    },
  },
  actions: {
    async opHandler({ commit }, operations) {
      operations.forEach((op) => {
        if (op.revision > 0) {
          commit("pushOperations", op);
        }
      });
    },
    async updateProfile({ commit }, profileData) {
      commit("updateProfile", profileData);
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
