<!-- <template>
	<view>
		<ListPage></ListPage>
	</view>
</template>

<script>
import Line from '../common/ListPage.vue'
export default{
	data() {
		return {
			
		}
	},
	
	methods: {}
		
}
</script>

<style scoped>

</style> -->

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
let articlePublic = require('../../config/articlePublic.js')
// let Dbcrud = require('../../config/dataBase.js')
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
				url: './article?id=' + id
			})
		}
	},
	
	async created() {
		// let newsList = await new Dbcrud('newsListPage').pullGet()
		// console.log('疫情新闻', newsList)
		
		// let target = newsList.data.filter(item => {
		// 	let newsReg = /(!谣言|!风景|!能不能|!后遗症|!复工|!复厂|新冠)/g;
		// 	return newsReg.test(item.titles)
		// })
		// console.log(target)
		
		let data = await new articlePublic('newsListPage', null).listPage()
		console.log('谣言', data)
		this.newsListPage = data
		
		// this.newsListPage = newsList.data
	}
}
</script>

<style>
@import '../../cssing/listPagePublic.css'
</style>