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
    <div id="about">
      <img alt="XIA logo" src="@/assets/logo.svg" />
      <h2>XIA 雫</h2>
      <p>LINE Web Client for any platform</p>
      <p>
        The software is licensed under
        <a
          href="https://github.com/supersonictw/xia/blob/master/LICENSE"
          target="_blank"
          rel="noopener"
          >Mozilla Public License v.2.0</a
        >.
      </p>
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
};
</script>

<style scoped>
#about {
  width: 50%;
  margin: 0 auto;
  padding: 10px 15px 10px 15px;
  border-radius: 15px;
  color: #2c3e50;
  border-bottom: #42b983 1.5px solid;
  background: rgba(0, 0, 0, 0.1);
}
</style>
