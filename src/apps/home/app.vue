<template>
  <div class="layout">
      <div class="header">
        <div class="logo">
          Rent House
        </div>
        <div class="nav">
          <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
            <mu-tab  value="home" title="Home"/>
            <mu-tab value="searchHouse" title="Search House"/>
            <mu-tab value="about" title="About"/>
          </mu-tabs>
          <div class="action">
            <mu-auto-complete hintText="请输入地址 如：鼓楼大街 " @input="" :dataSource="dataSource" @change="" />
            <!--<mu-raised-button label="Default" ref="button" @click="toggle"/>-->
            <mu-flat-button ref="button" @click="toggle" label="高级搜索" class="demo-flat-button"/>
            <mu-popover :trigger="trigger" :autoPosition="false" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" :open="open" @close="handleClose">
              <mu-menu>
                <mu-menu-item title="类型：整租 合租" />
                <mu-menu-item title="地铁：1号线 2号线 3号线 4号线" />
                <mu-menu-item title="价格：1000-2000 2000-3000 3000-4000 4000以上" />
                <mu-menu-item title="面积：5-10平米 10-15平米 15-20平米 20平米以上" />
              </mu-menu>
            </mu-popover>
            <mu-flat-button label="我的收藏" class="demo-flat-button"/>
            <mu-flat-button label="登录" class="demo-flat-button"/>
            <mu-flat-button label="发布房源" class="demo-flat-button"/>
            <!--<mu-raised-button class="demo-raised-button" label="发布" icon="FB" primary/>-->
          </div>
        </div>
      </div>
    <div class="content">
      <router-view>

      </router-view>
    </div>
  </div>
</template>
<!--<style lang="less">-->
  <!--@import '../../theme/default.less';-->
<!--</style>-->

<script>
  import { mapGetters, mapActions } from 'vuex'
  import './style/app.css'
//  import languageConfig from '../../locale/i18n-config'

  export default {
    components: {

    },
    data () {
      return {
        activeTab: 'home',
        open: false,
        trigger: null,
        dataSource: [],
        anchorOrigin: { 'vertical': 'bottom', 'horizontal': 'right' },
        targetOrigin: { 'vertical': 'top', 'horizontal': 'right' }
      }
    },
    computed: {
      ...mapGetters('base', [
        'faviconCode'
      ]),
//      监听faviconCode渲染site徽标
      'faviconUrl': function () {
        document.getElementById('favicon').href = this.faviconCode
      }
    },
    methods: {
//      引入方法 详见vuex base模块
      ...mapActions('base', [
        'getImg',     // 获取所有img项目 如：logo等
        'setLanguage' // 写入language
      ]),
//      获取cookie记录language键值写入vuex base/language
      'getLanguage': function () {
//        const language = this.$cookie.get(languageConfig['cookieName'])
//        this.setLanguage(language)
      },
      handleTabChange (val) {
        this.activeTab = val
        this.$router.push(`/${val}`)
      },
      toggle () {
        this.open = !this.open
      },
      handleClose (e) {
        this.open = false
      }
    },
    created () {
//      const language = this.$cookie.get(languageConfig['cookieName'])
//      console.log(language)
      this.$store.dispatch('global/login')
    },
    mounted () {
      this.trigger = this.$refs.button.$el
    },
    beforeRouteEnter (to, from, next) {
      // just use `this`
      console.log('1')
      console.log(to)
      next()
    }
  }
</script>
