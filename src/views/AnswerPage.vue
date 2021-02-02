<template>
  <div id="answer-page">
    <b-container class="mb-2">
      <b-row>
        <b-col>
          <h1>Mon invitation</h1>
        </b-col>
      </b-row>
      <b-row v-if="isDateAnswerOut">
        <b-col>
          <p class="text-warning">
            <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
            La date limite de réponse est dépassée. S'il y a un quelconque
            changement, contactez-nous
            <router-link :to="{ name: contactPageName }"
              ><b>ICI</b></router-link
            >
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            Vous êtes invités à célébrer le mariage d'
            <span class="amelie-and-nathan-wedding">
              Amélie et Nathan
            </span>
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-form @submit="onSubmit">
      <!-- INVITATIONS -->
      <b-container class="mb-2">
        <b-form-row v-for="(item, index) in userInvitationsUI" :key="index">
          <b-col>
            <b-form-group>
              <template #label>
                <span v-html="item.titleHtml"></span>, nous serons :
              </template>
              <b-form-radio-group
                v-model="item.answer"
                :disabled="isDateAnswerOut"
                :state="item.state"
              >
                <b-form-radio :value="true"> Présent(es) </b-form-radio>
                <b-form-radio :value="false"> Absent(es) </b-form-radio>
                <b-form-invalid-feedback :state="item.state">
                  {{item.feedback}}
                </b-form-invalid-feedback>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-form-row>
      </b-container>
      <!-- GUESTS -->
      <b-container
        class="mb-2"
        v-if="!isUserAllAbsent"
      >
      <!-- isAllInvitationAnswered && isUserPresentAtLeastOnce" -->
        <b-row>
          <b-col>
            <h2>Ma liste d'accompagnants</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" sm="6" md="6" lg="4" xl="4">
            <b-row>
              <b-col>Moi-même</b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card border-variant="primary" class="mb-2">
                  <b-form-group
                    label="Prénom"
                    label-for="input-user-firstName"
                    :state="selfUserGuest.stateFirstName"
                    :invalid-feedback="selfUserGuest.feedbackFirstName"
                  >
                    <b-form-input
                      id="input-user-firstName"
                      v-model="selfUserGuest.firstName"
                      :state="selfUserGuest.stateFirstName"
                      trim
                      :disabled="isDateAnswerOut"
                    />
                  </b-form-group>
                  <b-form-group
                    label="Nom"
                    label-for="input-user-lastName"
                    :state="selfUserGuest.stateLastName"
                    :invalid-feedback="selfUserGuest.feedbackLastName"
                  >
                    <b-form-input
                      id="input-user-lastName"
                      v-model="selfUserGuest.lastName"
                      :state="selfUserGuest.stateLastName"
                      trim
                      :disabled="isDateAnswerOut"
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
                    :disabled="isDateAnswerOut"
                  >
                    Oui
                  </b-form-checkbox>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-row v-if="isSpouseGuest">
              <b-col>
                <b-card border-variant="primary" class="mb-2">
                  <b-form-group
                    label="Prénom"
                    label-for="input-spouse-firstName"
                    :state="spouseGuest.stateFirstName"
                    :invalid-feedback="spouseGuest.feedbackFirstName"
                  >
                    <b-form-input
                      id="input-spouse-firstName"
                      v-model="spouseGuest.firstName"
                      :state="spouseGuest.stateFirstName"
                      trim
                      :disabled="isDateAnswerOut"
                    />
                  </b-form-group>
                  <b-form-group
                    label="Nom"
                    label-for="input-spouse-lastName"
                    :state="spouseGuest.stateLastName"
                    :invalid-feedback="spouseGuest.feedbackLastName"
                  >
                    <b-form-input
                      id="input-spouse-lastName"
                      v-model="spouseGuest.lastName"
                      :state="spouseGuest.stateLastName"
                      trim
                      :disabled="isDateAnswerOut"
                    />
                  </b-form-group>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-form-row>
          <b-col>
            <b-form-group label="Enfant(s) ? " :state="isChildrenGuestState">
              <b-form-checkbox
                v-model="isChildrenGuest"
                name="check-button-spouse"
                switch
                :disabled="isDateAnswerOut"
                :state="isChildrenGuestState"
              >
                Oui
              </b-form-checkbox>
              <b-form-invalid-feedback :state="isChildrenGuestState">{{
                isChildrenGuestFeedback
              }}</b-form-invalid-feedback>
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
              <b-card border-variant="primary" class="mb-2">
                <b-form-group
                  label="Prénom"
                  :label-for="'input-child-firstName' + index"
                  :state="item.stateFirstName"
                  :invalid-feedback="item.feedbackFirstName"
                >
                  <b-form-input
                    :id="'input-child-firstName' + index"
                    v-model="item.firstName"
                    :state="item.stateFirstName"
                    trim
                    :disabled="isDateAnswerOut"
                  />
                </b-form-group>
                <b-form-group
                  label="Nom"
                  :label-for="'input-child-lastName' + index"
                  :state="item.stateLastName"
                  :invalid-feedback="item.feedbackLastName"
                >
                  <b-form-input
                    :id="'input-child-lastName' + index"
                    v-model="item.lastName"
                    :state="item.stateLastName"
                    trim
                    :disabled="isDateAnswerOut"
                  />
                </b-form-group>
                <b-form-group
                  label="Age"
                  :label-for="'input-child-age' + index"
                  :state="item.stateAge"
                  :invalid-feedback="item.feedbackAge"
                >
                  <b-input-group append="ans">
                    <b-form-input
                      :id="'input-child-age' + index"
                      v-model="item.age"
                      :state="item.stateAge"
                      type="number"
                      trim
                      :disabled="isDateAnswerOut"
                    />
                  </b-input-group>
                </b-form-group>
                <b-button
                  @click="removeChild(index)"
                  variant="primary"
                  class="mb-2"
                  :disabled="isDateAnswerOut"
                  v-if="!isDateAnswerOut"
                >
                  <b-icon icon="trash" aria-label="Remove"></b-icon>
                </b-button>
              </b-card>
            </b-col>
            <b-col
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="4"
              v-if="!isDateAnswerOut"
            >
              <b-card border-variant="primary" class="mb-2 text-center">
                <b-button
                  variant="primary"
                  @click="addChild"
                  :disabled="isDateAnswerOut"
                >
                  Ajouter un autre enfant
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </template>
        <b-form-row>
          <b-col>
            <b-form-group
              label="Autre(s) personne(s) ? "
              :state="isOtherGuestState"
            >
              <b-form-checkbox
                v-model="isOtherGuest"
                name="check-button-other"
                switch
                :disabled="isDateAnswerOut"
                :state="isOtherGuestState"
              >
                Oui
              </b-form-checkbox>
              <b-form-invalid-feedback :state="isOtherGuestState">{{
                isOtherGuestFeedback
              }}</b-form-invalid-feedback>
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
              <b-card border-variant="primary" class="mb-2">
                <b-form-group
                  label="Prénom"
                  :label-for="'input-other-firstName' + index"
                  :state="item.stateFirstName"
                  :invalid-feedback="item.feedbackFirstName"
                >
                  <b-form-input
                    :id="'input-other-firstName' + index"
                    v-model="item.firstName"
                    :state="item.stateFirstName"
                    trim
                    :disabled="isDateAnswerOut"
                  />
                </b-form-group>
                <b-form-group
                  label="Nom"
                  :label-for="'input-other-lastName' + index"
                  :state="item.stateLastName"
                  :invalid-feedback="item.feedbackLastName"
                >
                  <b-form-input
                    :id="'input-other-lastName' + index"
                    v-model="item.lastName"
                    :state="item.stateLastName"
                    trim
                    :disabled="isDateAnswerOut"
                  />
                </b-form-group>
                <b-button
                  @click="removeOther(index)"
                  variant="primary"
                  class="mb-2"
                  :disabled="isDateAnswerOut"
                  v-if="!isDateAnswerOut"
                >
                  <b-icon icon="trash" aria-label="Remove"></b-icon>
                </b-button>
              </b-card>
            </b-col>
            <b-col
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="4"
              v-if="!isDateAnswerOut"
            >
              <b-card border-variant="primary" class="mb-2 text-center">
                <b-button
                  variant="primary"
                  @click="addOther"
                  :disabled="isDateAnswerOut"
                >
                  Ajouter un autre personne
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </template>
      </b-container>
      <b-container class="mb-2">
        <b-form-row>
          <b-col>
            <b-button
              variant="primary"
              type="submit"
              :disabled="isDateAnswerOut || isSaveButtonDisabled"
              @click="saveGuest"
              v-if="!isDateAnswerOut"
            >
              Répondre
              <template v-if="isSaveLoading">
                <b-spinner small type="grow" label="Loading..."></b-spinner>
              </template>
            </b-button>
            <span
              :class="{
                'ml-4': true,
                'text-success': isSubmitSuccess,
                'text-danger': isSubmitError
              }"
            >
              <template v-if="isSubmitError">
                <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
                Erreur lors de l'envoi de la réponse, contactez nous
                <router-link :to="{ name: contactPageName}" target="_blank"
                  ><b>ICI</b></router-link
                >
              </template>
              <template v-if="isSubmitSuccess">
                <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                L'envoi de la réponse est réussi
              </template>
            </span>
          </b-col>
        </b-form-row>
      </b-container>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { authenticationStore } from '@/store/authentication';
import { IsNullOrWhiteSpace, IsNullOrUndefined } from '@/utils/extensions';
import answerService from '@/services/answer.service';
import {
  UserInvitation,
  UserGuest,
  UserInfo,
  UserInvitationUI,
  SelfUserGuestUI,
  SpouseGuestUI,
  ChildGuestUI,
  OtherGuestUI
} from '../utils/types/index';
import { ROUTES_NAMES } from '@/router/router-names';

@Component({
  components: {}
})
export default class AnswerPage extends Vue {
  public endDateToAnswer: Date = new Date(2021, 3, 1, 0, 1);

  public submitState: boolean | null = null;
  public get isSubmitError() { return this.submitState === false; }
  public get isSubmitSuccess() { return this.submitState === true; }

  public get isDateAnswerOut(): boolean {
    return (new Date()) > this.endDateToAnswer;
  }

  public get contactPageName(): string {
    return ROUTES_NAMES.CONTACT_PAGE;
  }

  public userInvitationsUI: UserInvitationUI[] = [];

  public feedbackUserInvitations = '';

  public async mounted() {
    await this.initData();
  }

  public selfUserGuest: SelfUserGuestUI = {
    firstName: '',
    lastName: '',
    stateFirstName: null,
    feedbackFirstName: '',
    stateLastName: null,
    feedbackLastName: ''
  };

  public isSpouseGuest: boolean | null = null;
  public spouseGuest: SpouseGuestUI = {
    firstName: '',
    lastName: '',
    stateFirstName: null,
    feedbackFirstName: '',
    stateLastName: null,
    feedbackLastName: ''
  };

  public isChildrenGuest: boolean | null = null;
  public isChildrenGuestState: boolean | null = null;
  public isChildrenGuestFeedback = '';
  public childrenGuest: ChildGuestUI[] = [
    {
      firstName: '',
      lastName: '',
      stateFirstName: null,
      feedbackFirstName: '',
      stateLastName: null,
      feedbackLastName: '',
      stateAge: null,
      feedbackAge: ''
    }
  ];

  public isOtherGuest: boolean | null = null;
  public isOtherGuestState: boolean | null = null;
  public isOtherGuestFeedback = '';
  public otherGuest: OtherGuestUI[] = [
    {
      firstName: '',
      lastName: '',
      stateFirstName: null,
      feedbackFirstName: '',
      stateLastName: null,
      feedbackLastName: ''
    }
  ];

  public isSaveButtonDisabled = false;
  public isSaveLoading = false;

  public get isUserPresentAtLeastOnce(): boolean {
    return this.userInvitationsUI.some(i => i.answer);
  }

  public get isAllInvitationAnswered(): boolean {
    return !this.userInvitationsUI.some(i => i.answer === null);
  }

  public get isUserAllAbsent(): boolean {
    return this.userInvitationsUI.every(i => i.answer === false);
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

  public async onSubmit(e: Event): Promise<void> {
    e.preventDefault();
    await this.saveGuest();
  }

  public addChild() {
    this.childrenGuest.push({
      firstName: '',
      lastName: '',
      stateFirstName: null,
      feedbackFirstName: '',
      stateLastName: null,
      feedbackLastName: '',
      stateAge: null,
      feedbackAge: ''
    });
  }

  public removeChild(removedIndex: number) {
    this.childrenGuest = this.childrenGuest.filter((value, index) => index !== removedIndex);
  }

  public addOther() {
    this.otherGuest.push({
      firstName: '',
      lastName: '',
      stateFirstName: null,
      feedbackFirstName: '',
      stateLastName: null,
      feedbackLastName: ''
    });
  }

  public removeOther(removedIndex: number) {
    this.otherGuest = this.otherGuest.filter((value, index) => index !== removedIndex);
  }

  public async saveGuest() {
    this.submitState = null;
    this.isSaveButtonDisabled = true;
    this.isSaveLoading = true;
    const userId: number = authenticationStore?.tokenData?.id ?? 0;
    if (userId === 0) {
      throw Error('User not found');
    }
    if (await this.isFormValid()) {
      try {
        const resultInvitation = await answerService.updateUserInvitationResponse(userId.toString(), this.userInvitationsUI);

        let resultGuests = false;
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

          resultGuests = await answerService.updateUserGuest(userId.toString(), userGuestList);
        } else {
          resultGuests = await answerService.updateUserGuest(userId.toString(), []);
        }
        this.submitState = resultGuests && resultInvitation;
      } catch (error) {
        console.error(error);
        this.submitState = false;
      }
      await this.initData();
    }
    this.isSaveButtonDisabled = false;
    this.isSaveLoading = false;
  }

  private FEEDBACK_NOT_ANWSER = 'Tu dois choisir une des deux réponses';
  private FEEDBACK_EMPTY_FIELD = 'Ce champs ne doit pas être vide';
  private FEEDBACK_AGE_TOO_LOW = 'Il est aussi jeune ! Cela m\'étonnerait..';
  private FEEDBACK_AGE_TOO_HIGH = 'Il est aussi âgé ! Cela m\'étonnerait..';
  private FEEDBACK_MUST_HAVE_ONE_CHILD = 'Si ce champs est coché, Il doit y avoir au moins un enfant';
  private FEEDBACK_MUST_HAVE_ONE_OTHER = 'Si ce champs est coché, Il doit y avoir au moins une personne';

  private async isFormValid(): Promise<boolean> {
    let isValid = true;

    this.userInvitationsUI.forEach(ui => {
      if (ui.answer === null) {
        isValid = false;
        ui.state = false;
        ui.feedback = this.FEEDBACK_NOT_ANWSER;
      } else {
        ui.state = null;
        ui.feedback = '';
      }
    });

    if (this.isUserPresentAtLeastOnce) {
      // SELF USER
      if (IsNullOrWhiteSpace(this.selfUserGuest.firstName)) {
        isValid = false;
        this.selfUserGuest.stateFirstName = false;
        this.selfUserGuest.feedbackFirstName = this.FEEDBACK_EMPTY_FIELD;
      } else {
        this.selfUserGuest.stateFirstName = null;
        this.selfUserGuest.feedbackFirstName = '';
      }
      if (IsNullOrWhiteSpace(this.selfUserGuest.lastName)) {
        isValid = false;
        this.selfUserGuest.stateLastName = false;
        this.selfUserGuest.feedbackLastName = this.FEEDBACK_EMPTY_FIELD;
      } else {
        this.selfUserGuest.stateLastName = null;
        this.selfUserGuest.feedbackLastName = '';
      }

      // SPOUSE GUEST
      if (this.isSpouseGuest) {
        if (IsNullOrWhiteSpace(this.spouseGuest.firstName)) {
          isValid = false;
          this.spouseGuest.stateFirstName = false;
          this.spouseGuest.feedbackFirstName = this.FEEDBACK_EMPTY_FIELD;
        } else {
          this.spouseGuest.stateFirstName = null;
          this.spouseGuest.feedbackFirstName = '';
        }
        if (IsNullOrWhiteSpace(this.spouseGuest.lastName)) {
          isValid = false;
          this.spouseGuest.stateLastName = false;
          this.spouseGuest.feedbackLastName = this.FEEDBACK_EMPTY_FIELD;
        } else {
          this.spouseGuest.stateLastName = null;
          this.spouseGuest.feedbackLastName = '';
        }
      }

      // CHILDRENS GUEST
      if (this.isChildrenGuest) {
        if (this.childrenGuest.length === 0) {
          isValid = false;
          this.isChildrenGuestState = false;
          this.isChildrenGuestFeedback = this.FEEDBACK_MUST_HAVE_ONE_CHILD;
        } else {
          this.isChildrenGuestState = null;
          this.isChildrenGuestFeedback = '';

          this.childrenGuest.forEach((value) => {
            if (IsNullOrWhiteSpace(value.firstName)) {
              isValid = false;
              value.stateFirstName = false;
              value.feedbackFirstName = this.FEEDBACK_EMPTY_FIELD;
            } else {
              value.stateFirstName = null;
              value.feedbackFirstName = '';
            }
            if (IsNullOrWhiteSpace(value.lastName)) {
              isValid = false;
              value.stateLastName = false;
              value.feedbackLastName = this.FEEDBACK_EMPTY_FIELD;
            } else {
              value.stateLastName = null;
              value.feedbackLastName = '';
            }
            if (IsNullOrUndefined(value.age)) {
              isValid = false;
              value.stateAge = false;
              value.feedbackAge = this.FEEDBACK_EMPTY_FIELD;
            } else {
              if (value.age as number < 0 || value.age as number > 150) {
                isValid = false;
                value.stateAge = false;
                value.feedbackAge = value.age as number < 0 ? this.FEEDBACK_AGE_TOO_LOW : this.FEEDBACK_AGE_TOO_HIGH;
              } else {
                value.stateAge = null;
                value.feedbackAge = '';
              }
            }
          });
        }
      } else {
        this.isChildrenGuestState = null;
        this.isChildrenGuestFeedback = '';
      }

      // OTHERS GUEST
      if (this.isOtherGuest) {
        if (this.otherGuest.length === 0) {
          isValid = false;
          this.isOtherGuestState = false;
          this.isOtherGuestFeedback = this.FEEDBACK_MUST_HAVE_ONE_OTHER;
        } else {
          this.isOtherGuestState = null;
          this.isOtherGuestFeedback = '';

          this.otherGuest.forEach((value) => {
            if (IsNullOrWhiteSpace(value.firstName)) {
              isValid = false;
              value.stateFirstName = false;
              value.feedbackFirstName = this.FEEDBACK_EMPTY_FIELD;
            } else {
              value.stateFirstName = null;
              value.feedbackFirstName = '';
            }
            if (IsNullOrWhiteSpace(value.lastName)) {
              isValid = false;
              value.stateLastName = false;
              value.feedbackLastName = this.FEEDBACK_EMPTY_FIELD;
            } else {
              value.stateLastName = null;
              value.feedbackLastName = '';
            }
          });
        }
      } else {
        this.isOtherGuestState = null;
        this.isOtherGuestFeedback = '';
      }
    }

    return isValid;
  }

  public async initData() {
    const userInvitations: UserInvitation[] = await answerService.getUserInvitations(
      authenticationStore?.tokenData?.id.toString() ?? ''
    );
    if (userInvitations != null && userInvitations.length > 0) {
      this.userInvitationsUI = [...userInvitations.sort((a, b) => {
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
      })].map(ui => {
        let titleHtml = '';
        if (ui.invitation.code === 'MAI') {
          titleHtml = 'Au <strong>mariage civil</strong>';
        } else if (ui.invitation.code === 'CER') {
          titleHtml = 'A la <strong>cérémonie laïque</strong>';
        } else if (ui.invitation.code === 'REP') {
          titleHtml = 'Au <strong>diner</strong>';
        } else {
          titleHtml = '';
        }
        return {
          id: ui.id,
          userId: ui.userId,
          answer: ui.answer,
          invitationId: ui.invitationId,
          invitation: ui.invitation,
          state: null,
          feedback: '',
          titleHtml: titleHtml
        };
      });
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
            age: g.age ?? undefined,
            stateFirstName: null,
            feedbackFirstName: '',
            stateLastName: null,
            feedbackLastName: '',
            stateAge: null,
            feedbackAge: ''
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
            lastName: g.lastName,
            stateFirstName: null,
            feedbackFirstName: '',
            stateLastName: null,
            feedbackLastName: ''
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
  .amelie-and-nathan-wedding {
    font-family: "Great Vibes", cursive;
    color: #f67e7d !important;
  }
  input:disabled {
    cursor: not-allowed;
  }
  .custom-control-input:disabled ~ .custom-control-label {
    cursor: not-allowed;
  }
}
</style>
