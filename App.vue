<script>
	export default {
		onLaunch() {
			if (!wx.cloud) {
				console.log('微信版本过低，不支持云开发')
			} else {
				// 完成初始化
				wx.cloud.init({
					env: 'epidemic-7guqm06ef9b46335',
					traceUser: true
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
/*每个页面公共css */
.menimgsss{width: 100%;}
</style>
