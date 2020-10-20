
import { ActionTree } from 'vuex';
import { Credential } from '@/utils/types/authentication';
import authService from '@/services/authentication.service';
import { RootState } from '../types';
import { AuthenticationState } from './types';

const actions: ActionTree<AuthenticationState, RootState> = {
  async login({ commit }, credential: Credential): Promise<void> {
    try {
      commit('loginRequest');
      const token = await authService.login({ username: credential.email, password: credential.password });
      if (token && token !== '') {
        commit('loginSuccess', token);
      } else {

      }
    } catch (error) {
      commit('loginFailure');
    }
  },
  logout({ commit }) {
    // authService.logout();
    commit('logout');
  }
};

export default actions;
