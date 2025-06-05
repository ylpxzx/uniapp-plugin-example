# 星级评分模板

> 采用 uniapp 实现的一款简约美观的星级评分模板，提供丝滑动画效果，用户可根据自身需求进行自定义修改、扩展
> 适配 web、H5、微信小程序（其他平台小程序未测试过，可自行尝试）

## props 属性

### selectedStar

> 默认值选中星级

```js
selectedStar: {
    type: number,
    default: 0,
},
```

### level

> 最高等级

```js
level: {
    type: number,
    default: 5,
},
```

## 事件

### @change

> 点击星级变化时触发

## 使用示例

### vue2 写法

```js
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
```

### vue3 写法

```js
<template>
	<view style="padding: 10rpx; display: flex; flex-direction: column; row-gap: 40rpx;">
		<view style="display: flex; flex: auto;">
			<StarRating :selected-star="2" :level="3" @change="onChange" />
		</view>
		<view style="display: flex; flex: auto;">
			<StarRating :selected-star="1" :level="5" />
		</view>
		<view style="display: flex; flex: auto;">
			<StarRating :selected-star="5" :level="8" />
		</view>
	</view>
</template>

<script setup>
import StarRating from './comp/star-rating.vue';

function onChange(value) {
	console.log('Selected star rating:', value);
}
</script>

<style scoped></style>

```
