<template>
  <section class="ftco-section bg-light" id="greeting-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <span class="clone">Bon à Savoir</span>
          <h2 class="mb-3">Bon à Savoir</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <!-- <carousel
            :autoplay="true"
            :autoplayTimeout="5000"
            :autoplayHoverPause="false"
            :perPageCustom="[[0, 1], [600, 2], [1000, 3]]"
            :scrollPerPage="false"
            :loop="true"
            :paginationActiveColor="'#f67e7d'"
            :paginationColor="'#e6e6e6'"
            :paginationPadding="5"
            :centerMode="true">
            <slide> -->
              <div class="item">
                <div class="testimony-wrap py-4">
                  <div class="text">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia,
                      there live the blind texts.</p>
                    <div class="d-flex align-items-center">
                      <div class="user-img" style="background-image: url(/images/person_1.jpg)"></div>
                      <div class="pl-3">
                        <p class="name">Roger Scott</p>
                        <span class="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- </slide> -->
            <!-- <slide> -->
              <div class="item">
                <div class="testimony-wrap py-4">
                  <div class="text">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia,
                      there live the blind texts.</p>
                    <div class="d-flex align-items-center">
                      <div class="user-img" style="background-image: url(/images/person_2.jpg)"></div>
                      <div class="pl-3">
                        <p class="name">Roger Scott</p>
                        <span class="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- </slide> -->
            <!-- <slide> -->
              <div class="item">
                <div class="testimony-wrap py-4">
                  <div class="text">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia,
                      there live the blind texts.</p>
                    <div class="d-flex align-items-center">
                      <div class="user-img" style="background-image: url(/images/person_3.jpg)"></div>
                      <div class="pl-3">
                        <p class="name">Roger Scott</p>
                        <span class="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- </slide>
            <slide> -->
              <div class="item">
                <div class="testimony-wrap py-4">
                  <div class="text">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia,
                      there live the blind texts.</p>
                    <div class="d-flex align-items-center">
                      <div class="user-img" style="background-image: url(/images/person_1.jpg)"></div>
                      <div class="pl-3">
                        <p class="name">Roger Scott</p>
                        <span class="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- </slide>
            <slide> -->
              <div class="item">
                <div class="testimony-wrap py-4">
                  <div class="text">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia,
                      there live the blind texts.</p>
                    <div class="d-flex align-items-center">
                      <div class="user-img" style="background-image: url(/images/person_2.jpg)"></div>
                      <div class="pl-3">
                        <p class="name">Roger Scott</p>
                        <span class="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- </slide>
          </carousel> -->
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
export default class ASavoirSection extends Vue {
}
</script>

<style lang="scss" scoped>
.item {
  margin-right: 30px;
}
</style>
