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
    <a @click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    logout() {
      this.$cookies.remove("XIA_AccessKey");
      window.location.reload();
    },
  },
};
</script>
