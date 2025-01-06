<template>
	<view>
		<view class="light" style="background-color: white">
			<view>
				<view class="flex-center">默认样式</view>
				<wo-radio-hopping></wo-radio-hopping>
			</view>
		</view>
		<view class="light" style="background-color: white">
			<view class="flex-center">数据集、默认选中、选中事件</view>
			<wo-radio-hopping v-model:options="state.items" v-model:defaultValue="state.default" @on-change="changeEvent"></wo-radio-hopping>
		</view>
		<view class="light" style="background-color: white">
			<view>
				<view class="flex-center">条状动画</view>
				<wo-radio-hopping :lineAnimation="true"></wo-radio-hopping>
			</view>
		</view>
		<view class="light" style="background-color: white">
			<view>
				<view class="flex-center">主题色</view>
				<wo-radio-hopping :primary="'#55bc8a'"></wo-radio-hopping>
			</view>
		</view>
		<view class="light" style="background-color: white">
			<view>
				<view class="flex-center">方框</view>
				<wo-radio-hopping :circle="false"></wo-radio-hopping>
			</view>
		</view>
		<view class="light" style="background-color: white">
			<view>
				<view class="flex-center">选择框样式(通过css的box-shadow属性去设置)</view>
				<wo-radio-hopping :frameBoxShadow="''"></wo-radio-hopping>
				<wo-radio-hopping :frameBoxShadow="'0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 1px rgba(0, 0, 0, 0.2) inset'"></wo-radio-hopping>
			</view>
		</view>
		<view class="light" style="background-color: white">
			<view style="padding: 0 20px;">
				<view class="flex-center">插槽自定义内容</view>
				<wo-radio-hopping v-model:options="state.items" v-slot="slotProps" @on-change="changeEvent">
					<view style="display: flex; justify-content: space-between;padding: 10px;">
						<view>{{ slotProps.data.label }}</view>
						<view class="tag">{{ slotProps.data.tag }}</view>
					</view>
				</wo-radio-hopping>
			</view>
		</view>
		<view class="dark">
			<view>
				<view class="flex-center">暗黑模式</view>
				<wo-radio-hopping v-model:options="state.items" v-slot="slotProps" @on-change="changeEvent">
					<view style="display: flex; justify-content: space-between;">
						<view>{{ slotProps.data.label }}</view>
						<view class="tag">{{ slotProps.data.tag }}</view>
					</view>
				</wo-radio-hopping>
			</view>
		</view>
	</view>
	
</template>

<script setup lang="ts">
	import { reactive } from 'vue';
	const state = reactive({
	  items: [{
				value: '1',
				label: '苹果味',
				tag: '饮料'
			},
			{
				value: '2',
				label: '香蕉味',
				tag: '酒水'
			},
			{
				value: '3',
				label: '火龙果味',
				tag: '饮料'
			},
			{
				value: '4',
				label: '西瓜味',
				tag: '饮料'
			},
			{
				value: '5',
				label: '哈密瓜味',
				tag: '酒水'
			},
			{
				value: '6',
				label: '榴莲味',
				tag: '酒水'
		}],
		default: '4',
	});
	const changeEvent = (el) => {
		console.log('点击：', el);
	}
</script>

<style lang="scss" scoped>
	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.light {
		border-radius: 10px;
		padding: 20rpx;
		font-size: 24rpx;
		background-color: hsl(223,90%,90%);
		overflow: auto;
	}
	.dark {
		border-radius: 10px;
		padding: 20rpx;
		font-size: 24rpx;
		background-color: hsl(223,90%,10%);
		color: white;
		overflow: auto;
	}
	.tag {
		background-color: #1BA035;
		color: white;
		font-size: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		padding: 0 4px;
	}
</style>
