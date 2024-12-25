<template>
	<view class="app">
		<view class="circles">
			<view class="circle circle-1"></view>
			<view class="circle circle-2"></view>
		</view>
		<view class="card-group">
			<view class="card">
				<view class="logo"></view>
				<view class="chip">
					<view class="chip-line"></view>
					<view class="chip-line"></view>
					<view class="chip-line"></view>
					<view class="chip-line"></view>
					<view class="chip-main"></view>
				</view>
				<view class="number">1234 5678 9012 3456</view>
				<view class="name">Mr.Li</view>
				<view class="from">2024/02/21 MT0072</view>
				<view class="ring"></view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
</script>

<style scoped>
	.app {
		background: linear-gradient(to left, #283593, #1976d2);
		font-size: 48rpx;
		height: 100vh;
	}

	/* Background circles start */
	.circle {
		position: absolute;
		border-radius: 50%;
		background: radial-gradient(#006db3, #29b6f6);
	}
	.circles {
		position: absolute;
		height: 540rpx;
		width: 900rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.circle-1 {
		height: 180px;
		width: 180px;
		top: -50px;
		left: -10px;
	}
	.circle-2 {
		height: 200px;
		width: 200px;
		bottom: -50px;
		right: -40px;
		opacity: 0.8;
	}
	/* Background circles end */

	.card-group {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.card {
		position: relative;
		height: 420rpx;
		width: 700rpx;
		border-radius: 25rpx;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(60rpx);
		border: 4rpx solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 0 80rpx rgba(0, 0, 0, 0.2);
		overflow: hidden;
	}

	.number,
	.name,
	.from,
	.to,
	.ring {
		position: absolute; /* All items inside card should have absolute position */
	}

	.chip {
		top: 90rpx;
		left: 40rpx;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90rpx;
		height: 70rpx;
		border-radius: 10rpx;
		background-image: linear-gradient(to bottom left, #ffecc7, #d0b978);
		overflow: hidden;
	}
	.chip .chip-line {
		position: absolute;
		width: 100%;
		height: 4rpx;
		background-color: #fff;
	}
	.chip .chip-line:nth-child(1) {
		top: 20rpx;
	}
	.chip .chip-line:nth-child(2) {
		top: 34rpx;
	}
	.chip .chip-line:nth-child(3) {
		top: 48rpx;
	}
	.chip .chip-line:nth-child(4) {
		left: 45rpx;
		width: 4rpx;
		height: 100rpx;
	}
	.chip .chip-main {
		width: 38rpx;
		height: 40rpx;
		border: 4rpx solid #fff;
		border-radius: 6rpx;
		background-image: linear-gradient(to bottom left, #efdbab, #e1cb94);
		z-index: 1;
	}

	.number,
	.name,
	.from,
	.to {
		color: rgba(255, 255, 255, 0.8);
		font-weight: 400;
		letter-spacing: 4rpx;
		text-shadow: 0 0 4rpx rgba(0, 0, 0, 0.6);
	}

	.number {
		left: 40rpx;
		bottom: 130rpx;
	}

	.name {
		font-size: 0.5em;
		left: 40rpx;
		bottom: 60rpx;
	}

	.from {
		font-size: 0.5em;
		bottom: 60rpx;
		right: 40rpx;
	}

	/* The two rings on the card background */
	.ring {
		height: 800rpx;
		width: 800rpx;
		border-radius: 50%;
		background: transparent;
		border: 80rpx solid rgba(255, 255, 255, 0.1);
		bottom: -500rpx;
		right: -500rpx;
		box-sizing: border-box;
	}

	.ring::after {
		content: "";
		position: absolute;
		height: 1000rpx;
		width: 1000rpx;
		border-radius: 50%;
		background: transparent;
		border: 60rpx solid rgba(255, 255, 255, 0.1);
		bottom: -80rpx;
		right: -160rpx;
		box-sizing: border-box;
	}
</style>
