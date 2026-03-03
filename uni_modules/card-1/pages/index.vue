<template>
  <view class="page">
    <view class="wrapper">
      <view class="card-wrapper">
        <card-item
          v-for="card in featuredCards"
          :key="card.id"
          :theme="card.theme"
          :is-frozen="card.isFrozen"
        />
      </view>

      <view class="card-wrapper">
        <text class="title">其他主题</text>

        <card-item
          v-for="card in themeCards"
          :key="card.id"
          :theme="card.theme"
        />
      </view>
    </view>
  </view>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  name: "CardPage",
  components: {
    CardItem,
  },
  data() {
    return {
      featuredCards: [
        { id: 1, theme: "two", isFrozen: false },
        { id: 2, theme: "two", isFrozen: true },
      ],
      themeCards: [
        { id: 3, theme: "one", isFrozen: false },
        { id: 4, theme: "two", isFrozen: false },
        { id: 5, theme: "three", isFrozen: false },
        { id: 6, theme: "four", isFrozen: false },
        { id: 7, theme: "five", isFrozen: false },
        { id: 8, theme: "six", isFrozen: false },
        { id: 9, theme: "seven", isFrozen: false },
        { id: 10, theme: "eight", isFrozen: false },
      ],
    };
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #555;
  color: #fff;
  box-sizing: border-box;
}

.wrapper {
  padding: 100rpx;
}

.card-wrapper {
  box-sizing: border-box;
  grid-gap: 48rpx;
  display: grid;
  justify-content: center;
  margin-bottom: 48rpx;
}
</style>
