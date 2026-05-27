import {sha256} from 'js-sha256';
import Constant from './data/const';
import IDBController from './data/idb';
import SyncController from './data/sync';
import OperationController from './controller/operation';
import PollingController from './controller/polling';
import LoginController from './controller/login';
import lineClient from './index';

export class System {
  public ready: boolean = false;
  public clients: any = {};
  public instances: any = {};
  public profile: any = {
    userId: '',
    userIdHash: '',
    displayName: '',
    picturePath: '',
    statusMessage: '',
  };
  public chatRoomIdHash: Map<string, string> = new Map();
  public authToken: string | null = null;

  constructor(authToken: string | null = null) {
    this.authToken = authToken;
    if (!authToken) {
      this.clients.login = lineClient(Constant.LINE.PATH.LOGIN);
      this.clients.auth = lineClient(Constant.LINE.PATH.AUTH);
      this.instances.login = new LoginController(this.clients);
    } else {
      this.clients.query = lineClient(
          Constant.LINE.PATH.QUERY,
          this.authToken,
      );
      this.clients.poll = lineClient(
          Constant.LINE.PATH.POLL,
          this.authToken,
      );
      this.service().then(() => {
        this.ready = true;
      });
    }
  }

  async service(): Promise<void> {
    let profile = null;
    try {
      profile = await this.clients.query.getProfile();
    } catch (e: any) {
      console.error('Failed to get profile:', e);
      if (e.name === 'TalkException') {
        await this.revoke();
        return;
      }
    }

    const idb = new IDBController(this);
    const sync = new SyncController(this.clients.query, {idb}, this);
    const operation = new OperationController(this);
    const poll = new PollingController(this.clients.poll, operation, {idb, sync}, this);

    this.instances.idb = idb;
    this.instances.sync = sync;
    this.instances.operation = operation;
    this.instances.poll = poll;

    idb.updateUserIdHash(sha256(profile.mid));
    await idb.init();
    await sync.init(profile);
    await poll.init();
    await poll.action();
  }

  sendMessage(): void {
    // Left unimplemented in legacy, can be filled in later if needed
  }

  registerChatRoomIdHash(targetId: string): void {
    this.chatRoomIdHash.set(sha256(targetId), targetId);
  }

  unregisterChatIdHashed(idHash: string): void {
    this.chatRoomIdHash.delete(idHash);
  }

  async revoke(): Promise<void> {
    if (typeof window !== 'undefined') {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.reload();
    }
  }
}

export default System;
