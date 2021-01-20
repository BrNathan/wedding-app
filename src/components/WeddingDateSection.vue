<template>
  <section
    class="ftco-section ftco-about ftco-no-pt ftco-no-pb"
    id="groom-bride-section"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="wrap">
            <div class="row d-flex">
              <div class="col-md-6 d-flex">
                <div
                  class="img d-flex align-self-stretch align-items-center"
                  style="overflow: hidden"
                >
                  <b-img-lazy fluid src="/images/about.jpg"> </b-img-lazy>
                </div>
              </div>
              <div class="col-md-6 py-md-5 text">
                <div class="py-md-4">
                  <div class="row justify-content-start pb-3">
                    <div class="col-md-12 p-4 p-lg-5 text-center">
                      <span class="subheading mb-4"
                        >Vous êtes invités à célébrer <br />le mariage de</span
                      >
                      <h2 class="mb-4">Amélie <span>&amp;</span> Nathan</h2>
                      <span
                        class="icon flaticon-rose-variant-outline-with-vines"
                      ></span>
                      <span class="subheading">Il aura lieu le</span>
                      <p class="time mb-4"><span>21 | Août | 2021</span></p>
                      <span class="subheading mb-5">A {{ beginningTime }}</span>
                      <span class="subheading mb-5"
                        >{{ beginningPlace }}<br
                      /></span>
                    </div>
                  </div>
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
import { authenticationStore } from '@/store/authentication';

declare interface BeginnigPlace {
  hours: number;
  minutes: number;
  place: string;
}

@Component({
  components: {}
})
export default class WeddingDateSection extends Vue {
  private mairieBeginningPlace: BeginnigPlace = {
    hours: 15,
    minutes: 30,
    place: 'A la Mairie de Mergey'
  }

  private ceremonieBeginningPlace: BeginnigPlace = {
    hours: 16,
    minutes: 30,
    place: 'Au Clos Belair'
  }

  public get beginningTime(): string {
    const userInvitation: string[] = authenticationStore?.tokenData?.userInvitations ?? [];

    if (userInvitation.some(i => i === 'MAI')) {
      return this.mairieBeginningPlace.hours + 'h' + this.mairieBeginningPlace.minutes;
    }
    return this.ceremonieBeginningPlace.hours + 'h' + this.ceremonieBeginningPlace.minutes;
  }

  public get beginningPlace(): string {
    const userInvitation: string[] = authenticationStore?.tokenData?.userInvitations ?? [];

    if (userInvitation.some(i => i === 'MAI')) {
      return this.mairieBeginningPlace.place;
    }
    return this.ceremonieBeginningPlace.place;
  }
}
</script>

<style lang="scss" scoped>
</style>
