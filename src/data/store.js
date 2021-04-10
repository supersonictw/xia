/* jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
*/

import Vue from 'vue';
import Vuex from 'vuex';

import hash from 'js-sha256';

import Constant from '@/data/const';
import lineClient from '@/computes/line.js';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    authToken: '',
    queryClient: null,
    syncHandler: null,
    ready: 0,
    loaded: 0,
    profile: {},
    lastMessages: new Map(),
    chatIdsHashed: new Map(),
    statusMessage: null,
    notifications: [],
  },
  mutations: {
    registerAuthToken(state, authToken) {
      state.authToken = authToken;
    },
    registerQueryClient(state, queryClient) {
      state.queryClient = queryClient;
    },
    registerSyncHandler(state, syncHandler) {
      state.syncHandler = syncHandler;
    },
    registerChatIdHashed(state, {targetId, idHashed}) {
      state.chatIdsHashed.set(idHashed, targetId);
    },
    unregisterChatIdHashed(state, idHashed) {
      state.chatIdsHashed.delete(idHashed);
    },
    setReady(state) {
      state.ready++;
    },
    setLoaded(state) {
      state.loaded++;
    },
    updateProfile(state, profileData) {
      state.profile.userId = profileData.mid;
      state.profile.userIdHashed = hash.sha256(profileData.mid);
      state.profile.displayName = profileData.displayName;
      state.profile.picturePath = profileData.picturePath;
      state.profile.statusMessage = profileData.statusMessage;
    },
    notify(state, {title, description}) {
      state.notifications.push({title, description});
      setTimeout(state.notifications.pop(), 3000);
    },
  },
  actions: {
    init({commit}, authToken) {
      this.client = lineClient(Constant.LINE.PATH.QUERY, authToken);
      commit('setLoaded');
    },
  },
});

export default Store;
