import { GetterTree } from 'vuex';
import { AuthenticationState } from './types';
import { RootState } from '../types';

const getters: GetterTree<AuthenticationState, RootState> = {
  isAuthenticate(state): boolean {
    return state.isAuthenticate;
  }
};

export default getters;
