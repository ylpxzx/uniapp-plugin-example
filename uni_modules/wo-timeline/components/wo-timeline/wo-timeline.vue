<template>
  <view>
    <view class="timeline">
      <view v-for="(item, index) in timelineItems" :key="index" class="timeline__item">
        <view class="timeline__item-header">
          <view class="timeline__dot"></view>
          <view class="timeline__meta" @click="toggleItem(index)">
            <view>
              <text class="timeline__date">
                {{ item.axisPoint }}
              </text>
              <br />
              <text class="timeline__title">{{ item.title }}</text>
            </view>
            <view class="flex-center">
              <view class="arrow" :class="{ 'arrow--rotated': timelineItems[index].expanded }">
              </view>
            </view>
          </view>
        </view>
        <view class="timeline__item-body"
          :class="[item.expanded ? 'timeline__item-body--expanded' : '', isExpanding && targetIndex === index ? 'item-show-anim' : '', isCollapsing && targetIndex === index ? 'item-hide-anim' : '']">
          <view class="timeline__item-body-content">
            <slot name="item" v-bind="item">
              <text class="timeline__item-p">{{ item.content }}</text>
            </slot>
          </view>
        </view>
      </view>
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
      timelineItems: this.options,
      targetIndex: '',
      isExpanding: false,
      isCollapsing: false,
    };
  },
  watch: {
    options: {
      handler(newVal) {
        this.timelineItems = newVal
      },
      deep: true,
    },
  },
  methods: {
    async toggleItem(index) {
      this.targetIndex = index;
      this.timelineItems[index].expanded = !this.timelineItems[index].expanded;
      if (this.timelineItems[index].expanded === true) {
        this.isCollapsing = false;
        this.isExpanding = true;
      } else {
        this.isCollapsing = true;
        this.isExpanding = false;
      }
      await setTimeout(() => {
        this.isExpanding = false;
        this.isCollapsing = false;
      }, 800);
      const clickedItem = {
        index: index,
        data: this.timelineItems[index],
      }
      this.$emit("change", clickedItem);
    },
    // returnHasExpand() {
    //   const hasExpand = this.timelineItems.some((item) => item.expanded);
    //   this.$emit("change", hasExpand);
    // },
  },
}
</script>
<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  width: 0;
  height: 0;
  border-top: 0.4em solid transparent;
  border-bottom: 0.4em solid transparent;
  border-left: 0.4em solid currentColor;
  transform: rotate(0deg);
  transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.arrow--rotated {
  transform: rotate(90deg);
  transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.h1 {
  font-size: 1em;
  text-align: center;
  padding: 1em 0;
}

.btn {
  border-radius: 0.25em;
  cursor: pointer;
  transition:
    background-color calc(0.3s / 2) linear,
    color 0.3s;
  -webkit-tap-highlight-color: transparent;
}

.btn-group {
  display: flex;
  gap: 0.375em;
  margin-bottom: 1.5em;
}

.timeline {
  box-sizing: border-box;
  margin: auto;
  padding: 0 1.5em;
  width: 100%;
  max-width: 36em;
}

.timeline__date {
  font-size: 0.833em;
  line-height: 2.4;
}

.timeline__dot {
  background-color: currentColor;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  margin: 0.625em 0;
  margin-inline-end: 1em;
  position: relative;
  width: 0.75em;
  height: 0.75em;
}

.timeline__item {
  position: relative;
  padding-bottom: 2.25em;
}

.timeline__item:not(:last-child):before {
  background-color: currentColor;
  content: "";
  display: block;
  position: absolute;
  top: 1em;
  width: 0.125em;
  height: 100%;
  transform: translateX(250%);
}

.timeline__item-header {
  display: flex;
}

.timeline__item-body {
  overflow: hidden;
  height: 0;
  border-radius: 0.375em;
  margin-top: 0.5em;
  margin-inline-start: 1.5em;
}

.timeline__item-body-content {
  opacity: 0;
  padding: 0.5em 0.75em;
  visibility: hidden;
  transition:
    opacity 0.3s cubic-bezier(0.65, 0, 0.35, 1),
    visibility 0.3s steps(1, end);
  background-color: hsl(223, 10%, 50%, 0.2);
  padding: 0.5em 0.75em;
  border-radius: 0.375em;
  font-size: 1em;
}

.timeline__meta {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.timeline__title {
  font-size: 1em;
  font-weight: 600;
  line-height: 1.333;
}

/* Expanded state */
.timeline__item-body--expanded {
  height: auto;
}

.timeline__item-body--expanded .timeline__item-body-content {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.3s, 0s;
}

.item-show-anim {
  animation: showAnim 800ms cubic-bezier(0.65, 0, 0.35, 1);
}

.item-hide-anim {
  animation: hideAnim 800ms cubic-bezier(0.65, 0, 0.35, 1);
}

@keyframes showAnim {
  0% {
    height: 0;
  }

  100% {
    height: 6em;
  }
}

@keyframes hideAnim {
  0% {
    height: 6em;
  }

  100% {
    height: 0;
  }
}
</style>