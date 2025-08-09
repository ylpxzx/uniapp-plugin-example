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
