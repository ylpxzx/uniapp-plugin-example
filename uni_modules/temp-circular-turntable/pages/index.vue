<template>
  <view>
    <view style="padding: 10px">
      <view class="template-title">模板一：</view>
      <view style="width: 400px; height: 400px">
        <DemoTemplate :options="imageList"></DemoTemplate>
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
          title: "0",
          image: "https://randomuser.me/api/portraits/lego/3.jpg",
          value: "0",
        },
        {
          title: "1",
          image: "https://randomuser.me/api/portraits/lego/1.jpg",
          value: "1",
        },
        {
          title: "2",
          image: "https://randomuser.me/api/portraits/lego/2.jpg",
          value: "2",
        },
        {
          title: "3",
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
          value: "3",
        },
        {
          title: "4",
          image: "https://randomuser.me/api/portraits/lego/5.jpg",
          value: "4",
        },
        {
          title: "5",
          image: "https://randomuser.me/api/portraits/lego/6.jpg",
          value: "5",
        },
        {
          title: "6",
          image: "https://randomuser.me/api/portraits/lego/7.jpg",
          value: "6",
        },
        {
          title: "7",
          image: "https://randomuser.me/api/portraits/lego/8.jpg",
          value: "7",
        },
        {
          title: "8",
          image: "https://randomuser.me/api/portraits/lego/9.jpg",
          value: "8",
        },
        {
          title: "9",
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
          value: "9",
        },
        {
          title: "10",
          image: "https://randomuser.me/api/portraits/lego/4.jpg",
          value: "10",
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
