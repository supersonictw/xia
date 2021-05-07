/* jshint esversion: 8 */
/*
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
*/

import lineClient from '@/computes/line';
import Constant from '@/data/const';
import lineType from '@/computes/protocol/line_types';
import hash from 'js-sha256';

export default class {
  constructor(authToken, idbInstance, systemInstance) {
    this.client = lineClient(Constant.LINE.PATH.POLL, authToken);
    this.idb = idbInstance;
    this.system = systemInstance;
    this.revision = 0;
  }

  async start() {
    try {
      const operations = await this.client.fetchOperations(
          this.revision,
          Constant.FETCH_OP_NUM,
      );
      await this.opHandler(operations);
      await this.updateRevision(operations);
    } catch (e) {
      console.error(e);
      if (e.name === 'TalkException') return this.revoke();
    }
    await this.start(this.client);
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
    if (accepted ||(await this.idb.user.get(Constant.IDB.USER.GROUP.JOINED, data.id))) {
      this.idb.user.put(Constant.IDB.USER.GROUP.JOINED, data);
    } else {
      this.idb.user.put(Constant.IDB.USER.GROUP.INVITED, data);
      this.vuex.commit('registerChatIdHash', {targetId: groupId, idHash: hash.sha256(groupId)});
    }
  }

  async opHandler(operations) {
    for (const operation of operations) {
      switch (operation.type) {
        case lineType.OpType.UPDATE_PROFILE: {
          const data = await this.client.getProfile();
          this.vuex.commit('updateProfile', data);
          break;
        }
        case lineType.OpType.ADD_CONTACT:
        case lineType.OpType.UPDATE_CONTACT: {
          const data = await this.client.getContact(operation.param1);
          this.idb.user.put(Constant.IDB.USER.CONTACT, data);
          break;
        }
        case lineType.OpType.ACCEPT_GROUP_INVITATION: {
          this.idb.user.delete(
              Constant.IDB.USER.GROUP.INVITED,
              operation.param1,
          );
          await this.updateGroupInfo(operation.param1, true);
          break;
        }
        case lineType.OpType.LEAVE_GROUP: {
          await this.clearMessageBox(operation.param1);
          this.vuex.commit(
              'unregisterChatIdHash',
              hash.sha256(operation.param1),
          );
          this.idb.user.delete(
              Constant.IDB.USER.GROUP.JOINED,
              operation.param1,
          );
          break;
        }
        case lineType.OpType.NOTIFIED_CANCEL_INVITATION_GROUP: {
          if (operation.param3.includes('\x1e')) {
            operation.param3 = operation.param3
                .split('\x1e')
                .find((id) => id === this.profile.userId);
          }
          if (operation.param3 === this.profile.userId) {
            this.vuex.commit(
                'unregisterChatIdHash',
                hash.sha256(operation.param1),
            );
            this.idb.user.delete(
                Constant.IDB.USER.GROUP.INVITED,
                operation.param1,
            );
          }
          break;
        }
        case lineType.OpType.NOTIFIED_KICKOUT_FROM_GROUP:
          if (operation.param3.includes('\x1e')) {
            operation.param3 = operation.param3
                .split('\x1e')
                .find((id) => id === this.profile.userId);
          }
          if (operation.param3 === this.profile.userId) {
            await this.clearMessageBox(operation.param1);
            this.vuex.commit(
                'unregisterChatIdHash',
                hash.sha256(operation.param1),
            );
            this.idb.user.delete(
                Constant.IDB.USER.GROUP.JOINED,
                operation.param1,
            );
          } else {
            await this.updateGroupInfo(operation.param1);
          }
          break;
        case lineType.OpType.NOTIFIED_UPDATE_GROUP:
        case lineType.OpType.NOTIFIED_INVITE_INTO_GROUP:
        case lineType.OpType.NOTIFIED_ACCEPT_GROUP_INVITATION:
        case lineType.OpType.NOTIFIED_LEAVE_GROUP:
        case lineType.OpType.CREATE_GROUP:
        case lineType.OpType.UPDATE_GROUP:
        case lineType.OpType.CANCEL_INVITATION_GROUP:
        case lineType.OpType.INVITE_INTO_GROUP:
        case lineType.OpType.KICKOUT_FROM_GROUP:
          await this.updateGroupInfo(operation.param1);
          break;
        case lineType.OpType.SEND_MESSAGE:
        case lineType.OpType.RECEIVE_MESSAGE:
          // Add Target for index
          operation.message.target = (function(obj, profileId) {
            switch (obj.toType) {
              case lineType.MIDType.USER:
                if (obj.from_ === profileId) {
                  return obj.to;
                } else {
                  return obj.from_;
                }
              case lineType.MIDType.ROOM:
              case lineType.MIDType.GROUP:
                return obj.to;
            }
          })(operation.message, this.profile.userId);
          // Uint8Array to String
          operation.message.createdTime =
                        operation.message.createdTime.toString();
          operation.message.deliveredTime =
                        operation.message.deliveredTime.toString();
          this.idb.user.put(
              Constant.IDB.USER.PREVIEW_MESSAGE_BOX,
              operation.message,
          );
          this.idb.user.put(
              Constant.IDB.USER.MESSAGE_BOX,
              operation.message,
          );
          break;
      }
    }
  }
}
