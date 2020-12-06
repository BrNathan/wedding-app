<template>
  <div id="wedding-info">
    <template v-if="isLoading">
      <div class="d-flex justify-content-center mb-3">
        <spinner-component />
      </div>
    </template>
    <template v-else>
      <home-section />

      <wedding-date-section />

      <bride-groom-section />

      <lovestory-section />

      <greeting-section />

      <people-section />

      <when-where-section />

      <rsvp-section />

      <gallery-section />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeSection from '@/components/HomeSection.vue';
import BrideGroomSection from '@/components/BrideGroomSection.vue';
import WeddingDateSection from '@/components/WeddingDateSection.vue';
import LovestorySection from '@/components/LovestorySection.vue';
import GreetingSection from '@/components/GreetingSection.vue';
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
    'greeting-section': GreetingSection,
    'people-section': PeopleSection,
    'when-where-section': WhenWhereSection,
    'rsvp-section': RsvpSection,
    'gallery-section': GallerySection,
    'spinner-component': SpinnerComponent
  }
})
export default class WeddingInfo extends Vue {
  public isLoading = true;

  public mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
</script>

<style lang="scss">
</style>
