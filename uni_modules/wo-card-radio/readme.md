# wo-card-radio 单选框卡片选择器

> 采用uniapp-vue3实现的一款单选框卡片选择器，纯CSS实现样式和交互，提供丝滑的动画选中效果，支持不同主题配置，适配多端

## props属性

### defaultValue

> 默认选中值

~~~js
defaultValue: {
    type: any,
    default: 'test2',
},
~~~

### options

> 渲染数据，所提供的数据必须包含**value字段和label字段**

~~~js
options: {
    type: any[],
    default: () => [
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
    ]
}
//options: [{
//    value: 'test',  // value字段必须提供
//    label: '中国农业银行',  // label字段必须提供
//    cardLinearColor: 'linear-gradient(45deg, #748DFB, #3859E8)'  // 卡片线性渐变颜色，可选，默认为白色渐变
//}]
~~~

### styleObj

> 样式数据，包括主题色(primary)、未选中时圆点背景色(unselectedRadioBg)、选中时单选框背景色(selectedBg)

~~~js
styleObj: {
    type: {
        primary: string;
        unselectedColor: string;
        selectedBg: string;
    },
    default: () => {
        return {
            primary: 'blue',
            unselectedRadioBg: '#eaeaea',
            selectedBg: 'hsla(0,0%,100%,0.5)'
        }
    }
}
~~~

## 事件

### @onChange

> 点击选项时触发，返回包含了选中项、索引的对象数据



## 使用示例

~~~vue
<template>
	<view>
		<view class="light">
			<wo-card-radio v-model:options="state.items" v-model:defaultValue="state.default" @on-change="changeEvent"></wo-card-radio>
		</view>
		<view class="dark">
			<wo-card-radio v-model:options="state.items" v-model:defaultValue="state.default" v-model:styleObj="state.theme.dark" @on-change="changeEvent"></wo-card-radio>
		</view>
	</view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
	items: [
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
		{
			value: 'test2',
			label: '中国华夏银行',
			cardLinearColor: 'linear-gradient(45deg, #616161, #484848)'
		},
	],
	default: 'test3',
	theme: {
			light: {
				primary: 'blue',
				unselectedRadioBg: '#eaeaea',
				selectedBg: 'hsla(0,0%,100%,0.5)',
			},
			dark: {
				primary: 'blue',
				unselectedRadioBg: 'hsl(223,90%,30%)',
				selectedBg: 'hsla(223,90%,30%,0.5)'
			}
	}
});
const changeEvent = (el) => {
	console.log('点击：', el);
}
</script>

<style lang="scss" scoped>
	.light {
		border-radius: 10px;
		padding: 20rpx;
		font-size: 24rpx;
		background-color: hsl(223,90%,90%);
		margin: 20px;
		height: 300px;
		overflow: auto;
	}
	.dark {
		border-radius: 10px;
		padding: 20rpx;
		font-size: 24rpx;
		background-color: hsl(223,90%,10%);
		color: white;
		margin: 20px;
		height: 300px;
		overflow: auto;
	}
</style>

~~~

