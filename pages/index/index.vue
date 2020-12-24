<template>
	<view class="content">
		<!-- 背景 -->
		<view class="content-img">
			<image src="/static/pageimg.png" mode="widthFix"></image>
			<!-- <view class="content-character">广东疫情大数据实时追踪</view> -->
		</view>
		<!-- 分享 -->
		<view class="wx-share">分享</view>
		<!-- 数据来源 -->
		<view class="source">
			数据来源：广东省卫健委
		</view>
		<!-- 白色区域部分 -->
		<view class="content-main">
			<!-- 统计时间 -->
			<view class="times">统计截止 {{deadline}}</view>
			<!-- 累积数量 -->
			<view class="content-main-data">
				<block v-for="(item, index) in peopleList" :key="index">
				<view>
					<text>{{item.data}}</text>
					<text>{{item.status}}</text>
				</view>
				</block>
			</view>
			<!-- 菜单 -->
			<view class="content-menu">
				<block v-for="(item, index) in menuList" :key="index">
				<view class="content-menu-table">
					<view>
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="content-menu-text">
						<text>{{item.text}}</text>
						<text>{{item.label}}</text>
					</view>
				</view>
				</block>
			</view>
			<!-- 地图 -->
			<MAP :mapdata="mapdata"></MAP>
			<!-- 折线图 -->
			<Line></Line>
			<!-- 表格 -->
			<Table></Table>
		</view>
	</view>
</template>

<script>
	// 操作数据库的类
	let Dbcrud = require('../../config/dataBase.js')
	// 计算确诊、治愈、死亡   每一个的总和的类
	let Total = require('../../config/total.js')
	// 计算最晚时间
	import {timestamp} from '../../config/time.js'
	let { log } = console
	// 地图组件
	import MAP from './components/map.vue'
	// 折线图
	import Line from './components/brokenLine.vue'
	// 表格
	import Table from './components/table.vue'
	export default {
		components: { MAP, Line, Table },
		data() {
			return {
				// 统计截止日期
				deadline: '',
				// 地图对应城市确诊人数数据
				mapdata: [],
				peopleList: [
					{
						'data': 0,
						'status': '累积确诊'
					},
					{
						'data': 0,
						'status': '累积治愈'
					},
					{
						'data': 0,
						'status': '累积死亡'
					}
				],
				//菜单
				menuList: [
					{
						'img': '../../static/health.png',
						'text': '健康信息',
						'label': '上报健康信息',
						'url': '../report/report'
					},
					{
						'img': '../../static/news.png',
						'text': '疫情新闻',
						'label': '热点早知道',
						'url': '../news/news'
					},
					{
						'img': '../../static/shatter-rumors.png',
						'text': '粉碎谣言',
						'label': '假消息不能信',
						'url': ''
					},
					{
						'img': '../../static/work-resumption.png',
						'text': '复工复产',
						'label': '复工出行助你安全',
						'url': ''
					}
				]
			}
		},
		created() {
			this.epidemicData()
		},
		methods: {
			// 获取确诊、治愈、死亡三个集合的数据
			epidemicData() {
				let arr = [
					new Dbcrud('diagnosis').pullGet(),
					new Dbcrud('cure').pullGet(),
					new Dbcrud('death').pullGet()
				]
				// Promise.all 同时请求多个集合的数据
				Promise.all(arr)
				.then((res) => {
					log('三个集合')
					log(res)
					let diagdata = res[0].data
					let curedata = res[1].data
					let diedata = res[2].data
					this.covidTotal(diagdata, curedata, diedata)
					// 地图上各城市确诊人数数据
					this.mapdata = diagdata
				})
				.catch((error) => {
					log(error)
				})
			},
			
			// 计算累积确诊、治愈、死亡
			async covidTotal(diagdata, curedata, diedata) {
				// 累积确诊
				let diagTotal = await new Total(diagdata).sum()
				// log(diagTotal)
				this.$set(this.peopleList[0], 'data', diagTotal.sumdata)
				// 时间
				let diagTime = diagTotal.startTime
				
				// 累积治愈
				let cureTotal = await new Total(curedata).sum()
				// log(cureTotal)
				this.$set(this.peopleList[1], 'data', cureTotal.sumdata)
				let cureTime = cureTotal.startTime
				
				// 累积死亡
				let deathTotal = await new Total(diedata).sum()
				// log(deathTotal)
				this.$set(this.peopleList[2], 'data', deathTotal.sumdata)
				let deathTime = deathTotal.startTime
				
				// 将时间拆分合并为一个新的数组
				let timearr = [...diagTime, ...cureTime, ...deathTime]
				// log(timearr)
				this.deadline = timestamp(timearr)
			}
		}
	}
</script>

<style scoped>
	.content{position: relative;}
	.content-img{width: 750upx; height: 450upx; background: #4CD964;
	overflow: hidden;}
	/* .content-character{position: absolute;left: 60upx;top: 173upx;} */
	.content-img image{width: 750upx;}
	/* 分享 */
	.wx-share{position: absolute; top: 250upx; right: 0;
	color: #000000;
	font-size: 25upx;
	background: #00ff80;
	width: 100upx;
	height: 50upx;
	line-height: 50upx;
	text-align: center;
	border-top-left-radius: 25upx;
	border-bottom-left-radius: 25upx;}
	/* 来源 */
	.source{position: absolute; top: 340upx; right: 0;
	color: #FFFFFF;
	font-size: 25upx;
	padding-right: 10upx;}
	.content-main{position: absolute; top: 400upx; left: 0; right: 0;
	padding: 20upx 10upx; background: #FFFFFF;
	border-top-left-radius: 30upx; border-top-right-radius: 30upx;
	margin-bottom: 100upx;}
	.times{font-size: 25upx; height: 50upx;}
	.content-main-data{
	background: #f8f8f8;
	border-radius: 10upx;
	height: 150upx;
	display: flex; justify-content: space-around;
	align-items: center;}
	.content-main-data text{display: block; text-align: center;}
	.content-main-data text:nth-child(1){color: #cc1e1f; font-size: 40upx;
	font-weight: bold;}
	.content-main-data text:nth-child(2){color: #b5b5b5; font-size: 25upx;
	padding: 10upx 0;}
	/* .content-main-data text:nth-child(3){color: #b5b5b5; font-size: 20upx;} */
	/* 菜单 */
	.content-menu{background: #f8f8f8;
	border-radius: 10upx;
	padding-left: 10upx;
	margin-top: 20upx;
	height: 200upx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;}
	.content-menu-table text{display: block;}
	.content-menu-table image{width: 60upx; height: 60upx; padding-right: 15upx;}
	.content-menu-table{display: flex; align-items: center; width: 50%;}
	.content-menu-text text:nth-child(1){font-size: 30upx;}
	.content-menu-text text:nth-child(2){font-size: 25upx; color: #9a9a9a;}
</style>
