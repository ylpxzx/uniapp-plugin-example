# wo-dropdown-menu 下拉菜单

> 采用 uniapp 实现, 是一款具备丝滑折叠、展开动画的下拉菜单，支持 vue2、vue3；适配 web、H5、微信小程序（其他平台小程序未测试过，可自行尝试）

## props 属性

### defaultValue

> 默认值

```js
defaultValue: {
    type: number,
    default: 1,
},
```

### options

> 选项数组，必须具备 label、value 字段

```js
options: {
    type: Array,
    default: () => [
      { label: "windows", value: 1 },
      { label: "mac", value: 2 },
      { label: "linux", value: 3 },
      { label: "test", value: 4 }
    ],
  },
```

## 事件

### @onChange

> 点击选项时触发，返回 options 中提供的选项值，

## 使用示例

### vue2 使用示例

```javascript
<template>
  <view>
    <view>
      <view class="title">默认样式：</view>
      <view class="comp">
        <wo-dropdown-menu :options="options"></wo-dropdown-menu>
      </view>
    </view>
    <view>
      <view class="title">自定义样式：</view>
      <view
        style="border: 1px solid #999; margin: 5px; font-size: 12px; border-radius: 5px;"
      >
        <wo-dropdown-menu></wo-dropdown-menu>
      </view>
      <view class="comp-dark">
        <wo-dropdown-menu
          :options="options"
          :default-value="4"
          @change="onChange"
        ></wo-dropdown-menu>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          label: "荆轲",
          value: 1,
        },
        {
          label: "李白",
          value: 2,
        },
        {
          label: "杜甫",
          value: 3,
        },
        {
          label: "白居易",
          value: 4,
        },
        {
          label: "王维",
          value: 5,
        },
        {
          label: "李清照",
          value: 6,
        },
        {
          label: "苏轼",
          value: 7,
        },
      ],
    };
  },
  methods: {
    onChange(data) {
      console.log("选择值：", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
  padding: 10px 0 0 10px;
}

.comp {
  font-size: 12px;
}

.comp-dark {
  margin: 5px;
  background-color: black;
  color: white;
  font-size: 12px;
  border-radius: 5px;
}
</style>
```

### vue3 使用示例

```javascript
<template>
  <view>
    <view>
      <view class="title">默认样式：</view>
      <view class="comp">
        <wo-dropdown-menu :options="state.options"></wo-dropdown-menu>
      </view>
    </view>
    <view>
      <view class="title">自定义样式：</view>
      <view
        style="border: 1px solid #999; margin: 5px; font-size: 12px; border-radius: 5px;"
      >
        <wo-dropdown-menu></wo-dropdown-menu>
      </view>
      <view class="comp-dark">
        <wo-dropdown-menu
          :options="state.options"
          :default-value="4"
          @change="onChange"
        ></wo-dropdown-menu>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      label: "荆轲",
      value: 1,
    },
    {
      label: "李白",
      value: 2,
    },
    {
      label: "杜甫",
      value: 3,
    },
    {
      label: "白居易",
      value: 4,
    },
    {
      label: "王维",
      value: 5,
    },
    {
      label: "李清照",
      value: 6,
    },
    {
      label: "苏轼",
      value: 7,
    },
  ],
});

const onChange = (data) => {
  console.log("选择值：", data);
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
  padding: 10px 0 0 10px;
}

.comp {
  font-size: 12px;
}

.comp-dark {
  margin: 5px;
  background-color: black;
  color: white;
  font-size: 12px;
  border-radius: 5px;
}
</style>
```
