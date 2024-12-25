<template>
  <view class="tag-layout">
		<scroll-view scroll-x="true" :class="{'scroll': props.row}">
			<view
			  v-for="(item, index) in props.options"
			  :key="index"
				class="box"
				:style="[tagStatus(item)]"
				:class="[item.disabled ? 'disabled-item' : '']"
			  @click="onChange(item)"
			  >
					<slot :item="item">
						{{ item.label }}
					</slot>
				</view>
		</scroll-view>
  </view>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue';
const props = withDefaults(
  defineProps<{
		mult?: boolean;
		row?: boolean;
    defaultValue?: any;
    options: any[];
		activateStyle?: Object;
		initStyle?: Object;
		limit?: number;
  }>(),
  {
		row: false,
		mult: false,
    defaultValue: () => [],
    options: () => [
			{
				label: '标签一',
				value: 0
			},
			{
				label: '标签三',
				value: 2
			},
			{
				label: '标签五',
				value: 4,
				disabled: true
			},
			{
				label: '标签六',
				value: 5
			},
		],
		activateStyle: () => {
			return {
				border: '1rpx solid #3370FF',
				background: '#3370FF',
				color: '#fff',
				borderRadius: '8rpx',
				padding: '8rpx 12rpx'
			}
		},
		initStyle: () => {
			return {
				border: '1rpx solid #ffffff',
				background: '#ffffff',
				color: '#333333',
				borderRadius: '8rpx',
				padding: '8rpx 12rpx'
			}
		}
  }
);
const emit = defineEmits(['changeSelect']);
const state = reactive({
  selectedTagList: props.defaultValue,
});
watch(
  () => props.defaultValue,
  (value) => {
    state.selectedTagList = value
  }
);
const tagStatus=computed(()=>(item:any)=>{
	if (item.disabled) {
		return props.initStyle
	} else {
		return state.selectedTagList.includes(item.value) ? props.activateStyle : props.initStyle
	}
})
const onChange = (data: any) => {
	if (data.disabled) return;
	if (props.mult) {
		if (state.selectedTagList.some(elemt => elemt === data.value)) {
			const targetIndex = state.selectedTagList.findIndex((item) => item === data.value);
			state.selectedTagList.splice(targetIndex, 1);
		} else {
			if (state.selectedTagList.length >= props.limit) return;
			state.selectedTagList.push(data.value);
		}
	} else{
		state.selectedTagList = [data.value]
	}
  const res = props.options.filter((item) => state.selectedTagList.includes(item.value));
  emit('changeSelect', res);
};
</script>

<style lang="scss" scoped>
.scroll {
	white-space: nowrap;
	width: 100%;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tag-layout {
  display: flex;
  flex-wrap: wrap;
  .box {
		margin: 0 20rpx 16rpx 0;
		display: inline-block;
		text-align: center;
		.text-box {
			margin: 0 6rpx;
		}
  }
	.disabled-item {
		color: #999 !important;
	}
}
</style>
