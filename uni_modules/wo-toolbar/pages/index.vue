<template>
	<view style="padding: 0.4em; font-size: 1.7em; height: 60vh;">
		<view class="flex-center">
				<view class="bg-circle">
					<ToolbarComp style="border-radius: inherit;" orientation="vertical"></ToolbarComp>
				</view>
			</view>
		<view class="flex-center" style="padding-top: 60px;">
			<view class="flex-center bg-circle">
				<ToolbarComp style="border-radius: inherit;" default-value="browsers"></ToolbarComp>
			</view>
		</view>
		<view class="flex-center" style="padding-top: 60px; width: 100%;">
			<view style="width: 100%;" class="flex-center bg-circle">
				<ToolbarComp style="border-radius: inherit;" default-value="iphone" :options="toolbarOptions" @onChange="handleChange"></ToolbarComp>
			</view>
		</view>
		<view class="flex-center" style="padding-top: 60px; width: 100%;">
			<view style="width: 100%;" class="flex-center bg-react">
				<ToolbarComp style="border-radius: inherit;" default-value="facebook" :options="toolbarOptions"></ToolbarComp>
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
		return {
			toolbarOptions: [
        { icon: "https://img.icons8.com/?size=100&id=56579&format=png&color=ffffff", label: "Unsplash", value: "unsplash" },
        { icon: "https://img.icons8.com/?size=100&id=890&format=png&color=ffffff", label: "iphone", value: "iphone" },
        { icon: "https://img.icons8.com/?size=100&id=12412&format=png&color=ffffff", label: "Browsers", value: "browsers" },
        { icon: "https://img.icons8.com/?size=100&id=118504&format=png&color=ffffff", label: "Facebook", value: "facebook" },
        { icon: "https://img.icons8.com/?size=100&id=3529&format=png&color=ffffff", label: "Pinterest", value: "pinterest" },
      ]
		}
	},
	methods: {
		handleChange(e) {
			console.log('selected：', e);
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
.bg-circle {
	background-color: hsl(0, 0%, 10%);
	border-radius: 1em;
}
.bg-react {
	background-color: hsl(0, 0%, 10%);
	border-radius: 0.4em;
}
</style>