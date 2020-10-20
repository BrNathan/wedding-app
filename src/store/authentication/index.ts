import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { AuthenticationState } from './types';
import { RootState } from '../types';

export const state: AuthenticationState = {
  isAuthenticate: false,
  isLoginRequested: false,
  token: null
};

const namespaced = true;

export const authentication: Module<AuthenticationState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
