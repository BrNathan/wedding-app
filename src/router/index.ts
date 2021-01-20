import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { ROUTES_NAMES } from './router-names';
import { authenticationStore } from '@/store/authentication';
import WeddingLayout from '../layout/WeddingLayout.vue';

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
        component: () => import(/* webpackChunkName: "wedding-info" */'../views/WeddingInfo.vue'),
        meta: {
          isPublic: false
        }
      },
      {
        path: 'answer',
        name: ROUTES_NAMES.WEDDING_ANSWER,
        component: () => import(/* webpackChunkName: "answer-page" */'../views/AnswerPage.vue'),
        meta: {
          isPublic: false
        }
      },
      {
        path: 'sleeping-location',
        name: ROUTES_NAMES.SLEEPING_LOCATION,
        component: () => import(/* webpackChunkName: "sleeping-location-page" */'../views/SleepingLocationPage.vue'),
        meta: {
          isPublic: false
        }
      },
      {
        path: 'contact',
        name: ROUTES_NAMES.CONTACT_PAGE,
        component: () => import(/* webpackChunkName: "contact-page" */'../views/ContactPage.vue'),
        meta: {
          isPublic: false
        }
      }
    ]
  },
  {
    path: '/login',
    name: ROUTES_NAMES.LOGIN_PAGE,
    component: () => import(/* webpackChunkName: "login-page" */'../views/LoginPage.vue'),
    meta: {
      isPublic: true
    }
  },
  {
    path: '/first-connection',
    name: ROUTES_NAMES.FIRST_CONNECTION_PAGE,
    component: () => import(/* webpackChunkName: "first-connection-page" */'../views/FirstConnectionPage.vue'),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/logout',
    name: ROUTES_NAMES.LOGOUT_PAGE,
    component: () => import(/* webpackChunkName: "logout-page" */'../views/LogoutPage.vue'),
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
  routes,
  // eslint-disable-next-line
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeResolve((to, from, next) => {
  let isUserLogged: boolean = authenticationStore?.isAuthenticate && authenticationStore?.token !== null;
  const isUserAlreadyConnected: boolean | null = authenticationStore?.tokenData?.isAlreadyConnected ?? false;
  if (!isUserLogged) {
    isUserLogged = AuthenticationService.isAuthenticate();
  }

  if (to.name === ROUTES_NAMES.LOGOUT_PAGE) {
    next();
  } else if (!isUserLogged) {
    if (to.meta.isPublic) {
      next();
    } else {
      next({ name: ROUTES_NAMES.LOGIN_PAGE });
    }
  } else if (isUserLogged) {
    if (isUserAlreadyConnected) {
      if ([ROUTES_NAMES.LOGIN_PAGE, ROUTES_NAMES.FIRST_CONNECTION_PAGE].includes(to.name ?? '')) {
        next({ name: ROUTES_NAMES.WEDDING_INFO });
      } else {
        next();
      }
    } else {
      if (to.name === ROUTES_NAMES.FIRST_CONNECTION_PAGE) {
        next();
      } else {
        next({ name: ROUTES_NAMES.FIRST_CONNECTION_PAGE });
      }
    }
  } else {
    next({ name: ROUTES_NAMES.LOGIN_PAGE });
  }
});

export default router;
