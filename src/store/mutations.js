import {
  SET_NORMAL_PLAYER_SHOW,
  SET_MINI_PLAYER_SHOW,
  SET_MUSIC_PLAYING
} from './mutations-type'

export default {
  [SET_NORMAL_PLAYER_SHOW] (state, flag) {
    state.isNormalPlayerShow = flag
  },
  [SET_MINI_PLAYER_SHOW] (state, flag) {
    state.isMiniPlayerShow = flag
  },
  [SET_MUSIC_PLAYING] (state, flag) {
    state.isMusicPlaying = flag
  }
}
