<template>
	<view>{{ state.title }}</view>
</template>
<script setup>
import { reactive } from 'vue'
import { onLoad, onReady } from '@dcloudio/uni-app'
const state = reactive({
	title: "插件示例demo"
})
onLoad(() => {
  console.log('插件onLoad')
})

onReady(() => {
	console.log('插件onReady')
})
</script>
<style>
</style>
