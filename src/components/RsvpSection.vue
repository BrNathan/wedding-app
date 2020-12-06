<template>
  <section class="ftco-section bg-secondary" id="rsvp-section">
    <div class="container">
      <div class="row justify-content-center pb-5">
        <div class="col-md-12 text-center heading-section">
          <span class="clone">RSVP</span>
          <h2 class="mb-3">Are Your Attending?</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7">
          <form action="#" class="rsvp-form">
            <div class="">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your email">
              </div>
            </div>
            <div class="">
              <div class="form-group">
                <div class="form-field">
                  <div class="select-wrap">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <b-icon-chevron-down></b-icon-chevron-down>
                    </div>
                    <select name="" id="" class="form-control">
                      <option value="">Guest</option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="2" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="I am attending" class="btn btn-primary py-3 px-4">
              </div>
            </div>
          </form>
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
export default class RsvpSection extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
