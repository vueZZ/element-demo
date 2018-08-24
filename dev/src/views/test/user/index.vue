<template>
  <div>
    <span @click="toUser">前往详情页</span>
    <h1>列表页</h1>
    <input type="text" name="" id="">
    <p>
      {{ list }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.$vnode.parent.componentInstance)
    if (to.name === 'user详情') {
      to.meta.keepAlive = true
      next()
    } else {
      next()
    }
  },
  methods: {
    toUser () {
      this.$router.push({
        name: 'user详情',
        params: {
          alive: false
        }
      })
    }
  }
}
</script>
