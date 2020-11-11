<template>
  <b-navbar sticky toggleable="lg" class="ftco-navbar-light scrolled awake">
    <div class="container">
      <b-navbar-brand :to="{name: homePageName}">
        Hookup
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse" label="Menu"></b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav align="end" class="ml-auto">
          <b-nav-item :to="{name: answerPageName}">Answer</b-nav-item>
          <b-nav-item href="#home-section">Home</b-nav-item>
          <b-nav-item href="#groom-bride-section">Groom &amp; Bride</b-nav-item>
          <b-nav-item href="#lovestory-section">Love Story</b-nav-item>
          <b-nav-item href="#greeting-section">Greetings</b-nav-item>
          <b-nav-item href="#people-section">People</b-nav-item>
          <b-nav-item href="#when-where-section">When &amp; Where</b-nav-item>
          <b-nav-item href="#rsvp-section">RSVP</b-nav-item>
          <b-nav-item href="#gallery-section">Gallery</b-nav-item>
          <b-nav-item @click="logout">Déconnexion</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script lang="ts">
import { ROUTES_NAMES } from '@/router/router-names';
import { Component, Vue } from 'vue-property-decorator';
import { authenticationStore } from '@/store/authentication';

@Component({
  components: {}
})
export default class Navbar extends Vue {
  public readonly homePageName: string = ROUTES_NAMES.WEDDING_INFO;
  public readonly answerPageName: string = ROUTES_NAMES.WEDDING_ANSWER;
  public readonly loginPageName: string = ROUTES_NAMES.LOGIN_PAGE;

  public logout() {
    authenticationStore.logout();
    this.$router.push({ name: this.loginPageName });
  }
}
</script>

<style lang="scss" scoped>

</style>
