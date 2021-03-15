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
  constructor() {
    this.xia = null;
    this.user = null;
    this.setupXIA().then((db) => (this.xia = db));
    this.setupUser.then((db) => (this.user = db));
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
            Constant.IDB_XIA_DB_LIST,
            {keyPath: 'id'},
        );
      }
    };
    return openDB(
        Constant.NAME,
        Constant.IDB_XIA_VERSION,
        {upgrade: upgradeFunction},
    );
  }

  async setupUser() {
    const target = this.$store.state.profile.userIdHashed;
    const dbName = `${Constant.NAME}_${target}`;
    const localName =
            navigator.language ||
            navigator.userLanguage ||
            navigator.browserLanguage;
    return openDB(dbName, Constant.IDB_USER_VERSION, {
      upgrade(db, oldVersion, _, transaction) {
        const idbLocalOptions = {locale: localName};
        if (oldVersion === 1) {
          transaction
              .objectStore(Constant.IDB_USER_CONTACT)
              .createIndex(
                  'displayName',
                  'displayName',
                  idbLocalOptions,
              );
          transaction
              .objectStore(Constant.IDB_USER_GROUP_JOINED)
              .createIndex(
                  'displayName',
                  'name',
                  idbLocalOptions,
              );
          transaction
              .objectStore(Constant.IDB_USER_GROUP_INVITED)
              .createIndex(
                  'displayName',
                  'name',
                  idbLocalOptions,
              );
          return;
        }
        // Contact
        db.createObjectStore(
            Constant.IDB_USER_CONTACT,
            {keyPath: 'mid'},
        ).createIndex(
            'displayName',
            'displayName',
            idbLocalOptions,
        );
        // Group Joined
        db.createObjectStore(
            Constant.IDB_USER_GROUP_JOINED,
            {keyPath: 'id'},
        ).createIndex(
            'displayName',
            'name',
            idbLocalOptions,
        );
        // Group Invited
        db.createObjectStore(
            Constant.IDB_USER_GROUP_INVITED,
            {keyPath: 'id'},
        ).createIndex(
            'displayName',
            'name',
            idbLocalOptions,
        );
        // Preview Message Box
        db.createObjectStore(
            Constant.IDB_USER_PREVIEW_MESSAGE_BOX,
            {keyPath: 'target'},
        );
        // Message Box
        db.createObjectStore(
            Constant.IDB_USER_MESSAGE_BOX,
            {keyPath: 'id'},
        ).createIndex(
            'target',
            'target',
        );
        // Settings
        db.createObjectStore(
            Constant.IDB_USER_SETTINGS,
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
        (await this.$store.state.idbUser.get(
            Constant.IDB_USER_GROUP_JOINED,
            data.id,
        ))
    ) {
      this.$store.state.idbUser.put(Constant.IDB_USER_GROUP_JOINED, data);
    } else {
      this.$store.state.idbUser.put(Constant.IDB_USER_GROUP_INVITED, data);
      this.$store.commit('registerChatIdHashed', {
        targetId: groupId,
        idHashed: hash.sha256(groupId),
      });
    }
  }

  async clearMessageBox(targetId) {
    this.$store.state.idbUser.delete(
        Constant.IDB_USER_PREVIEW_MESSAGE_BOX,
        targetId,
    );
    let cursor = await this.$store.state.idbUser
        .transaction(Constant.IDB_USER_MESSAGE_BOX, 'readwrite')
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
        const idbXia = this.$store.state.idbXia ?
            this.$store.state.idbXia :
            await this.setupXIA();
        const allIdbUsers = await idbXia.getAllKeys(Constant.IDB_XIA_DB_LIST);
        if (allIdbUsers.length > 0) {
          idbNames = allIdbUsers.map((name) => `${Constant.NAME}_${name}`);
          await idbXia.clear(Constant.IDB_XIA_DB_LIST);
        }
      } else if (idbOldVersion !== 0) {
        await deleteDB(Constant.NAME);
      }
      await Promise.all(idbNames.map((name) => deleteDB(name)));
    }
    window.location.reload();
  }
}
