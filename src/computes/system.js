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
import IDB from '@/data/idb';
import Sync from '@/data/sync';
import hash from 'js-sha256';

export default class {
  constructor() {
    this.ready = false;
    this.profile = {};
    this.authToken = null;
    this.idb = null;
    this.sync = null;
    if (this.$cookies.isKey(Constant.COOKIE.ACCESS_KEY)) {
      this.authToken = this.$cookies.get(Constant.COOKIE.ACCESS_KEY);
      this.init().then(() => (this.ready = true));
    }
  }

  async init() {
    try {
      const profile = await this.client.getProfile();
      this.updateProfile(profile);
    } catch (e) {
      console.error(e);
      if (e.name === 'TalkException') await this.revoke();
    }
    this.idb = new IDB(this.profile.userIdHash);
    this.sync = new Sync(this.authToken, this.idb, this);
  }

  updateProfile(state, profileData) {
    this.profile.userId = profileData.mid;
    this.profile.userIdHash = hash.sha256(profileData.mid);
    this.profile.displayName = profileData.displayName;
    this.profile.picturePath = profileData.picturePath;
    this.profile.statusMessage = profileData.statusMessage;
  }

  async syncData() {
    await this.sync.init();
  }
}
