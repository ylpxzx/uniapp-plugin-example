<template>
  <view :class="['card', 'digital', theme, { frozen: isFrozen }]">
    <text v-if="isFrozen" class="frozen-label">冻结</text>
    <view class="card-top">
      <text class="card-top-label">虚拟卡</text>
      <image
        class="card-top-logo"
        src="./static/airwallex-virtual.svg"
        mode="widthFix"
      />
    </view>
    <view class="card-middle">
      <view class="card-name">
        <text class="card-name-label">卡号</text>
        <text class="card-name-text">123 234 567 754 821</text>
      </view>
    </view>
    <view class="card-bottom">
      <view class="card-name">
        <text class="card-name-label">持卡人</text>
        <text class="card-name-text">xzx</text>
      </view>

      <image
        class="card-bottom-logo"
        src="./static/visa-virtual.svg"
        mode="widthFix"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    theme: {
      type: String,
      default: "",
    },
    isFrozen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
@keyframes cardAnimation {
  60% {
    background-size: 800rpx 534rpx;
    background-position-x: 60%;
    background-position-y: 60%;
  }
}

@keyframes cardGradient {
  0% {
    background-position: 0% 10%;
  }
  50% {
    background-position: 100% 91%;
  }
  100% {
    background-position: 0% 10%;
  }
}

.card {
  background-color: rgb(42, 41, 45);
  border-radius: 20rpx;
  height: 400rpx;
  width: 660rpx;
  min-width: 622rpx;
  position: relative;
  box-sizing: border-box;
  padding: 44rpx;
  display: grid;
  margin-bottom: 48rpx;
  grid-template-rows: 1fr auto;
  font-family: AxLLCircular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 28rpx;
  box-shadow:
    0 0rpx 16rpx rgb(0 0 0 / 12%),
    0 4rpx 32rpx rgb(0 0 0 / 12%),
    0 8rpx 40rpx rgb(0 0 0 / 12%),
    0 24rpx 56rpx rgb(0 0 0 / 12%);
  color: rgb(255, 255, 255);
}

.card.digital {
  background-size: 720rpx 454rpx;
  color: black;
  position: relative;
}

.card.digital::before {
  content: "";
  width: 100%;
  height: 100%;
  box-shadow:
    0 -2rpx 0 0 rgb(255 255 255 / 90%),
    0 2rpx 0 0 rgb(0 0 0 / 20%);
  position: absolute;
  z-index: 1;
  border-radius: 20rpx;
}

.card.digital::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background:
    linear-gradient(
      120deg,
      rgb(255 255 255 / 2%) 30%,
      rgb(255 255 255 / 25%) 40%,
      rgb(255 255 255 / 8%) 40%
    ),
    linear-gradient(0deg, rgb(255 255 255 / 20%), rgb(255 255 255 / 30%));
  background-size: 150% 150%;
  position: absolute;
}

.card.digital.one {
  background: #ff1e56; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1e90ff,
    #f9c942,
    #ff1e56
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1e90ff,
    #f9c942,
    #ff1e56
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card.digital.two {
  background: #ff0000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fdcf58,
    #ff0000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fdcf58,
    #ff0000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card.digital.three {
  background: #005aa7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fffde4,
    #005aa7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fffde4,
    #005aa7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card.digital.four {
  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card.digital.five {
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card.digital.six {
  background: #870000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #190a05,
    #870000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #190a05,
    #870000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card.digital.seven {
  background: #4b6cb7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #182848,
    #4b6cb7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #182848,
    #4b6cb7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card.digital.eight {
  background: #091e3a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2d9ee0,
    #2f80ed,
    #091e3a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2d9ee0,
    #2f80ed,
    #091e3a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 1;
}

.card-top-label {
  font-size: 28rpx;
  text-transform: uppercase;
  letter-spacing: 3rpx;
  font-weight: 500;
}

.card-top-logo {
  width: 220rpx;
}

.card-middle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  margin-bottom: 30rpx;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.card-bottom-logo {
  width: 110rpx;
  height: 100%;
}

.card-name {
  display: grid;
  grid-gap: 12rpx;
}

.card-name-label,
.card-name-text {
  font-size: 32rpx;
  letter-spacing: 3rpx;
  text-shadow: 0 0rpx 16rpx rgb(0 0 0 / 12%);
  font-weight: 700;
  max-width: 464rpx;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
}

.card-name-label {
  font-weight: 500;
  font-size: 20rpx;
  text-transform: uppercase;
}

.frozen {
  filter: grayscale(100%);
  transition: filter 0.2s ease-in-out;
  position: relative;
}

.frozen .card-top,
.frozen .card-middle,
.frozen .card-bottom {
  filter: blur(12rpx);
  transition: filter 0.2s ease-in-out;
}

.frozen:hover {
  filter: grayscale(0%);
}

.frozen:hover .card-top,
.frozen:hover .card-middle,
.frozen:hover .card-bottom {
  filter: blur(0);
}

.frozen-label {
  width: 160rpx;
  text-align: center;
  position: absolute;
  background: rgb(0 0 0 / 80%);
  z-index: 1;
  text-transform: uppercase;
  padding: 12rpx 24rpx;
  border-radius: 8rpx;
  color: #ffffff;
  top: calc(50% - 28rpx);
  left: calc(50% - 80rpx);
  box-sizing: border-box;
}
</style>
