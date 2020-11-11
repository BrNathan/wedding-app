<template>
  <div id="answer-page">
    <b-container>
      <b-row>
        <b-col>
          <p>Vous êtes invité à notre mariage</p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-form @submit="onSubmit">
        <b-row>
          <b-col>
            <p>Je serais présent :</p>
          </b-col>
        </b-row>
        <b-form-row v-if="isUserInvitedToMairie">
          <b-col> A la mairie </b-col>
          <b-col>
            <b-form-checkbox
              v-model="isPresentMairie"
              name="check-button-mairie"
              switch
            >
              Oui
            </b-form-checkbox>
          </b-col>
        </b-form-row>
        <b-form-row v-if="isUserInvitedToCeremonie">
          <b-col> A la cérémonie laîque </b-col>
          <b-col>
            <b-form-checkbox
              v-model="isPresentCeremonie"
              name="check-button-ceremonie"
              switch
            >
              Oui
            </b-form-checkbox>
          </b-col>
        </b-form-row>
        <b-form-row v-if="isUserInvitedToRepas">
          <b-col> Au repas </b-col>
          <b-col>
            <b-form-checkbox
              v-model="isPresentRepas"
              name="check-button-repas"
              switch
            >
              Oui
            </b-form-checkbox>
          </b-col>
        </b-form-row>
      </b-form>
    </b-container>
    <b-container v-if="isUserPresentAtLeastOnce">
      <b-row>
        <b-col> Voici les personnes présentes : </b-col>
      </b-row>
      <b-row>
        <b-col>Moi</b-col>
      </b-row>
      <b-form-row>
        <b-col>Conjoint/Conjointe</b-col>
        <b-col>
          <b-form-checkbox
            v-model="isSpouseGuest"
            name="check-button-spouse"
            switch
          >
            Oui
          </b-form-checkbox>
        </b-col>
      </b-form-row>
      <b-form-row v-if="isSpouseGuest">
        <b-col>
          <b-form-group
            description="Nom du conjoint/conjointe"
            label="Nom"
            label-for="input-spouse-lastName"
            :state="stateSpouseLastName"
          >
            <b-form-input id="input-spouse-lastName" v-model="spouseLastName" :state="stateSpouseLastName" trim></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            description="Prénom du conjoint/conjointe"
            label="Prénom"
            label-for="input-spouse-firstName"
            :state="stateSpouseFirstName"
          >
            <b-form-input id="input-spouse-firstName" v-model="spouseFirstName" :state="stateSpouseFirstName" trim></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-row>
        <b-col>Enfants ? Nom|Prenom|Age</b-col>
        <b-col></b-col>
        <b-col> Ajouter un autre enfants ?</b-col>
      </b-row>
      <b-row>
        <b-col>Autre ? Nom|Prenom</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { STORE_AUTHENTICATION } from '@/store/namespace';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({
  components: {}
})
export default class AnswerPage extends Vue {
  @Getter('getUserInvitations', { namespace: STORE_AUTHENTICATION })
  private AUTH_getUserInvitations!: string[] | undefined;

  public get userInvitations(): string[] {
    return this.AUTH_getUserInvitations ?? [];
  }

  public isPresentMairie: boolean | null = null;
  private isMairieCheckoxAlreadyChange = false;
  public isPresentCeremonie: boolean | null = null;
  private isCeremonieCheckoxAlreadyChange = false;
  public isPresentRepas: boolean | null = null;
  private isRepasCheckoxAlreadyChange = false;

  public isSpouseGuest: boolean | null = null;
  public stateSpouseFirstName: boolean | null = null;
  public spouseFirstName = '';
  public stateSpouseLastName: boolean | null = null;
  public spouseLastName = '';

  @Watch('isPresentMairie')
  private onIsPresentMairieChange() {
    this.isMairieCheckoxAlreadyChange = true;
    if (
      !this.isCeremonieCheckoxAlreadyChange &&
      !this.isRepasCheckoxAlreadyChange
    ) {
      this.isPresentCeremonie = this.isUserInvitedToCeremonie && true;
      this.isPresentRepas = this.isUserInvitedToRepas && true;
    }
  }

  @Watch('isPresentCeremonie')
  private onIsPresentCeremonieChange() {
    this.isCeremonieCheckoxAlreadyChange = true;
    if (
      !this.isMairieCheckoxAlreadyChange &&
      !this.isRepasCheckoxAlreadyChange
    ) {
      this.isPresentMairie = this.isUserInvitedToMairie && true;
      this.isPresentRepas = this.isUserInvitedToRepas && true;
    }
  }

  @Watch('isPresentRepas')
  private onIsPresentRepasChange() {
    this.isRepasCheckoxAlreadyChange = true;
    if (
      !this.isMairieCheckoxAlreadyChange &&
      !this.isCeremonieCheckoxAlreadyChange
    ) {
      this.isPresentMairie = this.isUserInvitedToMairie && true;
      this.isPresentCeremonie = this.isUserInvitedToCeremonie && true;
    }
  }

  public get isUserPresentAtLeastOnce(): boolean {
    return (
      !!this.isPresentMairie ||
      !!this.isPresentCeremonie ||
      !!this.isPresentRepas
    );
  }

  public get isUserInvitedToMairie(): boolean {
    return this.userInvitations.includes('MAI');
  }

  public get isUserInvitedToCeremonie(): boolean {
    return this.userInvitations.includes('CER');
  }

  public get isUserInvitedToRepas(): boolean {
    return this.userInvitations.includes('REP');
  }

  public onSubmit(e: Event): void {
    e.preventDefault();
  }
}
</script>

<style lang="scss">
</style>
