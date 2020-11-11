import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { ROUTES_NAMES } from './router-names';
import { authenticationStore } from '@/store/authentication';
import WeddingLayout from '../layout/WeddingLayout.vue';
import WeddingInfo from '../views/WeddingInfo.vue';

import AuthenticationService from '@/services/authentication.service';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/wedding',
    component: WeddingLayout,
    meta: {
      isPublic: false
    },
    children: [
      {
        path: '',
        name: ROUTES_NAMES.WEDDING_INFO,
        component: WeddingInfo,
        meta: {
          isPublic: false
        }
      },
      {
        path: 'answer',
        name: ROUTES_NAMES.WEDDING_ANSWER,
        component: () => import('../views/AnswerPage.vue'),
        meta: {
          isPublic: false
        }
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
    redirect: { name: ROUTES_NAMES.LOGIN_PAGE }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve((to, from, next) => {
  let isUserLogged: boolean = authenticationStore?.isAuthenticate && authenticationStore?.token !== null;
  if (!isUserLogged) {
    isUserLogged = AuthenticationService.isAuthenticate();
  }

  if (!to.meta.isPublic && !isUserLogged) {
    next({ name: ROUTES_NAMES.LOGIN_PAGE });
  } else {
    next();
  }
});

export default router;
