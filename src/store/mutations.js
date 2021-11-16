import * as mutationType from './mutations-type'

export default {
  [mutationType.SET_NORMAL_PLAYER_SHOW] (state, flag) {
    state.isNormalPlayerShow = flag
  },
  [mutationType.SET_MINI_PLAYER_SHOW] (state, flag) {
    state.isMiniPlayerShow = flag
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
  [mutationType.SET_SONG_LYRIC] (state, lyric) {
    state.currentSongLyric = lyric
  }
}
