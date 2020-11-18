<template>
	<view class="Dizhou-cont">
		<view class="Dizhou">广东疫情新增趋势</view>
		<!-- 折线图 -->
		<view class="myCharts">
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA" @touchend="touchEndLineA"></canvas>
		</view>
	</view>
</template>

<script>
	var { log } = console;
	import uCharts from '@/components/u-charts/u-charts.js';
	// 折线图数据
	let lineDatas = require('config/line.json')
	var canvaLineA = null;
	var lastMoveTime=null;//最后执行移动的时间戳
	
	export default{
		data() {
			return {
				cWith:'',
				cHeight:'',
				pixelRatio: 1
			}
		},
		
		created() {
			this.cWith = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		
		methods: {
			getServerData() {
				// log(lineDatas);
				let lineData = lineDatas.data.LineA.chartData
				let LineA={categories:[],series:[]};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				LineA.categories=lineData.categories;
				LineA.series=lineData.series;
				
				//第二根线为虚线的设置
				LineA.series[1].lineType='dash';
				LineA.series[1].dashLength=10;
				this.showLineA("canvasLineA",LineA);
			},
			showLineA(canvasId,chartData) {
				canvaLineA=new uCharts({
					$this:this,
					canvasId: canvasId,
					type: 'line',
					colors:['#facc14', '#f04864', '#8543e0', '#90ed7d'],
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:this.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:2,
						axisLine:false
						// disableGrid:true
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:2
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
		}
	}
</script>

<style scoped>
.myCharts{width: 700upx; height: 500upx;}
.charts{width: 700upx; height: 500upx;}
.Dizhou-cont{
	margin: 20upx 0;
}
.Dizhou{
	font-size: 30upx;
	font-weight: bold;
}
</style>
