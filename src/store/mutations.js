import { SET_NORMAL_PLAYER_SHOW } from './mutations-type'

export default {
  [SET_NORMAL_PLAYER_SHOW] (state, flag) {
    state.isNormalPlayerShow = flag
  }
}
