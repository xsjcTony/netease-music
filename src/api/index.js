// 用于管理请求各种接口地址

import Network from './network'

export const HomeAPI = {
  getBanner: () => Network.get('/banner', { type: 2 }),
  getPersonalized: (limit = 30) => Network.get('/personalized', { limit }),
  getNewAlbum: () => Network.get('/album/newest')
}
