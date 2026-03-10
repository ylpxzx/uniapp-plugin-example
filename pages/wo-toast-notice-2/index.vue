<template>
  <view class="container">
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view style="border-top: 1rpx solid #eee">
      <view>
        <view class="h1 flex-center">通知弹窗</view>
      </view>
      <view
        style="
          padding: 20rpx;
          display: flex;
          gap: 10rpx;
          flex-wrap: wrap;
          justify-content: center;
        "
      >
        <button type="primary" @click="confirmOne('tip')">提示通知</button>
        <button type="primary" @click="confirmTwo('success')">成功通知</button>
        <button type="primary" @click="confirmThree('warning')">
          警告通知
        </button>
        <button type="primary" @click="confirmFour('error')">错误通知</button>
      </view>
    </view>
    <wo-toast-notice-2 ref="noticeRef" />
  </view>
</template>

<script setup>
import { ref } from "vue";

const noticeRef = ref();

const confirmOne = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "提示通知",
    content: '这是一条提示通知的内容,<a href="#">contact form</a>。',
  });
};

const confirmTwo = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "成功通知",
    content: "这是一条成功通知的内容。",
  });
};

const confirmThree = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "警告通知",
    content: "这是一条警告通知的内容。",
  });
};

const confirmFour = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "错误通知",
    content: "这是一条错误通知的内容。",
  });
};
</script>

<style scoped>
.h1 {
  font-size: 1em;
  text-align: center;
  padding: 1em 0;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tip-popup {
  width: 560rpx;
  height: max-content;
  border-radius: 20rpx;
  background: #fff;
}

.tip {
  color: #333;
  font-size: 28rpx;
  font-weight: 600;
}
</style>
