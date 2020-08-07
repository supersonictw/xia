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
    <div id="profile">
      <img class="icon" v-if="picturePath" :src="mediaURL + picturePath" />
      <img class="icon" v-else src="@/assets/logo.svg" />
      <h1 id="displayName">{{ displayName }}</h1>
      <div id="statusMessage-box">
        <p id="statusMessage">{{ statusMessage }}</p>
      </div>
    </div>
    <div id="contact-buttons">
      <div class="contact-button">
        <a href="#" @click.prevent="enterChat"
          ><svg
            alt="Chat"
            viewBox="0 0 16 16"
            class="contact-button-icon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
            />
            <path
              d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            /></svg
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import Back from "@/components/Back.vue";

export default {
  name: "Contact",
  components: {
    Back,
  },
  methods: {
    updateProfile() {
      let contactInfo = null;
      if (this.targetId.startsWith("u")) {
        if (this.$store.getters.contactInfo.has(this.targetId))
          contactInfo = this.$store.getters.contactInfo.get(this.targetId);
      }
      if (this.targetId.startsWith("c")) {
        if (this.$store.getters.groupInfo.has(this.targetId))
          contactInfo = this.$store.getters.groupInfo.get(this.targetId);
      }
      if (contactInfo) {
        this.displayName = contactInfo.displayName;
        this.statusMessage = contactInfo.statusMessage;
        this.picturePath = contactInfo.picturePath;
      }
    },
    enterChat() {
      this.$router.push({
        name: Constant.ROUTER_TAG_CHAT,
        params: { targetEncryptedId: this.targetEncryptedId },
      });
    },
  },
  computed: {
    targetId() {
      if (!this.$store.state.ready) {
        this.$router.replace({ name: Constant.ROUTER_TAG_DASHBOARD });
        return "";
      }
      if (this.$store.getters.chatIdByHash.has(this.targetEncryptedId))
        return this.$store.getters.chatIdByHash.get(this.targetEncryptedId);
      this.$router.replace({ name: Constant.ROUTER_TAG_NOT_FOUND });
      return "";
    },
    statusMessageWithLines() {
      return this.statusMessage.replace(/\r\n/g, "<br />");
    },
  },
  props: ["targetEncryptedId"],
  data() {
    return {
      displayName: "Loading...",
      statusMessage: "Loading...",
      picturePath: null,
      mediaURL: Constant.LINE_MEDIA_URL,
    };
  },
  created() {
    this.updateProfile();
  },
};
</script>

<style scoped>
.view {
  margin: 60px auto;
}

#profile {
  width: 60%;
  min-height: 300px;
  background: rgba(125, 215, 25, 0.1);
  border-radius: 30px;
  padding: 25px;
  text-align: left;
  margin: 0 auto;
}

#profile .icon {
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background: #fff;
}

#profile #displayName {
  margin: 10px;
}

#profile #statusMessage-box {
  max-width: 100%;
  height: 150px;
  overflow: scroll;
}

#contact-buttons {
  width: 60%;
  height: 60px;
  margin: 30px auto;
}

.contact-button {
  width: 60px;
  height: 60px;
  color: #666;
  border: 1px solid #999;
  border-radius: 60px;
  background: rgba(0, 0, 0, 0);
  margin: 0 auto;
}

.contact-button:hover {
  background: rgba(0, 0, 0, 0.1);
}

.contact-button:active {
  color: rgb(255, 255, 255);
  background: rgba(150, 155, 150, 0.5);
}

.contact-button-icon {
  width: 35px;
  height: 35px;
  padding-top: 13px;
}

@media screen and (max-width: 780px) {
  #profile {
    text-align: center;
  }
}
</style>
