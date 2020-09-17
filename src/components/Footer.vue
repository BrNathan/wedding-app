<template>
  <footer class="ftco-footer ftco-section">
    <div class="overlay"></div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Hookup</h2>
            <p>Far far away, behind the word mountains, far from the countries.</p>
            <ul class="ftco-footer-social list-unstyled mt-5">
              <li class="">
                <a href="#">
                  <span class="icon-twitter">T</span>
                </a>
              </li>
              <li class="">
                <a href="#">
                  <span class="icon-facebook">F</span>
                </a>
              </li>
              <li class="">
                <a href="#">
                  <span class="icon-instagram">I</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4 ml-md-4">
            <h2 class="ftco-heading-2">Quick Links</h2>
            <ul class="list-unstyled">
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Wellness
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Vintge stores
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Trekking
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Tour
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Sightseeing
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Many more..
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4 ml-md-4">
            <h2 class="ftco-heading-2">Links</h2>
            <ul class="list-unstyled">
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Home
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Groom &amp; Bride
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Story
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Greetings
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>People
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Where &amp; When
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>RSVP
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Services</h2>
            <ul class="list-unstyled">
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Organizer
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Venue
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Wedding Ceremony
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Accomodation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Have a Questions?</h2>
            <div class="block-23 mb-3">
              <ul>
                <li>
                  <!-- <span class="icon icon-map-marker"></span> -->
                  <span><b-icon-map class="icon pr-4"></b-icon-map></span>
                  <span class="text">
                    203 Fake St. Mountain View, San
                    Francisco, California, USA
                  </span>
                </li>
                <li>
                  <a href="#">
                    <!-- <span class="icon icon-phone"></span> -->
                    <span><b-icon-telephone-fill class="icon pr-4"></b-icon-telephone-fill></span>
                    <span class="text">+2 392 3929 210</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span><b-icon-envelope-fill class="icon pr-4"></b-icon-envelope-fill></span>
                    <span class="text">info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;{{fullYear}} All rights reserved | This template is made with
            <!-- <i class="icon-heart color-danger" aria-hidden="true"></i> -->
            <b-icon-suit-heart-fill></b-icon-suit-heart-fill> by
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Footer extends Vue {
  public fullYear: number = new Date().getFullYear();
}
</script>

<style lang="scss" scoped>

</style>
