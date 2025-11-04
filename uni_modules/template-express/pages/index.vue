<template>
  <view class="card">
    <tabsComp
      :tabOptions="tabOptions"
      :defaultTab="defaultTab"
      @onChange="onChangeTab"
    >
      <view>
        <view
          v-if="tabValue === 'send'"
          style="height: 300rpx"
          class="flex-center"
        >
          火车票模块
        </view>
        <view
          v-if="tabValue === 'receive'"
          style="height: 300rpx"
          class="flex-center"
        >
          机票模块
        </view>
      </view>
    </tabsComp>
  </view>
</template>
<script setup>
import { ref } from "vue";
import tabsComp from "./components/tabs-comp.vue";

const defaultTab = "send"; // 默认选中的tab
const tabOptions = [
  {
    type: "send",
    title: "火车票",
  },
  {
    type: "receive",
    title: "机票",
  },
];
const tabValue = ref(defaultTab);

function onChangeTab(type) {
  tabValue.value = type;
}
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  padding: 40rpx 20rpx;
  background-color: #f5f5f5;
  height: 100%;
}
</style>
