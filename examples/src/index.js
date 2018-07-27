import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import zeroUI from 'src/index.js'
import routes from './router/index.js'
import 'normalize.css'
import './styles/index.scss'

Vue.use(zeroUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
});


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')