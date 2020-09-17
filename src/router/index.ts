import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/wedding',
    name: 'WeddingInfo',
    component: () => import(/* webpackChunkName: "wedding-info" */ '../views/WeddingInfo.vue')
  },
  {
    path: '*',
    redirect: { name: 'WeddingInfo' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
