import Cookies from 'js-cookie'
// 引入国际化配置
import languageConfig from '../../../../locale/i18n-config'

import * as types from '../mutation-types'
import fetch from '../../fetch'

// initial state
const state = {
  logoCode: null,
  faviconCode: null,
  verifyImgCode: null,
  language: '',
  loginErrorMsg: null,
  sessionKey: null
}

// getters
const getters = {
  // logoCode: state => state.logoCode,
  // faviconCode: state => state.faviconCode,
  // verifyImgCode: state => state.verifyImgCode
  // language: state => state.language,
  // loginErrorMsg: state => state.loginErrorMsg,
  // sessionKey: state => state.sessionKey
  // logoCode: state => {
  //   return state.logoCode
  // }
}

// actions
const actions = {
  // 获取页面IMG
  getImg ({ commit, state }, product) {
    fetch._getImg()
    .then(res => {
      const savedData = res.data
      commit(types.GET_IMG_CODE, { savedData })
    })
  },
  // 获取验证码base64
  getVerify ({ commit, state }, product) {
    fetch._getVerify()
      .then(res => {
        const savedData = res.data
        commit(types.GET_VERIFY_CODE, { savedData })
      })
  },
  // 设置语言
  setLanguage ({ commit, state }, language) {
    commit(types.SET_LANGUAGE, { language })
    Cookies.set(languageConfig['cookieName'], language)
  },
  // 获取语言
  setCookieLanguage ({ commit, state }) {
    const language = Cookies.get(languageConfig['cookieName'])
    commit(types.SET_LANGUAGE, { language })
  },
  // 登录动作
  postLogin ({ commit, state }, data) {
    fetch._postLogin(data)
    .then(res => {
      commit(types.SET_LOGIN_ERROR_MSG, null)
      commit(types.SET_SESSION_KEY, res.data.session_key)
    })
    .catch((error) => {
      commit(types.SET_LOGIN_ERROR_MSG, error.response.data.message)
    })
  },
  // 设置登录错误信息
  setLoginError ({ commit, state }, msg) {
    commit(types.SET_LOGIN_ERROR_MSG, msg)
  }
}

// mutations
const mutations = {
  [types.GET_IMG_CODE] (state, { savedData }) {
    state.logoCode = savedData.logo
    state.faviconCode = savedData.icon
  },
  [types.GET_VERIFY_CODE] (state, { savedData }) {
    state.verifyImgCode = savedData
  },
  [types.SET_LANGUAGE] (state, { language }) {
    state.language = language
  },
  [types.SET_LOGIN_ERROR_MSG] (state, errorData) {
    state.loginErrorMsg = errorData
  },
  [types.SET_SESSION_KEY] (state, data) {
    state.sessionKey = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
