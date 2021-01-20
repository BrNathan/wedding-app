<template>
  <section class="ftco-section" id="lovestory-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <span class="clone">Leur Histoire</span>
          <h2 class="mb-3">Leur Histoire</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul class="timeline animate-box">
            <li class="animate-box">
              <div
                class="timeline-badge"
              >
              <b-img-lazy fluid src="/images/couple-1.jpg">
              </b-img-lazy>
              </div>
              <div class="timeline-panel text-md-right">
                <div class="overlay"></div>
                <div class="timeline-heading">
                  <span class="date">26 Mai, 2013</span>
                  <h3 class="timeline-title">Premier coup d'oeil</h3>
                </div>
                <div class="timeline-body">
                  <p>
                    Un jour pas comme les autres, Amélie est venue encourager sa cousine Pauline, lors de sa compétition de natation.
                    Sous les éloges de celle-ci, Amélie est tombée sous le charme de ce beau Nathan et de son slip de bain.
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted animate-box">
              <div
                class="timeline-badge"
              >
              <b-img-lazy fluid src="/images/couple-2.jpg">
              </b-img-lazy></div>
              <div class="timeline-panel">
                <div class="overlay overlay-2"></div>
                <div class="timeline-heading">
                  <span class="date">9 Juin, 2013</span>
                  <h3 class="timeline-title">Première rencontre</h3>
                </div>
                <div class="timeline-body">
                  <p>
                    Après de longues conversations virtuelles, Nathan s'est déplacé à son tour au gymnase, pour venir voir sa belle.
                    Mais sa présence au sein des tribunes n'est pas passée inaperçue...
                  </p>
                </div>
              </div>
            </li>
            <li class="animate-box">
              <div
                class="timeline-badge"
              >
              <b-img-lazy fluid src="/images/couple-3.jpg">
              </b-img-lazy></div>
              <div class="timeline-panel text-md-right">
                <div class="overlay"></div>
                <div class="timeline-heading">
                  <span class="date">21 Juin, 2013</span>
                  <h3 class="timeline-title">Le premier pas</h3>
                </div>
                <div class="timeline-body">
                  <p>
                    Entre les notes de musiques et les festivités de la fin du bac, Nathan a fait le premier pas...
                    le premier baiser... le début d'une grande histoire d'amour.
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted animate-box">
              <div
                class="timeline-badge"
              >
              <b-img-lazy fluid src="/images/couple-4.jpg">
              </b-img-lazy></div>
              <div class="timeline-panel">
                <div class="overlay overlay-2"></div>
                <div class="timeline-heading">
                  <span class="date">27 Août, 2016</span>
                  <h3 class="timeline-title">Première vie à deux</h3>
                </div>
                <div class="timeline-body">
                  <p>
                    Après 3 ans de relation, Amélie a décidé de rejoindre Nathan en Île-de-France.
                    Accompagné du petit chien Lancôme, les deux amoureux commencent une nouvelle étape de leur vie.
                  </p>
                </div>
              </div>
            </li>
            <li class="animate-box">
              <div
                class="timeline-badge"
              >
              <b-img-lazy fluid src="/images/couple-5.jpg">
              </b-img-lazy></div>
              <div class="timeline-panel text-md-right">
                <div class="overlay"></div>
                <div class="timeline-heading">
                  <span class="date">6 Juillet, 2020</span>
                  <h3 class="timeline-title">Les fiançailles</h3>
                </div>
                <div class="timeline-body">
                  <p>
                    En vadrouille sur le littoral de Cancale, à l'écart des regards indiscrèts, Nathan a pris la main de sa belle, mis genou à terre, et fait sa demande.
                  </p>
                </div>
              </div>
            </li>
          </ul>
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
export default class LovestorySection extends Vue {
}
</script>

<style lang="scss" scoped>
#lovestory-section {
  .timeline-badge {
    overflow: hidden!important;
  }
}
</style>
