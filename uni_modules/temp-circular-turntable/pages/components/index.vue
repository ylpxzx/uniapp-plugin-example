<template>
  <view class="team" @click="stopRotation">
    <view
      v-for="(item, index) in dataList"
      :key="index"
      :style="getMemberStyle(index)"
    >
      <image class="team-image" :src="item.image" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dataList: this.options,
      radius: 200, // 圆环半径，单位rpx
      center: 250, // 圆心坐标，单位rpx
      imageSize: 60, // 图片大小，单位rpx
      rotation: 0, // 当前旋转角度
      timer: null,
    };
  },
  mounted() {
    this.startRotation();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    getMemberStyle(index) {
      const count = this.dataList.length;
      const angle = (360 / count) * index + this.rotation;
      const rad = (angle * Math.PI) / 180;
      const x = this.center + this.radius * Math.cos(rad) - this.imageSize / 2;
      const y = this.center + this.radius * Math.sin(rad) - this.imageSize / 2;
      return `
        position: absolute;
        left: ${x}rpx;
        top: ${y}rpx;
        width: ${this.imageSize}rpx;
        height: ${this.imageSize}rpx;
      `;
    },
    startRotation() {
      if (this.timer) return;
      this.timer = setInterval(() => {
        this.rotation = (this.rotation + 1) % 360;
      }, 16);
    },
    stopRotation() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.startRotation();
      }
    },
  },
};
</script>

<style scoped>
.team {
  width: 500rpx;
  height: 500rpx;
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  background: #f5f5f5;
}
.team-image {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  border: 5rpx solid #fff;
  object-fit: cover;
}
</style>
