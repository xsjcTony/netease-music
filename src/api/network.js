import axios from 'axios'

// 全局配置
axios.defaults.baseURL = 'http://192.168.1.2:3000'
axios.defaults.timeout = 3000

// 封装 get / post
export default {
  get (path = '', data = {}) {
    return new Promise((resolve, reject) => {
      axios.get(path, {
        params: data
      })
        .then((response) => { resolve(response.data) })
        .catch((err) => { reject(err) })
    })
  },

  post (path = '', data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(path, data)
        .then((response) => { resolve(response.data) })
        .catch((err) => { reject(err) })
    })
  },

  all (requests) {
    return new Promise((resolve, reject) => {
      Promise.all(requests)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
    })
  }
}
