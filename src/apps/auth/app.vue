<template>
  <router-view>
    <h4>auth</h4>
  </router-view>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('base', [
        'faviconCode'
      ]),
      ...mapState([
        'router'
      ]),
      ...mapGetters('base', []),
//      监听faviconCode渲染site徽标
      'faviconUrl': function () {
        document.getElementById('favicon').href = this.faviconCode
      }
    },
    methods: {
//      引入方法 详见vuex base模块
      ...mapActions('base', [
        'getImg',     // 获取所有img项目 如：logo等
        'setCookieLanguage' // 写入language
      ]),
//      设置页面title
      'setAppTitle': function (val) {
        if (val.meta.title) {
          document.title = val.meta.title
        }
      }
    },
    watch: {
//      监听路由变化改变页面title
      router: function (val) {
        this.setAppTitle(val)
      }
    },
    mounted () {
//      初始化设置title
      this.setAppTitle(this.router)
//      获取cookie中language并写入vuex
      this.setCookieLanguage()
//      获取服务器img 存入vuex
      this.getImg()
    }
  }
</script>
