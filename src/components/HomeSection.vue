<template>
  <section
    id="home"
    class="video-hero js-fullheight"
    style="background-image: url(/images/bg_2.jpg); background-size:cover; background-position: center center;"
    data-stellar-background-ratio="0.5"
  >
    <div class="overlay"></div>
    <div class="container">
      <div
        class="row js-fullheight justify-content-center d-flex align-items-center"
      >
        <div class="col-md-12">
          <div class="text text-center">
            <div class="icon">
              <span
                class="flaticon-rose-outline-variant-with-vines-and-leaves"
              ></span>
            </div>
            <span class="subheading">Le Mariage de</span>
            <h1>Amélie &amp; Nathan</h1>
            <div id="timer" class="d-flex">
              <div class="time" id="days">
                {{ displaydaysLeft }}
                <span>Jours</span>
              </div>
              <div class="time pl-3" id="hours">
                {{ displayhoursLeft }}
                <span>Heures</span>
              </div>
              <div class="time pl-3" id="minutes">
                {{ displayminutesLeft }}
                <span>Minutes</span>
              </div>
              <div class="time pl-3" id="seconds">
                {{ displaysecondsLeft }}
                <span>Secondes</span>
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
export default class HomeSection extends Vue {
  public timePassed = 0;
  public timerInterval: number | undefined = undefined;
  public weddingDate: Date = new Date(2021, 8, 21, 16, 30);

  public daysLeft: number | null = null;
  public hoursLeft: number | null = null;
  public minutesLeft: number | null = null;
  public secondsLeft: number | null = null;

  public get displaydaysLeft(): string {
    let text = '-';
    if (this.daysLeft != null) {
      text = HomeSection.displayNumber(this.daysLeft);
    }
    return text;
  }

  public get displayhoursLeft(): string {
    let text = '-';
    if (this.hoursLeft != null) {
      text = HomeSection.displayNumber(this.hoursLeft);
    }
    return text;
  }

  public get displayminutesLeft(): string {
    let text = '-';
    if (this.minutesLeft != null) {
      text = HomeSection.displayNumber(this.minutesLeft);
    }
    return text;
  }

  public get displaysecondsLeft(): string {
    let text = '-';
    if (this.secondsLeft != null) {
      text = HomeSection.displayNumber(this.secondsLeft);
    }
    return text;
  }

  private static displayNumber(num: number): string {
    if (num < 10) {
      return `0${num.toString()}`;
    } else {
      return num.toString();
    }
  }

  private dateDiff(date1: Date, date2: Date) {
    const diff: { sec: number; min: number; hour: number; day: number } = {
      sec: 0,
      min: 0,
      hour: 0,
      day: 0
    }; // Initialisation du retour
    let tmp = date2.getTime() - date1.getTime();

    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = tmp;

    return diff;
  }

  /**
   * mounted
   */
  public mounted() {
    this.startTimer();
  }

  /**
   * destroyed
   */
  public destroyed() {
    clearInterval(this.timerInterval);
  }

  /**
   * startTimer
   */
  public startTimer() {
    this.displayTimer();

    this.timerInterval = setInterval(() => {
      this.timePassed += 1;
      this.displayTimer();
    }, 1000);
  }

  private displayTimer() {
    const diff = this.dateDiff(new Date(), this.weddingDate);
    this.daysLeft = diff.day;
    this.hoursLeft = diff.hour;
    this.minutesLeft = diff.min;
    this.secondsLeft = diff.sec;
  }
}
</script>

<style lang="scss" scoped>
.js-fullheight {
  height: 100vh;
}
</style>
