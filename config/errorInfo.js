// 错误信息提示的类
 
 class ErrorInfo {
	 constructor(msg = '识别失败，请上传正确的身份证重试') {
		 this.msg = msg
	 }
	 
	 hint() {
		 wx.showToast({
		 	title: this.msg,
			icon: 'none',
			duration: 2500
		 })
	 }
 }
 
 module.exports = ErrorInfo