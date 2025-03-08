<template>
  <view class="container">
    <!-- 可滚动内容 -->
    <scroll-view class="scroll-view" scroll-y @scroll="handleScroll" :scroll-top="scrollTop">
      <!-- 用户信息 -->
      <view class="header">
        <view class="user-info">
          <view class="avatar-box">
            <view class="gradient-circle large">
              <image class="avatar-img" src="/static/my-notion-face-portrait.png" @error="imageError"></image>
            </view>
            <view class="upload-sign">
              <view>+</view>
            </view>
          </view>
          <view class="flex-center">
            <view>
              <view class="name-row">
                <text class="username">ylp</text>
              </view>
              <text class="user-id">ID: xhs_123456789</text>
            </view>
          </view>
        </view>
        <view class="signature">everything will be fine.</view>
        <view class="sign">
          <view class="level-badge">Lv.12</view>
          <view class="flex-center">
            <view class="gender-badge">♀</view>
          </view>
        </view>
        <!-- 数据面板 -->
        <view class="data-panel">
          <view class="user-data">
            <view v-for="item in panelData" :key="item.label">
              <view class="user-number">{{ item.value }}</view>
              <view class="user-label">{{ item.label }}</view>
            </view>
          </view>
          <view class="edit-btns">
            <view class="btn">编辑资料</view>
          </view>
        </view>
        <view class="other-panel">
          <view class="other-box" v-for="item in panelOtherData" :key="item.title">
            <view class="other-title">{{ item.title }}</view>
            <view class="other-label">{{ item.label }}</view>
          </view>
        </view>
      </view>

      <!-- 内容区域 -->
      <view class="content-section">
        <!-- 标签栏 -->
        <view class="tab-bar">
          <view v-for="(tab, index) in tabs" :key="index" class="tab-item" :class="{ active: activeTab === index }"
            @click="switchTab(index)">
            {{ tab }}
            <view class="indicator gradient-accent" v-if="activeTab === index"></view>
          </view>
        </view>

        <!-- 瀑布流内容 -->
        <view class="waterfall">
          <view v-for="(item, index) in posts" :key="index" class="post-item" :style="{ width: itemWidth + 'px' }">
            <view class="post-image gradient-image"></view>
            <view class="post-info">
              <view class="text-line gradient-text"></view>
              <view class="text-line short gradient-text"></view>
              <view class="stats gradient-text"></view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      panelData: [
        {
          value: 256,
          label: '关注'
        },
        {
          value: '12.8万',
          label: '粉丝'
        },
        {
          value: '36.9万',
          label: '获赞与收藏'
        }
      ],
      panelOtherData: [
        {
          title: '购物',
          label: '好逛好玩又好买'
        },
        {
          title: '订单',
          label: '查看我的订单'
        },
        {
          title: '购物车',
          label: '10个商品'
        }
      ],
      navBarBackground: 'red',
      titleOpacity: 0,
      scrollTop: 0,
      activeTab: 0,
      tabs: ['笔记', '收藏', '赞过'],
      posts: Array(6).fill({}),
      itemWidth: 0
    }
  },
  mounted() {
    this.calculateLayout()
  },
  methods: {
    calculateLayout() {
      const { windowWidth } = uni.getSystemInfoSync()
      this.itemWidth = (windowWidth - 32) / 2
    },
    handleScroll(e) {
      const scrollTop = e.detail.scrollTop
      this.titleOpacity = Math.min(scrollTop / 100, 1)
      this.navBarBackground = `rgba(255,255,255,${Math.min(scrollTop / 80, 0.98)})`
    },
    switchTab(index) {
      this.activeTab = index
    }
  }
}
</script>

<style lang="scss" scoped>
.gradient {
  &-circle {
    border-radius: 50%;
    background: white;

    &.large {
      width: 160rpx;
      height: 160rpx;
      border: 4rpx solid #fff;
      box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.1);
    }
  }

  &-gray {
    background: linear-gradient(45deg, #D3D3D3, #A9A9A9);
  }

  &-btn {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.9));
  }

  &-image {
    background: linear-gradient(180deg, #1C2D41 0%, #546366 100%);
    padding-top: 133%;
    border-radius: 16rpx;
  }

  &-text {
    background: linear-gradient(90deg, #333 30%, #666 70%);
    opacity: 0.8;
  }

  &-accent {
    background: linear-gradient(90deg, #1C2D41, #546366);
  }
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  background: linear-gradient(180deg, #1C2D41 0%, #546366 100%);
  padding: 70rpx 30rpx 80rpx 30rpx;

  .user-info {
    display: flex;

    .avatar-box {
      position: relative;
      margin-right: 32rpx;

      .avatar-img {
        width: 160rpx;
        height: 160rpx;
        border-radius: 50%;
      }

      .upload-sign {
        font-size: 36rpx;
        line-height: 20rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FAE93E;
        position: absolute;
        font-weight: 600;
        right: 12rpx;
        bottom: 6rpx;
        border-radius: 50%;
        width: 40rpx;
        height: 40rpx;
      }
    }
  }

  .name-row {
    display: flex;
    align-items: center;
    margin-bottom: 10rpx;

    .username {
      color: #EFFAFB;
      font-size: 30rpx;
      font-weight: 700;
      margin-right: 16rpx;
    }
  }

  .user-id {
    color: #90A4AB;
    font-size: 24rpx;
  }

  .signature {
    color: #BCC1C4;
    font-size: 28rpx;
    padding-top: 34rpx;
  }

  .sign {
    display: flex;
    padding-top: 20rpx;

    .gender-badge {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      background-color: #707F84;
      width: 34rpx;
      height: 32rpx;
      padding: 2rpx 10rpx;
      font-size: 20rpx;
      border-radius: 40rpx;
      color: #FF8597;
      text-align: center;
      line-height: 36rpx;
    }

    .level-badge {
      padding: 4rpx 16rpx;
      border-radius: 32rpx;
      font-size: 24rpx;
      color: #EFFAFB;
      background-color: #637376;
      margin-right: 12rpx;
    }
  }
}

.data-panel {
  display: flex;
  justify-content: space-between;
  font-size: 26rpx;
  padding: 50rpx 0;
  color: #BCC1C4;

  .user-data {
    display: flex;
    justify-content: space-between;
    gap: 50rpx;

    .user-number {
      color: #EFFAFB;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .user-label {
      font-size: 22rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .edit-btns {
    display: flex;

    .btn {
      padding: 0 32rpx;
      border-radius: 40rpx;
      color: #EFFAFB;
      border: 1rpx solid rgba(248, 251, 251, 0.296);
      background-color: #637376;
      display: flex;
      align-items: center;
    }
  }
}

.other-panel {
  font-size: 24rpx;
  color: #BCC1C4;
  display: flex;
  gap: 20rpx;

  .other-box {
    background-color: #637376;
    padding: 20rpx;
    border-radius: 16rpx;
    width: 200rpx;

    .other-label {
      font-size: 20rpx;
    }

    .other-title {
      color: #EFFAFB;
      padding-bottom: 6rpx;
    }
  }
}

/* 内容区域 */
.content-section {
  transform: translateY(-20px);
  background: white;
  border-radius: 20rpx 20rpx 0 0;

  .tab-bar {
    display: flex;
    padding: 0 32rpx;

    .tab-item {
      flex: 1;
      text-align: center;
      padding: 24rpx 0;
      font-size: 26rpx;
      color: #666;
      position: relative;

      &.active {
        font-weight: 500;
        color: #333;
      }

      .indicator {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 52rpx;
        height: 6rpx;
        border-radius: 18rpx;
      }
    }
  }

  .waterfall {
    padding: 16rpx;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .post-item {
      margin-bottom: 16rpx;

      .post-info {
        padding: 20rpx;

        .text-line {
          height: 32rpx;
          margin-bottom: 12rpx;
          border-radius: 8rpx;

          &.short {
            width: 60%;
          }
        }

        .stats {
          width: 40%;
          height: 24rpx;
          border-radius: 8rpx;
        }
      }
    }
  }
}
</style>