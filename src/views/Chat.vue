<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div class="view">
    <Back />
    <div id="chat">
      <div class="header">
        <h2>{{ chatRoomTitle }}</h2>
      </div>
      <div id="msg-container">
        <div
          :class="getOriginType(item)"
          v-for="(item, itemId) in getMessages"
          :key="itemId"
        >
          <h3 v-if="item.origin != getMyUserId" class="name">
            {{ getUserInfo(item.origin).displayName }}
          </h3>
          <div class="content">
            <p v-if="item.type == 1">
              <img :src="mediaObjects[item.id]" />
            </p>
            <p v-else>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div id="msg-input-box">
        <VEmojiPicker
          v-show="showEmojiBoxCheckpoint"
          id="emoji-box"
          @select="addEmoji"
        />
        <a
          id="emoji-box-opener"
          title="Emoji"
          href="#"
          @click.prevent="showEmojiBox"
        >
          <div class="icon">
            <img alt="Emoji" src="@/assets/icons/emoji.svg" />
          </div>
        </a>
        <textarea
          id="msg-input"
          v-model="inputText"
          @keydown.enter.exact="sendTextMessage"
        ></textarea>
        <a title="Send" href="#" @click.prevent="sendTextMessage">
          <div class="icon">
            <img alt="Send" src="@/assets/icons/send.svg" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import Back from "@/components/Back.vue";

import axios from "axios";
import VEmojiPicker from "v-emoji-picker";

import lineClient from "@/computes/line.js";
import lineType from "@/computes/line/line_types.js";

export default {
  name: "Chat",
  components: {
    Back,
    VEmojiPicker,
  },
  methods: {
    async fetchChatRoomInformation() {
      if (this.targetId.startsWith("u")) {
        this.chatRoomInfo = await this.$store.state.idbUser.get(
          Constant.IDB_USER_CONTACT,
          this.targetId
        );
        this.chatRoomTitle = this.chatRoomInfo.displayName;
        this.chatRoomType = lineType.MIDType.USER;
      } else if (this.targetId.startsWith("c")) {
        this.chatRoomInfo = await this.$store.state.idbUser.get(
          Constant.IDB_USER_GROUP_JOINED,
          this.targetId
        );
        this.chatRoomTitle = this.chatRoomInfo.name;
        this.chatRoomType = lineType.MIDType.GROUP;
      } else {
        this.$router.push({
          name: Constant.ROUTER_TAG_ERROR,
          params: { reason: "Unknown Chat Room type." },
        });
      }
    },
    getOriginType(message) {
      return message.origin === this.getMyUserId ? "self" : "another";
    },
    async fetchDisplayMessage() {
      if (!this.$store.state.ready)
        setTimeout(this.fetchDisplayMessage, Constant.RETRY_TIMEOUT);
      let cursor = await this.$store.state.idbUser
        .transaction(Constant.IDB_USER_MESSAGE_BOX)
        .store.openCursor();
      while (cursor) {
        if (cursor.value.target == this.targetId) {
          if (this.messages.length > Constant.CHAT_DISPLAY_ROW_LITMIT)
            this.messages.shift();
          if (
            !this.messageIdLastSeen ||
            parseInt(this.messageIdLastSeen) < parseInt(cursor.value.id)
          ) {
            this.messages.push(cursor.value);
            this.messageIdLastSeen = cursor.value.id;
            this.sendReadTag(cursor.value.id);
          }
        }
        cursor = await cursor.continue();
      }
      await this.fetchDisplayMessage();
    },
    async downloadImage(imageSource) {
      return await axios(imageSource, {
        method: "GET",
        responseType: "arraybuffer",
        headers: {
          Accept: "image/jpeg",
          "X-Line-Access": this.$store.state.authToken,
          "X-Line-Application": Constant.LINE_APPLICATION_IDENTITY,
        },
      });
    },
    async getStickerImageResource(messageId, contentMetadata) {
      if (messageId in this.mediaObjects) return;
      const stickerVersion =
        Math.floor(contentMetadata.STKVER / 1000000) +
        "/" +
        Math.floor(contentMetadata.STKVER / 1000) +
        "/" +
        (contentMetadata.STKVER % 1000);
      const stickerURL = `${Constant.LINE_STICKER_URL}/products/${stickerVersion}/${contentMetadata.STKPKGID}/${Constant.LINE_STICKER_PLATFORM}/stickers/${contentMetadata.STKID}.png`;
      this.$set(this.mediaObjects, messageId, stickerURL);
    },
    async getImageResource(messageId) {
      if (messageId in this.mediaObjects) return;
      const imageURL = `${Constant.LINE_MEDIA_URL}/os/m/${messageId}`;
      const imageXHR = await this.downloadImage(imageURL);
      const imageB64 =
        "data:image/jpeg;base64," +
        Buffer.from(imageXHR.data).toString("base64");
      this.$set(this.mediaObjects, messageId, imageB64);
    },
    showEmojiBox() {
      this.showEmojiBoxCheckpoint = !this.showEmojiBoxCheckpoint;
    },
    addEmoji(emoji) {
      this.inputText += emoji.data;
    },
    sendTextMessage() {
      this.moveToBottom();
      if (this.inputText.length < 1) return;
      this.client.sendMessage(
        Constant.THRIFT_DEFAULT_SEQ,
        new lineType.Message({
          type: lineType.ContentType.NONE,
          to: this.targetId,
          text: this.inputText,
        })
      );
      setTimeout(() => (this.inputText = ""), 100);
    },
    getUserInfo(userId) {
      switch (this.chatRoomType) {
        case lineType.MIDType.USER:
          return this.chatRoomInfo;
        case lineType.MIDType.GROUP:
          return this.chatRoomInfo.members.find((user) => user.mid == userId);
        default:
          this.$router.push({
            name: Constant.ROUTER_TAG_ERROR,
            params: { reason: "Contact Metadata not synchronized completely." },
          });
      }
    },
    sendReadTag(messageId) {
      const messageBoxElement = document.getElementById("msg-container");
      if (
        messageBoxElement &&
        messageBoxElement.scrollTop + messageBoxElement.clientHeight ==
          messageBoxElement.scrollHeight
      ) {
        setTimeout(this.moveToBottom, 100);
      }
      this.client.sendChatChecked(
        Constant.THRIFT_DEFAULT_SEQ,
        this.targetId,
        messageId
      );
    },
    moveToBottom() {
      const messageBoxElement = document.getElementById("msg-container");
      if (messageBoxElement)
        messageBoxElement.scroll(0, messageBoxElement.scrollHeight);
    },
  },
  computed: {
    targetId() {
      if (!this.$store.state.ready) {
        this.$router.replace({ name: Constant.ROUTER_TAG_DASHBOARD });
        return "";
      }
      if (this.$store.state.chatIdsHashed.has(this.targetIdHashed))
        return this.$store.state.chatIdsHashed.get(this.targetIdHashed);
      this.$router.replace({ name: Constant.ROUTER_TAG_NOT_FOUND });
      return "";
    },
    getMessages() {
      let layout = [];
      this.messages.forEach((message) => {
        let layoutType = lineType.ContentType.NONE;
        let layoutMessage = "";
        switch (message.contentType) {
          case lineType.ContentType.IMAGE:
            this.getImageResource(message.id);
            layoutType = lineType.ContentType.IMAGE;
            break;
          case lineType.ContentType.STICKER:
            this.getStickerImageResource(message.id, message.contentMetadata);
            layoutType = lineType.ContentType.IMAGE;
            break;
          default:
            layoutMessage = message.text;
        }
        layout.push({
          id: message.id,
          type: layoutType,
          origin: message.from_,
          content: layoutMessage,
        });
      });
      return layout;
    },
    getMyUserId() {
      return this.$store.state.profile.userId;
    },
  },
  props: ["targetIdHashed"],
  data() {
    return {
      chatRoomTitle: "Unknown",
      chatRoomType: 0,
      chatRoomInfo: {},
      inputText: "",
      messages: [],
      mediaObjects: {},
      messageIdLastSeen: null,
      showEmojiBoxCheckpoint: false,
      client: lineClient(Constant.LINE_QUERY_PATH, this.$store.state.authToken),
    };
  },
  async mounted() {
    await this.fetchChatRoomInformation();
    this.fetchDisplayMessage();
  },
};
</script>

<style scoped>
.view {
  margin: 60px auto;
}

#chat {
  width: 90%;
  min-width: 300px;
  margin: 0 auto;
}

.header {
  height: 60px;
  display: flex;
  text-align: left;
}

.header h2 {
  margin-left: 10px;
}

#msg-container {
  min-width: 100px;
  height: 500px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
  overflow: scroll;
}

#msg-container .self {
  text-align: right;
}

#msg-container .another {
  text-align: left;
}

.content img {
  max-width: 300px;
  max-height: 300px;
  overflow: hidden;
}

#msg-input-box {
  display: inline-flex;
  width: 70%;
  min-height: 60px;
  margin: 0 auto;
}

#emoji-box {
  margin-right: 1%;
}

#msg-input {
  width: 89%;
  height: 70px;
  margin-left: 1%;
  margin-right: 1%;
  font-size: 15px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.icon {
  width: 50px;
  height: 50px;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0);
}

.icon:hover {
  background: rgba(0, 0, 0, 0.3);
}

.icon:active {
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 780px) {
  #emoji-box,
  #emoji-box-opener {
    display: none;
  }
}
</style>
