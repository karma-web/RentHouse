<template>
  <div class="login-topbar">
    <a href="javascript:void(0);" class="login-topbar-logo">
      <img :src="logoCode">
      <small>Anna Dev 0.1.1</small>
    </a>
    <ul class="login-link">
      <li>
        <a href="javascript:void(0)">{{ $t('base.home') }}</a>
      </li>
      <li>
        <a href="javascript:void(0)">{{ $t('base.helpCenter') }}</a>
      </li>
    </ul>
    <div class="language-switch">
      <div class="language-switch-box" :class="{ 'switch-expanded':switchOn,'switch-collapsed':!switchOn }" @mouseover="switchOn = true" @mouseout="switchOn = false">
        <a href="javascript:void(0)" class="dropdown-title">
          <span v-for="langType in languageMap" v-if="language == langType.key">{{ langType.name }}</span>
          <Icon type="chevron-down"></Icon>
        </a>
        <ul class="dropdown-list">
          <li  v-for="langType in languageMap">
            <a href="javascript:void(0)" :class="{ 'active':language == langType.key }"  @click="switchLanguage(langType.key)">{{ langType.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import languageConfig from '../../../locale/i18n-config'

  export default {
    data () {
      return {
        switchOn: false, // 控制语言切换UI开关
        languageMap: languageConfig.type // 语言配置列表对象
      }
    },
    computed: {
      ...mapState('base', [
        'logoCode',
        'language'
      ]),
      ...mapGetters('base', [
      ])
    },
    mounted () {
//      console.log(this.$validator.locale)
    },
    methods: {
//      引入方法 详见vuex base模块
      ...mapActions('base', [
        'setLanguage' // 写入language
      ]),
//      切换语言后写入cookie并刷新
      'switchLanguage': function (language) {
        this.setLanguage(language)
        this.$i18n.locale = language
//        this.$validator.locale = language
      }
    }
  }
</script>
