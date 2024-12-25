<template>
	<view>
		<view class="light">
			<wo-card-radio v-model:options="state.items" v-model:defaultValue="state.default" @on-change="changeEvent"></wo-card-radio>
		</view>
		<view class="dark">
			<wo-card-radio v-model:options="state.items" v-model:defaultValue="state.default" v-model:styleObj="state.theme.dark" @on-change="changeEvent"></wo-card-radio>
		</view>
	</view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
	items: [
		{
			value: 'test',
			label: '中国农业银行',
			cardLinearColor: 'linear-gradient(45deg, #89c888, #1BA035)'
		},
		{
			value: 'test2',
			label: '中国工商银行',
			cardLinearColor: 'linear-gradient(45deg, #ff8c75, #FF4A3B)'
		},
		{
			value: 'test3',
			label: '中国建设银行',
			cardLinearColor: 'linear-gradient(45deg, #748DFB, #3859E8)'
		},
		{
			value: 'test2',
			label: '中国华夏银行',
			cardLinearColor: 'linear-gradient(45deg, #616161, #484848)'
		},
	],
	default: 'test3',
	theme: {
			light: {
				primary: 'blue',
				unselectedRadioBg: '#eaeaea',
				selectedBg: 'hsla(0,0%,100%,0.5)',
			},
			dark: {
				primary: 'blue',
				unselectedRadioBg: 'hsl(223,90%,30%)',
				selectedBg: 'hsla(223,90%,30%,0.5)'
			}
	}
});
const changeEvent = (el) => {
	console.log('点击：', el);
}
</script>

<style lang="scss" scoped>
	.light {
		border-radius: 10px;
		padding: 20rpx;
		font-size: 24rpx;
		background-color: hsl(223,90%,90%);
		margin: 20px;
		height: 300px;
		overflow: auto;
	}
	.dark {
		border-radius: 10px;
		padding: 20rpx;
		font-size: 24rpx;
		background-color: hsl(223,90%,10%);
		color: white;
		margin: 20px;
		height: 300px;
		overflow: auto;
	}
</style>
