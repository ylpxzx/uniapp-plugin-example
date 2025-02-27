<template>
	<view>
		<view>值：{{ state.val }}</view>
		<view class="light">
			<wo-spinner v-model:defaultValue="state.normalVal" @on-change="changeEvent"></wo-spinner>
			<wo-spinner v-model:defaultValue="state.warningVal"></wo-spinner>
			<wo-spinner v-model:defaultValue="state.abnormalVal"></wo-spinner>
			<wo-spinner :spinnerHeight="'300px'" :spinnerWidth="'70px'" :spinnerRadius="'40px'"
				:progressWidth="'30px'"></wo-spinner>
			<wo-spinner v-model:defaultValue="state.defaultVal" :spinnerBgColor="'#0079FF'" :progressBgColor="'#ADE8FF'"
				:maxNumber="10" :middleNumber="0" :criticalNumber="7" :startColor="'#f00'" :middleColor="'#ff0'"
				:targetColor="'#269446'"></wo-spinner>
		</view>
	</view>

</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
	normalVal: 45,
	warningVal: 72,
	abnormalVal: 92,
	defaultVal: 3,
	val: 45
});
const changeEvent = (el) => {
	console.log('点击：', el);
	state.val = el.value;
}
</script>

<style lang="scss" scoped>
.light {
	color: #fff;
	padding: 20rpx;
	font-size: 24rpx;
	margin: 20px;
	display: flex;
	gap: 20px;
}
</style>
