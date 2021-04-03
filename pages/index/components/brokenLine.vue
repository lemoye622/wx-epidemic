<template>
	<view class="city-cont">
		<view class="city">广东疫情新增趋势</view>
		<!-- 折线图 -->
		<view class="myCharts">
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA" @touchend="touchEndLineA"></canvas>
		</view>
	</view>
</template>

<script>
	var { log } = console;
	import uCharts from '@/components/u-charts/u-charts.js';
	let moment = require('moment')
	moment.locale('zh-cn')
	// 折线图的类
	let LineChart = require('../../../config/lineEpidemicData.js')
	// // 折线图数据
	// let lineDatas = require('config/line.json')
	// 折线图的动态数据
	import {linedata} from '../../../config/linedata.js'
	var canvaLineA = null;
	var lastMoveTime=null;//最后执行移动的时间戳
	
	export default{
		props: {
			brokenLineData: Array
		},
		data() {
			return {
				cWith: '',
				cHeight: '',
				pixelRatio: 1,
				// 动态日期
				catedays: [],
				// 一天内新增确诊总和的数组
				diagdata: [],
				// 一天内新增治愈总和的数组
				curedata: [],
				// 一天内新增死亡总和的数组
				diedata: []
			}
		},
		
		created() {
			
		},
		
		methods: {
			getServerData(linevp) {
				// log(lineDatas);
				// let lineData = lineDatas.data.LineA.chartData
				let LineA={categories:[], series:[]};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				LineA.categories=linevp.categories;
				LineA.series=linevp.series;
				
				//第二根线为虚线的设置
				// LineA.series[1].lineType='dash';
				// LineA.series[1].dashLength=10;
				this.showLineA("canvasLineA", LineA);
			},
			showLineA(canvasId,chartData) {
				canvaLineA = new uCharts({
					$this: this,
					canvasId: canvasId,
					type: 'line',
					colors: ['#facc14', '#8543e0', '#f04864'],
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend:{
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: this.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 2,
						axisLine: false
						// disableGrid: true
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 2
					},
					width: this.cWidth*this.pixelRatio,
					height: this.cHeight*this.pixelRatio,
					extra: {
						line:{
							type: 'straight',
							width: 1
						}
					}
				});
				//下面是默认选中索引
				let cindex = 5;
				//下面是自定义文案
				let textList = [
					{ text: `${this.catedays[5]}: 新增确诊${this.diagdata[5]}`, color: '#facc14' },
					{ text: `${this.catedays[5]}: 新增治愈${this.curedata[5]}`, color: '#8543e0'},
					{ text: `${this.catedays[5]}: 新增死亡${this.diedata[5]}`, color: '#f04864' }
				];
				//下面是event的模拟,tooltip的Y坐标值通过这个mp.changedTouches[0].y控制
				let tmpevent = { mp: { changedTouches: [{ identifier: 0, x: 335, y: 93 }]}};
				setTimeout(() => {
					canvaLineA.showToolTip(tmpevent, {
						index: cindex,
						textList: textList
					});
				}, 200);
			},
			touchLineA(e) {
				lastMoveTime=Date.now();
			},
			touchEndLineA(e){
				canvaLineA.touchLegend(e);
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
		},
		
		watch: {
			async brokenLineData(newvalue, oldvalue) {
				log('折线图数据')
				log(newvalue)
				// 折线图有两组动态数组：1.日期（前五天以及当天共六天） 2.确诊、治愈、死亡
				// 参考momentjs官网的日历时间和日期格式化demo  http://momentjs.cn/
				// moment().subtract(1, 'days').calendar();  // 昨天12:11
				// let dayvp = moment().subtract(1, 'days').format('MM-DD');
				// log(dayvp)
				let arrday = [5, 4, 3, 2, 1, 0]
				this.catedays = arrday.map((item) => {
					return moment().subtract(item, 'days').format('MM-DD')
				})
				// log(this.catedays)
				// 确诊
				this.diagdata = await new LineChart(this.catedays, newvalue[0].data).lineChartsdata()
				// 治愈
				this.curedata = await new LineChart(this.catedays, newvalue[1].data).lineChartsdata()
				// 死亡
				this.diedata = await new LineChart(this.catedays, newvalue[2].data).lineChartsdata()
				let linevp = linedata(this.catedays, this.diagdata, this.curedata, this.diedata)
				// this.cWidth = uni.upx2px(750);
				this.cWidth = uni.upx2px(700);
				this.cHeight = uni.upx2px(500);
				this.getServerData(linevp);
			}
		}
	}
</script>

<style scoped>
.myCharts{width: 700upx; height: 500upx;}
.charts{width: 700upx; height: 500upx;}
.city-cont{
	margin: 20upx 0;
}
.city{
	font-size: 30upx;
	font-weight: bold;
}
</style>
