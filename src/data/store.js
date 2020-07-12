import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    authToken: "",
  },
  getters: {
    getAuthToken(state) {
      return state.authToken || false;
    },
  },
  mutations: {
    updateAuthToken(state, accessKey) {
      state.authToken = accessKey;
    },
  },
});

export default Store;
