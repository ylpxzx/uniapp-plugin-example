# wo-step-indicator

> 采用 uniapp 实现的一款步进指示器组件，展示业务步骤进度等内容，对外提供“前进”、“后退”方法，让用户可高度自定义所需交互，适配 web、H5、微信小程序（其他平台小程序未测试过，可自行尝试）

## props 属性

### defaultStep

> 默认步骤值（步骤值从 1 开始）

```js
defaultStep: {
	type: number,
	default: 1,
},
```

### options

> 步骤选项值

```js
options: {
  type: Array,
  default: () => [
    { index: 'A', name: 'Step 1' },
    { index: 'B', name: 'Step 2' },
    { index: 'C', name: 'Step 3' },
    { index: 'D', name: 'Step 4' },
  ],
},
```

## 对外提供的方法

### prev()

后退方法，步骤值-1

### next()

前进方法，步骤值+1

## 事件

### @change

> 触发“前进”、“后退”方法时触发，返回当前所在步骤数据

```js
{
	step: 1,
	data: {
		... // options内设置选项值，如options[step], 即options[1]
	}
}
```

## 使用示例

分别演示 vue2、vue3 setup 示例

### vue2 写法

```vue
<template>
  <view>
    <view class="font-class">示例一：</view>
    <view>
      <view
        style="background-color: #272822; padding: 10px; margin: 10px; border-radius: 6px; color: #fff;"
      >
        <wo-step-indicator
          :default-step="1"
          :options="steps"
          ref="stepIndicator1"
          @change="onChangeStep"
        ></wo-step-indicator>
      </view>
      <view style="padding: 10px 0; margin: 0 10px;">
        <view v-show="step === 1">
          <view
            style="height: 100px; width: 100%; border-radius: 6px; background-color: #299B48; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤一
          </view>
        </view>
        <view v-show="step === 2">
          <view
            style="height: 100px; width: 100%; border-radius: 6px; background-color:#FF5739; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤二
          </view>
        </view>
        <view v-show="step === 3">
          <view
            style="height: 100px; width: 100%; border-radius: 6px; background-color: #41A5E1; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤三
          </view>
        </view>
        <view v-show="step === 4">
          <view
            style="height: 100px; width: 100%; border-radius: 6px; background-color: #272822; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤四
          </view>
        </view>
      </view>
    </view>
    <view class="font-class">示例二：</view>
    <view style="display: flex; gap: 10px;">
      <view class="step-class" style="margin-right: 0px;">
        <wo-step-indicator
          ref="stepIndicator2"
          @change="onChangeStep"
        ></wo-step-indicator>
      </view>
      <view style="margin: 10px 10px 10px 0; flex: 1;">
        <view v-show="step === 1">
          <view
            style="height: 200px; width: 100%; border-radius: 6px; background-color: #299B48; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤一
          </view>
        </view>
        <view v-show="step === 2">
          <view
            style="height: 200px; width: 100%; border-radius: 6px; background-color:#FF5739; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤二
          </view>
        </view>
        <view v-show="step === 3">
          <view
            style="height: 200px; width: 100%; border-radius: 6px; background-color: #41A5E1; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤三
          </view>
        </view>
        <view v-show="step === 4">
          <view
            style="height: 200px; width: 100%; border-radius: 6px; background-color: #272822; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤四
          </view>
        </view>
      </view>
    </view>
    <view class="font-class">自定义操作：</view>
    <view style="display: flex; gap: 10px; padding-top: 10px;">
      <button @click="prevStep" :disabled="step <= 1">上一步</button>
      <button @click="nextStep" :disabled="step >= steps.length">下一步</button>
      <button v-show="step >= steps.length">完成</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          index: "1",
          name: "Step 1",
        },
        {
          index: "2",
          name: "Step 2",
        },
        {
          index: "3",
          name: "Step 3",
        },
        {
          index: "4",
          name: "Step 4",
        },
      ],
      step: 1,
      stepIndicator1: null,
      stepIndicator2: null,
    };
  },
  methods: {
    prevStep() {
      this.$refs.stepIndicator1.prev();
      this.$refs.stepIndicator2.prev();
    },
    nextStep() {
      this.$refs.stepIndicator1.next();
      this.$refs.stepIndicator2.next();
    },
    onChangeStep(data) {
      this.step = data.step;
      console.log("Current step:", data);
    },
  },
};
</script>

<style>
.font-class {
  font-size: 12px;
  padding: 10px 10px 0 10px;
}
.step-class {
  background-color: #272822;
  color: #fff;
  padding: 15px;
  margin: 10px;
  border-radius: 6px;
}
</style>
```

### vue3 setup 写法

```vue
<template>
  <view>
    <view class="font-class">示例一：</view>
    <view>
      <view
        style="background-color: #272822; padding: 10px; margin: 10px; border-radius: 6px; color: #fff;"
      >
        <wo-step-indicator
          :default-step="1"
          :options="steps"
          ref="stepIndicator1"
          @change="onChangeStep"
        ></wo-step-indicator>
      </view>
      <view style="padding: 10px 0; margin: 0 10px;">
        <view v-show="step === 1">
          <view
            style="height: 100px; width: 100%; border-radius: 6px; background-color: #299B48; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤一
          </view>
        </view>
        <view v-show="step === 2">
          <view
            style="height: 100px; width: 100%; border-radius: 6px; background-color:#FF5739; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤二
          </view>
        </view>
        <view v-show="step === 3">
          <view
            style="height: 100px; width: 100%; border-radius: 6px; background-color: #41A5E1; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤三
          </view>
        </view>
        <view v-show="step === 4">
          <view
            style="height: 100px; width: 100%; border-radius: 6px; background-color: #272822; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤四
          </view>
        </view>
      </view>
    </view>
    <view class="font-class">示例二：</view>
    <view style="display: flex; gap: 10px;">
      <view class="step-class" style="margin-right: 0px;">
        <wo-step-indicator
          ref="stepIndicator2"
          @change="onChangeStep"
        ></wo-step-indicator>
      </view>
      <view style="margin: 10px 10px 10px 0; flex: 1;">
        <view v-show="step === 1">
          <view
            style="height: 200px; width: 100%; border-radius: 6px; background-color: #299B48; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤一
          </view>
        </view>
        <view v-show="step === 2">
          <view
            style="height: 200px; width: 100%; border-radius: 6px; background-color:#FF5739; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤二
          </view>
        </view>
        <view v-show="step === 3">
          <view
            style="height: 200px; width: 100%; border-radius: 6px; background-color: #41A5E1; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤三
          </view>
        </view>
        <view v-show="step === 4">
          <view
            style="height: 200px; width: 100%; border-radius: 6px; background-color: #272822; color: #fff; display: flex; justify-content: center; align-items: center;"
          >
            步骤四
          </view>
        </view>
      </view>
    </view>
    <view class="font-class">自定义操作：</view>
    <view style="display: flex; gap: 10px; padding-top: 10px;">
      <button @click="prevStep" :disabled="step <= 1">上一步</button>
      <button @click="nextStep" :disabled="step >= steps.length">下一步</button>
      <button v-show="step >= steps.length">完成</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const steps = ref([
  { index: "1", name: "Step 1" },
  { index: "2", name: "Step 2" },
  { index: "3", name: "Step 3" },
  { index: "4", name: "Step 4" },
]);

const step = ref(1);
const stepIndicator1 = ref(null);
const stepIndicator2 = ref(null);

const prevStep = () => {
  stepIndicator1.value.prev();
  stepIndicator2.value.prev();
};

const nextStep = () => {
  stepIndicator1.value.next();
  stepIndicator2.value.next();
};

const onChangeStep = (data) => {
  step.value = data.step;
  console.log("Current step:", data);
};
</script>

<style>
.font-class {
  font-size: 12px;
  padding: 10px 10px 0 10px;
}

.step-class {
  background-color: #272822;
  color: #fff;
  padding: 15px;
  margin: 10px;
  border-radius: 6px;
}
</style>
```
