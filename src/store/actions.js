import {
  SET_NORMAL_PLAYER_SHOW,
  SET_MINI_PLAYER_SHOW,
  SET_MUSIC_PLAYING,
  SET_PLAY_MODE_TYPE
} from './mutations-type'

export default {
  setNormalPlayerShow ({ commit }, flag) {
    commit(SET_NORMAL_PLAYER_SHOW, flag)
  },
  setMiniPlayerShow ({ commit }, flag) {
    commit(SET_MINI_PLAYER_SHOW, flag)
  },
  setMusicPlaying ({ commit }, flag) {
    commit(SET_MUSIC_PLAYING, flag)
  },
  setPlayModeType ({ commit }, mode) {
    commit(SET_PLAY_MODE_TYPE, mode)
  }
}
