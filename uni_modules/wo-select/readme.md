# 数据选择器 wo-select

> 采用uniapp-vue3实现的数据选择器，支持H5、微信小程序（其他小程序未测试过，可自行尝试）
>
> + 支持本地自定义过滤、远程接口过滤，
> + 为了避免弹窗面板超出边界的情况，自动计算弹窗面板安置的位置（在微信小程序，节点信息是页面渲染后才拿得到，所以会有一段位移过程，大神如果更合适的方案，可以自行优化）
> + 支持自定义弹窗面板显示内容
> + 支持自定义取值字段（默认为options: [{label：'键',  value: '值', ....}]格式）
>
> <font color="red">由于移动端输入场景下会弹出键盘，如果设置为失焦时关闭弹窗面板, 则收起键盘时，弹窗就会被关闭，无法再进行下一步选择。所以采用弹窗常驻，手动点击右边图标关闭弹窗的方式</font>

## props属性

### id

> 组件唯一标识
>
> 同个页面存在多个wo-select组件的情况，id为必填项，因为需要通过id去计算弹窗面板与输入框的位置，以便安置弹窗面板在合适的位置，避免超出边界

~~~js
id: {
    type: String,
    default: 'inputId',
    reqiured: true
},
~~~

### value

> 默认值（valueField字段指定的字段值）

~~~js
value: {
    type: String || Number,
    default: null
},
~~~

### options

> 结构化数据

~~~js
options: {
    type: Array,
    default: () => []
},
~~~

### placeholder

> 占位描述

~~~js
placeholder: {
    type: String,
    default: '请选择数据'
},
~~~

### labelField

> 选中后输入框显示的值的取值字段

~~~js
labelField: {
    type: String,
    default: 'label'
},
~~~

~~~
如果 options = [{ name: '按钮1', id: 1}, { name: '按钮2', id: 2 }]; labelField = 'name'
则选中后，输入框中则显示name字段的值
~~~

### valueField

> 选中值的取值字段

~~~js
valueField: {
    type: String,
    default: 'value'
}
~~~

~~~
如果 options = [{ name: '按钮1', id: 1}, { name: '按钮2', id: 2 }]; valueField = 'id'
则选中值就是id字段的值
~~~



## 事件

### @filter

> 过滤事件，支持本地过滤、远程过滤等

### @on-change

> 选中后返回值，值为valueField配置的字段值



## 示例

~~~vue
<template>
	<view class="content">
		<view class="card">
			<view class="title">默认样式</view>
			<view>
				<wo-select
					class="white-select"
					:id="'inputOne'"
					:options="state.data"
					:label-field="'label'"
					:value-field="'value'"
					@filter="onFilter"
					@on-change="onChangeStaff1"
				></wo-select>
			</view>
			<view class="title">选中值为：{{ state.res1 }}</view>
		</view>
		<view class="card">
			<view class="title">设置初始值</view>
			<view>
				<wo-select
					class="white-select"
					:id="'inputTwo2'"
					:value="'2'"
					:options="state.data"
					:label-field="'label'"
					:value-field="'value'"
					@filter="onFilter"
					@on-change="onChangeStaff2"
				></wo-select>
			</view>
			<view class="title">选中值为：{{ state.res2 }}</view>
		</view>
		<view class="card">
			<view class="title">自定义面板</view>
			<view>
				<wo-select
					class="white-select"
					ref="selectorRef1"
					:id="'inputTwo1'"
					:options="state.data"
					:label-field="'label'"
					:value-field="'value'"
					@filter="onFilter"
					@on-change="onChangeStaff3"
				>
					<view style="display: flex; flex-direction: column; gap: 20rpx">
						<view style="display: flex; justify-content:center">这是头部</view>
						<view
							v-for="item in state.data"
							:key="item.value"
							style="font-size: 24rpx; z-index: 120; display: flex; justify-content: space-between;"
							@click="selectorRef1.onClickSelect(item)"
						>
							<view style="width: 200px;">{{ item.label }}</view>
							<view style="background-color: dodgerblue; color: white; padding: 4px 8px;border-radius: 8rpx;">{{ item.category }}</view>
						</view>
					</view>
				</wo-select>
			</view>
			<view class="title">选中值为：{{ state.res3 }}</view>
		</view>
		<view class="card dark">
			<view class="title" style="color: white">暗黑样式</view>
			<view>
				<wo-select
					class="dark-select"
					ref="selectorRef"
					:id="'inputTwo'"
					:options="state.data"
					:label-field="'label'"
					:value-field="'value'"
					@filter="onFilter"
					@on-change="onChangeStaff4"
				>
					<view style="display: flex; flex-direction: column; gap: 20rpx">
						<view
							v-for="item in state.data"
							:key="item.value"
							style="font-size: 24rpx; z-index: 120; display: flex; justify-content: space-between;"
							@click="selectorRef.onClickSelect(item)"
						>
							<view style="width: 200px;">{{ item.label }}</view>
							<view style="background-color: dodgerblue; color: white; padding: 4px 8px;border-radius: 8rpx;">{{ item.category }}</view>
						</view>
					</view>
				</wo-select>
			</view>
			<view class="title" style="color: white;">选中值为：{{ state.res4 }}</view>
		</view>
		<view class="flex-center">内容区</view>
		<view class="card">
			<view class="title">面板位置自动调整</view>
			<view>
				<wo-select
					class="white-select"
					:id="'inputThree'"
					:placeholder="'输入过滤'"
					:options="state.data"
					:label-field="'label'"
					:value-field="'value'"
					@filter="onFilter"
					@on-change="onChangeStaff5"
				>
				</wo-select>
			</view>
			<view class="title">选中值为：{{ state.res5 }}</view>
		</view>
		<view class="flex-center">内容区</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue'
	const selectorRef1 = ref()
	const selectorRef = ref();
	const state = reactive({
		data: [
			{
				label: '哈墨的脑袋',
				value: '1',
				category: '正常'
			},
			{
				label: '摩西女神的手臂',
				value: '2',
				category: '异常'
			},
			{
				label: '奥尔墨的铠甲',
				value: '3',
				category: '维修中'
			},
			{
				label: '摩西女神的翅膀',
				value: '4',
				category: '正常'
			},
			{
				label: '战神瑞尔的斧头',
				value: '5',
				category: '正常'
			},
			{
				label: '丘比特的箭头',
				value: '6',
				category: '异常'
			},
			{
				label: '雅典娜的光明盾',
				value: '7',
				category: '异常'
			}
		] as any[],
		userOptions: [] as any[],
		res1: '',
		res2: '',
		res3: '',
		res4: '',
		res5: '',
	})
	// 克隆一份数据，用于过滤筛选
	state.userOptions = JSON.parse(JSON.stringify(state.data))
	const onFilter = (e: any) => {
	  state.data = state.userOptions.filter((res) => {
	    return res.label.indexOf(e.detail.value) !== -1
	  });
	};
	const onChangeStaff1 = (e: any) => {
		state.res1 = e
	};
	const onChangeStaff2 = (e: any) => {
		state.res2 = e
	};
	const onChangeStaff3 = (e: any) => {
		state.res3 = e
	};
	const onChangeStaff4 = (e: any) => {
		state.res4 = e
	};
	const onChangeStaff5 = (e: any) => {
		state.res5 = e
	};
</script>

<style scoped>
	.content {
		width: 100%;
		font-size: 28rpx;
	}
	.card {
		padding: 20px;
	}
	.dark {
		background-color: black;
	}
	.dark-select {
		color: white;
	}
	.title {
		font-weight: 600;
		font-size: 24rpx;
		padding-bottom: 10rpx;
	}
	:deep .dark-select .panel {
		background-color: black;
	}
	.box {
		padding: 20px;
	}
	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 600px;
		background: #666;
	}
</style>
~~~

