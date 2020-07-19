/*jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

// Vue
import Vue from "vue";

// Basic View
import App from "./App.vue";

// Configure Plugin Automatically
import Store from "./data/store.js";
import Router from "./data/router.js";

// Configure Plugin Manually
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

// Vue Settings
Vue.config.productionTip = false;

// Create Vue Application
new Vue({
  render: (h) => h(App),
  store: Store,
  router: Router,
}).$mount("#app");
