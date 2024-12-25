<template>
  <view class="grid-layout">
    <view
      v-for="(item, index) in state.dataOptions"
      :key="index"
      @click="onSelecTime(item, index)">
      <view class="time-layout" :class="bgComputed(item, index)">
        <view class="flex-center main-text" :class="textComputed(item, index)">{{ item.label }}</view>
        <view class="flex-center subtitle-text" :class="textSubtitleComputed(item, index)">{{ item?.subtitle }}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue';
const props = withDefaults(
  defineProps<{
    selectedTime: any[];
    options: any[];
  }>(),
  {
    selectedTime: () => [],
    options: () => [],
  }
);
const $emit = defineEmits<{
  (e: 'changeSelect', ev: any): void;
}>();

const state = reactive({
  dataOptions: props.options as any[],
  rangeValue: [] as any[],
});

watch(
  () => props.selectedTime,
  (value) => {
    if (value.length) {
      state.rangeValue = [value[0], value[value.length - 1]];
    } else {
      state.rangeValue = [];
    }
  },
  {
    immediate: true,
  }
);

const bgComputed = computed(() => (item: any, index: number) => {
  if (item.disabled) {
    return '';
  }
  if (state.rangeValue.includes(item.value)) {
		if (state.rangeValue.length === 1) {
			return 'click-bg single-radius'
		} else if (state.rangeValue[0] === state.rangeValue[1]) {
			return 'click-bg single-radius'
		} else {
			if (state.rangeValue[0] === item.value) {
				return 'click-bg start-radius'
			} else {
				return 'click-bg end-radius'
			}
		}
  }
  if (state.rangeValue.length > 1) {
    if (item.value > state.rangeValue[0] && item.value < state.rangeValue[1]) {
      return 'normal-bg';
    }
  }
  return '';
});
const textComputed = computed(() => (item: any, index: number) => {
  if (item.disabled) {
    return 'time-disabled-text';
  }
  if (state.rangeValue.includes(item.value)) {
    return 'selectd-text';
  }
  return 'time-text';
});
const textSubtitleComputed = computed(() => (item: any, index: number) => {
  if (item.disabled) {
    return 'time-disabled-text';
  }
  if (state.rangeValue.includes(item.value)) {
    return 'selectd-subtitle';
  }
  return 'time-subtitle';
});
const onSelecTime = (item: any, index: number) => {
  if (item.disabled) {
    return;
  }
  if (state.rangeValue.length === 2) {
    state.rangeValue = [item.value];
  } else if (state.rangeValue.length === 1) {
    if (state.rangeValue[0] > index) {
      state.rangeValue[0] = item.value;
    } else {
      for (let i = state.rangeValue[0]; i < index; i++) {
        if (state.dataOptions[i].disabled) {
          state.rangeValue.push(state.dataOptions[i - 1].value);
          $emit('changeSelect', state.rangeValue);
          return;
        }
      }
      state.rangeValue.push(item.value);
    }
  } else {
    state.rangeValue.push(item.value);
  }
  $emit('changeSelect', state.rangeValue);
};
</script>

<style lang="scss" scoped>
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 14rpx;
}
.main-text {
  font-size: 28rpx;
  font-weight: 600;
}
.subtitle-text {
  font-size: 22rpx;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.time-layout {
  padding: 16rpx 16rpx;
}
.time-disabled-text {
  color: #999999;
}
.time-text {
  color: #000;
}
.time-subtitle {
  color: #666;
}
.normal-bg {
  background: #fff5e9;
}
.click-bg {
  background: #e78d00;
}
.single-radius {
	border-radius: 20rpx;
}
.start-radius {
	border-radius: 20rpx 0 0 20rpx;
}
.end-radius {
	border-radius: 0 20rpx 20rpx 0;
}
.selectd-text {
  color: #fff;
}
.selectd-subtitle {
  color: rgba(255, 255, 255, 0.6);
}
</style>
