import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import '@/assets/styles/global.styl'
import createRouter from '@/config/router/'
import createStore from '@/config/store/'

Vue.use(VueRouter)
Vue.use(Vuex)

// 定义 router
const router = createRouter()

// 定义 store
const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
