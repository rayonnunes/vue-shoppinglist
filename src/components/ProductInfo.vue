<template>
  <div class="product-info">
    <div class="cart">
      Cart: {{cart.length}}
    </div>
    <h1>{{product}}</h1>
    <p v-if="inStock > 10">In Stock: {{inStock}} avaliable</p>
    <p v-else-if="almostSoldOut">Last {{inStock}} Units</p>
    <p v-else>Out of Stock</p>

    <ul>
      <li v-for="(detail, index) in details" :key="index">{{detail}}</li>
    </ul>
    <div v-for="(variant, index) in variants"
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
  props: ['product'],
  data () {
    return {
      selectedVariant: 0,
      cart: [],
      details: ['80% cotton', '20% Polyester', 'Gender-neutral'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: 'img/vmSocks-green.jpg',
          quantity: 11
        },
        {
          id: 2235,
          color: 'blue',
          image: 'img/vmSocks-blue.jpg',
          quantity: 0
        }
      ]
    }
  },
  methods: {
    updateProduct: function (value) {
      this.selectedVariant = value
      this.$emit('change-image', this.variants[this.selectedVariant].image)
    },
    addToCart: function (id) {
      this.cart.push(this.variants[this.selectedVariant].id)
      this.variants[this.selectedVariant].quantity--
      return 0
    },
    removeFromCart: function () {
      this.cart.pop()
      this.variants[this.selectedVariant].quantity++
      return 0
    }
  },
  computed: {
    almostSoldOut () {
      return (this.inStock <= 10 && this.inStock > 0)
    },
    inStock () {
      //
      const { quantity } = this.variants[this.selectedVariant]
      return quantity
    }
  }

}
</script>
