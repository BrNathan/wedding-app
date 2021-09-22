<template>
  <div id="wedding-info">
    <b-overlay
      :show="isLoading"
      :opacity="overlayOpacity"
      :variant="'white'"
      :no-fade="true"
      no-center
    >
      <div>
        <home-section />

        <wedding-date-section />

        <bride-groom-section />

        <lovestory-section />

        <when-where-section />

        <people-section />

        <a-savoir-section />

        <!-- <rsvp-section /> -->

        <!-- <gallery-section /> -->
        <b-toast
          toast-class="custom-toast"
          id="my-toast"
          solid
          toaster="b-toaster-top-center"
          no-auto-hide
        >
          <template #toast-title>
            Date limite de réponse 31/04/2021
          </template>
          Noublie pas de répondre à l'invitation
          <router-link :to="{ name: answerPageName }"><b>ICI</b></router-link>
        </b-toast>
      </div>
      <template #overlay>
        <div class="d-flex justify-content-center mb-3 overlay-custom">
          <spinner-component />
        </div>
      </template>
    </b-overlay>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeSection from '@/components/HomeSection.vue';
import BrideGroomSection from '@/components/BrideGroomSection.vue';
import WeddingDateSection from '@/components/WeddingDateSection.vue';
import LovestorySection from '@/components/LovestorySection.vue';
import ASavoirSection from '@/components/ASavoirSection.vue';
import PeopleSection from '@/components/PeopleSection.vue';
import WhenWhereSection from '@/components/WhenWhereSection.vue';
import SpinnerComponent from '@/components/Spinner.vue';
import { ROUTES_NAMES } from '@/router/router-names';
import { authenticationStore } from '@/store/authentication';
import answerService from '@/services/answer.service';
import { UserInvitation } from '@/utils/types';

@Component({
  components: {
    'home-section': HomeSection,
    'wedding-date-section': WeddingDateSection,
    'bride-groom-section': BrideGroomSection,
    'lovestory-section': LovestorySection,
    'a-savoir-section': ASavoirSection,
    'people-section': PeopleSection,
    'when-where-section': WhenWhereSection,
    'spinner-component': SpinnerComponent
  }
})
export default class WeddingInfo extends Vue {
  public isLoading = true;
  public overlayOpacity = 1;

  private showPopUpAnswer = false;

  public get answerPageName(): string {
    return ROUTES_NAMES.WEDDING_ANSWER;
  }

  public mounted() {
    setTimeout(async() => {
      this.isLoading = false;
      const userInvitations: UserInvitation[] = await answerService.getUserInvitations(
        authenticationStore?.tokenData?.id.toString() ?? ''
      );
      if (userInvitations?.some(ui => ui.answer === null) && this.showPopUpAnswer) {
        setTimeout(() => {
          this.$bvToast.show('my-toast');
        }, 1000);
      }
    }, 1000);
  }
}
</script>

<style lang="scss">
#wedding-info {
  .overlay-custom {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.custom-toast {
  border-color: #f67e7d !important;
}
</style>
