import { Mutation, Module, VuexModule, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import authenticationService, { JWTTokenPayload } from '@/services/authentication.service';
import localStorageService from '@/services/local-storage.service';
import { Credentials } from '@/utils/types/authentication';
import { IsNullOrWhiteSpace } from '@/utils/extensions';

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
  public isRefreshTokenRequested = false;
  public isRefreshTokenSuccessfull = false;

  public get getUserInvitations(): string[] | undefined {
    return this.tokenData?.userInvitations;
  }

  public get getIsUserAlreadyConnected(): boolean {
    return this.tokenData?.isAlreadyConnected ?? false;
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
    // this.isAuthenticate = true;
    this.isLoginRequested = false;
  }

  @Mutation
  public resetStateRefresh() {
    // this.isAuthenticate = true;
    this.isRefreshTokenRequested = false;
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

  @Mutation
  public refreshTokenSuccess(refreshedToken: string) {
    this.token = refreshedToken;
    this.tokenData = authenticationService.getJwtTokenData(refreshedToken);
    localStorageService.setAuthToken(refreshedToken);
    this.isRefreshTokenSuccessfull = true;
  }

  @Mutation
  public refreshTokenFailed() {
    this.isRefreshTokenSuccessfull = false;
  }

  @Mutation
  public refreshTokenRequest() {
    this.isRefreshTokenRequested = true;
  }

  @Action
  public async refreshToken() {
    try {
      this.refreshTokenRequest();
      const refreshedToken = await authenticationService.refreshToken();
      if (!IsNullOrWhiteSpace(refreshedToken)) {
        this.refreshTokenSuccess(refreshedToken);
      } else {
      }
    } catch (error) {
      this.refreshTokenFailed();
    }
  }
}

export const authenticationStore = getModule(AuthenticationStore);
