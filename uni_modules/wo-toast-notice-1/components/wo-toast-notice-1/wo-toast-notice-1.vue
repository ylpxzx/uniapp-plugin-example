<template>
  <view class="toast-panel">
    <view
      v-for="toast in state.toasts"
      :key="toast.id"
      :class="['toast-item', toast.class]"
      :style="{
        maxHeight: toast.visible ? '200px' : '0',
        opacity: toast.visible ? '1' : '0',
        transition: toast.visible ? 'all 0.5s ease' : 'all 0.5s ease 0s',
      }"
    >
      <view :class="['toast', toast.class]">
        <view class="close" @click="closeToast(toast.id)"></view>
        <view class="title" v-text="toast.title"></view>
        <view class="content" v-html="toast.content"></view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
  toasts: [],
});

const toastTypes = {
  tip: {
    class: "help",
  },
  success: {
    class: "success",
  },
  warning: {
    class: "warning",
  },
  error: {
    class: "error",
  },
};

const showToast = (data) => {
  const info = toastTypes[data?.type];
  if (!info) return;
  const id = Date.now().toString(36) + Math.random().toString(36).slice(4);
  // 用 reactive 保证 visible 响应式
  const toast = reactive({
    id,
    ...info,
    title: data?.title || "",
    content: data?.content || "",
    visible: false,
  });
  state.toasts.push(toast);
  setTimeout(() => {
    toast.visible = true;
  }, 10);
  // 自动关闭
  const index = state.toasts.length - 1;
  const delay = 5000 + index * 800;
  setTimeout(() => closeToast(id), delay);
};

const closeToast = (id) => {
  const idx = state.toasts.findIndex((t) => t.id === id);
  if (idx !== -1) {
    state.toasts[idx].visible = false;
    setTimeout(() => {
      const removeIdx = state.toasts.findIndex((t) => t.id === id);
      if (removeIdx !== -1) state.toasts.splice(removeIdx, 1);
    }, 500);
  }
};

defineExpose({
  showToast,
});
</script>
<style scoped>
.toast-panel {
  --tr: all 0.5s ease 0s;
  --ch1: #05478a;
  --ch2: #0070e0;
  --cs1: #005e38;
  --cs2: #03a65a;
  --cw1: #c24914;
  --cw2: #fc8621;
  --ce1: #851d41;
  --ce2: #db3056;
  display: flex;
  flex-direction: column;
  transition: var(--tr);
  position: fixed;
  top: 80rpx;
  right: 0;
  padding: 0 1rpx;
}

.toast-item {
  transition: var(--tr);
  position: relative;
}

.toast {
  background: #fff;
  color: #f5f5f5;
  padding: 20rpx 40rpx 20rpx 50rpx;
  /* text-align: center; */
  border-radius: 18rpx;
  position: relative;
  font-weight: 300;
  margin: 18rpx 10rpx;
  /* text-align: left; */
  transition: var(--tr);
  opacity: 1;
  border: 1rpx solid rgba(255, 255, 255, 0.627);
  box-shadow: 0 0 2rpx 0 #1a1f4360;
}

.toast:before {
  content: "";
  position: absolute;
  width: 10rpx;
  height: calc(100% - 60rpx);
  top: 30rpx;
  left: 12rpx;
  z-index: 0;
  border-radius: 40rpx;
  background: var(--clr);
}

.toast .title {
  font-size: 24rpx;
  margin: 0;
  line-height: 27rpx;
  font-weight: 600;
  position: relative;
  color: var(--clr);
}

.toast .content {
  position: relative;
  font-size: 24rpx;
  z-index: 1;
  margin: 8rpx 0 0;
  color: #595959;
  line-height: 39rpx;
}

.close {
  position: absolute;
  width: 43.2rpx;
  height: 43.2rpx;
  text-align: center;
  right: 10rpx;
  top: 10rpx;
  cursor: pointer;
  border-radius: 100%;
}

.close:after {
  position: absolute;
  font-family: "Varela Round", san-serif;
  width: 100%;
  height: 100%;
  left: 0;
  font-size: 57.6rpx;
  content: "+";
  transform: rotate(-45deg);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #595959;
  text-indent: 2rpx;
}

.close:hover:after {
  background: var(--clr);
  color: #fff;
}

.toast.help {
  --bg: var(--ch1);
  --clr: var(--ch2);
  --brd: var(--ch3);
}

.toast.success {
  --bg: var(--cs1);
  --clr: var(--cs2);
  --brd: var(--cs3);
}

.toast.warning {
  --bg: var(--cw1);
  --clr: var(--cw2);
  --brd: var(--cw3);
}

.toast.error {
  --bg: var(--ce1);
  --clr: var(--ce2);
  --brd: var(--ce3);
}

.toast a {
  color: var(--clr);
}

.toast a:hover {
  color: var(--bg);
}
.toast-item.help {
  max-height: 0;
  opacity: 0;
  --clr: #0070e0;
  --brd: #0070e040;
}

.toast-item.success {
  max-height: 0;
  opacity: 0;
  --clr: #03a65a;
  --brd: #03a65a40;
}

.toast-item.warning {
  max-height: 0;
  opacity: 0;
  --clr: #fc8621;
  --brd: #fc862140;
}

.toast-item.error {
  max-height: 0;
  opacity: 0;
  --clr: #db3056;
  --brd: #db305640;
}
</style>
