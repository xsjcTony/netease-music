import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNormalPlayerShow: false
  },
  mutations: {
    toggleNormalPlayerShow (state, flag) {
      state.isNormalPlayerShow = flag
    }
  },
  actions: {
    setNormalPlayerShow ({ commit }, flag) {
      commit('toggleNormalPlayerShow', flag)
    }
  },
  modules: {

  }
})
