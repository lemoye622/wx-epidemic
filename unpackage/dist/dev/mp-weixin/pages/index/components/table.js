(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/components/table"],{

/***/ 259:
/*!*************************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/table.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=5e03891c&scoped=true& */ 260);
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ 262);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_vue_vue_type_style_index_0_id_5e03891c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.vue?vue&type=style&index=0&id=5e03891c&scoped=true&lang=css& */ 265);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e03891c",
  null,
  false,
  _table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 260:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/table.vue?vue&type=template&id=5e03891c&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./table.vue?vue&type=template&id=5e03891c&scoped=true& */ 261);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_template_id_5e03891c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 261:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/table.vue?vue&type=template&id=5e03891c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 262:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/table.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./table.vue?vue&type=script&lang=js& */ 263);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 263:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/table.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _console =
console,log = _console.log;
var moment = __webpack_require__(/*! moment */ 29);
moment.locale('zh-cn');
// 表格数据处理的类
var TableData = __webpack_require__(/*! ../../../config/tabledata.js */ 264);var _default =
{
  props: {
    tableData: Array },

  data: function data() {
    return {
      tableList: ['地区', '新增确诊', '累积确诊', '累积治愈', '累积死亡'],
      tabledatas: [] };

  },

  watch: {
    tableData: function tableData(newvalue, oldvalue) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var diagvalue, curevalue, deathvalue, now, timelist, diagdata, diaglist, Abroad, guangzhou, shaoguan, shenzhen, zhuhai, shantou, foshan, jiangmen, zhanjiang, maoming, zhaoqing, huizhou, meizhou, shanwei, heyuan, yangjiang, qingyuan, dongwan, zhongshan, dongshaqundao, chaozhou, jieyang, yunfu;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                log('表格数据');
                log(newvalue);
                diagvalue = newvalue[0].data;
                curevalue = newvalue[1].data;
                deathvalue = newvalue[2].data;
                // 最终需要的数据格式是数组对象
                // 当天时间
                now = moment().format('YYYY-MM-DD');
                timelist = [];
                timelist.push(now);
                // 当天确诊
                diagdata = timelist.map(function (itemtime) {
                  var diagtoday = diagvalue.filter(function (item) {
                    return moment(item.time).format('YYYY-MM-DD') == itemtime;
                  });
                  return diagtoday;
                });
                // log(diagdata)
                // 取出当天确诊的 value 值
                diaglist = diagdata[0].map(function (item) {
                  var valuelist = [];
                  for (var key in item.data) {
                    valuelist.push(item.data[key]);
                  }
                  return valuelist;
                });
                // log(diaglist)

                // 境外输入
                _context.next = 12;return new TableData('境外输入', diaglist, 0, diagvalue, curevalue, deathvalue).tablepro();case 12:Abroad = _context.sent;
                _this.tabledatas.push(Abroad);
                // 广州
                _context.next = 16;return new TableData('广州', diaglist, 5, diagvalue, curevalue, deathvalue).tablepro();case 16:guangzhou = _context.sent;
                _this.tabledatas.push(guangzhou);
                // 韶关
                _context.next = 20;return new TableData('韶关', diaglist, 15, diagvalue, curevalue, deathvalue).tablepro();case 20:shaoguan = _context.sent;
                _this.tabledatas.push(shaoguan);
                // 深圳
                _context.next = 24;return new TableData('深圳', diaglist, 16, diagvalue, curevalue, deathvalue).tablepro();case 24:shenzhen = _context.sent;
                _this.tabledatas.push(shenzhen);
                // 珠海
                _context.next = 28;return new TableData('珠海', diaglist, 22, diagvalue, curevalue, deathvalue).tablepro();case 28:zhuhai = _context.sent;
                _this.tabledatas.push(zhuhai);
                // 汕头
                _context.next = 32;return new TableData('汕头', diaglist, 13, diagvalue, curevalue, deathvalue).tablepro();case 32:shantou = _context.sent;
                _this.tabledatas.push(shantou);
                // 佛山
                _context.next = 36;return new TableData('佛山', diaglist, 4, diagvalue, curevalue, deathvalue).tablepro();case 36:foshan = _context.sent;
                _this.tabledatas.push(foshan);
                // 江门
                _context.next = 40;return new TableData('江门', diaglist, 8, diagvalue, curevalue, deathvalue).tablepro();case 40:jiangmen = _context.sent;
                _this.tabledatas.push(jiangmen);
                // 湛江
                _context.next = 44;return new TableData('湛江', diaglist, 19, diagvalue, curevalue, deathvalue).tablepro();case 44:zhanjiang = _context.sent;
                _this.tabledatas.push(zhanjiang);
                // 茂名
                _context.next = 48;return new TableData('茂名', diaglist, 10, diagvalue, curevalue, deathvalue).tablepro();case 48:maoming = _context.sent;
                _this.tabledatas.push(maoming);
                // 肇庆
                _context.next = 52;return new TableData('肇庆', diaglist, 20, diagvalue, curevalue, deathvalue).tablepro();case 52:zhaoqing = _context.sent;
                _this.tabledatas.push(zhaoqing);
                // 惠州
                _context.next = 56;return new TableData('惠州', diaglist, 7, diagvalue, curevalue, deathvalue).tablepro();case 56:huizhou = _context.sent;
                _this.tabledatas.push(huizhou);
                // 梅州
                _context.next = 60;return new TableData('梅州', diaglist, 11, diagvalue, curevalue, deathvalue).tablepro();case 60:meizhou = _context.sent;
                _this.tabledatas.push(meizhou);
                // 汕尾
                _context.next = 64;return new TableData('汕尾', diaglist, 14, diagvalue, curevalue, deathvalue).tablepro();case 64:shanwei = _context.sent;
                _this.tabledatas.push(shanwei);
                // 河源
                _context.next = 68;return new TableData('河源', diaglist, 6, diagvalue, curevalue, deathvalue).tablepro();case 68:heyuan = _context.sent;
                _this.tabledatas.push(heyuan);
                // 阳江
                _context.next = 72;return new TableData('阳江', diaglist, 17, diagvalue, curevalue, deathvalue).tablepro();case 72:yangjiang = _context.sent;
                _this.tabledatas.push(yangjiang);
                // 清远
                _context.next = 76;return new TableData('清远', diaglist, 12, diagvalue, curevalue, deathvalue).tablepro();case 76:qingyuan = _context.sent;
                _this.tabledatas.push(qingyuan);
                // 东莞
                _context.next = 80;return new TableData('东莞', diaglist, 3, diagvalue, curevalue, deathvalue).tablepro();case 80:dongwan = _context.sent;
                _this.tabledatas.push(dongwan);
                // 中山
                _context.next = 84;return new TableData('中山', diaglist, 21, diagvalue, curevalue, deathvalue).tablepro();case 84:zhongshan = _context.sent;
                _this.tabledatas.push(zhongshan);
                // 东沙群岛
                _context.next = 88;return new TableData('东沙群岛', diaglist, 2, diagvalue, curevalue, deathvalue).tablepro();case 88:dongshaqundao = _context.sent;
                _this.tabledatas.push(dongshaqundao);
                // 潮州
                _context.next = 92;return new TableData('潮州', diaglist, 1, diagvalue, curevalue, deathvalue).tablepro();case 92:chaozhou = _context.sent;
                _this.tabledatas.push(chaozhou);
                // 揭阳
                _context.next = 96;return new TableData('揭阳', diaglist, 9, diagvalue, curevalue, deathvalue).tablepro();case 96:jieyang = _context.sent;
                _this.tabledatas.push(jieyang);
                // 云浮
                _context.next = 100;return new TableData('云浮', diaglist, 18, diagvalue, curevalue, deathvalue).tablepro();case 100:yunfu = _context.sent;
                _this.tabledatas.push(yunfu);
                log(_this.tabledatas);case 103:case "end":return _context.stop();}}}, _callee);}))();
    } } };exports.default = _default;

/***/ }),

/***/ 265:
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/table.vue?vue&type=style&index=0&id=5e03891c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_style_index_0_id_5e03891c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./table.vue?vue&type=style&index=0&id=5e03891c&scoped=true&lang=css& */ 266);
/* harmony import */ var _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_style_index_0_id_5e03891c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_style_index_0_id_5e03891c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_style_index_0_id_5e03891c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_style_index_0_id_5e03891c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_devsoft_HBuilderX2_7_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_table_vue_vue_type_style_index_0_id_5e03891c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 266:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages/index/components/table.vue?vue&type=style&index=0&id=5e03891c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/components/table.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/table-create-component',
    {
        'pages/index/components/table-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(259))
        })
    },
    [['pages/index/components/table-create-component']]
]);
