# wo-radio 单选框选中

> 采用uniapp-vue3实现, 是一款单选框组件，提供丝滑的动画选中效果，支持不同主题配置，适配web、H5、微信小程序（其他平台小程序未测试过，可自行尝试）

## props属性

### defaultValue

> 默认选中值

~~~js
defaultValue: {
    type: any,
    default: '',
},
~~~

### options

> 渲染数据，所提供的数据必须包含**value字段和name字段**

~~~js
options: {
    type: any[],
    default: () => []
}
//options: [{
//    value: '1',  // value字段必须提供
//    name: '苹果味',  // name字段必须提供
//    tag: '饮料'  // 其他字段可选，主要用于默认插槽自定义内容
//}]
~~~

### styleObj

> 样式数据，包括主题色(primary)、未选中时圆点背景色(unselectedRadioBg)、选中时单选框背景色(selectedBg)、单选框高度(height)

~~~js
styleObj: {
    type: {
        primary: string;
        unselectedColor: string;
        selectedBg: string;
        height: number
    },
    default: () => {
        return {
            primary: 'blue',
            unselectedRadioBg: '#eaeaea',
            selectedBg: 'hsla(0,0%,100%,0.5)',
            height: 20
        }
    }
}
~~~

## 插槽

支持默认插槽，主要用于自定义右边的内容

~~~html
<wo-radio v-model:options="state.items" v-model:defaultValue="state.default" v-slot="slotProps">
    <!-- 插槽 -->
    <view style="display: flex;">
        <!-- 通过slotProps.data获取单选框数据 -->
        <view>{{ slotProps.data.name }}</view>
        <view class="tag">{{ slotProps.data.tag }}</view>
    </view>
</wo-radio>

// state.items数据
items: [
    {
        value: '1',
        name: '苹果味',
        tag: '饮料'
    },
    {
        value: '2',
        name: '哈密瓜味',
        tag: '酒水'
    }
]
~~~



## 事件

### @onChange

> 点击选项时触发，返回包含了选中项、索引的对象数据



## 使用示例

~~~vue
<template>
	<view>
		<view class="light" style="background-color: white">
			<wo-radio v-model:options="state.items" v-model:defaultValue="state.default" @on-change="changeEvent">
			</wo-radio>
		</view>
		<view class="light">
			<wo-radio v-model:options="state.items" v-model:defaultValue="state.default" v-model:styleObj="state.theme.light" v-slot="slotProps" @on-change="changeEvent">
				<view style="display: flex;">
					<view>{{ slotProps.data.name }}</view>
					<view class="tag">{{ slotProps.data.tag }}</view>
				</view>
			</wo-radio>
		</view>
		<view class="dark">
			<wo-radio v-model:options="state.items" v-model:defaultValue="state.default" v-model:styleObj="state.theme.dark" v-slot="slotProps" @on-change="changeEvent">
				<view style="display: flex;">
					<view>{{ slotProps.data.name }}</view>
					<view class="tag">{{ slotProps.data.tag }}</view>
				</view>
			</wo-radio>
		</view>
	</view>
	
</template>

<script setup lang="ts">
	import { reactive } from 'vue';
	const state = reactive({
	  items: [{
				value: '1',
				name: '苹果味',
				tag: '饮料'
			},
			{
				value: '2',
				name: '香蕉味',
				tag: '酒水'
			},
			{
				value: '3',
				name: '火龙果味',
				tag: '饮料'
			},
			{
				value: '4',
				name: '西瓜味',
				tag: '饮料'
			},
			{
				value: '5',
				name: '哈密瓜味',
				tag: '酒水'
			},
			{
				value: '6',
				name: '榴莲味',
				tag: '酒水'
		}],
		default: '2',
		theme: {
				light: {
					primary: 'blue',
					unselectedRadioBg: '#eaeaea',
					selectedBg: 'hsla(0,0%,100%,0.5)',
					height: 20
				},
				dark: {
					primary: 'blue',
					unselectedRadioBg: 'hsl(223,90%,30%)',
					selectedBg: 'hsla(223,90%,30%,0.5)',
					height: 20
				}
		},
		height: 12
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
	.tag {
		background-color: #1BA035;
		color: white;
		font-size: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		padding: 0 4px;
		margin-left: 5px;
	}
</style>
~~~

