import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import 'amfe-flexible/index.js'
import 'lib-flexible'

import './assets/css/index.less'

import './permission' // 权限
import {
  default as myApi
} from './api/api'

import {
  hasPermission
} from "./utils/hasPermission"

import toast from './utils/toast'

Vue.prototype.$toast = toast;
axios.defaults.baseURL = '/api'
const options = {
  fullscreenEl: false, //关闭全屏按钮
}

Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$api = myApi

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
