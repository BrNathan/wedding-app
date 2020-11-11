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
        <b-col>
          <b-form-group
            description="Nom"
            label="Nom"
            label-for="input-user-lastName"
            :state="stateUserLastName"
          >
            <b-form-input id="input-user-lastName" v-model="userLastName" :state="stateUserLastName" trim></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            description="Prénom"
            label="Prénom"
            label-for="input-user-firstName"
            :state="stateUserFirstName"
          >
            <b-form-input id="input-user-firstName" v-model="userFirstName" :state="stateUserFirstName" trim></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
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
      <b-form-row>
        <b-col>Enfants</b-col>
        <b-col>
          <b-form-checkbox
            v-model="isChildrenGuest"
            name="check-button-spouse"
            switch
          >
            Oui
          </b-form-checkbox>
        </b-col>
      </b-form-row>
      <template v-if="isChildrenGuest">
        <b-form-row v-for="(item, index) in childrenGuest" :key="index">
          <b-col>
            <b-form-group
              description="Nom de l'enfant"
              label="Nom"
              :label-for="'input-child-lastName'+index"
            >
              <b-form-input :id="'input-child-lastName'+index" v-model="item.lastName" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              description="Prénom de l'enfant"
              label="Prénom"
              :label-for="'input-child-firstName'+index"
            >
              <b-form-input :id="'input-child-firstName'+index" v-model="item.firstName" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              description="Age de l'enfant"
              label="Age"
              :label-for="'input-child-age'+index"
            >
              <b-form-input :id="'input-child-age'+index" v-model="item.age" type="number" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-button @click="removeChild(item.id)">Remove</b-button>
          </b-col>
        </b-form-row>
        <b-row>
          <b-col @click="addChild"> Ajouter un autre enfants ?</b-col>
        </b-row>
      </template>
      <b-form-row>
        <b-col>Autre</b-col>
        <b-col>
          <b-form-checkbox
            v-model="isOtherGuest"
            name="check-button-other"
            switch
          >
            Oui
          </b-form-checkbox>
        </b-col>
      </b-form-row>
      <template v-if="isOtherGuest">
        <b-form-row v-for="(item, index) in otherGuest" :key="index">
          <b-col>
            <b-form-group
              description="Nom de l'invité"
              label="Nom"
              :label-for="'input-other-lastName'+index"
            >
              <b-form-input :id="'input-other-lastName'+index" v-model="item.lastName" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              description="Prénom de l'invité"
              label="Prénom"
              :label-for="'input-other-firstName'+index"
            >
              <b-form-input :id="'input-other-firstName'+index" v-model="item.firstName" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-button @click="removeOther(item.id)">Remove</b-button>
          </b-col>
        </b-form-row>
        <b-row>
          <b-col @click="addOther"> Ajouter un autre enfants ?</b-col>
        </b-row>
      </template>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { authenticationStore } from '@/store/authentication';
import { GenerateGuid } from '@/utils/extensions';

export interface ChildGuest {
  id: string;
  firstName: string;
  lastName: string;
  age?: number;
}
export interface OtherGuest {
  id: string;
  firstName: string;
  lastName: string;
}

@Component({
  components: {}
})
export default class AnswerPage extends Vue {
  public get userInvitations(): string[] {
    return authenticationStore.getUserInvitations ?? [];
  }

  public isPresentMairie: boolean | null = null;
  private isMairieCheckoxAlreadyChange = false;
  public isPresentCeremonie: boolean | null = null;
  private isCeremonieCheckoxAlreadyChange = false;
  public isPresentRepas: boolean | null = null;
  private isRepasCheckoxAlreadyChange = false;

  public stateUserLastName: boolean | null = null;
  public userLastName = '';
  public stateUserFirstName: boolean | null = null;
  public userFirstName = '';

  public isSpouseGuest: boolean | null = null;
  public stateSpouseFirstName: boolean | null = null;
  public spouseFirstName = '';
  public stateSpouseLastName: boolean | null = null;
  public spouseLastName = '';

  public isChildrenGuest: boolean | null = null;
  public childrenGuest: ChildGuest[] = [{
    id: GenerateGuid(),
    firstName: '',
    lastName: ''
  }];

  public isOtherGuest: boolean | null = null;
  public otherGuest: OtherGuest[] = [{
    id: GenerateGuid(),
    firstName: '',
    lastName: ''
  }];

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

  public addChild() {
    this.childrenGuest.push({
      id: GenerateGuid(),
      firstName: '',
      lastName: ''
    });
  }

  public removeChild(id: string) {
    this.childrenGuest = this.childrenGuest.filter(c => c.id !== id);
  }

  public addOther() {
    this.otherGuest.push({
      id: GenerateGuid(),
      firstName: '',
      lastName: ''
    });
  }

  public removeOther(id: string) {
    this.otherGuest = this.otherGuest.filter(c => c.id !== id);
  }
}
</script>

<style lang="scss">
</style>
