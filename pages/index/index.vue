<template>
	<view class="main">
		<view class="box">
			<view class="flex-center sub-title">内容未超过父元素宽度则不滚动</view>
			<wo-infinite-scroll :speed="10" v-model:options="state.items">
			</wo-infinite-scroll>
		</view>
		<view class="box">
			<view class="flex-center sub-title">内容超过父元素宽度则滚动</view>
			<wo-infinite-scroll :speed="10">
			</wo-infinite-scroll>
		</view>
		<view class="box">
			<view class="flex-center sub-title">滚动速度配置</view>
			<wo-infinite-scroll :speed="6">
			</wo-infinite-scroll>
		</view>
		<view class="box">
			<view class="flex-center sub-title">滚动内容自定义</view>
			<wo-infinite-scroll :speed="15"
				style="mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);">
			</wo-infinite-scroll>
			<wo-infinite-scroll :speed="20"
				:style-obj="{ background: '#4caf50', color: 'white', borderRadius: '5px', padding: '5px 15px', margin: '4px 5px' }"
				v-model:options="state.messages">
			</wo-infinite-scroll>
		</view>
	</view>

</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
	items: [
		{
			label: 'HTML',
		},
		{
			label: 'CSS',
		},
		{
			label: 'JavaScript',
		},
	],
	messages: [
		{
			label: '全球动画电影票房冠军！《哪吒之魔童闹海》香港首映礼举行!'
		},
		{
			label: '美国务卿：美俄两国同意恢复驻华盛顿和莫斯科大使馆的人员配置'
		},
		{
			label: '2月18日，在《新闻联播》中，王传福、雷军等民营企业家和国家发改委、工信部等国家部委相关负责人出镜接受采访。'
		},
	],
});
</script>

<style lang="scss" scoped>
.main {
	font-size: 0.8rem;
	padding: 10px 0;
}

.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.sub-title {
	color: #222
}

.box {
	padding: 0 0 20px 0;
}

.item-box-1 {
	display: flex;
	background-color: #4caf50;
	color: white;
	padding: 5px 10px;
	border-radius: 5px;
}

.item-box-2 {
	display: flex;
	background-color: #FE8973;
	color: white;
	padding: 5px 10px;
	border-radius: 5px;
}

.item-box-3 {
	width: fit-content;
	height: 50px;
	border-radius: 5px;
	background-color: #4caf50;
	padding: 10px;
	color: white;
}
</style>
