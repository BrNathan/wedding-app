<template>
  <b-spinner class="spinner-custom" type="grow" label="Loading..." v-show="isShow"></b-spinner>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class SpinnerComponent extends Vue {
  @Prop({ type: Boolean, default: true, required: false }) isShow = true;
}
</script>

<style lang="scss" scoped>
.spinner-custom {
  color: #f67e7d;
}
</style>
