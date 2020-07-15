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
    contactData: [],
    groupJoinedData: [],
    groupInvitedData: [],
  },
  getters: {
    getAllContactIds: (state) => {
      return state.contactData.map((contact) => contact.mid);
    },
  },
  mutations: {
    syncContactsData(state, payload) {
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
      state.contactData = JSON.parse(jsonString);
    },
  },
});

export default Store;
