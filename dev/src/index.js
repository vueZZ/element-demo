import Vue from 'vue'
import App from './App'
import zeroUI from 'src/index.js'
import router from './router/index.js'
import 'normalize.css'
import './styles/index.scss'
import api from './api'
import ElementUI from 'element-ui'

Vue.use(zeroUI)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
