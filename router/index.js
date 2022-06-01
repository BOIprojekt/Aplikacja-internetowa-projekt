import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignInView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/feed',
    name: 'feed',
    component: () => import('../views/FeedView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/*',
    redirect: '/register'
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const auth = getAuth();

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
   if (to.path === '/register' && auth.currentUser) {
    next ('/feed')
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
});



export default router
