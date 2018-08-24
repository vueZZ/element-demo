const user = {
  state: {
    info: ''
  },
  mutations: {
    SET_userInfo (state, value) {
      state.info = value
    }
  },
  actions: {
    changeUser (state, value) {
      value = 'zz' + value
  
      state.info = value
    }
  }
}

export default user
