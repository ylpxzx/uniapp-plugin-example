# wo-toast-notice-2 通知弹窗

> 采用 uniapp 实现的一款简单通知弹窗，支持vue2、vue3；适配 web、H5、微信小程序（其他平台小程序未测试过，可自行尝试）；

> 用户可下载该组件模板进行自定义开发

## 属性

### timeLength属性

| 参数       | 类型   | 默认值 | 说明                                      |
| ---------- | ------ | ------ | ----------------------------------------- |
| timeLength | number | 4000   | 弹窗显示时长（毫秒），0表示持续显示不关闭 |

```js
timeLength: {
  type: Number,
  default: 4000,
},
```

使用示例

```javascript
...
# 持续显示弹窗不关闭
<wo-toast-notice-2 :time-length="0" ref="noticeRef" />
...
```

## 使用方法

- 在需使用弹窗的页面引入组件

```javascript
...
<wo-toast-notice-2 ref="noticeRef" />
...
```

- 通过调用组件暴露的 showToast 方法触发弹窗通知

```javascript
...
import { ref } from "vue";
const noticeRef = ref();
const confirmOne = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "提示通知",
    content: '这是一条提示通知的内容,<a href="#">contact form</a>。',
  });
};
...
```

- showToast 方法参数
  - type：通知类型，有 tip、success、warning、error 四种类型
  - title：弹窗标题
  - content：弹窗内容

## vue2使用示例

```javascript
<template>
  <view class="container">
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view style="border-top: 1rpx solid #eee">
      <view>
        <view class="h1 flex-center">通知弹窗</view>
      </view>
      <view
        style="
          padding: 20rpx;
          display: flex;
          gap: 10rpx;
          flex-wrap: wrap;
          justify-content: center;
        "
      >
        <button type="primary" @click="confirmOne('tip')">提示通知</button>
        <button type="primary" @click="confirmTwo('success')">成功通知</button>
        <button type="primary" @click="confirmThree('warning')">
          警告通知
        </button>
        <button type="primary" @click="confirmFour('error')">错误通知</button>
      </view>
    </view>
    <wo-toast-notice-2 ref="noticeRef" />
  </view>
</template>

<script>
export default {
  methods: {
    confirmOne(type) {
      this.$refs.noticeRef.showToast({
        type: type,
        title: "提示通知",
        content: '这是一条提示通知的内容,<a href="#">contact form</a>。',
      });
    },
    confirmTwo(type) {
      this.$refs.noticeRef.showToast({
        type: type,
        title: "成功通知",
        content: "这是一条成功通知的内容。",
      });
    },
    confirmThree(type) {
      this.$refs.noticeRef.showToast({
        type: type,
        title: "警告通知",
        content: "这是一条警告通知的内容。",
      });
    },
    confirmFour(type) {
      this.$refs.noticeRef.showToast({
        type: type,
        title: "错误通知",
        content: "这是一条错误通知的内容。",
      });
    },
  },
};
</script>

<style scoped>
.h1 {
  font-size: 1em;
  text-align: center;
  padding: 1em 0;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tip-popup {
  width: 560rpx;
  height: max-content;
  border-radius: 20rpx;
  background: #fff;
}

.tip {
  color: #333;
  font-size: 28rpx;
  font-weight: 600;
}
</style>

```

## vue3使用示例

```javascript
<template>
  <view class="container">
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view>占位</view>
    <view style="border-top: 1rpx solid #eee">
      <view>
        <view class="h1 flex-center">通知弹窗</view>
      </view>
      <view
        style="
          padding: 20rpx;
          display: flex;
          gap: 10rpx;
          flex-wrap: wrap;
          justify-content: center;
        "
      >
        <button type="primary" @click="confirmOne('tip')">提示通知</button>
        <button type="primary" @click="confirmTwo('success')">成功通知</button>
        <button type="primary" @click="confirmThree('warning')">
          警告通知
        </button>
        <button type="primary" @click="confirmFour('error')">错误通知</button>
      </view>
    </view>
    <wo-toast-notice-2 ref="noticeRef" />
  </view>
</template>

<script setup>
import { ref } from "vue";

const noticeRef = ref();

const confirmOne = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "提示通知",
    content: '这是一条提示通知的内容,<a href="#">contact form</a>。',
  });
};

const confirmTwo = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "成功通知",
    content: "这是一条成功通知的内容。",
  });
};

const confirmThree = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "警告通知",
    content: "这是一条警告通知的内容。",
  });
};

const confirmFour = (type) => {
  noticeRef.value.showToast({
    type: type,
    title: "错误通知",
    content: "这是一条错误通知的内容。",
  });
};
</script>

<style scoped>
.h1 {
  font-size: 1em;
  text-align: center;
  padding: 1em 0;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tip-popup {
  width: 560rpx;
  height: max-content;
  border-radius: 20rpx;
  background: #fff;
}

.tip {
  color: #333;
  font-size: 28rpx;
  font-weight: 600;
}
</style>

```
