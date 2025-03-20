<template>
	<view>
		<view>
			<view class="title">默认样式：</view>
			<view class="comp">
				<wo-dropdown-menu :options="options"></wo-dropdown-menu>
			</view>
		</view>
		<view>
			<view class="title">自定义样式：</view>
			<view style="border: 1px solid #999; margin: 5px; font-size: 12px; border-radius: 5px;">
				<wo-dropdown-menu></wo-dropdown-menu>
			</view>
			<view class="comp-dark">
				<wo-dropdown-menu :options="options" :default-value="4" @change="onChange"></wo-dropdown-menu>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			options: [
				{
					label: "荆轲",
					value: 1
				},
				{
					label: "李白",
					value: 2
				},
				{
					label: "杜甫",
					value: 3
				},
				{
					label: "白居易",
					value: 4
				},
				{
					label: "王维",
					value: 5
				},
				{
					label: "李清照",
					value: 6
				},
				{
					label: "苏轼",
					value: 7
				}
			]
		};
	},
	methods: {
		onChange(data) {
			console.log('选择值：', data);
		}
	}
};
</script>

<style lang="scss" scoped>
.title {
	font-size: 12px;
	color: #999;
	padding: 10px 0 0 10px;
}

.comp {
	font-size: 12px;
}

.comp-dark {
	margin: 5px;
	background-color: black;
	color: white;
	font-size: 12px;
	border-radius: 5px;
}
</style>
