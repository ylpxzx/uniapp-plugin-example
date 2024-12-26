<template>
	<view class="radio-form">
		<view>
			<view class="radio-label" @click="onSelected('A', 0)" :class="{ 'radio-label-active': state.current === 0 }">
				<view class="radio-layout">
					<view class="radio-frame" :class="{ 'radio-frame-active': state.current === 0 }"></view>
					<view class="radio-content">A</view>
				</view>
			</view>
			<view class="radio-label" @click="onSelected('B', 1)" :class="{ 'radio-label-active': state.current === 1 }">
				<view class="radio-layout" style="height: 100%;">
					<view class="radio-frame" :class="{ 'radio-frame-active': state.current === 1 }"></view>
					<view class="radio-content" style="display: flex; justify-content: center; align-items: center;">
						<view>辩题</view>
					</view>
				</view>
			</view>
			<view class="radio-label" @click="onSelected('C', 2)" :class="{ 'radio-label-active': state.current === 2 }">
				<view class="radio-layout">
					<view class="radio-frame" :class="{ 'radio-frame-active': state.current === 2 }"></view>
					<view class="radio-content">C</view>
				</view>
			</view>
			<view class="radio-label" @click="onSelected('C', 3)" :class="{ 'radio-label-active': state.current === 3 }">
				<view class="radio-layout">
					<view class="radio-frame" :class="{ 'radio-frame-active': state.current === 3 }"></view>
					<view class="radio-content">C</view>
				</view>
			</view>
			<view class="radio-label" @click="onSelected('C', 4)" :class="{ 'radio-label-active': state.current === 4 }">
				<view class="radio-layout">
					<view class="radio-frame" :class="{ 'radio-frame-active': state.current === 4 }"></view>
					<view class="radio-content">C</view>
				</view>
			</view>
			<view class="radio-label" @click="onSelected('C', 5)" :class="{ 'radio-label-active': state.current === 5 }">
				<view class="radio-layout">
					<view class="radio-frame" :class="{ 'radio-frame-active': state.current === 5 }"></view>
					<view class="radio-content">C</view>
				</view>
			</view>
			<view class="radio-label" @click="onSelected('C', 6)" :class="{ 'radio-label-active': state.current === 6 }">
				<view class="radio-layout">
					<view class="radio-frame" :class="{ 'radio-frame-active': state.current === 6 }"></view>
					<view class="radio-content">C</view>
				</view>
			</view>
			<view class="radio-label" @click="onSelected('C', 7)" :class="{ 'radio-label-active': state.current === 7 }">
				<view class="radio-layout">
					<view class="radio-frame" :class="{ 'radio-frame-active': state.current === 7 }"></view>
					<view class="radio-content">C</view>
				</view>
			</view>
			<view class="worm">
				<view class="worm__segment" :style="{transform: `translateY(${state.translateYValue}em)`}"></view>
			</view>
		</view>
	</view>
</template>
<script setup lang="ts">
	import { reactive } from 'vue';
	const state = reactive({
		current: 0,
		value: '',
		translateYValue: 0
	});
	const onSelected = (data: any, index: number) => {
		state.current = index
		state.value = data
		state.translateYValue = index * 2.81
	}
</script>
<style scoped>
.radio-form {
	position: relative;
}

.radio-label {
	cursor: pointer;
	display: block;
	font-weight: bold;
	transition: color 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.radio-label-active {
	transition-delay: 0.4s; 
	color: #5583f6;
}

.radio-layout {
	display: flex;
	gap: 2px;
}

.radio-label:not(:last-of-type) {
  margin-bottom: 1.5em;
}

.radio-frame {
	/*无框设置、阴影设置、拟态主题*/
	box-shadow: 0 0 0 0.1em currentColor;
	/* border: 0.1em solid currentColor; */
	display: inline-block;
	margin-right: 0.5em;
	vertical-align: bottom;
	width: 1em;
	height: 1em;
	transition: transform 0.2s cubic-bezier(0.5, 0, 0.5, 2), box-shadow 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95), color 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.radio-frame-active {
	transition-delay: 0.4s; 
	transform: scale(1.2); 
	color: #5583f6;
}

.radio-label .radio-frame,
.worm__segment:before {
  border-radius: 50%;
}

.worm, .worm__segment {
  position: absolute; 
}

.worm {
  top: 0.16em;
	left: 0.16em; 
}

.worm__segment {
  top: 0;
  left: 0;
  width: 0.65em;
	height: 0.65em;
  transition: transform 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}
.worm__segment:before {
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  background: currentColor;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
	color: #5583f6;
}
.worm__segment:first-child:before, .worm__segment:last-child:before {
  box-shadow: 0 0 1em 0 currentColor;
}
@keyframes hop {
	from, to {
		transform: translateX(0);
	 }
	50% {
		transform: translateX(-1.5em);
	 }
}
.circle:before {
  animation-name: hop; 
}
</style>
