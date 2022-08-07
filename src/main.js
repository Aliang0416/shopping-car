import Vue from 'vue'
import App from './App.vue'
import '../node_modules/_bootstrap@5.2.0@bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
