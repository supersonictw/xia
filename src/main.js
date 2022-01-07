/* jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
*/

// Redirect for XIA - Demo
if (window.location.hostname == "xia-demo.netlify.app") {
  window.location.replace("https://xia.randychen.tk");
}

// Open external browser while user using LINE IAB
if (/Line/.test(navigator.userAgent)) {
  const url = window.location.href.split("#")[0];
  location.href = url + "?openExternalBrowser=1";
}

// Vue
import Vue from "vue";

Vue.config.productionTip = false;

// Basic View
import App from "./App.vue";

// Configure Plugin Automatically
import store from "./plugins/store";
import client from "./plugins/client";
import router from "./plugins/router";

// Create Vue Application
new Vue({
  store,
  router,
  client,
  render: (h) => h(App),
}).$mount("#app");
