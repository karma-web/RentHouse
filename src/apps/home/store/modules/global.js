// import * as types from '../mutation-types'

// initial state
const state = {
  projectList: [],
  regionList: [],
  webSocket: {},
  user: {}
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  login ({ commit, state }) {
    console.log(state)
  }
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.added]
  //   commit(types.CHECKOUT_REQUEST)
  //   shop.buyProducts(
  //     products,
  //     () => commit(types.CHECKOUT_SUCCESS),
  //     () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  //   )
  // }
}

// mutations
const mutations = {
  // [types.ADD_TO_CART] (state, { id }) {
  //   state.lastCheckout = null
  //   const record = state.added.find(p => p.id === id)
  //   if (!record) {
  //     state.added.push({
  //       id,
  //       quantity: 1
  //     })
  //   } else {
  //     record.quantity++
  //   }
  // },
  //
  // [types.CHECKOUT_REQUEST] (state) {
  //   // clear cart
  //   state.added = []
  //   state.checkoutStatus = null
  // },
  //
  // [types.CHECKOUT_SUCCESS] (state) {
  //   state.checkoutStatus = 'successful'
  // },
  //
  // [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
  //   // rollback to the cart saved before sending the request
  //   state.added = savedCartItems
  //   state.checkoutStatus = 'failed'
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
