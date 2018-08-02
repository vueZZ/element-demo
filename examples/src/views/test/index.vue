<template>
  <div>
    <h2>test</h2>
    <children v-bind.sync="data.n"></children>
    父：{{ data }}
    <button @click="add">add</button>
  </div>
</template>

<script>
import children from './children.vue'
export default {
  components: {
    children
  },
  data () {
    return {
      data: {
        name: 1,
        name: {
          n: 0
        },
        n: {
          n: 0
        }
      }
    }
  },
  // created () {
  //   let _this = this
  //   const timer = setInterval(() =>{
  //     console.log(1) 
  //     // 某些定时器操作 }, 500); 
  //     // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。 
  //     _this.$once('hook:beforeDestroy', () => { 
  //       console.log('beforeDestroy')
  //       clearInterval(timer)}
  //     )
  //   }, 1000)
  // },
  methods: {
    add () {
      this.data.n = this.data.n + 1
    }
  }
}
</script>
