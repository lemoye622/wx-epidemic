// 折线图的动态数据（替换line.json的模拟数据）

let linedata = (catedays, diagdata, curedata, diedata) => {
	let chartData = {
		"categories": catedays,
		"series": [{
			"name": "新增确诊",
			"data": diagdata
		}, {
			"name": "新增治愈",
			"data": curedata
		}, {
			"name": "新增死亡",
			"data": diedata
		}]
	}
	return chartData
}

export {linedata}