import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import aDashboard from '../views/admin/Dashboard.vue'
import sDashboard from '../views/superAdmin/Dashboard.vue'
import uDashboard from '../views/user/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin/dashboard',
    name: 'aDashboard',
    component: aDashboard
  },
  {
    path: '/super-admin/dashboard',
    name: 'sDashboard',
    component: sDashboard
  },
  {
    path: '/user/dashboard',
    name: 'uDashboard',
    component: uDashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
