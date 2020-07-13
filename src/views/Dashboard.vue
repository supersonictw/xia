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
    </div>
    <div id="lists">
      <ContactList />
      <ChatList />
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
    async getProfile() {
      this.profile = await this.client.getProfile();
    },
  },
  data() {
    return {
      client: lineClient(
        Constant.LINE_QUERY_PATH,
        this.$cookies.get("XIA_AccessKey")
      ),
      profile: new lineType.Profile(),
      mediaURL: `${Constant.LINE_USE_HTTPS ? "https" : "http"}://${
        Constant.LINE_MEDIA_HOST
      }`,
    };
  },
  created() {
    this.getProfile();
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

#profile {
  display: flex;
  width: 300px;
  height: 50px;
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
