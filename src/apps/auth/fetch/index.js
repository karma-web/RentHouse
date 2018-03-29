// 根据config中mock设置开发API
const dev = window.CONFIG.mock
let api = window.CONFIG.api
if (dev) { api = window.CONFIG.mockApi }

import axios from 'axios'
// axios.defaults.baseURL = config.loginApi
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 公用请求方法
// -- url：请求地址
// --method：请求方式 如：post、get等
// --params：发送数据对象
export function fetch (url, method, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: method || 'get',
      url: url,
      data: params || {},
      // responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (const it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }]
    })
    .then(response => {
      resolve(response.data)
    })
    .catch((error) => {
      // console.log(error.response)
      reject(error)
    })
  })
}

// 定义业务请求接口方法
const _getImg = function () {
  return fetch(api.admin + '/get_banner_logo_icon/')
}
const _getVerify = function () {
  return fetch(api.login + '/verify_image/')
}
const _postLogin = function (data) {
  return fetch(api.login + '/auth/', 'post', data)
}

// 输出业务请求方法，规范为vuex模块内引入
export default {
  _getImg,
  _getVerify,
  _postLogin
}
