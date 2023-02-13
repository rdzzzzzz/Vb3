<template>
	<div class="echart-scontent">
		<div ref="echarts_columnar" class="columnar"></div>

		<div ref="echarts_pie_chart" class="columnar"></div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import * as echarts from 'echarts';

// 图表放置dom，初始化echarts

const echarts_columnar = ref();

const echarts_pie_chart = ref();

onMounted(() => {
	initEcharts();
});

const initEcharts = () => {
	const myChart = echarts.init(echarts_columnar.value);

	let option = {
		title: {
			text: 'ECharts 入门示例',
		},

		tooltip: {},

		xAxis: {
			data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
		},

		yAxis: {},

		series: [
			{
				name: '销量',

				type: 'bar',

				data: [5, 20, 36, 10, 10, 20],
			},
		],
	};

	const myChart2 = echarts.init(echarts_pie_chart.value);

	let option2 = {
		series: [
			{
				type: 'pie',

				data: [
					{
						value: 335,

						name: '直接访问',
					},

					{
						value: 234,

						name: '联盟广告',
					},

					{
						value: 1548,

						name: '搜索引擎',
					},
				],

				radius: '50%',
			},
		],
	};

	myChart.setOption(option);

	myChart2.setOption(option2);
};
</script>

<style scoped lang="scss">
//图表所需的盒子（必须设置dom大小）

.columnar {
	width: 500px;

	height: 400px;
}
</style>
