<template>
  <div class="web">
    <webHead class="web-head"></webHead>
    <webContent class="web-main"></webContent>
  </div>
</template>

<script>
import webHead from './header.vue'
import webContent from './content.vue'
export default {
  components: {
    webHead, webContent
  }
}
</script>

<style lang="scss" scoped>
  .web{
    &-head{
      position: fixed;
      top: 0;
      z-index: 100;
      width: 100%;
      padding: 0 60px;
      height: 60px;
    }
    &-main{
      position: relative;
      padding: 2.2em 0;
      max-width: 600px;
      margin: 0 auto;
      padding-left: 50px;
    }
  }
</style>

