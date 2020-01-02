<template>
  <div>
    <button type="button"
      v-on:click="addToCart"
      :disabled="inStock < 1"
      :class="{ disabledButton: inStock < 1}">
        Add to Cart
    </button>
    <button type="button" v-if="cart.length > 0" @click="removeFromCart" class="btn-danger">Remove From Cart</button>
  </div>
</template>

<script>
export default {
  props: ['cart', 'selectedVariant', 'inStock'],
  methods: {
    addToCart: function () {
      const payload = this.selectedVariant
      this.$store.commit ('ADD_TO_CART', payload)
    },
    removeFromCart: function () {
      const payload = this.selectedVariant
      this.$store.commit ('REMOVE_FROM_CART', payload)
    }
  }
}
</script>
