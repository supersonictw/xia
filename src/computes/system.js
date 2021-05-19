/* jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
*/

import IDB from '@/data/idb';
import Sync from '@/data/sync';
import Login from '@/computes/login';
import Poll from '@/computes/poll';
import lineClient from '@/computes/line';
import Constants from '@/data/const';

export default class {
  constructor(authToken=null) {
    this.ready = false;
    this.authToken = null;
    this.clients = {};
    this.instances = {};
    this.profile = {};
    if (!authToken) {
      this.clients.login = lineClient(
          this.authToken,
          Constants.LINE.PATH.LOGIN,
      );
      this.clients.auth = lineClient(
          this.authToken,
          Constants.LINE.PATH.AUTH,
      );
      this.instances.login = new Login();
    } else {
      this.clients.query = lineClient(
          this.authToken,
          Constants.LINE.PATH.QUERY,
      );
      this.clients.poll = lineClient(
          this.authToken,
          Constants.LINE.PATH.POLL,
      );
      this.init().then(
          () => (this.ready = true),
      );
    }
  }

  async init() {
    let profile = null;
    try {
      profile = await this.clients.query.getProfile();
    } catch (e) {
      console.error(e);
      if (e.name === 'TalkException') await this.revoke();
    }
    this.instances.idb = new IDB(this.profile.userIdHash);
    this.instances.sync = new Sync(this.authToken, this.instances.idb, this);
    this.instances.poll = new Poll(this.authToken, this.instances.idb, this);
    await this.instances.sync.updateProfile(profile);
  }

  async syncData() {
    await this.instances.sync.init();
  }

  sendMessage() {

  }

  addOperationListener() {

  }

  revoke() {}
}
