import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
fastclick.attach(document.body)

let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use({
  vm
})