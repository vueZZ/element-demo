<template>
  <div>
    <h2>test</h2>
    {{ obj }}
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
      obj: '',
      data: {
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
  },
  methods: {
    add () {
      this.data.n = this.data.n + 1
    }
  }
}
</script>
