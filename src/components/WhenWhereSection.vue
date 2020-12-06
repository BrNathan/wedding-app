<template>
  <section class="ftco-section bg-light" id="when-where-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <span class="clone">Place</span>
          <h2 class="mb-3">Place &amp; Time</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="place img" style="background-image: url(images/place-1.jpg);">
            <div class="text text-center">
              <span class="icon flaticon-reception-bell"></span>
              <h3>The Reception</h3>
              <p><span>Saturday, 28, 2019</span><br><span>02:00 pm-10:00 pm</span></p>
              <p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
              <p><a href="#">+0 (123) 456 78 910</a></p>
              <p><a href="#" class="btn-custom">See Map</a></p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="place img" style="background-image: url(images/place-2.jpg);">
            <div class="text text-center">
              <span class="icon flaticon-wedding-kiss"></span>
              <h3>The Ceremony</h3>
              <p><span>Saturday, 28, 2019</span><br><span>02:00 pm-10:00 pm</span></p>
              <p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
              <p><a href="#">+0 (123) 456 78 910</a></p>
              <p><a href="#" class="btn-custom">See Map</a></p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="place img" style="background-image: url(images/place-3.jpg);">
            <div class="text text-center">
              <span class="icon flaticon-cake"></span>
              <h3>The Party</h3>
              <p><span>Saturday, 28, 2019</span><br><span>02:00 pm-10:00 pm</span></p>
              <p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
              <p><a href="#">+0 (123) 456 78 910</a></p>
              <p><a href="#" class="btn-custom">See Map</a></p>
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
  components: {
  }
})
export default class WhenWhereSection extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
