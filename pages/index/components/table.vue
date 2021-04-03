<template>
	<!-- 各市确诊数 -->
	<view>
		<view class="Dizhou-cont">
			<view class="Dizhou">广东疫情</view>
			<view class="tips">7:00-10:00为更新高峰，数据如有滞后请谅解</view>
			<!-- 表格 -->
			<view class="myCharts">
				<view class="table-cont">
					<block v-for="(item,index) in tableList" :key="index">
					<text>{{item}}</text>
					</block>
				</view>
				<!-- 数据 -->
				<view>
					<block v-for="(item,index) in tabledatas" :key="index">
					<view class="table-datas">	
					<text>{{item.region}}</text>
					<text>{{item.newlydiag}}</text>
					<text>{{item.diagtotal}}</text>
					<text>{{item.curetotal}}</text>
					<text>{{item.deathtotal}}</text>
					</view>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let {log} = console
	let moment = require('moment')
	moment.locale('zh-cn')
	// 表格数据处理的类
	let TableData = require('../../../config/tabledata.js')
	export default {
		props: {
			tableData: Array
		},
		data() {
			return {
				tableList: ['地区', '新增确诊', '累积确诊', '累积治愈', '累积死亡'],
				tabledatas: []
			}
		},
		
		watch: {
			async tableData(newvalue, oldvalue) {
				log('表格数据')
				log(newvalue)
				let diagvalue = newvalue[0].data
				let curevalue = newvalue[1].data
				let deathvalue = newvalue[2].data
				// 最终需要的数据格式是数组对象
				// 当天时间
				let now = moment().format('YYYY-MM-DD')
				let timelist = []
				timelist.push(now)
				// 当天确诊
				let diagdata = timelist.map((itemtime) => {
					let diagtoday = diagvalue.filter((item) => {
						return moment(item.time).format('YYYY-MM-DD') == itemtime
					})
					return diagtoday
				})
				// log(diagdata)
				// 取出当天确诊的 value 值
				let diaglist = diagdata[0].map((item) => {
					let valuelist = []
					for (let key in item.data) {
						valuelist.push(item.data[key])
					}
					return valuelist
				})
				// log(diaglist)
				
				// 境外输入
				let Abroad = await new TableData('境外输入', diaglist, 0, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(Abroad)
				// 广州
				let guangzhou = await new TableData('广州', diaglist, 5, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(guangzhou)
				// 韶关
				let shaoguan = await new TableData('韶关', diaglist, 15, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(shaoguan)
				// 深圳
				let shenzhen = await new TableData('深圳', diaglist, 16, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(shenzhen)
				// 珠海
				let zhuhai = await new TableData('珠海', diaglist, 22, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(zhuhai)
				// 汕头
				let shantou = await new TableData('汕头', diaglist, 13, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(shantou)
				// 佛山
				let foshan = await new TableData('佛山', diaglist, 4, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(foshan)
				// 江门
				let jiangmen = await new TableData('江门', diaglist, 8, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(jiangmen)
				// 湛江
				let zhanjiang = await new TableData('湛江', diaglist, 19, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(zhanjiang)
				// 茂名
				let maoming = await new TableData('茂名', diaglist, 10, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(maoming)
				// 肇庆
				let zhaoqing = await new TableData('肇庆', diaglist, 20, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(zhaoqing)
				// 惠州
				let huizhou = await new TableData('惠州', diaglist, 7, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(huizhou)
				// 梅州
				let meizhou = await new TableData('梅州', diaglist, 11, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(meizhou)
				// 汕尾
				let shanwei = await new TableData('汕尾', diaglist, 14, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(shanwei)
				// 河源
				let heyuan = await new TableData('河源', diaglist, 6, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(heyuan)
				// 阳江
				let yangjiang = await new TableData('阳江', diaglist, 17, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(yangjiang)
				// 清远
				let qingyuan = await new TableData('清远', diaglist, 12, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(qingyuan)
				// 东莞
				let dongwan = await new TableData('东莞', diaglist, 3, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(dongwan)
				// 中山
				let zhongshan = await new TableData('中山', diaglist, 21, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(zhongshan)
				// 东沙群岛
				let dongshaqundao = await new TableData('东沙群岛', diaglist, 2, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(dongshaqundao)
				// 潮州
				let chaozhou = await new TableData('潮州', diaglist, 1, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(chaozhou)
				// 揭阳
				let jieyang = await new TableData('揭阳', diaglist, 9, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(jieyang)
				// 云浮
				let yunfu = await new TableData('云浮', diaglist, 18, diagvalue, curevalue, deathvalue).tablepro()
				this.tabledatas.push(yunfu)
				log(this.tabledatas)
			}
		}
	}
</script>

<style scoped>
	.myCharts{width: 100%; }
	.Dizhou-cont {
		margin: 20upx 0;
	}
	.Dizhou {
		font-size: 30upx;
		font-weight: bold;
	}
	.tips{font-size: 25upx; height: 50upx; line-height: 50upx; color: #737373;}
	/* 表格 */
	.table-cont{display: flex; height: 70upx;
	align-items: center; justify-content: space-between;
	font-size: 25upx;}
	.table-cont text{height: 70upx; line-height: 70upx; text-align: center;
	border-right: 1px solid #fff;}
	.table-cont text:nth-child(1){background: #f2f5f7; text-align: left; flex: 2; padding-left: 10upx;}
	.table-cont text:nth-child(2){background: #e8effc; color: #005dff; flex: 1;}
	.table-cont text:nth-child(3){background: #FFFFE0; color: #FFD700; flex: 1;}
	.table-cont text:nth-child(4){background: #e9f7ec; color: #178b50; flex: 1;}
	.table-cont text:nth-child(5){background: #fdeeee; color: #f55253; flex: 1;
	border-right: 0;}
	/* 确诊人数 */
	.table-datas text{display: block;height: 70upx; line-height: 70upx; text-align: center;
	}
	.table-datas{font-size: 27upx;display: flex; height: 70upx;
	justify-content: space-between; align-items: center;
	border-bottom: 0.5rpx solid #f2f2f2;}
	.table-datas text:nth-child(1){text-align: left; flex: 2; padding-left: 10upx;}
	.table-datas text:nth-child(2){flex: 1;}
	.table-datas text:nth-child(3){flex: 1;}
	.table-datas text:nth-child(4){flex: 1;}
	.table-datas text:nth-child(5){flex: 1;}
</style>
