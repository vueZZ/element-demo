// http://yapi.demo.qunar.com/mock/9563/user/:id
const api = {
  check: { // 数据校验方法
    default: function (res) {
      return res.data
    },
    cehckResult: function (res) {
      return res.data
      // if (res.data.success === true) {
      //   if (res.data.code === 201) {
      //     let msg = '登陆过期，请重新登录'
      //     throw msg
      //   } else {
      //     return res.data
      //   }
      // } else {
      //   let msg = 'error'
      //   throw msg
      // }
    }
  },
  // api配置
  // ——————user——————
  // 获取用户信息
  'user.info': { url: '/user/', type: 'get' }
}

export default api
