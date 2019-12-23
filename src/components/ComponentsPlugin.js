import { ToastComponent } from './'

const ComponentsPlugin = {
  install (Vue, options) {
    Vue.component('ToastComponent', ToastComponent)
  }
}

export default ComponentsPlugin
