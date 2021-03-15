import Constant from '@/data/const';
import hash from 'js-sha256';
/* jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
*/

export default class {
  constructor(talkServiceClient) {
    this.client = talkServiceClient;
  }

  async init() {
    if (await this.verifyAccess()) {
      await this.setupDatabases();
      await this.syncData();
      await this.fetchChatIdsHashed();
      await this.syncRevision();
      this.opListener();
      this.$store.commit('setReady');
    }
  }

  async getProfile() {
    try {
      const profile = await this.client.getProfile();
      this.$store.commit('updateProfile', profile);
      return true;
    } catch (e) {
      console.error(e);
      if (e.name === 'TalkException') await this.revoke();
      return false;
    }
  }

  async syncContact() {
    const contactIds = await this.client.getAllContactIds();
    if (contactIds) {
      const contactData = await this.client.getContacts(contactIds);
      this.updateData(contactData, Constant.IDB_USER_CONTACT);
    }
  }

  async syncGroupJoined() {
    const groupIdsJoined = await this.client.getGroupIdsJoined();
    if (groupIdsJoined) {
      const groupDataJoined = await this.client.getGroups(groupIdsJoined);
      this.updateData(groupDataJoined, Constant.IDB_USER_GROUP_JOINED);
    }
  }

  async syncGroupInvited() {
    const groupIdsInvited = await this.client.getGroupIdsInvited();
    if (groupIdsInvited) {
      const groupDataInvited = await this.client.getGroups(groupIdsInvited);
      this.updateData(groupDataInvited, Constant.IDB_USER_GROUP_INVITED);
    }
  }

  updateData(data, dataName) {
    data.forEach((metadata) =>
      this.$store.state.idbUser.put(dataName, metadata),
    );
  }

  async syncRevision() {
    const data = await this.$store.state.idbUser.get(
        Constant.IDB_USER_SETTINGS,
        Constant.IDB_USER_KEY_SETTINGS_REVISION,
    );
    if (data) {
      this.revision = parseInt(data.value);
    } else {
      this.revision = await this.client.getLastOpRevision();
    }
  }

  async syncData() {
    const status = await this.$store.state.idbUser.get(
        Constant.IDB_USER_SETTINGS,
        Constant.IDB_USER_KEY_SETTINGS_SYNC_STATUS,
    );
    if (status && status.value === true) return;
    await Promise.all([
      this.syncContact(),
      this.syncGroupJoined(),
      this.syncGroupInvited(),
    ]);
    await this.$store.state.idbUser.put(Constant.IDB_USER_SETTINGS, {
      id: Constant.IDB_USER_KEY_SETTINGS_SYNC_STATUS,
      value: true,
    });
  }

  async fetchChatIdsHashed() {
    for (const typeName of Constant.ALL_CONTACT_TYPES) {
      let cursor = await this.$store.state.idbUser
          .transaction(typeName)
          .store.openCursor();
      while (cursor) {
        this.$store.commit('registerChatIdHashed', {
          targetId: cursor.key,
          idHashed: hash.sha256(cursor.key),
        });
        cursor = await cursor.continue();
      }
    }
  }
}
