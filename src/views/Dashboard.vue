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
        <a @click.prevent="" href="#">
          <div id="profile">
            <img
              v-if="profile.picturePath"
              class="picture-icon"
              :src="mediaURL + profile.picturePath"
            />
            <div>
              <h3>{{ profile.displayName }}</h3>
              <p>{{ profile.statusMessage }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div>
      <div id="tab-switcher" v-if="mobileUI">
        <a @click.prevent="tabSwitcher" href="#">Display {{ tabSwitcherName }}</a>
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
import lineType from "@/computes/line/line_types.js";

export default {
  name: "Dashboard",
  components: {
    Logout,
    ContactList,
    ChatList,
  },
  methods: {
    tabSwitcher() {
      let tabs = [this.tabName, this.tabSwitcherName];
      this.tabName = this.tabName == tabs[0] ? tabs[1] : tabs[0];
      this.tabSwitcherName = this.tabSwitcherName == tabs[0] ? tabs[1] : tabs[0];
    },
    async mobileUIhandler(e) {
      this.mobileUI = e.target.innerWidth < Constant.MOBILE_UI_WIDTH;
    },
    async getProfile() {
      this.profile = await this.client.getProfile();
    },
  },
  data() {
    return {
      tabName: "Contacts",
      tabSwitcherName: "Chats",
      mobileUI: window.innerWidth < Constant.MOBILE_UI_WIDTH,
      client: lineClient(
        Constant.LINE_QUERY_PATH,
        this.$cookies.get(Constant.COOKIE_ACCESS_KEY)
      ),
      profile: new lineType.Profile(),
      mediaURL: `${Constant.LINE_USE_HTTPS ? "https" : "http"}://${
        Constant.LINE_MEDIA_HOST
      }`,
    };
  },
  created() {
    window.addEventListener("resize", this.mobileUIhandler);
    this.getProfile();
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
  margin: 0 auto;
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
}

#profile .picture-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

#profile h3 {
  width: auto;
  height: 35px;
  font-size: 25px;
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

.picture-icon {
  width: 90px;
  height: 90px;
  border-radius: 90px;
}

.float-right {
  float: right;
}
</style>
