<template>
  <view class="gallery-container">
    <view class="gallery" :style="galleryStyle">
      <view
        class="item"
        v-for="photo in items"
        :key="photo.id"
        :style="itemStyle(photo)"
        @click="swapWithHero(photo)"
      >
        <image :src="photo.src" mode="aspectFill" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, pos: 0, src: "../static/photo-1708247874023-f6d71a45113a" },
        { id: 2, pos: 1, src: "../static/photo-1437751059337-ea72d4f73fcf" },
        { id: 3, pos: 2, src: "../static/photo-1515594515116-863345d8507c" },
        { id: 4, pos: 3, src: "../static/photo-1533106497176-45ae19e68ba2" },
        { id: 5, pos: 4, src: "../static/photo-1517953377824-516f2dca803b" },
        { id: 6, pos: 5, src: "../static/photo-1437751059337-ea72d4f73fcf" },
        { id: 7, pos: 6, src: "../static/photo-1515594515116-863345d8507c" },
      ],
      isMobile: true,
      screenWidth: 750,
      activeId: null,
      activeTimer: null,
      config: {
        heroWidth: 810,
        heroHeight: 400,
        itemWidth: 330,
        itemHeight: 200,
        gap: 10,
        columns: 2,
      },
    };
  },
  created() {
    // this.getWindowInfo();
    // uni.onWindowResize(() => this.getWindowInfo());
  },
  onUnload() {
    if (this.activeTimer) {
      clearTimeout(this.activeTimer);
      this.activeTimer = null;
    }
  },
  methods: {
    swapWithHero(photo) {
      if (photo.pos === 0) return;
      this.activeId = photo.id;
      if (this.activeTimer) clearTimeout(this.activeTimer);
      this.activeTimer = setTimeout(() => {
        this.activeId = null;
        this.activeTimer = null;
      }, 900);
      const hero = this.items.find((item) => item.pos === 0);
      const heroPos = hero.pos;
      this.$set(hero, "pos", photo.pos);
      this.$set(photo, "pos", heroPos);
    },
    itemStyle(photo) {
      const pos = Number(photo.pos);
      if (pos === 0) {
        return {
          width: "100%",
          height: this.config.heroHeight + "rpx",
          transform: "translate(0rpx, 0rpx)",
          zIndex:
            this.activeId === photo.id
              ? this.items.length + 2
              : this.items.length + 1,
        };
      }
      const othersIndex = pos - 1;
      const column = othersIndex % this.config.columns;
      const row = Math.floor(othersIndex / this.config.columns);
      const x = column * (this.config.itemWidth + this.config.gap);
      const y =
        this.config.heroHeight +
        this.config.gap +
        row * (this.config.itemHeight + this.config.gap);
      return {
        width: this.config.itemWidth + "rpx",
        height: this.config.itemHeight + "rpx",
        transform: "translate(" + x + "rpx, " + y + "rpx)",
        zIndex:
          this.activeId === photo.id
            ? this.items.length + 2
            : this.items.length - pos,
      };
    },
  },
  computed: {
    galleryDimensions() {
      const total = this.items.length;
      const othersCount = Math.max(total - 1, 0);
      const rows = Math.ceil(othersCount / this.config.columns);
      const width = this.config.heroWidth;
      const mobileStack = rows * (this.config.itemHeight + this.config.gap);
      const height = this.config.heroHeight + mobileStack;
      return { width, height };
    },
    galleryStyle() {
      return {
        width: this.galleryDimensions.width + "rpx",
        height: this.galleryDimensions.height + "rpx",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.gallery-container {
  display: flex;
  justify-content: center;
  padding: 40rpx;
  overflow-y: auto;
  max-height: 1000rpx;
}

.gallery {
  position: relative;
  width: 760rpx;
  height: 305rpx;
  background-color: white;
  border-radius: 8rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
}

.item {
  position: absolute;
  // width: 175rpx;
  // height: 150rpx;
  border-radius: 10rpx;
  overflow: hidden;
  transition:
    transform 0.9s,
    width 0.9s,
    height 0.9s;
  box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.item image {
  width: 100%;
  height: 100%;
}
</style>
