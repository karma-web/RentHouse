import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 获取当前语言类型obj
import langObj from '../../../locale/get-lang'

// 获取框架语言配置文件
import iZhLocale from 'iview/src/locale/lang/zh-CN'
import iEnLocale from 'iview/src/locale/lang/en-US'

// 获取当前app语言配置
import appEn from './en.js'
import appCn from './cn.js'

Vue.use(VueI18n)

// 合并语言配置
const mergeZH = Object.assign(iZhLocale, appCn)
const mergeEN = Object.assign(iEnLocale, appEn)

// i18n引入合并语言配置，并设置默认语言类型
const i18n = new VueI18n({
  locale: langObj['key'],
  messages: {
    'zh-CN': mergeZH,
    'en-US': mergeEN
  }
})
export default i18n
