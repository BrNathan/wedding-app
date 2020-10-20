<template>
  <div id="login-page">
    <b-container class="mb-5 mt-5">
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-card>
            <b-card-text>
              <b-form @submit="onSubmit">
                <b-form-row>
                  <b-col cols="12">
                    <b-form-group
                      description="Entre ton identifiant"
                      label="Identifiant"
                      label-for="input-username"
                      :state="stateUsername"
                    >
                      <b-form-input id="input-username" v-model="username" :state="stateUsername" trim></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col cols="12">
                    <b-form-group
                      description="Entre ton mot de passe"
                      label="Mot de passe"
                      label-for="input-password"
                      :state="statePassword"
                    >
                      <b-input-group>
                        <b-form-input :type="passwordInputType" id="input-password" v-model="password" :state="statePassword" trim></b-form-input>
                        <b-input-group-append>
                          <b-input-group-text variant="outline-secondary" @click="showPassword = !showPassword">
                            <template v-if="showPassword">
                              <b-icon-eye-slash-fill></b-icon-eye-slash-fill>
                            </template>
                            <template v-else>
                              <b-icon-eye-fill></b-icon-eye-fill>
                            </template>
                          </b-input-group-text>
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col cols="12">
                    <template v-if="!isLoggedIn">
                      <b-button type="submit" variant="primary" :disabled="isButtonDisabled">
                        Connexion
                        <template v-if="isLoginLoading">
                          <b-spinner small type="grow" label="Loading..."></b-spinner>
                        </template>
                      </b-button>
                    </template>
                    <template v-else>
                      <div class="d-flex justify-content-center mb-3">
                        <spinner-component />
                      </div>
                    </template>
                  </b-col>
                </b-form-row>
              </b-form>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { STORE_AUTHENTICATION } from '@/store/namespace';
import { Credential } from '@/utils/types/authentication';
import SpinnerComponent from '@/components/Spinner.vue';
import { ROUTES_NAMES } from '@/router/router-names';

@Component({
  components: {
    'spinner-component': SpinnerComponent
  }
})
export default class LoginPage extends Vue {
  public username = '';
  public password = '';
  public showPassword = false;
  public timerInterval: number | undefined = undefined;
  public isLoginLoading = false;

  @Action('login', { namespace: STORE_AUTHENTICATION })
  AUTH_login!: (credential: Credential) => void;

  @Mutation('resetState', { namespace: STORE_AUTHENTICATION })
  private AUTH_resetState!: () => void;

  @Watch('isLoggedIn')
  private onIsLoggedInChange(): void {
    if (this.isLoggedIn) {
      this.timerInterval = setInterval(() => {
        this.$router.push({ name: ROUTES_NAMES.WEDDING_INFO });
      }, 1000);
    }
  }

  public get isButtonDisabled(): boolean {
    return this.AUTH_isLoginRequested && this.isLoginLoading;
  }

  public destroyed() {
    clearInterval(this.timerInterval);
    this.AUTH_resetState && this.AUTH_resetState();
  }

  public get passwordInputType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  /**
   * onSubmit
   */
  public async onSubmit(e: Event) {
    this.isLoginLoading = true;
    e.preventDefault();
    if (this.AUTH_login) {
      await this.AUTH_login({ email: this.username, password: this.password });
      this.isLoginLoading = false;
    }
  }

  @State('isLoginRequested', { namespace: STORE_AUTHENTICATION })
  private AUTH_isLoginRequested!: boolean;

  @State('isAuthenticate', { namespace: STORE_AUTHENTICATION })
  private AUTH_isAuthenticate!: boolean;

  @State('token', { namespace: STORE_AUTHENTICATION })
  private AUTH_token!: boolean;

  public get stateUsername(): boolean | null {
    if (this.AUTH_isLoginRequested) {
      return this.AUTH_isLoginRequested && this.AUTH_isAuthenticate;
    }
    return null;
  }

  public get statePassword(): boolean | null {
    if (this.AUTH_isLoginRequested) {
      return this.AUTH_isLoginRequested && this.AUTH_isAuthenticate;
    }
    return null;
  }

  public get isLoggedIn(): boolean {
    return this.AUTH_isLoginRequested && this.AUTH_isAuthenticate && this.AUTH_token;
  }
}
</script>

<style lang="scss">

</style>
