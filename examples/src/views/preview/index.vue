<template>
  <div>
    <h2 @dblclick="showText">Preview 图片预览</h2>
    <p @select="showText">预览图片</p>
    <h3>基础用法</h3>
    {{ text }}
    <div class="demo-block">
      <img @click="showImg" class="demo-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532931636161&di=20763c22023e43c4ed63b142ad7c64bc&imgtype=0&src=http%3A%2F%2Fpic.pptbz.com%2F201209%2F2014120951215081.JPG" alt="">
      <!-- <img @click="showImg" class="demo-img" src="timg?image&quality=80&size=b9999_10000&sec=1532931636161&di=20763c22023e43c4ed63b142ad7c64bc&imgtype=0&src=http%3A%2F%2Fpic.pptbz.com%2F201209%2F2014120951215081.JPG" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  created () {
    // console.log(error)
  },
  methods: {
    showImg (e) {
      // let a = 'wwww.baidu'
      // this.$preview(e.target.src)
      // function set (n) {
      //   return new Promise((resolve, reject) => {
      //     if (n > 0) {
      //       resolve()
      //     } else {
      //       let msg = ';e'
      //       reject(msg)
      //     }
      //   })
      // }
      // set(-1)
    },
    showText (e) {
      console.log(1)
      console.log(e)
      let text = e.target.textContent
      this.text = text
      console.log(text)
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
