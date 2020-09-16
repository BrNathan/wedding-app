<template>
  <div id="wedding-info">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Libre+Caslon+Text:400,400i,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/styleModified.css">

    <navbar-page />

    <home-section />

    <wedding-date-section />

    <bride-groom-section />

    <lovestory-section />

    <greeting-section />

    <people-section />

    <when-where-section />

    <rsvp-section />

    <gallery-section />

    <!-- footer -->
    <footer-page></footer-page>

    <!-- loader -->
    <!-- <global-loader></global-loader> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GlobalLoader from '@/components/GlobalLoader.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
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
    'global-loader': GlobalLoader,
    'footer-page': Footer,
    'navbar-page': Navbar,
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
.ftco-section {
  padding: 7em 0;
  position: relative;
}
@media (max-width: 767.98px) {
  .ftco-section {
    padding: 6em 0;
  }
}

</style>
