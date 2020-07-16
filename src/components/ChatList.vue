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
      v-for="(item, itemId) in getDisplayMessages()"
      :key="itemId"
    >
      <a href="#" :id="item.id" @click.prevent="enterChat">
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

export default {
  name: "ChatList",
  methods: {
    enterChat() {
      this.$router.push({ name: Constant.ROUTER_TAG_CHAT });
    },
    subLastMessage(lastMessage) {
      return lastMessage.length < Constant.CHAT_ROW_TEXT_LENGTH
        ? lastMessage
        : `${substring(lastMessage, 0, Constant.CHAT_ROW_TEXT_LENGTH)}...`;
    },
    getDisplayMessages() {
      let generator = function*(self) {
        for (let message of self.displayMessages) {
          let targetId = message.to;
          let contactData = self.$store.getters.contactInfoForChatList.get(
            targetId
          );
          yield {
            id: hash.sha256(targetId),
            displayName: contactData.displayName,
            picturePath: contactData.picturePath,
            lastMessage: message.text,
          };
        }
      };
      return generator(this);
    },
  },
  data() {
    return {
      mediaURL: this.$store.state.mediaURL,
      displayMessages: [],
    };
  },
  created(){
      console.log(this.$store.state.operations)
  }
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
