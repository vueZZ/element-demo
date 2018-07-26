import Hello from '../packages/hello/index.js'

const components = [
  Hello
]

const install = function (Vue) {
  /* istanbul ignore next */
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Hello
}
