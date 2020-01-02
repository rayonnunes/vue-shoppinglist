export default {
  addToCart (context, payload) {
    context.commit ('ADD_TO_CART', payload)
  },
  removeFromCart (context, payload) {
    context.commit ('REMOVE_FROM_CART', payload)
  }
}
