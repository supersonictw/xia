import {System} from '~/client/system';
import {reactive} from 'vue';
import Constant from '~/client/data/const';

let systemInstance: System | null = null;

export const useSystem = (): System => {
  if (!import.meta.client) {
    throw new Error('useSystem must be called on the client side only.');
  }

  if (!systemInstance) {
    const token = localStorage.getItem(Constant.LOCAL_STORAGE.ACCESS_KEY);
    systemInstance = reactive(new System(token)) as System;
  }

  return systemInstance;
};

export default useSystem;

