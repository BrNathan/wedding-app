<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import authenticationService from './services/authentication.service';
import localStorageService from './services/local-storage.service';
import { IsNullOrWhiteSpace } from './utils/extensions';

@Component({
  components: {}
})
export default class App extends Vue {
  mounted() {
    const authToken = localStorageService.getAuthToken();
    const isTokenValid = !IsNullOrWhiteSpace(authToken) && authenticationService.isTokenValid(authToken);

    if (isTokenValid) {
      this.$store.commit('authentication/loginSuccess', authToken);
    }
  }
}
</script>

<style lang="scss">

</style>
