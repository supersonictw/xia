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

import zlib from "zlib";

export default {
  name: Constant.NAME,
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
      await this.updateProfile();
      this.syncData();
      await this.syncRevision();
      this.opListener();
      this.$store.commit("setReady");
    },
    async updateProfile() {
      let profile = await this.client.getProfile();
      this.$store.commit("updateProfile", profile);
    },
    async syncRevision() {
      let revision = 0;
      if (this.$cookies.isKey(Constant.COOKIE_OP_REVISION)) {
        revision = this.$cookies.get(Constant.COOKIE_OP_REVISION);
      } else {
        revision = await this.client.getLastOpRevision();
        this.$cookies.set(Constant.COOKIE_OP_REVISION, revision);
      }
      this.$store.commit("setRevision", revision);
    },
    async syncData() {
      let contactsDataType = {
        [Constant.STORAGE_CONTACT_DATA]: this.syncContacts,
        [Constant.STORAGE_GROUP_JOINED_DATA]: this.syncGroupsJoined,
        [Constant.STORAGE_GROUP_INVITED_DATA]: this.syncGroupsInvited,
      };
      for (let name in contactsDataType) {
        let data = "Unknown";
        if (!(name in window.localStorage)) {
          data = await contactsDataType[name]();
        } else {
          let compressedData = window.localStorage.getItem(name);
          let decompressedData = await this.decompress(compressedData);
          data = JSON.parse(decompressedData);
        }
        this.$store.dispatch("syncContactsData", [name, data]);
      }
    },
    async syncContacts() {
      let contactIds = await this.client.getAllContactIds();
      return await this.client.getContacts(contactIds);
    },
    async syncGroupsJoined() {
      let groupIds = await this.client.getGroupIdsJoined();
      return await this.client.getGroups(groupIds);
    },
    async syncGroupsInvited() {
      let groupIds = await this.client.getGroupIdsInvited();
      return await this.client.getGroups(groupIds);
    },
    async opListener() {
      let opClient = lineClient(
        Constant.LINE_POLL_PATH,
        this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
      );
      let operations = await opClient.fetchOperations(
        Constant.FETCH_OP_NUM,
        this.revision
      );
      this.dispatch("longPoll", operations);
      this.dispatch("updateRevision", operations);
    },
    async decompress(b64String) {
      return new Promise((resolve, reject) =>
        zlib.gunzip(new Buffer(b64String, "base64"), function(error, result) {
          if (!error) {
            resolve(result);
          } else {
            reject(Error(error));
          }
        })
      );
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
