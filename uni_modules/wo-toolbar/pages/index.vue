<template>
	<view style="padding: 10rpx; font-size: 2em; height: 60vh;" class="flex-center">
		<view>
			<view class="flex-center">
				<view>
					<ToolbarComp orientation="vertical"></ToolbarComp>
				</view>
			</view>
			<view class="flex-center" style="padding-top: 60px;">
				<view>
					<ToolbarComp default-value="facebook"></ToolbarComp>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import ToolbarComp from './comp/toolbarComp.vue';
export default {
	components: {
		ToolbarComp
	},
	data() {
		return {}
	},
	methods: {
		onChange(value) {
			console.log('Selected star rating:', value);
		}
	}
}
</script>

<style scoped>
.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>