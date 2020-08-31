import { createStore } from 'vuex'

export default createStore({
  // 存放变量 $store.state.XXX
  state: {
    userSort: 0
  },
  // 操作函数 调用 $store.commit('XXXX', aaa)
  mutations: {
    userSortAdd (state) {
      state.userSort++
    }
  },
  // 存放异步操作 调用 $store.dispatch('XXXX', aaa)
  actions: {
  },
  // 模板，可以引用一个带有 state、mutations、actions的模块，通过明名空间，调用对应的操作
  modules: {
  }
})
