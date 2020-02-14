import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Detail from '../views/home/detail'
import my from '../views/my/MyHome' // 我的——主页

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
  }, {
    path: '/my',
    name: 'my',
    component: my
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
