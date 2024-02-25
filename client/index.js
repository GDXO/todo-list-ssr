import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import '@/assets/styles/global.styl'
import createRouter from '@/config/router/'
import store from '@/config/store/'

Vue.use(VueRouter)

// 定义 router
const router = createRouter()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
