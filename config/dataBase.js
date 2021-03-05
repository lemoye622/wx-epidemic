// 操作数据库 CRUD 的类
const db = wx.cloud.database()

class Dbcrud {
	constructor(gather, datas) {
	    this.gather = gather
		this.datas = datas
	}
	
	// get请求数据库
	pullGet() {
		return new Promise((resolve, reject) => {
			const base = db.collection(this.gather)
			base.get()
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				reject(error)
			})
		})
	}
	
	// add提交数据到集合
	pushAdd() {
		return new Promise((resolve, reject) => {
			const base = db.collection(this.gather)
			// 注意：add()方法里必须是个对象，且必须加上 data（也是一个对象），具体参见微信官方文档——>云开发
			base.add({
				data: this.datas
			})
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				reject(error)
			})
		})
	}
}

module.exports = Dbcrud
