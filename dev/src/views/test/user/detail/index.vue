<template>
  <div @click="father">
    <router-link to="/component/test/user">前往列表页</router-link>
    <h1>详情页</h1>
    <input type="text">
    <!-- <p @click="children">
      {{ user }}
    </p> -->
    <el-button @click="children">点击</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: ''
    }
  },
  created () {
    console.log(1)
    this.$api('user.info', { id: 1 }).then(a => {
      this.user = a
    })
  },
  methods: {
    father () {
      console.log('father')
    },
    children () {
      console.log('children')
    }
  }
}
</script>
