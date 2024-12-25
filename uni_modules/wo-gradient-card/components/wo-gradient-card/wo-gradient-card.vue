<template>
  <view>
  	<view class="card-list">
  		<view class="card-item" v-for="(item, index) in state.dataOptions" :key="index">
  			<view class="card-item-inner">
  				<view class="mask card" :style="{background: item.bgColor}"></view>
  				<span v-if="item.tag" class="source-tag" :style="{background: item.tagStyle.bgColor, color: item.tagStyle.color}">{{ item.tag }}</span>
  				<h3 class="source-title" :style="{padding: item.tag ? '50rpx 0 20rpx 0' : '10rpx 0 20rpx 0'}">
  					{{ item.title }}
  				</h3>
					<view class="source-detail">
						{{ item.subtitle }}
					</view>
					<view v-if="item.img" class="img-layout">
						<image class="img" :src="item.img"></image>
					</view>
  			</view>
  		</view>
  	</view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
interface OptionsItem {
	tag: string;
	tagStyle: {
		bgColor: string,
		color: string
	};
	title: string;
	subtitle: string;
	img: string;
	bgColor: string
} 
const props = withDefaults(
  defineProps<{
    options: OptionsItem[];
  }>(),
  {
    options: () => [],
  }
);

const state = reactive({
  dataOptions: props.options as OptionsItem[],
});
</script>

<style scoped>
	.card-list {
		display: flex;
		flex-wrap: wrap;
		gap: 24rpx;
		margin: 30rpx;
	}
	.card-item {
		border-radius: 10rpx;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
		width: 100%;
	}
	.card-item-inner {
		border: 1rpx solid rgb(236, 236, 236);
		background: rgb(249, 249, 251);
		border-radius: 9px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		padding: 16px;
	}
	.mask {
		border-radius: 100%;
		height: 600rpx;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 600rpx;
		z-index: 10;
	}
	.mask.card {
		animation: maskRun 20s linear infinite;
	}
	.source-tag {
		border-bottom-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
		left: 1rpx;
		padding: 12rpx 32rpx;
		position: absolute;
		top: 1rpx;
	}
	.source-detail {
		color: rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: center;
	}
	.img-layout {
		position: absolute;
		right: 14rpx;
		bottom: 14rpx;
	}
	.img {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}
	@keyframes maskRun {
		0% {
			transform: translate3d(-25%,-25%,0);
		}
		25% {
				transform: translate3d(0,25%,0);
		}
		50% {
				transform: translate3d(60%,25%,0);
		}
		75% {
				transform: translate3d(60%,-25%,0);
		}
		100% {
				transform: translate3d(-25%,-25%,0);
		}
	}
</style>
