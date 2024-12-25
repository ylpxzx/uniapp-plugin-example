<template>
  <transition name="fade" @before-leave="onClose" @after-leave="onDestroy">
    <view
			v-if="state.visiable"
			:style="{
				top: topOffset + 'px',
				background: isDeepBg ? statusColor[status] : 'white',
				color: isDeepBg ? 'white' : ''
			}"
			class="message"
		>
      <view style="display: flex; justify-content: center;align-items: center;">
				<view style="padding-right: 12rpx;height: 100%;display: flex; justify-content: center;align-items: center;">
					<icon v-if="!isDeepBg" :type="status === 'error' ? 'clear' : status" :color="statusColor[status]" size="14" />
				</view>
        {{ message }}
      </view>
    </view>
  </transition>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue';
const props = defineProps({
  topOffset: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'error'
  },
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 3000
  },
	isDeepBg: {
		type: String,
		required: false
	},
  id: {
    type: Number,
    required: true
  },
  onDestroy: {
    type: Function,
    required: true
  },
  onClose: {
    type: Function,
    required: true
  }
});
const statusColor = {
  info: '#2080F0',
  success: '#18A058',
  warn: '#F0A020',
  error: '#D03050',
};
const state = reactive({
  visiable: false
});
const close = () => {
  state.visiable = false;
};
onMounted(() => {
  state.visiable = true;
  setTimeout(() => {
    close();
  }, props.duration);
});
</script>

<style scoped>
.message {
  font-size: 28rpx;
  position: fixed;
  left: 50%;
  width: fit-content;
  transform: translate(-50%, 10px);
  padding: 18rpx 30rpx;
  z-index: 10001;
  transition: top 0.4s;
  border-radius: 8rpx;
  box-shadow:
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    transform 0.4s,
    opacity 0.4s;
}

.fade-enter-from {
  transform: translate(-50%, 0);
  opacity: 0;
}

.fade-leave-to {
  transform: translate(-50%, -10px) !important;
  opacity: 0;
}
</style>
