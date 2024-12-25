# wo-gradient-card
> 采用uniapp-vue3实现，透明辉光动画卡片，卡片内容包含标签、标题、副标题、图片
>
> 支持H5、微信小程序（其他小程序未测试过，可自行尝试）
>
> 可用于参考学习

## props属性

### options

> 范围数据

~~~js
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
options: {
	type: OptionsItem[],
	default: () => []
}
~~~

### 示例代码
~~~html
<template>
	<view>
		<wo-gradient-card v-model:options="state.options"></wo-gradient-card>
	</view>
</template>

<script setup lang="ts">
	import { reactive } from 'vue';
	const state = reactive({
		options: [
			{
				tag: '最新',
				tagStyle: {
					bgColor: 'rgba(43, 164, 113, 0.1)',
					color: 'rgb(43, 164, 113)'
				},
				title: '最新卡片',
				subtitle: '2024/01/22 - 2025/01/22',
				img: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				bgColor: 'radial-gradient(50% 50% at 50% 50%,rgba(8, 188, 47, 0.1) 0,rgba(242,78,30,0) 100%)'
			},
			{
				tag: '最火',
				tagStyle: {
					bgColor: 'rgba(239, 47, 47, 0.1)',
					color: 'rgb(239, 47, 47)'
				},
				title: '最热门卡片',
				subtitle: '2024/01/22 - 2025/01/22',
				img: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				bgColor: 'radial-gradient(50% 50% at 50% 50%,rgba(242,78,30,.1) 0,rgba(242,78,30,0) 100%)'
			},
			{
				tag: '',
				tagStyle: {
					bgColor: '',
					color: ''
				},
				title: '普通卡片',
				subtitle: '2024/01/22 - 2025/01/22',
				img: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				bgColor: 'radial-gradient(50% 50% at 50% 50%,rgba(57,112,227,.1) 0,rgba(57,112,227,0) 100%)'
			},
			{
				tag: '',
				tagStyle: {
					bgColor: '',
					color: ''
				},
				title: '无图卡片',
				subtitle: '2024/01/22 - 2025/01/22',
				img: '',
				bgColor: 'radial-gradient(50% 50% at 50% 50%,rgba(57,112,227,.1) 0,rgba(57,112,227,0) 100%)'
			}
		]
	})
</script>

<style scoped>
</style>
~~~