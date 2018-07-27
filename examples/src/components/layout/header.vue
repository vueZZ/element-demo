<template>
  <div class="header">
    <router-link class="header-logo" to="/">
      <img src="../../assets/img/logo.png" alt="vue logo" class="header-logo__img">
      <span>ZERO-UI</span>  
    </router-link>
    <div class="header-right">
      <span></span>
      <a href="https://github.com/vuezz/zero-ui/" class="github" target="_blank" title="github">
        <img src="https://img.yzcdn.cn/upload_files/2017/03/30/Fil9peDfgzvk3kj-oFCsElS4FS1x.png" alt="" class="github">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header{
  display: flex;
  align-items: center;
  color: #fff;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  transition: background-color 0.3s ease-in-out;
  &-logo{
    display: flex;
    align-items: center;
    font-size: 1.5em;
    color: #2c3e50;
    font-family: monospace;
    font-weight: 500;
    &__img{
      display: inline-block;
      height: 40px;
      margin-right: 6px;
    }
  }
  &-right{
    position: fixed;
    right: 30px;
    .github{
      display: inline-block;
      width: 30px;
      height: 30px;
      overflow: hidden;
    }
  }
}
</style>
