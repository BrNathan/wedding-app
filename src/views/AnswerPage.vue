<template>
  <div id="answer-page">
    <b-container class="mb-5">
      <b-row>
        <b-col>
          <h1>Mon invitation</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>Vous êtes invité à célébrer notre mariage !</p>
        </b-col>
      </b-row>
    </b-container>
    <b-form @submit="onSubmit">
      <!-- INVITATIONS -->
      <b-container class="mt-5 mb-5">
        <b-form-row v-for="(item, index) in userInvitations" :key="index">
          <template v-if="isInvitedToMairie(item)">
            <b-col>
              <b-form-group>
                <template #label>
                  A la <strong>mairie</strong>, je serais :
                </template>
                <b-form-radio-group v-model="item.answer">
                  <b-form-radio :value="true"> Présent(e) </b-form-radio>
                  <b-form-radio :value="false"> Absent(e) </b-form-radio>
                </b-form-radio-group>
              </b-form-group>
            </b-col>
          </template>
          <template v-if="isInvitedToCeremonie(item)">
            <b-col>
              <b-form-group>
                <template #label>
                  A la <strong>cérémonie laïque</strong>, je serais :
                </template>
                <b-form-radio-group v-model="item.answer">
                  <b-form-radio :value="true"> Présent(e) </b-form-radio>
                  <b-form-radio :value="false"> Absent(e) </b-form-radio>
                </b-form-radio-group>
              </b-form-group>
            </b-col>
          </template>
          <template v-if="isInvitedToRepas(item)">
            <b-col>
              <b-form-group>
                <template #label>
                  Au <strong>repas</strong>, je serais :
                </template>
                <b-form-radio-group v-model="item.answer">
                  <b-form-radio :value="true"> Présent(e) </b-form-radio>
                  <b-form-radio :value="false"> Absent(e) </b-form-radio>
                </b-form-radio-group>
              </b-form-group>
            </b-col>
          </template>
        </b-form-row>
      </b-container>
      <!-- GUESTS -->
      <b-container
        class="mt-5 mb-5"
        v-if="isAllInvitationAnswered && isUserPresentAtLeastOnce"
      >
        <b-row>
          <b-col>
            <h2>Ma liste d'accompagnant</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" sm="6" md="6" lg="4" xl="4">
            <b-row>
              <b-col>Moi-même</b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card border-variant="primary" class="mt-3 mb-3">
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
                    />
                  </b-form-group>
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
                    />
                  </b-form-group>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" sm="6" md="6" lg="4" xl="4">
            <b-form-row>
              <b-col>
                <b-form-group label="Conjoint(e) ?">
                  <b-form-checkbox
                    v-model="isSpouseGuest"
                    name="check-button-spouse"
                    switch
                  >
                    Oui
                  </b-form-checkbox>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-row v-if="isSpouseGuest">
              <b-col>
                <b-card border-variant="primary" class="mt-3 mb-3">
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
                    />
                  </b-form-group>
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
                    />
                  </b-form-group>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-form-row>
          <b-col>
            <b-form-group label="Enfant(s) ? ">
              <b-form-checkbox
                v-model="isChildrenGuest"
                name="check-button-spouse"
                switch
              >
                Oui
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-form-row>
        <template v-if="isChildrenGuest">
          <b-row>
            <b-col
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="4"
              v-for="(item, index) in childrenGuest"
              :key="'child-' + index"
            >
              <b-card border-variant="primary" class="mt-3 mb-3">
                <b-form-group
                  label="Prénom"
                  :label-for="'input-child-firstName' + index"
                >
                  <b-form-input
                    :id="'input-child-firstName' + index"
                    v-model="item.firstName"
                    trim
                  />
                </b-form-group>
                <b-form-group
                  label="Nom"
                  :label-for="'input-child-lastName' + index"
                >
                  <b-form-input
                    :id="'input-child-lastName' + index"
                    v-model="item.lastName"
                    trim
                  />
                </b-form-group>
                <b-form-group
                  label="Age"
                  :label-for="'input-child-age' + index"
                >
                  <b-input-group append="ans">
                    <b-form-input
                      :id="'input-child-age' + index"
                      v-model="item.age"
                      type="number"
                      trim
                    />
                  </b-input-group>
                </b-form-group>
                <b-button
                  @click="removeChild(index)"
                  variant="primary"
                  class="mb-2"
                >
                  <b-icon icon="trash" aria-label="Remove"></b-icon>
                </b-button>
              </b-card>
            </b-col>
            <b-col cols="12" sm="6" md="6" lg="4" xl="4">
              <b-card border-variant="primary" class="mt-3 mb-3 text-center">
                <b-button variant="primary" @click="addChild">
                  Ajouter un autre enfant
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </template>
        <b-form-row>
          <b-col>
            <b-form-group label="Autre(s) personne(s) ? ">
              <b-form-checkbox
                v-model="isOtherGuest"
                name="check-button-other"
                switch
              >
                Oui
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-form-row>
        <template v-if="isOtherGuest">
          <b-row>
            <b-col
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="4"
              v-for="(item, index) in otherGuest"
              :key="'other-' + index"
            >
              <b-card border-variant="primary" class="mt-3 mb-3">
                <b-form-group
                  label="Prénom"
                  :label-for="'input-other-firstName' + index"
                >
                  <b-form-input
                    :id="'input-other-firstName' + index"
                    v-model="item.firstName"
                    trim
                  />
                </b-form-group>
                <b-form-group
                  label="Nom"
                  :label-for="'input-other-lastName' + index"
                >
                  <b-form-input
                    :id="'input-other-lastName' + index"
                    v-model="item.lastName"
                    trim
                  />
                </b-form-group>
                <b-button
                  @click="removeOther(index)"
                  variant="primary"
                  class="mb-2"
                >
                  <b-icon icon="trash" aria-label="Remove"></b-icon>
                </b-button>
              </b-card>
            </b-col>
            <b-col cols="12" sm="6" md="6" lg="4" xl="4">
              <b-card border-variant="primary" class="mt-3 mb-3 text-center">
                <b-button variant="primary" @click="addOther">
                  Ajouter un autre personne
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </template>
      </b-container>
      <b-container class="mt-5 mb-5">
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
    return this.userInvitations.some(i => i.answer);
  }

  public get isAllInvitationAnswered(): boolean {
    return !this.userInvitations.some(i => i.answer === null);
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
    // TODO : Check if all data are correct
    this.isSaveButtonDisabled = true;
    this.isSaveLoading = true;
    const userId: number = authenticationStore?.tokenData?.id ?? 0;
    if (userId === 0) {
      throw Error('User not found');
    }
    try {
      const resultInvitation = await answerService.updateUserInvitationResponse(userId.toString(), this.userInvitations);
      console.log(resultInvitation);

      if (this.isUserPresentAtLeastOnce) {
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

        const resultGuests = await answerService.updateUserGuest(userId.toString(), userGuestList);
        console.log(resultGuests);
      } else {
        const resultGuests = await answerService.updateUserGuest(userId.toString(), []);
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
#answer-page {
  h1 {
    font-size: 4em !important;
    font-family: "Great Vibes", cursive !important;
    color: #f67e7d !important;
  }

  h2 {
    font-family: "Great Vibes", cursive !important;
    color: #f67e7d !important;
  }
  .custom-switch {
    line-height: 1.4rem;
  }
  .custom-control-inline {
    line-height: 1.4rem;
  }
}
</style>
