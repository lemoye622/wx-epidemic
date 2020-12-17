// 操作数据库 CRUD 的类
const db = wx.cloud.database()

class Dbcrud {
	constructor(gather) {
	    this.gather = gather
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
}

module.exports = Dbcrud
