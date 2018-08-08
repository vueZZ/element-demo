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
  created () {
    this.$api.getUserInfo()
  },
  methods: {
    add () {
      this.data.n = this.data.n + 1
    }
  }
}
</script>
