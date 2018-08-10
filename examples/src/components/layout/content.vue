<template>
  <div class="main">
    <div class="main-nav">
      <div class="main-nav__content">
        <z-nav :data="data"></z-nav>
      </div>
    </div>
    <div class="main-content">
      <!-- TODO:添加动画 -->
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive" :key="$route.path"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :key="$route.path"></router-view>
      <!-- <transition-group name="fade" tag="section" class="main-wrap">
        <div :key="$route.path" data-id="$route.path">
          <keep-alive>
              <router-view v-if="$route.meta.keepAlive" :key="$route.path"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive" :key="$route.path"></router-view>
        </div>
      </transition-group> -->
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
      width: 240px;
      padding: 40px 20px 20px 20px;
      box-sizing: border-box;
    }
  }
  &-content{
    padding-top: 60px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
  &-wrap{
    transition: all 4.5s linear;
  }
}
/* 显示 */
.fade-in-enter-active{
  transform: translateY(-40px);
}
/* 隐藏 */
.fade-in-leave-active {
  background-color: red;
  transform: translateY(-40px);
  opacity: 0;
}
</style>
