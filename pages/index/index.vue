<template>
	<view>
		<view class="name">弹出选择器: pop-selector</view>
		<view class="card">
			<view class="header">属性-基本用法(disabled禁用)：</view>
			<view class="content">
				<pop-selector :select-options="state.options" :default-value="state.value" @changeSelect="onChangeSelect">
					<view class="button">
						状态选择：{{ state.options[state.value]?.label }}
					</view>
				</pop-selector>
			</view>
		</view>
		<view class="card">
			<view class="header">属性-自定义激活颜色：</view>
			<view class="content">
				<pop-selector :active-color="'#0086D1'" :select-options="state.options" :default-value="state.value" @changeSelect="onChangeSelect">
					<view class="button">
						状态选择：{{ state.options[state.value]?.label }}
					</view>
				</pop-selector>
			</view>
		</view>
		<view class="card">
			<view class="header">属性-自定义弹窗高度：</view>
			<view class="content">
				<pop-selector :max-height="'200rpx'" :select-options="state.options" :default-value="state.value" @changeSelect="onChangeSelect">
					<view class="button">
						状态选择：{{ state.options[state.value]?.label }}
					</view>
				</pop-selector>
			</view>
		</view>
		<view class="card">
			<view class="header">属性-自定义弹窗样式：</view>
			<view class="content">
				<pop-selector :card-style="state.darkStyle" :select-options="state.options" :default-value="state.value" @changeSelect="onChangeSelect">
					<view class="button">
						状态选择：{{ state.options[state.value]?.label }}
					</view>
				</pop-selector>
			</view>
		</view>
		<view class="card">
			<view class="header">插槽-自定义弹窗头部：</view>
			<view class="content">
				<pop-selector :active-color="'#0086D1'" :select-options="state.options" :default-value="state.value" @changeSelect="onChangeSelect">
					<view class="button">
						状态选择：{{ state.options[state.value]?.label }}
					</view>
					<template v-slot:header>
						<view style="padding: 12rpx 20rpx; color: grey;">请选择订单状态</view>
					</template>
				</pop-selector>
			</view>
		</view>
		<view class="card">
			<view class="header">插槽-自定义右边图标：</view>
			<view class="content">
				<pop-selector :select-options="state.options" :default-value="state.value" @changeSelect="onChangeSelect">
					<view class="button">
						状态选择：{{ state.options[state.value]?.label }}
					</view>
					<template v-slot:right>
						<view>✅</view>
					</template>
				</pop-selector>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import popSelector from './popSelector.vue'
import { reactive } from 'vue';

const state = reactive({
  options: [
		{
			label: '全部',
			value: 0,
		},
		{
			label: '成功',
			value: 1,
		},
		{
			label: '失败',
			value: 2,
		},
		{
			label: '禁用',
			disabled: true,
			value: 3,
		},
	],
	value: 0,
	darkStyle: {
		color: '#fff',
		background: '#000',
		border: '1px solid #ebeef5',
		borderRadius: '6px',
		boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
		padding: '4px 0',
		fontSize: '26rpx'
	}
});
const onChangeSelect = (e: any) => {
	console.log(e);
  state.value = e.value;
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
	display: flex;
	justify-content: space-between;
	background: #f1f1f1;
	margin: 40rpx 10rpx;
	padding: 30rpx;
	border-radius: 12rpx;
}
.header {
	display: flex;
	align-items: center;
}
.button {
	background: #fff;
	padding: 16rpx 30rpx;
	border-radius: 10rpx;
}
</style>
