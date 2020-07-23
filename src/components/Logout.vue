<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <a title="Logout" @click.prevent="logout" href="#">
    <div id="logout">
      <div id="logout-box">
        <svg
          alt="Logout"
          viewBox="0 0 16 16"
          id="logout-door"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
          />
        </svg>
        <span id="logout-text">Logout</span>
      </div>
    </div>
  </a>
</template>

<script>
import Constant from "@/data/const.js";

import lineClient from "@/computes/line.js";

export default {
  name: "Logout",
  methods: {
    logout() {
      lineClient(
        Constant.LINE_QUERY_PATH,
        this.$store.state.authToken
      ).logout();
      Constant.ALL_COOKIES.forEach((name) => this.$cookies.remove(name));
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.reload();
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#logout {
  width: 90px;
  height: 25px;
  color: #42b983;
  margin-right: 30px;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0);
}

#logout:hover {
  background: rgba(0, 125, 0, 0.1);
}

#logout:active {
  color: rgb(255, 255, 255);
  background: rgb(125, 220, 150);
}

#logout-box {
  display: flex;
  margin: 0;
}

#logout-door {
  width: auto;
  height: 20px;
  margin-right: 10px;
}

#logout-text {
  width: auto;
  height: 20px;
}

@media screen and (max-width: 600px) {
  #logout {
    width: 50px;
    height: 15px;
  }

  #logout-door {
    width: auto;
    height: 15px;
    margin-right: 3px;
  }

  #logout-text {
    width: auto;
    height: 10px;
    font-size: 10px;
  }
}
</style>
