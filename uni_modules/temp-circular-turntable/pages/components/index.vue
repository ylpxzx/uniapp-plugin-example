<template>
  <view class="team">
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
  data() {
    return {
      dataList: [
        {
          title: "0",
          image: "https://randomuser.me/api/portraits/lego/3.jpg",
          value: "0",
        },
        {
          title: "1",
          image: "https://randomuser.me/api/portraits/lego/1.jpg",
          value: "1",
        },
        {
          title: "2",
          image: "https://randomuser.me/api/portraits/lego/2.jpg",
          value: "2",
        },
        {
          title: "3",
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
          value: "3",
        },
        {
          title: "4",
          image: "https://randomuser.me/api/portraits/lego/5.jpg",
          value: "4",
        },
        {
          title: "5",
          image: "https://randomuser.me/api/portraits/lego/6.jpg",
          value: "5",
        },
        {
          title: "6",
          image: "https://randomuser.me/api/portraits/lego/7.jpg",
          value: "6",
        },
        {
          title: "7",
          image: "https://randomuser.me/api/portraits/lego/8.jpg",
          value: "7",
        },
        {
          title: "8",
          image: "https://randomuser.me/api/portraits/lego/9.jpg",
          value: "8",
        },
        {
          title: "9",
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
          value: "9",
        },
        {
          title: "10",
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
          value: "10",
        },
      ],
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
      this.timer = setInterval(() => {
        this.rotation = (this.rotation + 1) % 360;
      }, 16); // 50ms转1度，约18秒一圈
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
