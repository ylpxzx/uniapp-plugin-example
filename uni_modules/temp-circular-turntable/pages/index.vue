<template>
  <view>
    <view style="padding: 10px">
      <view class="template-title">模板一：</view>
      <view style="width: 400px; height: 400px">
        <DemoTemplate></DemoTemplate>
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
    return {};
  },
};
</script>

<style scoped>
.template-title {
  font-weight: bold;
  font-size: 14px;
}
</style>
