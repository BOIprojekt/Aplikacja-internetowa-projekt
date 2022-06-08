import { createRouter, createWebHistory } from 'vue-router'
import DimView from '../views/DimView.vue'

const routes = [
  {
    path: '/',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/dimensions',
    name: 'dimensions',
    component: DimView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/stats',
    name: 'stats',
    component: () => import('../views/StatsView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/ProfilView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profiles/:profilId',
    name: 'profiles',
    component: () => import('../components/ProfilEdit.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
