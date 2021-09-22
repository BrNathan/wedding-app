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
        <b-col
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="4"
          v-for="(item, index) in photoList"
          :key="'photo-' + index"
          class="mb-5"
        >
          <b-img-lazy v-bind="mainProps" :src="item.source" :alt="'Photobooth image #' + index"></b-img-lazy>
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

declare interface PhotoboothPicture
{
  source: string;
}

@Component({
  components: {}
})
export default class PhotoboothGalleryPage extends Vue {
  public photoList: PhotoboothPicture[] = [
    {
      source: '/images/photobooth/BBHotel.jpg'
    },
    {
      source: '/images/photobooth/BritHotel.jpg'
    },
    {
      source: '/images/photobooth/GoldenTulip.jpg'
    },
    {
      source: '/images/photobooth/Tente.jpg'
    },
    {
      source: '/images/photobooth/MatelasSalle.jpg'
    }
  ];

  public mainProps = {
    thumbnail: true,
    center: true,
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    // width: 600,
    // height: 400,
    class: 'my-5'
  }
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
