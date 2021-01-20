import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueFlicking from '@egjs/vue-flicking';
// Webpack example
// import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/css/styleModified.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faTshirt, faCircle, faCheck, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';

library.add(
  faCamera,
  faTshirt,
  faCircle,
  faCheck,
  faGift
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueFlicking);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
