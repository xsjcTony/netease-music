// 用于管理请求各种接口地址

import Network from './network'

export const HomeAPI = {
  getBanner: () => Network.get('/banner', { type: 2 }),
  getPlaylist: (limit = 30) => Network.get('/personalized', { limit }),
  getNewAlbum: () => Network.get('/album/newest'),
  getNewSong: () => Network.get('/personalized/newsong'),
  getPlaylistDetail: id => Network.get('/playlist/detail', { id }),
  getAlbumDetail: id => Network.get('/album', { id }),
  getArtistDetail: id => Network.get('/artists', { id })
}

export const SongAPI = {
  getSongDetail: ids => Network.get('/song/detail', { ids }),
  getLyric: id => Network.get('/lyric', { id }),
  getSongUrl: id => Network.get('/song/url', { id })
}

export const ArtistsAPI = {
  /**
   * @description Get artists based on type, area and initial.
   * @param {number} type
   * @param {number} area
   * @param {string} initial - `"-1"` for top artists.
   * @param {number} offset
   * @param {number} limit
   * @return {Promise<unknown>}
   */
  getArtists: (type = -1, area = -1, initial = '-1', offset = 0, limit = 30) => new Promise((resolve, reject) => {
    Network.get('/artist/list', { type, area, initial, offset, limit })
      .then((res) => { resolve(res.artists) })
      .catch((err) => { reject(err) })
  }),

  /**
   * @description Get all artists needed, including 5 top artists and 30 artists which start with each letter from `A` to `Z`.
   * @returns {Promise<unknown>}
   */
  getAllArtists () {
    const keys = ['热']
    const requests = [this.getArtists(-1, -1, '-1', 0, 5)]
    for (let i = 65; i <= 90; i++) {
      const character = String.fromCharCode(i)
      keys.push(character)
      requests.push(this.getArtists(-1, -1, character, 0, 30))
    }

    return new Promise((resolve, reject) => {
      Network.all(requests)
        .then((res) => { resolve({ keys, artists: res }) })
        .catch((err) => { reject(err) })
    })
  }
}
