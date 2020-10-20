import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { authentication } from './authentication';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isLoading: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication
  }
};

export default new Vuex.Store<RootState>(store);
