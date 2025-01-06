<template>
	<view class="radio-form" :style="{'--radio-primary': props.primary, '--radio-frame-radius': props.circle ? '50%' : '0', '--radio-frame-box-shadow': props.frameBoxShadow}">
		<view>
			<view v-for="(item, index) in state.data" class="radio-label" :id="`radio-${state.uniqueId}-${index}`" @click="onChange(item, index)" :class="{ 'radio-label-active': state.current === index }">
				<view class="radio-layout">
					<view :id="`frame-${state.uniqueId}-${index}`" class="radio-frame" :class="{ 'radio-frame-active': state.current === index }"></view>
					<view style="width: 100%;">
						<slot :data="item">
								{{ item.label }}
						</slot>
					</view>
				</view>
			</view>
			<view class="worm" :style="{ top: `${state.firstTopPosition}px`, left:  `${state.firstLeftPosition}px`}">
				<view v-for="item in props.lineAnimation ? 30 : 1" :key="item" class="worm__segment" :style="{transform: `translateY(${state.translateYValue}px)`}"></view>
			</view>
		</view>
	</view>
</template>
<script setup lang="ts">
	import { reactive, getCurrentInstance, onMounted, watch } from 'vue';
	const generateUniqueID = () => {
	  return Math.floor(Math.random() * Date.now()).toString(36);
	}
	const props = withDefaults(
	  defineProps<{
	    options: any[];
			defaultValue: any;
			lineAnimation: boolean;
			primary: string;
			frameBoxShadow: string;
			circle: boolean;
	  }>(),
	  {
	    options: () => [
				{
					label: '苹果',
					value: '0',
				},
				{
					label: '香蕉',
					value: '1',
				},
				{
					label: '火龙果',
					value: '2',
				},
				{
					label: '哈密瓜',
					value: '3',
				},
				{
					label: '菠萝',
					value: '4',
				},
				{
					label: '葡萄',
					value: '5',
				},
				{
					label: '西瓜',
					value: '6',
				},
			],
			defaultValue: '',
			lineAnimation: false,
			primary: '#5583f6',
			circle: true,
			frameBoxShadow: '0 0 0 1px currentColor',
	  }
	);
	const $emit = defineEmits<{
	  (e: 'onChange', ev: any): void;
	}>();
	const state = reactive({
		current: 0,
		translateYValue: 0,
		data: props.options,
		positionList: [] as number[],
		firstTopPosition: 0,
		firstLeftPosition: 0,
		default: props.defaultValue,
		uniqueId: generateUniqueID()
	});
	
	watch(
	  () => props.options,
	  (val) => {
			state.positionList = val.map((item: any) => {
				return 0
			})
	  }
	);
	
	const getIndex = (value) => {
		let valueIndex = 0
		for (let i = 0; i < props.options.length; i++) {
			if (props.options[i].value === value) {
				valueIndex = i
			}
		}
		return valueIndex
	}
	
	const onChange = (data: any, index: number) => {
		const oneTop = state.positionList[0]
		if (index === 0) {
			state.translateYValue = state.positionList[index] - oneTop
		} else {
			state.translateYValue = state.positionList[index] - oneTop - 1.5
		}
		state.current = index
		$emit('onChange', { data, index });
	}
	
	const init = () => {
		const instance = getCurrentInstance();
		const query = uni.createSelectorQuery().in(instance.proxy);
		state.data.forEach((_, index) => {
			query
			  .select(`#frame-${state.uniqueId}-${index}`)
			  .boundingClientRect((data: any) => {
					if(index === 0) {
						state.firstLeftPosition = 3.02
					}
					state.positionList[index] = data.top
			  }).exec();
		})
		query
		  .select(`#radio-${state.uniqueId}-0`)
		  .boundingClientRect((data: any) => {
				state.firstTopPosition = (data.height / 2) - 4.7
		  }).exec();
		const defaultIndex = getIndex(props.defaultValue)
		state.current = defaultIndex
	}
	
	onMounted(() => {
		init()
		if(state.current !== 0) {
			setTimeout(() => {
				state.translateYValue = state.positionList[state.current] - state.positionList[0] - 1.5
			}, 500)
		}
	})
</script>
<style scoped>
.radio-form {
	position: relative;
}

.radio-label {
  display: block;
  transition: color 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.radio-label-active {
	transition-delay: 0.4s; 
	color: var(--radio-primary);
}

.radio-layout {
	display: flex;
	align-items: center;
	gap: 8px;
}

.radio-label:not(:last-of-type) {
  margin-bottom: 16px;
}

.radio-frame {
	/*无框设置、阴影设置、拟态主题*/
	/* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
	/* box-shadow: 0 0 0 1px currentColor; */
	/* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 1px rgba(0, 0, 0, 0.2) inset; */
	box-shadow: var(--radio-frame-box-shadow);
	display: inline-block;
	vertical-align: bottom;
	min-width: 16px;
	width: 16px;
	height: 16px;
	transition: transform 0.2s cubic-bezier(0.5, 0, 0.5, 2), box-shadow 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95), color 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.radio-frame-active {
	transition-delay: 0.4s; 
	transform: scale(1.2); 
	color: var(--radio-primary);
}

.radio-label .radio-frame,
.worm__segment:before {
  border-radius: var(--radio-frame-radius);
}

.worm, .worm__segment {
  position: absolute; 
}

.worm__segment {
  top: 0;
  left: 0;
  width: 10px;
	height: 10px;
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
	color: var(--radio-primary);
}
.worm__segment:first-child:before, .worm__segment:last-child:before {
  box-shadow: 0 0 12px 0 currentColor;
}
.worm__segment:nth-child(2) {
  transition-delay: 0.004s;
}
.worm__segment:nth-child(2):before {
  animation-delay: 0.004s;
}

.worm__segment:nth-child(3) {
  transition-delay: 0.008s;
}
.worm__segment:nth-child(3):before {
  animation-delay: 0.008s; 
}

.worm__segment:nth-child(4) {
  transition-delay: 0.012s; 
}
.worm__segment:nth-child(4):before {
  animation-delay: 0.012s; 
}

.worm__segment:nth-child(5) {
  transition-delay: 0.016s; 
}
.worm__segment:nth-child(5):before {
  animation-delay: 0.016s; 
}

.worm__segment:nth-child(6) {
  transition-delay: 0.02s; 
}
.worm__segment:nth-child(6):before {
  animation-delay: 0.02s; 
}

.worm__segment:nth-child(7) {
  transition-delay: 0.024s; 
}
.worm__segment:nth-child(7):before {
  animation-delay: 0.024s; 
}

.worm__segment:nth-child(8) {
  transition-delay: 0.028s; 
}
.worm__segment:nth-child(8):before {
  animation-delay: 0.028s; 
}

.worm__segment:nth-child(9) {
  transition-delay: 0.032s; 
}
.worm__segment:nth-child(9):before {
  animation-delay: 0.032s; 
}

.worm__segment:nth-child(10) {
  transition-delay: 0.036s; 
}
.worm__segment:nth-child(10):before {
  animation-delay: 0.036s; 
}

.worm__segment:nth-child(11) {
  transition-delay: 0.04s; 
}
.worm__segment:nth-child(11):before {
  animation-delay: 0.04s; 
}

.worm__segment:nth-child(12) {
  transition-delay: 0.044s; 
}
.worm__segment:nth-child(12):before {
  animation-delay: 0.044s; 
}

.worm__segment:nth-child(13) {
  transition-delay: 0.048s; 
}
.worm__segment:nth-child(13):before {
  animation-delay: 0.048s; 
}

.worm__segment:nth-child(14) {
  transition-delay: 0.052s; 
}
.worm__segment:nth-child(14):before {
  animation-delay: 0.052s; 
}

.worm__segment:nth-child(15) {
  transition-delay: 0.056s;
 }
.worm__segment:nth-child(15):before {
  animation-delay: 0.056s;
  }

.worm__segment:nth-child(16) {
  transition-delay: 0.06s;
 }
.worm__segment:nth-child(16):before {
  animation-delay: 0.06s;
  }

.worm__segment:nth-child(17) {
  transition-delay: 0.064s;
 }
.worm__segment:nth-child(17):before {
  animation-delay: 0.064s;
  }

.worm__segment:nth-child(18) {
  transition-delay: 0.068s;
 }
  .worm__segment:nth-child(18):before {
    animation-delay: 0.068s;
   }

.worm__segment:nth-child(19) {
  transition-delay: 0.072s;
 }
  .worm__segment:nth-child(19):before {
    animation-delay: 0.072s;
   }

.worm__segment:nth-child(20) {
  transition-delay: 0.076s;
 }
  .worm__segment:nth-child(20):before {
    animation-delay: 0.076s;
   }

.worm__segment:nth-child(21) {
  transition-delay: 0.08s;
 }
  .worm__segment:nth-child(21):before {
    animation-delay: 0.08s;
   }

.worm__segment:nth-child(22) {
  transition-delay: 0.084s;
 }
  .worm__segment:nth-child(22):before {
    animation-delay: 0.084s;
   }

.worm__segment:nth-child(23) {
  transition-delay: 0.088s;
 }
  .worm__segment:nth-child(23):before {
    animation-delay: 0.088s;
   }

.worm__segment:nth-child(24) {
  transition-delay: 0.092s;
 }
.worm__segment:nth-child(24):before {
  animation-delay: 0.092s;
  }

.worm__segment:nth-child(25) {
  transition-delay: 0.096s;
 }
.worm__segment:nth-child(25):before {
  animation-delay: 0.096s;
  }

.worm__segment:nth-child(26) {
  transition-delay: 0.1s;
}
.worm__segment:nth-child(26):before {
  animation-delay: 0.1s;
}

.worm__segment:nth-child(27) {
  transition-delay: 0.104s;
}
.worm__segment:nth-child(27):before {
  animation-delay: 0.104s;
}

.worm__segment:nth-child(28) {
  transition-delay: 0.108s;
}
.worm__segment:nth-child(28):before {
  animation-delay: 0.108s;
}

.worm__segment:nth-child(29) {
  transition-delay: 0.112s;
 }
.worm__segment:nth-child(29):before {
  animation-delay: 0.112s;
  }

.worm__segment:nth-child(30) {
  transition-delay: 0.116s;
}
.worm__segment:nth-child(30):before {
  animation-delay: 0.116s;
}
</style>
