import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 定义app路由项目
const routerMap = [
  {
    path: '/login',                          // url地址
    name: 'login',                           // 路由name 唯一标识字符
    component: require('../tpl/Login.vue'),  // 路由主组件
    meta: {                                  // 页面元素 可设置页面title，路由对象会写入vuex，app主组件内定义方法读取vuex信息写入页面
      title: '登录'                          //  页面title
    }
  },
  {
    path: '/register',
    name: 'register',
    component: require('../tpl/Register.vue')
  },
  // {
  //   path: '/forget_password',
  //   name: 'forget',
  //   component: require('../components/Forget.vue')
  // },
  // {
  //   path: '/activation',
  //   name: 'activation',
  //   component: require('../components/Activation.vue')
  // },
  // {
  //   path: '/retrieve_password',
  //   name: 'retrieve_password',
  //   component: require('../components/Reset_password.vue')
  // },
  {
    path: '*',
    redirect: '/login'
  }
]

// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  // mode: 'history',
  // base: 'auth',
  routes: routerMap
})

// 未获得权限的url路由跳转回默认页
// router.beforeEach((to, from, next) => {
//   try {
//     const path = to.path.split('/').splice(1, 2)
//     let skip = true
//     let target = window.COS.permissions
//     try {
//       for (let i = 0; i < path.length; i++) {
//         target = target[path[i]]
//         if (!target) {
//           skip = false
//         }
//       }
//       if (skip) {
//         next()
//       } else {
//         next('/overview')
//       }
//     } catch (err) {
//       console.log('router.beforeEach:' + err)
//       next('/overview')
//     }
//   } catch (err) {
//     console.log('Not return [window.COS.permissions] !!!!!')
//     next()
//   }
// })

// 输出router
export default router
