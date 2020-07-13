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
        <input type="submit" id="msg-submit" value="Send" />
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
