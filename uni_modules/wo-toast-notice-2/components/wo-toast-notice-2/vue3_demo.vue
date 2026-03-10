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

// 接收props
const props = defineProps({
  timeLength: {
    type: Number,
    default: 4000,
  },
});

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
  if (props.timeLength === 0) {
    return;
  }
  const delay = props.timeLength + index * 800;
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
  top: 100rpx;
  right: 0;
  padding: 0 1rpx;
}

.toast {
  background-color: var(--bg) !important;
  color: #f5f5f5;
  padding: 32rpx 64rpx 32rpx 192rpx;
  text-align: center;
  border-radius: 64rpx;
  position: relative;
  font-weight: 300;
  margin: 20rpx 0 20rpx;
  text-align: left;
  max-width: 480rpx;
  transition: var(--tr);
  opacity: 1;
}

.toast-item {
  max-height: 600rpx;
  transition: var(--tr);
  animation: show-toast 4s ease 3s 1;
}

.toast:before {
  content: "";
  position: absolute;
  width: 176rpx;
  height: 192rpx;
  --drop:
    radial-gradient(
      circle at 64% 51%,
      var(--clr) 14.4rpx,
      #fff0 calc(14.4rpx + 2rpx)
    ),
    /*ball 1*/
    radial-gradient(
        circle at 100% 100%,
        #fff0 28.8rpx,
        var(--clr) calc(28.8rpx + 2rpx) 40rpx,
        #fff0 calc(40rpx + 2rpx) 100%
      ),
    /*neck 2*/
    radial-gradient(
        circle at 0% 0%,
        #fff0 28.8rpx,
        var(--clr) calc(28.8rpx + 2rpx) 40rpx,
        #fff0 calc(40rpx + 2rpx) 100%
      ),
    /*neck 1*/
    radial-gradient(
        circle at 0% 120%,
        var(--clr) 128rpx,
        #fff0 calc(128rpx + 2rpx)
      )
      /*big 1*/;
  background:
    radial-gradient(
      circle at 22% 121.6rpx,
      var(--clr) 24rpx,
      #fff0 calc(24rpx + 2rpx)
    ),
    /*ball 8*/
    radial-gradient(
        circle at 95% 60.8rpx,
        var(--clr) 2.24rpx,
        #fff0 calc(2.24rpx + 2rpx)
      ),
    /*ball 7*/
    radial-gradient(
        circle at 80% 72rpx,
        var(--clr) 5.76rpx,
        #fff0 calc(5.76rpx + 2rpx)
      ),
    /*ball 6*/
    radial-gradient(
        circle at 80% 75%,
        var(--clr) 11.2rpx,
        #fff0 calc(11.2rpx + 2rpx)
      ),
    /*ball 5*/
    radial-gradient(
        circle at 43% 73.6rpx,
        var(--clr) 2.24rpx,
        #fff0 calc(2.24rpx + 2rpx)
      ),
    /*ball 4*/
    radial-gradient(
        circle at 40% 32rpx,
        var(--clr) 3.84rpx,
        #fff0 calc(3.84rpx + 2rpx)
      ),
    /*ball 3*/
    radial-gradient(
        circle at 20% 48rpx,
        var(--clr) 8rpx,
        #fff0 calc(8rpx + 2rpx)
      ),
    /*ball 2*/ var(--drop),
    #f000;
  background-repeat: no-repeat;
  background-size:
    100% 100%,
    100% 100%,
    100% 100%,
    100% 100%,
    100% 100%,
    100% 100%,
    100% 100%,
    100% 100%,
    52rpx 52rpx,
    52rpx 52rpx,
    100% 100%,
    100% 100%;
  background-position:
    0 0,
    0 0,
    0 0,
    0 0,
    0 0,
    0 0,
    0 0,
    0 0,
    calc(100% - 56rpx) 91.2rpx,
    calc(100% - 56rpx) 94.4rpx,
    0 0,
    0 0;
  bottom: 0rpx;
  left: 0rpx;
  z-index: 0;
  border-radius: 0 0 0 64rpx;
}

.toast:after {
  content: "";
  position: absolute;
  width: 80rpx;
  height: 80rpx;
  background: var(--clr);
  top: -18rpx;
  left: 72rpx;
  border-radius: 96rpx;
  padding-top: 6.4rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72rpx;
  box-sizing: border-box;
}

.toast .title {
  font-size: 28rpx;
  margin: 0;
  font-weight: bold;
  position: relative;
}

.toast .title:before,
.toast-icon:before {
  border: 16rpx solid #fff0;
  width: 0;
  height: 0;
  position: absolute;
  content: "";
  left: -110.4rpx;
  border-top: 32rpx solid var(--clr);
  border-left: 32rpx solid var(--clr);
  top: -12.8rpx;
  transform: rotate(-96deg) skewX(30deg);
  border-radius: 16rpx;
}

.toast p {
  position: relative;
  font-size: 30.4rpx;
  z-index: 1;
  margin: 8rpx 0 0;
}

.close {
  position: absolute;
  width: 43.2rpx;
  height: 43.2rpx;
  text-align: center;
  right: 32rpx;
  cursor: pointer;
  border-radius: 100%;
  background: none;
  border: none;
}

.close:after {
  position: absolute;
  font-family: "Varela Round", san-serif;
  width: 100%;
  height: 100%;
  left: 0;
  font-size: 57.6rpx;
  content: "+";
  transform: rotate(45deg);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close:hover {
  background: #f5f5f5;
  color: var(--clr);
}

.toast-item.success {
  animation-delay: 2s;
}

.toast-item.warning {
  animation-delay: 1s;
}

.toast-item.error {
  animation-delay: 0s;
}

.toast.help {
  --clr: var(--ch1);
  --bg: var(--ch2);
}
.toast.help:after {
  content: "?";
}

.toast.success {
  --clr: var(--cs1);
  --bg: var(--cs2);
}

.toast.success:after {
  content: "L";
  font-size: 54.4rpx;
  font-weight: bold;
  padding-bottom: 16rpx;
  transform: rotateY(180deg) rotate(-38deg);
  text-indent: 4.8rpx;
}

.toast.warning {
  --clr: var(--cw1);
  --bg: var(--cw2);
}

.toast.warning:after {
  content: "!";
  font-weight: bold;
}

.toast.error {
  --clr: var(--ce1);
  --bg: var(--ce2);
}

.toast.error:after {
  content: "+";
  font-weight: bold;
  /* font-size: 96rpx;
  line-height: 38.4rpx; */
  transform: rotate(45deg);
}

.toast.success:before {
  --drop:
    radial-gradient(
      circle at 65% 63%,
      var(--clr) 13.6rpx,
      #fff0 calc(13.6rpx + 2rpx)
    ),
    /*ball 1*/
    radial-gradient(
        circle at 70% 125%,
        #fff0 32rpx,
        var(--clr) calc(32rpx + 2rpx) 40rpx,
        #fff0 calc(40rpx + 2rpx) 100%
      ),
    /*neck 2*/
    radial-gradient(
        circle at 30% -25%,
        #fff0 32rpx,
        var(--clr) calc(32rpx + 2rpx) 40rpx,
        #fff0 calc(40rpx + 2rpx) 100%
      ),
    /*neck 1*/
    radial-gradient(
        circle at 20% 120%,
        var(--clr) 112rpx,
        #fff0 calc(112rpx + 2rpx)
      )
      /*big 1*/;
  background-position:
    0 12.8rpx,
    -6.4rpx 105.6rpx,
    0 12.8rpx,
    -64rpx -48rpx,
    -25.6rpx 0rpx,
    -32rpx 12.8rpx,
    0rpx 48rpx,
    38.4rpx 12.8rpx,
    calc(100% - 24rpx) 112rpx,
    calc(100% - 24rpx) 120rpx,
    0 0,
    0 0;
}

.toast.warning:before {
  --drop:
    radial-gradient(
      circle at 65% 63%,
      var(--clr) 13.6rpx,
      #fff0 calc(13.6rpx + 2rpx)
    ),
    /*ball 1*/
    radial-gradient(
        circle at 129% 36%,
        #fff0 32rpx,
        var(--clr) calc(32rpx + 2rpx) 40rpx,
        #fff0 calc(40rpx + 2rpx) 100%
      ),
    /*neck 2*/
    radial-gradient(
        circle at -27% 25%,
        #fff0 32rpx,
        var(--clr) calc(32rpx + 2rpx) 40rpx,
        #fff0 calc(40rpx + 2rpx) 100%
      ),
    /*neck 1*/
    radial-gradient(
        circle at 20% 120%,
        var(--clr) 112rpx,
        #fff0 calc(112rpx + 2rpx)
      )
      /*big 1*/;
  background-position:
    58.24rpx 20.8rpx,
    -38.4rpx 38.4rpx,
    -64rpx 24rpx,
    -112rpx -62.4rpx,
    -16rpx -17.6rpx,
    96rpx 136rpx,
    0rpx -16rpx,
    38.4rpx 12.8rpx,
    calc(100% - 124.8rpx) 88rpx,
    calc(100% - 120rpx) 88rpx,
    0 0,
    0 0;
}

.toast.error:before {
  --drop:
    radial-gradient(
      circle at 65% 63%,
      var(--clr) 13.6rpx,
      #fff0 calc(13.6rpx + 2rpx)
    ),
    /*ball 1*/
    radial-gradient(
        circle at 129% 36%,
        #fff0 32rpx,
        var(--clr) calc(32rpx + 2rpx) 40rpx,
        #fff0 calc(40rpx + 2rpx) 100%
      ),
    /*neck 2*/
    radial-gradient(
        circle at -27% 25%,
        #fff0 32rpx,
        var(--clr) calc(32rpx + 2rpx) 40rpx,
        #fff0 calc(40rpx + 2rpx) 100%
      ),
    /*neck 1*/
    radial-gradient(
        circle at 20% 120%,
        var(--clr) 112rpx,
        #fff0 calc(112rpx + 2rpx)
      )
      /*big 1*/;
  background-position:
    56rpx 24rpx,
    -24rpx 38.4rpx,
    -41.6rpx 16rpx,
    -112rpx -80rpx,
    -12.8rpx 0rpx,
    64rpx 40rpx,
    26.24rpx 51.2rpx,
    16rpx 52.8rpx,
    calc(100% - 95.68rpx) 104rpx,
    calc(100% - 88rpx) 96rpx,
    0 0,
    0 0;
}

.toast a {
  color: #fff;
}

.toast-item.closed {
  max-height: 0;
}

/*** ICONS ***/

.toast-icons {
  background: #fff1;
  padding: 32rpx 32rpx 40rpx 32rpx;
  display: flex;
  justify-content: space-around;
  border-radius: 64rpx;
  gap: 48rpx;
  width: 100%;
  box-sizing: border-box;
  margin-top: 48rpx;
  margin-bottom: 32rpx;
}

.toast-icon {
  width: 120rpx;
  height: 120rpx;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  position: relative;
  background: none;
  border: none;
}

.toast-icon:before {
  left: 22.4rpx;
  top: 76.8rpx;
  transform: rotate(-96deg) skewX(30deg);
}

.toast-icon:after {
  font-size: 64rpx;
  font-weight: bold;
}

.icon-error:after {
  font-size: 115.2rpx;
  line-height: 64rpx;
  font-weight: 500;
  padding-top: 8rpx;
  max-height: 64rpx;
}

.icon-help {
  background: #0070e0;
  --clr: #0070e0;
}

.icon-success {
  background: #03a65a;
  --clr: #03a65a;
}

.icon-warning {
  background: #fc8621;
  --clr: #fc8621;
}

.icon-error {
  background: #db3056;
  --clr: #db3056;
}
</style>
