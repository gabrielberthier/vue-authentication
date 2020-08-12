import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import RegisterUser from './views/Auth/RegisterUser.vue'
import LoginUser from './views/Auth/LoginUser.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser
    }
  ]
})

router.beforeEach((to, from, next) =>
{
  const loggedIn = localStorage.getItem('user');
  const loggedBool = !!loggedIn;

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedBool)
  {
    next("/");
  }
  next();
});

export default router
