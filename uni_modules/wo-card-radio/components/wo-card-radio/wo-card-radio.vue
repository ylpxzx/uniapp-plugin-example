<template>
	<view class="layout" :style="{'--radio-primary': props.styleObj.primary, '--radio-selected-bg': props.styleObj.selectedBg, '--radio-unselected-color': props.styleObj.unselectedRadioBg}">
		<view class="radio-layout" v-for="(item, index) in state.items" :key="index" @click="onChange(item, index)" :class="{ active: state.current === index}">
			<view class="radio"></view>
			<view class="label">{{ item.label }}</view>
			<view class="card card--sm" :style="{ backgroundImage: item.cardLinearColor }">
				<view class="card__chip"></view>
				<view class="card__content">
					<view>
						<view class="text__row">
							<view class="text__loader"></view>
							<view class="text__loader"></view>
						</view>
						<view class="text__row">
							<view class="text__loader"></view>
							<view class="text__loader"></view>
						</view>
					</view>
					<view class="card__symbol">
						<view class="circle"></view>
						<view class="circle"></view>
					</view>
				</view>
			</view>
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
			};
	  }>(),
	  {
	    options: () => [
				{
					value: 'test',
					label: '中国农业银行',
					cardLinearColor: 'linear-gradient(45deg, #89c888, #1BA035)'
				},
				{
					value: 'test2',
					label: '中国工商银行',
					cardLinearColor: 'linear-gradient(45deg, #ff8c75, #FF4A3B)'
				},
				{
					value: 'test3',
					label: '中国建设银行',
					cardLinearColor: 'linear-gradient(45deg, #748DFB, #3859E8)'
				},
			],
			defaultValue: 'test2',
			styleObj: () => {
				return {
					primary: 'blue',
					unselectedRadioBg: '#eaeaea',
					selectedBg: '#f1f1f1',
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
		current: getIndex(props.defaultValue)
	});
	const onChange = (data, index: number) => {
		state.current = index
		$emit('onChange', { data, index });
	}
</script>
<style scoped>
.layout {
	gap: 12px;
	display: flex;
	flex-direction: column;
}
.radio-layout {
	position: relative;
	display: grid;
	align-items: center;
	grid-template-columns: 20px auto 100px;
	height: 62px;
	border-radius: 6px;
	border: 2px solid transparent;
	background-color: transparent;
	transition: all 300ms ease-in;
	padding: 0 16px;
}
/* 初始化小碎花 */
.radio-layout::after {
	position: absolute;
	left: 29px;
	border-radius: 50%;
	content: '';
	width: 5px;
	height: 5px;
	box-shadow: -0.5rem -1rem 0 -0.1rem #ff8080,
							-0.1rem -1.2rem 0 -0.1rem #ffed80,
							0.4rem -0.8rem 0 -0.1rem #ffed80,
							1rem -0.5rem 0 -0.1rem #a4ff80,
							0.4rem 0.6rem 0 -0.1rem #80ffc8,
							1rem 0.8rem 0 -0.1rem #80c8ff,
							-1.2rem -0.3rem 0 -0.1rem #a4ff80,
							-0.1rem 1rem 0 -0.1rem #80c8ff,
							-0.8rem 1.4rem 0 -0.1rem #a480ff,
							-1.5rem 0.1rem 0 -0.1rem #a480ff,
							-1rem 0.7rem 0 -0.1rem #ff80ed,
							-1rem -1rem 0 -0.1rem #ff80ed,
							-1rem -1rem 0 -0.1rem #ff8080;
}
.radio-layout:hover {
	border-color: var(--radio-primary);
	background-color: var(--radio-selected-bg);
}
.active {
	border-color: var(--radio-primary);
	background-color: var(--radio-selected-bg);
}
.active::after {
	will-change: opacity, box-shadow;
	animation: sparkles 700ms ease-in-out;
}
/* 初始化圆点 */
.radio-layout > .radio {
	position: relative;
	display: inline-flex;
	width: 20px;
	height: 20px;
	border-radius: 20px;
	border: 2px solid var(--radio-unselected-color);
	background-image: linear-gradient(to bottom, var(--radio-unselected-color), var(--radio-unselected-color));
}
.active > .radio {
	will-change: transform;
	border: 0;
	background-image: linear-gradient(to top right, var(--radio-primary), var(--radio-primary));
	animation: radio 400ms cubic-bezier(.17, .89, .32, 1.49);
}
.active > .radio::after {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 6px;
	height: 6px;
	border-radius: 10px;
	background-color: #fff;
}
.active .card {
	will-change: box-shadow;
	animation: card 500ms ease-in-out forwards;
}
.active .card::after {
	will-change: transform;
	animation: shine 500ms ease-in forwards;
	animation-delay: 100ms;
}
.label {
	padding-left: 16px;
}
/* 默认卡片样式 */
.card {
	position: relative;
	width: 243px;
	height: 152px;
	padding: 22px 24px;
	border-radius: 16px;
	box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.25);
	background-image: linear-gradient(45deg, #FFF, #CDCDCD);
	overflow: hidden;
}
/* 初始化波纹动画 */
.card:after {
	content: "";
	position: absolute;
	top: 0;
	bottom: 0;
	width: 40px;
	transform: translateX(-70px);
	background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
}
/* 缩小卡片 */
.card--sm {
	position: absolute;
	right: -96px;
	transform: scale(0.24);
}
/* 卡片左上角圆角矩形样式 */
.card__chip {
	width: 39px;
	height: 28px;
	border-radius: 7px;
	border: 1px solid rgba(102, 84, 50, 0.5);
	box-shadow: inset 1px 1px 0px rgba(179, 146, 86, 0.5);
	background-image: linear-gradient(90deg, #D0A963, #FFE6BA);
}
/* 卡片内容区 */
.card__content {
	display: flex;
	justify-content: space-between;
	margin-top: 46px;
}
.text__row {
	display: grid;
	grid-template-columns: 54px 64px;
	grid-gap: 6px;
}
.text__loader {
	height: 13px;
	border-radius: 2px;
	background-color: rgba(0, 0, 0, 0.4);
}
.text__row:last-of-type {
	grid-template-columns: 45px 54px;
	margin-top: 7px;
}
/* 卡片双圆相交样式 */
.card__symbol {
	display: flex;
}
.card__symbol .circle {
	display: block;
	width: 30px;
	height: 30px;
	border-radius: 30px;
	background-color: #FB4646;
}
.card__symbol .circle:last-child {
	background-color: rgba(255, 163, 55, 0.75);
	margin-left: -13px;
}
@keyframes radio {
	0%, 17.5% {
		transform: scale(0);
	}
}
@keyframes card {
	0% { box-shadow: 0 1px 0 0 rgba(#fff, 0.25); transform: scale(0.24) }
	45% { box-shadow: 0 12px 32px 0 rgba(#000, 0.5); transform: scale(0.25) }
	100% { box-shadow: 0 4px 12px 0 rgba(#000, 0.4); transform: scale(0.24) }
}
@keyframes shine {
	from { transform: translateX(-70px) rotate(10deg); }
	to { transform: translateX(300px) rotate(10deg); }
}
@keyframes sparkles {
	0%, 10% {
		opacity: 0;
		transform: scale(0);
	}
	15% {
		opacity: 1;
		transform: scale(1.2) rotate(-20deg);
		box-shadow: -0.5rem -1rem 0 0.05rem #ff8080,
							-0.1rem -1.2rem 0 0.05rem #ffed80,
							0.4rem -0.8rem 0 0.05rem #ffed80,
							1rem -0.5rem 0 0.05rem #a4ff80,
							0.4rem 0.6rem 0 0.05rem #80ffc8,
							1rem 0.8rem 0 0.05rem #80c8ff,
							-1.2rem -0.3rem 0 0.05rem #a4ff80,
							-0.1rem 1rem 0 0.05rem #80c8ff,
							-0.8rem 1.4rem 0 0.05rem #a480ff,
							-1.5rem 0.1rem 0 0.05rem #a480ff,
							-1rem 0.7rem 0 0.05rem #ff80ed,
							-1rem -1rem 0 0.05rem #ff80ed,
							-1rem -1rem 0 0.05rem #ff8080;
	}
}
</style>
