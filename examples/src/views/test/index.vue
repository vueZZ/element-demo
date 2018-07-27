<template>
  <div>
    <h2>test</h2>
    <z-hello text="hello"></z-hello>
    <img src="http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg" alt="" @click="showImg">
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el, binding, vnode) {
        let _this = vnode
        console.log(vnode)
      }
    }
  },
  created () {
    let _this = this
    const timer = setInterval(() =>{
      console.log(1) 
      // 某些定时器操作 }, 500); 
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。 
      _this.$once('hook:beforeDestroy', () => { 
        console.log('beforeDestroy')
        clearInterval(timer)}
      )
    }, 1000)
  },
  methods: {
    showImg (e) {
      let src = e.target.src
      this.$preview(src)
    }
  }
}
</script>
