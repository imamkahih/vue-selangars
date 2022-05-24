import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import sDashboard from '../views/superAdmin/Dashboard.vue'
import sLapangan from '../views/superAdmin/Lapangan.vue'
import sPengguna from '../views/superAdmin/Pengguna.vue'

import aDashboard from '../views/admin/Dashboard.vue'
import aLapangan from '../views/admin/Lapangan.vue'
import aEvent from '../views/admin/Event.vue'
import aEventSaya from '../views/admin/EventSaya.vue'
import aEventTambah from '../views/admin/EventTambah.vue'
import aLapanganSaya from '../views/admin/LapanganSaya.vue'
import aLapanganDetail from '../views/admin/LapanganDetail.vue'
import aLapanganTambah from '../views/admin/LapanganTambah.vue'
import aLapanganEdit from '../views/admin/LapanganEdit.vue'
import aLapanganBooking from '../views/admin/LapanganBooking.vue'

import uDashboard from '../views/user/Dashboard.vue'
import uLapangan from '../views/user/Lapangan.vue'

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
    path: '/super-admin/dashboard',
    name: 'sDashboard',
    component: sDashboard
  },
  {
    path: '/super-admin/lapangan',
    name: 'sLapangan',
    component: sLapangan
  },
  {
    path: '/super-admin/pengguna',
    name: 'sPengguna',
    component: sPengguna
  },
  {
    path: '/admin/dashboard',
    name: 'aDashboard',
    component: aDashboard
  },
  {
    path: '/admin/lapangan',
    name: 'aLapangan',
    component: aLapangan
  },
  {
    path: '/admin/lapangan-saya',
    name: 'aLapanganSaya',
    component: aLapanganSaya
  },{
    path: '/admin/event',
    name: 'aEvent',
    component: aEvent
  },{
    path: '/admin/event-saya',
    name: 'aEventSaya',
    component: aEventSaya
  },{
    path: '/admin/event-tambah',
    name: 'aEventTambah',
    component: aEventTambah
  },{
    path: '/admin/tambah-lapang',
    name: 'aLapanganTambah',
    component: aLapanganTambah
  },
  {
    path: '/admin/lapangan/:id',
    name: 'aLapanganDetail',
    component: aLapanganDetail
  },
  {
    path: '/admin/edit-lapangan/:id',
    name: 'aLapanganEdit',
    component: aLapanganEdit
  },
  {
    path: '/admin/booking-lapangan/:id',
    name: 'aLapanganBooking',
    component: aLapanganBooking
  },
  {
    path: '/pengguna/dashboard',
    name: 'uDashboard',
    component: uDashboard
  },
  {
    path: '/pengguna/lapangan',
    name: 'uLapangan',
    component: uLapangan
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
