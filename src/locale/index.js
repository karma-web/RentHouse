import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import validateZhCn from 'vee-validate/dist/locale/zh_CN'// 引入中文文件
import langObj from './get-lang'
// 配置中文
Validator.addLocale(validateZhCn)
const config = {
  locale: langObj['validate-key'],
  events: 'blur'
}

Vue.use(VeeValidate, config)

// 自定义validate
const dictionary = {
  'zh_CN': {
    messages: {
      // email: () => '请输入正确的邮箱格式',
      required: (field) => '请输入' + field
    },
    attributes: {
      username: '用户名',
      email: '邮箱',
      password: '密码',
      name: '账号',
      phone: '手机',
      verify: '验证码'
    }
  }
}

Validator.updateDictionary(dictionary)
//
// Validator.extend('phone', {
//   messages: {
//     zh_CN:field => field + '必须是11位手机号码',
//   },
//   validate: value => {
//     return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//   }
// });
