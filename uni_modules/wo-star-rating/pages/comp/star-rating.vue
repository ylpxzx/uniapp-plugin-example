<template>
  <view>
    <view>
      <view class="star-rating">
        <view class="stars">
          <view class="star" v-for="i in topLevel" :key="i" @click="onClickStart(i)"
            :class="{ 'checked': selected >= i, 'select-star': selected === i }">
            <view class="input"></view>
          </view>
          <view class="number-rating" id="star-value" @click="initStart">{{ selected }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    selectedStar: {
      type: Number,
      default: 0,
    },
    level: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      selected: this.selectedStar,
      topLevel: this.level // 最高星级
    }
  },
  methods: {
    onClickStart(index) {
      this.selected = index;
      this.$emit("change", this.selected);
    },
    initStart() {
      this.selected = 0;
      this.$emit("change", this.selected);
    }
  }
}
</script>

<style scoped>
.select-star {
  transform: scale(1.25);
  transition-timing-function: linear(0 0%, 0 2.27%, 0.02 4.53%, 0.04 6.8%, 0.06 9.07%, 0.1 11.33%, 0.14 13.6%, 0.25 18.15%, 0.39 22.7%, 0.56 27.25%, 0.77 31.8%, 1 36.35%, 0.89 40.9%, 0.85 43.18%, 0.81 45.45%, 0.79 47.72%, 0.77 50%, 0.75 52.27%, 0.75 54.55%, 0.75 56.82%, 0.77 59.1%, 0.79 61.38%, 0.81 63.65%, 0.85 65.93%, 0.89 68.2%, 1 72.7%, 0.97 74.98%, 0.95 77.25%, 0.94 79.53%, 0.94 81.8%, 0.94 84.08%, 0.95 86.35%, 0.97 88.63%, 1 90.9%, 0.99 93.18%, 0.98 95.45%, 0.99 97.73%, 1 100%);
}

.star-rating {
  padding: 2vmin 10vmin 2.25vmin 4vmin;
  border-radius: 10vmin;
  font-size: 5vmin;
  position: relative;
  background: #1c2429;
}

.stars {
  display: flex;
}

.star {
  display: grid;
  place-items: center;
  padding: 1vmin;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  background: radial-gradient(circle at 50% 50%, #1c5e98 1vmin, #fff0 calc(1vmin + 1px) 100%);
}

.star .input,
.star::before,
.star::after {
  grid-area: star;
  width: 5vmin;
  height: 5vmin;
  margin: 0 0.5vmin;
}

.star::before,
.star::after {
  content: "";
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 66% 32%, 100% 38%, 78% 64%, 83% 100%, 50% 83%, 17% 100%, 22% 64%, 0 38%, 34% 32%);
}

.checked::after {
  transition: all ease-in-out 130ms;
  width: calc(100% - 0.25vmin);
  height: calc(100% - 0.25vmin);
  background: #ffd900;
}

.number-rating {
  position: absolute;
  font-family: 'Days One', sans-serif;
  display: grid;
  place-items: center;
  background: #ffd900;
  color: #1c2429;
  margin-top: -3.1vmin;
  border-radius: 100%;
  right: -5vmin;
  font-size: 6vmin;
  width: 13vmin;
  height: 13vmin;
}

.number-rating:before {
  content: "";
  position: absolute;
  width: 13vmin;
  height: 13vmin;
  border-radius: 100%;
  transform: rotate(0deg);
  background:
    radial-gradient(circle at 50% 125%, #fff0 45%, #1c2429 calc(45% + 1px) 50%, #fff0 calc(50% + 1px) 100%),
    radial-gradient(circle at 50% -25%, #fff0 45%, #1c2429 calc(45% + 1px) 50%, #fff0 calc(50% + 1px) 100%),
    conic-gradient(from -45deg at 50% 60%, #1c2429 0 25%, #fff0 0 100%),
    conic-gradient(from 135deg at 50% 40%, #1c2429 0 25%, #fff0 0 100%);
  background-size: 100% 45%, 100% 45%, 1.75vmin 1.75vmin, 1.75vmin 1.75vmin;
  background-repeat: no-repeat;
  background-position: 0% -10%, 0% 110%, 90% 52%, 10% 46%;
  transition: all 0.5s ease 0s;
  opacity: 0.05;
}

.number-rating:hover:before {
  transform: rotate(360deg);
  opacity: 1;
}
</style>
