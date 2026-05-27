import Constant from '../data/const';

export class PollingController {
  public client: any;
  public op: any;
  public idb: any;
  public sync: any;
  public system: any;
  public revision: number = 0;
  public isPolling: boolean = false;
  private swRegistration: ServiceWorkerRegistration | null = null;

  constructor(client: any, operationController: any, instances: any, systemInstance: any) {
    this.client = client;
    this.op = operationController;
    this.idb = instances.idb;
    this.sync = instances.sync;
    this.system = systemInstance;
  }

  async init(): Promise<void> {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
      console.warn('ServiceWorker is not supported in this browser.');
      return;
    }

    // Handle messages from Service Worker
    navigator.serviceWorker.addEventListener('message', async (event) => {
      const {type, operations, revision, error} = event.data;
      if (type === 'POLL_OPERATIONS') {
        this.revision = revision;
        for (const op of operations) {
          await this.op.update(op);
        }
      } else if (type === 'POLL_ERROR') {
        console.error('Polling error from ServiceWorker:', error);
      }
    });

    try {
      this.swRegistration = await navigator.serviceWorker.register('/sw.js', {scope: '/'});
      console.log('ServiceWorker registered successfully with scope:', this.swRegistration.scope);
    } catch (error) {
      console.error('ServiceWorker registration failed:', error);
    }
  }

  async action(): Promise<void> {
    if (this.isPolling) return;
    this.isPolling = true;

    // Get current revision from IDB
    this.revision = await this.idb.getLatestRevision();

    const token = window.localStorage.getItem(Constant.LOCAL_STORAGE.ACCESS_KEY);

    // Wait until Service Worker is active and ready
    let sw = navigator.serviceWorker.controller;
    if (!sw && this.swRegistration) {
      sw = this.swRegistration.active || this.swRegistration.waiting || this.swRegistration.installing;
    }

    if (sw) {
      sw.postMessage({
        type: 'INIT_POLL',
        token,
        revision: this.revision,
        userIdHash: this.system.profile.userIdHash,
      });
    } else {
      console.error('Service Worker controller is not active/available yet.');
    }
  }

  setRevision(revision: number): void {
    this.revision = revision;
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'UPDATE_REVISION',
        revision,
      });
    }
  }

  stop(): void {
    this.isPolling = false;
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'STOP_POLL',
      });
    }
  }
}

export default PollingController;
