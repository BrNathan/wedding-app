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
                    <b-button type="submit" variant="primary">Connexion</b-button>
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

@Component({
  components: {
  }
})
export default class LoginPage extends Vue {
  public stateUsername: boolean | null = null;
  public statePassword: boolean | null = null;
  public username = '';
  public password = '';
  public showPassword = false;

  public get passwordInputType(): string {
    return this.showPassword ? 'text' : 'password';
  }

  /**
   * onSubmit
   */
  public onSubmit(e: Event) {
    e.preventDefault();
    console.log('username : ' + this.username);
    console.log('password : ' + this.password);
  }
}
</script>

<style lang="scss">

</style>
