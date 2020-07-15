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

import assert from "assert";
import zlib from "zlib";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    ready: 0,
    profile: {},
    contactData: [],
    groupJoinedData: [],
    groupInvitedData: [],
    operations: [],
    revision: 0,
    mediaURL: `${Constant.LINE_USE_HTTPS ? "https" : "http"}://${
      Constant.LINE_MEDIA_HOST
    }`,
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
    setRevision(state, revision) {
      state.revision = revision;
    },
  },
  actions: {
    async longPoll({ commit }, operations) {
      operations.forEach((op) => commit("pushOperation", op));
    },
    async updateRevision({ commit }, operations) {
      let opLength = operations.length;
      let lastRevision = Math.max(
        operations[opLength - 2].revision,
        operations[opLength - 1].revision
      );
      commit("setRevision", lastRevision);
    },
    syncContactsData({ commit }, payload) {
      assert(
        typeof payload == "object" && payload.length == 2,
        "Invalid Payload in syncContactsData"
      );
      let name = payload[0],
        data = payload[1];
      let jsonString = JSON.stringify(data);
      let acceptableType = [
        Constant.STORAGE_CONTACT_DATA,
        Constant.STORAGE_GROUP_JOINED_DATA,
        Constant.STORAGE_GROUP_INVITED_DATA,
      ];
      assert(
        acceptableType.includes(name),
        "Invalid Name in syncContactsData:" + name
      );
      zlib.gzip(jsonString, function(err, buf) {
        let compressedString = new Buffer(buf).toString("base64");
        window.localStorage.setItem(name, compressedString);
      });
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
