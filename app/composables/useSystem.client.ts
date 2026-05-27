import {System} from '~/client/system';
import Constant from '~/client/data/const';

let systemInstance: System | null = null;

export const useSystem = (): System => {
  if (!import.meta.client) {
    throw new Error('useSystem must be called on the client side only.');
  }

  if (!systemInstance) {
    const token = localStorage.getItem(Constant.LOCAL_STORAGE.ACCESS_KEY);
    systemInstance = new System(token);
  }

  return systemInstance;
};

export default useSystem;
