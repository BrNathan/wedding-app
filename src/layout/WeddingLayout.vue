<template>
  <div id="wedding-layout">
    <!-- <link rel="stylesheet" href="/css/styleModified.min.css"> -->

    <navbar-page />

    <router-view />

    <!-- <footer-page /> -->

    <!-- <global-loader /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
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
