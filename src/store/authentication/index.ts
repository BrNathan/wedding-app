import { Mutation, Module, VuexModule, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import authenticationService, { JWTTokenPayload } from '@/services/authentication.service';
import localStorageService from '@/services/local-storage.service';
import { Credentials } from '@/utils/types/authentication';

@Module({
  dynamic: true,
  name: 'authentication',
  namespaced: true,
  store
})
export default class AuthenticationStore extends VuexModule {
  public isAuthenticate = false;
  public isLoginRequested = false;
  public token: string | null = null;
  public tokenData: JWTTokenPayload | null = null;

  public get getUserInvitations(): string[] | undefined {
    return this.tokenData?.userInvitations;
  }

  @Mutation
  public loginRequest() {
    this.isLoginRequested = false;
  }

  @Mutation
  public loginSuccess(payloadToken: string) {
    this.isLoginRequested = true;
    this.isAuthenticate = true;
    this.token = payloadToken;
    this.tokenData = authenticationService.getJwtTokenData(payloadToken);
    localStorageService.setAuthToken(payloadToken);
  }

  @Mutation
  public loginFailure() {
    this.isLoginRequested = true;
    this.isAuthenticate = false;
    this.token = null;
  }

  @Mutation
  public logout() {
    this.isAuthenticate = false;
    this.isLoginRequested = false;
    this.token = null;
    authenticationService.logout();
  }

  @Mutation
  public resetState() {
    this.isAuthenticate = true;
    this.isLoginRequested = false;
  }

  @Action
  public async login(credential: Credentials) {
    try {
      this.loginRequest();
      const token = await authenticationService.login({ username: credential.email, password: credential.password });
      if (token && token !== '') {
        this.loginSuccess(token);
      } else {

      }
    } catch (error) {
      this.loginFailure();
    }
  }
}

export const authenticationStore = getModule(AuthenticationStore);
