// http://yapi.demo.qunar.com/mock/9563/user/:id
const api = {
  check: { // 数据校验方法
    default: function (res) {
      return res.data
    },
    cehckResult: function (res) {
      return res.data
    },
  },
  // api配置
  // ——————user——————
  getUserInfo: { url: '/user/', type: 'get' }
}

export default api
