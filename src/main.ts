import Vue from 'vue'
import App from './App.vue'
import router from './router'

// @ts-ignore
import ToastPlugin from './components/ToastPlugin'

Vue.config.productionTip = false

Vue.use(ToastPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
