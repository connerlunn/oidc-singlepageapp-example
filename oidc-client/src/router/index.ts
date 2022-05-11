import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CallbackView from '../views/CallbackView.vue'
import AboutView from '../views/AboutView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

import { authService } from '@/services/AuthService';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      isSecure: true,
    }
  },
  {
    path: '/callback',
    name: 'callback',
    component: CallbackView
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isSecure)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    authService.isLoggedIn().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        next();
      } else {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    next();
  }
});

export default router
