<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="chat">
    <div class="header">
      <button id="back" @click="back">
        <svg
          alt="back"
          viewBox="0 0 16 16"
          class="back-arrow"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <h1>NAME</h1>
    </div>
    <div id="msg-container"></div>
    <div id="msg-input-box">
      <textarea id="msg-input"></textarea>
      <input type="submit" id="msg-submit" value="Send" />
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

export default {
  name: "Chat",
  methods: {
    back() {
      this.$router.push({ name: Constant.ROUTER_TAG_HOME });
    },
    addMessage(msgOriginType, msgOrigin, msg) {
      msgOriginType = msgOriginType || "self";
      document.getElementById("msg-container").append(
        `<div class="${msgOriginType}"><h3 class="name">${msgOrigin}</h3><p>${msg}</p></div>`
      );
    },
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
  display: flex;
  text-align: left;
}

.header h1 {
  margin-left: 10px;
}

.header #back {
  width: 60px;
  height: 60px;
  color: #009933;
  background: rgba(0, 0, 0, 0);
  border-radius: 35px;
  border-color: #009933;
}

#msg-container {
  min-width: 100px;
  min-height: 500px;
  border-style: solid;
  border-width: 1px;
  margin: 10px auto;
  padding: 10px 10px 10px 10px;
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
  height: 50px;
  margin: 0 auto;
}

#msg-input {
  width: 89%;
  height: 35px;
  margin-right: 1%;
}

#msg-submit {
  width: 10%;
  height: 40px;
  background: rgba(0, 0, 0, 0);
}

#msg-submit:hover {
  background: rgba(0, 0, 0, 0);
}

#msg-submit:active {
  background: rgba(0, 0, 0, 0.1);
}
</style>
