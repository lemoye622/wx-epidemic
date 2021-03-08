// 处理上传图片的类

class Upload {
	constructor(arg) {
	    this.arg = arg
	}
	
	// 上传本地相册的图片
	uploadimg() {
		return new Promise((resolve, reject) => {
			// 从本地相册选择图片或使用相机拍照
			wx.chooseImage({
			  count: 1,
			  sizeType: ['compressed'],
			  sourceType: ['album', 'camera'],
			  // success (res) {
			  //   // tempFilePath可以作为img标签的src属性显示图片
			  //   // const tempFilePaths = res.tempFilePaths
			  // }
			  success: (res) => {
				  resolve(res.tempFilePaths[0])
			  },
			  fail: (err) => {
				  reject(err)
			  }
			})
		})
	}
	
	// 上传图片到云存储
	uploadImgToCloudStorage(imgurl) {
		return new Promise((resolve, reject) => {
			// 目的：解决上传同名文件被覆盖的问题
			// lastIndexOf: 是查某个指定的字符串在字符串最后一次出现的位置（索引值）（从右往左）
			const imgIndex = imgurl.lastIndexOf('.')
			const imgElement = imgurl.slice(imgIndex)
			// 时间戳，随机数    防止高并发
			const cloudImgPath = `${ Date.now() }-${ Math.floor(Math.random() * 10000000)}${imgElement}`
			wx.cloud.uploadFile({
			  // 云存储路径
			  cloudPath: 'idCardImg/' + cloudImgPath,
			  // 要上传文件资源的路径
			  filePath: imgurl, 
			}).then(res => {
			  // get resource ID
			  resolve(res.fileID)
			}).catch(error => {
			  reject(error)
			})
		})
	}
	
	// 用云文件 ID 换取真实链接（即https地址）
	changeLine(fid) {
		return new Promise((resolve, reject) => {
			wx.cloud.getTempFileURL({
			  fileList: [{
			    fileID: fid,
			    maxAge: 60 * 60, // one hour
			  }]
			}).then(res => {
			  // get temp file URL
			  resolve(res.fileList[0].tempFileURL)
			}).catch(error => {
			  reject(error)
			})
		})
	}
	
	// 调用身份证识别的云函数
	idCardDiscernFun(reallyimgurl) {
		return new Promise((resolve, reject) => {
			wx.cloud.callFunction({
			  // 要调用的云函数名称
			  name: 'epidemic-card',
			  // 传递给云函数的event参数
			  data: { idCardUrl: reallyimgurl }
			}).then(res => {
			  // output: res.result === 3
			  resolve(res)
			}).catch(err => {
			  reject(err)
			})
		})
	}
}

module.exports = Upload