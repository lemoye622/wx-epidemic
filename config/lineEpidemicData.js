// 折线图的疫情数据

let moment = require('moment')
moment.locale('zh-cn')

let { log }	= console

class LineChart {
	// catedays: 日期
	// typedatas： 确诊 || 治愈 || 死亡
	constructor(catedays, typedatas) {
		this.catedays = catedays
		this.typedatas = typedatas
	}
	
	lineChartsdata() {
		return new Promise((resolve, reject) => {
			// 根据日期筛选当天的新增确诊 || 治愈 || 死亡
			let todaydatas = this.catedays.map((itemday) => {
				let vpdatas = this.typedatas.filter((item) => {
					return moment(item.time).format('MM-DD') == itemday
				})
				return vpdatas
			})
			// log('当前日期 -- 筛选出的数据')
			// log(todaydatas)
			// 遍历6次，选取当天的 确诊 || 治愈 || 死亡 总和
			let maparr = [0, 1, 2, 3, 4, 5]
			let maplist = maparr.map((itemarr) => {
				// 遍历取到云数据库data的值
				let databasearr = todaydatas[itemarr].map((item) => {
					return item.data
				})
				// log('筛选的database数据')
				// log(databasearr)
				// 取 value 值
				let arrlist = []
				databasearr.forEach((item) => {
					for (let key in item) {
						arrlist.push(item[key])
					}
				})
				// 计算 确诊 || 治愈 || 死亡 总和
				let num = 0
				arrlist.forEach((item) => {
					num += item
				})
				return num;
			})
			resolve(maplist)
		})
	} 
}
	    
module.exports = LineChart
