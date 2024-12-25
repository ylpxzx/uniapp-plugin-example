<template>
  <view class="select-layout">
    <view :id="id" class="input-style" :class="{ active: state.isFocus ? true : false }">
      <input
				style="flex: 1;"
        v-model="state.inputValue"
        :placeholder="placeholder"
        :auto-blur="true"
        :controlled="true"
        @focus="onFocus"
        @input="onInput"
      />
			<view class="select-icon" @click="onShowEvent">
				<view class="down" :class="{up: state.isFocus}"></view>
			</view>
    </view>
		<Transition>
			<view :id="`${id}-panel`" v-show="state.isFocus" class="panel" :style="{ top: `${state.topPosition}px` }">
			  <slot>
					<view v-if="state.data.length" style="display: flex; flex-direction: column; gap: 20rpx;">
						<view
							v-for="item in state.data"
							:key="item[valueField]"
							style="font-size: 28rpx; z-index: 120;"
							@click="onClickSelect(item)"
						>
							<view class="pr-8">{{ item[labelField] }}</view>
						</view>
					</view>
					<view v-else>无匹配数据</view>
				</slot>
			</view>
		</Transition>
  </view>
</template>
<script setup lang="ts">
import { reactive, watch, onMounted, nextTick, getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
const props = defineProps({
	id: {
	  type: String,
	  default: 'inputId',
		reqiured: true
	},
  value: {
    type: String || Number,
    default: null
  },
  options: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: '请选择数据'
  },
  labelField: {
    type: String,
    default: 'label'
  },
  valueField: {
    type: String,
    default: 'value'
  }
});
const emit = defineEmits(['update:value', 'filter', 'onChange']);
const state = reactive({
	inputNodeInfo: {} as any,
	panelNodeInfo: {} as any,
	screenWidth: 0,
	screenHeight: 0,
  data: props.options as any,
  inputValue: '',
  selectedValue: {} as any,
  isFocus: false,
	topPosition: 0,
	info: {}
});
watch(
  () => props.options,
  (val) => {
    state.data = val;
  }
);
watch(
  () => props.value,
  (val) => {
		if (val) {
			for (let content of state.data) {
				if (content[props.valueField] === val) {
					state.inputValue = content[props.labelField];
					state.selectedValue = content
					emit('onChange', content[props.valueField]);
				}
			}
		}
  },
	{
		immediate: true
	}
);
watch(
	() => state.panelNodeInfo,
	(val) => {
		state.topPosition = state.inputNodeInfo.height + 10
		if (state.inputNodeInfo.bottom + val.height + 50 >= state.screenHeight) {
			state.topPosition = -(val.height + 10)
		}
	}
	)
const onFocus = async (e) => {
	onFilterEvent(e.detail.value)
  emit('filter', e);
  state.isFocus = true;
	onComputeNode()
};
const onShowEvent = async () => {
	if (Object.keys(state.selectedValue).length) {
		if (state.inputValue !== state.selectedValue[props.labelField]) {
		  state.inputValue = '';
		  state.selectedValue = {};
			onFilterEvent('')
		  emit('onChange', '');
		}
	} else {
		state.inputValue = '';
	}
	state.isFocus = !state.isFocus;
	onComputeNode()
}
const onFilterEvent = async (str: string) => {
	emit('filter', { detail: {
		value: str
	}});
}
const onInput = async (e) => {
  emit('filter', e);
	onComputeNode()
};
const onComputeNode = async () => {
	await nextTick()
	getNodeInfo(`${props.id}-panel`)
	getNodeInfo(props.id)
}
const onClickSelect = (e) => {
  state.selectedValue = e;
  state.inputValue = e[props.labelField];
  emit('onChange', e[props.valueField]);
  state.isFocus = false;
};

const getDeviceScreen = () => {
	uni.getSystemInfo({
		success: function (res) {
			state.screenHeight = res.screenHeight
			state.screenWidth = res.screenWidth
		}
	});
}

const getNodeInfo = (id: string) => {
	const query = uni.createSelectorQuery().in(instance);
	query
		.select(`#${id}`)
		.boundingClientRect((data) => {
			if (id.includes('panel')) {
				state.panelNodeInfo = data
			} else {
				state.inputNodeInfo = data
			}
		}).exec();
}

onMounted(() => {
	getDeviceScreen()
})
defineExpose({
  onClickSelect
});
</script>

<style scoped>
.select-layout {
	position: relative;
}
.input-style {
	display: flex;
	justify-content: space-between;
	border-radius: 8rpx;
	padding: 14rpx 20rpx;
	border: 1px solid #d2d5dd;
}
.active {
	transition: all .2s ease-in-out;
	border: 1px solid #409eff;
}
.select-icon {
	width: 40rpx;
	padding-left: 10rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.panel {
	position: absolute;
	padding: 26rpx;
	background-color: white;
  z-index: 100;
  height: fit-content;
  width: fit-content;
  max-height: 400rpx;
  overflow-y: auto;
  border-radius: 8rpx;
  box-shadow:
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
	transition: all .2s ease-in-out;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.down {
	display: block;
	width: 8px;
	height: 8px;
	border-top: 2px solid #d2d5dd;
	border-left: 2px solid #d2d5dd;
	transform: translateY(-2px) rotate(220deg);
	transition: all 0.5s ease;
}
.up {
	transform: translateY(2px) rotate(400deg);
	transition: all 0.5s ease;
}
:deep .uni-input-placeholder {
	font-size: 28rpx;
}
:deep .uni-input-input {
	font-size: 28rpx;
}
</style>
