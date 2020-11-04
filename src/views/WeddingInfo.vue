<template>
  <div id="wedding-info">
    <home-section />

    <wedding-date-section />

    <bride-groom-section />

    <lovestory-section />

    <greeting-section />

    <people-section />

    <when-where-section />

    <rsvp-section />

    <gallery-section />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SectionHome from '@/components/SectionHome.vue';
import BrideGroomSection from '@/components/BrideGroomSection.vue';
import WeddingDateSection from '@/components/WeddingDateSection.vue';
import LovestorySection from '@/components/LovestorySection.vue';
import GreetingSection from '@/components/GreetingSection.vue';
import PeopleSection from '@/components/PeopleSection.vue';
import WhenWhereSection from '@/components/WhenWhereSection.vue';
import RsvpSection from '@/components/RsvpSection.vue';
import GallerySection from '@/components/GallerySection.vue';

@Component({
  components: {
    'home-section': SectionHome,
    'wedding-date-section': WeddingDateSection,
    'bride-groom-section': BrideGroomSection,
    'lovestory-section': LovestorySection,
    'greeting-section': GreetingSection,
    'people-section': PeopleSection,
    'when-where-section': WhenWhereSection,
    'rsvp-section': RsvpSection,
    'gallery-section': GallerySection
  }
})
export default class WeddingInfo extends Vue {

}
</script>

<style lang="scss">

</style>
