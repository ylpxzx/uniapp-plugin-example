<template>
	<view
		:style="{ '--radio-primary': props.styleObj.primary, '--radio-selected-bg': props.styleObj.selectedBg, '--radio-unselected-color': props.styleObj.unselectedRadioBg, '--radio-height': `${props.styleObj.height}px` }">
		<view style="position: relative;">
			<view id='radios' v-for="(item, index) in state.items" :key="index" @click="onChange(item, index)"
				class="item-layout" :class="{ itemActive: state.current === index }">
				<view class="circle" :class="{ circleActive: state.current === index }"></view>
				<view>
					<slot :data="item">{{ item.name }}</slot>
				</view>
			</view>
			<view class="layer"
				:style="{ transform: `translateY(${state.moveTo}px)`, height: `${30 + props.styleObj.height}px` }"></view>
		</view>
	</view>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
const props = withDefaults(
	defineProps<{
		options: any[];
		defaultValue: any;
		styleObj: {
			primary: string;
			unselectedRadioBg: string;
			selectedBg: string;
			height: number
		};
	}>(),
	{
		options: () => [],
		defaultValue: '',
		styleObj: () => {
			return {
				primary: 'blue',
				unselectedRadioBg: '#eaeaea',
				selectedBg: 'hsla(0,0%,100%,0.5)',
				height: 20
			}
		}
	}
);
const $emit = defineEmits<{
	(e: 'onChange', ev: any): void;
}>();
const getIndex = (value) => {
	let valueIndex = 0
	for (let i = 0; i < props.options.length; i++) {
		if (props.options[i].value === value) {
			valueIndex = i
		}
	}
	return valueIndex
}
const state = reactive({
	items: props.options,
	current: getIndex(props.defaultValue),
	moveTo: getIndex(props.defaultValue) * (40 + props.styleObj.height)
});

const onChange = (data, index: number) => {
	state.current = index
	state.moveTo = index * (40 + props.styleObj.height)
	$emit('onChange', { data, index });
}
</script>
<style scoped>
.item-layout {
	display: flex;
	justify-content: space-between;
	position: relative;
	border-radius: 20rpx;
	display: flex;
	align-items: center;
	padding: 15px;
	height: var(--radio-height);
	margin-bottom: 10px;
}

.item-layout:hover {
	background-color: var(--radio-selected-bg);
}

.itemActive {
	background-color: var(--radio-selected-bg);
}

.circle {
	background-color: var(--radio-unselected-color);
	border-radius: 50%;
	position: relative;
	width: 20px;
	height: 20px;
}

.circle:before {
	border-radius: 50%;
	content: "";
	display: block;
	position: absolute;
	transform: scale(0);
	transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
	background-color: var(--radio-primary);
	top: 0;
	left: 0;
	width: 20px;
	height: 20px;
}

.circle:after {
	border-radius: 50%;
	content: "";
	display: block;
	position: absolute;
	transform: scale(0);
	transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
	background-color: hsl(0, 0%, 100%);
	top: 30%;
	left: 30%;
	width: 40%;
	height: 40%;
}

.circleActive:before {
	transform: scale(1);
}

.circleActive:after {
	transform: scale(1);
}

.layer {
	border-radius: 0.75em;
	box-shadow: 0 0 0 0.125em var(--radio-primary) inset;
	display: none;
	pointer-events: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
	animation: fade-in 0.3s cubic-bezier(0.65, 0, 0.35, 1);
	display: inherit;
}

@keyframes fade-in {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
</style>
