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

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    contactData: [],
    groupJoinedData: [],
    groupInvitedData: [],
  },
  getters: {
    getAllContactIds() {},
  },
  mutations: {
    syncContacts(state, data) {
      let jsonString = JSON.stringify(data);
      window.localStorage.setItem(Constant.STORAGE_CONTACT_DATA, jsonString);
      state.contactData = JSON.parse(jsonString);
    },
    syncGroupsJoined(state, data) {
      let jsonString = JSON.stringify(data);
      window.localStorage.setItem(
        Constant.STORAGE_GROUP_JOINED_DATA,
        jsonString
      );
      state.groupJoinedData = JSON.parse(jsonString);
    },
    syncGroupsInvited(state, data) {
      let jsonString = JSON.stringify(data);
      window.localStorage.setItem(
        Constant.STORAGE_GROUP_INVITED_DATA,
        jsonString
      );
      state.groupInvitedData = JSON.parse(jsonString);
    },
  },
});

export default Store;
