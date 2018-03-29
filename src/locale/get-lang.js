import Cookies from 'js-cookie'
// 引入国际化配置
import languageConfig from './i18n-config'
const languageCookieName = languageConfig.cookieName
const languageType = languageConfig.type
// 获取cookie语言配置(兼容重写老平台cookie)
let cookieLang = Cookies.get(languageCookieName)
if (cookieLang === 'zh-cn') {
  cookieLang = null
}
// 自动设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
const lang = cookieLang || localLang || 'zh-CN'

if (!cookieLang) {
  Cookies.set(languageConfig['cookieName'], lang)
}

let langObj = null
for (let i = 0; i < languageType.length; i++) {
  if (languageType[i]['key'] === lang) {
    langObj = languageType[i]
  }
}
export default langObj
