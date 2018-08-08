import server from './server'

// http://yapi.demo.qunar.com/mock/11298/api/v1/user/info

export function getUserInfo (data) {
  return server({
    url: `/user/info`,
    method: 'post',
    data: data
  })
}


const api = {
  getUserInfo
}

export default api