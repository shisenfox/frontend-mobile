import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Detail from '../views/home/detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
