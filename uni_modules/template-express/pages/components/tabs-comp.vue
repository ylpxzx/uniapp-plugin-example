<template>
  <view>
    <view class="card-tabs">
      <view class="tab-content">
        <view class="tab-content-bg">
          <view
            class="tab-normal"
            v-for="item in tabOptions"
            :key="item.type"
            @click="onChange(item.type)"
          >
            <view class="tab-title">{{ item.title }}</view>
          </view>
          <view class="tab-highlight" :style="tabStyle">
            <view
              class="tab-highlight-base flex-center"
              :class="[
                activeTab === 'send'
                  ? 'tab-highlight-left'
                  : 'tab-highlight-right',
              ]"
            >
              <view
                class="tab-title tab-title-active relative"
                :style="{
                  padding: activeTab === 'send' ? '0 80rpx 0 0 ' : '0',
                }"
                style="transform: translateX(20rpx)"
              >
                <view class="tab-title-active">{{ currentTitle }}</view>
                <view class="tab-shadow"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view
        class="card-content"
        :style="{
          'border-radius': isAnimation
            ? '0 0 26rpx 26rpx'
            : activeTab === 'send'
            ? '0 26rpx 26rpx 26rpx'
            : '26rpx 0 26rpx 26rpx',
        }"
      >
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    tabOptions: {
      type: Array,
      default() {
        return [
          {
            type: "send",
            title: "火车票",
          },
          {
            type: "receive",
            title: "机票",
          },
        ];
      },
    },
    defaultTab: {
      type: String,
      default: "send",
    },
  },
  emits: ["onChange"],
  data() {
    return {
      activeTab: this.defaultTab,
      tabStyle: {},
      isAnimation: false,
    };
  },
  computed: {
    currentTitle() {
      const currentTab = this.tabOptions.find(
        (item) => item.type === this.activeTab
      );
      return currentTab ? currentTab.title : "";
    },
  },
  methods: {
    async onChange(type) {
      this.$emit("onChange", type);
      if (this.activeTab === type) {
        return;
      }
      this.activeTab = type;
      this.isAnimation = true;
      this.tabStyle.width = "100%";
      this.tabStyle.background = "#fff";
      this.tabStyle.borderRadius = "26rpx 26rpx 0 0";
      setTimeout(() => {
        if (type === this.tabOptions[0].type) {
          this.tabStyle = {
            width: "60%",
            left: "0",
          };
        } else if (type === this.tabOptions[1].type) {
          this.tabStyle = {
            width: "60%",
            right: "0",
          };
        }
        this.isAnimation = false;
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}

.bg-white {
  background-color: #ffffff;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-tabs {
  position: relative;
  .tab-content {
    padding: 2rpx;
    height: 140rpx;

    &-bg {
      background: #3370ff;
      border-radius: 26rpx;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }

    .tab-normal {
      padding-bottom: 45rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
  }

  .tab-title {
    font-size: 32rpx;
    font-weight: 600;
    line-height: 32rpx;
    letter-spacing: 1rpx;
    color: #e8e8e8;
  }

  .tab-title-active {
    position: relative;
    z-index: 2;
    color: #333;
  }
  .tab-highlight {
    position: absolute;
    top: 0;
    pointer-events: none;
    width: 60%;
    transition: width 0.4s ease;
  }
  .tab-highlight-base {
    position: relative;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100rpx;
  }
  .tab-highlight-left {
    background-image: url(../../static/tab.png);
  }
  .tab-highlight-right {
    background-image: url(../../static/tab-right.png);
  }

  .tab-shadow {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 92rpx;
    height: 10rpx;
    background: linear-gradient(90deg, #3370ff 0%, rgba(255, 104, 184, 0) 94%);
    left: 2rpx;
    bottom: 1rpx;
  }
}

.card-content {
  transform: translateY(-48rpx);
  background-color: #fff;
}
</style>
