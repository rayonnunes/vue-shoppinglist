<template>
  <div>
    <span class="tab"
    :class="{activeTab: selectedTab === tab}"
    v-for="(tab, index) in tabs"
    :key="index"
    @click="toggleTab(tab)">{{ tab }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  },
  methods: {
    toggleTab: function (tab) {
      this.selectedTab = tab
      this.$emit ('change-tab', this.selectedTab)
    }
  }
}
</script>
