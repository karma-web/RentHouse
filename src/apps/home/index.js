import Vue from 'vue'
// 载入根组件
import App from './app.vue'

// 载入组件库
import iView from 'iview'
Vue.use(iView)

// 载入muse-ui组件库
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// 路由设置
import router from './router'

// vuex状态存储
import store from './store'

// 验证&全局本地化
import '../../locale'

// UI翻译
import i18n from './i18n'

// import '../../filters'
// 引入样式
import './style/index.less'

// 注册自定义组件
import Loading from '../../util/component/loading'
Vue.use(Loading)

// 异步存储router信息到vuex
import { sync } from 'vuex-router-sync'
sync(store, router, { moduleName: 'router' })

// 初始化项目根组件
new Vue({
  el: 'app',
  i18n,
  store,
  router,
  render: h => h(App)
})
