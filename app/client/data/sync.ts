import {sha256} from 'js-sha256';
import Constant from './const';

export class SyncController {
  public client: any;
  public idb: any;
  public system: any;
  public revision: number = 0;

  constructor(queryClient: any, instances: any, systemInstance: any) {
    this.client = queryClient;
    this.idb = instances.idb;
    this.system = systemInstance;
  }

  async init(profileData: any): Promise<boolean> {
    try {
      this.syncProfile(profileData);
      await this.idb.waitForSyncData([
        this.syncContact(),
        this.syncGroupJoined(),
        this.syncGroupInvited(),
      ]);
      await this.idb.fetchChatIdsHash();
      this.revision = await this.idb.getLatestRevision();
      return true;
    } catch (e) {
      console.error('Sync initialization error:', e);
      return false;
    }
  }

  syncProfile(profileData: any): void {
    this.system.profile.userId = profileData.mid;
    this.system.profile.userIdHash = sha256(profileData.mid);
    this.system.profile.displayName = profileData.displayName;
    this.system.profile.picturePath = profileData.picturePath;
    this.system.profile.statusMessage = profileData.statusMessage;
  }

  async syncContact(): Promise<void> {
    const contactIds = await this.client.getAllContactIds();
    if (contactIds && contactIds.length > 0) {
      const contactData = await this.client.getContacts(contactIds);
      this.idb.updateData(contactData, Constant.IDB.USER.CONTACT);
    }
  }

  async syncGroupJoined(): Promise<void> {
    const groupIdsJoined = await this.client.getGroupIdsJoined();
    if (groupIdsJoined && groupIdsJoined.length > 0) {
      const groupDataJoined = await this.client.getGroups(groupIdsJoined);
      this.idb.updateData(groupDataJoined, Constant.IDB.USER.GROUP.JOINED);
    }
  }

  async syncGroupInvited(): Promise<void> {
    const groupIdsInvited = await this.client.getGroupIdsInvited();
    if (groupIdsInvited && groupIdsInvited.length > 0) {
      const groupDataInvited = await this.client.getGroups(groupIdsInvited);
      this.idb.updateData(groupDataInvited, Constant.IDB.USER.GROUP.INVITED);
    }
  }
}

export default SyncController;
