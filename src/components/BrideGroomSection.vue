<template>
  <section class="ftco-section bg-section">
    <div class="overlay-top" style="background-image: url(images/top-bg.jpg);"></div>
    <div class="overlay-bottom" style="background-image: url(images/bottom-bg.jpg);"></div>
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <span class="clone">La Mariée &amp; Le Marié</span>
          <h2 class="mb-3">La Mariée &amp; Le Marié</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-6 text-center d-flex align-items-stretch">
              <div class="bride-groom">
                <div class="img" style="background-image: url(images/groom.jpg);"></div>
                <div class="text mt-4 px-4">
                  <h2>Amélie André</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                    large
                    language ocean.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 text-center d-flex align-items-stretch">
              <div class="bride-groom">
                <div class="img" style="background-image: url(images/bride.jpg);"></div>
                <div class="text mt-4 px-4">
                  <h2>Nathan Bruet</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                    large
                    language ocean.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class BrideGroomSection extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
