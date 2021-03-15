<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="app" class="ui">
    <StatusBar></StatusBar>
    <Notification
      v-for="(notice, key) in $store.state.notifications"
      :key="key"
      :title="notice.title"
      :description="notice.description"
    ></Notification>
    <transition name="slide">
      <router-view class="child-view" />
    </transition>
    <div class="footer">
      <span v-if="!$store.state.ready">
        <a href="#" @click.prevent="revoke(true)">Reset XIA</a> |
      </span>
      <router-link to="/about">About XIA</router-link>
    </div>
  </div>
</template>

<script>
import Constant from './data/const.js';

import StatusBar from '@/components/StatusBar.vue';
import Notification from '@/components/Notification.vue';

export default {
  name: Constant.NAME,
  components: {
    StatusBar,
    Notification,
  },
  methods: {
    async verifyAccess() {
      if (this.$route.name === Constant.ROUTER_TAG.ABOUT) {
        return null;
      }
      if (this.client && this.$store.state.authToken) {
        if (this.$route.name === Constant.ROUTER_TAG.LOGIN) {
          await this.$router.push({name: Constant.ROUTER_TAG.DASHBOARD});
        }
        if (this.$store.state.ready || (await this.getProfile())) {
          return true;
        }
      }
      if (
        this.$route.name !== Constant.ROUTER_TAG.INTRODUCING &&
        this.$route.name !== Constant.ROUTER_TAG.LOGIN
      ) {
        await this.$router.push({name: Constant.ROUTER_TAG.INTRODUCING});
      }
      return false;
    },
  },
  watch: {
    $route() {
      this.verifyAccess();
    },
    revision() {
      this.$store.state.idbUser.put(Constant.IDB.USER.SETTINGS, {
        id: Constant.IDB.USER.KEY_SETTINGS_REVISION,
        value: this.revision.toString(),
      });
    },
  },
  async created() {
    if (this.$cookies.isKey(Constant.COOKIE.ACCESS_KEY)) {
      const authToken = this.$cookies.get(Constant.COOKIE.ACCESS_KEY);
      this.$store.commit('registerAuthToken', authToken);
    }
    this.$store.commit('setLoaded');
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
