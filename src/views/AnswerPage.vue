<template>
  <div id="answer-page">
    <b-container>
      <b-row>
        <b-col>
          <p>Vous êtes invité à notre mariage</p>
        </b-col>
      </b-row>
    </b-container>
    <b-form @submit="onSubmit">
      <b-container>
        <b-row>
          <b-col>
            <p>Je serais présent :</p>
          </b-col>
        </b-row>
        <b-form-row v-for="(item, index) in userInvitations" :key="index">
          <template v-if="isInvitedToMairie(item)">
            <b-col> A la mairie </b-col>
            <b-col>
              <b-form-checkbox
                v-model="item.answer"
                name="check-button-mairie"
                switch
              >
                Oui
              </b-form-checkbox>
            </b-col>
          </template>
          <template v-if="isInvitedToCeremonie(item)">
            <b-col> A la cérémonie laîque </b-col>
            <b-col>
              <b-form-checkbox
                v-model="item.answer"
                name="check-button-ceremonie"
                switch
              >
                Oui
              </b-form-checkbox>
            </b-col>
          </template>
          <template v-if="isInvitedToRepas(item)">
            <b-col> Au repas </b-col>
            <b-col>
              <b-form-checkbox
                v-model="item.answer"
                name="check-button-repas"
                switch
              >
                Oui
              </b-form-checkbox>
            </b-col>
          </template>
        </b-form-row>
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
              label="Prénom"
              label-for="input-user-firstName"
              :state="stateUserFirstName"
            >
              <b-form-input
                id="input-user-firstName"
                v-model="selfUserGuest.firstName"
                :state="stateUserFirstName"
                trim
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Nom"
              label-for="input-user-lastName"
              :state="stateUserLastName"
            >
              <b-form-input
                id="input-user-lastName"
                v-model="selfUserGuest.lastName"
                :state="stateUserLastName"
                trim
              ></b-form-input>
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
              label="Prénom"
              label-for="input-spouse-firstName"
              :state="stateSpouseFirstName"
            >
              <b-form-input
                id="input-spouse-firstName"
                v-model="spouseGuest.firstName"
                :state="stateSpouseFirstName"
                trim
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="Nom"
              label-for="input-spouse-lastName"
              :state="stateSpouseLastName"
            >
              <b-form-input
                id="input-spouse-lastName"
                v-model="spouseGuest.lastName"
                :state="stateSpouseLastName"
                trim
              ></b-form-input>
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
          <b-form-row v-for="(item, index) in childrenGuest" :key="'child-'+index">
            <b-col>
              <b-form-group
                label="Prénom"
                :label-for="'input-child-firstName' + index"
              >
                <b-form-input
                  :id="'input-child-firstName' + index"
                  v-model="item.firstName"
                  trim
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Nom"
                :label-for="'input-child-lastName' + index"
              >
                <b-form-input
                  :id="'input-child-lastName' + index"
                  v-model="item.lastName"
                  trim
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Age"
                :label-for="'input-child-age' + index"
              >
                <b-form-input
                  :id="'input-child-age' + index"
                  v-model="item.age"
                  type="number"
                  trim
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-button @click="removeChild(index)">Remove</b-button>
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
          <b-form-row v-for="(item, index) in otherGuest" :key="'other-' + index">
            <b-col>
              <b-form-group
                label="Prénom"
                :label-for="'input-other-firstName' + index"
              >
                <b-form-input
                  :id="'input-other-firstName' + index"
                  v-model="item.firstName"
                  trim
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                label="Nom"
                :label-for="'input-other-lastName' + index"
              >
                <b-form-input
                  :id="'input-other-lastName' + index"
                  v-model="item.lastName"
                  trim
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-button @click="removeOther(index)" variant="primary" class="mb-2">
                <b-icon icon="trash" aria-label="Remove"></b-icon>
              </b-button>
            </b-col>
          </b-form-row>
          <b-row>
            <b-col @click="addOther"> Ajouter une autre personne ?</b-col>
          </b-row>
        </template>
        <b-form-row>
          <b-col>
            <b-button
              variant="primary"
              :disabled="isSaveButtonDisabled"
              @click="saveGuest"
            >
              Sauvegarder
              <template v-if="isSaveLoading">
                <b-spinner small type="grow" label="Loading..."></b-spinner>
              </template>
            </b-button>
          </b-col>
        </b-form-row>
      </b-container>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { authenticationStore } from '@/store/authentication';
import { IsNullOrWhiteSpace } from '@/utils/extensions';
import answerService from '@/services/answer.service';
import {
  SelfUserGuest,
  SpouseGuest,
  OtherGuest,
  ChildGuest,
  UserInvitation,
  UserGuest,
  UserInfo
} from '../utils/types/index';

@Component({
  components: {}
})
export default class AnswerPage extends Vue {
  public userInvitations: UserInvitation[] = [];

  public async mounted() {
    await this.initData();
  }

  public stateUserLastName: boolean | null = null;
  public stateUserFirstName: boolean | null = null;
  public selfUserGuest: SelfUserGuest = {
    firstName: '',
    lastName: ''
  };

  public isSpouseGuest: boolean | null = null;
  public stateSpouseFirstName: boolean | null = null;
  public stateSpouseLastName: boolean | null = null;
  public spouseGuest: SpouseGuest = {
    firstName: '',
    lastName: ''
  };

  public isChildrenGuest: boolean | null = null;
  public childrenGuest: ChildGuest[] = [
    {
      firstName: '',
      lastName: ''
    }
  ];

  public isOtherGuest: boolean | null = null;
  public otherGuest: OtherGuest[] = [
    {
      firstName: '',
      lastName: ''
    }
  ];

  public isSaveButtonDisabled = false;
  public isSaveLoading = false;

  public get isUserPresentAtLeastOnce(): boolean {
    return this.userInvitations.some((i) => i.answer);
  }

  public isInvitedToMairie(userInvitation: UserInvitation): boolean {
    return userInvitation.invitation.code === 'MAI';
  }

  public isInvitedToCeremonie(userInvitation: UserInvitation): boolean {
    return userInvitation.invitation.code === 'CER';
  }

  public isInvitedToRepas(userInvitation: UserInvitation): boolean {
    return userInvitation.invitation.code === 'REP';
  }

  public onSubmit(e: Event): void {
    e.preventDefault();
  }

  public addChild() {
    this.childrenGuest.push({
      firstName: '',
      lastName: ''
    });
  }

  public removeChild(removedIndex: number) {
    this.childrenGuest = this.childrenGuest.filter((value, index) => index !== removedIndex);
  }

  public addOther() {
    this.otherGuest.push({
      firstName: '',
      lastName: ''
    });
  }

  public removeOther(removedIndex: number) {
    this.otherGuest = this.otherGuest.filter((value, index) => index !== removedIndex);
  }

  public async saveGuest() {
    this.isSaveButtonDisabled = true;
    this.isSaveLoading = true;
    try {
      const resultInvitation = await answerService.updateUserInvitationResponse(authenticationStore?.tokenData?.id.toString() ?? '', this.userInvitations);
      console.log(resultInvitation);

      if (this.isUserPresentAtLeastOnce) {
        const userId: number = authenticationStore?.tokenData?.id ?? 0;
        if (userId === 0) {
          throw Error('User not found');
        }
        const userGuestList: UserGuest[] = [];

        userGuestList.push({
          firstName: this.selfUserGuest.firstName,
          lastName: this.selfUserGuest.lastName,
          isSpouse: false,
          isOther: false,
          isUser: true,
          isChildren: false,
          userId: userId
        });

        if (this.isSpouseGuest) {
          userGuestList.push({
            firstName: this.spouseGuest.firstName,
            lastName: this.spouseGuest.lastName,
            isSpouse: true,
            isOther: false,
            isUser: false,
            isChildren: false,
            userId: userId
          });
        }

        if (this.isChildrenGuest) {
          this.childrenGuest.forEach((value) => {
            userGuestList.push({
              firstName: value.firstName,
              lastName: value.lastName,
              isSpouse: false,
              isOther: false,
              isUser: false,
              isChildren: true,
              age: +(value.age ?? '0'),
              userId: userId
            });
          });
        }

        if (this.isOtherGuest) {
          this.otherGuest.forEach((value) => {
            userGuestList.push({
              firstName: value.firstName,
              lastName: value.lastName,
              isSpouse: false,
              isOther: true,
              isUser: false,
              isChildren: false,
              userId: userId
            });
          });
        }

        console.log('userGuestList', userGuestList);
        const resultGuests = await answerService.updateUserGuest(authenticationStore?.tokenData?.id.toString() ?? '', userGuestList);
        console.log(resultGuests);
      }
    } catch (error) {
      console.error(error);
    }
    await this.initData();
    this.isSaveButtonDisabled = false;
    this.isSaveLoading = false;
  }

  public async initData() {
    const userInvitations: UserInvitation[] = await answerService.getUserInvitations(
      authenticationStore?.tokenData?.id.toString() ?? ''
    );
    if (userInvitations != null && userInvitations.length > 0) {
      this.userInvitations = [...userInvitations.sort((a, b) => {
        let result = 0;

        if (a.invitation.code === 'MAI') {
          result = -1;
        } else if (b.invitation.code === 'MAI') {
          result = 1;
        } else if (a.invitation.code === 'CER') {
          result = -1;
        } else if (b.invitation.code === 'CER') {
          result = 1;
        } else {
          result = 0;
        }
        return result;
      })];
    }

    const guests: UserGuest[] = await answerService.getUserGuests(
      authenticationStore?.tokenData?.id.toString() ?? ''
    );
    if (guests.some((g) => g.isUser)) {
      const selfUserGuest = guests.find((g) => g.isUser);
      this.selfUserGuest.firstName = !IsNullOrWhiteSpace(
        selfUserGuest?.firstName
      )
        ? selfUserGuest?.firstName ?? ''
        : '';
      this.selfUserGuest.lastName = !IsNullOrWhiteSpace(selfUserGuest?.lastName)
        ? selfUserGuest?.lastName ?? ''
        : '';
      this.selfUserGuest.id = selfUserGuest?.id?.toString() ?? undefined;
    } else {
      const userInfo: UserInfo = await answerService.getUserInfo(
        authenticationStore?.tokenData?.id.toString() ?? ''
      );
      this.selfUserGuest.firstName = !IsNullOrWhiteSpace(userInfo?.firstName)
        ? userInfo?.firstName ?? ''
        : '';
      this.selfUserGuest.lastName = !IsNullOrWhiteSpace(userInfo?.lastName)
        ? userInfo?.lastName ?? ''
        : '';
      this.selfUserGuest.id = userInfo?.id?.toString() ?? undefined;
    }

    if (guests.some((g) => g.isSpouse)) {
      const spouseGuest = guests.find((g) => g.isSpouse);
      this.isSpouseGuest = spouseGuest?.isSpouse ?? false;
      this.spouseGuest.firstName = spouseGuest?.firstName ?? '';
      this.spouseGuest.lastName = spouseGuest?.lastName ?? '';
      this.spouseGuest.id = spouseGuest?.id?.toString() ?? undefined;
    }

    if (guests.some((g) => g.isChildren)) {
      const userChildrenGuests: UserGuest[] = guests.filter(
        (g) => g.isChildren
      );
      this.isChildrenGuest = true;
      this.childrenGuest = [
        ...userChildrenGuests.map((g) => {
          return {
            id: g.id?.toString(),
            firstName: g.firstName,
            lastName: g.lastName,
            age: g.age ?? undefined
          };
        })
      ];
    }

    if (guests.some((g) => g.isOther)) {
      const userOtherGuests: UserGuest[] = guests.filter((g) => g.isOther);
      this.isOtherGuest = true;
      this.otherGuest = [
        ...userOtherGuests.map((g) => {
          return {
            id: g.id?.toString(),
            firstName: g.firstName,
            lastName: g.lastName
          };
        })
      ];
    }
  }
}
</script>

<style lang="scss">
</style>
