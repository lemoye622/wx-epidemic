(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/components/map"],{

/***/ 19:
/*!***********************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/map.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.vue?vue&type=template&id=67d6712a&scoped=true& */ 20);
/* harmony import */ var _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.vue?vue&type=script&lang=js& */ 22);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _map_vue_vue_type_style_index_0_id_67d6712a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.vue?vue&type=style&index=0&id=67d6712a&scoped=true&lang=css& */ 26);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67d6712a",
  null,
  false,
  _map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 20:
/*!******************************************************************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/map.vue?vue&type=template&id=67d6712a&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=template&id=67d6712a&scoped=true& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_template_id_67d6712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 21:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/map.vue?vue&type=template&id=67d6712a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 22:
/*!************************************************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/map.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=script&lang=js& */ 23);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 23:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/map.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











var _uCharts = _interopRequireDefault(__webpack_require__(/*! @/components/u-charts/u-charts.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
var _console = console,log = _console.log; // 引入广东省的地图
var gd = __webpack_require__(/*! config/provinces.json */ 25);var canvaMap = null;var _default = { data: function data() {return { cWidth: '', cHeight: '', pixelRatio: 1, // 接收所有城市确诊数的对象
      regiondata: {}, // 赋值的动态地图数据
      mapdatas: [] };

  },

  created: function created() {
    this.cWidth = uni.upx2px(650);
    this.cHeight = uni.upx2px(700);
    this.getServerData();
  },

  methods: {
    getServerData: function getServerData() {
      log(gd);
      var cMap = gd.features;
      this.showMap('canvasPie', cMap);
    },
    showMap: function showMap(canvasId, chartData) {
      canvaMap = new _uCharts.default({
        $this: this,
        canvasId: canvasId,
        type: 'map',
        fontSize: 9,
        padding: [10, 10, 10, 10],
        legend: {
          show: false,
          position: 'left',
          padding: 2,
          itemGap: 10, // 2
          margin: 1 },

        background: '#FFFFFF',
        pixelRatio: this.pixelRatio,
        series: chartData,
        dataLabel: true,
        width: this.cWidth * this.pixelRatio,
        height: this.cHeight * this.pixelRatio,
        extra: {
          map: {
            border: true,
            borderWidth: 1,
            borderColor: '#666666',
            fillOpacity: 0.6 } } });



      //下面是默认选中索引
      var cindex = 0;
      //下面是自定义文案
      var textList = [{ text: "\u5E7F\u5DDE\u5E02: \u786E\u8BCA".concat(this.regiondata.guangzhou), color: '#facc14' }];
      //下面是event的模拟,tooltip的Y坐标值通过这个mp.changedTouches[0].y控制
      var tmpevent = { mp: { changedTouches: [{ identifier: 0, x: 222, y: 185 }] } };
      setTimeout(function () {
        canvaMap.showToolTip(tmpevent, {
          index: cindex,
          textList: textList });

      }, 200);
    },

    // 事件
    touchMap: function touchMap(e) {
      log(e);
      canvaMap.showToolTip(e, {
        format: function format(item) {
          return item.properties.name + ': 确诊' + item.properties.subFeatureIndex;
        } });

    } },


  watch: {
    mapdata: function mapdata(newvalue, oldvalue) {
      // log('地图，确诊数：')
      // log(newvalue)
      // 广州市
      var numgz = 0;
      newvalue.forEach(function (item) {
        numgz += item.diadata.Guangzhoudig;
      });
      this.regiondata['guangzhou'] = numgz;
      // 韶关市
      var numsg = 0;
      newvalue.forEach(function (item) {
        numsg += item.diadata.Shaoguandig;
      });
      this.regiondata['shaoguan'] = numsg;
      // 深圳市
      var numsz = 0;
      newvalue.forEach(function (item) {
        numsz += item.diadata.Shenzhendig;
      });
      this.regiondata['shenzhen'] = numsz;
      // 珠海市
      var numzh = 0;
      newvalue.forEach(function (item) {
        numzh += item.diadata.Zhuhaidig;
      });
      this.regiondata['zhuhai'] = numzh;
      // 汕头市
      var numst = 0;
      newvalue.forEach(function (item) {
        numst += item.diadata.Shantoudig;
      });
      this.regiondata['shantou'] = numst;
      // 佛山市
      var numfs = 0;
      newvalue.forEach(function (item) {
        numfs += item.diadata.Foshandig;
      });
      this.regiondata['foshan'] = numfs;
      // 江门市
      var numjm = 0;
      newvalue.forEach(function (item) {
        numjm += item.diadata.Jiangmendig;
      });
      this.regiondata['jiangmen'] = numjm;
      // 湛江市
      var numzj = 0;
      newvalue.forEach(function (item) {
        numzj += item.diadata.Zhanjiangdig;
      });
      this.regiondata['zhanjiang'] = numzj;
      // 茂名市
      var nummm = 0;
      newvalue.forEach(function (item) {
        nummm += item.diadata.Maomingdig;
      });
      this.regiondata['maoming'] = nummm;
      // 肇庆市
      var numzq = 0;
      newvalue.forEach(function (item) {
        numzq += item.diadata.Zhaoqingdig;
      });
      this.regiondata['zhaoqing'] = numzq;
      // 惠州市
      var numhz = 0;
      newvalue.forEach(function (item) {
        numhz += item.diadata.Huizhoudig;
      });
      this.regiondata['huizhou'] = numhz;
      // 梅州市
      var nummz = 0;
      newvalue.forEach(function (item) {
        nummz += item.diadata.Meizhoudig;
      });
      this.regiondata['meizhou'] = nummz;
      // 汕尾市
      var numsw = 0;
      newvalue.forEach(function (item) {
        numsw += item.diadata.Shanweidjg;
      });
      this.regiondata['shanwei'] = numsw;
      // 河源市
      var numhy = 0;
      newvalue.forEach(function (item) {
        numhy += item.diadata.Heyuandjg;
      });
      this.regiondata['heyuan'] = numhy;
      // 阳江市
      var numyj = 0;
      newvalue.forEach(function (item) {
        numyj += item.diadata.Yangjiangdig;
      });
      this.regiondata['yangjiang'] = numyj;
      // 清远市
      var numqy = 0;
      newvalue.forEach(function (item) {
        numqy += item.diadata.Qingyuandig;
      });
      this.regiondata['qingyuan'] = numqy;
      // 东莞市
      var numdw = 0;
      newvalue.forEach(function (item) {
        numdw += item.diadata.Dongwandig;
      });
      this.regiondata['dongwan'] = numdw;
      // 中山市
      var numzs = 0;
      newvalue.forEach(function (item) {
        numzs += item.diadata.Zhongshandig;
      });
      this.regiondata['zhongshan'] = numzs;
      // 东沙群岛
      var numdsqd = 0;
      newvalue.forEach(function (item) {
        numdsqd += item.diadata.Dongshaqundaodig;
      });
      this.regiondata['dongshaqundao'] = numdsqd;
      // 潮州市
      var numcz = 0;
      newvalue.forEach(function (item) {
        numcz += item.diadata.Chaozhoudig;
      });
      this.regiondata['chaozhou'] = numcz;
      // 揭阳市
      var numjy = 0;
      newvalue.forEach(function (item) {
        numjy += item.diadata.Jieyangdig;
      });
      this.regiondata['jieyang'] = numjy;
      // 云浮市
      var numyf = 0;
      newvalue.forEach(function (item) {
        numyf += item.diadata.Yunfudig;
      });
      this.regiondata['yunfu'] = numyf;
      // log(this.regiondata)
      this.mapdatas = arrRess(this.regiondata);
      this.cWidth = uni.upx2px(650);
      this.cHeight = uni.upx2px(700);
      this.getServerData(this.mapdatas);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 26:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/map.vue?vue&type=style&index=0&id=67d6712a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_67d6712a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./map.vue?vue&type=style&index=0&id=67d6712a&scoped=true&lang=css& */ 27);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_67d6712a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_67d6712a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_67d6712a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_67d6712a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_map_vue_vue_type_style_index_0_id_67d6712a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 27:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/map.vue?vue&type=style&index=0&id=67d6712a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/components/map.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/map-create-component',
    {
        'pages/index/components/map-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(19))
        })
    },
    [['pages/index/components/map-create-component']]
]);
