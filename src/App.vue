<template>
  <div>
    <div class="nav-bar"></div>
    <div id="app">
      <shopping-cart/>
    </div>
  </div>
</template>

<script>
require ('@/assets/css/master.css')
import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'app',
  components: {
    'shopping-cart': ShoppingCart
  }
}
</script>
