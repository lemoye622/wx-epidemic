<template>
	<view>
		<view class="report-cont" v-if="!usersing">
			<!-- 基本信息 -->
			<view class="title">基本信息</view>
			<view class="information">
				<text>* 姓名</text>
				<input type="text" v-model="name" placeholder="你的姓名" placeholder-style="color:#bdbdc5"/>
			</view>
			<view class="information">
				<text>* 手机号码</text>
				<input type="number" v-model="iphone" placeholder="你的手机号码" placeholder-style="color:#bdbdc5"/>
			</view>
			<view class="information">
				<text>* 身份证号码</text>
				<view class="discern-cont">
				<view class="discern-inpu"><input type="text" v-model="IDcard" placeholder="你的身份证号码" placeholder-style="color:#bdbdc5"/></view>
				<view class="discern-img" @click="identify()">
					<image src="../../static/shibie.png" mode="widthFix"></image>
				</view>
				</view>
			</view>
			<view class="information">
				<text>* 性别</text>
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
				<text>* 出生日期</text>
				<view class="discern-cont">
				<view class="discern-inpu"><input type="text" v-model="date" disabled placeholder="请选择出生日期" placeholder-style="color:#bdbdc5"/></view>
				<view class="discern-right">
					 <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="birthdayChange">
						<view class="uni-input">选择</view>
					</picker>
				</view>
				</view>
			</view>
			<view class="information">
				<text>* 户籍所在地</text>
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
				<text>* 居住省/市</text>
				<view class="discern-cont">
				<view class="discern-inpu"><input type="text" v-model="province" disabled placeholder="请选择居住省/市" placeholder-style="color:#bdbdc5"/></view>
				<view class="discern-right">
					<picker mode="region" :value="province"  @change="provinceChange">
						<view class="uni-input">选择</view>
					</picker>
				</view>
				</view>
			</view>
			<view class="information">
				<text>* 详细住址</text>
				<input type="text" v-model="address" placeholder="请填写详细住址" placeholder-style="color:#bdbdc5"/>
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
				<block v-for="(item,index) in symptom" :key="index">
				<view class="trip-flex" @click="radiosymptom(index,item.value)">
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
export default {
	components: {
		HMmessages
	},
	data() {
		return {
			name: '',
			iphone: '',
			IDcard: '',
			gender: ['男', '女'],
			index: -1,
			date: '',
			koseki: '',
			province: '',
			address: '',
			kosekivalue: 1,
			provincevalue: 2,
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
			selectValue: '',
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
			// 用户勾选提交确认
			checkboxContent: [
				{
					value: 'YES',
					name: '我已阅读本申报所列事项,并保证以上申报内容正确属实',
					checked: false
				}
			],
			// 保存用户是否勾选同意
			agree:[]
		}
	},
	methods: {
		genderChange(e) {
			this.index = e.target.value
		},
		birthdayChange(e){
			this.date = e.target.value
		},
		kosekiChange(e){
			this.publicRegion(e.target.value, this.kosekivalue)
		},
		provinceChange(e) {
			this.publicRegion(e.target.value, this.provincevalue)
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
					this.province = str.substr(0, str.length - 1)
				}
			}
		},
		radioChange(e) {
			this.selectValue = e.target.value
		},
		// 是否常住广东的选择
		selectLive() {
			if (this.selectValue == 'YES') {
				this.selectValue = this.isPermanent[0].name
			} else if (this.selectValue == 'NO') {
				this.selectValue = this.isPermanent[1].name
			} else {
				this.selectValue = ''
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
		// 用户是否勾选同意
		checkboxChange(event) {
			this.agree = event.target.value
		},
		submit() {
			let obj = {
				name: this.name,
				iphone: this.iphone,
				IDcard: this.IDcard,
				selectGender: this.selectGender,
				date: this.date,
				koseki: this.koseki,
				province: this.province,
				address: this.address,
				selectValue: this.selectValue,
				selectSymptom: this.selectSymptom,
				agree: this.agree
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