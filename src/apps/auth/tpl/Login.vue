<template>
  <div class="login">
    <t-header></t-header>
    <div class="login-body">
      <div class="login-body-box">
        <div class="login-banner">
          <a href="#" class="login-body-txt-box">
            <h1 class="box-title">轻量应用服务器</h1>
            <ul>
              <li>快速搭建和易于管理的轻量级云服务器</li>
              <li>简单易上手，1分钟搭建应用</li>
              <li>更低价格更高服务增值</li>
            </ul>
          </a>
        </div>
        <div class="login-common">
          <div class="login-wrap">
            <div class="login-header">
              <h2 class="title">{{ $t('login.passwordLogin') }}</h2>
            </div>
            <div class="login-error">
              <Alert type="error" v-show="loginErrorMsg">{{ loginErrorMsg }}</Alert>
            </div>
            <form @submit.prevent="submitLogin">
              <div class="login-content">
                <dl>
                  <dt>{{ $t('login.username') }}</dt>
                  <dd>
                    <input class="fm-input" v-model="loginData.username" name="username" type="text" :placeholder="$t('login.username')" tabindex="1">
                  </dd>
                </dl>
                <dl>
                  <dt>{{ $t('login.password') }}</dt>
                  <dd>
                    <input class="fm-input" v-model="loginData.password" name="password" type="password" :placeholder="$t('login.password')" tabindex="2">
                  </dd>
                </dl>
                <dl>
                  <dt>{{ $t('login.verificationCode') }}</dt>
                  <dd>
                    <div class="login-verify">
                      <input class="fm-input" v-model="loginData.verify_code" type="text" maxlength="4" :placeholder="$t('login.verificationCode')" tabindex="3">
                      <img class="verify-code" @click="breakVerify" :src="`data:image/jpg;base64,${verifyImgCode}`" >
                    </div>
                  </dd>
                </dl>
              </div>
              <div class="login-submit">
                <Button type="primary" html-type="submit" class="fm-button fm-submit" tabindex="4" name="submit-btn" long>
                  <Loading fix v-if="loginLoading"></Loading>
                  <span class="text" v-else>{{ $t('login.login') }}</span>
                </Button>
              </div>
            </form>
            <div class="login-other">
              <a href="#" class="forget-password">{{ $t('login.forgetPassword') }}</a>
              <router-link :to="{ name: 'register'}" class="register" tabindex="7">{{ $t('login.register') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <t-footer></t-footer>
  </div>
</template>

<script>
//  import { Validator } from 'vee-validate'
  import { mapState, mapGetters, mapActions } from 'vuex'
  import tFooter from './Footer.vue'
  import tHeader from './Header.vue'

  export default {
    components: {
      tFooter,
      tHeader
    },
    data () {
      return {
        'loginData': {
          'username': null,
          'password': null,
          'verify_code': null
        },
        'loginLoading': false
      }
    },
    computed: {
      ...mapState('base', [
        'verifyImgCode',
        'loginErrorMsg',
        'sessionKey'
      ]),
      ...mapGetters('base', [
      ])
    },
    watch: {
//      监听登录错误信息，如果有则清除loading
      'loginErrorMsg': function (val) {
        if (val) { this.loginLoading = false }
      },
      'sessionKey': function (val) {
        if (val) {
          this.loginLoading = false
          window.location.href = '/?key=' + val
        }
      }
    },
    methods: {
//      引入方法 详见vuex base模块
      ...mapActions('base', [
        'getVerify',  // 获取验证码
        'postLogin',   // 登录动作
        'setLoginError' // 设置登录错误信息
      ]),
//      获取验证码base64
      'breakVerify': function () {
        this.getVerify()
      },
//      登录动作
      'submitLogin': function () {
        this.setLoginError(null)
        this.$validator.validateAll({ username: this.loginData.username, password: this.loginData.password, verify: this.loginData.verify_code }).then(result => {
          if (!result) {
            const error = this.$validator.errors.all()
            this.setLoginError(error[0])
          } else {
            this.setLoginError(null)
            this.loginLoading = true
            this.postLogin(this.loginData)
          }
          // success stuff.
        })
      }
    },
    created () {
//      Validator.extend('verify_coupon', {
//        getMessage: field => `The ${field} is not a valid coupon.`,
//        validate: value => new Promise((resolve) => {
//          // API call or database access.
//          const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016']
//
//          setTimeout(() => {
//            resolve({
//              valid: value && validCoupons.indexOf(value.toUpperCase()) !== -1
//            })
//          }, 500)
//        })
//      })
      this.$validator.attach('username', 'required')
      this.$validator.attach('password', 'required')
      this.$validator.attach('verify', 'required')
    },
    mounted () {
      this.getVerify()
    }
  }
</script>
