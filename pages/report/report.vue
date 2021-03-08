<template>
	<view>
		<view class="report-cont" v-if="!usersing">
			<!-- 基本信息 -->
			<view class="title">基本信息</view>
			<view class="information">
				<text>姓名</text>
				<input type="text" v-model="name" placeholder="你的姓名" placeholder-style="color:#bdbdc5"/>
			</view>
			<view class="information">
				<text>手机号码</text>
				<input type="number" v-model="phone" placeholder="你的手机号码" placeholder-style="color:#bdbdc5"/>
			</view>
			<view class="information">
				<text>身份证号码</text>
				<view class="discern-cont">
				<view class="discern-inpu"><input type="text" v-model="IDcard" placeholder="你的身份证号码" placeholder-style="color:#bdbdc5"/></view>
				<view class="discern-img" @click="identify()">
					<image src="../../static/shibie.png" mode="widthFix"></image>
				</view>
				</view>
			</view>
			<view class="information">
				<text>性别</text>
				<view class="discern-cont">
				<view class="discern-inpu"><input type="text" v-model="gender[index]" disabled placeholder="请选择你的性别" placeholder-style="color:#bdbdc5"/></view>
				<view class="discern-right">
					<picker @change="genderChange" :value="index" :range="gender">
						<view class="uni-input">选择</view>
					</picker>
				</view>
				</view>
			</view>
			<view class="information">
				<text>出生日期</text>
				<view class="discern-cont">
				<view class="discern-inpu"><input type="text" v-model="birthday" disabled placeholder="请选择出生日期" placeholder-style="color:#bdbdc5"/></view>
				<view class="discern-right">
					 <picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="birthdayChange">
						<view class="uni-input">选择</view>
					</picker>
				</view>
				</view>
			</view>
			<view class="information">
				<text>户籍所在地</text>
				<view class="discern-cont">
				<view class="discern-inpu"><input type="text" v-model="koseki" disabled placeholder="请选择户籍所在地" placeholder-style="color:#bdbdc5"/></view>
				<view class="discern-right">
					<picker mode="region" :value="koseki"  @change="kosekiChange">
						<view class="uni-input">选择</view>
					</picker>
				</view>
				</view>
			</view>
			<view class="information">
				<text>居住省/市</text>
				<view class="discern-cont">
				<view class="discern-inpu"><input type="text" v-model="residencePlace" disabled placeholder="请选择居住省/市" placeholder-style="color:#bdbdc5"/></view>
				<view class="discern-right">
					<picker mode="region" :value="residencePlace"  @change="residencePlaceChange">
						<view class="uni-input">选择</view>
					</picker>
				</view>
				</view>
			</view>
			<view class="information">
				<text>详细住址</text>
				<input type="text" v-model="detailAddress" placeholder="请填写详细住址" placeholder-style="color:#bdbdc5"/>
			</view>
			<view class="title distance">是否常住广东</view>
			<view class="trip">
				<radio-group @change="radioChange">
					<label class="trip-cont" v-for="(item, index) in isPermanent" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === current" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
			</view>
			<!-- 是否有如下症状 -->
			<view class="title distance">是否有如下症状</view>
			<view class="trip">
				<block v-for="(item, index) in symptom" :key="index">
				<view class="trip-flex" @click="radiosymptom(index, item.value)">
					<view class="trip-listing">
						<image src="../../static/weixuanzhong.svg" v-if="item.Selection == 'hide' "></image>
						<image v-else src="../../static/xuanzhong.svg"></image>
					</view>
					<view>{{item.name}}</view>
				</view>
				</block>
			</view>
			<view class="title distance">粤康码状态（须为粤康码，广东省内各地区粤康码通用，广州市用穗康码亦可）</view>
			<view class="trip">
				<block v-for="(item, index) in healthCode" :key="index">
				<view class="trip-flex" @click="radioHealthCode(index, item.value)">
					<view class="trip-listing">
						<image src="../../static/weixuanzhong.svg" v-if="item.Selection == 'hide' "></image>
						<image v-else src="../../static/xuanzhong.svg"></image>
					</view>
					<view>{{item.name}}</view>
				</view>
				</block>
			</view>
			<!-- 提交 -->
			<view class="Submit">
				<checkbox-group @change="checkboxChange">
					<label class="trip-cont trip-bottom" v-for="item in checkboxContent" :key="item.value">
						<view>
							<checkbox class="check-sub" :value="item.value" :checked="item.checked" color="#10c963"/>
						</view>
						<view>{{item.name}}</view>
					</label>
				</checkbox-group>
				<!-- 按钮 -->
				<view class="Submit-button" @click="submit()">
					提交
				</view>
			</view>
			<!-- 提交未通过的信息提示组件 -->
			<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages" @clickMessage="clickMessage"></HMmessages>					
		</view>	
	</view>
</template>

<script>
import {check} from '../../config/check.js'
// 引入顶部信息提示组件
import HMmessages from "@/components/HM-messages/HM-messages.vue"
let Dbcrud = require('../../config/dataBase.js')
let Upload = require('../../config/upload.js')
let ErrorInfo = require('../../config/errorInfo.js')
export default {
	components: {
		HMmessages
	},
	data() {
		return {
			name: '',
			phone: '',
			IDcard: '',
			gender: ['男', '女'],
			index: -1,
			birthday: '',
			koseki: '',
			residencePlace: '',
			detailAddress: '',
			kosekivalue: 1,
			residencePlaceValue: 2,
			// 是否常住广东
			isPermanent: [
				{
					value: 'YES',
					name: '是，在广东居住半年以上'
				},
				{
					value: 'NO',
					name: '否，临时来广东的'
				}
			],
			current: -1,
			// 保存对于是否常住广东的选择信息
			isPermanentLive: '',
			// 保存选择的性别，最终提交到云数据库
			selectGender: '',
			// 症状
			symptom: [
				{
					value:'001',
					name:'正常',
					Selection:'hide'
				},
				{
					value:'002',
					name:'发热37ºC以下',
					Selection:'hide'
				},
				{
					value:'003',
					name:'发热37ºC以上',
					Selection:'hide'
				},
				{
					value:'004',
					name:'干咳',
					Selection:'hide'
				},
				{
					value:'005',
					name:'乏力',
					Selection:'hide'
				}
			],
			// 保存症状的选择
			selectSymptom: [],
			// 粤康码状态
			healthCode: [
				{
					value:'001',
					name:'绿码',
					Selection:'hide'
				},
				{
					value:'002',
					name:'黄码',
					Selection:'hide'
				},
				{
					value:'003',
					name:'橙码',
					Selection:'hide'
				},
				{
					value:'004',
					name:'红码',
					Selection:'hide'
				},
				{
					value:'005',
					name:'未办理',
					Selection:'hide'
				}
			],
			// 保存粤康码的状态
			healthCodeState: '',
			// 用户勾选提交确认
			checkboxContent: [
				{
					value: 'YES',
					name: '我已阅读本申报所列事项,并保证以上申报内容正确属实',
					checked: false
				}
			],
			// 保存用户是否勾选同意
			isAgree: ''
		}
	},
	methods: {
		genderChange(e) {
			this.index = e.target.value
		},
		birthdayChange(e){
			this.birthday = e.target.value
		},
		kosekiChange(e){
			this.publicRegion(e.target.value, this.kosekivalue)
		},
		residencePlaceChange(e) {
			this.publicRegion(e.target.value, this.residencePlaceValue)
		},
		// 户籍所在地和省市区共用方法
		publicRegion(value, type) {
			let str = ''
			value.forEach((item) => {
				str += item + '-'
			})
			if (str.length > 0) {
				if (type == 1) {
					this.koseki = str.substr(0, str.length - 1)
				} else {
					this.residencePlace = str.substr(0, str.length - 1)
				}
			}
		},
		radioChange(e) {
			this.isPermanentLive = e.target.value
		},
		// 是否常住广东的选择
		selectLive() {
			if (this.isPermanentLive == 'YES') {
				this.isPermanentLive = this.isPermanent[0].name
			} else if (this.isPermanentLive == 'NO') {
				this.isPermanentLive = this.isPermanent[1].name
			} else {
				this.isPermanentLive = ''
			}
		},
		// 性别的选择
		selectGenderFun() {
			if (this.index == 0) {
				this.selectGender = '男'
			} else if (this.index == 1) {
				this.selectGender = '女'
			} else {
				this.selectGender = ''
			}
		},
		// 症状
		radiosymptom(index, value) {	
			switch (value){
				case '001':
					this.$set(this.symptom[index], 'Selection', 'show')
					this.$set(this.symptom[1], 'Selection', 'hide')
					this.$set(this.symptom[2], 'Selection', 'hide')
					this.$set(this.symptom[3], 'Selection', 'hide')
					this.$set(this.symptom[4], 'Selection', 'hide')
					break;
				case '002':
					this.$set(this.symptom[index], 'Selection', 'show')
					this.$set(this.symptom[0], 'Selection', 'hide')
					this.$set(this.symptom[2], 'Selection', 'hide')
					break;
				case '003':
					this.$set(this.symptom[index], 'Selection', 'show')
					this.$set(this.symptom[0], 'Selection', 'hide')
					this.$set(this.symptom[1], 'Selection', 'hide')
					break;
				case '004':
					this.$set(this.symptom[index], 'Selection', 'show')
					this.$set(this.symptom[0], 'Selection', 'hide')
					break;
				case '005':
					this.$set(this.symptom[index], 'Selection', 'show')
					this.$set(this.symptom[0], 'Selection', 'hide')
					break;
				default:
					break;
			}
		},
		// 症状的选择
		selectSymptomFun() {
			let selectarr = this.symptom.filter((item) => {
				return item.Selection == 'show'
			})
			this.selectSymptom = selectarr.map((item) => {
				return item.name
			})
			console.log(this.selectSymptom)
		},
		// 粤康码状态
		radioHealthCode(index, value) {
			switch (value){
				case '001':
					this.$set(this.healthCode[index], 'Selection', 'show')
					this.$set(this.healthCode[1], 'Selection', 'hide')
					this.$set(this.healthCode[2], 'Selection', 'hide')
					this.$set(this.healthCode[3], 'Selection', 'hide')
					this.$set(this.healthCode[4], 'Selection', 'hide')
					break;
				case '002':
					this.$set(this.healthCode[index], 'Selection', 'show')
					this.$set(this.healthCode[0], 'Selection', 'hide')
					this.$set(this.healthCode[2], 'Selection', 'hide')
					this.$set(this.healthCode[3], 'Selection', 'hide')
					this.$set(this.healthCode[4], 'Selection', 'hide')
					break;
				case '003':
					this.$set(this.healthCode[index], 'Selection', 'show')
					this.$set(this.healthCode[0], 'Selection', 'hide')
					this.$set(this.healthCode[1], 'Selection', 'hide')
					this.$set(this.healthCode[3], 'Selection', 'hide')
					this.$set(this.healthCode[4], 'Selection', 'hide')
					break;
				case '004':
					this.$set(this.healthCode[index], 'Selection', 'show')
					this.$set(this.healthCode[0], 'Selection', 'hide')
					this.$set(this.healthCode[1], 'Selection', 'hide')
					this.$set(this.healthCode[2], 'Selection', 'hide')
					this.$set(this.healthCode[4], 'Selection', 'hide')
					break;
				case '005':
					this.$set(this.healthCode[index], 'Selection', 'show')
					this.$set(this.healthCode[0], 'Selection', 'hide')
					this.$set(this.healthCode[1], 'Selection', 'hide')
					this.$set(this.healthCode[2], 'Selection', 'hide')
					this.$set(this.healthCode[3], 'Selection', 'hide')
					break;
				default:
					break;
			}
		},
		// 粤康码状态的选择
		selectHealthCodeFun() {
			let selectState = this.healthCode.filter((item) => {
				return item.Selection == 'show'
			})
			let healthCodeArr = selectState.map((item) => {
				return item.name
			})
			this.healthCodeState = healthCodeArr.toString()
			console.log(this.healthCodeState)
		},
		// 用户是否勾选同意
		checkboxChange(event) {
			this.isAgree = event.target.value.toString()
		},
		submit() {
			let obj = {
				name: this.name,
				phone: this.phone,
				IDcard: this.IDcard,
				selectGender: this.selectGender,
				birthday: this.birthday,
				koseki: this.koseki,
				residencePlace: this.residencePlace,
				detailAddress: this.detailAddress,
				isPermanentLive: this.isPermanentLive,
				selectSymptom: this.selectSymptom,
				healthCodeState: this.healthCodeState,
				isAgree: this.isAgree
			}
			console.log(obj)
			check(obj).then((res) => {
				if (res == 'SUCCESS') {
					console.log('全部通过')
					// 显示消息提示框
					uni.showToast({
						title: '正在提交',
						icon: 'loading',
						mask: true
					})
					this.submitToCollection(obj)
				} else {
					if (res == '请填写正确的手机号码' || res == '请填写正确的身份证号码') {
						let iconType = 'error'
						this.tips(res, iconType)
					} else {
						let iconType = 'danger'
						this.tips(res, iconType)
					}
				}
			})
		},
		// 提示
		tips(content, type) {
			this.HMmessages.show(content, {
				icon: type,
				iconColor:"#ffffff",
				fontColor:"#ffffff",
				background:"rgba(255,0,0,.8)"
			})
		},
		// 提交数据到集合
		async submitToCollection(obj) {
			try{
				// 参数：1.云数据库集合名  2.需要提交的数据
				await new Dbcrud('healthInfo', obj).pushAdd()
				// 隐藏消息提示框
				uni.hideToast();
			}catch(err){
				let iconType = 'error'
				this.tips('提交失败', iconType)
			}

		},
		// 从本地相册选择图片或使用相机拍照
		async identify() {
			// 获取图片的临时链接地址
			let tempImgPath = await new Upload().uploadimg()
			// 给用户一个 loading 提示
			wx.showLoading({
				title: '正在识别中...',
				mask: true
			})
			// 获取云文件ID
			let fileID = await new Upload().uploadImgToCloudStorage(tempImgPath)
			// 获取真实https链接
			let realImgURL = await new Upload().changeLine(fileID)
			try{
				// 获取身份证信息
				let idCardInfo = await new Upload().idCardDiscernFun(realImgURL)
				wx.hideLoading()
				console.log(idCardInfo)
				this.handleCardInfo(idCardInfo.result)
			}catch(e){
				wx.hideLoading()
				// console.log('识别失败！')
				// 未解决bug：加上 throw 控制台报错：Uncaught (in promise) undefined
				// throw new ErrorInfo().hint()
				new ErrorInfo().hint()
			}
		},
		// 处理身份证信息
		handleCardInfo(info) {
			let { Name, IdNum, Sex, Birth, Address } = info
			this.name = Name
			this.IDcard = IdNum
			this.index = Sex == '男' ? this.index = 0 : this.index = 1
			this.birthday = Birth
			this.koseki = Address
		}
	},
	computed: {
		// 监听是否常住广东
		monitorLive() {
			return this.selectLive()
		},
		// 监听性别
		monitorGender() {
			return this.selectGenderFun()
		},
		// 监听症状
		monitorSymptom() {
			return this.selectSymptomFun()
		},
		// 监听粤康码状态
		monitorHealthCode() {
			return this.selectHealthCodeFun()
		}
	}
}
</script>

<style scoped>
.report-cont{margin: 30rpx 17rpx;}
.title{font-size: 35rpx; font-weight: bold;}
input{
height: 70rpx;
padding-left: 20rpx;}
.information{font-size: 30rpx;
margin: 20rpx 0;
border-bottom: 1px solid #F1F1F1;}
/* 必填项前添加红色星号 */
.information::before {
	content: '* ';
	color: red;
}
/* AI识别身份证 */
.discern-img image{width: 45rpx; height: 45rpx;}
.discern-cont{display: flex; justify-content: space-between;}
.discern-inpu{width: 100%;}
/* 性别 */
.discern-Gender{display: flex; justify-content: space-between;
height: 70rpx; align-items: center;}
.discern-left{padding-left: 20rpx;}
.discern-right{color: #4d92e0; width: 100rpx; height: 70rpx;
display: flex;align-items: center; justify-content: flex-end;}
/* 是否常住广东 */
.distance{margin-top: 30rpx;}
.trip{font-size: 30rpx;}
.trip-cont{display: flex;
align-items: center;
border-bottom: 1px solid #F1F1F1;
height: 100rpx;}
/* 多选*/
.trip-flex{display: flex; align-items: center;
height: 100rpx;
border-bottom: 1px solid #F1F1F1;}
.trip-listing{width: 50rpx; height: 50rpx; padding-right: 10rpx;}
.trip-listing image{width: 50rpx; height: 50rpx;}
/* 提交 */
.Submit{font-size: 20rpx;}
.check-sub{transform: scale(0.8,0.8);}
.trip-bottom{border: none !important;}
.Submit-button{background: #1E90FF;
color: #FFFFFF;
height: 80rpx; 
line-height: 80rpx;
text-align: center;
font-size: 30rpx;
border-radius: 10rpx;} 
/* 登录按钮 */
.wx-button button{border: none;font-size: 30rpx; 
background: #07c160;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
width: 400rpx;}
.wx-button {padding-top: 400rpx;}
/* 提示 */
.tipsdata image{width: 140rpx; height: 140rpx; display: block;
padding-bottom: 20rpx;}
.tipsdata{font-size: 30rpx;
width: 140rpx;
margin: 0 auto; 
text-align: center; 
padding-top: 400rpx;}
</style>