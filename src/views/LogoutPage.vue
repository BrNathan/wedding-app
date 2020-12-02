<template>
  <div id="logout">
    Déconnexion en cours...
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ROUTES_NAMES } from '@/router/router-names';
import { authenticationStore } from '@/store/authentication';

@Component({
  components: {
  }
})
export default class LogoutPage extends Vue {
  public readonly loginPageName: string = ROUTES_NAMES.LOGIN_PAGE;

  /**
   * mounted
   */
  public mounted() {
    authenticationStore.logout();
    this.$router.push({ name: this.loginPageName });
  }
}
</script>

<style lang="scss">

</style>
