// 用于管理请求各种接口地址

import Network from './network'

export const HomeAPI = {
  getBanner: () => Network.get('/banner', { type: 2 }),
  getPlaylist: (limit = 30) => Network.get('/personalized', { limit }),
  getNewAlbum: () => Network.get('/album/newest'),
  getNewSong: () => Network.get('/personalized/newsong'),
  getPlaylistDetail: id => Network.get('/playlist/detail', { id }),
  getAlbumDetail: id => Network.get('/album', { id })
}

export const SongAPI = {
  getSongDetail: ids => Network.get('/song/detail', { ids }),
  getLyric: id => Network.get('/lyric', { id }),
  getSongUrl: id => Network.get('/song/url', { id })
}
