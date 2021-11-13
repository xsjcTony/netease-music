import { SET_NORMAL_PLAYER_SHOW } from './mutations-type'

export default {
  setNormalPlayerShow ({ commit }, flag) {
    commit(SET_NORMAL_PLAYER_SHOW, flag)
  }
}
