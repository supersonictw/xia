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
      <span v-if="!checkReady">
        <a href="#" @click.prevent="revoke(true)">Reset XIA</a> |
      </span>
      <router-link to="/about">About XIA</router-link>
    </div>
  </div>
</template>

<script>
import Constant from "./data/const.js";

import lineClient from "@/computes/line.js";
import lineType from "@/computes/line_types.js";

import { openDB, deleteDB } from "idb";
import hash from "js-sha256";

export default {
  name: Constant.NAME,
  methods: {
    async verifyAccess() {
      if (this.$route.name == Constant.ROUTER_TAG_ABOUT) {
        return null;
      }
      if (this.client && this.$store.state.authToken) {
        if (this.$route.name === Constant.ROUTER_TAG_LOGIN) {
          this.$router.push({ name: Constant.ROUTER_TAG_DASHBOARD });
        }
        if (this.$store.state.ready || (await this.getProfile())) {
          return true;
        }
      }
      if (
        this.$route.name !== Constant.ROUTER_TAG_INTRODUCING &&
        this.$route.name !== Constant.ROUTER_TAG_LOGIN
      ) {
        this.$router.push({ name: Constant.ROUTER_TAG_INTRODUCING });
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
    async setupDatabases() {
      const xia = await this.setupDatabaseForXIA();
      const user = await this.setupDatabaseForUser();
      this.$store.commit("registerIndexedDB", { xia, user });
      xia.put(Constant.IDB_XIA_DB_LIST, {
        id: this.$store.state.profile.userIdHashed,
      });
    },
    async setupDatabaseForXIA() {
      const resetFunction = this.revoke;
      const upgradeFunction = function(db, oldVersion) {
        // Remove the old data structure
        if (oldVersion != 0 && oldVersion < 3) {
          resetFunction(true, oldVersion);
          return;
        }
        if (oldVersion === 0) {
          // Databases List
          db.createObjectStore(Constant.IDB_XIA_DB_LIST, {
            keyPath: "id",
          });
        }
      };
      return openDB(Constant.NAME, Constant.IDB_XIA_VERSION, {
        upgrade: upgradeFunction,
      });
    },
    async setupDatabaseForUser() {
      const dbName = `${Constant.NAME}_${this.$store.state.profile.userIdHashed}`;
      return openDB(dbName, Constant.IDB_USER_VERSION, {
        upgrade(db) {
          // Contact
          db.createObjectStore(Constant.IDB_USER_CONTACT, {
            keyPath: "mid",
          });
          // Group Joined
          db.createObjectStore(Constant.IDB_USER_GROUP_JOINED, {
            keyPath: "id",
          });
          // Group Invited
          db.createObjectStore(Constant.IDB_USER_GROUP_INVITED, {
            keyPath: "id",
          });
          // Preview Message Box
          db.createObjectStore(Constant.IDB_USER_PREVIEW_MESSAGE_BOX, {
            keyPath: "target",
          });
          // Message Box
          db.createObjectStore(Constant.IDB_USER_MESSAGE_BOX, {
            keyPath: "id",
          }).createIndex("target", "target");
          // Settings
          db.createObjectStore(Constant.IDB_USER_SETTINGS, {
            keyPath: "id",
          });
        },
      });
    },
    async syncRevision() {
      const data = await this.$store.state.idbUser.get(
        Constant.IDB_USER_SETTINGS,
        Constant.IDB_USER_KEY_SETTINGS_REVISION
      );
      if (data) {
        this.revision = parseInt(data.value);
      } else {
        this.revision = await this.client.getLastOpRevision();
      }
    },
    async syncData() {
      const queryHandler = this.client;

      const status = await this.$store.state.idbUser.get(
        Constant.IDB_USER_SETTINGS,
        Constant.IDB_USER_KEY_SETTINGS_SYNC_STATUS
      );

      const updateData = (data, dataName) =>
        data.forEach((metadata) =>
          this.$store.state.idbUser.put(dataName, metadata)
        );

      const syncContact = async function() {
        const contactIds = await queryHandler.getAllContactIds();
        if (contactIds) {
          const contactData = await queryHandler.getContacts(contactIds);
          updateData(contactData, Constant.IDB_USER_CONTACT);
        }
      };

      const syncGroupJoined = async function() {
        const groupIdsJoined = await queryHandler.getGroupIdsJoined();
        if (groupIdsJoined) {
          const groupDataJoined = await queryHandler.getGroups(groupIdsJoined);
          updateData(groupDataJoined, Constant.IDB_USER_GROUP_JOINED);
        }
      };

      const syncGroupInvited = async function() {
        const groupIdsInvited = await queryHandler.getGroupIdsInvited();
        if (groupIdsInvited) {
          const groupDataInvited = await queryHandler.getGroups(
            groupIdsInvited
          );
          updateData(groupDataInvited, Constant.IDB_USER_GROUP_INVITED);
        }
      };

      if (status === true) return;
      await Promise.all([syncContact(), syncGroupJoined(), syncGroupInvited()]);
      await this.$store.state.idbUser.put(Constant.IDB_USER_SETTINGS, {
        id: Constant.IDB_USER_KEY_SETTINGS_SYNC_STATUS,
        value: true,
      });
    },
    async fetchChatIdsHashed() {
      for (let typeName of Constant.ALL_CONTACT_TYPES) {
        let cursor = await this.$store.state.idbUser
          .transaction(typeName)
          .store.openCursor();
        while (cursor) {
          this.$store.commit("registerChatIdHashed", {
            targetId: cursor.key,
            idHashed: hash.sha256(cursor.key),
          });
          cursor = await cursor.continue();
        }
      }
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
        this.opHandler(operations);
        await this.updateRevision(operations);
      } catch (e) {
        console.error(e);
        if (e.name == "TalkException") return this.revoke();
      }
      this.longPoll(opClient);
    },
    async opHandler(operations) {
      for (let operation of operations) {
        switch (operation.type) {
          case lineType.OpType.UPDATE_PROFILE: {
            const data = await this.client.getProfile();
            this.$store.commit("updateProfile", data);
            break;
          }
          case lineType.OpType.ADD_CONTACT:
          case lineType.OpType.UPDATE_CONTACT: {
            const data = await this.client.getContact(operation.param1);
            this.$store.state.idbUser.put(Constant.IDB_USER_CONTACT, data);
            break;
          }
          case lineType.OpType.ACCEPT_GROUP_INVITATION: {
            this.$store.state.idbUser.delete(
              Constant.IDB_USER_GROUP_INVITED,
              operation.param1
            );
            this.updateGroupInfo(operation.param1, true);
            break;
          }
          case lineType.OpType.LEAVE_GROUP: {
            this.clearMessageBox(operation.param1);
            this.$store.commit(
              "unregisterChatIdHashed",
              hash.sha256(operation.param1)
            );
            this.$store.state.idbUser.delete(
              Constant.IDB_USER_GROUP_JOINED,
              operation.param1
            );
            break;
          }
          case lineType.OpType.NOTIFIED_CANCEL_INVITATION_GROUP: {
            if (operation.param3.includes("\x1e")) {
              operation.param3 = operation.param3
                .split("\x1e")
                .find((id) => id === this.$store.state.profile.userId);
            }
            if (operation.param3 == this.$store.state.profile.userId) {
              this.$store.commit(
                "unregisterChatIdHashed",
                hash.sha256(operation.param1)
              );
              this.$store.state.idbUser.delete(
                Constant.IDB_USER_GROUP_INVITED,
                operation.param1
              );
            }
            break;
          }
          case lineType.OpType.NOTIFIED_KICKOUT_FROM_GROUP:
            if (operation.param3.includes("\x1e")) {
              operation.param3 = operation.param3
                .split("\x1e")
                .find((id) => id === this.$store.state.profile.userId);
            }
            if (operation.param3 == this.$store.state.profile.userId) {
              this.clearMessageBox(operation.param1);
              this.$store.commit(
                "unregisterChatIdHashed",
                hash.sha256(operation.param1)
              );
              this.$store.state.idbUser.delete(
                Constant.IDB_USER_GROUP_JOINED,
                operation.param1
              );
            } else {
              this.updateGroupInfo(operation.param1);
            }
            break;
          case lineType.OpType.NOTIFIED_UPDATE_GROUP:
          case lineType.OpType.NOTIFIED_INVITE_INTO_GROUP:
          case lineType.OpType.NOTIFIED_ACCEPT_GROUP_INVITATION:
          case lineType.OpType.NOTIFIED_LEAVE_GROUP:
          case lineType.OpType.CREATE_GROUP:
          case lineType.OpType.UPDATE_GROUP:
          case lineType.OpType.CANCEL_INVITATION_GROUP:
          case lineType.OpType.INVITE_INTO_GROUP:
          case lineType.OpType.KICKOUT_FROM_GROUP:
            this.updateGroupInfo(operation.param1);
            break;
          case lineType.OpType.SEND_MESSAGE:
          case lineType.OpType.RECEIVE_MESSAGE:
            // Add Target for index
            operation.message.target = (function(obj, profileId) {
              switch (obj.toType) {
                case lineType.MIDType.USER:
                  if (obj.from_ == profileId) {
                    return obj.to;
                  } else {
                    return obj.from_;
                  }
                case lineType.MIDType.ROOM:
                case lineType.MIDType.GROUP:
                  return obj.to;
              }
            })(operation.message, this.$store.state.profile.userId);
            // Uint8Array to String
            operation.message.createdTime = operation.message.createdTime.toString();
            operation.message.deliveredTime = operation.message.deliveredTime.toString();
            this.$store.state.idbUser.put(
              Constant.IDB_USER_PREVIEW_MESSAGE_BOX,
              operation.message
            );
            this.$store.state.idbUser.put(
              Constant.IDB_USER_MESSAGE_BOX,
              operation.message
            );
            break;
        }
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
    async updateGroupInfo(groupId, accepted = false) {
      const data = await this.client.getGroup(groupId);
      if (
        accepted ||
        (await this.$store.state.idbUser.get(
          Constant.IDB_USER_GROUP_JOINED,
          data.id
        ))
      ) {
        this.$store.state.idbUser.put(Constant.IDB_USER_GROUP_JOINED, data);
      } else {
        this.$store.state.idbUser.put(Constant.IDB_USER_GROUP_INVITED, data);
        this.$store.commit("registerChatIdHashed", {
          targetId: groupId,
          idHashed: hash.sha256(groupId),
        });
      }
    },
    async clearMessageBox(targetId) {
      this.$store.state.idbUser.delete(
        Constant.IDB_USER_PREVIEW_MESSAGE_BOX,
        targetId
      );
      let cursor = await this.$store.state.idbUser
        .transaction(Constant.IDB_USER_MESSAGE_BOX, "readwrite")
        .store.openCursor();
      while (cursor) {
        if (cursor.value.target == targetId) {
          cursor.delete();
        }
        cursor = await cursor.continue();
      }
    },
    async revoke(reset = false, idbOldVersion = -1) {
      Constant.ALL_COOKIES.forEach((name) => this.$cookies.remove(name));
      window.localStorage.clear();
      window.sessionStorage.clear();
      if (reset) {
        let idbNames = [];
        if (idbOldVersion >= 3 || idbOldVersion == -1) {
          const idbXia = this.$store.state.idbXia
            ? this.$store.state.idbXia
            : await this.setupDatabaseForXIA();
          const allIdbUsers = await idbXia.getAllKeys(Constant.IDB_XIA_DB_LIST);
          if (allIdbUsers.length > 0) {
            idbNames = allIdbUsers.map((name) => `${Constant.NAME}_${name}`);
            await idbXia.clear(Constant.IDB_XIA_DB_LIST);
          }
        } else if (idbOldVersion != 0) {
          await deleteDB(Constant.NAME);
        }
        await Promise.all(idbNames.map((name) => deleteDB(name)));
      }
      window.location.reload();
    },
  },
  computed: {
    checkReady() {
      return this.$store.state.ready;
    },
  },
  watch: {
    $route() {
      this.verifyAccess();
    },
    revision() {
      this.$store.state.idbUser.put(Constant.IDB_USER_SETTINGS, {
        id: Constant.IDB_USER_KEY_SETTINGS_REVISION,
        value: this.revision.toString(),
      });
    },
  },
  data() {
    return {
      client: null,
      revision: 0,
    };
  },
  async created() {
    if (this.$cookies.isKey(Constant.COOKIE_ACCESS_KEY)) {
      const authToken = this.$cookies.get(Constant.COOKIE_ACCESS_KEY);
      this.$store.commit("registerAuthToken", authToken);
      this.client = lineClient(Constant.LINE_QUERY_PATH, authToken);
    }
    if (await this.verifyAccess()) {
      await this.setupDatabases();
      await this.syncData();
      await this.fetchChatIdsHashed();
      await this.syncRevision();
      this.opListener();
      this.$store.commit("setReady");
    }
    this.$store.commit("setLoaded");
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
