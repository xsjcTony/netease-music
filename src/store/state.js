import playMode from './playModeType'

export default {
  isNormalPlayerShow: false,
  isMiniPlayerShow: false,
  isListPlayerShow: false,
  isMusicPlaying: false,
  playModeType: playMode.listLoop,
  songs: [],
  currentSongIndex: 0,
  currentSongLyric: {}
}
