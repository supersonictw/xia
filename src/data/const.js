/*jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
*/

export default {
  NAME: "XIA",
  VERSION: "1.0.0",
  FETCH_OP_NUM: 50,
  RETRY_TIMEOUT: 30,
  MOBILE_UI_WIDTH: 780,
  THRIFT_DEFAULT_SEQ: 0,
  GROUP_INVITING_ICON: "ⓘ",
  OPERATIONS_NUM_LIMIT: 7200,
  CHAT_ROW_TEXT_LENGTH: 15,
  CONTACT_ROW_DISPLAY_NAME_LENGTH: 10,
  CONTACT_ROW_STATUS_MESSAGE_LENGTH: 15,
  DASHBOARD_PROFILE_STATUS_MESSAGE_LENGTH: 10,
  ROUTER_TAG_LOGIN: "Login",
  ROUTER_TAG_DASHBOARD: "Dashboard",
  ROUTER_TAG_PROFILE: "Profile",
  ROUTER_TAG_CONTACT: "Contact",
  ROUTER_TAG_CHAT: "Chat",
  ROUTER_TAG_ABOUT: "About",
  ROUTER_TAG_ERROR: "Error",
  ROUTER_TAG_NOT_FOUND: "Not Found",
  LINE_USE_HTTPS: true,
  LINE_PLATFORM_ID: "CHROMEOS",
  LINE_PLATFORM_NAME: "Chrome_OS",
  get LINE_PLATFORM_VERSION() {
    return this.NAME;
  },
  get LINE_APPLICATION_IDENTITY() {
    return `${this.LINE_PLATFORM_ID}\t${this.VERSION}\t${this.LINE_PLATFORM_NAME}\t${this.LINE_PLATFORM_VERSION}`;
  },
  LINE_SERVER_HOST: "gf.line.naver.jp",
  LINE_MEDIA_HOST: "obs.line-apps.com",
  LINE_STICKER_HOST: "sdl-stickershop.line.naver.jp",
  LINE_STICKER_PLATFORM: "PC",
  LINE_CERTIFICATE_PATH: "/Q",
  LINE_LOGIN_PATH: "/api/v4p/rs",
  LINE_AUTH_PATH: "/api/v4/TalkService.do",
  LINE_QUERY_PATH: "/S4",
  LINE_POLL_PATH: "/P4",
  get LINE_MEDIA_URL() {
    return `${this.LINE_USE_HTTPS ? "https" : "http"}://${
      this.LINE_MEDIA_HOST
    }`;
  },
  get LINE_STICKER_URL() {
    return `${this.LINE_USE_HTTPS ? "https" : "http"}://${
      this.LINE_STICKER_HOST
    }`;
  },
  COOKIE_ACCESS_KEY: "XIA_AccessKey",
  COOKIE_ACCESS_CERTIFICATE_PREFIX: "XIA_AccessCertificate",
  COOKIE_OP_REVISION: "XIA_OpRevision",
  get ALL_COOKIES() {
    return [this.COOKIE_ACCESS_KEY, this.COOKIE_OP_REVISION];
  },
  STORAGE_CONTACT_IDS: "XIA_Contacts",
  STORAGE_GROUP_JOINED_IDS: "XIA_Group_Joined",
  STORAGE_GROUP_INVITED_IDS: "XIA_Group_Invited",
  get ALL_CONTACT_IDS_STORAGES() {
    return [
      this.STORAGE_CONTACT_IDS,
      this.STORAGE_GROUP_JOINED_IDS,
      this.STORAGE_GROUP_INVITED_IDS,
    ];
  },
};
