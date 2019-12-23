<template>
  <div class="product-image">
    <img :src="image" alt="">
  </div>
</template>

<script>
export default {
  props: ['image']
}
</script>
