<template>
	<view class="city-cont">
		<view class="city">各市确诊数</view>
		<!-- 地图 -->
		<view class="myCharts">
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchMap"></canvas>
		</view>
	</view>
</template>

<script>
var { log } = console;
import uCharts from '@/components/u-charts/u-charts.js';
// 引入广东省的地图
let gd = require('config/province.json');
// 广东省地图的js文件
import { arrRess } from '../../../config/provinceRess.js'
var canvaMap = null;
export default {
	props: {
		mapdata: Array
	},
	data() {
		return {
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			// 接收所有城市确诊数的对象
			regiondata: {},
			// 赋值的动态地图数据
			mapdatas: []
		}
	},

	created() {
		
	},

	methods: {
		getServerData(mapdatas) {
			// log(gd)
			// let cMap = gd.features
			// this.showMap('canvasPie', cMap);
			this.showMap('canvasPie', mapdatas);
		},
		showMap(canvasId, chartData) {
			canvaMap = new uCharts({
				$this: this,
				canvasId: canvasId,
				type: 'map',
				fontSize: 9,
				padding: [10, 10, 10, 10],
				legend: {
					show: false,
					position: 'left',
					padding: 2,
					itemGap: 10, // 2
					margin: 1
				},
				background: '#FFFFFF',
				pixelRatio: this.pixelRatio,
				series: chartData,
				dataLabel: true,
				width: this.cWidth * this.pixelRatio,
				height: this.cHeight * this.pixelRatio,
				extra: {
					map: {
						border: true,
						borderWidth: 1,
						borderColor: '#666666',
						fillOpacity: 0.6
					}
				}
			});
			//下面是默认选中索引
			let cindex = 0;
			//下面是自定义文案
			let textList = [{ text: `广州市: 确诊${this.regiondata.guangzhou}`, color: '#facc14' }];
			//下面是event的模拟,tooltip的Y坐标值通过这个mp.changedTouches[0].y控制
			let tmpevent = { mp: { changedTouches: [{ identifier: 0, x: 168, y: 156 }] } };
			setTimeout(() => {
				canvaMap.showToolTip(tmpevent, {
					index: cindex,
					textList: textList
				});
			}, 200);
		},

		// 事件
		touchMap(e) {
			log(e);
			// showToolTip用来展示数据的详细内容
			canvaMap.showToolTip(e, {
				format: (item) => {
					return item.properties.name + ': 确诊' + item.properties.subFeatureIndex;
				}
			});
		}
	},

	watch: {
		mapdata(newvalue, oldvalue) {
			log(newvalue)
			// 广州市
			let numgz = 0;
			newvalue.forEach(item => {
				numgz += item.data.Guangzhoudig;
			});
			this.regiondata['guangzhou'] = numgz;
			// log('22')
			log(this.regiondata)
			// 韶关市
			let numsg = 0;
			newvalue.forEach(item => {
				numsg += item.data.Shaoguandig;
			});
			this.regiondata['shaoguan'] = numsg;
			// 深圳市
			let numsz = 0;
			newvalue.forEach(item => {
				numsz += item.data.Shenzhendig;
			});
			this.regiondata['shenzhen'] = numsz;
			// 珠海市
			let numzh = 0;
			newvalue.forEach(item => {
				numzh += item.data.Zhuhaidig;
			});
			this.regiondata['zhuhai'] = numzh;
			// 汕头市
			let numst = 0;
			newvalue.forEach(item => {
				numst += item.data.Shantoudig;
			});
			this.regiondata['shantou'] = numst;
			// 佛山市
			let numfs = 0;
			newvalue.forEach(item => {
				numfs += item.data.Foshandig;
			});
			this.regiondata['foshan'] = numfs;
			// 江门市
			let numjm = 0;
			newvalue.forEach(item => {
				numjm += item.data.Jiangmendig;
			});
			this.regiondata['jiangmen'] = numjm;
			// 湛江市
			let numzj = 0;
			newvalue.forEach(item => {
				numzj += item.data.Zhanjiangdig;
			});
			this.regiondata['zhanjiang'] = numzj;
			// 茂名市
			let nummm = 0;
			newvalue.forEach(item => {
				nummm += item.data.Maomingdig;
			});
			this.regiondata['maoming'] = nummm;
			// 肇庆市
			let numzq = 0;
			newvalue.forEach(item => {
				numzq += item.data.Zhaoqingdig;
			});
			this.regiondata['zhaoqing'] = numzq;
			// 惠州市
			let numhz = 0;
			newvalue.forEach(item => {
				numhz += item.data.Huizhoudig;
			});
			this.regiondata['huizhou'] = numhz;
			// 梅州市
			let nummz = 0;
			newvalue.forEach(item => {
				nummz += item.data.Meizhoudig;
			});
			this.regiondata['meizhou'] = nummz;
			// 汕尾市
			let numsw = 0;
			newvalue.forEach(item => {
				numsw += item.data.Shanweidig;
			});
			this.regiondata['shanwei'] = numsw;
			// 河源市
			let numhy = 0;
			newvalue.forEach(item => {
				numhy += item.data.Heyuandig;
			});
			this.regiondata['heyuan'] = numhy;
			// 阳江市
			let numyj = 0;
			newvalue.forEach(item => {
				numyj += item.data.Yangjiangdig;
			});
			this.regiondata['yangjiang'] = numyj;
			// 清远市
			let numqy = 0;
			newvalue.forEach(item => {
				numqy += item.data.Qingyuandig;
			});
			this.regiondata['qingyuan'] = numqy;
			// 东莞市
			let numdw = 0;
			newvalue.forEach(item => {
				numdw += item.data.Dongwandig;
			});
			this.regiondata['dongwan'] = numdw;
			// 中山市
			let numzs = 0;
			newvalue.forEach(item => {
				numzs += item.data.Zhongshandig;
			});
			this.regiondata['zhongshan'] = numzs;
			// 东沙群岛
			let numdsqd = 0;
			newvalue.forEach(item => {
				numdsqd += item.data.Dongshaqundaodig;
			});
			this.regiondata['dongshaqundao'] = numdsqd;
			// 潮州市
			let numcz = 0;
			newvalue.forEach(item => {
				numcz += item.data.Chaozhoudig;
			});
			this.regiondata['chaozhou'] = numcz;
			// 揭阳市
			let numjy = 0;
			newvalue.forEach(item => {
				numjy += item.data.Jieyangdig;
			});
			this.regiondata['jieyang'] = numjy;
			// 云浮市
			let numyf = 0;
			newvalue.forEach(item => {
				numyf += item.data.Yunfudig;
			});
			this.regiondata['yunfu'] = numyf;
			this.mapdatas = arrRess(this.regiondata)
			log(this.mapdatas)
			this.cWidth=uni.upx2px(650);
			this.cHeight=uni.upx2px(700);
			this.getServerData(this.mapdatas)
		}
	}
};
</script>

<style scoped>
/* 可视化表格 */
.myCharts{width: 650upx;height: 700upx;
/* margin-top: 20upx; */
margin: auto;
overflow: hidden;
}
.charts{width: 650upx; height: 700upx;}
.city-cont{margin: 20upx 0;}
.city{font-size: 30upx; font-weight: bold;}
</style>
