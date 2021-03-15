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
import {deleteDB} from 'idb';

export default class {
  async opListener() {
    const opClient = lineClient(
        Constant.LINE_POLL_PATH,
        this.$store.state.authToken,
    );
    this.longPoll(opClient);
  }

  async longPoll(opClient) {
    try {
      const operations = await opClient.fetchOperations(
          this.revision,
          Constant.FETCH_OP_NUM,
      );
      this.opHandler(operations);
      await this.updateRevision(operations);
    } catch (e) {
      console.error(e);
      if (e.name === 'TalkException') return this.revoke();
    }
    this.longPoll(opClient);
  }

  async opHandler(operations) {
    for (const operation of operations) {
      switch (operation.type) {
        case lineType.OpType.UPDATE_PROFILE: {
          const data = await this.client.getProfile();
          this.$store.commit('updateProfile', data);
          break;
        }
        case lineType.OpType.ADD_CONTACT:
        case lineType.OpType.UPDATE_CONTACT: {
          const data = await this.client.getContact(operation.param1);
          this.$store.state.idbUser.put(Constant.IDB.USER.CONTACT, data);
          break;
        }
        case lineType.OpType.ACCEPT_GROUP_INVITATION: {
          this.$store.state.idbUser.delete(
              Constant.IDB.USER.GROUP.INVITED,
              operation.param1,
          );
          this.updateGroupInfo(operation.param1, true);
          break;
        }
        case lineType.OpType.LEAVE_GROUP: {
          this.clearMessageBox(operation.param1);
          this.$store.commit(
              'unregisterChatIdHashed',
              hash.sha256(operation.param1),
          );
          this.$store.state.idbUser.delete(
              Constant.IDB.USER.GROUP.JOINED,
              operation.param1,
          );
          break;
        }
        case lineType.OpType.NOTIFIED_CANCEL_INVITATION_GROUP: {
          if (operation.param3.includes('\x1e')) {
            operation.param3 = operation.param3
                .split('\x1e')
                .find((id) => id === this.$store.state.profile.userId);
          }
          if (operation.param3 === this.$store.state.profile.userId) {
            this.$store.commit(
                'unregisterChatIdHashed',
                hash.sha256(operation.param1),
            );
            this.$store.state.idbUser.delete(
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
                .find((id) => id === this.$store.state.profile.userId);
          }
          if (operation.param3 === this.$store.state.profile.userId) {
            await this.clearMessageBox(operation.param1);
            this.$store.commit(
                'unregisterChatIdHashed',
                hash.sha256(operation.param1),
            );
            this.$store.state.idbUser.delete(
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
          })(operation.message, this.$store.state.profile.userId);
          // Uint8Array to String
          operation.message.createdTime =
                        operation.message.createdTime.toString();
          operation.message.deliveredTime =
                        operation.message.deliveredTime.toString();
          this.$store.state.idbUser.put(
              Constant.IDB.USER.PREVIEW_MESSAGE_BOX,
              operation.message,
          );
          this.$store.state.idbUser.put(
              Constant.IDB.USER.MESSAGE_BOX,
              operation.message,
          );
          break;
      }
    }
  }
}
