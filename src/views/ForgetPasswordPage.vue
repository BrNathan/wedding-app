<template>
  <div id="forget-password-page">
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
                      description="Entrez votre identifiant (6 caractères)"
                      label="Identifiant"
                      label-for="input-username"
                      :state="stateUsername"
                      :invalid-feedback="feedbackUsername"
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
                      description="Entrez votre nouveau mot de passe"
                      label="Mot de passe"
                      label-for="input-password"
                      :state="statePassword"
                      :invalid-feedback="feedbackPassword"
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
                        autocomplete="new-password"
                        type="password"
                        trim
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-row v-if="isChangeSuccessfull">
                  <b-col style="color: green">
                    Changement du mot de passe réalisé avec succès. Vous allez
                    être redirigé vers la page de connexion.
                  </b-col>
                </b-row>
                <b-row v-if="isChangeError">
                  <b-col style="color: red">
                    Erreur lors du changement du mot de passe. Vérifiez les informations remplies.
                  </b-col>
                </b-row>
                <b-form-row>
                  <b-col cols="12">
                    <b-row>
                      <b-col cols="6" class="text-left">
                        <b-button
                          variant="outline-secondary"
                          :to="{ name: loginPageName }"
                        >
                          Retour
                        </b-button>
                      </b-col>
                      <b-col cols="6" class="text-right">
                        <b-button
                          type="submit"
                          variant="primary"
                          :disabled="isButtonDisabled"
                        >
                          Valider
                          <template v-if="isLoading">
                            <b-spinner
                              small
                              type="grow"
                              label="Loading..."
                            ></b-spinner>
                          </template>
                        </b-button>
                      </b-col>
                    </b-row>
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
import { Component, Vue } from 'vue-property-decorator';
import SpinnerComponent from '@/components/Spinner.vue';
import { ROUTES_NAMES } from '@/router/router-names';
import { IsNullOrWhiteSpace } from '@/utils/extensions';
import authService from '@/services/authentication.service';

@Component({
  components: {
    'spinner-component': SpinnerComponent
  }
})
export default class ForgetPasswordPage extends Vue {
  public showPassword = false;
  public isLoading = false;
  public isChangeSuccessfull = false;
  public isChangeError = false;

  private FEEDBACK_EMPTY_FIELD = 'Ce champs ne doit pas être vide';
  private FEEDBACK_NOT_SAME_PASSWORD = 'Les deux mots de passe ne correspondent pas';

  public username = '';
  public stateUsername: boolean | null = null;
  public feedbackUsername = '';

  public password = '';
  public statePassword: boolean | null = null;
  public feedbackPassword = '';

  public againPassword = '';
  public stateAgainPassword: boolean | null = null;
  public feedbackAgainPassword = '';

  public get isButtonDisabled(): boolean {
    return this.isLoading;
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
      if (await this.isFormValid()) {
        this.isChangeError = false;
        this.isLoading = true;

        const result = await authService.changePassword({ username: this.username, newPassword: this.password });

        if (result && result.result) {
          this.isChangeSuccessfull = true;
          setTimeout(() => {
            this.$router.push({ name: ROUTES_NAMES.LOGIN_PAGE });
          }, 4000);
        } else {
          this.isChangeError = true;
          this.isLoading = false;
        }
      }
    } catch (error) {
      this.isLoading = false;
      this.isChangeError = true;
      console.error(error);
    }
  }

  public async isFormValid(): Promise<boolean> {
    let isValid = true;

    if (IsNullOrWhiteSpace(this.username)) {
      isValid = false;
      this.stateUsername = false;
      this.feedbackUsername = this.FEEDBACK_EMPTY_FIELD;
    } else {
      this.stateUsername = null;
    }

    if (IsNullOrWhiteSpace(this.password)) {
      isValid = false;
      this.statePassword = false;
      this.feedbackPassword = this.FEEDBACK_EMPTY_FIELD;
    } else {
      this.statePassword = null;
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
      this.stateAgainPassword = null;
    }

    return isValid;
  }

  public get loginPageName(): string {
    return ROUTES_NAMES.LOGIN_PAGE;
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
