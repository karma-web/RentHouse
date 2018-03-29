import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'

Vue.use(Vuex)

const debug = process.env.NODE_ENV === 'development'
// console.log(debug)
export default new Vuex.Store({
  modules: {
    global
  },
  strict: debug
})
