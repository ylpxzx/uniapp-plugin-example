<template>
	<view>
		<view class="font-class">示例一：</view>
		<view>
			<view style="background-color: #272822; padding: 10px; margin: 10px; border-radius: 6px; color: #fff;">
				<wo-step-indicator :default-step="1" :options="steps" ref="stepIndicator1"
					@change="onChangeStep"></wo-step-indicator>
			</view>
			<view style="padding: 10px 0; margin: 0 10px;">
				<view v-show="step === 1">
					<view
						style="height: 100px; width: 100%; border-radius: 6px; background-color: #299B48; color: #fff; display: flex; justify-content: center; align-items: center;">
						步骤一
					</view>
				</view>
				<view v-show="step === 2">
					<view
						style="height: 100px; width: 100%; border-radius: 6px; background-color:#FF5739; color: #fff; display: flex; justify-content: center; align-items: center;">
						步骤二
					</view>
				</view>
				<view v-show="step === 3">
					<view
						style="height: 100px; width: 100%; border-radius: 6px; background-color: #41A5E1; color: #fff; display: flex; justify-content: center; align-items: center;">
						步骤三
					</view>
				</view>
				<view v-show="step === 4">
					<view
						style="height: 100px; width: 100%; border-radius: 6px; background-color: #272822; color: #fff; display: flex; justify-content: center; align-items: center;">
						步骤四
					</view>
				</view>
			</view>
		</view>
		<view class="font-class">示例二：</view>
		<view style="display: flex; gap: 10px;">
			<view class="step-class" style="margin-right: 0px;">
				<wo-step-indicator ref="stepIndicator2" @change="onChangeStep"></wo-step-indicator>
			</view>
			<view style="margin: 10px 10px 10px 0; flex: 1;">
				<view v-show="step === 1">
					<view
						style="height: 200px; width: 100%; border-radius: 6px; background-color: #299B48; color: #fff; display: flex; justify-content: center; align-items: center;">
						步骤一
					</view>
				</view>
				<view v-show="step === 2">
					<view
						style="height: 200px; width: 100%; border-radius: 6px; background-color:#FF5739; color: #fff; display: flex; justify-content: center; align-items: center;">
						步骤二
					</view>
				</view>
				<view v-show="step === 3">
					<view
						style="height: 200px; width: 100%; border-radius: 6px; background-color: #41A5E1; color: #fff; display: flex; justify-content: center; align-items: center;">
						步骤三
					</view>
				</view>
				<view v-show="step === 4">
					<view
						style="height: 200px; width: 100%; border-radius: 6px; background-color: #272822; color: #fff; display: flex; justify-content: center; align-items: center;">
						步骤四
					</view>
				</view>
			</view>
		</view>
		<view class="font-class">自定义操作：</view>
		<view style="display: flex; gap: 10px; padding-top: 10px;">
			<button @click="prevStep" :disabled="step <= 1">上一步</button>
			<button @click="nextStep" :disabled="step >= steps.length">下一步</button>
			<button v-show="step >= steps.length">完成</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			steps: [
				{
					index: '1',
					name: 'Step 1',
				},
				{
					index: '2',
					name: 'Step 2',
				},
				{
					index: '3',
					name: 'Step 3',
				},
				{
					index: '4',
					name: 'Step 4',
				},
			],
			step: 1,
			stepIndicator1: null,
			stepIndicator2: null
		};
	},
	methods: {
		prevStep() {
			this.$refs.stepIndicator1.prev();
			this.$refs.stepIndicator2.prev();
		},
		nextStep() {
			this.$refs.stepIndicator1.next();
			this.$refs.stepIndicator2.next();
		},
		onChangeStep(data) {
			this.step = data.step;
			console.log('Current step:', data);
		}
	}
};
</script>

<style>
.font-class {
	font-size: 12px;
	padding: 10px 10px 0 10px;
}

.step-class {
	background-color: #272822;
	color: #fff;
	padding: 15px;
	margin: 10px;
	border-radius: 6px;
}
</style>
