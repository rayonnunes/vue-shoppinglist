<template>
  <div class="product-review">
    <product-tabs @change-tab="toggleTab"/>
    <div v-if="selectedTab == 'Reviews'">
      <ul v-if="reviews.length > 0">
        <li v-for="(review, index) in reviews" :key="index">
          <p>{{ review.name }} &emsp;(<span>{{review.rating}}*</span>) </p>
          <p>{{ review.recommendation }}</p>
          <p>{{ review.review }}</p>
        </li>
      </ul>
      <p v-else>There are no reviews yet</p>
    </div>
    <form v-else-if="selectedTab == 'Make a Review'" class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please Correct the following error(s)</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{error}}</li>
        </ul>
      </p>
      <p>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name">
      </p>
      <p>
        <label for="rating">Rating</label>
        <select id="rating" v-model="rating">
          <option value="1">*</option>
          <option value="2">**</option>
          <option value="3">***</option>
          <option value="4">****</option>
          <option value="5">*****</option>
        </select>
      </p>
        <h4>How Likely you'd Recomend this product?</h4>
        <label for="recommendation1">Not Recommended</label>
        <input id="recommendation1" type="radio" name="recommendation" value="1" v-model="recommendation"/>
        <label for="recommendation2">May Recommend</label>
        <input id="recommendation2" type="radio" name="recommendation" value="2" v-model="recommendation"/>
        <label for="recommendation3">Surely Recommended</label>
        <input id="recommendation3" type="radio" name="recommendation" value="3" v-model="recommendation"/>
      <p>
        <label for="review">Review</label>
        <textarea id="review" rows="8" v-model="review">
        </textarea>
      </p>
      <button type="submit" name="button">Submit</button>
    </form>
  </div>
</template>

<script>
import ProductTabs from '../components/ProductTabs.vue'
export default {
  components: {
    'product-tabs': ProductTabs
  },
  props: ['reviews'],
  data () {
    return {
      name: null,
      review: null,
      rating: null,
      recommendation: null,
      selectedTab: 'Reviews',
      errors: []
    }
  },
  methods: {
    onSubmit: function () {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          recommendation: this.recommendation,
          rating: this.rating
        }
        this.$emit('post-review', productReview)
        this.name = null
        this.review = null
        this.rating = null
        this.recommendation = null
      } else {
        if (!this.name) this.errors.push('Name Required.')
        if (!this.review) this.errors.push('Review Required.')
        if (!this.rating) this.errors.push('Rating Required.')
        if (!this.recommendation) this.errors.push('Recommendation Required.')
      }
    },
    toggleTab: function (tabSelected) {
      this.selectedTab = tabSelected
    }
  }
}
</script>
