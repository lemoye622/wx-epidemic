// 计算最晚时间

let moment = require('moment')
moment.locale('zh-cn')

// 写一个简单的方法，不用面向对象
let timestamp = function(timearr) {
	// 将时间字符串转换成时间戳
	let timesarr = timearr.map((item) => {
		return new Date(item).getTime()
	})
	// console.log(timesarr)
	let lastTime = Math.max(...timesarr)
	// console.log(lastTime)
	// 将时间戳转换为年月日
	let formatTime = moment(lastTime).format('YYYY-MM-DD HH:mm:ss')
	// console.log(formatTime)
	return formatTime
}

export {timestamp}