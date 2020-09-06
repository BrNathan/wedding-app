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

    <section class="ftco-section bg-secondary" id="rsvp-section">
      <div class="container">
        <div class="row justify-content-center pb-5">
          <div class="col-md-12 text-center heading-section ftco-animate">
            <span class="clone">RSVP</span>
            <h2 class="mb-3">Are Your Attending?</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-7">
            <form action="#" class="rsvp-form ftco-animate">
              <div class="">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your email">
                </div>
              </div>
              <div class="">
                <div class="form-group">
                  <div class="form-field">
                    <div class="select-wrap">
                      <div class="icon d-flex align-items-center justify-content-center"><span
                          class="ion-ios-arrow-down"></span></div>
                      <select name="" id="" class="form-control">
                        <option value="">Guest</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="form-group">
                  <textarea name="" id="" cols="30" rows="2" class="form-control" placeholder="Message"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" value="I am attending" class="btn btn-primary py-3 px-4">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section" id="gallery-section">
      <div class="container-fluid px-md-4">
        <div class="row justify-content-center pb-5">
          <div class="col-md-12 text-center heading-section ftco-animate">
            <span class="clone">Photos</span>
            <h2 class="mb-3">Gallery</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 ftco-animate">
            <a href="images/gallery-1.jpg"
              class="gallery img image-popup d-flex align-items-center justify-content-center"
              style="background-image: url(images/gallery-1.jpg);">
              <div class="icon d-flex align-items-center justify-content-center"><span class="ion-ios-image"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a href="images/gallery-2.jpg"
              class="gallery img image-popup d-flex align-items-center justify-content-center"
              style="background-image: url(images/gallery-2.jpg);">
              <div class="icon d-flex align-items-center justify-content-center"><span class="ion-ios-image"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a href="images/gallery-3.jpg"
              class="gallery img image-popup d-flex align-items-center justify-content-center"
              style="background-image: url(images/gallery-3.jpg);">
              <div class="icon d-flex align-items-center justify-content-center"><span class="ion-ios-image"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a href="images/gallery-4.jpg"
              class="gallery img image-popup d-flex align-items-center justify-content-center"
              style="background-image: url(images/gallery-4.jpg);">
              <div class="icon d-flex align-items-center justify-content-center"><span class="ion-ios-image"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a href="images/gallery-5.jpg"
              class="gallery img image-popup d-flex align-items-center justify-content-center"
              style="background-image: url(images/gallery-5.jpg);">
              <div class="icon d-flex align-items-center justify-content-center"><span class="ion-ios-image"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a href="images/gallery-6.jpg"
              class="gallery img image-popup d-flex align-items-center justify-content-center"
              style="background-image: url(images/gallery-6.jpg);">
              <div class="icon d-flex align-items-center justify-content-center"><span class="ion-ios-image"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a href="images/gallery-7.jpg"
              class="gallery img image-popup d-flex align-items-center justify-content-center"
              style="background-image: url(images/gallery-7.jpg);">
              <div class="icon d-flex align-items-center justify-content-center"><span class="ion-ios-image"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a href="images/gallery-8.jpg"
              class="gallery img image-popup d-flex align-items-center justify-content-center"
              style="background-image: url(images/gallery-8.jpg);">
              <div class="icon d-flex align-items-center justify-content-center"><span class="ion-ios-image"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

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
    'when-where-section': WhenWhereSection
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
