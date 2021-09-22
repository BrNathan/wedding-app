<template>
  <div id="photobooth-gallery-page">
    <b-container class="mb-3">
      <b-row>
        <b-col>
          <h1>Photobooth galerie</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-3">
      <b-row>
        <b-col>
          <p>
              TOTO
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mb-5">
      <b-row>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IsNullOrUndefined } from '@/utils/extensions';

@Component({
  components: {}
})
export default class PhotoboothGalleryPage extends Vue {

}
</script>

<style lang="scss">
#photobooth-gallery-page {
  h1 {
    font-size: 4em !important;
    font-family: "Great Vibes", cursive !important;
    color: #f67e7d !important;
  }
}
</style>
