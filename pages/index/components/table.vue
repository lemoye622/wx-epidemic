<template>
	<!-- 各市确诊数 -->
	<view>
		<view class="Dizhou-cont">
			<view class="Dizhou">广东疫情</view>
			<view class="tips">7:00-10:00为更新高峰，数据如有滞后请谅解</view>
			<!-- 表格 -->
			<view class="myCharts">
				<view class="table-cont">
					<!-- <block v-for="(item,index) in tables" :key="index"> -->
					<!-- <text>{{item}}</text> -->
					<text>地区</text>
					<text>新增确诊</text>
					<text>累计确诊</text>
					<text>治愈</text>
					<text>死亡</text>
					<!-- </block> -->
				</view>
				<!-- 数据 -->
				<view>
					<!-- <block v-for="(item,index) in tabledatas" :key="index"> -->
					<view class="table-datas">	
					<!-- <text>{{item.address}}</text>
					<text>{{item.newly}}</text>
					<text>{{item.accumulate}}</text>
					<text>{{item.cure}}</text>
					<text>{{item.death}}</text> -->
					<text>广州</text>
					<text>4</text>
					<text>50</text>
					<text>45</text>
					<text>2</text>
					</view>
					<!-- </block> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.myCharts{width: 100%; }
	.Dizhou-cont {
		margin: 20upx 0;
	}
	.Dizhou {
		font-size: 30upx;
		font-weight: bold;
	}
	.tips{font-size: 25upx; height: 50upx; line-height: 50upx; color: #737373;}
	/* 表格 */
	.table-cont{display: flex; height: 70upx;
	align-items: center; justify-content: space-between;
	font-size: 25upx;}
	.table-cont text{height: 70upx; line-height: 70upx; text-align: center;
	border-right: 1px solid #fff;}
	.table-cont text:nth-child(1){background: #f2f5f7; text-align: left; flex: 2; padding-left: 10upx;}
	.table-cont text:nth-child(2){background: #e8effc; color: #005dff; flex: 1;}
	.table-cont text:nth-child(3){background: #fdeeee; color: #f55253; flex: 1;}
	.table-cont text:nth-child(4){background: #e9f7ec; color: #178b50; flex: 1;}
	.table-cont text:nth-child(5){background: #f2f2f2; color: #66666c; flex: 1;
	border-right: 0;}
	/* 确诊人数 */
	.table-datas text{display: block;height: 70upx; line-height: 70upx; text-align: center;
	}
	.table-datas{font-size: 27upx;display: flex; height: 70upx;
	justify-content: space-between; align-items: center;
	border-bottom: 0.5rpx solid #f2f2f2;}
	.table-datas text:nth-child(1){text-align: left; flex: 2; padding-left: 10upx;}
	.table-datas text:nth-child(2){flex: 1;}
	.table-datas text:nth-child(3){flex: 1;}
	.table-datas text:nth-child(4){flex: 1;}
	.table-datas text:nth-child(5){flex: 1;}
</style>
