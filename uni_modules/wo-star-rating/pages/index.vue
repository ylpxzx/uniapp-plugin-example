<template>
	<view style="padding: 10rpx; display: flex; flex-direction: column;row-gap: 40rpx;">
		<view style="display: flex; flex: auto;">
			<StarRating :selected-star="2" :level="3" @change="onChange"></StarRating>
		</view>
		<view style="display: flex; flex: auto;">
			<StarRating :selected-star="1" :level="5"></StarRating>
		</view>
		<view style="display: flex; flex: auto;">
			<StarRating :selected-star="5" :level="8"></StarRating>
		</view>
	</view>
</template>

<script>
import StarRating from './comp/star-rating.vue';
export default {
	components: {
		StarRating
	},
	data() {
		return {

		}
	},
	methods: {
		onChange(value) {
			console.log('Selected star rating:', value);
		}
	}
}
</script>

<style scoped></style>