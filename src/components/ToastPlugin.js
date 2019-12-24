import { ToastComponent } from './'

const ToastPlugin = {
  install (Vue) {
    console.log('mounted', ToastComponent)
    Vue.component('ToastComponent', ToastComponent)
  }
}

export default ToastPlugin
