import {Buffer} from 'buffer';

import Constant from './data/const';
import IDBController from './data/idb';
import OperationController from './controller/operation';
import lineClient from './index';
// Polyfill global Buffer for Thrift compact protocol compatibility
(globalThis as any).Buffer = Buffer;

// Declare self type
const sw = self as any;

let isPolling = false;
let revision = 0;
let token = '';
let userIdHash = '';
let pollClient: any = null;
let idbInstance: IDBController | null = null;
let opController: OperationController | null = null;
let swSystem: any = null;

// Install and Activate Event Listeners
sw.addEventListener('install', (event: any) => {
  event.waitUntil(sw.skipWaiting());
});

sw.addEventListener('activate', (event: any) => {
  event.waitUntil(sw.clients.claim());
});

// Handle incoming messages
sw.addEventListener('message', async (event: any) => {
  const data = event.data;
  if (!data) return;

  switch (data.type) {
    case 'INIT_POLL':
      token = data.token;
      revision = data.revision;
      userIdHash = data.userIdHash;

      console.log('SW: INIT_POLL received', {revision, userIdHash});

      // Create new Instances
      swSystem = {
        profile: {
          userId: '',
          userIdHash: userIdHash,
          displayName: '',
          picturePath: '',
          statusMessage: '',
        },
        clients: {
          query: lineClient(Constant.LINE.PATH.QUERY, token),
        },
        idb: null as any,
        sync: {
          syncProfile(profile: any) {
            swSystem.profile.userId = profile.mid;
            swSystem.profile.userIdHash = userIdHash;
            swSystem.profile.displayName = profile.displayName;
            swSystem.profile.picturePath = profile.picturePath;
            swSystem.profile.statusMessage = profile.statusMessage;
          },
        },
        chatBoxAddMsg: null,
        chatBoxReadMsg: null,
      };

      idbInstance = new IDBController(swSystem);
      idbInstance.updateUserIdHash(userIdHash);
      await idbInstance.init();
      swSystem.idb = idbInstance;

      opController = new OperationController(swSystem);

      pollClient = lineClient(Constant.LINE.PATH.POLL, token);
      isPolling = true;

      // Start Polling Loop
      pollLoop();
      break;

    case 'STOP_POLL':
      console.log('SW: STOP_POLL received');
      isPolling = false;
      break;

    case 'UPDATE_REVISION':
      console.log('SW: UPDATE_REVISION received', data.revision);
      revision = Math.max(revision, data.revision);
      break;
  }
});

/**
 *
 */
async function pollLoop() {
  console.log('SW: Polling loop started at revision', revision);

  while (isPolling) {
    try {
      const ops = await new Promise<any[]>((resolve, reject) => {
        pollClient.fetchOperations(revision, Constant.FETCH_OP_NUM, (err: any, result: any) => {
          if (err) return reject(err);
          resolve(result);
        });
      });

      if (!isPolling) break;

      if (ops && ops.length > 0) {
        console.log(`SW: Fetched ${ops.length} operations`);

        for (const op of ops) {
          if (op.revision) {
            const opRev = typeof op.revision === 'object' && op.revision.toNumber ?
              op.revision.toNumber() :
              parseInt(op.revision, 10);
            if (opRev > revision) {
              revision = opRev;
            }
          }
          if (opController) {
            await opController.update(op);
          }
        }

        // Save new revision to IndexedDB Settings
        if (idbInstance && idbInstance.user) {
          await idbInstance.user.put(Constant.IDB.USER.SETTINGS, {
            id: Constant.IDB.USER.KEY.SETTINGS_REVISION,
            value: revision.toString(),
          });
        }

        // Broadcast revision and operations to all active client tabs
        const clientsList = await sw.clients.matchAll({type: 'window'});
        for (const c of clientsList) {
          c.postMessage({
            type: 'POLL_OPERATIONS',
            operations: ops,
            revision: revision,
          });
        }
      }
    } catch (err: any) {
      console.error('SW: Polling error occurred', err);

      // Broadcast error to all active client tabs
      const clientsList = await sw.clients.matchAll({type: 'window'});
      for (const c of clientsList) {
        c.postMessage({
          type: 'POLL_ERROR',
          error: err.message || err,
        });
      }

      // Delay before retrying
      await new Promise((resolve) => setTimeout(resolve, Constant.TIMEOUT.RETRY * 1000));
    }
  }

  console.log('SW: Polling loop stopped');
}
