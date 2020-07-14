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
    <transition name="slide">
      <router-view class="child-view" />
    </transition>
    <div class="footer">
      <router-link to="/about">About XIA</router-link>
    </div>
  </div>
</template>

<script>
import Constant from "./data/const.js";

import lineClient from "@/computes/line.js";

export default {
  name: "XIA",
  methods: {
    verifyAccess() {
      if (this.$route.name == Constant.ROUTER_TAG_ABOUT) {
        return null;
      }
      if (this.$cookies.isKey(Constant.COOKIE_ACCESS_KEY)) {
        if (this.$route.name === Constant.ROUTER_TAG_LOGIN) {
          this.$router.push({ name: Constant.ROUTER_TAG_DASHBOARD });
        }
        this.client = lineClient(
          Constant.LINE_QUERY_PATH,
          this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
        );
        return true;
      }
      if (this.$route.name !== Constant.ROUTER_TAG_LOGIN) {
        this.$router.push({ name: Constant.ROUTER_TAG_LOGIN });
      }
      return false;
    },
    async initialize() {
      await this.updateRevision();
      this.opListener();
    },
    async opListener() {
      let opClient = lineClient(
        Constant.LINE_POLL_PATH,
        this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
      );
      this.longPoll(opClient);
    },
    async longPoll(opClient) {
      let operations = await opClient.fetchOperations(
        Constant.FETCH_OP_NUM,
        this.revision
      );
      //this.opDeMux(operations);
      await this.updateRevisionByOp(operations);
      this.longPoll(opClient);
    },
    async opDeMux(operations) {
      operations.forEach((obj) => console.log(obj));
    },
    async updateRevision() {
      if (this.$cookies.isKey(Constant.COOKIE_OP_REVISION)) {
        this.revision = this.$cookies.get(Constant.COOKIE_OP_REVISION);
      } else {
        this.revision = await this.client.getLastOpRevision();
        this.$cookies.set(Constant.COOKIE_OP_REVISION, this.revision);
      }
    },
    async updateRevisionByOp(operations) {
      let opLength = operations.length;
      this.revision = Math.max(
        operations[opLength - 2].revision,
        operations[opLength - 1].revision
      );
      this.$cookies.set(Constant.COOKIE_OP_REVISION, this.revision);
    },
  },
  watch: {
    $route() {
      this.verifyAccess();
    },
  },
  data() {
    return {
      client: null,
      revision: 0,
    };
  },
  created() {
    let status = this.verifyAccess();
    if (status && this.client) {
      this.initialize();
    }
  },
};
</script>

<style scoped>
.child-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-enter {
  opacity: 0;
  transform: translate(100%, 0);
}

.slide-leave-active {
  opacity: 0;
  transform: translate(-100px, 0);
}

.footer {
  margin-top: 100px;
}
</style>
