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
    <div id="profile">
      <img class="icon" v-if="picturePath" :src="mediaURL + picturePath" />
      <img class="icon" v-else src="@/assets/logo.svg" />
      <h1 id="displayName">{{ displayName }}</h1>
      <div id="statusMessage-box">
        <p id="statusMessage">{{ statusMessageWithLines }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import Back from "@/components/Back.vue";

export default {
  name: "Profile",
  components: {
    Back,
  },
  methods: {
    async waitForUpdateProfile() {
      setTimeout(() => {
        if (this.$store.state.ready) {
          this.updateProfile();
        } else {
          this.waitForUpdateProfile();
        }
      }, 1);
    },
    updateProfile() {
      this.displayName = this.$store.state.profile.DisplayName;
      this.statusMessage = this.$store.state.profile.StatusMessage;
      this.picturePath = this.$store.state.profile.PicturePath;
    },
  },
  computed: {
    statusMessageWithLines() {
      return this.statusMessage.replace(/\r\n/g, "<br />");
    },
  },
  data() {
    return {
      displayName: "Loading...",
      statusMessage: "Loading...",
      picturePath: null,
      mediaURL: Constant.LINE_MEDIA_URL,
    };
  },
  created() {
    this.waitForUpdateProfile();
  },
};
</script>

<style scoped>
#profile {
  width: 60%;
  min-height: 300px;
  background: rgba(25, 225, 25, 0.1);
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

@media screen and (max-width: 780px) {
  #profile {
    text-align: center;
  }
}
</style>
