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
      <a href="#">
        <div class="contact">
          <img class="picture-icon" :src="item.picturePath" />
          <div>
            <h3>{{ item.displayName }}</h3>
            <p>{{ item.statusMessageAbstracted }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

export default {
  name: "ChatList",
  methods: {
    getTabData() {
      let data = [this.contactUser, this.contactGroup];
      if (this.tabId >= data.length) {
        this.$router.replace({ name: Constant.ROUTER_TAG_NOT_FOUND });
      }
      return data[this.tabId];
    },
    getTabColor(e) {
      return this.tabId == e ? "actived" : "";
    },
    switchTab(e) {
      let tabId = parseInt(e.target.id);
      let data = [this.contactUser, this.contactGroup];
      if (tabId >= data.length) {
        this.$router.replace({ name: Constant.ROUTER_TAG_NOT_FOUND });
      }
      this.tabId = tabId;
    },
    subStatusMessage(statusMessage) {
      return statusMessage.length < Constant.CHAT_ROW_TEXT_LENGTH
        ? statusMessage
        : `${String.substring(0, Constant.CHAT_ROW_TEXT_LENGTH)}...`;
    },
    async addContactItem(
      tabId,
      contactId,
      displayName,
      picturePath,
      statusMessage
    ) {
      let data = [this.contactUser, this.contactGroup];
      if (tabId >= data.length) {
        this.$router.replace({ name: Constant.ROUTER_TAG_NOT_FOUND });
      }
      data[tabId].push({
        contactId,
        displayName,
        picturePath,
        statusMessageAbstracted: this.subStatusMessage(statusMessage),
      });
    },
  },
  data() {
    return {
      mediaURL: `${Constant.LINE_USE_HTTPS ? "https" : "http"}://${
        Constant.LINE_MEDIA_HOST
      }`,
      tabId: 0,
      contactType: ["Contact", "Group"],
      contactUser: [],
      contactGroup: [],
    };
  },
  mounted() {
    console.log(this.$store.state.contactData);
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#contact-list {
  margin: 10px 10px 10px 10px;
  width: 200px;
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
