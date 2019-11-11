// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import getMyConfig from './assets/js/config'
import storage from 'good-storage'

Vue.prototype.$axios = Axios
Vue.prototype.$layer = layer(Vue)
Vue.prototype.$storage = storage
Vue.prototype.$getMyConfig = getMyConfig
Axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
require('animate.css/animate.min.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  components: { App },
  template: '<App/>'
})
