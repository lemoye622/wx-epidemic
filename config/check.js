// 健康信息上报的表单校验

// 身份证正则
var idCardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
// 手机号码正则
var iphoneReg = /^1[3456789]\d{9}$/

let check = function(obj){
	let{
		name,
		iphone,
		IDcard,
		selectGender,
		date,
		koseki,
		province,
		address,
		selectValue,
		selectSymptom,
		agree
	} = obj
	return new Promise((resolve,reject)=>{
		// 姓名
		if(name == ''){
			let tip = '请填写姓名'
			resolve(tip)
			return false
		}
		// 手机号码
		if (iphone == '') {
			let tip = '请填写手机号码'
			resolve(tip)
			return false
		}
		if (iphone && !iphoneReg.test(iphone)){
			let tip = '请填写正确的手机号码'
			resolve(tip)
			return false
		}
		// 身份证
		if (IDcard == '') {
			let tip = '请填写身份证号码'
			resolve(tip)
			return false
		}
		if(IDcard && !idCardReg.test(IDcard)){
			let tip = '请填写正确的身份证号码'
			resolve(tip)
			return false
		}
		// 性别
		if(selectGender == ''){
			let tip = '请选择性别'
			resolve(tip)
			return false
		}
		// 出生日期
		if(date == ''){
			let tip = '请选择出生日期'
			resolve(tip)
			return false
		}
		// 户籍
		if(koseki == ''){
			let tip = '请选择户籍所在地'
			resolve(tip)
			return false
		}
		// 居住省市
		if(province == ''){
			let tip = '请选择居住省市'
			resolve(tip)
			return false
		}
		// 详细地址
		if(address == ''){
			let tip = '请填写详细地址'
			resolve(tip)
			return false
		}
		// 是否常住广东
		if(selectValue == ''){
			let tip = '请选择是否常住广东'
			resolve(tip)
			return false
		}
		// 是否出现症状
		if(selectSymptom.length == 0){
			let tip = '请选择是否出现症状'
			resolve(tip)
			return false
		}
		// 勾选，同意
		if(agree.length == 0){
			let tip = '请勾选本申报所列事项'
			resolve(tip)
			return false
		}
		// 全部通过
		let tip = 'SUCCESS'
		resolve(tip)
		
	})
}

export {check}