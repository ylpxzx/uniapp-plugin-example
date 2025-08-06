<template>
	<view>
		<view class="card">
			<view class="title">示例-时间段选择(携带副标题)：{{ state.selectedTime1 }}</view>
			<wo-range-selector @change-time="onChangeTime1" v-model:selected-time="state.defaultValue" v-model:options="state.timeNumberList1"></wo-range-selector>
			<view class="title">示例-时间段选择：</view>
			<wo-range-selector v-model:selected-time="state.defaultValue" v-model:options="state.timeNumberList2"></wo-range-selector>
			<view class="title">示例-日期预约：</view>
			<wo-range-selector v-model:selected-time="state.defaultValue" v-model:options="state.timeNumberList3"></wo-range-selector>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive } from 'vue';
	const generateArray = (start: number, end: number) => {
	  return Array.from(new Array(end + 1).keys()).slice(start);
	};
	const genTestOptions1 = () => {
		const disabledList = [0, 1, 2, 3, 4, 13, 14]
		const timeOptions = [];
		const allNumber = generateArray(0, 23);
		allNumber.forEach((item) => {
		  if (disabledList.includes(item)) {
		    timeOptions.push({
		      disabled: true,
		      label: `${item}:00`,
					subtitle: `${item + 1}:00`,
					value: item
		    });
		  } else {
		    timeOptions.push({
		      disabled: false,
		      label: `${item}:00`,
		      subtitle: `${item + 1}:00`,
					value: item
		    });
		  }
		});
		return timeOptions
	}
	const genTestOptions2 = () => {
		const timeOptions = [];
		const allNumber = generateArray(0, 23);
		allNumber.forEach((item, index) => {
		  timeOptions.push({
		    disabled: false,
		    label: `${item}:00`,
		  	value: item
		  });
		});
		return timeOptions
	}
	const genTestOptions3 = () => {
		const disabledList = [4, 5, 6, 13, 14, 15]
		const timeOptions = [];
		const allNumber = generateArray(1, 30);
		allNumber.forEach((item, index) => {
		  if (disabledList.includes(item)) {
		    timeOptions.push({
		      disabled: true,
		      label: item,
					subtitle: '约满',
					value: item
		    });
		  } else {
		    timeOptions.push({
		      disabled: false,
		      label: item,
		      subtitle: '预约',
					value: item
		    });
		  }
		});
		return timeOptions
	}
	const state = reactive({
	  defaultValue: [9, 11] as any[],
		timeNumberList1: genTestOptions1(),
		timeNumberList2: genTestOptions2(),
		timeNumberList3: genTestOptions3(),
	  nowDay: new Date(),
		selectedTime1: [9, 11] as any[],
	});
	const onChangeTime1 = (e: any) => {
	  if (e.length) {
	    state.selectedTime1 = e;
	  }
	};
</script>

<style lang="scss" scoped>
	.card {
		margin: 20rpx;
		.title {
			margin-top: 40rpx;
			font-size: 28rpx;
			font-weight: 600;
			padding: 20rpx;
		}
	}
</style>
