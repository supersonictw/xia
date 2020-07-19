<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="contact-list">
    <div id="contact-list-type">
      <a
        v-for="(item, itemId) in contactType"
        :key="itemId"
        :id="itemId"
        :class="getTabColor(itemId)"
        @click.prevent="switchTab"
        href="#"
        >{{ item }}</a
      >
    </div>
    <div
      class="contact-item"
      v-for="(item, itemId) in getTabData()"
      :key="itemId"
    >
      <a :title="getItemTitle(item)" href="#">
        <div class="contact">
          <img
            class="picture-icon"
            v-if="item.picturePath"
            :src="mediaURL + item.picturePath"
          />
          <img class="picture-icon" v-else src="@/assets/logo.svg" />
          <div>
            <h3>{{ subDisplayName(item.displayName) }}</h3>
            <p>{{ subStatusMessage(item.statusMessage) }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import substring from "unicode-substring";

export default {
  name: "ChatList",
  methods: {
    getTabData() {
      if (!this.$store.state.ready) return;
      switch (this.tabId) {
        case 0:
          return this.contactUserInfo;
        case 1:
          return this.contactGroupInfo;
        default:
          this.$router.replace({ name: Constant.ROUTER_TAG_NOT_FOUND });
      }
    },
    getTabColor(e) {
      return this.tabId == e ? "actived" : "";
    },
    switchTab(e) {
      const tabId = parseInt(e.target.id);
      const data = [this.contactUser, this.contactGroup];
      if (tabId >= data.length || tabId < 0) {
        this.$router.replace({ name: Constant.ROUTER_TAG_NOT_FOUND });
      }
      this.tabId = tabId;
    },
    getItemTitle(item) {
      if (this.tabId == 1) {
        return item.statusMessage.includes(Constant.GROUP_INVITING_ICON)
          ? `[Inviting] ${item.displayName}`
          : `${item.displayName}`;
      }
      return item.displayName;
    },
    subDisplayName(displayName) {
      return displayName.length < Constant.CONTACT_ROW_DISPLAY_NAME_LENGTH
        ? displayName
        : `${substring(
            displayName,
            0,
            Constant.CONTACT_ROW_DISPLAY_NAME_LENGTH
          )}...`;
    },
    subStatusMessage(statusMessage) {
      return statusMessage.length < Constant.CONTACT_ROW_STATUS_MESSAGE_LENGTH
        ? statusMessage
        : `${substring(
            statusMessage,
            0,
            Constant.CONTACT_ROW_STATUS_MESSAGE_LENGTH
          )}...`;
    },
  },
  computed: {
    contactUserInfo() {
      const layout = [];
      for (let user of this.contactUser) {
        let data = this.$store.getters.contactInfo.get(user);
        layout.push(data);
      }
      return layout.sort(function(a, b) {
        if (a.displayName < b.displayName) {
          return -1;
        }
        if (a.displayName > b.displayName) {
          return 1;
        }
        return 0;
      });
    },
    contactGroupInfo() {
      const layout = [];
      for (let groupIndex in this.contactGroup) {
        let group = this.contactGroup[groupIndex];
        let data = this.$store.getters.groupInfo.get(group);
        data.statusMessage = "";
        if (groupIndex >= this.contactGroupJoined.length) {
          data.statusMessage += `${Constant.GROUP_INVITING_ICON} `;
        }
        data.statusMessage += `Members: ${
          group.members ? group.members.length : 0
        }`;
        layout.push(data);
      }
      return layout.sort(function(a, b) {
        if (a.displayName < b.displayName) {
          return -1;
        }
        if (a.displayName > b.displayName) {
          return 1;
        }
        return 0;
      });
    },
    contactGroup() {
      return [].concat(this.contactGroupJoined, this.contactGroupInvited);
    },
  },
  data() {
    return {
      mediaURL: Constant.LINE_MEDIA_URL,
      tabId: 0,
      contactType: ["Contact", "Group"],
      contactUser: this.$store.state.contactIds,
      contactGroupJoined: this.$store.state.groupJoinedIds,
      contactGroupInvited: this.$store.state.groupInvitedIds,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#contact-list {
  margin: 10px 10px 10px 10px;
  width: 250px;
  height: 350px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0 20px 10px 20px;
  overflow: scroll;
}

#contact-list-type {
  position: sticky;
  top: 0;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

#contact-list-type a {
  padding: 5px 7px 5px 7px;
  margin: 0 10px 0 10px;
  border-radius: 10px;
}

#contact-list-type a:hover,
#contact-list-type .actived {
  color: #fff;
  background-color: #33cc55;
}

.contact-item {
  text-align: left;
  margin: 10px 0 10px 0;
}

.contact {
  display: flex;
  width: auto;
  height: 50px;
  color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
}

.contact .picture-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.contact h3 {
  width: auto;
  height: 18px;
  font-size: 15px;
  margin: 5px auto;
}

.contact p {
  width: auto;
  height: 15px;
  font-size: 12px;
  margin: 5px auto;
}

.picture-icon {
  width: 90px;
  height: 90px;
  border-radius: 90px;
}
</style>
