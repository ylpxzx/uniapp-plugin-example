<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<ewf-demo></ewf-demo>
			<view>{{ title }}</view>
		</view>
	</view>
</template>
<script setup>
import { ref } from 'vue'
import { onReady } from '@dcloudio/uni-app'
const title = ref('Hello')
onReady(() => {
  console.log('组件onReady')
})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
