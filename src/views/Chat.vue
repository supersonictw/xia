<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div>
    <Back />
    <div id="chat">
      <div class="header">
        <h2>{{ chatTitle }}</h2>
      </div>
      <div id="msg-container">
        <div
          :class="getOriginType(item)"
          v-for="(item, itemId) in getMessages"
          :key="itemId"
        >
          <h3 v-if="item.from_ != getMyUserId" class="name">
            {{ getUserInfo(item.from_).displayName }}
          </h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <div id="msg-input-box">
        <textarea id="msg-input" v-model="inputText"></textarea>
        <a title="Send" href="#" @click.prevent="sendTextMessage">
          <div id="msg-submit">
            <svg
              alt="Send"
              viewBox="0 0 16 16"
              id="msg-submit-arrow"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.146 5.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 9l-2.647-2.646a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                d="M3 2.5a.5.5 0 0 0-.5.5v4A2.5 2.5 0 0 0 5 9.5h8.5a.5.5 0 0 0 0-1H5A1.5 1.5 0 0 1 3.5 7V3a.5.5 0 0 0-.5-.5z"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import Back from "@/components/Back.vue";

import lineClient from "@/computes/line.js";
import lineType from "@/computes/line/line_types.js";

export default {
  name: "Chat",
  components: {
    Back,
  },
  methods: {
    getOriginType(message) {
      return message.from_ === this.getMyUserId ? "self" : "another";
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
      this.inputText = "";
    },
    getUserInfo(userId) {
      console.log(this.$store.getters.contactInfo.has(userId));
      if (this.$store.getters.contactInfo.has(userId)) {
        return this.$store.getters.contactInfo.get(userId);
      } else {
        let contactData = this.client.getContact(userId);
        this.$store.dispatch("pushContactMetaDataForAsync", {
          typeName: lineType.SyncCategory.CONTACT,
          data: contactData,
        });
        return contactData;
      }
    },
    moveToBottom() {
      const messageBoxElement = document.getElementById("msg-container");
      messageBoxElement.scroll(0, messageBoxElement.scrollHeight);
    },
  },
  computed: {
    targetId() {
      if (this.$store.state.chatEncryptedIds.has(this.targetEncryptedId))
        return this.$store.state.chatEncryptedIds.get(this.targetEncryptedId);
      this.$router.replace({ name: Constant.ROUTER_TAG_NOT_FOUND });
      return "";
    },
    chatTitle() {
      if (this.targetId.startsWith("u")) {
        if (this.$store.getters.contactInfo.has(this.targetId))
          return this.$store.getters.contactInfo.get(this.targetId).displayName;
      }
      if (this.targetId.startsWith("c")) {
        if (this.$store.getters.groupInfo.has(this.targetId))
          return this.$store.getters.groupInfo.get(this.targetId).displayName;
      }
      return "Unknown";
    },
    getMessages() {
      return this.$store.getters.messageBox.get(this.targetId);
    },
    getMyUserId() {
      return this.$store.state.profile.UserId;
    },
  },
  watch: {
    getMessages() {
      const messageBoxElement = document.getElementById("msg-container");
      if (
        messageBoxElement.scrollTop + messageBoxElement.clientHeight ==
        messageBoxElement.scrollHeight
      ) {
        setTimeout(this.moveToBottom, 100);
      }
    },
  },
  props: ["targetEncryptedId"],
  data() {
    return {
      inputText: "",
      client: lineClient(
        Constant.LINE_QUERY_PATH,
        this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
      ),
    };
  },
  mounted() {
    this.moveToBottom();
  },
};
</script>

<style scoped>
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

#msg-input-box {
  display: inline-flex;
  width: 70%;
  height: 60px;
  margin: 0 auto;
}

#msg-input {
  width: 89%;
  height: 60px;
  margin-right: 1%;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

#msg-submit {
  width: 60px;
  height: 60px;
  color: #666;
  border: 1px solid #999;
  border-radius: 60px;
  background: rgba(0, 0, 0, 0);
}

#msg-submit:hover {
  background: rgba(0, 0, 0, 0.1);
}

#msg-submit:active {
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
}

#msg-submit-arrow {
  width: 35px;
  height: 35px;
  padding-top: 13px;
}
</style>
