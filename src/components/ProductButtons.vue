<template>
  <div>
    <button type="button"
      v-on:click="addToCart"
      :disabled="inStock < 1"
      :class="{ disabledButton: inStock < 1}">
        Add to Cart
    </button>
    <button type="button" v-if="cart.length > 0" v-on:click="removeFromCart" class="btn-danger">Remove From Cart</button>
  </div>
</template>

<script>
export default {
  props: ['cart', 'selectedVariant', 'inStock'],
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart')
    },
    removeFromCart: function () {
      this.$emit('remove-from-cart')
    }
  }
}
</script>
