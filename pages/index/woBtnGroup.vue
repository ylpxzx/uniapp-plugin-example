<template>
  <view class="layout">
    <view
      v-for="(item, index) in props.options"
      :key="item.value"
      @click="onChange(item)"
      class="btn"
			:style="[elemtComputed(index, item), borderRadiusComputed(index)]"
      :class="[borderRadiusComputed(index)]">
      {{ item.label }}
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue';
interface Border {
	isShow: boolean,
	size: string,
	style: string,
	radius: string
}
const props = withDefaults(
  defineProps<{
		outline?: boolean;
		shape?: 'round' | 'space' | 'default';
		borderObj?: Border;
    defaultValue?: string | number;
    options: any[];
		color?: string
  }>(),
  {
		outline: false,
		shape: 'default',
		borderObj: () => {
			return {
				isShow: true,
				size: '1rpx',
				style: 'solid',
				radius: '70rpx'
			}
		},
    defaultValue: 1,
		color: '#3370FF',
    options: () => [
			{
				label: '按钮1',
				value: 1,
			},
			{
				label: '按钮2',
				value: 2,
			}
		],
  }
);

const $emit = defineEmits<{
  (e: 'change', ev: any): void;
}>();
const state = reactive({
  selectedValue: props.defaultValue,
});

watch(
  () => props.defaultValue,
  (value) => {
    state.selectedValue = value;
  },
  { immediate: true }
);

const borderRadiusComputed = computed(() => (index: number) => {
	if (props.shape === 'space') return '';
	if (props.shape === 'round') return {
		borderRadius: props.borderObj.radius
	}
  if (index === 0) {
    return {
			borderRadius: `${props.borderObj.radius} 0rpx 0rpx ${props.borderObj.radius}`
		};
  }
  if (index === props.options.length - 1) {
    return {
			borderRadius: `0rpx ${props.borderObj.radius} ${props.borderObj.radius} 0rpx`
		};
  }
});

const elemtComputed = computed(() => (index: number, item: any) => {
	let styleObj: any = {}
	if (props.borderObj.isShow && props.shape !== 'round') {
		if (index === 0) {
			styleObj.border = `${props.borderObj.size} ${props.borderObj.style} ${props.color}`
		} else {
			styleObj.borderRight = `${props.borderObj.size} ${props.borderObj.style} ${props.color}`
			styleObj.borderTop = `${props.borderObj.size} ${props.borderObj.style} ${props.color}`
			styleObj.borderBottom = `${props.borderObj.size} ${props.borderObj.style} ${props.color}`
		}
	}
  if (item.disabled) {
		styleObj.color = '#999'
  }
  if (state.selectedValue === item.value) {
		if (props.outline) {
			styleObj.color = props.color
		} else {
			styleObj.color = '#fff'
			styleObj.background = props.color
		}
  }
  return styleObj;
});
const onChange = (data: any) => {
  if (data.disabled) {
    return;
  }
  state.selectedValue = data.value;
  $emit('change', data);
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.layout {
  display: flex;
  align-items: center;
  .btn {
		width: 100%;
		text-align: center;
    padding: 14rpx 26rpx;
  }
}
</style>
