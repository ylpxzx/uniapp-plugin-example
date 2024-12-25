<template>
	<view>
		<view class="name">按钮组组件: wo-btn-group</view>
		<view class="card">
			<view class="header">默认样式(包括disabled禁用)：</view>
			<view class="content">
				<woBtnGroup :default-value="state.value" @change="onChange"></woBtnGroup>
			</view>
		</view>
		<view class="card">
			<view class="header">按钮形状：椭圆(默认)、方形、圆形</view>
			<view class="content">
				<view class="box">
					<view class="title">默认椭圆：</view>
					<woBtnGroup :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box">
					<view class="title">方形：</view>
					<woBtnGroup :shape="'space'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box">
					<view class="title">圆形（圆形无边框）：</view>
					<woBtnGroup :shape="'round'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="header">轮廓：</view>
			<view class="content">
				<view class="box">
					<woBtnGroup outline :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box">
					<woBtnGroup outline :shape="'space'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box">
					<woBtnGroup outline :shape="'round'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="header">自定义颜色：</view>
			<view class="content">
				<view class="box">
					<woBtnGroup outline :color="'orange'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box">
					<woBtnGroup :color="'orange'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="header">自定义边框：</view>
			<view class="content">
				<view class="box">
					<view class="title">无边框：</view>
					<woBtnGroup :border-obj="state.borderStyle1" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box">
					<view class="title">虚线边框：</view>
					<woBtnGroup outline :border-obj="state.borderStyle2" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box">
					<view class="title">圆角幅度：</view>
					<woBtnGroup outline :border-obj="state.borderStyle3" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box">
					<view class="title">边框宽度：</view>
					<woBtnGroup :border-obj="state.borderStyle4" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="header">自定义暗黑模式：</view>
			<view class="content">
				<view class="box dark1">
					<woBtnGroup :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box dark1">
					<woBtnGroup :shape="'round'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box dark dark-border">
					<woBtnGroup :shape="'round'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box dark dark-border">
					<woBtnGroup :border-obj="state.borderStyle1" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box dark dark-border1">
					<woBtnGroup :shape="'space'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
				<view class="box dark dark-border1">
					<woBtnGroup :border-obj="state.borderStyle1" :shape="'space'" :default-value="state.value" :options="state.options" @change="onChange"></woBtnGroup>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import woBtnGroup from './woBtnGroup.vue'
import { reactive } from 'vue';

const state = reactive({
	borderStyle1: {
		isShow: false,
		size: '4rpx',
		style: 'dashed',
		radius: '70rpx'
	},
	borderStyle2: {
		isShow: true,
		size: '4rpx',
		style: 'dashed',
		radius: '70rpx'
	},
	borderStyle4: {
		isShow: true,
		size: '12rpx',
		style: 'solid',
		radius: '70rpx'
	},
	borderStyle3: {
		isShow: true,
		size: '4rpx',
		style: 'solid',
		radius: '16rpx'
	},
	value: 1,
  options: [
    {
      label: '按钮1',
      value: 1,
    },
		{
		  label: '按钮2',
		  value: 2,
			disabled: true
		},
    {
      label: '按钮3',
      value: 3,
    },
		{
		  label: '按钮4',
		  value: 4,
		},
		{
		  label: '按钮5',
		  value: 5,
		},
  ],
});
const onChange = (e: any) => {
	console.log('点击按钮：', e);
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
.title {
	padding-bottom: 10rpx;
}
.box {
	margin: 20rpx
}
.dark1 {
	background-color: black;
	color: #fff;
	border-radius: 70rpx;
}
.dark {
	background-color: black;
	color: #fff;
}
.dark-border {
	padding: 10rpx;
	border-radius: 70rpx;
	border: 6rpx solid #3370FF;
}
.dark-border1 {
	padding: 10rpx;
	border: 6rpx solid #3370FF;
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
	/* padding-bottom: 20rpx; */
	/* background-color: black; */
	/* color: #fff; */
}
/* .btn-border {
	font-size: 28rpx;
	border: 4rpx solid #3370FF;
	padding: 4rpx;
	border-radius: 70rpx;
} */
</style>
