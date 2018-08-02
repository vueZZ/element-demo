<template>
  <div>
    <h2>Preview 图片预览</h2>
    <p>预览图片</p>
    <h3>基础用法</h3>
    <div class="demo-block">
      <img @click="showImg" class="demo-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532931636161&di=20763c22023e43c4ed63b142ad7c64bc&imgtype=0&src=http%3A%2F%2Fpic.pptbz.com%2F201209%2F2014120951215081.JPG" alt="">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showImg (e) {
      console.log(e)
      this.$preview(e.target.src)
    }
  }
}
</script>


<style lang="scss" scoped>
.demo-img{
  width: 100px;
  height: 100px;
}
</style>

