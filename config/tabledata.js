// 表格数据处理
// var {log} = console

class TableData {
	// city：城市
	// diaglist：当天的新增确诊
	// index：数组索引
	// accdiag：累计确诊
	// acccure：治愈
	// accdeath：死亡
	constructor(city, diaglist, index, accdiag, acccure, accdeath) {
	    this.city = city
		this.diaglist = diaglist
		this.index = index
		this.accdiag = accdiag
		this.acccure = acccure
		this.accdeath = accdeath
	}
	
	tablepro() {
		return new Promise((resolve, reject) => {
			// 当天的新增确诊总和
			let newdata = []
			this.diaglist.forEach((item) => {
				newdata.push(item[this.index])
			})
			let diagsum = 0
			newdata.forEach((item) => {
				diagsum += item
			})
			// log(diagsum)
			
			// 累积确诊
			let diagdatas = this.sumtype(this.accdiag)
			// log(diagdatas)
					
			// 累积治愈
			let curedatas = this.sumtype(this.acccure)
			// log(curedatas)
			
			// 累积死亡
			let deathdatas = this.sumtype(this.accdeath)
			// log(deathdatas)		
			
			// 组合成一个对象返回出去
			let tableobj = {
				region: this.city,
				newlydiag: diagsum,
				diagtotal: diagdatas,
				curetotal: curedatas,
				deathtotal: deathdatas				
			}
			resolve(tableobj)
		})
	}
	
	
	sumtype(type) {
		let accumulate = type.map((item) => {
			let valuelist = []
			for (let key in item.data) {
				valuelist.push(item.data[key])
			}
			return valuelist 
		})
		// log(accumulate)
		let sumlist = []
		accumulate.forEach((item) => {
			sumlist.push(item[this.index])
		})
		let accsum = 0
		sumlist.forEach((item) => {
			accsum += item
		})
		return accsum
	}
}

module.exports = TableData