<template>
	<view class="content">
		<view class="statement">
			声明
		</view>
		<view class="main">
			<view class="main-text">
				该小程序仅为技术演示，不属于商业用途，产品中所展示的疫情数据均为虚假数据，请勿在微信好友、朋友圈中进行传播，不传谣，不造谣，不信谣！
			</view>
		</view>
		<view class="wx-button">
			<button plain="true" @click="agree">
				我同意
			</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		// 页面跳转
		agree() {
			uni.navigateTo({
				url: './index'
			})
		}
	}
}
</script>

<style scoped>
.content {
	/* display: flex;
	align-items: center;
	justify-content: center; */
	/* width: 100%;
	height: 100%; */
	margin-top: 60%;
}
.statement {
	text-align: center;
	font-size: 35rpx;
	font-weight: bold;
}
.main {
	margin: 0 80rpx;
}
.main-text {
	/* margin: 0 20rpx; */
	padding-top: 30rpx;
	font-size: 35rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.wx-button button{
	border: none;
	font-size: 30rpx; 
	/* background: #1E90FF; */
	background: #00FF7F;
	color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 300rpx;
}
.wx-button {padding-top: 50rpx;}
</style>

