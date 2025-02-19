# wo-infinite-scroll 消息无限滚动

> 采用 uniapp-vue3 实现, 是一款消息无限滚动组件，适配 web、H5、微信小程序（其他平台小程序未测试过，可自行尝试）

## props 属性

### speed

> 速度值，值为 0 则表示不滚动

```js
speed: {
    type: number,
    default: 0,
},
```

### options

> 渲染数据，所提供的数据必须包含**label 字段**

```js
options: {
    type: any[],
    default: () => [
			{
				label: 'HTML',
			},
			{
				label: 'CSS',
			},
			{
				label: 'JavaScript',
			},
			{
				label: '测试1',
			},
			{
				label: 'Vue',
			},
			{
				label: 'React',
			},
			{
				label: 'Figma',
			},
			{
				label: 'Photoshop',
			},
		]
}
```

### styleObj

> 样式数据，支持通用的 css 样式编写

```js
styleObj: {
    type: Object,
    default: () => {
        return {
					background: '#FE8973',
					borderRadius: '5px',
					padding: '5px 15px',
					margin: '4px 5px',
				}
    }
}
```

## 使用示例

```vue
<template>
  <view>
    <view class="light" style="background-color: white">
      <wo-radio
        v-model:options="state.items"
        v-model:defaultValue="state.default"
        @on-change="changeEvent"
      >
      </wo-radio>
    </view>
    <view class="light">
      <wo-radio
        v-model:options="state.items"
        v-model:defaultValue="state.default"
        v-model:styleObj="state.theme.light"
        v-slot="slotProps"
        @on-change="changeEvent"
      >
        <view style="display: flex;">
          <view>{{ slotProps.data.name }}</view>
          <view class="tag">{{ slotProps.data.tag }}</view>
        </view>
      </wo-radio>
    </view>
    <view class="dark">
      <wo-radio
        v-model:options="state.items"
        v-model:defaultValue="state.default"
        v-model:styleObj="state.theme.dark"
        v-slot="slotProps"
        @on-change="changeEvent"
      >
        <view style="display: flex;">
          <view>{{ slotProps.data.name }}</view>
          <view class="tag">{{ slotProps.data.tag }}</view>
        </view>
      </wo-radio>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  items: [
    {
      value: "1",
      name: "苹果味",
      tag: "饮料",
    },
    {
      value: "2",
      name: "香蕉味",
      tag: "酒水",
    },
    {
      value: "3",
      name: "火龙果味",
      tag: "饮料",
    },
    {
      value: "4",
      name: "西瓜味",
      tag: "饮料",
    },
    {
      value: "5",
      name: "哈密瓜味",
      tag: "酒水",
    },
    {
      value: "6",
      name: "榴莲味",
      tag: "酒水",
    },
  ],
  default: "2",
  theme: {
    light: {
      primary: "blue",
      unselectedRadioBg: "#eaeaea",
      selectedBg: "hsla(0,0%,100%,0.5)",
      height: 20,
    },
    dark: {
      primary: "blue",
      unselectedRadioBg: "hsl(223,90%,30%)",
      selectedBg: "hsla(223,90%,30%,0.5)",
      height: 20,
    },
  },
  height: 12,
});
const changeEvent = (el) => {
  console.log("点击：", el);
};
</script>

<style lang="scss" scoped>
.light {
  border-radius: 10px;
  padding: 20rpx;
  font-size: 24rpx;
  background-color: hsl(223, 90%, 90%);
  margin: 20px;
  height: 300px;
  overflow: auto;
}
.dark {
  border-radius: 10px;
  padding: 20rpx;
  font-size: 24rpx;
  background-color: hsl(223, 90%, 10%);
  color: white;
  margin: 20px;
  height: 300px;
  overflow: auto;
}
.tag {
  background-color: #1ba035;
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
```
