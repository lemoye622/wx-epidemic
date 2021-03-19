<template>
	<view>
		<view class="news-cont">
			<view class="news-title">{{newsContent[0].titles}}</view>
			<view class="news-author">
				<view class="news-views">
					<text>{{newsContent[0].authors}}</text>
					<text>{{newsContent[0].times}}</text>
				</view>
			</view>
			<view class="news-article">
				<rich-text :nodes="newsContent[0].content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
// 富文本的css文件
import '../../cssing/quill.core.css'
// 引进操作数据库
let Dbcrud = require('../../config/dataBase.js')
export default{
	data() {
		return {
			newsContent:[]
		}
	},
	
	methods:{
		async newsFun(id){
			let obj = {articIds:id}
			let content = await new Dbcrud('article').queryWhere(obj)
			console.log(content)
			this.newsContent = content.data
		}
	},
	
	// 接收上一个页面跳转携带的值用 onLoad
	// onLoad  小程序生命周期函数
	onLoad(e) {
		console.log(e)
		this.newsFun(e.id)
	}
}
</script>

<style scoped>
.news-cont{margin: 30upx 15upx 120upx 15upx;}
.news-title{font-size: 40upx;}
.news-author text{display: block; font-size: 29upx;}
.news-author{display: flex; align-items: center;
justify-content: space-between;
height: 80upx;
}
.news-views{display: flex; align-items: center;}
.news-author text:nth-child(1){color: #576b95; padding-right: 20upx;}
.news-author text:nth-child(2){color: rgba(0,0,0,0.3);}
.news-article{padding-top: 50upx;}
</style>

