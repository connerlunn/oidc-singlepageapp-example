import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CallbackView from '../views/CallbackView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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

export default router
