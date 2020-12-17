// 计算确诊、治愈、死亡   每一个的总和的类
let {log} = console
class Total {
	constructor(type) {
		this.type = type
	}
	
	// uniapp类里的静态方法 static 不生效
	sum() {
		return new Promise((resolve, reject) => {
			// 抽出 data 和时间重组一个数组
			let typearr = this.type.map((item) => {
				let data = item.data
				let times = item.time
				return { data, times }
			})
			// log('重组的数组')
			// log(typearr)
			// 取出键值对的 value值
			let objList = typearr.map((item) => {
				// 取出对象的value值用es7的 Object.values()
				return Object.values(item.data)
			})
			// log('value值')
			// log(objList)
			// 合并返回的value值push进一个新的数组
			let arrList = []
			objList.forEach((item) => {
				arrList.push(...item)
			})
			// log('合并的value值')
			// log(arrList)
			// 计算 arrList 里的数字总和
			let sumdata = arrList.reduce((prev, cur) => {
				return prev + cur
			})
			// 法二
			// let numdata = 0
			// arrList.forEach((item) => {
			// 	numdata += item
			// })
			// log(numdata)
			// log('新增总数')
			// log(sumdata)
			
			
			// 取出上传时间
			let startTime = typearr.map((item) => {
				let times = item.times
				return times
			})
			let result = {startTime, sumdata}
			resolve(result)
		})
	}
}

module.exports = Total