<template>
  <div>
    子：{{ $props }}
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  props: {
    n: Number
  },
  created() {
  },
  methods: {
    add () {
      // this.$emit('update:name', this.name + 1)
      this.$emit('update:n', this.n + 1)
    }
  }
}
</script>

