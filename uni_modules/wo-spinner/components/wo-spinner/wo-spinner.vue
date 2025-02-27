<template>
	<view :style="{
		'--spinner-height': props.spinnerHeight,
		'--spinner-width': props.spinnerWidth,
		'--spinner-bg-color': props.spinnerBgColor,
		'--spinner-radius': props.spinnerRadius,
		'--progress-width': props.progressWidth,
		'--progress-bg-color': props.progressBgColor,
		'--color': state.color,
	}">
		<view class="box">
			<view class="spinner">
				<span class="output">{{ state.spinnerNumber }}</span>
				<view class="progress">
					<span class="meter" :style="state.meterStyle"></span>
				</view>
				<view class="btn plus" @click="onPlus" @touchstart="startLongPressPlus" @touchend="stopLongPress">+</view>
				<view class="btn minus" @click="onMinus" @touchstart="startLongPressMinus" @touchend="stopLongPress">-</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { reactive, watch, onMounted } from 'vue';
const props = withDefaults(
	defineProps<{
		startColor: string;  // 色标起始色
		middleColor: string;  // 色标中间色
		targetColor: string;  // 色标最终色
		maxNumber: number;  // 色标最大值
		middleNumber: number;  // 色标中间值
		criticalNumber: number;  // 色标临界值
		spanNumber: number;  // 色标增减跨度
		defaultValue: number;  // 色标默认值
		spinnerHeight: string;  // 容器高度
		spinnerWidth: string;  // 容器宽度
		spinnerBgColor: string;  // 容器背景色
		spinnerRadius: string;  // 容器圆角
		progressWidth: string;  // 色标宽度
		progressBgColor: string;  // 色标背景色
	}>(),
	{
		startColor: '#0f0',
		middleColor: '#ff0',
		targetColor: '#f00',
		maxNumber: 100,
		spanNumber: 1,
		middleNumber: 70,
		criticalNumber: 90,
		defaultValue: 0,
		spinnerHeight: '400px',
		spinnerWidth: '50px',
		spinnerBgColor: '#333',
		spinnerRadius: '10px',
		progressWidth: '12px',
		progressBgColor: '#222',
	}
);
const $emit = defineEmits<{
	(e: 'onChange', ev: any);
}>();
const state = reactive({
	spinnerNumber: props.defaultValue,
	meterStyle: {
		height: '0'
	},
	color: props.startColor,
	startColor: props.startColor,
	middleColor: props.middleColor,
	targetColor: props.targetColor,
	maxNumber: props.maxNumber,
	spanNumber: props.spanNumber,
	middleNumber: props.middleNumber,
	criticalNumber: props.criticalNumber
})

watch(() => props.defaultValue, (val) => {
	state.color = props.startColor
	if (props.criticalNumber && val > props.criticalNumber) {
		state.color = props.targetColor
	}
	if (props.middleNumber && val > props.middleNumber) {
		state.color = props.middleColor
	}
	state.spinnerNumber = val

	state.meterStyle.height = (state.spinnerNumber / state.maxNumber) * 100 + '%';
})

let interval = null;

const onPlus = () => {
	if (state.spinnerNumber >= state.maxNumber) {
		return;
	}
	if (state.middleNumber && state.spinnerNumber >= state.middleNumber) {
		state.color = state.middleColor
	}
	if (state.criticalNumber && state.spinnerNumber >= state.criticalNumber) {
		state.color = state.targetColor
	}
	state.spinnerNumber = state.spinnerNumber + state.spanNumber;
	state.meterStyle.height = (state.spinnerNumber / state.maxNumber) * 100 + '%';
	$emit('onChange', { value: state.spinnerNumber });
}

const onMinus = () => {
	if (state.spinnerNumber <= 0) {
		return;
	}
	if (state.criticalNumber && state.spinnerNumber <= state.criticalNumber) {
		state.color = state.middleColor
	}
	if (state.middleNumber && state.spinnerNumber <= state.middleNumber) {
		state.color = state.startColor
	}
	state.spinnerNumber = state.spinnerNumber - state.spanNumber
	state.meterStyle.height = (state.spinnerNumber / state.maxNumber) * 100 + '%';
	$emit('onChange', { value: state.spinnerNumber });
}
const startLongPressPlus = () => {
	interval = setInterval(() => {
		onPlus();
		if (state.spinnerNumber >= state.maxNumber) {
			clearInterval(interval);
		}
	}, 100);
}

const startLongPressMinus = () => {
	interval = setInterval(() => {
		onMinus();
		if (state.spinnerNumber <= 0) {
			clearInterval(interval);
		}
	}, 100);
}

const stopLongPress = () => {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}
}

onMounted(() => {
	state.color = props.startColor
	if (props.middleNumber && state.spinnerNumber > props.middleNumber) {
		state.color = props.middleColor
	}
	if (props.criticalNumber && state.spinnerNumber > props.criticalNumber) {
		state.color = props.targetColor
	}
	state.meterStyle.height = (state.spinnerNumber / state.maxNumber) * 100 + '%';
})
</script>

<style>
.box {
	width: var(--spinner-width);
	height: var(--spinner-height);
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--spinner-bg-color);
	border-radius: var(--spinner-radius);
}

.spinner {
	position: relative;
	gap: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
}

.progress {
	position: relative;
	width: var(--progress-width);
	background: var(--progress-bg-color);
	height: calc(var(--spinner-height) - 180px);
	border-radius: var(--spinner-radius);
	display: flex;
	flex-direction: column-reverse;
}

.progress .meter {
	position: absolute;
	width: 100%;
	background: var(--color);
	border-radius: 20px;
	filter: drop-shadow(0 0 2.5px var(--color)) drop-shadow(0 0 10px var(--color));
	transition: 0.4s;
}

.btn {
	position: relative;
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	font-size: 1.5em;
	border-radius: 50%;
	cursor: pointer;
	font-weight: 500;
}

.btn:active {
	font-size: 1.25em;
	box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.9);
}

.output {
	position: relative;
	font-size: 1.2em;
	text-shadow: 0 0 5px #fff;
}
</style>
