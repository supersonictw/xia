<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div id="app" class="ui">
    <StatusBar></StatusBar>
    <Notification
      v-for="(notice, key) in $store.state.notifications"
      :key="key"
      :title="notice.title"
      :description="notice.description"
    ></Notification>
    <transition name="slide">
      <router-view class="child-view" />
    </transition>
    <div class="footer">
      <span v-if="!$store.state.system.ready">
        <a href="#" @click.prevent="$store.state.system.revoke">Reset XIA</a> |
      </span>
      <router-link to="/about">About XIA</router-link>
    </div>
  </div>
</template>
