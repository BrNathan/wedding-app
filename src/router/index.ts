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
      },
      {
        path: 'sleeping-location',
        name: ROUTES_NAMES.SLEEPING_LOCATION,
        component: () => import('../views/SleepingLocationPage.vue'),
        meta: {
          isPublic: false
        }
      },
      {
        path: 'contact',
        name: ROUTES_NAMES.CONTACT_PAGE,
        component: () => import('../views/ContactPage.vue'),
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
    path: '/first-connection',
    name: ROUTES_NAMES.FIRST_CONNECTION_PAGE,
    component: () => import('../views/FirstConnectionPage.vue'),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/logout',
    name: ROUTES_NAMES.LOGOUT_PAGE,
    component: () => import('../views/LogoutPage.vue'),
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
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
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
