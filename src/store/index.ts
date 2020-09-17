import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

interface RootState {
  isLoading: boolean;
}

const store: StoreOptions<RootState> = {
  state: {
    isLoading: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
};

export default new Vuex.Store<RootState>(store);
