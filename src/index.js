import Hello from '../packages/hello/index.js'
import top from '../packages/top/index.js'
import preview from '../packages/preview/index.js'

const components = [
  Hello,
  top
]

const install = function (Vue) {
  /* istanbul ignore next */
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$preview = preview
}

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Hello,
  top
}
