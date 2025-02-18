<template>
	<view :id="`scroll-main-${state.uniqueId}`" class="scroll" :style="{ '--t': state.speedSecond }">
		<view class="scroll-content scroll-true" :id="`scroll-item-${state.uniqueId}`">
			<view class="item" v-for="(item, index) in state.items" :key="index">
				<slot :data="item">{{ item.label }}</slot>
			</view>
		</view>
		<view class="scroll-content scroll-copy" v-show="state.isShowCopy">
			<view class="item" v-for="(item, index) in state.items" :key="index">
				<slot :data="item">{{ item.label }}</slot>
			</view>
		</view>
	</view>
</template>
<script setup lang="ts">
import { reactive, getCurrentInstance, onMounted } from 'vue';

const generateUniqueID = () => {
	return Math.floor(Math.random() * Date.now()).toString(36);
}
const props = withDefaults(
	defineProps<{
		options: any[];
		speed: number;
	}>(),
	{
		options: () => [
			{
				label: 'HTML',
			},
			{
				label: 'CSS',
			},
			{
				label: 'JavaScript',
			},
			{
				label: '测试1',
			},
			{
				label: 'Vue',
			},
			{
				label: 'React',
			},
			{
				label: 'Figma',
			},
			{
				label: 'Photoshop',
			},
		],
		speed: 10,
	}
);

const state = reactive({
	items: props.options,
	uniqueId: generateUniqueID(),
	speedSecond: `${props.speed}s`,
	isShowCopy: true
});

const init = () => {
	let scrollItemWidth = 0
	let scrollMainWidth = 0
	const instance = getCurrentInstance();
	const query = uni.createSelectorQuery().in(instance.proxy);
	query
		.select(`#scroll-item-${state.uniqueId}`)
		.boundingClientRect((data: any) => {
			scrollItemWidth = data.width
		}).exec();
	query
		.select(`#scroll-main-${state.uniqueId}`)
		.boundingClientRect((data: any) => {
			scrollMainWidth = data.width
		}).exec();
	// 当子元素占据的宽度长于父宽度时滚动，反正不滚动
	if (scrollItemWidth < scrollMainWidth) {
		state.speedSecond = '0s'
		state.isShowCopy = false
	} else {
		state.speedSecond = `${props.speed}s`
		state.isShowCopy = true
	}
}
onMounted(() => {
	init()
})
</script>
<style scoped>
.scroll {
  position: relative;
  display: flex;
  overflow: hidden;
}
.scroll > .scroll-content .item {
  display: inline-block;
  padding: 5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.5s;
}
.scroll > .scroll-content {
  white-space: nowrap;
  animation: animate var(--t) linear infinite;
  animation-delay: calc(var(--t) * -1);
}
@keyframes animate {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.scroll > .scroll-copy {
  animation: animate2 var(--t) linear infinite;
  animation-delay: calc(var(--t) / -2);
}
@keyframes animate2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
.scroll:hover > view {
  animation-play-state: paused;
}
@media screen and (max-width: 768px) {
  .scroll {
    width: 95vw;
  }
}
</style>
