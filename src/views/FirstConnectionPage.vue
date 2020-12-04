<template>
  <div id="login-page">
    <b-container class="mb-5 mt-5">
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-card>
            <b-card-text>
              <b-row>
                <b-col>
                  <h2>Bienvenue !</h2>
                  <p>C'est votre première connection !</p>
                  <p>Voici quelques informations à compléter/vérifier avant d'accéder au site</p>
                </b-col>
              </b-row>
              <b-form @submit="onSubmit">
                <b-form-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Prénom"
                      label-for="input-firstName"
                      :state="stateFirstName"
                      :invalid-feedback="feedbackFirstName"
                    >
                      <b-input-group>
                        <b-form-input
                          id="input-firstName"
                          v-model="firstName"
                          :disabled="!editFirstName"
                          :state="stateFirstName"
                          autocomplete="given-name"
                          trim
                        ></b-form-input>
                        <b-input-group-append v-if="!editFirstName">
                          <b-button
                            variant="outline-secondary"
                            @click="editFirstName = !editFirstName"
                          >
                            <b-icon-pencil></b-icon-pencil>
                          </b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col cols="12">
                    <b-form-group
                      label="Nom"
                      label-for="input-lastName"
                      :state="stateLastName"
                      :invalid-feedback="feedbackLastName"
                    >
                      <b-input-group>
                        <b-form-input
                          id="input-lastName"
                          v-model="lastName"
                          :disabled="!editLastName"
                          :state="stateLastName"
                          autocomplete="family-name"
                          trim
                        ></b-form-input>
                        <b-input-group-append v-if="!editLastName">
                          <b-button
                            variant="outline-secondary"
                            @click="editLastName = !editLastName"
                          >
                            <b-icon-pencil></b-icon-pencil>
                          </b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col cols="12">
                    <b-form-group
                      description="Entrez votre email"
                      label="Email"
                      label-for="input-email"
                      :state="stateEmail"
                      :invalid-feedback="feedbackEmail"
                    >
                      <b-form-input
                        id="input-email"
                        v-model="email"
                        :state="stateEmail"
                        autocomplete="email"
                        type="email"
                        trim
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col cols="12">
                    <b-form-group
                      description="Choisissez votre nouveau mot de passe"
                      label="Nouveau mot de passe"
                      label-for="input-password"
                      :state="statePassword"
                      :invalid-feedback="feedbackPassword"
                    >
                      <b-input-group>
                        <b-form-input
                          :type="passwordInputType"
                          id="input-password"
                          v-model="password"
                          :state="statePassword"
                          autocomplete="new-password"
                          trim
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button
                            variant="outline-secondary"
                            @click="showPassword = !showPassword"
                          >
                            <template v-if="showPassword">
                              <b-icon-eye-slash-fill></b-icon-eye-slash-fill>
                            </template>
                            <template v-else>
                              <b-icon-eye-fill></b-icon-eye-fill>
                            </template>
                          </b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col cols="12">
                    <b-form-group
                      description="Confirmez à nouveau votre nouveau mot de passe"
                      label="Confirmation mot de passe"
                      label-for="input-again-password"
                      :state="stateAgainPassword"
                      :invalid-feedback="feedbackAgainPassword"
                    >
                      <b-form-input
                        id="input-again-password"
                        v-model="againPassword"
                        :state="stateAgainPassword"
                        type="password"
                        trim
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col cols="12">
                    <template v-if="!isRefreshTokenSuccessfull">
                      <b-button
                        type="submit"
                        variant="primary"
                        :disabled="isButtonDisabled"
                      >
                        Enregistrer
                        <template v-if="isSubmitLoading">
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
import { IsNullOrWhiteSpace } from '../utils/extensions';
import userService from '@/services/user.service';

@Component({
  components: {
    'spinner-component': SpinnerComponent
  }
})
export default class FirstConnectionPage extends Vue {
  public firstName = '';
  public editFirstName = false;
  public stateFirstName: boolean | null = null;
  public feedbackFirstName = '';

  public lastName = '';
  public editLastName = false;
  public stateLastName: boolean | null = null;
  public feedbackLastName = '';

  public email = '';
  public stateEmail: boolean | null = null;
  public feedbackEmail = '';

  public password = '';
  public statePassword: boolean | null = null;
  public feedbackPassword = '';

  public againPassword = '';
  public stateAgainPassword: boolean | null = null;
  public feedbackAgainPassword = '';

  public showPassword = false;
  public timerInterval: number | undefined = undefined;

  public isSubmitLoading = false;

  private FEEDBACK_EMPTY_FIELD = 'Ce champs ne doit pas être vide';
  private FEEDBACK_NOT_SAME_PASSWORD = 'Les deux mots de passe ne correspondent pas';

  public mounted() {
    const alreadyConnected: boolean = authenticationStore.getIsUserAlreadyConnected;
    if (alreadyConnected) {
      this.$router.push({ name: ROUTES_NAMES.WEDDING_INFO });
    }

    const userConnected = authenticationStore.tokenData;
    this.firstName = userConnected?.firstName ?? '';
    this.lastName = userConnected?.lastName ?? '';
  }

  public get isButtonDisabled(): boolean {
    return this.isSubmitLoading;
  }

  public destroyed() {
    clearInterval(this.timerInterval);
    authenticationStore.resetStateRefresh();
  }

  public get passwordInputType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  /**
   * onSubmit
   */
  public async onSubmit(e: Event) {
    e.preventDefault();
    try {
      if (this.isFormValid()) {
        this.isSubmitLoading = true;

        await userService.updateUserProfile(
          authenticationStore?.tokenData?.id.toString() ?? '',
          this.email,
          this.firstName,
          this.lastName,
          this.password
        );

        await authenticationStore.refreshToken();

        this.isSubmitLoading = false;
      }
    } catch (error) {
      this.isSubmitLoading = false;
      console.error(error);
    }
  }

  public isFormValid(): boolean {
    let isValid = true;

    if (IsNullOrWhiteSpace(this.firstName)) {
      isValid = false;
      this.stateFirstName = false;
      this.feedbackFirstName = this.FEEDBACK_EMPTY_FIELD;
    } else {
      this.stateFirstName = true;
    }

    if (IsNullOrWhiteSpace(this.lastName)) {
      isValid = false;
      this.stateLastName = false;
      this.feedbackLastName = this.FEEDBACK_EMPTY_FIELD;
    } else {
      this.stateLastName = true;
    }

    if (IsNullOrWhiteSpace(this.email)) {
      isValid = false;
      this.stateEmail = false;
      this.feedbackEmail = this.FEEDBACK_EMPTY_FIELD;
      // TODO VALID EMAIL
    } else {
      this.stateEmail = true;
    }

    if (IsNullOrWhiteSpace(this.password)) {
      isValid = false;
      this.statePassword = false;
      this.feedbackPassword = this.FEEDBACK_EMPTY_FIELD;
    } else {
      this.statePassword = true;
    }

    if (IsNullOrWhiteSpace(this.againPassword) || this.againPassword !== this.password) {
      isValid = false;
      this.stateAgainPassword = false;
      if (IsNullOrWhiteSpace(this.againPassword)) {
        this.feedbackAgainPassword = this.FEEDBACK_EMPTY_FIELD;
      } else if (this.againPassword !== this.password) {
        this.feedbackAgainPassword = this.FEEDBACK_NOT_SAME_PASSWORD;
      }
    } else {
      this.stateAgainPassword = true;
    }

    return isValid;
  }

  @Watch('isRefreshTokenSuccessfull')
  public onisRefreshTokenSuccessfullChange() {
    if (this.isRefreshTokenSuccessfull) {
      this.timerInterval = setInterval(() => {
        this.$router.push({ name: ROUTES_NAMES.WEDDING_INFO });
      }, 1000);
    }
  }

  public get isRefreshTokenSuccessfull(): boolean {
    return authenticationStore.isRefreshTokenRequested && authenticationStore.isRefreshTokenSuccessfull && !IsNullOrWhiteSpace(authenticationStore.token);
  }
}
</script>

<style lang="scss">
</style>
