<template>
	<view class="container">
		<view>
			<view class="h1 flex-center">时间轴组件</view>
			<wo-timeline :options="timelineItems" @change="onChange"></wo-timeline>
			<wo-timeline :options="timelineItems" @change="onChange">
				<template #item="{ content }">
					<view><button type="primary" size="mini">操作按钮</button></view>
					<view>{{ content }}</view>
				</template>
			</wo-timeline>
		</view>
		<view>
			<view class="h1 flex-center">暗黑模式</view>
			<view class="dark-mode">
				<wo-timeline :options="timelineItems" @change="onChange"></wo-timeline>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			timelineItems: [
				{
					axisPoint: "April 1, 2025",
					title: "中方在世贸组织追加起诉美升级对华关税措施🧋",
					content:
						"美国东部时间4月8日，美方将此前宣布的对中国输美产品加征34%所谓“对等关税”，进一步提高50%至84%",
					expanded: false,
				},
				{
					axisPoint: "April 1, 2025",
					title: "海关总署：暂停6家美国企业产品输华资质",
					content:
						"为保护中国消费者健康，由于相关进口产品存在检验检疫问题，决定暂停1家美国涉事企业高粱输华资质，3家美国涉事企业禽肉骨粉输华资质",
					expanded: false,
				},
				{
					axisPoint: "April 2, 2025",
					title: "中方对原产于美国的所有进口商品加征34%关税",
					content:
						"2025年4月2日，美国政府宣布对中国输美商品征收“对等关税”。美方做法不符合国际贸易规则，严重损害中方的正当合法权益，是典型的单边霸凌做法",
					expanded: true,
				},
				{
					axisPoint: "April 3, 2025",
					title: "👋商务部对进口医用CT球管发起产业竞争力立案调查",
					content:
						"依据《中华人民共和国对外贸易法》第三十六条规定，商务部可以自行或者会同国务院其他有关部门对货物进出口、技术进出口、国际服务贸易对国内产业及其竞争力的影响发起调查",
					expanded: false,
				},
				{
					axisPoint: "April 4, 2025",
					title: "我国对7类中重稀土相关物项实施出口管制🍈",
					content:
						"4月4日，商务部新闻发言人就对中重稀土相关物项实施出口管制应询答记者问",
					expanded: false,
				},
			],
			targetIndex: '',
			isExpanding: false,
			isCollapsing: false,
		};
	},
	methods: {
		onChange(e) {
			console.log('onChange', e);
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

.dark-mode {
	padding-top: 2em;
	background-color: #000;
	color: #fff;
}
</style>