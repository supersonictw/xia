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
import hash from 'js-sha256';

export default class {
  constructor(queryClient, idbInstance, systemInstance) {
    this.client = queryClient;
    this.idb = idbInstance;
    this.system = systemInstance;
  }

  async init(profileData) {
    try {
      this.updateProfile(profileData);
      await this.syncData();
      await this.fetchChatIdsHash();
      await this.syncRevision();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  updateProfile(profileData) {
    this.system.profile.userId = profileData.mid;
    this.system.profile.userIdHash = hash.sha256(profileData.mid);
    this.system.profile.displayName = profileData.displayName;
    this.system.profile.picturePath = profileData.picturePath;
    this.system.profile.statusMessage = profileData.statusMessage;
  }

  async syncContact() {
    const contactIds = await this.client.getAllContactIds();
    if (contactIds) {
      const contactData = await this.client.getContacts(contactIds);
      this.updateData(contactData, Constant.IDB.USER.CONTACT);
    }
  }

  async syncGroupJoined() {
    const groupIdsJoined = await this.client.getGroupIdsJoined();
    if (groupIdsJoined) {
      const groupDataJoined = await this.client.getGroups(groupIdsJoined);
      this.updateData(groupDataJoined, Constant.IDB.USER.GROUP.JOINED);
    }
  }

  async syncGroupInvited() {
    const groupIdsInvited = await this.client.getGroupIdsInvited();
    if (groupIdsInvited) {
      const groupDataInvited = await this.client.getGroups(groupIdsInvited);
      this.updateData(groupDataInvited, Constant.IDB.USER.GROUP.INVITED);
    }
  }

  updateData(data, dataName) {
    data.forEach((metadata) =>
      this.idb.user.put(dataName, metadata),
    );
  }

  async syncRevision() {
    const data = await this.idb.user.get(
        Constant.IDB.USER.SETTINGS,
        Constant.IDB.USER.KEY.SETTINGS_REVISION,
    );
    if (data) {
      this.revision = parseInt(data.value);
    } else {
      this.revision = await this.client.getLastOpRevision();
    }
  }

  async syncData() {
    const status = await this.idb.user.get(
        Constant.IDB.USER.SETTINGS,
        Constant.IDB.USER.KEY.SETTINGS_SYNC_STATUS,
    );
    if (status && status.value === true) return;
    await Promise.all([
      this.syncContact(),
      this.syncGroupJoined(),
      this.syncGroupInvited(),
    ]);
    await this.idb.user.put(Constant.IDB.USER.SETTINGS, {
      id: Constant.IDB.USER.KEY.SETTINGS_SYNC_STATUS,
      value: true,
    });
  }

  async fetchChatIdsHash() {
    for (const typeName of Constant.IDB.USER.ALL_CONTACT_TYPES) {
      let cursor = await this.idb.user
          .transaction(typeName).store.openCursor();
      while (cursor) {
        this.system.registerChatRoomIdHash(cursor.key);
        cursor = await cursor.continue();
      }
    }
  }
}
