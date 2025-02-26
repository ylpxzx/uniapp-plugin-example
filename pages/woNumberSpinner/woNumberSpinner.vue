<template>
	<view class="layout" :style="{
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
		normalColor: string;
		warningColor: string;
		abnormalColor: string;
		targetNumber: number;
		span: number;
		warningNumber: number;
		abnormalNumber: number;
		defaultValue: number;
		spinnerHeight: string;
		spinnerWidth: string;
		spinnerBgColor: string;
		spinnerRadius: string;
		progressWidth: string;
		progressBgColor: string;
	}>(),
	{
		normalColor: '#0f0',
		warningColor: '#ff0',
		abnormalColor: '#f00',
		targetNumber: 100,
		span: 1,
		warningNumber: 70,
		abnormalNumber: 90,
		defaultValue: 92,
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
	color: props.normalColor,
	normalColor: props.normalColor,
	warningColor: props.warningColor,
	abnormalColor: props.abnormalColor,
	targetNumber: props.targetNumber,
	span: props.span,
	warningNumber: props.warningNumber,
	abnormalNumber: props.abnormalNumber
})

watch(() => props.defaultValue, (val) => {
	state.color = props.normalColor
	if (val > props.abnormalNumber) {
		state.color = props.abnormalColor
	}
	if (val > props.warningNumber) {
		state.color = props.warningColor
	}
	state.spinnerNumber = val
	state.meterStyle.height = state.spinnerNumber + '%';
})

let interval = null;

const onPlus = () => {
	if (state.spinnerNumber >= state.targetNumber) {
		return;
	}
	if (state.spinnerNumber >= state.warningNumber) {
		state.color = state.warningColor
	}
	if (state.spinnerNumber >= state.abnormalNumber) {
		state.color = state.abnormalColor
	}
	state.spinnerNumber = state.spinnerNumber + state.span;
	state.meterStyle.height = state.spinnerNumber + '%';
	$emit('onChange', { value: state.spinnerNumber });
}

const onMinus = () => {
	if (state.spinnerNumber <= 0) {
		return;
	}
	if (state.spinnerNumber <= state.abnormalNumber) {
		state.color = state.warningColor
	}
	if (state.spinnerNumber <= state.warningNumber) {
		state.color = state.normalColor
	}
	state.spinnerNumber = state.spinnerNumber - state.span
	state.meterStyle.height = state.spinnerNumber + '%'
	$emit('onChange', { value: state.spinnerNumber });
}
const startLongPressPlus = () => {
	interval = setInterval(() => {
		onPlus();
		if (state.spinnerNumber >= state.targetNumber) {
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
	state.color = props.normalColor
	if (state.spinnerNumber > props.abnormalNumber) {
		state.color = props.abnormalColor
	}
	if (state.spinnerNumber > props.warningNumber) {
		state.color = props.warningColor
	}
	state.meterStyle.height = state.spinnerNumber + '%';
})
</script>

<style>
.layout {
	color: #fff;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.box {
	width: var(--spinner-width);
	height: var(--spinner-height);
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--spinner-bg-color);
	border-radius: var(--spinner-radius);
	/* box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5); */
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
