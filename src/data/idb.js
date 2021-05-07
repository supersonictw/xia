/* jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
*/

import Constant from '@/data/const';
import {deleteDB, openDB} from 'idb';

export default class {
  constructor(userIdHash) {
    this.userIdHash = userIdHash;
    this.xia = null;
    this.user = null;
    this.setupXIA().then((db) => (this.xia = db));
    this.setupUser().then((db) => (this.user = db));
  }

  async setupXIA() {
    const resetFunction = this.revoke;
    const upgradeFunction = function(db, oldVersion) {
      // Remove the old data structure
      if (oldVersion !== 0 && oldVersion < 3) {
        resetFunction(true, oldVersion);
        return;
      }
      if (oldVersion === 0) {
        // Databases List
        db.createObjectStore(
            Constant.IDB.XIA.DB_LIST,
            {keyPath: 'id'},
        );
      }
    };
    return openDB(
        Constant.NAME,
        Constant.IDB.XIA.VERSION,
        {upgrade: upgradeFunction},
    );
  }

  async setupUser() {
    const target = this.userIdHash;
    const dbName = `${Constant.NAME}_${target}`;
    const localName =
            navigator.language ||
            navigator.userLanguage ||
            navigator.browserLanguage;
    return openDB(dbName, Constant.IDB.USER.VERSION, {
      upgrade(db, oldVersion, _, transaction) {
        const idbLocalOptions = {locale: localName};
        if (oldVersion === 1) {
          transaction
              .objectStore(Constant.IDB.USER.CONTACT)
              .createIndex(
                  'displayName',
                  'displayName',
                  idbLocalOptions,
              );
          transaction
              .objectStore(Constant.IDB.USER.GROUP.JOINED)
              .createIndex(
                  'displayName',
                  'name',
                  idbLocalOptions,
              );
          transaction
              .objectStore(Constant.IDB.USER.GROUP.INVITED)
              .createIndex(
                  'displayName',
                  'name',
                  idbLocalOptions,
              );
          return;
        }
        // Contact
        db.createObjectStore(
            Constant.IDB.USER.CONTACT,
            {keyPath: 'mid'},
        ).createIndex(
            'displayName',
            'displayName',
            idbLocalOptions,
        );
        // Group Joined
        db.createObjectStore(
            Constant.IDB.USER.GROUP.JOINED,
            {keyPath: 'id'},
        ).createIndex(
            'displayName',
            'name',
            idbLocalOptions,
        );
        // Group Invited
        db.createObjectStore(
            Constant.IDB.USER.GROUP.INVITED,
            {keyPath: 'id'},
        ).createIndex(
            'displayName',
            'name',
            idbLocalOptions,
        );
        // Preview Message Box
        db.createObjectStore(
            Constant.IDB.USER.PREVIEW_MESSAGE_BOX,
            {keyPath: 'target'},
        );
        // Message Box
        db.createObjectStore(
            Constant.IDB.USER.MESSAGE_BOX,
            {keyPath: 'id'},
        ).createIndex(
            'target',
            'target',
        );
        // Settings
        db.createObjectStore(
            Constant.IDB.USER.SETTINGS,
            {keyPath: 'id'},
        );
      },
    });
  }

  async clearMessageBox(targetId) {
    this.user.delete(Constant.IDB.USER.PREVIEW_MESSAGE_BOX, targetId);
    let cursor = await this.user
        .transaction(Constant.IDB.USER.MESSAGE_BOX, 'readwrite')
        .store.openCursor();
    while (cursor) {
      if (cursor.value.target === targetId) {
        cursor.delete();
      }
      cursor = await cursor.continue();
    }
  }

  async reset(previousVersion) {
    let idbNames = [];
    if (previousVersion >= 3 || previousVersion === -1) {
      const idbXia = this.xia ? this.xia : await this.setupXIA();
      const allUsers = await idbXia.getAllKeys(Constant.IDB.XIA.DB_LIST);
      if (allUsers.length > 0) {
        idbNames = allUsers.map((name) => `${Constant.NAME}_${name}`);
        await idbXia.clear(Constant.IDB.XIA.DB_LIST);
      }
    } else if (previousVersion !== 0) {
      await deleteDB(Constant.NAME);
    }
    await Promise.all(idbNames.map((name) => deleteDB(name)));
  }

  async revoke() {
    Constant.ALL_COOKIES.forEach((name) => this.$cookies.remove(name));
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.reload();
  }
}
