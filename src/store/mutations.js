import * as mutationType from './mutations-type'

export default {
  [mutationType.SET_NORMAL_PLAYER_SHOW] (state, flag) {
    state.isNormalPlayerShow = flag
    if (flag) {
      state.isListPlayerShow = false
      state.isMiniPlayerShow = false
    }
  },
  [mutationType.SET_MINI_PLAYER_SHOW] (state, flag) {
    state.isMiniPlayerShow = flag
    if (flag) {
      state.isNormalPlayerShow = false
      state.isListPlayerShow = false
    }
  },
  [mutationType.SET_LIST_PLAYER_SHOW] (state, flag) {
    state.isListPlayerShow = flag
  },
  [mutationType.SET_MUSIC_PLAYING] (state, flag) {
    state.isMusicPlaying = flag
  },
  [mutationType.SET_PLAY_MODE_TYPE] (state, mode) {
    state.playModeType = mode
  },
  [mutationType.SET_SONGS] (state, songs) {
    state.songs = songs
  },
  [mutationType.GET_SONG_LYRIC] (state, lyric) {
    state.currentSongLyric = lyric
  },
  [mutationType.DELETE_SONGS] (state, index) {
    if (index === undefined) {
      state.songs = []
    } else {
      state.songs.splice(index, 1)
    }
    if (state.songs.length === 0) {
      state.isMiniPlayerShow = false
      state.isListPlayerShow = false
      state.isNormalPlayerShow = false
    }
  }
}
