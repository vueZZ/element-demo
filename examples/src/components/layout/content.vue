<template>
  <div class="main">
    <div class="main-nav">
      <div class="main-nav__content">
        <z-nav :data="data"></z-nav>
      </div>
    </div>
    <div class="main-content">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navConfig from '../../router/nav.config.json'
import zNav from './nav'
export default {
  components: {
    zNav
  },
  data () {
    return {
      data: {},
      base: '/component'
    }
  },
  created () {
    this.data = navConfig['zh-CN']
  }
}
</script>


<style lang="scss" scoped>
.main{
  &-nav{
    position: fixed;
    top: 61px;
    left: 0;
    bottom: 0;
    z-index: 10;
    overflow-x: hidden;
    overflow-y: auto;
    &__content{
      width: 260px;
      padding: 40px 20px 60px 60px;
      height: 9000px;
    }
  }
  &-content{
    padding-top: 60px;
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
}
</style>

