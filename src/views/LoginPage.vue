<template>
  <div id="login-page">
    <b-container class="mb-5 mt-5">
      <b-row class="justify-content-center">
        <b-col cols="12" sm="12" md="9" lg="6" xl="6">
          <b-card>
            <b-card-text>
              <b-form @submit="onSubmit">
                <b-form-row>
                  <b-col cols="12" class="mb-3 text-center">
                    <h2>
                      Mariage
                      <span class="spouse-bride-name">Amélie & Nathan</span>
                    </h2>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group
                      description="Entre ton identifiant"
                      label="Identifiant"
                      label-for="input-username"
                      :state="stateUsername"
                    >
                      <b-form-input
                        id="input-username"
                        v-model="username"
                        autocomplete="username"
                        :state="stateUsername"
                        trim
                      ></b-form-input>
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
                        <b-form-input
                          :type="passwordInputType"
                          id="input-password"
                          autocomplete="password"
                          v-model="password"
                          :state="statePassword"
                          trim
                        ></b-form-input>
                        <b-input-group-append>
                          <b-input-group-text
                            variant="outline-secondary"
                            @click="showPassword = !showPassword"
                          >
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
                      <b-button
                        type="submit"
                        variant="primary"
                        :disabled="isButtonDisabled"
                      >
                        Connexion
                        <template v-if="isLoginLoading">
                          <b-spinner
                            small
                            type="grow"
                            label="Loading..."
                          ></b-spinner>
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
import SpinnerComponent from '@/components/Spinner.vue';
import { ROUTES_NAMES } from '@/router/router-names';
import { authenticationStore } from '@/store/authentication';
import { IsNullOrWhiteSpace } from '@/utils/extensions';

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

  @Watch('isLoggedIn')
  private onIsLoggedInChange(): void {
    if (this.isLoggedIn) {
      const alreadyConnected: boolean = authenticationStore.getIsUserAlreadyConnected;
      this.timerInterval = setInterval(() => {
        if (alreadyConnected) {
          this.$router.push({ name: ROUTES_NAMES.WEDDING_INFO });
        } else {
          this.$router.push({ name: ROUTES_NAMES.FIRST_CONNECTION_PAGE });
        }
      }, 1000);
    }
  }

  public get isButtonDisabled(): boolean {
    return authenticationStore.isLoginRequested && this.isLoginLoading;
  }

  public destroyed() {
    clearInterval(this.timerInterval);
    authenticationStore.resetState();
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
    await authenticationStore.login({
      email: this.username,
      password: this.password
    });
    this.isLoginLoading = false;
  }

  public get stateUsername() {
    if (!authenticationStore.isLoginRequested) {
      return null;
    }
    return authenticationStore.isLoginRequested && authenticationStore.isAuthenticate;
  }

  public get statePassword() {
    if (!authenticationStore.isLoginRequested) {
      return null;
    }
    return authenticationStore.isLoginRequested && authenticationStore.isAuthenticate;
  }

  public get isLoggedIn(): boolean {
    return authenticationStore.isLoginRequested && authenticationStore.isAuthenticate && !IsNullOrWhiteSpace(authenticationStore.token);
  }
}
</script>

<style lang="scss">
#login-page {
  .spouse-bride-name {
    font-family: "Great Vibes", cursive;
    color: #f67e7d !important;
  }
}
</style>
