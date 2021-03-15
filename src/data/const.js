/* jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
*/

export default {
  NAME: 'XIA',
  VERSION: '1.0.0',
  FETCH_OP_NUM: 50,
  RETRY_TIMEOUT: 30,
  WAIT_TIMEOUT: 100,
  MOBILE_UI_WIDTH: 780,
  THRIFT_DEFAULT_SEQ: 0,
  GROUP_INVITING_ICON: 'ⓘ',
  CHAT_DISPLAY_ROW_LITMIT: 50,
  ROUTER_TAG_INTRODUCING: 'Introducing',
  ROUTER_TAG_LOGIN: 'Login',
  ROUTER_TAG_DASHBOARD: 'Dashboard',
  ROUTER_TAG_PROFILE: 'Profile',
  ROUTER_TAG_CONTACT: 'Contact',
  ROUTER_TAG_CHAT: 'Chat',
  ROUTER_TAG_PICTURE_PREVIEW: 'PicturePreview',
  ROUTER_TAG_CREATE: 'Create',
  ROUTER_TAG_SETTINGS_OVERVIEW: 'Settings - Overview',
  ROUTER_TAG_SETTINGS_PROFILE: 'Settings - Profile',
  ROUTER_TAG_SETTINGS_NOTIFICATION: 'Settings - Notification',
  ROUTER_TAG_SETTINGS_PREVIEW: 'Settings - Preview Features',
  ROUTER_TAG_ABOUT: 'About',
  ROUTER_TAG_REDIRECT: 'Redirect',
  ROUTER_TAG_ERROR: 'Error',
  ROUTER_TAG_NOT_FOUND: 'Not Found',
  CORS_PROXY_HOST: '',
  LINE_USE_HTTPS: true,
  LINE_PLATFORM_ID: 'CHROMEOS',
  LINE_PLATFORM_NAME: 'Chrome_OS',
  get LINE_PLATFORM_VERSION() {
    return this.NAME;
  },
  get LINE_APPLICATION_IDENTITY() {
    return [
      this.LINE_PLATFORM_ID,
      this.VERSION,
      this.LINE_PLATFORM_NAME,
      this.LINE_PLATFORM_VERSION,
    ].join('\t');
  },
  LINE_SERVER_HOST: 'gf.line.naver.jp',
  get LINE_SERVER_HOST_FOR_THRIFT() {
    return this.CORS_PROXY_HOST ?
      `${this.CORS_PROXY_HOST}/${this.LINE_SERVER_HOST}` :
      this.LINE_SERVER_HOST;
  },
  get LINE_SERVER_HOST_FOR_XHR() {
    const SCHEMA = `${this.LINE_USE_HTTPS ? 'https' : 'http'}://`;
    return this.CORS_PROXY_HOST ?
      `${this.CORS_PROXY_HOST}/${SCHEMA}${this.LINE_SERVER_HOST}` :
      this.LINE_SERVER_HOST;
  },
  LINE_MEDIA_HOST: 'obs.line-apps.com',
  LINE_STICKER_HOST: 'sdl-stickershop.line.naver.jp',
  LINE_STICKER_PLATFORM: 'PC',
  LINE_CERTIFICATE_PATH: '/Q',
  LINE_LOGIN_PATH: '/api/v4p/rs',
  LINE_AUTH_PATH: '/api/v4/TalkService.do',
  LINE_QUERY_PATH: '/S4',
  LINE_POLL_PATH: '/P4',
  get LINE_MEDIA_URL() {
    const SCHEMA = `${this.LINE_USE_HTTPS ? 'https' : 'http'}://`;
    return `${SCHEMA}${this.LINE_MEDIA_HOST}`;
  },
  get LINE_STICKER_URL() {
    const SCHEMA = `${this.LINE_USE_HTTPS ? 'https' : 'http'}://`;
    return `${SCHEMA}${this.LINE_STICKER_HOST}`;
  },
  COOKIE_ACCESS_KEY: 'XIA_AccessKey',
  COOKIE_ACCESS_CERTIFICATE_PREFIX: 'XIA_AccessCertificate',
  get ALL_COOKIES() {
    return [this.COOKIE_ACCESS_KEY];
  },
  IDB_XIA_VERSION: 5,
  IDB_XIA_DB_LIST: 'dbList',
  IDB_USER_VERSION: 2,
  IDB_USER_CONTACT: 'contact',
  IDB_USER_GROUP_JOINED: 'groupJoined',
  IDB_USER_GROUP_INVITED: 'groupInvited',
  get ALL_CONTACT_TYPES() {
    return [
      this.IDB_USER_CONTACT,
      this.IDB_USER_GROUP_JOINED,
      this.IDB_USER_GROUP_INVITED,
    ];
  },
  IDB_USER_PREVIEW_MESSAGE_BOX: 'previewMessageBox',
  IDB_USER_MESSAGE_BOX: 'messageBox',
  IDB_USER_SETTINGS: 'settings',
  IDB_USER_KEY_SETTINGS_SYNC_STATUS: 'syncStatus',
  IDB_USER_KEY_SETTINGS_REVISION: 'revision',
};
