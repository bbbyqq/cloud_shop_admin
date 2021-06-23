<template>
	<div>
		<el-row>
			<el-col>
				<el-card header="云商城销售数据统计" style="font-weight: bold;text-align: center;font-size: 1.5rem;">
					<div ref="myEchart1" style="height: 500px;">
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	// 导入echarts
	import echarts from 'echarts'
	export default {
		data() {
			return {

			}
		},

		created() {

		},
		// 此时页面上的元素已经被渲染完毕了
		mounted() {
			// 柱状图
			this.myEchart1()
		},
		methods: {
			myEchart1() {
				var myChart = echarts.init(this.$refs.myEchart1)
				var option = {
					grid: {
						left: '10%',
						bottom: '20%' // 防止倾斜字体过长，而隐藏字体
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['销量']
					},
					toolbox: {
						show: true,
						feature: {
							magicType: {
								type: ['line', 'bar']
							}, //切换为折线图，切换为柱状图
							restore: {}, //还原
							saveAsImage: {} //保存为图片
						}
					},
					xAxis: {
						type: 'category',
						// 书写格式
						axisLabel: {
							interval: 0,
							rotate: 30  // 倾斜角度
						},
						data: ["Mate 40", "Mate 40 RS保时捷", "MateBook 14 2020款",
							"MateBook D 14 锐龙版", "MateBook 13 2020 锐龙版", "MateBook D 15 锐龙版",
							"FreeBuds 3 无线耳机", "FreeBuds Studio 无线头戴耳机"
						]
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						name: '销量',
						type: 'bar',
						barWidth: 70,
						data: [36, 5, 20, 10, 16, 20, 17, 2],
						itemStyle: {
							color: '#00a0f9'
						}
					}]
				}
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			}
		}
	}
</script>

<style>
</style>
