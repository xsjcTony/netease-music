import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
/*
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
  getters: {
    isNormalPlayerShow (state) {
      return state.isNormalPlayerShow
    }
  }
*/
})
