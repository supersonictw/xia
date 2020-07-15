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
        <h2>{{ TargetName }}</h2>
      </div>
      <div id="msg-container"></div>
      <div id="msg-input-box">
        <textarea id="msg-input"></textarea>
        <a title="Send" href="#" @click.prevent="">
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
import Back from "@/components/Back.vue";

export default {
  name: "Chat",
  components: {
    Back,
  },
  methods: {
    addMessage(msgOriginType, msgOrigin, msg) {
      msgOriginType = msgOriginType || "self";
      document
        .getElementById("msg-container")
        .append(
          `<div class="${msgOriginType}"><h3 class="name">${msgOrigin}</h3><p>${msg}</p></div>`
        );
    },
  },
  data() {
    return {
      TargetName: "Contact",
    };
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
  min-height: 500px;
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
