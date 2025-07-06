<template>
	<view style="padding: 10px;">
		<view v-for="(elemt, index) in dataList" :key="index" class="timeline__item">
			<view class="timeline__item-header">
				<view class="timeline__dot"></view>
				<view>
					<view class="timeline__title">{{ elemt.title }}</view>
					<view class="timeline__date">{{ elemt.time }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	  data() {
	    return {
	      dataList: [
					{
						time: '2025-07-06 17:53',
						title: '当地时间7月6日傍晚，第二批从日本鹿儿岛县吐噶喇列岛疏散撤离的当地居民已乘坐轮渡抵达鹿儿岛市的港口。本次疏散撤离的人员为恶石岛的31名居民和小宝岛的15名居民，合计46人。'
					},
					{
						time: '2025-07-05 12:12',
						title: '当地时间7月5日，美国企业家埃隆·马斯克在社交媒体平台X上发文称，“美国党”于当日成立，以还给人民自由。马斯克创建第三党，能撼动两大党的地位吗？'
					},
					{
						time: '2025-07-06 13:14',
						title: '近期，罗马仕、安克创新等充电宝品牌相继召回多款产品。罗马仕召回2023年6月5日到2024年7月31日期间制造的三个型号充电宝，共22个批次共计491745台。罗马仕科技有限公司品牌负责人表示：“对这次事件给消费者带来的损失表示深刻的歉意，我们所有有问题的产品，我们尽量开通所有的召回渠道，去帮助消费者顺利地去把这些产品召回回来”。深圳市市场监管局成立了专门的小组，督促企业的召回工作，要求罗马仕科技有限公司每天提交召回情况报告。'
					}
				]
	    };
	  }
	}
</script>

<style scoped>
	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.h-full {
		height: 100%;
	}
	.timeline__date {
	  font-size: 12px;
	  font-weight: normal;
	  color: #666;
	}
	
	.timeline__dot {
	  background: rgba(12, 56, 136, 0.4);
	  border-radius: 50%;
	  display: inline-block;
	  flex-shrink: 0;
	  margin: 5px 8px 0 0;
	  position: relative;
	  width: 12px;
	  height: 12px;
	}
	
	.timeline__dot:before {
		position: absolute;
		background: #1051c9;
		border-radius: 50%;
		content: '';
		display: block;
		height: 6px;
		width: 6px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.timeline__item {
	  position: relative;
	  padding-bottom: 10px;
	}
	
	.timeline__item-header {
	  display: flex;
	}
	
	.timeline__title {
	  font-size: 14px;
	  font-weight: normal;
	  color: #000000;
		padding-bottom: 4px;
	}
</style>