# wo-spinner

> 采用 uniapp-vue3 实现, 是一款数字动画调节器件，支持长按、单点操作，提供丝滑的增减动画效果，支持自定义配置，适配 web、H5、微信小程序（其他平台小程序未测试过，可自行尝试）

## props 属性

### defaultValue

> 默认值

```js
defaultValue: {
    type: number,
    default: 0,
},
```

### spinnerHeight

> 容器高度

```js
spinnerHeight: {
    type: string,
    default: '400px',
},
```

### spinnerWidth

> 容器宽度

```js
spinnerWidth: {
    type: string,
    default: '50px',
},
```

### spinnerBgColor

> 容器背景色

```js
spinnerBgColor: {
    type: string,
    default: '#333',
},
```

### spinnerRadius

> 容器圆角

```js
spinnerRadius: {
    type: string,
    default: '10px',
},
```

### progressWidth

> 色标宽度

```js
progressWidth: {
    type: string,
    default: '12px',
},
```

### progressBgColor

> 色标背景色

```js
progressBgColor: {
    type: string,
    default: '#222',
},
```

### startColor

> 色标起始色

```js
startColor: {
    type: string,
    default: '#0f0',
},
```

### middleColor

> 色标中间色（当数值达到中间值 middleNumber 后呈现的颜色）

```js
middleColor: {
    type: string,
    default: '#ff0',
},
```

### targetColor

> 色标最终色（当数值达到临界值 criticalNumber 后呈现的颜色）

```js
targetColor: {
    type: string,
    default: '#f00',
},
```

### maxNumber

> 色标最大值

```js
maxNumber: {
    type: number,
    default: 100,
},
```

### middleNumber

> 色标中间值

```js
middleNumber: {
    type: number,
    default: 70,
},
```

### criticalNumber

> 色标临界值

```js
criticalNumber: {
    type: number,
    default: 90,
},
```

### spanNumber

> 色标增减跨度

```js
spanNumber: {
    type: number,
    default: 1,
},
```

## 事件

### @onChange

> 点击增减时触发，返回增减后的值: {value: 56}

## 使用示例

```vue
<template>
  <view>
    <view>值：{{ state.val }}</view>
    <view class="light">
      <wo-spinner
        v-model:defaultValue="state.normalVal"
        @on-change="changeEvent"
      ></wo-spinner>
      <wo-spinner v-model:defaultValue="state.warningVal"></wo-spinner>
      <wo-spinner v-model:defaultValue="state.abnormalVal"></wo-spinner>
      <wo-spinner
        :spinnerHeight="'300px'"
        :spinnerWidth="'70px'"
        :spinnerRadius="'40px'"
        :progressWidth="'30px'"
      ></wo-spinner>
      <wo-spinner
        v-model:defaultValue="state.defaultVal"
        :spinnerBgColor="'#0079FF'"
        :progressBgColor="'#ADE8FF'"
        :maxNumber="10"
        :middleNumber="0"
        :criticalNumber="7"
        :startColor="'#f00'"
        :middleColor="'#ff0'"
        :targetColor="'#269446'"
      ></wo-spinner>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  normalVal: 45,
  warningVal: 72,
  abnormalVal: 92,
  defaultVal: 3,
  val: 45,
});
const changeEvent = (el) => {
  console.log("点击：", el);
  state.val = el.value;
};
</script>

<style lang="scss" scoped>
.light {
  color: #fff;
  padding: 20rpx;
  font-size: 24rpx;
  margin: 20px;
  display: flex;
  gap: 20px;
}
</style>
```
