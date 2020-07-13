<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div title="Back" id="back">
    <a @click="back" href="#">
      <svg
        alt="back"
        viewBox="0 0 16 16"
        class="back-arrow"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
        />
        <path
          fill-rule="evenodd"
          d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        /></svg
    ></a>
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
  color: #42b983;
  margin-left: 30px;
  background: rgba(0, 0, 0, 0);
  border-radius: 50px;
  border: #42b983 1.5px solid;
}
</style>
