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
          <img class="picture-icon" :src="mediaURL + item.picturePath" />
          <div>
            <h3>{{ item.displayName }}</h3>
            <p>{{ subLastMessage(item.lastMessage) }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import hash from "js-sha256";
import substring from "unicode-substring";

import lineClient from "@/computes/line.js";
import lineType from "@/computes/line/line_types.js";

export default {
  name: "ChatList",
  methods: {
    enterChat(chatId) {
      this.$router.push({
        name: Constant.ROUTER_TAG_CHAT,
        params: { targetEncryptedId: chatId },
      });
    },
    subLastMessage(lastMessage) {
      if (lastMessage == null) return;
      return lastMessage.length < Constant.CHAT_ROW_TEXT_LENGTH
        ? lastMessage
        : `${substring(lastMessage, 0, Constant.CHAT_ROW_TEXT_LENGTH)}...`;
    },
    getContactInfo(message) {
      let contactData = null;
      switch (message.toType) {
        case lineType.MIDType.USER: {
          const targetId =
            message.from_ == this.$store.state.profile.UserId
              ? message.to
              : message.from_;
          if (this.$store.getters.contactInfo.has(targetId)) {
            contactData = this.$store.getters.contactInfo.get(targetId);
          } else {
            contactData = lineClient(
              Constant.LINE_QUERY_PATH,
              this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
            ).getContact(targetId);
            this.$store.commit("pushContactMetaData", {
              typeName: lineType.SyncCategory.CONTACT,
              data: contactData,
            });
          }
          return contactData;
        }
        case lineType.MIDType.ROOM:
        case lineType.MIDType.GROUP: {
          if (this.$store.getters.groupInfo.has(message.to)) {
            contactData = this.$store.getters.groupInfo.get(message.to);
          } else {
            contactData = lineClient(
              Constant.LINE_QUERY_PATH,
              this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
            ).getGroup(message.to);
            this.$store.commit("pushContactMetaData", {
              typeName: lineType.SyncCategory.GROUP,
              data: contactData,
            });
          }
          return contactData;
        }
        default:
          console.error(
            "Unknown toType in getContactInfo with " + message.toType
          );
      }
    },
  },
  computed: {
    getDisplayMessages() {
      const messageBox = [];
      for (let [targetId, message] of this.$store.getters.previewMessageBox) {
        let contactData = this.getContactInfo(message);
        let targetEncryptedId = hash.sha256(targetId);
        this.$store.commit("registerChatEncryptedId", {
          targetEncryptedId,
          targetId,
        });
        messageBox.push({
          id: targetEncryptedId,
          displayName: contactData.displayName,
          picturePath: contactData.picturePath,
          lastMessage: message.text,
        });
      }
      return messageBox.reverse();
    },
  },
  data() {
    return {
      mediaURL: Constant.LINE_MEDIA_URL,
    };
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
  margin-right: 10px;
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

.picture-icon {
  width: 90px;
  height: 90px;
  border-radius: 90px;
}
</style>
