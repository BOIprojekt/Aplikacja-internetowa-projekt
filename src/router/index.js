import { createRouter, createWebHistory } from 'vue-router'
import DimView from '../views/DimView.vue'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* const auth = getAuth();

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        auth,
        (user) => {
          removeListener();
          resolve(user);
        },
        reject
      ); 
  });
}; 

 router.beforeEach(async(to, from, next) => {
   if (to.path === '/' && auth.currentUser) {
    next ('/')
    return;
   }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
    next("/")
  } else {
    alert("Nie posiadasz dostępu!");
    next("/");
   }
  } else {
  next();
}
}); */



export default router
