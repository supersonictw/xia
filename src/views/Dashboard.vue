<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="dashboard">
    <div class="header">
      <div class="float-right"><Logout /></div>
      <div id="profile-box">
        <router-link :title="profileDisplayName" to="/profile">
          <div id="profile">
            <img
              v-if="profilePicturePath"
              class="profile-icon"
              :src="mediaURL + profilePicturePath"
            />
            <img class="profile-icon" v-else src="@/assets/logo.svg" />
            <div>
              <div id="profile-displayName">
                <h3>{{ profileDisplayName }}</h3>
              </div>
              <p>{{ subStatusMessage(profileStatusMessage) }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div>
      <div id="tab-switcher" v-if="mobileUI">
        <a @click.prevent="tabSwitcher" href="#"
          >Display {{ tabSwitcherName }}</a
        >
      </div>
      <div id="lists">
        <ContactList v-if="!mobileUI || tabName == 'Contacts'" />
        <ChatList v-if="!mobileUI || tabName == 'Chats'" />
      </div>
    </div>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import Logout from "@/components/Logout.vue";
import ContactList from "@/components/ContactList.vue";
import ChatList from "@/components/ChatList.vue";

import lineClient from "@/computes/line.js";

import substring from "unicode-substring";

export default {
  name: "Dashboard",
  components: {
    Logout,
    ContactList,
    ChatList,
  },
  methods: {
    async waitForUpdateProfile() {
      setTimeout(() => {
        if (this.$store.state.ready) {
          this.updateProfile();
        } else {
          this.waitForUpdateProfile();
        }
      }, Constant.RETRY_TIMEOUT);
    },
    updateProfile() {
      this.profileDisplayName = this.$store.state.profile.DisplayName;
      this.profileStatusMessage = this.$store.state.profile.StatusMessage;
      this.profilePicturePath = this.$store.state.profile.PicturePath;
    },
    subStatusMessage(statusMessage) {
      return statusMessage.length <
        Constant.DASHBOARD_PROFILE_STATUS_MESSAGE_LENGTH
        ? statusMessage
        : `${substring(
            statusMessage,
            0,
            Constant.DASHBOARD_PROFILE_STATUS_MESSAGE_LENGTH
          )}...`;
    },
    tabSwitcher() {
      const tabs = [this.tabName, this.tabSwitcherName];
      this.tabName = this.tabName == tabs[0] ? tabs[1] : tabs[0];
      this.tabSwitcherName =
        this.tabSwitcherName == tabs[0] ? tabs[1] : tabs[0];
    },
    async mobileUIhandler(e) {
      this.mobileUI = e.target.innerWidth < Constant.MOBILE_UI_WIDTH;
    },
  },
  data() {
    return {
      tabName: "Contacts",
      tabSwitcherName: "Chats",
      mobileUI: window.innerWidth < Constant.MOBILE_UI_WIDTH,
      client: lineClient(
        Constant.LINE_QUERY_PATH,
        this.$store.state.authToken
      ),
      profileDisplayName: "Loading...",
      profileStatusMessage: "Loading...",
      profilePicturePath: null,
      mediaURL: Constant.LINE_MEDIA_URL,
    };
  },
  created() {
    window.addEventListener("resize", this.mobileUIhandler);
    this.waitForUpdateProfile();
  },
  destroyed() {
    window.removeEventListener("resize", this.mobileUIhandler);
  },
};
</script>

<style scoped>
#dashboard {
  width: 90%;
  min-width: 300px;
  margin: 60px auto;
}

.header {
  margin-bottom: 30px;
}

#profile-box {
  width: 250px;
  height: 70px;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0);
}

#profile-box:hover {
  border: 1px solid rgba(0, 0, 0, 0.3);
}

#profile-box a {
  text-decoration: none;
}

#profile {
  width: 200px;
  margin: 8px auto;
  display: flex;
  color: #000;
  overflow: hidden;
}

#profile .profile-icon {
  width: 50px;
  height: 50px;
  border-radius: 90px;
  margin-right: 10px;
}

#profile #profile-displayName,
#profile #profile-displayName h3 {
  width: auto;
  height: 30px;
  font-size: 20px;
  overflow: hidden;
  margin: 0;
}

#profile p {
  width: auto;
  height: 20px;
  font-size: 12px;
  margin: 0;
}

#tab-switcher {
  text-align: right;
}

#lists {
  display: flex;
  justify-content: center;
}

.float-right {
  float: right;
}
</style>
