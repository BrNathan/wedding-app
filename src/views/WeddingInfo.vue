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
import RsvpSection from '@/components/RsvpSection.vue';
import GallerySection from '@/components/GallerySection.vue';
import SpinnerComponent from '@/components/Spinner.vue';

@Component({
  components: {
    'home-section': HomeSection,
    'wedding-date-section': WeddingDateSection,
    'bride-groom-section': BrideGroomSection,
    'lovestory-section': LovestorySection,
    'a-savoir-section': ASavoirSection,
    'people-section': PeopleSection,
    'when-where-section': WhenWhereSection,
    'rsvp-section': RsvpSection,
    'gallery-section': GallerySection,
    'spinner-component': SpinnerComponent
  }
})
export default class WeddingInfo extends Vue {
  public isLoading = true;
  public overlayOpacity = 1;

  public mounted() {
    setTimeout(() => {
      this.isLoading = false;
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
</style>
