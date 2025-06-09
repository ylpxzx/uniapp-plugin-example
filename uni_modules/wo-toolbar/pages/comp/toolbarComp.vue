<template>
  <view>
    <view
      class="toolbar"
      :class="{ 'toolbar--vertical': isVertical }"
      role="toolbar"
      :aria-orientation="orientation"
    >
      <view
        v-for="(item, i) in tools"
        :key="i"
        class="toolbar__button"
        :aria-label="item.label"
        :aria-pressed="selectedValue === item.value"
        @click="reAnimate(false, item.value); selectedValue = item.value"
      >
        <image class="toolbar__icon" style="width: 1em; height: 1em" :src="item.icon"></image>
      </view>
      <view class="toolbar__highlight" id="animRef" :animation="animationData"></view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    defaultValue: {
      type: String,
      default: "unsplash",
    },
    orientation: {
      type: String,
      default: "horizontal",
    },
  },
  data() {
    return {
      tools: [
        { icon: "https://img.icons8.com/?size=100&id=56579&format=png&color=ffffff", label: "Unsplash", value: "unsplash" },
        { icon: "https://img.icons8.com/?size=100&id=890&format=png&color=ffffff", label: "iphone", value: "iphone" },
        { icon: "https://img.icons8.com/?size=100&id=12412&format=png&color=ffffff", label: "Browsers", value: "browsers" },
        { icon: "https://img.icons8.com/?size=100&id=118504&format=png&color=ffffff", label: "Facebook", value: "facebook" },
        { icon: "https://img.icons8.com/?size=100&id=3529&format=png&color=ffffff", label: "Pinterest", value: "pinterest" },
        { icon: "https://img.icons8.com/?size=100&id=2454&format=png&color=ffffff", label: "VK", value: "vk" },
      ],
      selectedValue: this.defaultValue,
      isVertical: this.orientation === "vertical",
      animationData: {}
    }
  },
  methods: {
    reAnimate(isinit, newSelectedValue) {
      const toolIndex = this.tools.findIndex((item) => item.value === newSelectedValue);
      const toolPrevIndex = isinit ? 0 : this.tools.findIndex((item) => item.value === this.selectedValue);
      const highlightWidth = 1.75;
      const highlightMoveIncrement = 1.875;
      const highlightmoveB = highlightMoveIncrement * toolIndex;
      const indexIsLower = toolIndex < toolPrevIndex;
      const moveB = `${highlightmoveB}em`;
      const widthA = `${highlightWidth}em`;
      const widthB = `${highlightWidth + highlightMoveIncrement * Math.abs(toolIndex - toolPrevIndex)}em`;
      var animation = uni.createAnimation({
        duration: 300,
        timingFunction: "ease",
      })
      if (indexIsLower) {
        if (this.isVertical) {
          animation.top(moveB).height(widthB).step()
          animation.height(widthA).step({ duration: 200 })
        } else {
          animation.left(moveB).width(widthB).step()
          animation.width(widthA).step({ duration: 200 })
        }
      } else {
        if (this.isVertical) {
          animation.height(widthB).step()
          animation.top(moveB).height(widthA).step({ duration: 200 })
        } else {
          animation.width(widthB).step()
          animation.left(moveB).width(widthA).step({ duration: 200 })
        }
      }
      this.animationData = animation.export()
      this.selectedValue = newSelectedValue;
    },
  },
  mounted() {
    this.reAnimate(true, this.selectedValue);
  },
}
</script>

<style scoped>
.toolbar {
  background-color: hsl(0, 0%, 10%);
  border-radius: 1em;
  display: inline-flex;
  gap: 0.125em;
  position: relative;
  padding: 0.125em;
  height: auto;
  /* min-width: 2em; */
  align-items: center;
}

.toolbar__button {
  color: hsl(0, 0%, 10%);
  transition: background-color 0.3s, color 0.3s;
  background-color: rgba(128, 128, 128, 0);
  border-radius: 50%;
  display: flex;
  position: relative;
  width: 1.75em;
  height: 1.75em;
}

.toolbar__highlight {
  background-color: white;
  border-radius: 0.875em;
  margin: 0.125em;
  mix-blend-mode: difference;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 1.75em;
  height: 1.75em;
  transition: background-color 0.3s;
}

.toolbar__icon {
  color: hsl(0, 0%, 90%);
  display: block;
  margin: auto;
  width: 1em;
  height: auto;
  transition: color 0.3s;
}

.toolbar--vertical {
  flex-direction: column;
  /* width: 2em; */
  min-height: 2em;
  height: auto;
}
</style>
