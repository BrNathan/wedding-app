<template>
  <b-navbar sticky toggleable="lg" class="ftco-navbar-light scrolled awake">
    <div class="container">
      <b-navbar-brand class="title-navbar-custom" :to="{ name: homePageName }">
        Amélie & Nathan
      </b-navbar-brand>
      <b-navbar-toggle
        target="navbar-toggle-collapse"
        label="Menu"
      ></b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: homePageName }">Informations</b-nav-item>
          <b-nav-item :to="{ name: answerPageName }">Mon Invitation</b-nav-item>
          <b-nav-item :to="{ name: sleepPageName }">Où dormir ?</b-nav-item>
          <b-nav-item :to="{ name: contactPageName }"
            >Nous contacter</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="logout">Déconnexion</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script lang="ts">
import { ROUTES_NAMES } from '@/router/router-names';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Navbar extends Vue {
  public readonly homePageName: string = ROUTES_NAMES.WEDDING_INFO;
  public readonly answerPageName: string = ROUTES_NAMES.WEDDING_ANSWER;
  public readonly sleepPageName: string = ROUTES_NAMES.SLEEPING_LOCATION;
  public readonly logoutPageName: string = ROUTES_NAMES.LOGOUT_PAGE;
  public readonly contactPageName: string = ROUTES_NAMES.CONTACT_PAGE;

  public logout() {
    this.$router.push({ name: this.logoutPageName });
  }
}
</script>

<style lang="scss" scoped>
.title-navbar-custom {
  font-family: "Great Vibes", cursive;
  color: #f67e7d !important;
}
</style>
