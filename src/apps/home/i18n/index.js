import Vue from 'vue'
import VueI18n from 'vue-i18n'
import En from './en.js'
import Cn from './cn.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'En',
  messages: {
    En,
    Cn
  }
})
//
// if (module.hot) {
//     module.hot.accept([En, Cn], () => {
//         i18n.setLocaleMessage(En);
//         i18n.setLocaleMessage(Cn);
//         console.log('hot reload', this, arguments);
//     });
// }

export default i18n
