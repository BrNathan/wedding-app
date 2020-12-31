<template>
  <div id="wedding-layout">
    <link rel="stylesheet" href="/css/styleModified.css">

    <navbar-page />

    <router-view />

    <!-- <footer-page /> -->

    <!-- <global-loader /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GlobalLoader from '@/components/GlobalLoader.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    'global-loader': GlobalLoader,
    'footer-page': Footer,
    'navbar-page': Navbar
  }
})
export default class WeddingLayout extends Vue {

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
