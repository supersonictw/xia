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

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    ready: 0,
    loaded: 0,
    authToken: '',
    notifications: [],
    statusMessage: null,
  },
  mutations: {
    setReady(state) {
      state.ready++;
    },
    setLoaded(state) {
      state.loaded++;
    },
    registerAuthToken(state, authToken) {
      state.authToken = authToken;
    },
    notify(state, {title, description}) {
      state.notifications.push({title, description});
      setTimeout(state.notifications.pop(), 3000);
    },
  },
});

export default Store;
