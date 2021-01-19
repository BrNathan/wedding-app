<template>
  <section class="ftco-section" id="people-section">
    <div class="container-fluid px-md-5">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <!-- <span class="clone">Témoins &amp; Demoiselles d'honneur</span> -->
          <h2 class="mb-3">Témoins &amp; Demoiselles d'honneur</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 people-carousel">
          <vueper-slides
            class="no-shadow"
            :visible-slides="4"
            :slide-ratio="1 / 6"
            :dragging-distance="70"
            :arrows="false"
            :duration="5000"
            :pauseOnHover="false"
            :breakpoints="breakpoints"
            autoplay
          >
            <vueper-slide
              v-for="(item, index) in peopleList"
              :key="'people-' + index"
            >
              <template v-slot:content>
                <div class="item">
                  <div class="people text-center">
                    <div
                      class="img"
                      :style="'background-image: url(' + item.imgPath + ');'"
                    ></div>
                    <div class="text">
                      <h3>{{ item.firstName }}</h3>
                      <span>{{ item.placeName }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { shuffleArray } from '@/utils/extensions';

declare interface People {
  firstName: string;
  lastName: string;
  placeName: string;
  imgPath: string;
}

@Component({
  components: {
    VueperSlides,
    VueperSlide
  }
})
export default class PeopleSection extends Vue {
  public peopleListInternal: People[] = [
    {
      firstName: 'Baptiste',
      lastName: 'Bruet',
      placeName: 'Témoin',
      imgPath: '/images/groom-men-1.jpg'
    },
    {
      firstName: 'Loréane',
      lastName: 'Bruet',
      placeName: 'Témoin',
      imgPath: '/images/groom-men-1.jpg'
    },
    {
      firstName: 'Pierre',
      lastName: 'André',
      placeName: 'Témoin',
      imgPath: '/images/groom-men-1.jpg'
    },
    {
      firstName: 'Michelle',
      lastName: 'Ermolenko',
      placeName: 'Témoin',
      imgPath: '/images/groom-men-1.jpg'
    },
    {
      firstName: 'Clémence',
      lastName: 'André',
      placeName: 'Demoiselle d\'honneur',
      imgPath: '/images/groom-men-1.jpg'
    },
    {
      firstName: 'Julia',
      lastName: 'Marquès',
      placeName: 'Demoiselle d\'honneur',
      imgPath: '/images/groom-men-1.jpg'
    }
  ];

  public breakpoints = {
    1800: {
      slideRatio: 1 / 4,
      visibleSlides: 4
    },
    1199: {
      slideRatio: 1 / 3,
      visibleSlides: 4
    },
    991: {
      slideRatio: 1 / 2,
      visibleSlides: 3
    },
    767: {
      slideRatio: 1 / 2,
      visibleSlides: 2
    },
    575: {
      slideRatio: 1,
      visibleSlides: 1
    }
  };

  public get peopleList(): People[] {
    return shuffleArray(this.peopleListInternal);
  }
}
</script>

<style lang="scss">
#people-section {
  .people-carousel {
    .vueperslide--active {
      .people .img {
        width: 200px;
        height: 200px;
        border: 5px solid #f67e7d;
      }
    }
    .vueperslides__bullet--active .default {
      border-color: #f67e7d !important;
      background-color: #f67e7d !important;
    }
  }
}
</style>
