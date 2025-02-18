<template>
	<view>
		<view class="light" style="background-color: white">
			<ewf-demo v-model:options="state.items" v-model:defaultValue="state.default" @on-change="changeEvent">
			</ewf-demo>
		</view>
		<view class="light">
			<ewf-demo v-model:options="state.items" v-model:defaultValue="state.default" v-model:styleObj="state.theme.light"
				v-slot="slotProps" @on-change="changeEvent">
				<view style="display: flex;">
					<view>{{ slotProps.data.name }}</view>
					<view class="tag">{{ slotProps.data.tag }}</view>
				</view>
			</ewf-demo>
		</view>
		<view class="dark">
			<ewf-demo v-model:options="state.items" v-model:defaultValue="state.default" v-model:styleObj="state.theme.dark"
				v-slot="slotProps" @on-change="changeEvent">
				<view style="display: flex;">
					<view>{{ slotProps.data.name }}</view>
					<view class="tag">{{ slotProps.data.tag }}</view>
				</view>
			</ewf-demo>
		</view>
	</view>

</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
	items: [{
		value: '1',
		name: '苹果味',
		tag: '饮料'
	},
	{
		value: '2',
		name: '香蕉味',
		tag: '酒水'
	},
	{
		value: '3',
		name: '火龙果味',
		tag: '饮料'
	},
	{
		value: '4',
		name: '西瓜味',
		tag: '饮料'
	},
	{
		value: '5',
		name: '哈密瓜味',
		tag: '酒水'
	},
	{
		value: '6',
		name: '榴莲味',
		tag: '酒水'
	}],
	default: '2',
	theme: {
		light: {
			primary: 'blue',
			unselectedRadioBg: '#eaeaea',
			selectedBg: 'hsla(0,0%,100%,0.5)',
			height: 20
		},
		dark: {
			primary: 'blue',
			unselectedRadioBg: 'hsl(223,90%,30%)',
			selectedBg: 'hsla(223,90%,30%,0.5)',
			height: 20
		}
	},
	height: 12
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
	background-color: hsl(223, 90%, 90%);
	margin: 20px;
	height: 300px;
	overflow: auto;
}

.dark {
	border-radius: 10px;
	padding: 20rpx;
	font-size: 24rpx;
	background-color: hsl(223, 90%, 10%);
	color: white;
	margin: 20px;
	height: 300px;
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
	margin-left: 5px;
}
</style>
