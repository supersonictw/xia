import {deleteDB, openDB, type IDBPDatabase} from 'idb';
import Constant from './const';

export class IDBController {
  public system: any;
  public xia: IDBPDatabase | null = null;
  public user: IDBPDatabase | null = null;
  public userIdHash: string | null = null;

  constructor(systemInstance: any) {
    this.system = systemInstance;
  }

  async init(): Promise<void> {
    this.xia = await this.setupXIA();
    this.user = await this.setupUser();
  }

  updateUserIdHash(userIdHash: string): void {
    this.userIdHash = userIdHash;
  }

  async setupXIA(): Promise<IDBPDatabase> {
    const upgradeFunction = (db: IDBPDatabase, oldVersion: number) => {
      // Remove the old data structure
      if (oldVersion !== 0 && oldVersion < 3) {
        this.system.revoke();
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

  async setupUser(): Promise<IDBPDatabase> {
    if (!this.userIdHash) {
      throw new Error('userIdHash is not set when setting up user database');
    }
    const dbName = `${Constant.NAME}_${this.userIdHash}`;
    const localName = typeof navigator !== 'undefined' ?
      (navigator.language || (navigator as any).userLanguage || (navigator as any).browserLanguage || 'zh-TW') :
      'zh-TW';

    return openDB(dbName, Constant.IDB.USER.VERSION, {
      upgrade(db: IDBPDatabase, oldVersion: number, _, transaction) {
        const idbLocalOptions = {locale: localName} as any;
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

  async clearMessageBox(targetId: string): Promise<void> {
    if (!this.user) return;
    await this.user.delete(Constant.IDB.USER.PREVIEW_MESSAGE_BOX, targetId);
    const transaction = this.user.transaction(
        Constant.IDB.USER.MESSAGE_BOX,
        'readwrite',
    );
    let cursor = await transaction.store.openCursor();
    while (cursor) {
      if (cursor.value.target === targetId) {
        await cursor.delete();
      }
      cursor = await cursor.continue();
    }
  }

  updateData(data: any[], dataName: string): void {
    if (!this.user) return;
    data.forEach((metadata) => {
      this.user!.put(dataName, metadata);
    });
  }

  async saveGroupInfo(groupId: string, accepted = false): Promise<void> {
    if (!this.user) return;
    const data = await this.system.clients.query.getGroup(groupId);
    const localData = await this.user.get(
        Constant.IDB.USER.GROUP.JOINED, data.id,
    );
    if (accepted || localData) {
      await this.user.put(Constant.IDB.USER.GROUP.JOINED, data);
    } else {
      await this.user.put(Constant.IDB.USER.GROUP.INVITED, data);
      this.system.registerChatRoomIdHash(groupId);
    }
  }

  async getLatestRevision(): Promise<number> {
    if (!this.user) return 0;
    const data = await this.user.get(
        Constant.IDB.USER.SETTINGS,
        Constant.IDB.USER.KEY.SETTINGS_REVISION,
    );
    if (data) {
      return parseInt(data.value, 10);
    } else {
      const revision = await this.system.clients.query.getLastOpRevision();
      // Handle Thrift return types which could be a custom Int64 or Number
      return typeof revision === 'object' && revision.toNumber ? revision.toNumber() : parseInt(revision, 10);
    }
  }

  async waitForSyncData(tasks: Promise<any>[]): Promise<void> {
    if (!this.user) return;
    const status = await this.user.get(
        Constant.IDB.USER.SETTINGS,
        Constant.IDB.USER.KEY.SETTINGS_SYNC_STATUS,
    );
    if (status && status.value === true) return;
    await Promise.all(tasks);
    await this.user.put(Constant.IDB.USER.SETTINGS, {
      id: Constant.IDB.USER.KEY.SETTINGS_SYNC_STATUS,
      value: true,
    });
  }

  async fetchChatIdsHash(): Promise<void> {
    if (!this.user) return;
    for (const typeName of Constant.IDB.USER.ALL_CONTACT_TYPES) {
      const transaction = this.user.transaction(typeName);
      let cursor = await transaction.store.openCursor();
      while (cursor) {
        this.system.registerChatRoomIdHash(cursor.key);
        cursor = await cursor.continue();
      }
    }
  }

  async reset(previousVersion: number): Promise<void> {
    let idbNames: string[] = [];
    if (previousVersion >= 3 || previousVersion === -1) {
      const idbXia = this.xia ? this.xia : await this.setupXIA();
      const allUsers = await idbXia.getAllKeys(Constant.IDB.XIA.DB_LIST);
      if (allUsers.length > 0) {
        idbNames = allUsers.map((name) => `${Constant.NAME}_${name}`);
        await idbXia.clear(Constant.IDB.XIA.DB_LIST);
      }
    } else if (previousVersion !== 0) {
      await deleteDB(Constant.NAME);
    }
    await Promise.all(idbNames.map((name) => deleteDB(name)));
  }
}

export default IDBController;
