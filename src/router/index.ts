import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { ROUTES_NAMES } from './router-names';

import { authentication } from '@/store/authentication';
import { AuthenticationState } from '@/store/authentication/types';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/wedding',
    component: () => import(/* webpackChunkName: "wedding-info" */ '../layout/WeddingLayout.vue'),
    meta: {
      isPublic: false
    },
    children: [
      {
        path: '',
        name: ROUTES_NAMES.WEDDING_INFO,
        component: () => import(/* webpackChunkName: "wedding-info" */ '../views/WeddingInfo.vue')
      }
    ]
  },
  {
    path: '/login',
    name: ROUTES_NAMES.LOGIN_PAGE,
    component: () => import('../views/LoginPage.vue'),
    meta: {
      isPublic: true
    }
  },
  {
    path: '*',
    redirect: { name: 'LoginPage' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve((to, from, next) => {
  const isUserLogged: boolean = (authentication.state as AuthenticationState).isAuthenticate && (authentication.state as AuthenticationState).token !== null;
  if (!to.meta.isPublic && !isUserLogged) {
    next({ name: ROUTES_NAMES.LOGIN_PAGE });
  } else {
    next();
  }
});

export default router;
