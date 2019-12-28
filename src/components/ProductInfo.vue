<template>
  <div class="product-info">
    <div class="cart">
      Cart: {{ cart.length }}
    </div>
    <h1>{{ product.name }}</h1>
    <p v-if="inStock > 10">In Stock: {{inStock}} avaliable</p>
    <p v-else-if="almostSoldOut">Last {{inStock}} Units</p>
    <p v-else>Out of Stock</p>

    <ul>
      <li v-for="(detail, index) in product.details" :key="index">{{detail}}</li>
    </ul>
    <div v-for="(variant, index) in product.variants"
      :key="variant.id"
      class="color-box"
      :style="{backgroundColor: variant.color}"
      @click="updateProduct(index)">
    </div>
    <product-buttons :cart="cart" :selectedVariant="selectedVariant" :inStock="inStock" @add-to-cart="addToCart" @remove-from-cart="removeFromCart"/>
  </div>
</template>

<script>
import ProductButtons from '../components/ProductButtons.vue'
export default {
  components: {
    'product-buttons': ProductButtons
  },
  data () {
    return {
      selectedVariant: 0
    }
  },
  methods: {
    updateProduct: function (value) {
      this.selectedVariant = value
      this.$emit('change-image', this.product.variants[this.selectedVariant].image)
    }
  },
  computed: {
    product () {
      const { id, name, details, variants } = this.$store.state.product
      return { id, name, details, variants }
    },
    cart () {
      const cart = this.$store.state.cart
      return cart
    },
    almostSoldOut () {
      return (this.inStock <= 10 && this.inStock > 0)
    },
    inStock () {
      //
      const { quantity } = this.product.variants[this.selectedVariant]
      return quantity
    }
  }

}
</script>
