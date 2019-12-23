import { ToastComponent } from './'

const ToastPlugin = {
  install (Vue, options) {
    Vue.component('ToastComponent', ToastComponent)
  }
}

export default ToastPlugin
