<template>
	<view>
		<view class="content">
			<block v-for="(item,index) in newsListPage" :key="index">
				<view class="content-view" @click="newsDetail(item.articIds)">
					<view class="content-img">
						<image :src="item.images" mode="aspectFill"></image>
					</view>
					<view class="content-title">
						<text>{{item.titles}}</text>
						<text>{{item.authors}}</text>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
// let Dbcrud = require('../../config/dataBase.js')
let articlePublic = require('../../config/articlePublic.js')
export default{
	data() {
		return {
			newsListPage: []
		}
	},
	
	methods:{
		newsDetail(id) {
			uni.navigateTo({
				url: './ShatterRumorsDetail?id=' + id
			})
		}
	},
	
	async created() {
		// let newsList = await new Dbcrud('newsListPage').pullGet()
		// console.log('粉碎谣言', newsList)
		
		// let target = newsList.data.filter(item => {
		// 方法一：
		// 	// let index = item.titles.indexOf('谣言')
		// 	// console.log('indexof', index);
		// 	// if (index > -1) {
		// 	// 	return item;
		// 	// } else {
		// 	// 	return 0;
		// 	// }
		// 方法二：
		// 	let rumorReg = new RegExp('谣言', 'g')
		// 	let rumorArr = rumorReg.exec(item.titles)
		// 	console.log(rumorArr)
		// 	if (rumorArr !== null) return rumorArr;
		// })
		
		// 方法三：
		// let target = newsList.data.filter(item => {
		// 	let rumorsReg = /(谣言|不能|能不能|后遗症)/g;
		// 	return rumorsReg.test(item.titles)
		// })
		// console.log(target)
		// this.newsListPage = target
		
		let data = await new articlePublic('newsListPage', 'shatterRumors').listPage()
		console.log('谣言', data)
		this.newsListPage = data
	}
}
</script>

<style scoped>
@import '../../cssing/listPagePublic.css'
</style>