<template>
  <div>
    <router-link to="/component/test/user">前往列表页</router-link>
    <h1>详情页</h1>
    <input type="text">
    <p>
      {{ user }}
    </p>
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
    console.log(this.$route)
    this.$api('getUserInfo', { id: 1 }).then(a => {
      this.user = a
    })
  }
}
</script>
