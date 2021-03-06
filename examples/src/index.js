import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import zeroUI from 'src/index.js'
import routes from './router/index.js'
import 'normalize.css'
import './styles/index.scss'
import api from './api'
import ElementUI from 'element-ui'

Vue.use(zeroUI)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$api = api

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
