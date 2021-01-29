<template>
  <section class="ftco-section bg-section">
    <div
      class="overlay-top"
      style="background-image: url(/images/top-bg.jpg);"
    ></div>
    <div
      class="overlay-bottom"
      style="background-image: url(/images/bottom-bg.jpg);"
    ></div>
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
                <div class="img">
                  <b-img-lazy fluid src="/images/bride8.jpg"> </b-img-lazy>
                </div>
                <div class="text mt-4 px-4">
                  <h2>Amélie</h2>
                  <p>
                    <span class="guillemet">"</span>
                    Mes proches me définissent comme une personne joyeuse et
                    soucieuse du bonheur des autres, sans oublier de souligner
                    mon caractère bien affirmé.
                    <br />
                    Gourmande, mes petits péchés mignons sont les Kinder
                    Surprise et les bons macarons.
                    <!-- J'apprécie les petits moments de complicités passés devant un bon match de hand ou de foot, accompagné d'une pizza et de la bière qui va bien. -->
                    <br />
                    J'aime me ressourcer pendant de belles balades champêtres,
                    accompagnée de mon homme et de notre petit chien, Lancôme.
                    <span class="guillemet">"</span>
                    <!-- <br /> -->
                    <!-- Gentille mais chiante. -->
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 text-center d-flex align-items-stretch">
              <div class="bride-groom">
                <div class="img">
                  <b-img-lazy fluid src="/images/groom3.jpg"> </b-img-lazy>
                </div>
                <div class="text mt-4 px-4">
                  <h2>Nathan</h2>
                  <p>
                    <span class="guillemet">"</span>

                    Depuis tout petit, je suis de nature calme et aimant. Mais
                    cela ne m'empêche pas d'avoir mon caractère bien personnel.
                    <br />
                    J'aime cuisiner de petits plats savoureux à ma petite femme.
                    Mais je ne vous cache pas qu'ils sont meilleurs quand elle
                    m'accompagne.
                    <br />
                    J'apprécie les moments privilégiés en amoureux devant une
                    bonne série ou un bon évènement sportif.
                    <span class="guillemet">"</span>
                  </p>
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
.bride-groom {
  .img {
    overflow: hidden !important;
  }
}
.guillemet {
  font-weight: bold;
  font-size: 25px;
}
</style>
