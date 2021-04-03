// 获取新闻列表页的公共类（正则处理）

let Dbcrud = require('./dataBase.js')

class articlePublic {
	constructor(collection, type) {
	    this.collection = collection,
		this.type = type
	}
	
	async getPublicData(regProp) {
		let newsList = await new Dbcrud(this.collection).pullGet()
		console.log('列表页', newsList)
		if (regProp) {
			let target = newsList.data.filter(item => {
				return regProp.test(item.titles)
			})
			return target
		} else {
			return newsList.data
		}	
	}
	
	listPage() {
		if (this.type === 'shatterRumors') {
			return  this.getPublicData(/(谣言|不能|能不能|后遗症)/g)
		} else if (this.type === 'workResumption') {
			return this.getPublicData(/(复工|复厂|开业)/g)
		} else {
			return this.getPublicData(null)
		}
	}
}

module.exports = articlePublic