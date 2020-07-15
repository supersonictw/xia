/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

import Vue from "vue";
import VueRouter from "vue-router";

import Constant from "@/data/const.js";

import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Profile from "@/views/Profile.vue";
import Chat from "@/views/Chat.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: Constant.ROUTER_TAG_LOGIN,
    component: Login,
  },
  {
    path: "/dashboard",
    name: Constant.ROUTER_TAG_DASHBOARD,
    component: Dashboard,
  },
  {
    path: "/profile",
    name: Constant.ROUTER_TAG_PROFILE,
    component: Profile,
  },
  {
    path: "/chat",
    name: Constant.ROUTER_TAG_CHAT,
    component: Chat,
  },
  {
    path: "/about",
    name: Constant.ROUTER_TAG_ABOUT,
    component: About,
  },
  {
    path: "*",
    name: Constant.ROUTER_TAG_NOT_FOUND,
    component: NotFound,
  },
];

const Router = new VueRouter({
  routes,
});

export default Router;
