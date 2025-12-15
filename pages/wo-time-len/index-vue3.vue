<template>
  <view class="container">
    <view style="border-top: 1rpx solid #eee">
      <view>
        <view class="h1 flex-center">面板使用方式(不限制时长)</view>
        <wo-time-len
          ref="timeDom0"
          :value="dateTimeForm"
          :limit-use-time="0"
          :tab-index="tabIndex"
          @change="onChange"
          @error="onError"
        ></wo-time-len>
      </view>
      <view style="padding: 40rpx">
        <button type="primary" @click="confirmOne">确认</button>
      </view>
    </view>

    <view style="padding: 40rpx; border-top: 1rpx solid #eee">
      <view class="h1 flex-center">uni-popup弹窗使用方式</view>
      <button @click="onOpen">弹窗形式</button>
    </view>
    <uni-popup ref="customTimePop" type="bottom">
      <view
        style="border-radius: 20rpx; background-color: white; height: 1000rpx"
      >
        <view
          style="
            display: flex;
            justify-content: space-between;
            padding: 30rpx 40rpx;
            font-weight: 600;
            border-bottom: 1rpx solid #eee;
          "
        >
          <view @click="onClose">关闭</view>
          <view style="color: #3370ff" @click="confirmTwo">确认</view>
        </view>
        <view style="background-color: tomato; color: white; font-size: 24rpx"
          >已限制时长为：{{ limitUseTime }}小时</view
        >
        <wo-time-len
          ref="timeDom1"
          :value="dateTimeForm"
          :limit-use-time="limitUseTime"
          :tab-index="tabIndex"
          @change="onChange"
          @error="onError"
        ></wo-time-len>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue";

const customTimePop = ref();
const timeDom0 = ref();
const timeDom1 = ref();

function pad(num) {
  return num < 10 ? "0" + num : num;
}

function formatDate(date, fmt = "YYYY-MM-DD") {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  if (fmt === "YYYY-MM-DD") return `${year}-${month}-${day}`;
  if (fmt === "MM月DD日") return `${month}月${day}日`;
  return `${year}-${month}-${day}`;
}

function getCurrentHour() {
  const now = new Date();
  return now.getHours();
}
function getNextHour() {
  const now = new Date();
  return (now.getHours() + 1) % 24;
}
function getCurrentMinute() {
  const now = new Date();
  return now.getMinutes();
}

const dateTimeForm = reactive({
  startDate: formatDate(new Date()),
  startHour: getCurrentHour(),
  startMinute: getCurrentMinute(),
  endDate: formatDate(new Date()),
  endHour: getNextHour(),
  endMinute: getCurrentMinute(),
});
const limitUseTime = ref(48);
const tabIndex = ref(1);

function onChange(data) {
  uni.showToast({
    title: `${data.startDate} ${pad(data.startHour)}:${pad(
      data.startMinute
    )} ~ ${data.endDate} ${pad(data.endHour)}:${pad(data.endMinute)}`,
    icon: "none",
  });
  customTimePop.value.close();
  console.log("选择结果：", data);
}
function onError(msg) {
  console.log("消息L:", msg);
}
function confirmOne() {
  timeDom0.value.onConfirm();
}
function confirmTwo() {
  timeDom1.value.onConfirm();
}
function onOpen() {
  customTimePop.value.open();
}
function onClose() {
  customTimePop.value.close();
}
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
