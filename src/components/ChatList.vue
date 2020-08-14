<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="chat-list">
    <div
      class="chat-item"
      v-for="(item, itemId) in getDisplayMessages"
      :key="itemId"
    >
      <a href="#" @click.prevent="enterChat(item.id)">
        <div class="contact">
          <img
            class="picture-icon"
            v-if="item.pictureStatus"
            :src="`${mediaURL}/${item.pictureStatus}`"
          />
          <img class="picture-icon" v-else src="@/assets/logo.svg" />
          <div class="row-box">
            <h3 class="text-box">{{ item.displayName }}</h3>
            <p class="text-box">{{ item.lastMessage }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import hash from "js-sha256";
import int64 from "node-int64";

import lineType from "@/computes/line/line_types.js";

export default {
  name: "ChatList",
  methods: {
    enterChat(chatId) {
      this.$router.push({
        name: Constant.ROUTER_TAG_CHAT,
        params: { targetIdHashed: chatId },
      });
    },
    async getContactInfo(message) {
      if (!this.$store.state.ready) return;
      switch (message.toType) {
        case lineType.MIDType.USER: {
          const targetId =
            message.from_ == this.$store.state.profile.userId
              ? message.to
              : message.from_;
          let contactData = await this.$store.state.idbUser.get(
            Constant.IDB_USER_CONTACT,
            targetId
          );
          if (!contactData) {
            contactData = {};
            contactData.displayName = "Unknown";
          }
          return contactData;
        }
        case lineType.MIDType.GROUP: {
          let groupData = await this.$store.state.idbUser.get(
            Constant.IDB_USER_GROUP_JOINED,
            message.to
          );
          if (!groupData) {
            groupData = {};
            groupData.displayName = "Unknown";
          } else {
            groupData.displayName = groupData.name;
            delete groupData.name;
          }
          return groupData;
        }
        default:
          console.error(
            "Unknown toType in getContactInfo with " + message.toType
          );
      }
    },
    async waitForFetchDisplayMessage() {
      setTimeout(() => {
        if (this.$store.state.ready) {
          this.fetchDisplayMessage();
        } else {
          this.waitForFetchDisplayMessage();
        }
      }, Constant.RETRY_TIMEOUT);
    },
    async fetchDisplayMessage() {
      let cursor = await this.$store.state.idbUser
        .transaction(Constant.IDB_USER_PREVIEW_MESSAGE_BOX)
        .store.openCursor();
      while (cursor) {
        this.updateDisplayMessage(cursor.value);
        cursor = await cursor.continue();
      }
      await this.fetchDisplayMessage();
    },
    async updateDisplayMessage(message) {
      const contactData = await this.getContactInfo(message);
      const displayName = contactData ? contactData.displayName : null;
      const pictureStatus = contactData ? contactData.pictureStatus : null;
      const targetIdHashed = hash.sha256(message.target);
      const lastMessage = (function(obj) {
        switch (obj.contentType) {
          case lineType.ContentType.IMAGE:
            return "(Image)";
          case lineType.ContentType.STICKER:
            return "(Sticker)";
          default:
            return obj.text;
        }
      })(message);
      message.createdTime = new int64(message.createdTime);
      if (
        message.target in this.previewMessageBox &&
        this.previewMessageBox[message.target].time.compare(
          message.createdTime
        ) > 0
      )
        return;
      this.$set(this.previewMessageBox, message.target, {
        id: targetIdHashed,
        time: message.createdTime,
        displayName,
        pictureStatus,
        lastMessage,
      });
    },
  },
  computed: {
    getDisplayMessages() {
      const data = Object.values(this.previewMessageBox);
      data.sort(function(a, b) {
        return b.time.compare(a.time);
      });
      return data;
    },
  },
  data() {
    return {
      previewMessageBox: {},
      mediaURL: Constant.LINE_MEDIA_URL,
    };
  },
  mounted() {
    this.waitForFetchDisplayMessage();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#chat-list {
  margin: 10px 10px 10px 10px;
  width: 500px;
  height: 350px;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  overflow: scroll;
}

.chat-item {
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
  border-radius: 50px;
  margin-right: 10px;
}

.row-box {
  width: 420px;
  height: auto;
}

.text-box {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.contact h3 {
  width: auto;
  height: 30px;
  font-size: 20px;
  margin: 0;
}

.contact p {
  width: auto;
  height: 15px;
  font-size: 12px;
  margin: 0;
}

@media screen and (max-width: 780px) {
  .row-box {
    width: 70%;
    height: auto;
  }
}
</style>
