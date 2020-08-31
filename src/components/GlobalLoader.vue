<template>
    <div id="global-loader" class="show fullscreen">
      <svg class="circular" width="48px" height="48px">
        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
        <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
          stroke="#F96D00" />
      </svg>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class GlobalLoader extends Vue {

// var loader = function() {
// setTimeout(function() {
// if($('#ftco-loader').length > 0) {
// $('#ftco-loader').removeClass('show');
// }
// }, 1);
// };
// loader();
}
</script>

<style lang="scss" scoped>

</style>
