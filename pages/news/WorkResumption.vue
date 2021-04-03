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
			// console.log(id)
			uni.navigateTo({
				url: './WorkResumptionDetail?id=' + id
			})
		}
	},
	
	async created() {
		// let newsList = await new Dbcrud('newsListPage').pullGet()
		// console.log('复工复产', newsList)
		// let target = newsList.data.filter(item => {
		// 	let workReg = /(复工|复厂|开业)/g;
		// 	return workReg.test(item.titles)
		// })
		// console.log(target)
		// this.newsListPage = target
		
		let data = await new articlePublic('newsListPage', 'workResumption').listPage()
		console.log('谣言', data)
		this.newsListPage = data
	}
}
</script>

<style scoped>
@import '../../cssing/listPagePublic.css'
</style>
