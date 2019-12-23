<template>
  <div>
    <product-main :product="product"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Product from '../components/Product.vue'
export default {
  name: 'home',
  components: {
    'product-main': Product
  },
  data () {
    return {
      product: 'Socks'
    }
  }
}
</script>
