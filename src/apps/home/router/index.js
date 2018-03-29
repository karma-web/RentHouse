import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerMap = [
  {
    path: '/home',
    name: 'home',
    component: require('../tpl/home/index.vue')
  },
  {
    path: '/searchHouse',
    name: 'searchHouse',
    component: require('../tpl/searchHouse/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: require('../tpl/about/index.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  // mode: 'history',
  base: 'home',
  routes: routerMap
})

// 未获得权限的url路由跳转回默认页
router.beforeEach((to, from, next) => {
  try {
    const path = to.path.split('/').splice(1, 2)
    let skip = true
    let target = window.COS.permissions
    try {
      for (let i = 0; i < path.length; i++) {
        target = target[path[i]]
        if (!target) {
          skip = false
        }
      }
      if (skip) {
        next()
      } else {
        next('/about')
      }
    } catch (err) {
      console.log('router.beforeEach:' + err)
      next('/about')
    }
  } catch (err) {
    console.log('Not return [window.COS.permissions] !!!!!')
    next()
  }
})

// 输出router
export default router
