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
import lineType from "@/computes/line/line_types.js";

import hash from "js-sha256";
import zlib from "zlib";

export default {
  name: Constant.NAME,
  methods: {
    async verifyAccess() {
      if (this.$route.name == Constant.ROUTER_TAG_ABOUT) {
        return null;
      }
      if (this.$cookies.isKey(Constant.COOKIE_ACCESS_KEY)) {
        if (this.$route.name === Constant.ROUTER_TAG_LOGIN) {
          this.$router.push({ name: Constant.ROUTER_TAG_DASHBOARD });
        }
        if (this.$store.state.ready || (await this.getProfile())) {
          return true;
        }
      }
      if (this.$route.name !== Constant.ROUTER_TAG_LOGIN) {
        this.$router.push({ name: Constant.ROUTER_TAG_LOGIN });
      }
      return false;
    },
    async getProfile() {
      try {
        const profile = await this.client.getProfile();
        this.$store.dispatch("updateProfile", profile);
        return true;
      } catch (e) {
        this.revoke();
        return false;
      }
    },
    async syncRevision() {
      if (this.$cookies.isKey(Constant.COOKIE_OP_REVISION)) {
        this.revision = this.$cookies.get(Constant.COOKIE_OP_REVISION);
      } else {
        this.revision = await this.client.getLastOpRevision();
      }
    },
    async updateRevision(operations) {
      const opLength = operations.length;
      this.revision = operations[opLength - 1].revision.compare(
        operations[opLength - 2].revision
      )
        ? operations[opLength - 2].revision
        : operations[opLength - 1].revision;
    },
    async syncData() {
      await this.syncContactIds();
      await this.syncContactMetaData();
    },
    async syncContactIds() {
      for (let dataName of Constant.ALL_CONTACT_IDS_STORAGES) {
        let idList = null;
        if (dataName in window.localStorage) {
          let compressedData = window.localStorage.getItem(dataName);
          let decompressedData = await new Promise((resolve, reject) =>
            zlib.gunzip(
              new Buffer(compressedData, "base64"),
              (error, result) => {
                !error ? resolve(result) : reject(Error(error));
              }
            )
          );
          idList = JSON.parse(decompressedData);
        } else {
          switch (dataName) {
            case Constant.STORAGE_CONTACT_IDS:
              idList = await this.client.getAllContactIds();
              break;
            case Constant.STORAGE_GROUP_JOINED_IDS:
              idList = await this.client.getGroupIdsJoined();
              break;
            case Constant.STORAGE_GROUP_INVITED_IDS:
              idList = await this.client.getGroupIdsInvited();
              break;
            default:
              console.error("Unknown Contact Name with " + dataName);
          }
        }
        if (idList) {
          this.$store.dispatch("syncContactIds", { dataName, idList });
        } else {
          console.error("Error occurs in syncContactIds with " + dataName);
        }
      }
    },
    async syncContactMetaData() {
      // Sync Contacts(User) Information
      const contactIdLists = [this.$store.state.contactIds];
      const contactData = await this.client.getContacts(
        [].concat(...contactIdLists)
      );
      this.$store.dispatch("syncContactMetaData", {
        typeName: lineType.SyncCategory.CONTACT,
        data: contactData,
      });
      // Sync Group Information
      const groupIdLists = [
        this.$store.state.groupJoinedIds,
        this.$store.state.groupInvitedIds,
      ];
      const groupData = await this.client.getGroups([].concat(...groupIdLists));
      this.$store.dispatch("syncContactMetaData", {
        typeName: lineType.SyncCategory.GROUP,
        data: groupData,
      });
    },
    async opListener() {
      const opClient = lineClient(
        Constant.LINE_POLL_PATH,
        this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
      );
      this.longPoll(opClient);
    },
    async longPoll(opClient) {
      try {
        const operations = await opClient.fetchOperations(
          this.revision,
          Constant.FETCH_OP_NUM
        );
        this.$store.dispatch("opHandler", operations);
        await this.updateRevision(operations);
      } catch (e) {
        console.error(e);
      }
      this.longPoll(opClient);
    },
    async revoke() {
      Constant.ALL_COOKIES.forEach((name) => this.$cookies.remove(name));
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.reload();
    },
  },
  watch: {
    $route() {
      this.verifyAccess();
    },
    async storageData(e) {
      e.forEach((objs, index) => {
        let alias = this.storageDataNamesAndHashes[index];
        let nowHash = hash.sha256(objs);
        if (nowHash !== alias[1]) {
          let jsonString = JSON.stringify(objs);
          zlib.gzip(jsonString, function(err, buf) {
            let compressedString = new Buffer(buf).toString("base64");
            window.localStorage.setItem(alias[0], compressedString);
          });
          alias[1] = nowHash;
        }
      });
    },
    revision() {
      this.$cookies.set(Constant.COOKIE_OP_REVISION, this.revision);
    },
  },
  data() {
    return {
      client: null,
      revision: 0,
      storageData: [
        this.$store.state.contactIds,
        this.$store.state.groupJoinedIds,
        this.$store.state.groupInvitedIds,
      ],
      storageDataNamesAndHashes: [
        [Constant.STORAGE_CONTACT_IDS, ""],
        [Constant.STORAGE_GROUP_JOINED_IDS, ""],
        [Constant.STORAGE_GROUP_INVITED_IDS, ""],
      ],
    };
  },
  async created() {
    this.client = lineClient(
      Constant.LINE_QUERY_PATH,
      this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
    );
    if (await this.verifyAccess()) {
      await this.syncData();
      await this.syncRevision();
      this.opListener();
      this.$store.commit("setReady");
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
