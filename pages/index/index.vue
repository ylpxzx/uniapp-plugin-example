<template>
	<view>
		<view class="name">标签选择器组件: wo-tag</view>
		<view class="card">
			<view class="header">属性-基本用法(包括disabled禁用)：</view>
			<view class="content">
				<woTag :default-value="state.defaultValue" :options="state.options" @change-select="onChangeTag">
				</woTag>
			</view>
		</view>
		<view class="card">
			<view class="header">属性-行内滑动：</view>
			<view class="content">
				<woTag row :options="state.options" @change-select="onChangeTag">
				</woTag>
			</view>
		</view>
		<view class="card">
			<view class="header">属性-多选：</view>
			<view class="content">
				<woTag mult :options="state.options" @change-select="onChangeTag">
				</woTag>
			</view>
		</view>
		<view class="card">
			<view class="header">属性-限制选择个数：最多可选2个（开启多选的情况下可用）：</view>
			<view class="content">
				<woTag mult :limit="2" :options="state.options" @change-select="onChangeTag">
				</woTag>
			</view>
		</view>
		<view class="card">
			<view class="header">属性-自定义初始化样式和激活样式：</view>
			<view class="content">
				<woTag :activate-style="state.activateObj" :init-style="state.initObj" :options="state.options" @change-select="onChangeTag">
				</woTag>
			</view>
		</view>
		<view class="card">
			<view class="header">插槽-自定义显示内容：</view>
			<view class="content">
				<woTag mult :position="'right'" :default-value="state.selectValue" :options="state.options" @change-select="onChangeTagOne">
					<template v-slot:default="slotProps">
						<view style="display: flex;">
							<view style="padding-right: 4rpx;" v-if="state.selectValue.includes(slotProps.item.value)">✅</view>
							<view style="padding-right: 4rpx;" v-else>❌</view>
							<text>{{ slotProps.item.label }}</text>
						</view>
					</template>
				</woTag>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import woTag from './woTag.vue'
import { reactive } from 'vue';

const state = reactive({
  options: [
		{
			label: '标签一',
			value: 0
		},
		{
			label: '标签二',
			value: 1
		},
		{
			label: '标签三',
			value: 2
		},
		{
			label: '标签四',
			value: 3
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
		{
			label: '标签七',
			value: 6
		},
	],
  defaultValue: [2],
	selectValue: [2],
	activateObj: {
		border: '1rpx solid orange',
		background: '#fff',
		color: 'orange',
		borderRadius: '30rpx',
		padding: '8rpx 12rpx'
	},
	initObj: {
		border: '1rpx solid #f3f3f3',
		background: '#fff',
		color: '#333',
		borderRadius: '30rpx',
		padding: '8rpx 12rpx'
	}
});
const onChangeTag = (e: any) => {
	console.log('选中的标签：', e);
};
const onChangeTagOne = (e: any) => {
	state.selectValue = []
	e.forEach(elemt => {
		state.selectValue.push(elemt.value)
	})
};
</script>

<style scoped>
.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}
.name {
	font-weight: bold;
	padding: 40rpx 0 10rpx 20rpx;
}
.card {
	background: #f1f1f1;
	margin: 40rpx 10rpx;
	padding: 30rpx;
	border-radius: 12rpx;
}
.header {
	font-size: 26rpx;
	display: flex;
	align-items: center;
	margin-bottom: 30rpx;
}
.content {
	font-size: 24rpx;
}
</style>
