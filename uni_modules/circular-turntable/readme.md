# temp-circular-turntable 圆形滚盘
> 采用 uniapp 纯css实现的一款图片、头像圆形滚盘示例组件模板, 支持 vue2、vue3，适配H5、微信小程序（其他小程序未试过，可自行尝试）

## props 属性

### options

> 选项数组，必须具备 image 字段

```js
options: {
  type: Array,
  default: () => [
    { image: "https://randomuser.me/api/portraits/lego/3.jpg" },
    { image: "https://randomuser.me/api/portraits/lego/1.jpg" },
    { image: "https://randomuser.me/api/portraits/lego/2.jpg" },
    { image: "https://randomuser.me/api/portraits/lego/4.jpg" },
    { image: "https://randomuser.me/api/portraits/lego/5.jpg" },
    { image: "https://randomuser.me/api/portraits/lego/6.jpg" },
    { image: "https://randomuser.me/api/portraits/lego/7.jpg" },
  ],
},
```


### circleRadius

> 圆盘半径，单位rpx

```js
circleRadius: {
  type: Number,
  default: 150,
},
```

### circleCenter

> 圆盘圆心坐标，单位rpx

```js
circleCenter: {
  type: Number,
  default: 200,
},
```

### imageSize

> 滚盘元素图片大小，单位rpx

```js
imageSize: {
  type: Number,
  default: 60,
},
```

### speed

> 旋转速度，单位ms

```js
speed: {
  type: Number,
  default: 1,
},
```

## 使用示例

### vue2 使用示例

```javascript
<template>
  <view>
    <view style="padding: 10px">
      <view class="template-title">模板一：</view>
      <view style="width: 400px; height: 300px">
        <DemoTemplate :options="imageList"></DemoTemplate>
      </view>
    </view>
    <view style="padding: 10px">
      <view class="template-title">模板二：</view>
      <view style="width: 400px; height: 300px">
        <DemoTemplate
          :circle-radius="100"
          :circle-center="200"
          :image-size="50"
        ></DemoTemplate>
      </view>
    </view>
  </view>
</template>

<script>
import DemoTemplate from "./components/index.vue";

export default {
  components: {
    DemoTemplate,
  },
  data() {
    return {
      imageList: [
        {
          image: "https://randomuser.me/api/portraits/lego/3.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/1.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/2.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/5.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/6.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/7.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/8.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/9.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
        },
        {
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.template-title {
  font-weight: bold;
  font-size: 14px;
}
</style>
```

### vue3 使用示例

```javascript
<template>
  <view>
    <view style="padding: 10px">
      <view class="template-title">模板一：</view>
      <view style="width: 400px; height: 300px">
        <DemoTemplate :options="imageList"></DemoTemplate>
      </view>
    </view>
    <view style="padding: 10px">
      <view class="template-title">模板二：</view>
      <view style="width: 400px; height: 300px">
        <DemoTemplate
          :circle-radius="100"
          :circle-center="200"
          :image-size="50"
        ></DemoTemplate>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import DemoTemplate from "./components/index.vue";

const imageList = ref([
  { image: "https://randomuser.me/api/portraits/lego/3.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/1.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/2.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/4.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/5.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/6.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/7.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/8.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/9.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/4.jpg" },
  { image: "https://randomuser.me/api/portraits/lego/4.jpg" },
]);
</script>

<style scoped>
.template-title {
  font-weight: bold;
  font-size: 14px;
}
</style>
```
