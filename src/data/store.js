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

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    ready: 0,
    profile: {},
    contactData: [],
    groupJoinedData: [],
    groupInvitedData: [],
    operations: [],
  },
  getters: {
    contactInfoForChatList: (state) => {
      let layout = new Map();
      state.contactData.forEach((contact) => {
        layout.set(contact.mid, {
          picturePath: contact.picturePath,
          displayName: contact.displayName,
        });
      });
      return layout;
    },
    messageBox: (state) => {
      let layout = new Map();
      state.operations.forEach((operation) => {
        if (
          operation.type == lineType.OpType.SEND_MESSAGE ||
          operation.type == lineType.OpType.RECEIVE_MESSAGE
        ) {
          layout.set(operation.message.to, operation.message);
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
      state.profile.DisplayName = profileData.displayName;
      state.profile.PicturePath = profileData.picturePath;
      state.profile.StatusMessage = profileData.statusMessage;
    },
    pushContactData(state, { dataName, data }) {
      let dataType = {
        [Constant.STORAGE_CONTACT_DATA]: state.contactData,
        [Constant.STORAGE_GROUP_JOINED_DATA]: state.groupJoinedData,
        [Constant.STORAGE_GROUP_INVITED_DATA]: state.groupInvitedData,
      };
      assert(
        Object.keys(dataType).includes(dataName),
        "Invalid Name in pushContactData:" + dataName
      );
      dataType[dataName].push(data);
    },
    pushOperations(state, data) {
      state.operations.push(data);
    },
    popOperations(state, data) {
      state.operations.pop(data);
    },
  },
  actions: {
    async opHandler({ commit, state }, operations) {
      let handledOps = state.operations.map((operation) => operation.revision);
      operations.forEach((op) => {
        if (!handledOps.includes(op.revision) && op.revision > 0) {
          commit("pushOperations", op);
        }
      });
    },
    async updateProfile({ commit }, profileData) {
      commit("updateProfile", profileData);
    },
    syncContactsData({ commit }, payload) {
      assert(
        typeof payload == "object" && payload.length == 2,
        "Invalid Payload in syncContactsData"
      );
      let name = payload[0],
        data = payload[1];
      assert(
        Constant.ALL_STORAGES.includes(name),
        "Invalid Name in syncContactsData:" + name
      );
      data.forEach((obj) =>
        commit("pushContactData", {
          dataName: name,
          data: obj,
        })
      );
    },
  },
});

export default Store;
