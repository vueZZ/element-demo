import Vue from 'vue'
import App from './App'
import router from './router'
import zeroUI from 'src/index.js'

Vue.use(zeroUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')