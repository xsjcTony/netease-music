// 用于管理请求各种接口地址

import Network from './network'

export const getBanner = () => Network.get('/banner', { type: 2 })
