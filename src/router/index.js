import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/MapView.vue')
  },
  // {
  //   path: '/orphanage',
  //   name: 'orphanage',
  //   component: () => import('../views/OrphanageView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
