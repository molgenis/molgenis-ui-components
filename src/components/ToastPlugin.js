import { ToastComponent } from './'

const ToastPlugin = {
  install (Vue) {
    Vue.component('ToastComponent', ToastComponent)
  }
}

export default ToastPlugin
