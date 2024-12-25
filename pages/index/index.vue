<template>
	<view class="content">
		<view>
			<view>
				<view style="margin-bottom: 30rpx;">简约效果</view>
				<view style="display: flex; gap: 8rpx; flex-wrap: wrap;">
					<button size="mini" @click="onPop('info', '你已完成今日打卡', false)">普通态</button>
					<button size="mini" @click="onPop('success', '恭喜预约成功', false)">成功态</button>
					<button size="mini" @click="onPop('warn', '请仔细检查内容', false)">警告态</button>
					<button size="mini" @click="onPop('error', '接口返回错误', false)">错误态</button>
				</view>
			</view>
			<view>
				<view style="margin-bottom: 30rpx;">深色效果</view>
				<view style="display: flex; gap: 8rpx; flex-wrap: wrap;">
					<button size="mini" @click="onPop('info', '你已完成今日打卡', true)">普通态</button>
					<button size="mini" @click="onPop('success', '恭喜预约成功', true)">成功态</button>
					<button size="mini" @click="onPop('warn', '请仔细检查内容', true)">警告态</button>
					<button size="mini" @click="onPop('error', '接口返回错误', true)">错误态</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import messageBox from '../../ui/message/message';
const onPop = (status: string, info: string, isDeep: boolean) => {
	messageBox(status, info, null, isDeep);
}
</script>

<style scoped>
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40rpx;
		font-size: 28rpx;
	}
</style>
