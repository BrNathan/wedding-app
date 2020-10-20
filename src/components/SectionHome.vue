<template>
  <section
    id="home"
    class="video-hero js-fullheight"
    style="background-image: url(images/bg_1.jpg); background-size:cover; background-position: top center;"
    data-stellar-background-ratio="0.5"
  >
    <link rel="stylesheet" href="/css/flaticon.css" />
    <div class="overlay"></div>
    <a
      class="player"
      data-property="{videoURL:'https://www.youtube.com/watch?v=Mjjw19B7rMk',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default',optimizeDisplay:true}"
    ></a>
    <div class="container">
      <div class="row js-fullheight justify-content-center d-flex align-items-center">
        <div class="col-md-12">
          <div class="text text-center">
            <div class="icon">
              <span class="flaticon-rose-outline-variant-with-vines-and-leaves"></span>
            </div>
            <span class="subheading">The Wedding of</span>
            <h1>Francisco &amp; Laura</h1>
            <div id="timer" class="d-flex">
              <div class="time" id="days">
                {{displaydaysLeft}}
                <span>Days</span>
              </div>
              <div class="time pl-3" id="hours">
                {{displayhoursLeft}}
                <span>Hours</span>
              </div>
              <div class="time pl-3" id="minutes">
                {{displayminutesLeft}}
                <span>Minutes</span>
              </div>
              <div class="time pl-3" id="seconds">
                {{displaysecondsLeft}}
                <span>Seconds</span>
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
export default class SectionHome extends Vue {
  public timePassed = 0;
  public timerInterval: number | undefined = undefined;
  public weddingDate: Date = new Date(2021, 8, 21);

  public daysLeft: number | null = null;
  public hoursLeft: number | null = null;
  public minutesLeft: number | null = null;
  public secondsLeft: number | null = null;

  public get displaydaysLeft(): string {
    let text = '-';
    if (this.daysLeft != null) {
      text = SectionHome.displayNumber(this.daysLeft);
    }
    return text;
  }

  public get displayhoursLeft(): string {
    let text = '-';
    if (this.hoursLeft != null) {
      text = SectionHome.displayNumber(this.hoursLeft);
    }
    return text;
  }

  public get displayminutesLeft(): string {
    let text = '-';
    if (this.minutesLeft != null) {
      text = SectionHome.displayNumber(this.minutesLeft);
    }
    return text;
  }

  public get displaysecondsLeft(): string {
    let text = '-';
    if (this.secondsLeft != null) {
      text = SectionHome.displayNumber(this.secondsLeft);
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
    this.timerInterval = setInterval(() => {
      this.timePassed += 1;
      const diff = this.dateDiff(new Date(), this.weddingDate);
      this.daysLeft = diff.day;
      this.hoursLeft = diff.hour;
      this.minutesLeft = diff.min;
      this.secondsLeft = diff.sec;
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.js-fullheight {
  height: 100vh;
}
</style>
