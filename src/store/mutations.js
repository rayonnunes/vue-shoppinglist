export default {
  'ADD_TO_CART' (state, payload) {
    state.product.variants[payload].quantity--
    state.cart.push(state.product.variants[payload].id)
  },
  'REMOVE_FROM_CART' (state, payload) {
    state.product.variants[payload].quantity++
    state.cart.pop()
  }
}
