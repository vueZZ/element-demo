<template>
  <div class="z-hello">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'z-hello',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.z-hello{
  color: red;
}
</style>
