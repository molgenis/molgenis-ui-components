import { ToastComponent } from './'

const ComponentsPlugin = {
  install (Vue) {
    Vue.component('ToastComponent', ToastComponent)
  }
}

export default ComponentsPlugin
