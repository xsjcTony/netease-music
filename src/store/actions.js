import * as mutationType from './mutations-type'

export default {
  setNormalPlayerShow ({ commit }, flag) {
    commit(mutationType.SET_NORMAL_PLAYER_SHOW, flag)
  },
  setMiniPlayerShow ({ commit }, flag) {
    commit(mutationType.SET_MINI_PLAYER_SHOW, flag)
  },
  setListPlayerShow ({ commit }, flag) {
    commit(mutationType.SET_LIST_PLAYER_SHOW, flag)
  },
  setMusicPlaying ({ commit }, flag) {
    commit(mutationType.SET_MUSIC_PLAYING, flag)
  },
  setPlayModeType ({ commit }, mode) {
    commit(mutationType.SET_PLAY_MODE_TYPE, mode)
  }
}
