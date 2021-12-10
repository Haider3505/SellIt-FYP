import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const state = () => ({
  // user
  name: '',
  email: '',
  password: '',
  loggedIn: false,

  // cart
  cart: [],
  cartLength: 0,

  // shippment
  shippingPrice: 0,
  estimatedDelivery: '',
})

// MUTATIONS

export const mutations = {
  // User
  setUser(state, { user }) {
    state.name = user.name
    state.email = user.email
    if (user.password) {
      state.password = user.password
    }
    state.loggedIn = user.login
  },

  clearUser(state) {
    state.name = ''
    state.email = ''
    state.password = ''
    state.loggedIn = false
  },

  // Cart
  pushProductToCart(state, product) {
    product.quantity = 1
    state.cart.push(product)
  },
  incrementProductQty(state, product) {
    product.quantity++
    const indexOfProduct = state.cart.indexOf(product)
    state.cart.splice(indexOfProduct, 1, product)
  },
  incrementCartLength(state) {
    state.cartLength = 0
    if (state.cart.length > 0) {
      state.cart.map((product) => (state.cartLength += product.quantity))
    }
  },
  changeQty(state, { product, qty }) {
    const cartProduct = state.cart.find((prod) => prod._id === product._id)
    cartProduct.quantity = qty

    state.cartLength = 0
    if (state.cart.length > 0) {
      state.cart.map((product) => (state.cartLength += product.quantity))
    }

    const indexOfProduct = state.cart.indexOf(cartProduct)

    state.cart.splice(indexOfProduct, 1, cartProduct)
  },
  removeProduct(state, product) {
    state.cartLength -= product.quantity
    const indexOfProduct = state.cart.indexOf(product)

    state.cart.splice(indexOfProduct, 1)
  },
  setShipping(state, payload) {
    state.shippingPrice = payload.price
    state.estimatedDelivery = payload.estimatedDelivery
  },
  clearCart(state) {
    state.cart = []
    state.cartLength = 0
    state.shippingPrice = 0
    state.estimatedDelivery = ''
  },

  // logout

  logout(state) {
    state.cart = []
    state.cartLength = 0
    state.shippingPrice = 0
    state.estimatedDelivery = ''
  },
}

// ACTIONS

export const actions = {
  // User

  setUser({ commit }, { user }) {
    commit('setUser', { user })
  },

  // Cart
  addProductToCart({ state, commit }, product) {
    const cartProduct = state.cart.find((prod) => prod._id === product._id)

    if (!cartProduct) {
      commit('pushProductToCart', product)
    }
    if (cartProduct) {
      commit('incrementProductQty', cartProduct)
    }

    commit('incrementCartLength')
  },
  changeQty({ commit }, { product, qty }) {
    commit('changeQty', { product, qty })
  },
  removeProduct({ commit }, product) {
    commit('removeProduct', product)
  },
  async logout({ commit }) {
    await this.$auth.logout()
    commit('logout')
    commit('clearUser')
  },
}

// GETTERS

export const getters = {
  // login info

  getIsLoggedIn(state) {
    return state.loggedIn
  },

  // user

  getUserName(state) {
    return state.name
  },
  getUserEmail(state) {
    return state.email
  },
  getUserPassword(state) {
    return state.password
  },

  // cart
  getCartLength(state) {
    return state.cartLength
  },
  getCart(state) {
    return state.cart
  },
  getCartTotal(state) {
    let total = 0

    state.cart.map((prod) => (total += prod.price * prod.quantity))

    return total
  },

  getCartTotalWithShipping(state) {
    let total = 0

    state.cart.map((prod) => (total += prod.price * prod.quantity))

    return total + state.shippingPrice
  },
  getEstimatedDelivery(state) {
    return state.estimatedDelivery
  },
}
