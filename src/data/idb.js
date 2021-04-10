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
import hash from 'js-sha256';

export default class {
  constructor(vuexInstance) {
    this.vuex = vuexInstance;
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
    const target = this.vuex.state.profile.userIdHashed;
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

  async updateRevision(operations) {
    const opLength = operations.length;
    if (opLength === 0) return;
    if (opLength === 1) return (this.revision = operations[0].revision);
    const latestRev = operations[opLength - 1].revision;
    const secondRev = operations[opLength - 2].revision;
    this.revision = latestRev.compare(secondRev) ? secondRev : latestRev;
  }

  async updateGroupInfo(groupId, accepted = false) {
    const data = await this.client.getGroup(groupId);
    if (
      accepted ||
        (await this.vuex.state.idbUser.get(
            Constant.IDB.USER.GROUP.JOINED,
            data.id,
        ))
    ) {
      this.vuex.state.idbUser.put(Constant.IDB.USER.GROUP.JOINED, data);
    } else {
      this.vuex.state.idbUser.put(Constant.IDB.USER.GROUP.INVITED, data);
      this.vuex.commit('registerChatIdHashed', {
        targetId: groupId,
        idHashed: hash.sha256(groupId),
      });
    }
  }

  async clearMessageBox(targetId) {
    this.vuex.state.idbUser.delete(
        Constant.IDB.USER.PREVIEW_MESSAGE_BOX,
        targetId,
    );
    let cursor = await this.vuex.state.idbUser
        .transaction(Constant.IDB.USER.MESSAGE_BOX, 'readwrite')
        .store.openCursor();
    while (cursor) {
      if (cursor.value.target === targetId) {
        cursor.delete();
      }
      cursor = await cursor.continue();
    }
  }

  async revoke(reset = false, idbOldVersion = -1) {
    Constant.ALL_COOKIES.forEach((name) => this.$cookies.remove(name));
    window.localStorage.clear();
    window.sessionStorage.clear();
    if (reset) {
      let idbNames = [];
      if (idbOldVersion >= 3 || idbOldVersion === -1) {
        const idbXia = this.vuex.state.idbXia ?
            this.vuex.state.idbXia :
            await this.setupXIA();
        const allIdbUsers = await idbXia.getAllKeys(Constant.IDB.XIA.DB_LIST);
        if (allIdbUsers.length > 0) {
          idbNames = allIdbUsers.map((name) => `${Constant.NAME}_${name}`);
          await idbXia.clear(Constant.IDB.XIA.DB_LIST);
        }
      } else if (idbOldVersion !== 0) {
        await deleteDB(Constant.NAME);
      }
      await Promise.all(idbNames.map((name) => deleteDB(name)));
    }
    window.location.reload();
  }
}
