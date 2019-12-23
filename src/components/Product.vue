<template>
  <div id="product" class="product">
    <product-image :image="image" />
    <product-info :product="product" @change-image="updateImage"/>
    <product-review :reviews="reviews" @post-review="addReview"/>
  </div>
</template>
<script>
import ProductImage from '../components/ProductImage.vue'
import ProductInfo from '../components/ProductInfo.vue'
import ProductReview from '../components/ProductReview.vue'
export default {
  props: ['product'],
  components: {
    'product-image': ProductImage,
    'product-info': ProductInfo,
    'product-review': ProductReview
  },
  data () {
    return {
      image: 'img/vmSocks-green.jpg',
      reviews: []
    }
  },
  methods: {
    updateImage: function (newImage) {
      this.image = newImage
    },
    addReview: function (productReview) {
      this.reviews.push(productReview)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
