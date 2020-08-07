<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="back">
    <a title="Back" @click.prevent="back" href="#">
      <img alt="Back" src="@/assets/icons/back.svg" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Back",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
#back {
  width: 50px;
  height: 50px;
  margin-left: 30px;
  background: rgba(0, 0, 0, 0);
  border-radius: 50px;
  border: #42b983 1.5px solid;
}

#back:hover {
  background: rgba(0, 125, 0, 0.1);
}

#back:active {
  background: rgba(0, 0, 0, 0);
}
</style>
