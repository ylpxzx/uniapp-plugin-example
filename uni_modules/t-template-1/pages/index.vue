<template>
	<view>
		<view style="padding: 10px;">
			<view class="template-title">模板一：</view>
			<OneTemplate></OneTemplate>
		</view>
		<view style="padding: 10px;">
			<view class="template-title">模板二：</view>
			<TwoTemplate></TwoTemplate>
		</view>
		<view style="padding: 10px;">
			<view class="template-title">模板三：</view>
			<ThreeTemplate></ThreeTemplate>
		</view>
		<view style="padding: 10px;">
			<view class="template-title">模板四：</view>
			<FourTemplate></FourTemplate>
		</view>
		<view style="padding: 10px;">
			<view class="template-title">模板五：</view>
			<FiveTemplate></FiveTemplate>
		</view>
	</view>
</template>

<script>
import OneTemplate from './components/one.vue';
import TwoTemplate from './components/two.vue';
import ThreeTemplate from './components/three.vue';
import FourTemplate from './components/four.vue';
import FiveTemplate from './components/five.vue';
	export default {
		components: {
			OneTemplate,
			TwoTemplate,
			ThreeTemplate,
			FourTemplate,
			FiveTemplate
		},
	  data() {}
	}
</script>

<style scoped>
.template-title {
	font-weight: bold;
	font-size: 14px;
}
</style>