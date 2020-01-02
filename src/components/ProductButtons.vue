<template>
  <div>
    <button type="button"
      v-on:click="addCart"
      :disabled="inStock < 1"
      :class="{ disabledButton: inStock < 1}">
        Add to Cart
    </button>
    <button type="button" v-if="cart.length > 0" @click="removeCart" class="btn-danger">Remove From Cart</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['cart', 'selectedVariant', 'inStock'],
  methods: {
    ...mapActions ([
      'addToCart',
      'removeFromCart'
    ]),
    addCart: function () {
      const payload = this.selectedVariant
      this.addToCart (payload)
    },
    removeCart: function () {
      const payload = this.selectedVariant
      this.removeFromCart (payload)
    }
  }
}
</script>
