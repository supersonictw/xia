<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="app" class="ui">
    <router-view />
    <div class="footer">
      <router-link to="/about">About XIA</router-link>
    </div>
  </div>
</template>

<script>
import Constants from "./data/const.js";

export default {
  name: "XIA",
  methods: {
    verifyAccess() {
      if (this.$route.name == Constants.ROUTER_TAG_ABOUT) {
        return;
      }
      if (this.$cookies.get("XIA_AccessKey")) {
        if (this.$route.name === Constants.ROUTER_TAG_LOGIN) {
          this.$router.push({ name: Constants.ROUTER_TAG_DASHBOARD });
        }
        return;
      }
      if (this.$route.name !== Constants.ROUTER_TAG_LOGIN) {
        this.$router.push({ name: Constants.ROUTER_TAG_LOGIN });
      }
    },
  },
  created() {
    this.verifyAccess();
  },
  watch: {
    $route() {
      this.verifyAccess();
    },
  },
};
</script>

<style scoped>
.footer {
  margin-top: 100px;
}
</style>
