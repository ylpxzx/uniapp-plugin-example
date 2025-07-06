<template>
	<view style="height: 100vh;font-size: 12rpx;margin-top: 20px;">
		<view v-for="(item, index) in compOptions" :key="index" style="display: flex; justify-content: center; align-items: center;padding: 10px;">
			<view style="width: 400rpx;">
				<view style="margin-bottom: 10px; text-align: center;">{{ item.title }}</view>
				<wo-slider
				 :height="item.height"
				 :round="item.round"
				 :border="item.border"
				 :slider-size="item.sliderSize"
				 @slideFinish="onFinish">
				</wo-slider>
			</view>
		</view>
		<view style="display: flex; justify-content: center; align-items: center; padding: 10px;">
			<view>
				<view style="margin-bottom: 10px; text-align: center;">
					外边框有间隙滑块
				</view>
				<view style="border: 1rpx solid #DEE1E6; padding: 16rpx; border-radius: 80rpx;width: 400rpx;">
					<wo-slider @slideFinish="onFinish" :is-show-end-slider="false" :round="{show: true, style: '80rpx'}">
						<template v-slot:begin>
							<view style="background-color: #E5673B; height: 100%; display: flex; justify-content: center; align-items: center">
								<img style="height: 50rpx;width: 50rpx;" src="/static/right.png" alt="logo"></img>
							</view>
						</template>
						<template v-slot:end>
							<view style="background-color: #1BA035; height: 100%; display: flex; justify-content: center; align-items: center">
								<image style="height: 50rpx;width: 50rpx;" src="../../static/select-bold.png"></image>
							</view>
						</template>
					</wo-slider>
				</view>
			</view>
		</view>
		<view style="display: flex; justify-content: center; align-items: center; padding: 10px;">
			<view style="width: 400rpx;">
				<view style="margin-bottom: 10px; text-align: center;">
					插槽：自定义滑块
				</view>
				<wo-slider @slideFinish="onFinish" :round="{show: true, style: '10rpx'}">
					<template v-slot:begin>
						<view style="background-color: #E5673B; height: 100%; display: flex; justify-content: center; align-items: center">
							<image style="height: 50rpx;width: 50rpx;" src="/static/wow.png"></image>
						</view>
					</template>
					<template v-slot:end>
						<view style="background-color: #1BA035; height: 100%; display: flex; justify-content: center; align-items: center">
							<image style="height: 50rpx;width: 50rpx;" src="/static/smile.png"></image>
						</view>
					</template>
				</wo-slider>
			</view>
		</view>
		<view style="display: flex; justify-content: center; align-items: center; padding: 10px;">
			<view style="width: 400rpx;">
				<view style="margin-bottom: 10px; text-align: center;">
					插槽：滑道-成功态内容
				</view>
				<wo-slider
				 @slideFinish="onFinishSuccess" :round="{show: true, style: '10rpx'}">
					<template v-slot:isFinished>
						<view style="height: 100%;background-color: #65B58A; color: #fff; display: flex; justify-content: center;align-items: center;">
							<view>
								{{content}}
							</view>
						</view>
					</template>
				</wo-slider>
			</view>
		</view>
		<view style="display: flex; justify-content: center; align-items: center; padding: 10px;">
			<view style="width: 400rpx;">
				<view style="margin-bottom: 10px; text-align: center;">
					插槽：滑道-初始态内容
				</view>
				<wo-slider @slideFinish="onFinish" :round="{show: true, style: '10rpx'}">
					<template v-slot:init>
						<view style="background-color: #107BBA; color: #fff; height: 100%; display: flex; justify-content: center;align-items: center;">😀滑动解锁大礼包</view>
					</template>
				</wo-slider>
			</view>
		</view>
		<view style="display: flex; justify-content: center; align-items: center; padding: 10px;">
			<view style="width: 400rpx;">
				<view style="margin-bottom: 10px; text-align: center;">
					根据接口判断验证通过
				</view>
				<wo-slider
				 @slideFinish="onFinishOne" :round="{show: true, style: '10rpx'}">
					<template v-slot:isFinished>
						<view :style="{backgroundColor: loadingOne ? '#709bff' : signOne ? '#65B58A' : '#ed9576'}" style="height: 100%; color: #fff; display: flex; justify-content: center;align-items: center;">
							<view>
								{{resOne}}
							</view>
						</view>
					</template>
					<template v-slot:begin>
						<view style="background-color: #E5673B; height: 100%; display: flex; justify-content: center; align-items: center">
							<image style="height: 30rpx;width: 30rpx;" src="@/static/arrow-double-right.png"></image>
						</view>
					</template>
					<template v-slot:end>
						<view :style="{backgroundColor: loadingOne ? '#3370FF' : signOne ? '#1BA035' : '#E23E31'}" style=" height: 100%; display: flex; justify-content: center; align-items: center">
							<view class="spinner" v-if="loadingOne">
							  <view class="double-bounce1"></view>
							  <view class="double-bounce2"></view>
							</view>
							<image v-else style="height: 30rpx;width: 30rpx;" :src="signOne ? successImg : closeImg"></image>
						</view>
					</template>
				</wo-slider>
			</view>
		</view>
		<view style="display: flex; justify-content: center; align-items: center; padding: 10px;">
			<view style="width: 400rpx;">
				<view style="margin-bottom: 10px; text-align: center;">
					根据接口判断验证失败
				</view>
				<wo-slider
				 @slideFinish="onFinishTwo" :round="{show: true, style: '10rpx'}">
					<template v-slot:isFinished>
						<view :style="{backgroundColor: loading ? '#709bff' : sign ? '#65B58A' : '#ed9576'}" style="height: 100%; color: #fff; display: flex; justify-content: center;align-items: center;">
							<view>
								{{res}}
							</view>
						</view>
					</template>
					<template v-slot:begin>
						<view style="background-color: #E5673B; height: 100%; display: flex; justify-content: center; align-items: center">
							<image style="height: 50rpx;width: 50rpx;" src="@/static/right.png"></image>
						</view>
					</template>
					<template v-slot:end>
						<view :style="{backgroundColor: loading ? '#3370FF' : sign ? '#1BA035' : '#E23E31'}" style=" height: 100%; display: flex; justify-content: center; align-items: center">
							<view class="spinner" v-if="loading">
							  <view class="double-bounce1"></view>
							  <view class="double-bounce2"></view>
							</view>
							<image v-else style="height: 50rpx;width: 50rpx;" :src="sign ? successImg : closeImg"></image>
						</view>
					</template>
				</wo-slider>
			</view>
		</view>
		<view style="padding-top: 100rpx;">
			<button @click="clickEvent">重置</button>
		</view>
	</view>
</template>

<script>
	import refreshImg from '../../static/refresh.png'
	import closeImg from '../../static/close.png'
	import successImg from '../../static/select-bold.png'
	export default {
		data() {
			return {
				content: '',
				res: '',
				loading: true,
				sign: false,
				resOne: '',
				loadingOne: true,
				signOne: false,
				resetFuncList: [],
				refreshImg: refreshImg,
				closeImg: closeImg,
				successImg: successImg,
				compOptions: [
					{
						title: '边框方块滑道',
						height: 60,
						sliderSize: 60,
						width: 400,
						round: {show: true, style: "0rpx"},
						border: {show: true, style: '1rpx solid blue'}
					},
					{
						title: '无边框方块滑道',
						height: 60,
						sliderSize: 80,
						width: 400,
						round: {show: true, style: "10rpx"},
						border: {show: false, style: ''},
					},
					{
						title: '边框圆角滑道',
						height: 60,
						sliderSize: 60,
						width: 400,
						round: {show: true, style: "20rpx"},
						border: {show: true, style: '1rpx solid blue'}
					},
					{
						title: '无边框圆角滑道',
						height: 60,
						sliderSize: 80,
						width: 400,
						round: {show: true, style: "30rpx"},
						border: {show: false, style: ''}
					},
					{
						title: '大圆角滑道',
						height: 80,
						sliderSize: 80,
						width: 500,
						round: {show: true, style: "40rpx"},
						border: {show: false, style: ''}
					}
				]
			}
		},
		methods: {
			onFinish(e) {
				console.log('滑动完成', e);
				this.resetFuncList.push(e.resetFunc)
			},
			onFinishSuccess(e) {
				this.resetFuncList.push(e.resetFunc)
				this.content = '😊验证成功'
			},
			clickEvent() {
				this.resetFuncList.forEach((item) => {
					item()
				})
				this.content = ''
			},
			onFinishOne(e) {
				this.resetFuncList.push(e.resetFunc)
				this.loadingOne = true
				this.resOne = '⏳验证中...'
				setTimeout(()=> {
					this.signOne = true
					this.loadingOne = false
					this.resOne = '✅验证成功'
				}, 3000)
			},
			onFinishTwo(e) {
				this.resetFuncList.push(e.resetFunc)
				this.loading = true
				this.res = '⏳验证中...'
				setTimeout(()=> {
					this.sign = false
					this.loading = false
					this.res = '⚠验证失败'
				}, 3000)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.spinner {
	  width: 20px;
	  height: 20px;
	
	  position: relative;
	  margin: 100px auto;
	}
	
	.double-bounce1, .double-bounce2 {
	  width: 100%;
	  height: 100%;
	  border-radius: 50%;
	  background-color: #fff;
	  opacity: 0.6;
	  position: absolute;
	  top: 0;
	  left: 0;
	  
	  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
	  animation: sk-bounce 2.0s infinite ease-in-out;
	}
	
	.double-bounce2 {
	  -webkit-animation-delay: -1.0s;
	  animation-delay: -1.0s;
	}
	
	@-webkit-keyframes sk-bounce {
	  0%, 100% { -webkit-transform: scale(0.0) }
	  50% { -webkit-transform: scale(1.0) }
	}
	
	@keyframes sk-bounce {
	  0%, 100% { 
	    transform: scale(0.0);
	    -webkit-transform: scale(0.0);
	  } 50% { 
	    transform: scale(1.0);
	    -webkit-transform: scale(1.0);
	  }
	}
</style>
