import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import SignUp from '../views/Signup.vue'
import AllMenus from '../views/AllMenus.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: { Auth: false },
    beforeEnter: (to, from, next) => {
      if (store.state.auth.isLoggedIn) {
        next({ path: '/home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: { Auth: true },
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    meta: { Auth: false },
    component: SignUp
  },
  {
    path: '/allmenus',
    name: 'allmenus',
    meta: { Auth: false },
    component: AllMenus
  },
  {
    path: '/menucreator',
    meta: { Auth: true },
    name: 'menucreator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuCreator.vue')
  },
  {
    path: '/about',
    meta: { Auth: false },
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.Auth && !store.getters['auth/isLoggedIn']) {
    next({ name: 'login', replace: true })
  } else {
    if (store.getters['auth/isLoggedIn']) {
      store.commit('auth/SET_USER')
    }
    next()
  }
})

export default router
