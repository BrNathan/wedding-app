<template>
  <section class="ftco-section" id="people-section">
    <div class="container-fluid px-md-5">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <span class="clone">People</span>
          <h2 class="mb-3">Family &amp; Friends</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <carousel
            :autoplay="true"
            :autoplayTimeout="5000"
            :autoplayHoverPause="false"
            :perPageCustom="[[0, 1], [600, 2], [1000, 5]]"
            :scrollPerPage="false"
            :loop="true"
            :paginationActiveColor="'#f67e7d'"
            :paginationColor="'#e6e6e6'"
            :paginationPadding="5"
            :centerMode="true">
            <slide>
              <div class="item">
                <div class="people text-center">
                  <div class="img" style="background-image: url(/images/groom-men-1.jpg);"></div>
                  <div class="text">
                    <h3>Mark Tomy</h3>
                    <span>Groomsmen</span>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="item">
                <div class="people text-center">
                  <div class="img" style="background-image: url(/images/groom-men-2.jpg);"></div>
                  <div class="text">
                    <h3>John Henceworth</h3>
                    <span>Groomsmen</span>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="item">
                <div class="people text-center">
                  <div class="img" style="background-image: url(/images/groom-men-3.jpg);"></div>
                  <div class="text">
                    <h3>Rey Cooper</h3>
                    <span>Groomsmen</span>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="item">
                <div class="people text-center">
                  <div class="img" style="background-image: url(/images/groom-men-4.jpg);"></div>
                  <div class="text">
                    <h3>Robert Chan</h3>
                    <span>Groomsmen</span>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="item">
                <div class="people text-center">
                  <div class="img" style="background-image: url(/images/bridesmaid-1.jpg);"></div>
                  <div class="text">
                    <h3>Rose Jones</h3>
                    <span>Bridesmaid</span>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="item">
                <div class="people text-center">
                  <div class="img" style="background-image: url(/images/bridesmaid-2.jpg);"></div>
                  <div class="text">
                    <h3>Mary Dell</h3>
                    <span>Bridesmaid</span>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="item">
                <div class="people text-center">
                  <div class="img" style="background-image: url(/images/bridesmaid-3.jpg);"></div>
                  <div class="text">
                    <h3>Alicia Brean</h3>
                    <span>Bridesmaid</span>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="item">
                <div class="people text-center">
                  <div class="img" style="background-image: url(/images/bridesmaid-4.jpg);"></div>
                  <div class="text">
                    <h3>Angel Worth</h3>
                    <span>Bridesmaid</span>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Carousel, Slide } from 'vue-carousel';

@Component({
  components: {
    Carousel,
    Slide
  }
})
export default class PeopleSection extends Vue {
}
</script>

<style lang="scss" scoped>
.item {
  margin-right: 30px;
}
</style>
