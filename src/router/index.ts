import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('@/views/Permission.vue')
  },
  {
    path: '/datamanipulate',
    name: 'DataManipulate',
    component: () => import('@/views/DataManipulate.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
