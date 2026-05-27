import {sha256} from 'js-sha256';
import Constant from '../data/const';
import lineType from '../protocol/line_types.js';

export class OperationController {
  public system: any;

  constructor(systemInstance: any) {
    this.system = systemInstance;
  }

  async update(op: any): Promise<void> {
    if (!this.system.instances.idb || !this.system.instances.idb.user) return;
    const db = this.system.instances.idb.user;

    switch (op.type) {
      case lineType.OpType.END_OF_OPERATION:
        break;

      case lineType.OpType.UPDATE_PROFILE: {
        const data = await this.system.clients.query.getProfile();
        await this.system.instances.sync.syncProfile(data);
        break;
      }

      case lineType.OpType.ADD_CONTACT:
      case lineType.OpType.UPDATE_CONTACT: {
        const data = await this.system.clients.query.getContact(op.param1);
        await db.put(Constant.IDB.USER.CONTACT, data);
        break;
      }

      case lineType.OpType.ACCEPT_GROUP_INVITATION: {
        await db.delete(Constant.IDB.USER.GROUP.INVITED, op.param1);
        await this.system.instances.idb.saveGroupInfo(op.param1, true);
        break;
      }

      case lineType.OpType.LEAVE_GROUP: {
        await this.system.instances.idb.clearMessageBox(op.param1);
        this.system.unregisterChatIdHashed(sha256(op.param1));
        await db.delete(Constant.IDB.USER.GROUP.JOINED, op.param1);
        break;
      }

      case lineType.OpType.NOTIFIED_CANCEL_INVITATION_GROUP: {
        let param3 = op.param3 || '';
        if (param3.includes('\x1e')) {
          param3 = param3.split('\x1e').find((id: string) => id === this.system.profile.userId) || '';
        }
        if (param3 === this.system.profile.userId) {
          this.system.unregisterChatIdHashed(sha256(op.param1));
          await db.delete(Constant.IDB.USER.GROUP.INVITED, op.param1);
        }
        break;
      }

      case lineType.OpType.NOTIFIED_KICKOUT_FROM_GROUP: {
        let param3 = op.param3 || '';
        if (param3.includes('\x1e')) {
          param3 = param3.split('\x1e').find((id: string) => id === this.system.profile.userId) || '';
        }
        if (param3 === this.system.profile.userId) {
          await this.system.instances.idb.clearMessageBox(op.param1);
          this.system.unregisterChatIdHashed(sha256(op.param1));
          await db.delete(Constant.IDB.USER.GROUP.JOINED, op.param1);
        } else {
          await this.system.instances.idb.saveGroupInfo(op.param1);
        }
        break;
      }

      case lineType.OpType.NOTIFIED_UPDATE_GROUP:
      case lineType.OpType.NOTIFIED_INVITE_INTO_GROUP:
      case lineType.OpType.NOTIFIED_ACCEPT_GROUP_INVITATION:
      case lineType.OpType.NOTIFIED_LEAVE_GROUP:
      case lineType.OpType.CREATE_GROUP:
      case lineType.OpType.UPDATE_GROUP:
      case lineType.OpType.CANCEL_INVITATION_GROUP:
      case lineType.OpType.INVITE_INTO_GROUP:
      case lineType.OpType.KICKOUT_FROM_GROUP: {
        await this.system.instances.idb.saveGroupInfo(op.param1);
        break;
      }

      case lineType.OpType.SEND_MESSAGE:
      case lineType.OpType.RECEIVE_MESSAGE: {
        const message = op.message;
        if (!message) break;

        message.target = (() => {
          switch (message.toType) {
            case lineType.MIDType.USER:
              if (message.from_ === this.system.profile.userId) {
                return message.to;
              } else {
                return message.from_;
              }
            case lineType.MIDType.ROOM:
            case lineType.MIDType.GROUP:
              return message.to;
          }
        })();

        message.createdTime = message.createdTime.toString();
        message.deliveredTime = message.deliveredTime.toString();

        await db.put(Constant.IDB.USER.PREVIEW_MESSAGE_BOX, message);
        await db.put(Constant.IDB.USER.MESSAGE_BOX, message);

        if (this.system.chatBoxAddMsg) {
          this.system.chatBoxAddMsg(message);
        }
        break;
      }

      default:
        console.warn('Unhandled operation type:', op.type, op);
        break;
    }
  }
}

export default OperationController;
