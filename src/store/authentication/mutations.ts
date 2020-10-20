import { MutationTree } from 'vuex';
import { AuthenticationState } from './types';
import LocalStorageService from '@/services/local-storage.service';

const mutations: MutationTree<AuthenticationState> = {
  loginRequest(state: AuthenticationState) {
    state.isLoginRequested = false;
  },
  loginSuccess(state: AuthenticationState, payloadToken: string) {
    state.isLoginRequested = true;
    state.isAuthenticate = true;
    state.token = payloadToken;
    LocalStorageService.setAuthToken(payloadToken);
  },
  loginFailure(state: AuthenticationState) {
    state.isLoginRequested = true;
    state.isAuthenticate = false;
    state.token = null;
  },
  logout(state: AuthenticationState) {
    state.isAuthenticate = false;
    state.isLoginRequested = false;
    state.token = null;
    LocalStorageService.resetAuthToken();
  },
  resetState(state: AuthenticationState) {
    state.isAuthenticate = true;
    state.isLoginRequested = false;
  }
};

export default mutations;
