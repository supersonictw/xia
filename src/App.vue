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
      <a href="#" @click.prevent="reset">Reset XIA</a> |
      <router-link to="/about">About XIA</router-link>
    </div>
  </div>
</template>

<script>
import Constant from "./data/const.js";

import lineClient from "@/computes/line.js";
import lineType from "@/computes/line/line_types.js";

import { openDB, deleteDB } from "idb";
import hash from "js-sha256";
import zlib from "zlib";

export default {
  name: Constant.NAME,
  methods: {
    async verifyAccess() {
      if (this.$route.name == Constant.ROUTER_TAG_ABOUT) {
        return null;
      }
      if (this.$store.state.authToken) {
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
        this.$store.commit("updateProfile", profile);
        return true;
      } catch (e) {
        console.error(e);
        if (e.name == "TalkException") this.revoke();
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
          let decompressedData = await this.decompress(compressedData);
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
      // Sync Contacts(User) Information
      const contactIdLists = [this.$store.state.contactIds];
      const contactData = await this.client.getContacts(
        [].concat(...contactIdLists)
      );
      const allGroupMemberData = this.$store.state.allGroupMetaData.map(
        (group) => (group.members != null ? group.members : [])
      );
      const allGroupInvitedData = this.$store.state.allGroupMetaData.map(
        (group) => (group.invitee != null ? group.invitee : [])
      );
      this.$store.dispatch("syncContactMetaData", {
        typeName: lineType.SyncCategory.CONTACT,
        data: contactData.concat(...allGroupMemberData, ...allGroupInvitedData),
      });
    },
    async opListener() {
      const opClient = lineClient(
        Constant.LINE_POLL_PATH,
        this.$store.state.authToken
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
        if (e.name == "TalkException") return this.revoke();
      }
      this.longPoll(opClient);
    },
    async revoke() {
      Constant.ALL_COOKIES.forEach((name) => this.$cookies.remove(name));
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.reload();
    },
    async reset() {
      this.revoke();
      await deleteDB(Constant.NAME);
    },
    async compress(rawString) {
      return new Promise((resolve, reject) =>
        zlib.gzip(rawString, function(error, result) {
          if (!error) {
            resolve(new Buffer(result).toString("base64"));
          } else {
            reject(Error(error));
          }
        })
      );
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
    async storageData(events) {
      for (let index in events) {
        let objs = events[index];
        let alias = this.storageDataNamesAndHashes[index];
        let nowHash = hash.sha256(objs);
        if (nowHash !== alias[1]) {
          let jsonString = JSON.stringify(objs);
          let compressedString = await this.compress(jsonString);
          window.localStorage.setItem(alias[0], compressedString);
          alias[1] = nowHash;
        }
      }
    },
    messageBox(operations) {
      operations.forEach((operation) => {
        this.$store.state.indexedDB.put(
          Constant.OBJECTSTORE_MESSAGEBOX,
          operation.message
        );
        this.$store.commit("popMessageBox", operation);
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
      messageBox: this.$store.state.messageBox,
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
    if (this.$cookies.isKey(Constant.COOKIE_ACCESS_KEY)) {
      this.$store.commit(
        "registerAuthToken",
        this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
      );
    }
    this.$store.commit(
      "registerIndexedDB",
      await openDB(Constant.NAME, Constant.IDB_VERSION, {
        upgrade(db) {
          // MessageBox
          const store = db.createObjectStore(Constant.OBJECTSTORE_MESSAGEBOX, {
            keyPath: "id",
          });
          store.createIndex("target", "target");
        },
      })
    );
    this.client = lineClient(
      Constant.LINE_QUERY_PATH,
      this.$store.state.authToken
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
