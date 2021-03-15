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
  MOBILE_UI_WIDTH: 780,
  THRIFT_DEFAULT_SEQ: 0,
  GROUP_INVITING_ICON: 'ⓘ',
  CHAT_DISPLAY_ROW_LIMIT: 50,
  USE_HTTPS: true,
  CORS_PROXY_HOST: '',
  ROUTER_TAG: {
    INTRODUCING: 'Introducing',
    LOGIN: 'Login',
    DASHBOARD: 'Dashboard',
    PROFILE: 'Profile',
    CONTACT: 'Contact',
    CHAT: 'Chat',
    PICTURE_PREVIEW: 'PicturePreview',
    CREATE: 'Create',
    SETTINGS: {
      OVERVIEW: 'Settings - Overview',
      PROFILE: 'Settings - Profile',
      NOTIFICATION: 'Settings - Notification',
      PREVIEW: 'Settings - Preview Features',
    },
    ABOUT: 'About',
    REDIRECT: 'Redirect',
    ERROR: 'Error',
    NOT_FOUND: 'Not Found',
  },
  COOKIE: {
    ACCESS_KEY: 'XIA_AccessKey',
    ACCESS_CERTIFICATE_PREFIX: 'XIA_AccessCertificate',
    get ALL_COOKIES() {
      return [this.COOKIE.ACCESS_KEY];
    },
  },
  IDB: {
    XIA: {
      VERSION: 5,
      DB_LIST: 'dbList',
    },
    USER: {
      VERSION: 2,
      CONTACT: 'contact',
      GROUP: {
        JOINED: 'groupJoined',
        INVITED: 'groupInvited',
      },
      get ALL_CONTACT_TYPES() {
        return [
          this.IDB.USER.CONTACT,
          this.IDB.USER.GROUP.JOINED,
          this.IDB.USER.GROUP.INVITED,
        ];
      },
      PREVIEW_MESSAGE_BOX: 'previewMessageBox',
      MESSAGE_BOX: 'messageBox',
      SETTINGS: 'settings',
      KEY: {
        SETTINGS_SYNC_STATUS: 'syncStatus',
        SETTINGS_REVISION: 'revision',
      },
    },
  },
  LINE: {
    PLATFORM: {
      ID: 'CHROMEOS',
      NAME: 'Chrome_OS',
      get VERSION() {
        return this.NAME;
      },
    },
    get APPLICATION_IDENTITY() {
      return [
        this.PLATFORM.ID,
        this.VERSION,
        this.PLATFORM.NAME,
        this.PLATFORM.VERSION,
      ].join('\t');
    },
    SERVER: {
      HOST: 'gf.line.naver.jp',
      get HOST_FOR_THRIFT() {
        return this.CORS_PROXY_HOST ?
            `${this.CORS_PROXY_HOST}/${this.SERVER.HOST}` :
            this.SERVER.HOST;
      },
      get HOST_FOR_XHR() {
        const SCHEMA = `${this.USE_HTTPS ? 'https' : 'http'}://`;
        return this.CORS_PROXY_HOST ?
            `${this.CORS_PROXY_HOST}/${SCHEMA}${this.SERVER.HOST}` :
            this.SERVER.HOST;
      },
    },
    PATH: {
      AUTH: '/api/v4/TalkService.do',
      LOGIN: '/api/v4p/rs',
      CERTIFICATE: '/Q',
      QUERY: '/S4',
      POLL: '/P4',
    },
    MEDIA: {
      HOST: 'obs.line-apps.com',
      get URL() {
        const SCHEMA = `${this.USE_HTTPS ? 'https' : 'http'}://`;
        return `${SCHEMA}${this.HOST}`;
      },
    },
    STICKER: {
      HOST: 'sdl-stickershop.line.naver.jp',
      PLATFORM: 'PC',
      get URL() {
        const SCHEMA = `${this.USE_HTTPS ? 'https' : 'http'}://`;
        return `${SCHEMA}${this.STICKER.HOST}`;
      },
    },
  },
  TIMEOUT: {
    WAIT: 100,
    RETRY: 30,
  },
};
