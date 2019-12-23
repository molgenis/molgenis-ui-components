import Vue from 'vue'
import App from './App.vue'
// @ts-ignore
import ToastPlugin from './components/ToastPlugin'

Vue.config.productionTip = false

Vue.use(ToastPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
