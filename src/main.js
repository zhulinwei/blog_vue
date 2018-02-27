import "common/css/base.css"
import "common/css/layout.css"
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
