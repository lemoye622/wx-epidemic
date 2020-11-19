(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 24:
/*!************************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/components/u-charts/u-charts.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {/*
 * uCharts v1.9.4.20200331
 * uni-app平台高性能跨全端图表，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）
 * Copyright (c) 2019 QIUN秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 
 * uCharts官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */



var config = {
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 15,
  xAxisLineHeight: 15,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: [10, 10, 10, 10],
  pixelRatio: 1,
  rotate: false,
  columePadding: 3,
  fontSize: 13,
  //dataPointShape: ['diamond', 'circle', 'triangle', 'rect'],
  dataPointShape: ['circle', 'circle', 'circle', 'circle'],
  colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#90ed7d'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarLabelTextMargin: 15,
  gaugeLabelTextMargin: 15 };


var assign = function assign(target) {for (var _len2 = arguments.length, varArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {varArgs[_key2 - 1] = arguments[_key2];}
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  if (!varArgs || varArgs.length <= 0) {
    return target;
  }
  // 深度合并对象
  function deepAssign(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
      deepAssign(obj1[key], obj2[key]) : obj1[key] = obj2[key];
    }
    return obj1;
  }

  varArgs.forEach(function (val) {
    target = deepAssign(target, val);
  });
  return target;
};

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y < obj1.end.y;
    return !flag;
  } };


//兼容H5点击事件
function getH5Offset(e) {
  e.mp = {
    changedTouches: [] };

  e.mp.changedTouches.push({
    x: e.offsetX,
    y: e.offsetY });

  return e;
}

// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[uCharts] unvalid series data!');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }
  return num / multiple;
}

function calCandleMA(dayArr, nameArr, colorArr, kdata) {
  var seriesTemp = [];
  for (var k = 0; k < dayArr.length; k++) {
    var seriesItem = {
      data: [],
      name: nameArr[k],
      color: colorArr[k] };

    for (var i = 0, len = kdata.length; i < len; i++) {
      if (i < dayArr[k]) {
        seriesItem.data.push(null);
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayArr[k]; j++) {
        sum += kdata[i - j][1];
      }
      seriesItem.data.push(+(sum / dayArr[k]).toFixed(3));
    }
    seriesTemp.push(seriesItem);
  }
  return seriesTemp;
}

function calValidDistance(self, distance, chartData, config, opts) {
  var dataChartAreaWidth = opts.width - opts.area[1] - opts.area[3];
  var dataChartWidth = chartData.eachSpacing * (opts.chartData.xAxisData.xAxisPoints.length - 1);
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
    self.event.trigger('scrollLeft');
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
    self.event.trigger('scrollRight');
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    return angle;
  }
  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }
  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;
  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;
  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);
  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {

  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y, points[i + 1].y);
    } else {
      return false;
    }
  }
  function isNotMiddlePointX(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].x >= Math.max(points[i - 1].x, points[i + 1].x) || points[i].x <= Math.min(points[i - 1].x, points[i + 1].x);
    } else {
      return false;
    }
  }
  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }
  if (isNotMiddlePointX(points, i + 1)) {
    pBx = points[i + 1].x;
  }
  if (isNotMiddlePointX(points, i)) {
    pAx = points[i].x;
  }
  if (pAy >= Math.max(points[i].y, points[i + 1].y) || pAy <= Math.min(points[i].y, points[i + 1].y)) {
    pAy = points[i].y;
  }
  if (pBy >= Math.max(points[i].y, points[i + 1].y) || pBy <= Math.min(points[i].y, points[i + 1].y)) {
    pBy = points[i + 1].y;
  }
  if (pAx >= Math.max(points[i].x, points[i + 1].x) || pAx <= Math.min(points[i].x, points[i + 1].x)) {
    pAx = points[i].x;
  }
  if (pBx >= Math.max(points[i].x, points[i + 1].x) || pBx <= Math.min(points[i].x, points[i + 1].x)) {
    pBx = points[i + 1].x;
  }
  return {
    ctrA: {
      x: pAx,
      y: pAy },

    ctrB: {
      x: pBx,
      y: pBy } };


}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fillSeries(series, opts, config) {
  var index = 0;
  return series.map(function (item) {
    if (!item.color) {
      item.color = config.colors[index];
      index = (index + 1) % config.colors.length;
    }
    if (!item.index) {
      item.index = 0;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (typeof item.show == "undefined") {
      item.show = true;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (!item.pointShape) {
      item.pointShape = "circle";
    }
    if (!item.legendShape) {
      switch (item.type) {
        case 'line':
          item.legendShape = "line";
          break;
        case 'column':
          item.legendShape = "rect";
          break;
        case 'area':
          item.legendShape = "triangle";
          break;
        default:
          item.legendShape = "circle";}

    }
    return item;
  });
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else if (range >= 0.01) {
    limit = 0.01;
  } else if (range >= 0.001) {
    limit = 0.001;
  } else if (range >= 0.0001) {
    limit = 0.0001;
  } else if (range >= 0.00001) {
    limit = 0.00001;
  } else {
    limit = 0.000001;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.fontSize;
  text = String(text);
  var text = text.split('');
  var width = 0;
  for (var i = 0; i < text.length; i++) {
    var item = text[i];
    if (/[a-zA-Z]/.test(item)) {
      width += 7;
    } else if (/[0-9]/.test(item)) {
      width += 5.5;
    } else if (/\./.test(item)) {
      width += 2.7;
    } else if (/-/.test(item)) {
      width += 3.25;
    } else if (/[\u4e00-\u9fa5]/.test(item)) {
      width += 10;
    } else if (/\(|\)/.test(item)) {
      width += 3.73;
    } else if (/\s/.test(item)) {
      width += 2.5;
    } else if (/%/.test(item)) {
      width += 8;
    } else {
      width += 10;
    }
  }
  return width * fontSize / 10;
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series, len) {
  var sum = new Array(len);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {
      y = opts.height - touches.clientX * opts.pixelRatio;
      x = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    } else {
      x = touches.clientX * opts.pixelRatio;
      y = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pixelRatio / 2 * (opts.pixelRatio - 1)) *
      opts.pixelRatio;
    }
  } else {
    if (opts.rotate) {
      y = opts.height - touches.x * opts.pixelRatio;
      x = touches.y * opts.pixelRatio;
    } else {
      x = touches.x * opts.pixelRatio;
      y = touches.y * opts.pixelRatio;
    }
  }
  return {
    x: x,
    y: y };

}

function getSeriesDataItem(series, index) {
  var data = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    if (item.data[index] !== null && typeof item.data[index] !== 'undefined' && item.show) {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.type = item.type;
      seriesItem.style = item.style;
      seriesItem.pointShape = item.pointShape;
      seriesItem.disableLegend = item.disableLegend;
      seriesItem.name = item.name;
      seriesItem.show = item.show;
      seriesItem.data = item.format ? item.format(item.data[index]) : item.data[index];
      data.push(seriesItem);
    }
  }
  return data;
}

function getMaxTextListLength(list) {
  var lengthList = list.map(function (item) {
    return measureText(item);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }

  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var textList = seriesData.map(function (item) {
    var titleText = [];
    if (categories) {
      titleText = categories;
    } else {
      titleText = item.data;
    }
    return {
      text: option.format ? option.format(item, titleText[index]) : item.name + ': ' + item.data,
      color: item.color };

  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i = 0; _i < validCalPoints.length; _i++) {
    var item = validCalPoints[_i];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getMixToolTipData(seriesData, calPoints, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var textList = seriesData.map(function (item) {
    return {
      text: option.format ? option.format(item, categories[index]) : item.name + ': ' + item.data,
      color: item.color,
      disableLegend: item.disableLegend ? true : false };

  });
  textList = textList.filter(function (item) {
    if (item.disableLegend !== true) {
      return item;
    }
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  for (var _i2 = 0; _i2 < validCalPoints.length; _i2++) {
    var item = validCalPoints[_i2];
    offset.x = Math.round(item.x);
    offset.y += item.y;
  }
  offset.y /= validCalPoints.length;
  return {
    textList: textList,
    offset: offset };

}

function getCandleToolTipData(series, seriesData, calPoints, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  var text0 = {
    text: categories[index],
    color: null };

  textList.push(text0);
  seriesData.map(function (item) {
    if (index == 0) {
      if (item.data[1] - item.data[0] < 0) {
        color[1] = downColor;
      } else {
        color[1] = upColor;
      }
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }
    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  offset.x = Math.round(validCalPoints[0][0].x);
  return {
    textList: textList,
    offset: offset };

}

function filterSeries(series) {
  var tempSeries = [];
  for (var i = 0; i < series.length; i++) {
    if (series[i].show == true) {
      tempSeries.push(series[i]);
    }
  }
  return tempSeries;
}

function findCurrentIndex(currentPoints, calPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var currentIndex = -1;
  var spacing = opts.chartData.eachSpacing / 2;
  var xAxisPoints = [];
  if (calPoints.length > 0) {
    if (opts.type == 'candle') {
      for (var i = 0; i < calPoints[0].length; i++) {
        xAxisPoints.push(calPoints[0][i][0].x);
      }
    } else {
      for (var _i3 = 0; _i3 < calPoints[0].length; _i3++) {
        xAxisPoints.push(calPoints[0][_i3].x);
      }
    }
    if ((opts.type == 'line' || opts.type == 'area') && opts.xAxis.boundaryGap == 'justify') {
      spacing = opts.chartData.eachSpacing / 2;
    }
    if (!opts.categories) {
      spacing = 0;
    }
    if (isInExactChartArea(currentPoints, opts, config)) {
      xAxisPoints.forEach(function (item, index) {
        if (currentPoints.x + offset + spacing > item) {
          currentIndex = index;
        }
      });
    }
  }
  return currentIndex;
}

function findLegendIndex(currentPoints, legendData, opts) {
  var currentIndex = -1;
  if (isInExactLegendArea(currentPoints, legendData.area)) {
    var points = legendData.points;
    var index = -1;
    for (var i = 0, len = points.length; i < len; i++) {
      var item = points[i];
      for (var j = 0; j < item.length; j++) {
        index += 1;
        var area = item[j]['area'];
        if (currentPoints.x > area[0] && currentPoints.x < area[2] && currentPoints.y > area[1] && currentPoints.y < area[3]) {
          currentIndex = index;
          break;
        }
      }
    }
    return currentIndex;
  }
  return currentIndex;
}

function isInExactLegendArea(currentPoints, area) {
  return currentPoints.x > area.start.x && currentPoints.x < area.end.x && currentPoints.y > area.start.y &&
  currentPoints.y < area.end.y;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x <= opts.width - opts.area[1] + 10 && currentPoints.x >= opts.area[3] - 10 && currentPoints.y >= opts.area[0] && currentPoints.y <= opts.height - opts.area[2];
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };

    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);

      return item;
    });

    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <=
      rangeEnd) {
        currentIndex = index;
      }
    });
  }

  return currentIndex;
}

function findFunnelChartCurrentIndex(currentPoints, funnelData) {
  var currentIndex = -1;
  for (var i = 0, len = funnelData.series.length; i < len; i++) {
    var item = funnelData.series[i];
    if (currentPoints.x > item.funnelArea[0] && currentPoints.x < item.funnelArea[2] && currentPoints.y > item.funnelArea[1] && currentPoints.y < item.funnelArea[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findWordChartCurrentIndex(currentPoints, wordData) {
  var currentIndex = -1;
  for (var i = 0, len = wordData.length; i < len; i++) {
    var item = wordData[i];
    if (currentPoints.x > item.area[0] && currentPoints.x < item.area[2] && currentPoints.y > item.area[1] && currentPoints.y < item.area[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findMapChartCurrentIndex(currentPoints, opts) {
  var currentIndex = -1;
  var cData = opts.chartData.mapData;
  var data = opts.series;
  var tmp = pointToCoordinate(currentPoints.y, currentPoints.x, cData.bounds, cData.scale, cData.xoffset, cData.yoffset);
  var poi = [tmp.x, tmp.y];
  for (var i = 0, len = data.length; i < len; i++) {
    var item = data[i].geometry.coordinates;
    if (isPoiWithinPoly(poi, item)) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData) {
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    for (var i = 0, len = pieData.series.length; i < len; i++) {
      var item = pieData.series[i];
      if (isInAngleRange(angle, item._start_, item._start_ + item._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }

  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (item !== null) {
      items.push(item);
    } else {
      if (items.length) {
        newPoints.push(items);
      }
      items = [];
    }
  });
  if (items.length) {
    newPoints.push(items);
  }

  return newPoints;
}

function calLegendData(series, opts, config, chartData) {
  var legendData = {
    area: {
      start: {
        x: 0,
        y: 0 },

      end: {
        x: 0,
        y: 0 },

      width: 0,
      height: 0,
      wholeWidth: 0,
      wholeHeight: 0 },

    points: [],
    widthArr: [],
    heightArr: [] };

  if (opts.legend.show === false) {
    chartData.legendData = legendData;
    return legendData;
  }

  var padding = opts.legend.padding;
  var margin = opts.legend.margin;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);
  if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
    var legendList = [];
    var widthCount = 0;
    var widthCountArr = [];
    var currentRow = [];
    for (var i = 0; i < series.length; i++) {
      var item = series[i];
      var itemWidth = shapeWidth + shapeRight + measureText(item.name || 'undefined', fontSize) + opts.legend.itemGap;
      if (widthCount + itemWidth > opts.width - opts.padding[1] - opts.padding[3]) {
        legendList.push(currentRow);
        widthCountArr.push(widthCount - opts.legend.itemGap);
        widthCount = itemWidth;
        currentRow = [item];
      } else {
        widthCount += itemWidth;
        currentRow.push(item);
      }
    }
    if (currentRow.length) {
      legendList.push(currentRow);
      widthCountArr.push(widthCount - opts.legend.itemGap);
      legendData.widthArr = widthCountArr;
      var legendWidth = Math.max.apply(null, widthCountArr);
      switch (opts.legend.float) {
        case 'left':
          legendData.area.start.x = opts.padding[3];
          legendData.area.end.x = opts.padding[3] + 2 * padding;
          break;
        case 'right':
          legendData.area.start.x = opts.width - opts.padding[1] - legendWidth - 2 * padding;
          legendData.area.end.x = opts.width - opts.padding[1];
          break;
        default:
          legendData.area.start.x = (opts.width - legendWidth) / 2 - padding;
          legendData.area.end.x = (opts.width + legendWidth) / 2 + padding;}

      legendData.area.width = legendWidth + 2 * padding;
      legendData.area.wholeWidth = legendWidth + 2 * padding;
      legendData.area.height = legendList.length * lineHeight + 2 * padding;
      legendData.area.wholeHeight = legendList.length * lineHeight + 2 * padding + 2 * margin;
      legendData.points = legendList;
    }
  } else {
    var len = series.length;
    var maxHeight = opts.height - opts.padding[0] - opts.padding[2] - 2 * margin - 2 * padding;
    var maxLength = Math.min(Math.floor(maxHeight / lineHeight), len);
    legendData.area.height = maxLength * lineHeight + padding * 2;
    legendData.area.wholeHeight = maxLength * lineHeight + padding * 2;
    switch (opts.legend.float) {
      case 'top':
        legendData.area.start.y = opts.padding[0] + margin;
        legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
        break;
      case 'bottom':
        legendData.area.start.y = opts.height - opts.padding[2] - margin - legendData.area.height;
        legendData.area.end.y = opts.height - opts.padding[2] - margin;
        break;
      default:
        legendData.area.start.y = (opts.height - legendData.area.height) / 2;
        legendData.area.end.y = (opts.height + legendData.area.height) / 2;}

    var lineNum = len % maxLength === 0 ? len / maxLength : Math.floor(len / maxLength + 1);
    var _currentRow = [];
    for (var _i4 = 0; _i4 < lineNum; _i4++) {
      var temp = series.slice(_i4 * maxLength, _i4 * maxLength + maxLength);
      _currentRow.push(temp);
    }

    legendData.points = _currentRow;

    if (_currentRow.length) {
      for (var _i5 = 0; _i5 < _currentRow.length; _i5++) {
        var _item = _currentRow[_i5];
        var maxWidth = 0;
        for (var j = 0; j < _item.length; j++) {
          var _itemWidth = shapeWidth + shapeRight + measureText(_item[j].name || 'undefined', fontSize) + opts.legend.itemGap;
          if (_itemWidth > maxWidth) {
            maxWidth = _itemWidth;
          }
        }
        legendData.widthArr.push(maxWidth);
        legendData.heightArr.push(_item.length * lineHeight + padding * 2);
      }
      var _legendWidth = 0;
      for (var _i6 = 0; _i6 < legendData.widthArr.length; _i6++) {
        _legendWidth += legendData.widthArr[_i6];
      }
      legendData.area.width = _legendWidth - opts.legend.itemGap + 2 * padding;
      legendData.area.wholeWidth = legendData.area.width + padding;
    }
  }

  switch (opts.legend.position) {
    case 'top':
      legendData.area.start.y = opts.padding[0] + margin;
      legendData.area.end.y = opts.padding[0] + margin + legendData.area.height;
      break;
    case 'bottom':
      legendData.area.start.y = opts.height - opts.padding[2] - legendData.area.height - margin;
      legendData.area.end.y = opts.height - opts.padding[2] - margin;
      break;
    case 'left':
      legendData.area.start.x = opts.padding[3];
      legendData.area.end.x = opts.padding[3] + legendData.area.width;
      break;
    case 'right':
      legendData.area.start.x = opts.width - opts.padding[1] - legendData.area.width;
      legendData.area.end.x = opts.width - opts.padding[1];
      break;}

  chartData.legendData = legendData;
  return legendData;
}

function calCategoriesData(categories, opts, config, eachSpacing) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };

  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item, opts.xAxis.fontSize || config.fontSize);
  });
  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }
  return result;
}

function getXAxisTextList(series, opts, config) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data = dataCombine(series);
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor.toString().indexOf('Array') > -1) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor.toString().indexOf('Array') > -1) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[0]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.xAxis.data[index].min === 'number') {
      minData = Math.min(opts.xAxis.data[index].min, minData);
    }
    if (typeof opts.xAxis.data[index].max === 'number') {
      maxData = Math.max(opts.xAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.xAxis.min === 'number') {
      minData = Math.min(opts.xAxis.min, minData);
    }
    if (typeof opts.xAxis.max === 'number') {
      maxData = Math.max(opts.xAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  //var dataRange = getDataRange(minData, maxData);
  var minRange = minData;
  var maxRange = maxData;

  var range = [];
  var eachRange = (maxRange - minRange) / opts.xAxis.splitNumber;

  for (var i = 0; i <= opts.xAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range;
}

function calXAxisData(series, opts, config) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };


  result.ranges = getXAxisTextList(series, opts, config);
  result.rangesFormat = result.ranges.map(function (item) {
    item = opts.xAxis.format ? opts.xAxis.format(item) : util.toFixed(item, 2);
    return item;
  });

  var xAxisScaleValues = result.ranges.map(function (item) {
    // 如果刻度值是浮点数,则保留两位小数
    item = util.toFixed(item, 2);
    // 若有自定义格式则调用自定义的格式化函数
    item = opts.xAxis.format ? opts.xAxis.format(Number(item)) : item;
    return item;
  });

  result = Object.assign(result, getXAxisPoints(xAxisScaleValues, opts, config));
  // 计算X轴刻度的属性譬如每个刻度的间隔,刻度的起始点\结束点以及总长
  var eachSpacing = result.eachSpacing;

  var textLength = xAxisScaleValues.map(function (item) {
    return measureText(item);
  });

  // get max length of categories text
  var maxTextLength = Math.max.apply(this, textLength);

  // 如果刻度值文本内容过长,则将其逆时针旋转45°
  if (maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }

  if (opts.xAxis.disabled === true) {
    result.xAxisHeight = 0;
  }

  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));

  var data = [];var _loop2 = function _loop2(
  i) {
    var each = series[i];
    var listItem = {};
    listItem.color = each.color;
    listItem.legendShape = each.legendShape;
    listItem.pointShape = each.pointShape;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];

      tmp.proportion = item / maxData;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion *
      process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });

    data.push(listItem);};for (var i = 0; i < series.length; i++) {_loop2(i);
  }

  return data;
}

function getPieDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var count = 0;
  var _start_ = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  }
  for (var _i7 = 0; _i7 < series.length; _i7++) {
    var _item2 = series[_i7];
    _item2.data = _item2.data === null ? 0 : _item2.data;
    if (count === 0) {
      _item2._proportion_ = 1 / series.length * process;
    } else {
      _item2._proportion_ = _item2.data / count * process;
    }
    _item2._radius_ = radius;
  }
  for (var _i8 = 0; _i8 < series.length; _i8++) {
    var _item3 = series[_i8];
    _item3._start_ = _start_;
    _start_ += 2 * _item3._proportion_ * Math.PI;
  }

  return series;
}

function getFunnelDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  series = series.sort(function (a, b) {return parseInt(b.data) - parseInt(a.data);});
  for (var i = 0; i < series.length; i++) {
    series[i].radius = series[i].data / series[0].data * radius * process;
    series[i]._proportion_ = series[i].data / series[0].data;
  }
  return series.reverse();
}

function getRoseDataPoints(series, type, minRadius, radius) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var count = 0;
  var _start_ = 0;

  var dataArr = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
    dataArr.push(item.data);
  }

  var minData = Math.min.apply(null, dataArr);
  var maxData = Math.max.apply(null, dataArr);
  var radiusLength = radius - minRadius;

  for (var _i9 = 0; _i9 < series.length; _i9++) {
    var _item4 = series[_i9];
    _item4.data = _item4.data === null ? 0 : _item4.data;
    if (count === 0 || type == 'area') {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = 1 / series.length * process;
    } else {
      _item4._proportion_ = _item4.data / count * process;
      _item4._rose_proportion_ = _item4.data / count * process;
    }
    _item4._radius_ = minRadius + radiusLength * ((_item4.data - minData) / (maxData - minData));
  }
  for (var _i10 = 0; _i10 < series.length; _i10++) {
    var _item5 = series[_i10];
    _item5._start_ = _start_;
    _start_ += 2 * _item5._rose_proportion_ * Math.PI;
  }

  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    var totalAngle = void 0;
    if (arcbarOption.type == 'circle') {
      totalAngle = 2;
    } else {
      if (arcbarOption.endAngle < arcbarOption.startAngle) {
        totalAngle = 2 + arcbarOption.endAngle - arcbarOption.startAngle;
      } else {
        totalAngle = arcbarOption.startAngle - arcbarOption.endAngle;
      }
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var _i11 = 0; _i11 < categories.length; _i11++) {
        if (item.data <= categories[_i11].value) {
          item.color = categories[_i11].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getPieTextMaxLength(series) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text));
  }

  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / columnLen);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    item.x += (index + 0.5 - columnLen / 2) * item.width;
    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }

    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {

  return points.map(function (item, indexn) {

    if (item === null) {
      return null;
    }
    item.width = Math.ceil((eachSpacing - 2 * config.columePadding) / 2);

    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width);
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var spacingValid = opts.width - opts.area[1] - opts.area[3];
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  if ((opts.type == 'line' || opts.type == 'area') && dataCount > 1 && opts.xAxis.boundaryGap == 'justify') {
    dataCount -= 1;
  }
  var eachSpacing = spacingValid / dataCount;

  var xAxisPoints = [];
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.xAxis.boundaryGap !== 'justify') {
    if (opts.enableScroll === true) {
      xAxisPoints.push(startX + categories.length * eachSpacing);
    } else {
      xAxisPoints.push(endX);
    }
  }
  return {
    xAxisPoints: xAxisPoints,
    startX: startX,
    endX: endX,
    eachSpacing: eachSpacing };

}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - Math.round(height) - opts.area[2];
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });

  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  var validWidth = opts.width - opts.area[1] - opts.area[3];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index];
      var value = item;
      if (typeof item === 'object' && item !== null) {
        if (item.constructor.toString().indexOf('Array') > -1) {
          var xranges, xminRange, xmaxRange;
          xranges = [].concat(opts.chartData.xAxisData.ranges);
          xminRange = xranges.shift();
          xmaxRange = xranges.pop();
          value = item[1];
          point.x = opts.area[3] + validWidth * (item[0] - xminRange) / (xmaxRange - xminRange);
        } else {
          value = item.value;
        }
      }
      if (boundaryGap == 'center') {
        point.x += Math.round(eachSpacing / 2);
      }
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];

  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      point.y0 = opts.height - Math.round(heightc) - opts.area[2];
      points.push(point);
    }
  });

  return points;
}

function getYAxisTextList(series, opts, config, stack) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data;
  if (stack == 'stack') {
    data = dataCombineStack(series, opts.categories.length);
  } else {
    data = dataCombine(series);
  }
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor.toString().indexOf('Array') > -1) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor.toString().indexOf('Array') > -1) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[1]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.yAxis.data[index].min === 'number') {
      minData = Math.min(opts.yAxis.data[index].min, minData);
    }
    if (typeof opts.yAxis.data[index].max === 'number') {
      maxData = Math.max(opts.yAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.yAxis.min === 'number') {
      minData = Math.min(opts.yAxis.min, minData);
    }
    if (typeof opts.yAxis.max === 'number') {
      maxData = Math.max(opts.yAxis.max, maxData);
    }
  }


  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }

  var dataRange = getDataRange(minData, maxData);
  var minRange = dataRange.minRange;
  var maxRange = dataRange.maxRange;

  var range = [];
  var eachRange = (maxRange - minRange) / opts.yAxis.splitNumber;

  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, {
    type: "" },
  opts.extra.column);
  //如果是多Y轴，重新计算
  var YLength = opts.yAxis.data.length;
  var newSeries = new Array(YLength);
  if (YLength > 0) {
    for (var i = 0; i < YLength; i++) {
      newSeries[i] = [];
      for (var j = 0; j < series.length; j++) {
        if (series[j].index == i) {
          newSeries[i].push(series[j]);
        }
      }
    }
    var rangesArr = new Array(YLength);
    var rangesFormatArr = new Array(YLength);
    var yAxisWidthArr = new Array(YLength);var _loop3 = function _loop3(

    _i12) {
      var yData = opts.yAxis.data[_i12];
      //如果总开关不显示，强制每个Y轴为不显示
      if (opts.yAxis.disabled == true) {
        yData.disabled = true;
      }
      rangesArr[_i12] = getYAxisTextList(newSeries[_i12], opts, config, columnstyle.type, _i12);
      var yAxisFontSizes = yData.fontSize || config.fontSize;
      yAxisWidthArr[_i12] = { position: yData.position ? yData.position : 'left', width: 0 };
      rangesFormatArr[_i12] = rangesArr[_i12].map(function (items) {
        items = util.toFixed(items, 6);
        items = yData.format ? yData.format(Number(items)) : items;
        yAxisWidthArr[_i12].width = Math.max(yAxisWidthArr[_i12].width, measureText(items, yAxisFontSizes) + 5);
        return items;
      });
      var calibration = yData.calibration ? 4 * opts.pixelRatio : 0;
      yAxisWidthArr[_i12].width += calibration + 3 * opts.pixelRatio;
      if (yData.disabled === true) {
        yAxisWidthArr[_i12].width = 0;
      }};for (var _i12 = 0; _i12 < YLength; _i12++) {_loop3(_i12);
    }

  } else {
    var rangesArr = new Array(1);
    var rangesFormatArr = new Array(1);
    var yAxisWidthArr = new Array(1);
    rangesArr[0] = getYAxisTextList(series, opts, config, columnstyle.type);
    yAxisWidthArr[0] = { position: 'left', width: 0 };
    var yAxisFontSize = opts.yAxis.fontSize || config.fontSize;
    rangesFormatArr[0] = rangesArr[0].map(function (item) {
      item = util.toFixed(item, 6);
      item = opts.yAxis.format ? opts.yAxis.format(Number(item)) : item;
      yAxisWidthArr[0].width = Math.max(yAxisWidthArr[0].width, measureText(item, yAxisFontSize) + 5);
      return item;
    });
    yAxisWidthArr[0].width += 3 * opts.pixelRatio;
    if (opts.yAxis.disabled === true) {
      yAxisWidthArr[0] = { position: 'left', width: 0 };
      opts.yAxis.data[0] = { disabled: true };
    } else {
      opts.yAxis.data[0] = { disabled: false, position: 'left', max: opts.yAxis.max, min: opts.yAxis.min, format: opts.yAxis.format };
    }

  }

  return {
    rangesFormat: rangesFormatArr,
    ranges: rangesArr,
    yAxisWidth: yAxisWidthArr };


}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var minAxis = opts.area[0];
  var items = [];
  for (var i = 0; i < ranges.length; i++) {
    var maxVal = ranges[i].shift();
    var minVal = ranges[i].pop();
    var item = maxVal - (maxVal - minVal) * (point - minAxis) / spacingValid;
    item = opts.yAxis.data[i].format ? opts.yAxis.data[i].format(Number(item)) : item.toFixed(0);
    items.push(String(item));
  }
  return items;
}

function calMarkLineData(points, opts) {
  var minRange, maxRange;
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  for (var i = 0; i < points.length; i++) {
    points[i].yAxisIndex = points[i].yAxisIndex ? points[i].yAxisIndex : 0;
    var range = [].concat(opts.chartData.yAxisData.ranges[points[i].yAxisIndex]);
    minRange = range.pop();
    maxRange = range.shift();
    var height = spacingValid * (points[i].value - minRange) / (maxRange - minRange);
    points[i].y = opts.height - Math.round(height) - opts.area[2];
  }
  return points;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  if (opts.dataPointShapeType == 'hollow') {
    context.setStrokeStyle(color);
    context.setFillStyle(opts.background);
    context.setLineWidth(2 * opts.pixelRatio);
  } else {
    context.setStrokeStyle("#ffffff");
    context.setFillStyle(color);
    context.setLineWidth(1 * opts.pixelRatio);
  }
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 2.5 * opts.pixelRatio, item.y);
        context.arc(item.x, item.y, 3 * opts.pixelRatio, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'rect') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context, center) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || config.titleColor;
  var subtitleFontColor = opts.subtitle.color || config.subtitleColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;

  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize);
    var startX = center.x - textWidth / 2 + (opts.subtitle.offsetX || 0);
    var startY = center.y + subtitlefontSize / 2 + (opts.subtitle.offsetY || 0);
    if (title) {
      startY += (titleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize);
    var _startX = center.x - _textWidth / 2 + (opts.title.offsetX || 0);
    var _startY = center.y + titlefontSize / 2 + (opts.title.offsetY || 0);
    if (subtitle) {
      _startY -= (subtitleHeight + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context) {
  // 绘制数据文案
  var data = series.data;
  points.forEach(function (item, index) {
    if (item !== null) {
      //var formatVal = series.format ? series.format(data[index]) : data[index];
      context.beginPath();
      context.setFontSize(series.textSize || config.fontSize);
      context.setFillStyle(series.textColor || '#666666');
      var value = data[index];
      if (typeof data[index] === 'object' && data[index] !== null) {
        if (data[index].constructor == Array) {
          value = data[index][1];
        } else {
          value = data[index].value;
        }
      }
      var formatVal = series.format ? series.format(value) : value;
      context.fillText(String(formatVal), item.x - measureText(formatVal, series.textSize || config.fontSize) / 2, item.y - 4);
      context.closePath();
      context.stroke();
    }
  });

}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + config.gaugeLabelTextMargin;

  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    var labelText = gaugeOption.labelFormat ? gaugeOption.labelFormat(nowNumber) : nowNumber;
    pos.x += centerPosition.x - measureText(labelText) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || '#666666');
    context.fillText(labelText, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();

    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin;

  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '') / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '');
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || '#666666');
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;

  var seriesConvert = series.map(function (item) {
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_.toFixed(4) * 100) + '%';
    if (item._rose_proportion_) item._proportion_ = item._rose_proportion_;
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    var color = item.color;
    var radius = item._radius_;
    return {
      arc: arc,
      text: text,
      color: color,
      radius: radius,
      textColor: item.textColor,
      textSize: item.textSize };

  });
  for (var i = 0; i < seriesConvert.length; i++) {
    var item = seriesConvert[i];
    // line end
    var orginX1 = Math.cos(item.arc) * (item.radius + lineRadius);
    var orginY1 = Math.sin(item.arc) * (item.radius + lineRadius);

    // line start
    var orginX2 = Math.cos(item.arc) * item.radius;
    var orginY2 = Math.sin(item.arc) * item.radius;

    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;
    var textWidth = measureText(item.text, item.textSize || config.fontSize);
    var startY = orginY3;

    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, {
      x: orginX3 }))
    {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }
    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }

    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color,
      textColor: item.textColor,
      textSize: item.textSize };

    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  }

  for (var _i13 = 0; _i13 < textObjectCollection.length; _i13++) {
    var _item6 = textObjectCollection[_i13];
    var lineStartPoistion = convertCoordinateOrigin(_item6.lineStart.x, _item6.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(_item6.lineEnd.x, _item6.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(_item6.start.x, _item6.start.y, center);
    context.setLineWidth(1 * opts.pixelRatio);
    context.setFontSize(config.fontSize);
    context.beginPath();
    context.setStrokeStyle(_item6.color);
    context.setFillStyle(_item6.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = _item6.start.x < 0 ? textPosition.x + _item6.width : textPosition.x;
    var textStartX = _item6.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + _item6.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(_item6.textSize || config.fontSize);
    context.setFillStyle(_item6.textColor || '#666666');
    context.fillText(_item6.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  }
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.xAxisLabel) {
    var labelText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = measureText(labelText, config.fontSize);

    var textX = offsetX - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pixelRatio);
    context.rect(textX - config.toolTipPadding, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
    context.fillText(String(labelText), textX, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawMarkLine(opts, config, context) {
  var markLineOption = assign({}, {
    type: 'solid',
    dashLength: 4,
    data: [] },
  opts.extra.markLine);
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var points = calMarkLineData(markLineOption.data, opts);

  for (var i = 0; i < points.length; i++) {
    var item = assign({}, {
      lineColor: '#DE4A42',
      showLabel: false,
      labelFontColor: '#666666',
      labelBgColor: '#DFE8FF',
      labelBgOpacity: 0.8,
      yAxisIndex: 0 },
    points[i]);

    if (markLineOption.type == 'dash') {
      context.setLineDash([markLineOption.dashLength, markLineOption.dashLength]);
    }
    context.setStrokeStyle(item.lineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.beginPath();
    context.moveTo(startX, item.y);
    context.lineTo(endX, item.y);
    context.stroke();
    context.setLineDash([]);
    if (item.showLabel) {
      var labelText = opts.yAxis.format ? opts.yAxis.format(Number(item.value)) : item.value;
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText, config.fontSize);
      var bgStartX = opts.padding[3] + config.yAxisTitleWidth - config.toolTipPadding;
      var bgEndX = Math.max(opts.area[3], textWidth + config.toolTipPadding * 2);
      var bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = item.y;
      context.setFillStyle(hexToRgb(item.labelBgColor, item.labelBgOpacity));
      context.setStrokeStyle(item.labelBgColor);
      context.setLineWidth(1 * opts.pixelRatio);
      context.beginPath();
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(item.labelFontColor);
      context.fillText(String(labelText), textX, textY + 0.5 * config.fontSize);
      context.stroke();
    }
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    gridType: 'solid',
    dashLength: 4 },
  opts.extra.tooltip);

  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];

  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pixelRatio);
  context.beginPath();
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.stroke();
  context.setLineDash([]);

  if (toolTipOption.yAxisLabel) {
    var labelText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    var widthArr = opts.chartData.yAxisData.yAxisWidth;
    var tStartLeft = opts.area[3];
    var tStartRight = opts.width - opts.area[1];
    for (var i = 0; i < labelText.length; i++) {
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText[i], config.fontSize);
      var bgStartX = void 0,bgEndX = void 0,bgWidth = void 0;
      if (widthArr[i].position == 'left') {
        bgStartX = tStartLeft - widthArr[i].width;
        bgEndX = Math.max(bgStartX, bgStartX + textWidth + config.toolTipPadding * 2);
      } else {
        bgStartX = tStartRight;
        bgEndX = Math.max(bgStartX + widthArr[i].width, bgStartX + textWidth + config.toolTipPadding * 2);
      }
      bgWidth = bgEndX - bgStartX;

      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = opts.tooltip.offset.y;
      context.beginPath();
      context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
      context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
      context.setLineWidth(1 * opts.pixelRatio);
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(toolTipOption.labelFontColor || config.fontColor);
      context.fillText(labelText[i], textX, textY + 0.5 * config.fontSize);
      context.closePath();
      context.stroke();
      if (widthArr[i].position == 'left') {
        tStartLeft -= widthArr[i].width + opts.yAxis.padding;
      } else {
        tStartRight += widthArr[i].width + opts.yAxis.padding;
      }
    }
  }
}

function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = assign({}, {
    activeBgColor: '#000000',
    activeBgOpacity: 0.08 },
  opts.extra.tooltip);
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    showBox: true,
    bgColor: '#000000',
    bgOpacity: 0.7,
    fontColor: '#FFFFFF' },
  opts.extra.tooltip);
  var legendWidth = 4 * opts.pixelRatio;
  var legendMarginRight = 5 * opts.pixelRatio;
  var arrowWidth = 8 * opts.pixelRatio;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
  }

  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pixelRatio;
  var textWidth = textList.map(function (item) {
    return measureText(item.text, config.fontSize);
  });
  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;

  if (toolTipOption.showBox == false) {return;}
  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }
  if (toolTipHeight + offset.y > opts.height) {
    offset.y = opts.height - toolTipHeight;
  }
  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.bgColor || config.toolTipBackground, toolTipOption.bgOpacity || config.toolTipOpacity));
  if (isOverRightBorder) {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x - arrowWidth, offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x - arrowWidth - Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  } else {
    context.moveTo(offset.x, offset.y + 10 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio - 5 * opts.pixelRatio);
    context.lineTo(offset.x + arrowWidth, offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y);
    context.lineTo(offset.x + arrowWidth + Math.round(toolTipWidth), offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + toolTipHeight);
    context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pixelRatio + 5 * opts.pixelRatio);
    context.lineTo(offset.x, offset.y + 10 * opts.pixelRatio);
  }

  context.closePath();
  context.fill();

  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
      config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });

  // draw text list

  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index +
    config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.fontColor);
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawYAxisTitle(title, opts, config, context) {
  var startX = config.xAxisHeight + (opts.height - config.xAxisHeight - measureText(title)) / 2;
  context.save();
  context.beginPath();
  context.setFontSize(config.fontSize);
  context.setFillStyle(opts.yAxis.titleFontColor || '#333333');
  context.translate(0, opts.height);
  context.rotate(-90 * Math.PI / 180);
  context.fillText(title, startX, opts.padding[3] + 0.5 * config.fontSize);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var columnOption = assign({}, {
    type: 'group',
    width: eachSpacing / 2,
    meter: {
      border: 4,
      fillColor: '#FFFFFF' } },

  opts.extra.column);

  var calPoints = [];
  context.save();

  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        for (var i = 0; i < points.length; i++) {
          var item = points[i];
          if (item !== null && i > leftNum && i < rightNum) {
            context.beginPath();
            context.setStrokeStyle(item.color || eachSeries.color);
            context.setLineWidth(1);
            context.setFillStyle(item.color || eachSeries.color);
            var startX = item.x - item.width / 2;
            var height = opts.height - item.y - opts.area[2];
            context.moveTo(startX, item.y);
            context.lineTo(startX + item.width - 2, item.y);
            context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
            context.lineTo(startX, opts.height - opts.area[2]);
            context.lineTo(startX, item.y);
            context.closePath();
            context.stroke();
            context.fill();
          }
        };
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);

        for (var _i14 = 0; _i14 < points.length; _i14++) {
          var _item7 = points[_i14];
          if (_item7 !== null && _i14 > leftNum && _i14 < rightNum) {
            context.beginPath();
            context.setFillStyle(_item7.color || eachSeries.color);
            var startX = _item7.x - _item7.width / 2 + 1;
            var height = opts.height - _item7.y - opts.area[2];
            var height0 = opts.height - _item7.y0 - opts.area[2];
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.moveTo(startX, _item7.y);
            context.fillRect(startX, _item7.y, _item7.width - 2, height);
            context.closePath();
            context.fill();
          }
        };
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meter.border);
        if (seriesIndex == 0) {
          for (var _i15 = 0; _i15 < points.length; _i15++) {
            var _item8 = points[_i15];
            if (_item8 !== null && _i15 > leftNum && _i15 < rightNum) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meter.fillColor);
              var startX = _item8.x - _item8.width / 2;
              var height = opts.height - _item8.y - opts.area[2];
              context.moveTo(startX, _item8.y);
              context.fillRect(startX, _item8.y, _item8.width, height);
              context.closePath();
              context.fill();
              //画边框线
              if (columnOption.meter.border > 0) {
                context.beginPath();
                context.setStrokeStyle(eachSeries.color);
                context.setLineWidth(columnOption.meter.border * opts.pixelRatio);
                context.moveTo(startX + columnOption.meter.border * 0.5, _item8.y + height);
                context.lineTo(startX + columnOption.meter.border * 0.5, _item8.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + _item8.width - columnOption.meter.border * 0.5, _item8.y + columnOption.meter.border * 0.5);
                context.lineTo(startX + _item8.width - columnOption.meter.border * 0.5, _item8.y + height);
                context.stroke();
              }
            }
          };
        } else {
          for (var _i16 = 0; _i16 < points.length; _i16++) {
            var _item9 = points[_i16];
            if (_item9 !== null && _i16 > leftNum && _i16 < rightNum) {
              context.beginPath();
              context.setFillStyle(_item9.color || eachSeries.color);
              var startX = _item9.x - _item9.width / 2;
              var height = opts.height - _item9.y - opts.area[2];
              context.moveTo(startX, _item9.y);
              context.fillRect(startX, _item9.y, _item9.width, height);
              context.closePath();
              context.fill();
            }
          };
        }
        break;}

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
          drawPointText(points, eachSeries, config, context);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context);
          break;}

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawCandleDataPoints(series, seriesMA, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var candleOption = assign({}, {
    color: {},
    average: {} },
  opts.extra.candle);
  candleOption.color = assign({}, {
    upLine: '#f04864',
    upFill: '#f04864',
    downLine: '#2fc25b',
    downFill: '#2fc25b' },
  candleOption.color);
  candleOption.average = assign({}, {
    show: false,
    name: [],
    day: [],
    color: config.colors },
  candleOption.average);
  opts.extra.candle = candleOption;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var calPoints = [];

  context.save();

  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  //画均线
  if (candleOption.average.show) {
    seriesMA.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      var splitPointList = splitPoints(points);

      for (var i = 0; i < splitPointList.length; i++) {
        var _points = splitPointList[i];
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(1);
        if (_points.length === 1) {
          context.moveTo(_points[0].x, _points[0].y);
          context.arc(_points[0].x, _points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points[0].x, _points[0].y);
          var startPoint = 0;
          for (var j = 0; j < _points.length; j++) {
            var item = _points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          }
          context.moveTo(_points[0].x, _points[0].y);
        }
        context.closePath();
        context.stroke();
      }
    });
  }
  //画K线
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    for (var i = 0; i < splitPointList[0].length; i++) {
      if (i > leftNum && i < rightNum) {
        var item = splitPointList[0][i];
        context.beginPath();
        //如果上涨
        if (data[i][1] - data[i][0] > 0) {
          context.setStrokeStyle(candleOption.color.upLine);
          context.setFillStyle(candleOption.color.upFill);
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        } else {
          context.setStrokeStyle(candleOption.color.downLine);
          context.setFillStyle(candleOption.color.downFill);
          context.setLineWidth(1 * opts.pixelRatio);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        }
        context.closePath();
        context.fill();
        context.stroke();
      }
    }
  });

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var areaOption = assign({}, {
    type: 'straight',
    opacity: 0.2,
    addLine: false,
    width: 2,
    gradient: false },
  opts.extra.area);

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    var splitPointList = splitPoints(points);
    for (var i = 0; i < splitPointList.length; i++) {
      var _points2 = splitPointList[i];
      // 绘制区域数
      context.beginPath();
      context.setStrokeStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      if (areaOption.gradient) {
        var gradient = context.createLinearGradient(0, opts.area[0], 0, opts.height - opts.area[2]);
        gradient.addColorStop('0', hexToRgb(eachSeries.color, areaOption.opacity));
        gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
        context.setFillStyle(gradient);
      } else {
        context.setFillStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      }
      context.setLineWidth(areaOption.width * opts.pixelRatio);
      if (_points2.length > 1) {
        var firstPoint = _points2[0];
        var lastPoint = _points2[_points2.length - 1];
        context.moveTo(firstPoint.x, firstPoint.y);
        var startPoint = 0;
        if (areaOption.type === 'curve') {
          for (var j = 0; j < _points2.length; j++) {
            var item = _points2[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points2, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        } else {
          for (var _j = 0; _j < _points2.length; _j++) {
            var _item10 = _points2[_j];
            if (startPoint == 0 && _item10.x > leftSpace) {
              context.moveTo(_item10.x, _item10.y);
              startPoint = 1;
            }
            if (_j > 0 && _item10.x > leftSpace && _item10.x < rightSpace) {
              context.lineTo(_item10.x, _item10.y);
            }
          };
        }

        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var _item11 = _points2[0];
        context.moveTo(_item11.x - eachSpacing / 2, _item11.y);
        context.lineTo(_item11.x + eachSpacing / 2, _item11.y);
        context.lineTo(_item11.x + eachSpacing / 2, endY);
        context.lineTo(_item11.x - eachSpacing / 2, endY);
        context.moveTo(_item11.x - eachSpacing / 2, _item11.y);
      }
      context.closePath();
      context.fill();

      //画连线
      if (areaOption.addLine) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(areaOption.width * opts.pixelRatio);
        if (_points2.length === 1) {
          context.moveTo(_points2[0].x, _points2[0].y);
          context.arc(_points2[0].x, _points2[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points2[0].x, _points2[0].y);
          var _startPoint = 0;
          if (areaOption.type === 'curve') {
            for (var _j2 = 0; _j2 < _points2.length; _j2++) {
              var _item12 = _points2[_j2];
              if (_startPoint == 0 && _item12.x > leftSpace) {
                context.moveTo(_item12.x, _item12.y);
                _startPoint = 1;
              }
              if (_j2 > 0 && _item12.x > leftSpace && _item12.x < rightSpace) {
                var _ctrlPoint = createCurveControlPoints(_points2, _j2 - 1);
                context.bezierCurveTo(_ctrlPoint.ctrA.x, _ctrlPoint.ctrA.y, _ctrlPoint.ctrB.x, _ctrlPoint.ctrB.y, _item12.x, _item12.y);
              }
            };
          } else {
            for (var _j3 = 0; _j3 < _points2.length; _j3++) {
              var _item13 = _points2[_j3];
              if (_startPoint == 0 && _item13.x > leftSpace) {
                context.moveTo(_item13.x, _item13.y);
                _startPoint = 1;
              }
              if (_j3 > 0 && _item13.x > leftSpace && _item13.x < rightSpace) {
                context.lineTo(_item13.x, _item13.y);
              }
            };
          }
          context.moveTo(_points2[0].x, _points2[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      }
    }

    //画点
    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var lineOption = assign({}, {
    type: 'straight',
    width: 2 },
  opts.extra.line);
  lineOption.width *= opts.pixelRatio;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];

  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points);

    if (eachSeries.lineType == 'dash') {
      var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
      dashLength *= opts.pixelRatio;
      context.setLineDash([dashLength, dashLength]);
    }
    context.beginPath();
    context.setStrokeStyle(eachSeries.color);
    context.setLineWidth(lineOption.width);

    splitPointList.forEach(function (points, index) {

      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        var startPoint = 0;
        if (lineOption.type === 'curve') {
          for (var j = 0; j < points.length; j++) {
            var item = points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        } else {
          for (var _j4 = 0; _j4 < points.length; _j4++) {
            var _item14 = points[_j4];
            if (startPoint == 0 && _item14.x > leftSpace) {
              context.moveTo(_item14.x, _item14.y);
              startPoint = 1;
            }
            if (_j4 > 0 && _item14.x > leftSpace && _item14.x < rightSpace) {
              context.lineTo(_item14.x, _item14.y);
            }
          };
        }
        context.moveTo(points[0].x, points[0].y);
      }

    });

    context.stroke();
    context.setLineDash([]);

    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context);
    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;

  var endY = opts.height - opts.area[2];
  var calPoints = [];

  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }

  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;

    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();

    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);

    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      for (var i = 0; i < points.length; i++) {
        var item = points[i];
        if (item !== null && i > leftNum && i < rightNum) {
          context.beginPath();
          context.setStrokeStyle(item.color || eachSeries.color);
          context.setLineWidth(1);
          context.setFillStyle(item.color || eachSeries.color);
          var startX = item.x - item.width / 2;
          var height = opts.height - item.y - opts.area[2];
          context.moveTo(startX, item.y);
          context.moveTo(startX, item.y);
          context.lineTo(startX + item.width - 2, item.y);
          context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
          context.lineTo(startX, opts.height - opts.area[2]);
          context.lineTo(startX, item.y);
          context.closePath();
          context.stroke();
          context.fill();
          context.closePath();
          context.fill();
        }
      }
      columnIndex += 1;
    }

    //绘制区域图数据

    if (eachSeries.type == 'area') {
      var _splitPointList = splitPoints(points);
      for (var _i17 = 0; _i17 < _splitPointList.length; _i17++) {
        var _points3 = _splitPointList[_i17];
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(hexToRgb(eachSeries.color, 0.2));
        context.setLineWidth(2 * opts.pixelRatio);
        if (_points3.length > 1) {
          var firstPoint = _points3[0];
          var lastPoint = _points3[_points3.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          var startPoint = 0;
          if (eachSeries.style === 'curve') {
            for (var j = 0; j < _points3.length; j++) {
              var _item15 = _points3[j];
              if (startPoint == 0 && _item15.x > leftSpace) {
                context.moveTo(_item15.x, _item15.y);
                startPoint = 1;
              }
              if (j > 0 && _item15.x > leftSpace && _item15.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(_points3, j - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item15.x, _item15.y);
              }
            };
          } else {
            for (var _j5 = 0; _j5 < _points3.length; _j5++) {
              var _item16 = _points3[_j5];
              if (startPoint == 0 && _item16.x > leftSpace) {
                context.moveTo(_item16.x, _item16.y);
                startPoint = 1;
              }
              if (_j5 > 0 && _item16.x > leftSpace && _item16.x < rightSpace) {
                context.lineTo(_item16.x, _item16.y);
              }
            };
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var _item17 = _points3[0];
          context.moveTo(_item17.x - eachSpacing / 2, _item17.y);
          context.lineTo(_item17.x + eachSpacing / 2, _item17.y);
          context.lineTo(_item17.x + eachSpacing / 2, endY);
          context.lineTo(_item17.x - eachSpacing / 2, endY);
          context.moveTo(_item17.x - eachSpacing / 2, _item17.y);
        }
        context.closePath();
        context.fill();
      }
    }

    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points);
      splitPointList.forEach(function (points, index) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pixelRatio;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pixelRatio);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          var _startPoint2 = 0;
          if (eachSeries.style == 'curve') {
            for (var _j6 = 0; _j6 < points.length; _j6++) {
              var _item18 = points[_j6];
              if (_startPoint2 == 0 && _item18.x > leftSpace) {
                context.moveTo(_item18.x, _item18.y);
                _startPoint2 = 1;
              }
              if (_j6 > 0 && _item18.x > leftSpace && _item18.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(points, _j6 - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item18.x, _item18.y);
              }
            }
          } else {
            for (var _j7 = 0; _j7 < points.length; _j7++) {
              var _item19 = points[_j7];
              if (_startPoint2 == 0 && _item19.x > leftSpace) {
                context.moveTo(_item19.x, _item19.y);
                _startPoint2 = 1;
              }
              if (_j7 > 0 && _item19.x > leftSpace && _item19.x < rightSpace) {
                context.lineTo(_item19.x, _item19.y);
              }
            }
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      });
    }

    // 绘制点数据图
    if (eachSeries.type == 'point') {
      eachSeries.addPoint = true;
    }

    if (eachSeries.addPoint == true && eachSeries.type !== 'column') {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;

      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();

      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context);
        columnIndex += 1;
      }

    });
  }

  context.restore();

  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' || opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  startX = xAxisData.startX,
  endX = xAxisData.endX,
  eachSpacing = xAxisData.eachSpacing;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var startY = opts.height - opts.area[2];
  var endY = opts.area[0];

  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - opts.area[2] + config.xAxisHeight;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pixelRatio);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
    context.setLineCap('butt');
  }

  context.save();

  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  //绘制X轴刻度线
  if (opts.xAxis.calibration === true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    xAxisPoints.forEach(function (item, index) {
      if (index > 0) {
        context.beginPath();
        context.moveTo(item - eachSpacing / 2, startY);
        context.lineTo(item - eachSpacing / 2, startY + 3 * opts.pixelRatio);
        context.closePath();
        context.stroke();
      }
    });
  }
  //绘制X轴网格
  if (opts.xAxis.disableGrid !== true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pixelRatio);
    if (opts.xAxis.gridType == 'dash') {
      context.setLineDash([opts.xAxis.dashLength, opts.xAxis.dashLength]);
    }
    opts.xAxis.gridEval = opts.xAxis.gridEval || 1;
    xAxisPoints.forEach(function (item, index) {
      if (index % opts.xAxis.gridEval == 0) {
        context.beginPath();
        context.moveTo(item, startY);
        context.lineTo(item, endY);
        context.stroke();
      }
    });
    context.setLineDash([]);
  }


  //绘制X轴文案
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    //默认全部显示X轴标签
    var maxXAxisListLength = categories.length;
    //如果设置了X轴单屏数量
    if (opts.xAxis.labelCount) {
      //如果设置X轴密度
      if (opts.xAxis.itemCount) {
        maxXAxisListLength = Math.ceil(categories.length / opts.xAxis.itemCount * opts.xAxis.labelCount);
      } else {
        maxXAxisListLength = opts.xAxis.labelCount;
      }
      maxXAxisListLength -= 1;
    }

    var ratio = Math.ceil(categories.length / maxXAxisListLength);

    var newCategories = [];
    var cgLength = categories.length;
    for (var i = 0; i < cgLength; i++) {
      if (i % ratio !== 0) {
        newCategories.push("");
      } else {
        newCategories.push(categories[i]);
      }
    }
    newCategories[cgLength - 1] = categories[cgLength - 1];

    var xAxisFontSize = opts.xAxis.fontSize || config.fontSize;
    if (config._xAxisTextAngle_ === 0) {
      newCategories.forEach(function (item, index) {
        var offset = -measureText(String(item), xAxisFontSize) / 2;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var scrollHeight = 0;
        if (opts.xAxis.scrollShow) {
          scrollHeight = 6 * opts.pixelRatio;
        }
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        context.fillText(String(item), xAxisPoints[index] + offset, startY + xAxisFontSize + (config.xAxisHeight - scrollHeight - xAxisFontSize) / 2);
        context.closePath();
        context.stroke();
      });

    } else {
      newCategories.forEach(function (item, index) {
        context.save();
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || '#666666');
        var textWidth = measureText(String(item), xAxisFontSize);
        var offset = -textWidth;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + xAxisFontSize / 2 + 5, opts.height),
        transX = _calRotateTranslate.transX,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(String(item), xAxisPoints[index] + offset, startY + xAxisFontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();

  //绘制X轴轴线
  if (opts.xAxis.axisLine) {
    context.beginPath();
    context.setStrokeStyle(opts.xAxis.axisLineColor);
    context.setLineWidth(1 * opts.pixelRatio);
    context.moveTo(startX, opts.height - opts.area[2]);
    context.lineTo(endX, opts.height - opts.area[2]);
    context.stroke();
  }
}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
  xAxiseachSpacing = opts.chartData.xAxisData.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;

  var points = [];
  for (var i = 0; i < opts.yAxis.splitNumber + 1; i++) {
    points.push(opts.height - opts.area[2] - eachSpacing * i);
  }

  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }

  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength, opts.yAxis.dashLength]);
  }
  context.setStrokeStyle(opts.yAxis.gridColor);
  context.setLineWidth(1 * opts.pixelRatio);
  points.forEach(function (item, index) {
    context.beginPath();
    context.moveTo(startX, item);
    context.lineTo(endX, item);
    context.stroke();
  });
  context.setLineDash([]);

  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var endY = opts.height - opts.area[2];
  var fillEndY = endY + config.xAxisHeight;
  if (opts.xAxis.scrollShow) {
    fillEndY -= 3 * opts.pixelRatio;
  }
  if (opts.xAxis.rotateLabel) {
    fillEndY = opts.height - opts.area[2] + 3;
  }
  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background || '#ffffff');
  if (opts._scrollDistance_ < 0) {
    context.fillRect(0, 0, startX, fillEndY);
  }
  if (opts.enableScroll == true) {
    context.fillRect(endX, 0, opts.width, fillEndY);
  }
  context.closePath();
  context.stroke();

  var points = [];
  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    points.push(opts.area[0] + eachSpacing * i);
  }

  var tStartLeft = opts.area[3];
  var tStartRight = opts.width - opts.area[1];var _loop4 = function _loop4(

  _i18) {
    var yData = opts.yAxis.data[_i18];
    if (yData.disabled !== true) {
      var rangesFormat = opts.chartData.yAxisData.rangesFormat[_i18];
      var yAxisFontSize = yData.fontSize || config.fontSize;
      var yAxisWidth = opts.chartData.yAxisData.yAxisWidth[_i18];
      //画Y轴刻度及文案
      rangesFormat.forEach(function (item, index) {
        var pos = points[index] ? points[index] : endY;
        context.beginPath();
        context.setFontSize(yAxisFontSize);
        context.setLineWidth(1 * opts.pixelRatio);
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setFillStyle(yData.fontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(String(item), tStartLeft - yAxisWidth.width, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartLeft, pos);
            context.lineTo(tStartLeft - 3 * opts.pixelRatio, pos);
          }
        } else {
          context.fillText(String(item), tStartRight + 4 * opts.pixelRatio, pos + yAxisFontSize / 2);
          //画刻度线
          if (yData.calibration == true) {
            context.moveTo(tStartRight, pos);
            context.lineTo(tStartRight + 3 * opts.pixelRatio, pos);
          }
        }
        context.closePath();
        context.stroke();
      });
      //画Y轴轴线
      if (yData.axisLine !== false) {
        context.beginPath();
        context.setStrokeStyle(yData.axisLineColor || '#cccccc');
        context.setLineWidth(1 * opts.pixelRatio);
        if (yAxisWidth.position == 'left') {
          context.moveTo(tStartLeft, opts.height - opts.area[2]);
          context.lineTo(tStartLeft, opts.area[0]);
        } else {
          context.moveTo(tStartRight, opts.height - opts.area[2]);
          context.lineTo(tStartRight, opts.area[0]);
        }
        context.stroke();
      }

      //画Y轴标题
      if (opts.yAxis.showTitle) {

        var titleFontSize = yData.titleFontSize || config.fontSize;
        var title = yData.title;
        context.beginPath();
        context.setFontSize(titleFontSize);
        context.setFillStyle(yData.titleFontColor || '#666666');
        if (yAxisWidth.position == 'left') {
          context.fillText(title, tStartLeft - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        } else {
          context.fillText(title, tStartRight - measureText(title, titleFontSize) / 2, opts.area[0] - 10 * opts.pixelRatio);
        }
        context.closePath();
        context.stroke();
      }
      if (yAxisWidth.position == 'left') {
        tStartLeft -= yAxisWidth.width + opts.yAxis.padding;
      } else {
        tStartRight += yAxisWidth.width + opts.yAxis.padding;
      }
    }};for (var _i18 = 0; _i18 < opts.yAxis.data.length; _i18++) {_loop4(_i18);
  }
}

function drawLegend(series, opts, config, context, chartData) {
  if (opts.legend.show === false) {
    return;
  }
  var legendData = chartData.legendData;
  var legendList = legendData.points;
  var legendArea = legendData.area;
  var padding = opts.legend.padding;
  var fontSize = opts.legend.fontSize;
  var shapeWidth = 15 * opts.pixelRatio;
  var shapeRight = 5 * opts.pixelRatio;
  var itemGap = opts.legend.itemGap;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pixelRatio, fontSize);

  //画背景及边框
  context.beginPath();
  context.setLineWidth(opts.legend.borderWidth);
  context.setStrokeStyle(opts.legend.borderColor);
  context.setFillStyle(opts.legend.backgroundColor);
  context.moveTo(legendArea.start.x, legendArea.start.y);
  context.rect(legendArea.start.x, legendArea.start.y, legendArea.width, legendArea.height);
  context.closePath();
  context.fill();
  context.stroke();

  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    var height = 0;
    width = legendData.widthArr[listIndex];
    height = legendData.heightArr[listIndex];
    var startX = 0;
    var startY = 0;
    if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
      startX = legendArea.start.x + (legendArea.width - width) / 2;
      startY = legendArea.start.y + padding + listIndex * lineHeight;
    } else {
      if (listIndex == 0) {
        width = 0;
      } else {
        width = legendData.widthArr[listIndex - 1];
      }
      startX = legendArea.start.x + padding + width;
      startY = legendArea.start.y + padding + (legendArea.height - height) / 2;
    }

    context.setFontSize(config.fontSize);
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      item.area = [0, 0, 0, 0];
      item.area[0] = startX;
      item.area[1] = startY;
      item.area[3] = startY + lineHeight;
      context.beginPath();
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.show ? item.color : opts.legend.hiddenColor);
      context.setFillStyle(item.show ? item.color : opts.legend.hiddenColor);
      switch (item.legendShape) {
        case 'line':
          context.moveTo(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 2 * opts.pixelRatio, 15 * opts.pixelRatio, 4 * opts.pixelRatio);
          break;
        case 'triangle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'diamond':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.lineTo(startX + 2.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight + 5 * opts.pixelRatio);
          context.lineTo(startX + 12.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          break;
        case 'circle':
          context.moveTo(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight);
          context.arc(startX + 7.5 * opts.pixelRatio, startY + 0.5 * lineHeight, 5 * opts.pixelRatio, 0, 2 * Math.PI);
          break;
        case 'rect':
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);
          break;
        default:
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pixelRatio, 15 * opts.pixelRatio, 10 * opts.pixelRatio);}

      context.closePath();
      context.fill();
      context.stroke();

      startX += shapeWidth + shapeRight;
      var fontTrans = 0.5 * lineHeight + 0.5 * fontSize - 2;
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.show ? opts.legend.fontColor : opts.legend.hiddenColor);
      context.fillText(item.name, startX, startY + fontTrans);
      context.closePath();
      context.stroke();
      if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
        startX += measureText(item.name, fontSize) + itemGap;
        item.area[2] = startX;
      } else {
        item.area[2] = startX + measureText(item.name, fontSize) + itemGap;;
        startX -= shapeWidth + shapeRight;
        startY += lineHeight;
      }
    }
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var pieOption = assign({}, {
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    ringWidth: 0,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.pie);
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = pieOption.activeRadius;
  }

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);

  series = getPieDataPoints(series, radius, process);

  var activeRadius = pieOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += pieOption.offsetAngle * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, opts.extra.pie.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_ + activeRadius, eachSeries._start_,
        eachSeries._start_ + 2 *
        eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(pieOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(pieOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (pieOption.border == true) {
      context.stroke();
    }
  });

  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof opts.extra.pie.ringWidth === 'number' && opts.extra.pie.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - opts.extra.pie.ringWidth);
    }
    context.beginPath();
    context.setFillStyle(opts.background || '#ffffff');
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawRoseDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var roseOption = assign({}, {
    type: 'area',
    activeOpacity: 0.5,
    activeRadius: 10 * opts.pixelRatio,
    offsetAngle: 0,
    labelWidth: 15 * opts.pixelRatio,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF' },
  opts.extra.rose);
  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = roseOption.activeRadius;
  }
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);
  var minRadius = roseOption.minRadius || radius * 0.5;

  series = getRoseDataPoints(series, roseOption.type, minRadius, radius, process);

  var activeRadius = roseOption.activeRadius;

  series = series.map(function (eachSeries) {
    eachSeries._start_ += (roseOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });

  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, roseOption.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius + eachSeries._radius_, eachSeries._start_,
        eachSeries._start_ + 2 * eachSeries._rose_proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(roseOption.borderWidth * opts.pixelRatio);
    context.lineJoin = "round";
    context.setStrokeStyle(roseOption.borderColor);
    context.setFillStyle(eachSeries.color);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 *
    eachSeries._rose_proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (roseOption.border == true) {
      context.stroke();
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }

    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var arcbarOption = assign({}, {
    startAngle: 0.75,
    endAngle: 0.25,
    type: 'default',
    width: 12 * opts.pixelRatio,
    gap: 2 * opts.pixelRatio },
  opts.extra.arcbar);

  series = getArcbarDataPoints(series, arcbarOption, process);

  var centerPosition;
  if (arcbarOption.center) {
    centerPosition = arcbarOption.center;
  } else {
    centerPosition = {
      x: opts.width / 2,
      y: opts.height / 2 };

  }

  var radius;
  if (arcbarOption.radius) {
    radius = arcbarOption.radius;
  } else {
    radius = Math.min(centerPosition.x, centerPosition.y);
    radius -= 5 * opts.pixelRatio;
    radius -= arcbarOption.width / 2;
  }

  for (var i = 0; i < series.length; i++) {
    var eachSeries = series[i];
    //背景颜色
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9');
    context.setLineCap('round');
    context.beginPath();
    if (arcbarOption.type == 'default') {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle * Math.PI, false);
    } else {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, 0, 2 * Math.PI, false);
    }
    context.stroke();
    //进度条
    context.setLineWidth(arcbarOption.width);
    context.setStrokeStyle(eachSeries.color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width + arcbarOption.gap) * i, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ * Math.PI, false);
    context.stroke();
  }

  drawRingTitle(opts, config, context, centerPosition);

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = assign({}, {
    type: 'default',
    startAngle: 0.75,
    endAngle: 0.25,
    width: 15,
    splitLine: {
      fixRadius: 0,
      splitNumber: 10,
      width: 15,
      color: '#FFFFFF',
      childNumber: 5,
      childWidth: 5 },

    pointer: {
      width: 15,
      color: 'auto' } },

  opts.extra.gauge);

  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);

  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pixelRatio;
  radius -= gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;
  var totalAngle = 0;

  //判断仪表盘的样式：default百度样式，progress新样式
  if (gaugeOption.type == 'progress') {

    //## 第一步画中心圆形背景和进度条背景
    //中心圆形背景
    var pieRadius = radius - gaugeOption.width * 3;
    context.beginPath();
    var gradient = context.createLinearGradient(centerPosition.x, centerPosition.y - pieRadius, centerPosition.x, centerPosition.y + pieRadius);
    //配置渐变填充（起点：中心点向上减半径；结束点中心点向下加半径）
    gradient.addColorStop('0', hexToRgb(series[0].color, 0.3));
    gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
    context.setFillStyle(gradient);
    context.arc(centerPosition.x, centerPosition.y, pieRadius, 0, 2 * Math.PI, false);
    context.fill();
    //画进度条背景
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, gaugeOption.endAngle * Math.PI, false);
    context.stroke();

    //## 第二步画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var endX = -radius - gaugeOption.width - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);
    var len = gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1;
    var proc = series[0].data * process;
    for (var i = 0; i < len; i++) {
      context.beginPath();
      //刻度线随进度变色
      if (proc > i / len) {
        context.setStrokeStyle(hexToRgb(series[0].color, 1));
      } else {
        context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
      }
      context.setLineWidth(3 * opts.pixelRatio);
      context.moveTo(startX, 0);
      context.lineTo(endX, 0);
      context.stroke();
      context.rotate(childAngle * Math.PI);
    }
    context.restore();

    //## 第三步画进度条
    series = getArcbarDataPoints(series, gaugeOption, process);
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(series[0].color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, series[0]._proportion_ * Math.PI, false);
    context.stroke();

    //## 第四步画指针
    var pointerRadius = radius - gaugeOption.width * 2.5;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((series[0]._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setLineWidth(gaugeOption.width / 3);
    var gradient3 = context.createLinearGradient(0, -pointerRadius * 0.6, 0, pointerRadius * 0.6);
    gradient3.addColorStop('0', hexToRgb('#FFFFFF', 0));
    gradient3.addColorStop('0.5', hexToRgb(series[0].color, 1));
    gradient3.addColorStop('1.0', hexToRgb('#FFFFFF', 0));
    context.setStrokeStyle(gradient3);
    context.arc(0, 0, pointerRadius, 0.85 * Math.PI, 1.15 * Math.PI, false);
    context.stroke();
    context.beginPath();
    context.setLineWidth(1);
    context.setStrokeStyle(series[0].color);
    context.setFillStyle(series[0].color);
    context.moveTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2 - 4, 0);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, 4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.stroke();
    context.fill();
    context.restore();

    //default百度样式
  } else {
    //画背景
    context.setLineWidth(gaugeOption.width);
    context.setLineCap('butt');
    for (var _i19 = 0; _i19 < categories.length; _i19++) {
      var eachCategories = categories[_i19];
      context.beginPath();
      context.setStrokeStyle(eachCategories.color);
      context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ * Math.PI, false);
      context.stroke();
    }
    context.save();

    //画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var _splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var _childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var _startX2 = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var _endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;

    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i20 = 0; _i20 < gaugeOption.splitLine.splitNumber + 1; _i20++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(2 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(_endX, 0);
      context.stroke();
      context.rotate(_splitAngle * Math.PI);
    }
    context.restore();

    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);

    for (var _i21 = 0; _i21 < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i21++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(1 * opts.pixelRatio);
      context.moveTo(_startX2, 0);
      context.lineTo(childendX, 0);
      context.stroke();
      context.rotate(_childAngle * Math.PI);
    }
    context.restore();

    //画指针
    series = getGaugeDataPoints(series, categories, gaugeOption, process);

    for (var _i22 = 0; _i22 < series.length; _i22++) {
      var eachSeries = series[_i22];
      context.save();
      context.translate(centerPosition.x, centerPosition.y);
      context.rotate((eachSeries._proportion_ - 1) * Math.PI);
      context.beginPath();
      context.setFillStyle(eachSeries.color);
      context.moveTo(gaugeOption.pointer.width, 0);
      context.lineTo(0, -gaugeOption.pointer.width / 2);
      context.lineTo(-innerRadius, 0);
      context.lineTo(0, gaugeOption.pointer.width / 2);
      context.lineTo(gaugeOption.pointer.width, 0);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFillStyle('#FFFFFF');
      context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
      context.fill();
      context.restore();
    }

    if (opts.dataLabel !== false) {
      drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
    }
  }

  //画仪表盘标题，副标题
  drawRingTitle(opts, config, context, centerPosition);

  if (process === 1 && opts.type === 'gauge') {
    opts.extra.gauge.oldAngle = series[0]._proportion_;
    opts.extra.gauge.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var radarOption = assign({}, {
    gridColor: '#cccccc',
    labelColor: '#666666',
    opacity: 0.2,
    gridCount: 3 },
  opts.extra.radar);

  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);

  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };


  var radius = Math.min(centerPosition.x - (getMaxTextListLength(opts.categories) + config.radarLabelTextMargin),
  centerPosition.y - config.radarLabelTextMargin);
  //TODO逻辑不对
  radius -= opts.padding[1];

  // draw grid
  context.beginPath();
  context.setLineWidth(1 * opts.pixelRatio);
  context.setStrokeStyle(radarOption.gridColor);
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();
  // draw split line grid

  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pixelRatio);
    context.setStrokeStyle(radarOption.gridColor);
    coordinateAngle.forEach(function (angle, index) {
      var pos = convertCoordinateOrigin(radius / radarOption.gridCount * i * Math.cos(angle), radius / radarOption.gridCount * i * Math.sin(angle), centerPosition);
      if (index === 0) {
        startPos = pos;
        context.moveTo(pos.x, pos.y);
      } else {
        context.lineTo(pos.x, pos.y);
      }
    });
    context.lineTo(startPos.x, startPos.y);
    context.stroke();
    context.closePath();
  };

  for (var i = 1; i <= radarOption.gridCount; i++) {
    _loop(i);
  }

  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);

  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setFillStyle(hexToRgb(eachSeries.color, radarOption.opacity));
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();

    if (opts.dataPointShape !== false) {
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function normalInt(min, max, iter) {
  iter = iter == 0 ? 1 : iter;
  var arr = [];
  for (var i = 0; i < iter; i++) {
    arr[i] = Math.random();
  };
  return Math.floor(arr.reduce(function (i, j) {return i + j;}) / iter * (max - min)) + min;
};

function collisionNew(area, points, width, height) {
  var isIn = false;
  for (var i = 0; i < points.length; i++) {
    if (points[i].area) {
      if (area[3] < points[i].area[1] || area[0] > points[i].area[2] || area[1] > points[i].area[3] || area[2] < points[i].area[0]) {
        if (area[0] < 0 || area[1] < 0 || area[2] > width || area[3] > height) {
          isIn = true;
          break;
        } else {
          isIn = false;
        }
      } else {
        isIn = true;
        break;
      }
    }
  }
  return isIn;
};

function getBoundingBox(data) {
  var bounds = {},coords;
  bounds.xMin = 180;
  bounds.xMax = 0;
  bounds.yMin = 90;
  bounds.yMax = 0;
  for (var i = 0; i < data.length; i++) {
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        var longitude = coords[j][0];
        var latitude = coords[j][1];
        var point = {
          x: longitude,
          y: latitude };

        bounds.xMin = bounds.xMin < point.x ? bounds.xMin : point.x;
        bounds.xMax = bounds.xMax > point.x ? bounds.xMax : point.x;
        bounds.yMin = bounds.yMin < point.y ? bounds.yMin : point.y;
        bounds.yMax = bounds.yMax > point.y ? bounds.yMax : point.y;
      }
    }
  }
  return bounds;
}

function coordinateToPoint(latitude, longitude, bounds, scale, xoffset, yoffset) {
  return {
    x: (longitude - bounds.xMin) * scale + xoffset,
    y: (bounds.yMax - latitude) * scale + yoffset };

}

function pointToCoordinate(pointY, pointX, bounds, scale, xoffset, yoffset) {
  return {
    x: (pointX - xoffset) / scale + bounds.xMin,
    y: bounds.yMax - (pointY - yoffset) / scale };

}

function isRayIntersectsSegment(poi, s_poi, e_poi) {
  if (s_poi[1] == e_poi[1]) {return false;}
  if (s_poi[1] > poi[1] && e_poi[1] > poi[1]) {return false;}
  if (s_poi[1] < poi[1] && e_poi[1] < poi[1]) {return false;}
  if (s_poi[1] == poi[1] && e_poi[1] > poi[1]) {return false;}
  if (e_poi[1] == poi[1] && s_poi[1] > poi[1]) {return false;}
  if (s_poi[0] < poi[0] && e_poi[1] < poi[1]) {return false;}
  var xseg = e_poi[0] - (e_poi[0] - s_poi[0]) * (e_poi[1] - poi[1]) / (e_poi[1] - s_poi[1]);
  if (xseg < poi[0]) {
    return false;
  } else {
    return true;
  }
}

function isPoiWithinPoly(poi, poly) {
  var sinsc = 0;
  for (var i = 0; i < poly.length; i++) {
    var epoly = poly[i][0];
    if (poly.length == 1) {
      epoly = poly[i][0];
    }
    for (var j = 0; j < epoly.length - 1; j++) {
      var s_poi = epoly[j];
      var e_poi = epoly[j + 1];
      if (isRayIntersectsSegment(poi, s_poi, e_poi)) {
        sinsc += 1;
      }
    }
  }

  if (sinsc % 2 == 1) {
    return true;
  } else {
    return false;
  }
}


function drawMapDataPoints(series, opts, config, context) {
  var mapOption = assign({}, {
    border: true,
    borderWidth: 1,
    borderColor: '#666666',
    fillOpacity: 0.6,
    activeBorderColor: '#f04864',
    activeFillColor: '#facc14',
    activeFillOpacity: 1 },
  opts.extra.map);
  var coords, point;
  var data = series;
  var bounds = getBoundingBox(data);
  var xScale = opts.width / Math.abs(bounds.xMax - bounds.xMin);
  var yScale = opts.height / Math.abs(bounds.yMax - bounds.yMin);
  var scale = xScale < yScale ? xScale : yScale;
  var xoffset = opts.width / 2 - Math.abs(bounds.xMax - bounds.xMin) / 2 * scale;
  var yoffset = opts.height / 2 - Math.abs(bounds.yMax - bounds.yMin) / 2 * scale;
  context.beginPath();
  context.clearRect(0, 0, opts.width, opts.height);
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  for (var i = 0; i < data.length; i++) {
    context.beginPath();
    context.setLineWidth(mapOption.borderWidth * opts.pixelRatio);
    context.setStrokeStyle(mapOption.borderColor);
    context.setFillStyle(hexToRgb(series[i].color, mapOption.fillOpacity));
    if (opts.tooltip) {
      if (opts.tooltip.index == i) {
        context.setStrokeStyle(mapOption.activeBorderColor);
        context.setFillStyle(hexToRgb(mapOption.activeFillColor, mapOption.activeFillOpacity));
      }
    }
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        point = coordinateToPoint(coords[j][1], coords[j][0], bounds, scale, xoffset, yoffset);
        if (j === 0) {
          context.beginPath();
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.fill();
      if (mapOption.border == true) {
        context.stroke();
      }
    }
    if (opts.dataLabel == true) {
      var centerPoint = data[i].properties.centroid;
      if (centerPoint) {
        point = coordinateToPoint(centerPoint[1], centerPoint[0], bounds, scale, xoffset, yoffset);
        var fontSize = data[i].textSize || config.fontSize;
        var text = data[i].properties.name;
        context.beginPath();
        context.setFontSize(fontSize);
        context.setFillStyle(data[i].textColor || '#666666');
        context.fillText(text, point.x - measureText(text, fontSize) / 2, point.y + fontSize / 2);
        context.closePath();
        context.stroke();
      }
    }
  }
  opts.chartData.mapData = {
    bounds: bounds,
    scale: scale,
    xoffset: xoffset,
    yoffset: yoffset };

  drawToolTipBridge(opts, config, context, 1);
  context.draw();
}

function getWordCloudPoint(opts, type) {
  var points = opts.series.sort(function (a, b) {return parseInt(b.textSize) - parseInt(a.textSize);});
  switch (type) {
    case 'normal':
      for (var i = 0; i < points.length; i++) {
        var text = points[i].name;
        var tHeight = points[i].textSize;
        var tWidth = measureText(text, tHeight);
        var x = void 0,y = void 0;
        var area = void 0;
        var breaknum = 0;
        while (true) {
          breaknum++;
          x = normalInt(-opts.width / 2, opts.width / 2, 5) - tWidth / 2;
          y = normalInt(-opts.height / 2, opts.height / 2, 5) + tHeight / 2;
          area = [x - 5 + opts.width / 2, y - 5 - tHeight + opts.height / 2, x + tWidth + 5 + opts.width / 2, y + 5 + opts.height / 2];
          var isCollision = collisionNew(area, points, opts.width, opts.height);
          if (!isCollision) break;
          if (breaknum == 1000) {
            area = [-100, -100, -100, -100];
            break;
          }
        };
        points[i].area = area;
      }
      break;
    case 'vertical':var
      Spin = function Spin() {
        //获取均匀随机值，是否旋转，旋转的概率为（1-0.5）
        if (Math.random() > 0.7) {
          return true;
        } else {return false;};
      };;
      for (var _i23 = 0; _i23 < points.length; _i23++) {
        var _text = points[_i23].name;
        var _tHeight = points[_i23].textSize;
        var _tWidth = measureText(_text, _tHeight);
        var isSpin = Spin();
        var _x = void 0,_y = void 0,_area = void 0,areav = void 0;
        var _breaknum = 0;
        while (true) {
          _breaknum++;
          var _isCollision = void 0;
          if (isSpin) {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_y - 5 - _tWidth + opts.width / 2, -_x - 5 + opts.height / 2, _y + 5 + opts.width / 2, -_x + _tHeight + 5 + opts.height / 2];
            areav = [opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) - 5, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) - 5, opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) + _tHeight, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) + _tWidth + 5];
            _isCollision = collisionNew(areav, points, opts.height, opts.width);
          } else {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_x - 5 + opts.width / 2, _y - 5 - _tHeight + opts.height / 2, _x + _tWidth + 5 + opts.width / 2, _y + 5 + opts.height / 2];
            _isCollision = collisionNew(_area, points, opts.width, opts.height);
          }
          if (!_isCollision) break;
          if (_breaknum == 1000) {
            _area = [-1000, -1000, -1000, -1000];
            break;
          }
        };
        if (isSpin) {
          points[_i23].area = areav;
          points[_i23].areav = _area;
        } else {
          points[_i23].area = _area;
        }
        points[_i23].rotate = isSpin;
      };
      break;}

  return points;
}


function drawWordCloudDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var wordOption = assign({}, {
    type: 'normal',
    autoColors: true },
  opts.extra.word);

  context.beginPath();
  context.setFillStyle(opts.background || '#FFFFFF');
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  context.save();
  var points = opts.chartData.wordCloudData;
  context.translate(opts.width / 2, opts.height / 2);

  for (var i = 0; i < points.length; i++) {
    context.save();
    if (points[i].rotate) {
      context.rotate(90 * Math.PI / 180);
    }
    var text = points[i].name;
    var tHeight = points[i].textSize;
    var tWidth = measureText(text, tHeight);
    context.beginPath();
    context.setStrokeStyle(points[i].color);
    context.setFillStyle(points[i].color);
    context.setFontSize(tHeight);
    if (points[i].rotate) {
      if (points[i].areav[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
        }
      }
    } else {
      if (points[i].area[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
        }

      }
    }

    context.stroke();
    context.restore();
  }
  context.restore();
}

function drawFunnelDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var funnelOption = assign({}, {
    activeWidth: 10,
    activeOpacity: 0.3,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fillOpacity: 1,
    labelAlign: 'right' },
  opts.extra.funnel);
  var eachSpacing = (opts.height - opts.area[0] - opts.area[2]) / series.length;
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.height - opts.area[2] };

  var activeWidth = funnelOption.activeWidth;
  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - activeWidth, (opts.height - opts.area[0] - opts.area[2]) / 2 - activeWidth);
  series = getFunnelDataPoints(series, radius, process);
  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  for (var i = 0; i < series.length; i++) {
    if (i == 0) {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(-activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(activeWidth, 0);
          context.lineTo(-activeWidth, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing, centerPosition.x + series[i].radius, centerPosition.y];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    } else {
      if (opts.tooltip) {
        if (opts.tooltip.index == i) {
          context.beginPath();
          context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
          context.moveTo(0, 0);
          context.lineTo(-series[i - 1].radius - activeWidth, 0);
          context.lineTo(-series[i].radius - activeWidth, -eachSpacing);
          context.lineTo(series[i].radius + activeWidth, -eachSpacing);
          context.lineTo(series[i - 1].radius + activeWidth, 0);
          context.lineTo(0, 0);
          context.closePath();
          context.fill();
        }
      }
      series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing * (i + 1), centerPosition.x + series[i].radius, centerPosition.y - eachSpacing * i];
      context.beginPath();
      context.setLineWidth(funnelOption.borderWidth * opts.pixelRatio);
      context.setStrokeStyle(funnelOption.borderColor);
      context.setFillStyle(hexToRgb(series[i].color, funnelOption.fillOpacity));
      context.moveTo(0, 0);
      context.lineTo(-series[i - 1].radius, 0);
      context.lineTo(-series[i].radius, -eachSpacing);
      context.lineTo(series[i].radius, -eachSpacing);
      context.lineTo(series[i - 1].radius, 0);
      context.lineTo(0, 0);
      context.closePath();
      context.fill();
      if (funnelOption.border == true) {
        context.stroke();
      }
    }
    context.translate(0, -eachSpacing);
  }
  context.restore();

  if (opts.dataLabel !== false && process === 1) {
    drawFunnelText(series, opts, context, eachSpacing, funnelOption.labelAlign, activeWidth, centerPosition);
  }

  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawFunnelText(series, opts, context, eachSpacing, labelAlign, activeWidth, centerPosition) {
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var startX = void 0,endX = void 0,startY = void 0,fontSize = void 0;
    var text = item.format ? item.format(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    if (labelAlign == 'right') {
      if (i == 0) {
        startX = (item.funnelArea[2] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[2] + series[i - 1].funnelArea[2]) / 2;
      }
      endX = startX + activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX + 5, startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    } else {
      if (i == 0) {
        startX = (item.funnelArea[0] + centerPosition.x) / 2;
      } else {
        startX = (item.funnelArea[0] + series[i - 1].funnelArea[0]) / 2;
      }
      endX = startX - activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize || opts.fontSize;
      context.setLineWidth(1 * opts.pixelRatio);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || '#666666');
      context.fillText(text, endX - 5 - measureText(text), startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    }

  }
}


function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },
  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },
  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },
  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'linear';
  var delay = 17;

  function createAnimationFrame() {
    if (typeof setTimeout !== 'undefined') {
      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else {
      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;
  var _step = function step(timestamp) {
    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);

      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

// stop animation immediately
// and tigger onAnimationFinish
Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;
  var series = opts.series;
  var categories = opts.categories;
  series = fillSeries(series, opts, config);
  var duration = opts.animation ? opts.duration : 0;
  _this.animationInstance && _this.animationInstance.stop();
  var seriesMA = null;
  if (type == 'candle') {
    var average = assign({}, opts.extra.candle.average);
    if (average.show) {
      seriesMA = calCandleMA(average.day, average.name, average.color, series[0].data);
      seriesMA = fillSeries(seriesMA, opts, config);
      opts.seriesMA = seriesMA;
    } else if (opts.seriesMA) {
      seriesMA = opts.seriesMA = fillSeries(opts.seriesMA, opts, config);
    } else {
      seriesMA = series;
    }
  } else {
    seriesMA = series;
  }

  /* 过滤掉show=false的series */
  opts._series_ = series = filterSeries(series);

  //重新计算图表区域

  opts.area = new Array(4);
  //复位绘图区域
  for (var j = 0; j < 4; j++) {
    opts.area[j] = opts.padding[j];
  }

  //通过计算三大区域：图例、X轴、Y轴的大小，确定绘图区域
  var _calLegendData = calLegendData(seriesMA, opts, config, opts.chartData),
  legendHeight = _calLegendData.area.wholeHeight,
  legendWidth = _calLegendData.area.wholeWidth;

  switch (opts.legend.position) {
    case 'top':
      opts.area[0] += legendHeight;
      break;
    case 'bottom':
      opts.area[2] += legendHeight;
      break;
    case 'left':
      opts.area[3] += legendWidth;
      break;
    case 'right':
      opts.area[1] += legendWidth;
      break;}


  var _calYAxisData = {},yAxisWidth = 0;
  if (opts.type === 'line' || opts.type === 'column' || opts.type === 'area' || opts.type === 'mix' || opts.type === 'candle') {
    _calYAxisData = calYAxisData(series, opts, config);
    yAxisWidth = _calYAxisData.yAxisWidth;
    //如果显示Y轴标题
    if (opts.yAxis.showTitle) {
      var maxTitleHeight = 0;
      for (var i = 0; i < opts.yAxis.data.length; i++) {
        maxTitleHeight = Math.max(maxTitleHeight, opts.yAxis.data[i].titleFontSize ? opts.yAxis.data[i].titleFontSize : config.fontSize);
      }
      opts.area[0] += (maxTitleHeight + 6) * opts.pixelRatio;
    }
    var rightIndex = 0,leftIndex = 0;
    //计算主绘图区域左右位置
    for (var _i24 = 0; _i24 < yAxisWidth.length; _i24++) {
      if (yAxisWidth[_i24].position == 'left') {
        if (leftIndex > 0) {
          opts.area[3] += yAxisWidth[_i24].width + opts.yAxis.padding;
        } else {
          opts.area[3] += yAxisWidth[_i24].width;
        }
        leftIndex += 1;
      } else {
        if (rightIndex > 0) {
          opts.area[1] += yAxisWidth[_i24].width + opts.yAxis.padding;
        } else {
          opts.area[1] += yAxisWidth[_i24].width;
        }
        rightIndex += 1;
      }
    }
  } else {
    config.yAxisWidth = yAxisWidth;
  }
  opts.chartData.yAxisData = _calYAxisData;

  if (opts.categories && opts.categories.length) {
    opts.chartData.xAxisData = getXAxisPoints(opts.categories, opts, config);
    var _calCategoriesData = calCategoriesData(opts.categories, opts, config, opts.chartData.xAxisData.eachSpacing),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;
    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
    opts.area[2] += xAxisHeight;
    opts.chartData.categoriesData = _calCategoriesData;
  } else {
    if (opts.type === 'line' || opts.type === 'area' || opts.type === 'points') {
      opts.chartData.xAxisData = calXAxisData(series, opts, config);
      categories = opts.chartData.xAxisData.rangesFormat;
      var _calCategoriesData2 = calCategoriesData(categories, opts, config, opts.chartData.xAxisData.eachSpacing),
      _xAxisHeight = _calCategoriesData2.xAxisHeight,
      _angle = _calCategoriesData2.angle;
      config.xAxisHeight = _xAxisHeight;
      config._xAxisTextAngle_ = _angle;
      opts.area[2] += _xAxisHeight;
      opts.chartData.categoriesData = _calCategoriesData2;
    } else {
      opts.chartData.xAxisData = {
        xAxisPoints: [] };

    }
  }
  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right' && opts._scrollDistance_ === undefined) {
    var offsetLeft = 0,
    xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
    startX = opts.chartData.xAxisData.startX,
    endX = opts.chartData.xAxisData.endX,
    eachSpacing = opts.chartData.xAxisData.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    _this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0,
      lastMoveTime: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  if (type === 'pie' || type === 'ring' || type === 'rose') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(seriesMA);
  }

  switch (type) {
    case 'word':
      var wordOption = assign({}, {
        type: 'normal',
        autoColors: true },
      opts.extra.word);
      if (opts.updateData == true || opts.updateData == undefined) {
        opts.chartData.wordCloudData = getWordCloudPoint(opts, wordOption.type);
      }
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawWordCloudDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'map':
      context.clearRect(0, 0, opts.width, opts.height);
      drawMapDataPoints(series, opts, config, context);
      break;
    case 'funnel':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.funnelData = drawFunnelDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'line':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);

        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'rose':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawRoseDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: 'easeInOut',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: 'easeIn',
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, seriesMA, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          if (seriesMA) {
            drawLegend(seriesMA, opts, config, context, opts.chartData);
          } else {
            drawLegend(opts.series, opts, config, context, opts.chartData);
          }
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.event.trigger('renderComplete');
        } });

      break;}

}

// simple event implement

function Event() {
  this.events = {};
}

Event.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Event.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        console.error(e);
      }
    });
  }
};

var Charts = function Charts(opts) {
  opts.pixelRatio = opts.pixelRatio ? opts.pixelRatio : 1;
  opts.fontSize = opts.fontSize ? opts.fontSize * opts.pixelRatio : 13 * opts.pixelRatio;
  opts.title = assign({}, opts.title);
  opts.subtitle = assign({}, opts.subtitle);
  opts.duration = opts.duration ? opts.duration : 1000;
  opts.yAxis = assign({}, {
    data: [],
    showTitle: false,
    disabled: false,
    disableGrid: false,
    splitNumber: 5,
    gridType: 'solid',
    dashLength: 4 * opts.pixelRatio,
    gridColor: '#cccccc',
    padding: 10,
    fontColor: '#666666' },
  opts.yAxis);
  opts.yAxis.dashLength *= opts.pixelRatio;
  opts.yAxis.padding *= opts.pixelRatio;
  opts.xAxis = assign({}, {
    rotateLabel: false,
    type: 'calibration',
    gridType: 'solid',
    dashLength: 4,
    scrollAlign: 'left',
    boundaryGap: 'center',
    axisLine: true,
    axisLineColor: '#cccccc' },
  opts.xAxis);
  opts.xAxis.dashLength *= opts.pixelRatio;
  opts.legend = assign({}, {
    show: true,
    position: 'bottom',
    float: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    padding: 5,
    margin: 5,
    itemGap: 10,
    fontSize: opts.fontSize,
    lineHeight: opts.fontSize,
    fontColor: '#333333',
    format: {},
    hiddenColor: '#CECECE' },
  opts.legend);
  opts.legend.borderWidth = opts.legend.borderWidth * opts.pixelRatio;
  opts.legend.itemGap = opts.legend.itemGap * opts.pixelRatio;
  opts.legend.padding = opts.legend.padding * opts.pixelRatio;
  opts.legend.margin = opts.legend.margin * opts.pixelRatio;
  opts.extra = assign({}, opts.extra);
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation ? true : false;
  opts.rotate = opts.rotate ? true : false;

  var config$$1 = JSON.parse(JSON.stringify(config));
  config$$1.colors = opts.colors ? opts.colors : config$$1.colors;
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie' || opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  if (opts.type == 'rose') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.rose.labelWidth * opts.pixelRatio || config$$1.pieChartLinePadding * opts.pixelRatio;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pixelRatio;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;

  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配高分屏
  opts.padding = opts.padding ? opts.padding : config$$1.padding;
  for (var i = 0; i < 4; i++) {
    opts.padding[i] *= opts.pixelRatio;
  }
  config$$1.yAxisWidth = config.yAxisWidth * opts.pixelRatio;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pixelRatio;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 6 * opts.pixelRatio;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pixelRatio;
  config$$1.fontSize = opts.fontSize;
  config$$1.titleFontSize = config.titleFontSize * opts.pixelRatio;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pixelRatio;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pixelRatio;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pixelRatio;
  config$$1.columePadding = config.columePadding * opts.pixelRatio;
  opts.$this = opts.$this ? opts.$this : this;

  this.context = uni.createCanvasContext(opts.canvasId, opts.$this);
  /* 兼容原生H5
                                                                     this.context = document.getElementById(opts.canvasId).getContext("2d");
                                                                     this.context.setStrokeStyle = function(e){ return this.strokeStyle=e; }
                                                                     this.context.setLineWidth = function(e){ return this.lineWidth=e; }
                                                                     this.context.setLineCap = function(e){ return this.lineCap=e; }
                                                                     this.context.setFontSize = function(e){ return this.font=e+"px sans-serif"; }
                                                                     this.context.setFillStyle = function(e){ return this.fillStyle=e; }
                                                                     this.context.draw = function(){ }
                                                                     */

  opts.chartData = {};
  this.event = new Event();
  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0,
    lastMoveTime: 0 };


  this.opts = opts;
  this.config = config$$1;

  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

Charts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts = assign({}, this.opts, data);
  this.opts.updateData = true;
  var scrollPosition = data.scrollPosition || 'current';
  switch (scrollPosition) {
    case 'current':
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      break;
    case 'left':
      this.opts._scrollDistance_ = 0;
      this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0,
        lastMoveTime: 0 };

      break;
    case 'right':
      var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
      yAxisWidth = _calYAxisData.yAxisWidth;
      this.config.yAxisWidth = yAxisWidth;
      var offsetLeft = 0;
      var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
      xAxisPoints = _getXAxisPoints0.xAxisPoints,
      startX = _getXAxisPoints0.startX,
      endX = _getXAxisPoints0.endX,
      eachSpacing = _getXAxisPoints0.eachSpacing;
      var totalWidth = eachSpacing * (xAxisPoints.length - 1);
      var screenWidth = endX - startX;
      offsetLeft = screenWidth - totalWidth;
      this.scrollOption = {
        currentOffset: offsetLeft,
        startTouchX: offsetLeft,
        distance: 0,
        lastMoveTime: 0 };

      this.opts._scrollDistance_ = offsetLeft;
      break;}

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('请启用滚动条后使用！');
    return;
  }
  //当前屏幕中间点
  var centerPoint = Math.round(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + Math.round(
  this.opts.xAxis.itemCount / 2);
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  //重新计算x轴偏移距离
  var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config),
  yAxisWidth = _calYAxisData.yAxisWidth;
  this.config.yAxisWidth = yAxisWidth;
  var offsetLeft = 0;
  var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
  xAxisPoints = _getXAxisPoints0.xAxisPoints,
  startX = _getXAxisPoints0.startX,
  endX = _getXAxisPoints0.endX,
  eachSpacing = _getXAxisPoints0.eachSpacing;
  var centerLeft = eachSpacing * centerPoint;
  var screenWidth = endX - startX;
  var MaxLeft = screenWidth - eachSpacing * (xAxisPoints.length - 1);
  offsetLeft = screenWidth / 2 - centerLeft;
  if (offsetLeft > 0) {
    offsetLeft = 0;
  }
  if (offsetLeft < MaxLeft) {
    offsetLeft = MaxLeft;
  }
  this.scrollOption = {
    currentOffset: offsetLeft,
    startTouchX: offsetLeft,
    distance: 0,
    lastMoveTime: 0 };

  this.opts._scrollDistance_ = offsetLeft;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

Charts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

Charts.prototype.addEventListener = function (type, listener) {
  this.event.addEventListener(type, listener);
};

Charts.prototype.getCurrentDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose') {
      return findPieChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.pieData);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.radarData, this.opts.categories.length);
    } else if (this.opts.type === 'funnel') {
      return findFunnelChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.funnelData);
    } else if (this.opts.type === 'map') {
      return findMapChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts);
    } else if (this.opts.type === 'word') {
      return findWordChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.wordCloudData);
    } else {
      return findCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

Charts.prototype.getLegendDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    return findLegendIndex({
      x: _touches$.x,
      y: _touches$.y },
    this.opts.chartData.legendData);
  }
  return -1;
};

Charts.prototype.touchLegend = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    var index = this.getLegendDataIndex(e);
    if (index >= 0) {
      this.opts.series[index].show = !this.opts.series[index].show;
      this.opts.animation = option.animation ? true : false;
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
    }
  }

};

Charts.prototype.showToolTip = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (!touches) {
    console.log("touchError");
  }
  var _touches$ = getTouches(touches, this.opts, e);
  var currentOffset = this.scrollOption.currentOffset;
  var opts = assign({}, this.opts, {
    _scrollDistance_: currentOffset,
    animation: false });

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'column') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'mix') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getMixToolTipData = getMixToolTipData(seriesData, this.opts.chartData.calPoints, index, this.opts.categories, option),
        textList = _getMixToolTipData.textList,
        offset = _getMixToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.opts.chartData.calPoints,
        index, this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose' || this.opts.type === 'funnel') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: option.textList ? option.textList : textList,
        offset: offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'map' || this.opts.type === 'word') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = this.opts._series_[index];
      var textList = [{
        text: option.format ? option.format(seriesData) : seriesData.properties.name,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: option.textList ? option.textList : textList,
        offset: offset,
        option: option,
        index: index };

    }
    opts.updateData = false;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'radar') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var textList = seriesData.map(function (item) {
          return {
            text: option.format ? option.format(item) : item.name + ': ' + item.data,
            color: item.color };

        });
        var offset = {
          x: _touches$.x,
          y: _touches$.y };

        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

Charts.prototype.translate = function (distance) {
  this.scrollOption = {
    currentOffset: distance,
    startTouchX: distance,
    distance: 0,
    lastMoveTime: 0 };

  var opts = assign({}, this.opts, {
    _scrollDistance_: distance,
    animation: false });

  drawCharts.call(this, this.opts.type, opts, this.config, this.context);
};

Charts.prototype.scrollStart = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    this.scrollOption.startTouchX = _touches$.x;
  }
};

Charts.prototype.scroll = function (e) {
  if (this.scrollOption.lastMoveTime === 0) {
    this.scrollOption.lastMoveTime = Date.now();
  }
  var Limit = this.opts.extra.touchMoveLimit || 20;
  var currMoveTime = Date.now();
  var duration = currMoveTime - this.scrollOption.lastMoveTime;
  if (duration < Math.floor(1000 / Limit)) return;
  this.scrollOption.lastMoveTime = currMoveTime;
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches && this.opts.enableScroll === true) {
    var _touches$ = getTouches(touches, this.opts, e);
    var _distance;
    _distance = _touches$.x - this.scrollOption.startTouchX;
    var currentOffset = this.scrollOption.currentOffset;
    var validDistance = calValidDistance(this, currentOffset + _distance, this.opts.chartData, this.config, this.opts);
    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    drawCharts.call(this, opts.type, opts, this.config, this.context);
    return currentOffset + _distance;
  }
};

Charts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;
    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};
if ( true && typeof module.exports === "object") {
  module.exports = Charts;
  //export default Charts;//建议使用nodejs的module导出方式，如报错请使用export方式导出
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 25:
/*!**************************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/config/provinces.json ***!
  \**************************************************************************/
/*! exports provided: type, features, default */
/***/ (function(module) {

module.exports = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":440100,"name":"广州市","center":[113.280637,23.125178],"centroid":[113.544371,23.32925],"childrenNum":11,"level":"city","parent":{"adcode":440000},"subFeatureIndex":10,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[112.975184,23.463622],[112.993347,23.466845],[113.00469,23.462037],[113.018025,23.469065],[113.042932,23.474137],[113.055884,23.471971],[113.063854,23.482537],[113.075503,23.484228],[113.083933,23.494266],[113.108994,23.497964],[113.128689,23.512596],[113.15352,23.502823],[113.172066,23.512384],[113.192069,23.514761],[113.191149,23.523212],[113.211918,23.543914],[113.210155,23.552997],[113.200805,23.561815],[113.202262,23.576492],[113.214524,23.584253],[113.227015,23.585731],[113.227859,23.594441],[113.245868,23.588265],[113.24035,23.606212],[113.248474,23.601567],[113.2766,23.615977],[113.280049,23.608957],[113.290548,23.617085],[113.299438,23.637456],[113.289245,23.644368],[113.31101,23.643313],[113.32833,23.645371],[113.327947,23.655502],[113.334845,23.656399],[113.338447,23.665737],[113.347413,23.667215],[113.366343,23.710311],[113.372397,23.709731],[113.378375,23.731511],[113.397841,23.730562],[113.404278,23.723495],[113.438459,23.727134],[113.443823,23.715901],[113.464286,23.70799],[113.468731,23.691006],[113.481069,23.684043],[113.510268,23.682461],[113.527052,23.686153],[113.545445,23.696387],[113.546901,23.702558],[113.55878,23.700712],[113.568053,23.690215],[113.568053,23.679454],[113.587289,23.675234],[113.587212,23.669008],[113.597252,23.664946],[113.615721,23.680192],[113.61166,23.686206],[113.623845,23.694699],[113.622619,23.699446],[113.638176,23.704562],[113.628137,23.711682],[113.631662,23.727872],[113.63649,23.731985],[113.630742,23.738946],[113.636414,23.750229],[113.626144,23.767416],[113.615185,23.779804],[113.633731,23.797198],[113.640245,23.814274],[113.651664,23.820123],[113.666379,23.813694],[113.684312,23.812956],[113.687378,23.825709],[113.706384,23.815275],[113.720178,23.825129],[113.714814,23.834982],[113.718033,23.843887],[113.709756,23.856267],[113.713511,23.862484],[113.733667,23.855003],[113.742327,23.859165],[113.749071,23.854371],[113.758191,23.857479],[113.767081,23.871439],[113.775358,23.877918],[113.781105,23.896299],[113.791605,23.903882],[113.800265,23.902566],[113.807315,23.900407],[113.841496,23.918732],[113.851152,23.920312],[113.865177,23.928947],[113.879815,23.930369],[113.887478,23.923998],[113.892536,23.931685],[113.907787,23.924577],[113.93645,23.928737],[113.941201,23.923577],[113.952697,23.929632],[113.982126,23.929684],[113.984502,23.926157],[114.008413,23.933001],[114.017992,23.925261],[114.033856,23.91889],[114.031327,23.906305],[114.036232,23.901776],[114.04267,23.889874],[114.041827,23.871491],[114.047728,23.867488],[114.050487,23.85474],[114.057767,23.846784],[114.052249,23.830029],[114.040294,23.824444],[114.035312,23.813378],[114.047728,23.803312],[114.037228,23.793509],[114.056311,23.784021],[114.05999,23.775851],[114.038454,23.771212],[114.027419,23.760141],[114.02489,23.752549],[114.018222,23.76283],[114.009945,23.762988],[114.017686,23.778276],[114.013087,23.777959],[113.998756,23.762988],[113.976071,23.757716],[113.972853,23.739262],[113.96105,23.738207],[113.955916,23.732671],[113.940282,23.738155],[113.93645,23.732143],[113.920049,23.729454],[113.912386,23.716534],[113.900967,23.715426],[113.897595,23.700184],[113.881884,23.685151],[113.847857,23.679348],[113.839963,23.655449],[113.818811,23.656188],[113.827778,23.648009],[113.825555,23.639883],[113.816742,23.63582],[113.817432,23.623471],[113.832223,23.624263],[113.834215,23.61756],[113.843565,23.617877],[113.859582,23.60996],[113.858356,23.593491],[113.864027,23.587368],[113.852838,23.570579],[113.862495,23.566303],[113.871384,23.541327],[113.888168,23.535095],[113.89315,23.520254],[113.906408,23.511856],[113.911543,23.504144],[113.923115,23.503088],[113.929936,23.494213],[113.946643,23.492522],[113.940895,23.483594],[113.931162,23.483066],[113.938749,23.476726],[113.96105,23.480371],[113.974156,23.478839],[113.981743,23.472129],[113.974462,23.46489],[113.955456,23.466053],[113.952774,23.442907],[113.960054,23.43276],[113.975382,23.429378],[113.98795,23.431439],[113.984195,23.421238],[113.986801,23.405591],[114.000442,23.39338],[113.995997,23.386771],[113.982049,23.379369],[113.990556,23.354833],[114.000902,23.346636],[113.993928,23.333149],[113.984195,23.330505],[113.996151,23.309346],[113.996687,23.297443],[113.978217,23.30104],[113.977451,23.304849],[113.958445,23.314953],[113.958905,23.33262],[113.939285,23.342934],[113.927483,23.339972],[113.895985,23.34505],[113.889394,23.334154],[113.894989,23.314689],[113.888475,23.290512],[113.890314,23.282681],[113.877209,23.264213],[113.895142,23.253523],[113.890084,23.242144],[113.903802,23.212554],[113.893993,23.21266],[113.8838,23.191694],[113.889011,23.178616],[113.902116,23.177186],[113.895679,23.164529],[113.874757,23.165377],[113.858739,23.157221],[113.849849,23.148853],[113.844715,23.125599],[113.841113,23.116169],[113.814673,23.127771],[113.791298,23.127665],[113.777427,23.131108],[113.754052,23.129572],[113.738572,23.141331],[113.71696,23.138895],[113.687837,23.119772],[113.670671,23.116434],[113.662011,23.111454],[113.661244,23.117971],[113.651281,23.119295],[113.642698,23.113467],[113.640245,23.103878],[113.610433,23.103772],[113.60139,23.0954],[113.586446,23.08777],[113.556327,23.081252],[113.54897,23.076006],[113.543759,23.06228],[113.531957,23.050938],[113.522913,23.037262],[113.52299,23.011338],[113.529198,22.982599],[113.541766,22.959369],[113.550503,22.936189],[113.564298,22.906903],[113.575104,22.888331],[113.571195,22.853143],[113.58407,22.831325],[113.612119,22.802281],[113.648139,22.761759],[113.678181,22.726113],[113.685308,22.717719],[113.716883,22.645172],[113.740487,22.534284],[113.728149,22.521993],[113.692052,22.515129],[113.651588,22.515715],[113.639326,22.548276],[113.62078,22.579554],[113.599628,22.594393],[113.589971,22.59519],[113.578552,22.604603],[113.561615,22.607528],[113.536861,22.647511],[113.533106,22.656388],[113.540693,22.666222],[113.523373,22.679297],[113.491875,22.699811],[113.464822,22.72096],[113.467964,22.728504],[113.447808,22.735836],[113.42612,22.738014],[113.412172,22.742849],[113.365116,22.772595],[113.356533,22.792989],[113.38305,22.799308],[113.393396,22.809822],[113.37439,22.822618],[113.364273,22.823467],[113.335994,22.817945],[113.312083,22.830369],[113.309631,22.851179],[113.296296,22.862485],[113.301354,22.866094],[113.300434,22.87708],[113.27706,22.894699],[113.28595,22.901438],[113.282424,22.927383],[113.298212,22.934014],[113.285183,22.951095],[113.267557,22.958786],[113.251923,22.970348],[113.250007,23.009058],[113.25836,23.013989],[113.254912,23.044842],[113.225713,23.041874],[113.211688,23.043305],[113.195747,23.056185],[113.184865,23.05963],[113.177201,23.076695],[113.193678,23.083902],[113.208776,23.083531],[113.215826,23.100646],[113.208163,23.099692],[113.203718,23.121891],[113.209695,23.121838],[113.211535,23.142603],[113.191992,23.14345],[113.186857,23.14827],[113.1877,23.159127],[113.209465,23.17708],[113.209006,23.192171],[113.204867,23.201172],[113.191072,23.214937],[113.177508,23.220866],[113.176511,23.236587],[113.182029,23.251459],[113.177738,23.271304],[113.160877,23.286649],[113.150608,23.289983],[113.150838,23.297972],[113.128,23.31453],[113.124704,23.307653],[113.105775,23.302733],[113.11022,23.295961],[113.105545,23.289718],[113.090524,23.28993],[113.086156,23.285274],[113.072284,23.284268],[113.081941,23.261726],[113.079795,23.250083],[113.070215,23.248813],[113.053508,23.253418],[113.044925,23.2522],[113.052742,23.26342],[113.051439,23.278395],[113.042549,23.283422],[113.032509,23.300881],[113.037567,23.320084],[113.023466,23.324898],[113.027604,23.33352],[113.043392,23.351131],[113.034808,23.357372],[113.018331,23.341347],[113.012583,23.352612],[112.989822,23.354728],[112.980626,23.380268],[112.988366,23.390102],[112.990588,23.402631],[113.001088,23.406332],[112.988673,23.419811],[112.982771,23.434451],[112.989132,23.443277],[112.978633,23.441586],[112.974188,23.434081],[112.96024,23.425995],[112.961926,23.44444],[112.972962,23.450042],[112.975184,23.463622]]]]}},{"type":"Feature","properties":{"adcode":440200,"name":"韶关市","center":[113.591544,24.801322],"centroid":[113.779323,24.81941],"childrenNum":10,"level":"city","parent":{"adcode":440000},"subFeatureIndex":1,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.800265,23.902566],[113.799345,23.923524],[113.792294,23.931527],[113.775358,23.938424],[113.774285,23.952691],[113.766468,23.96085],[113.744703,23.95906],[113.739415,23.969588],[113.730448,23.974641],[113.732364,23.981114],[113.718646,23.993008],[113.728149,23.997166],[113.747078,24.023212],[113.753592,24.026842],[113.763555,24.02137],[113.772982,24.026947],[113.784171,24.022317],[113.790608,24.025106],[113.790379,24.034471],[113.803637,24.053566],[113.813063,24.052567],[113.83115,24.063507],[113.828467,24.069608],[113.837434,24.072764],[113.845711,24.086806],[113.836821,24.088331],[113.836668,24.098637],[113.842415,24.104053],[113.836974,24.111729],[113.839273,24.119931],[113.850999,24.124978],[113.853911,24.132811],[113.86464,24.133021],[113.870465,24.141169],[113.862265,24.147319],[113.857053,24.16151],[113.880045,24.174123],[113.901043,24.188521],[113.909167,24.184318],[113.930242,24.188416],[113.930319,24.19593],[113.922119,24.19304],[113.921199,24.200974],[113.896522,24.210326],[113.890391,24.229763],[113.890774,24.241476],[113.88311,24.245415],[113.870541,24.242264],[113.872074,24.253976],[113.862878,24.259018],[113.855827,24.252926],[113.84004,24.265109],[113.850003,24.274561],[113.844715,24.279707],[113.844791,24.304541],[113.850462,24.318872],[113.8405,24.336246],[113.831303,24.33656],[113.817048,24.34459],[113.818581,24.3522],[113.800955,24.377334],[113.805553,24.384364],[113.803867,24.401781],[113.77827,24.410909],[113.765318,24.417727],[113.762866,24.43299],[113.753439,24.437185],[113.726999,24.437028],[113.723934,24.43493],[113.722248,24.414633],[113.709909,24.412377],[113.686381,24.437709],[113.683163,24.454175],[113.666072,24.467493],[113.656799,24.468227],[113.643234,24.477717],[113.63718,24.486471],[113.625761,24.491923],[113.609667,24.489983],[113.596792,24.500886],[113.599628,24.512994],[113.589665,24.515248],[113.579548,24.50052],[113.57564,24.509115],[113.552572,24.511055],[113.540463,24.506233],[113.531343,24.489826],[113.530271,24.479551],[113.518852,24.469852],[113.507816,24.484007],[113.499309,24.473785],[113.489269,24.471006],[113.478847,24.477769],[113.467428,24.461726],[113.440988,24.453703],[113.419223,24.459943],[113.412172,24.472526],[113.415544,24.485266],[113.379754,24.485213],[113.37416,24.49402],[113.362051,24.47908],[113.350632,24.472159],[113.331243,24.472579],[113.31944,24.465291],[113.294993,24.457164],[113.272155,24.466969],[113.270392,24.47672],[113.261809,24.482225],[113.252766,24.497794],[113.25108,24.510216],[113.244642,24.502144],[113.235829,24.505866],[113.230158,24.498475],[113.216516,24.495697],[113.20617,24.476458],[113.19705,24.474676],[113.186781,24.480705],[113.174979,24.475882],[113.16195,24.479027],[113.153367,24.467703],[113.151451,24.478713],[113.13712,24.482907],[113.114128,24.502983],[113.096808,24.496431],[113.087305,24.471583],[113.063701,24.468804],[113.047377,24.475515],[113.025612,24.493863],[113.02063,24.513675],[112.999708,24.528716],[112.991048,24.544751],[112.981928,24.542917],[112.96936,24.568118],[112.96139,24.570266],[112.964378,24.586138],[112.950507,24.59499],[112.926366,24.596457],[112.91717,24.60049],[112.902072,24.595671],[112.8987,24.600542],[112.887971,24.595304],[112.884599,24.616358],[112.89778,24.632277],[112.896401,24.650602],[112.914487,24.662695],[112.900616,24.713776],[112.930351,24.718695],[112.938781,24.73821],[112.933647,24.755369],[112.940161,24.757514],[112.954109,24.782201],[112.95112,24.788476],[112.960087,24.800974],[112.95158,24.815771],[112.95978,24.824241],[112.979246,24.832553],[112.998942,24.850483],[113.014729,24.851528],[113.019557,24.855971],[113.022163,24.870866],[113.010974,24.882781],[113.009901,24.896889],[113.004766,24.900129],[113.00515,24.914078],[112.994804,24.927347],[112.991661,24.937533],[113.011894,24.946099],[113.002774,24.957118],[113.008522,24.961975],[113.009978,24.97738],[113.002084,24.991059],[112.990512,24.995393],[112.992045,25.017944],[112.97848,25.026504],[112.979706,25.034125],[113.002391,25.058235],[113.002007,25.071123],[113.018408,25.083122],[113.004537,25.089174],[112.999632,25.10305],[112.991125,25.109466],[112.986833,25.119219],[112.972809,25.132101],[112.96798,25.141644],[112.974341,25.168235],[112.991585,25.176785],[113.008598,25.190129],[113.030517,25.194508],[113.034502,25.201388],[113.02975,25.210508],[113.017718,25.211186],[113.006682,25.231509],[112.992581,25.247193],[112.979936,25.245056],[112.972885,25.251152],[112.958401,25.254382],[112.951886,25.245734],[112.944223,25.249485],[112.92399,25.248651],[112.910732,25.245161],[112.904524,25.238439],[112.88092,25.249641],[112.868351,25.248808],[112.865899,25.2598],[112.873946,25.274282],[112.866436,25.276574],[112.856396,25.291574],[112.855476,25.313654],[112.858772,25.320215],[112.851798,25.33344],[112.857392,25.336824],[112.868735,25.327817],[112.877701,25.333752],[112.894868,25.337605],[112.900616,25.311363],[112.913184,25.299907],[112.927822,25.299907],[112.931807,25.322819],[112.945066,25.326359],[112.95112,25.337449],[112.964685,25.342134],[112.968134,25.349839],[112.987983,25.353795],[112.995417,25.348954],[113.009211,25.352858],[113.023696,25.345934],[113.02975,25.361239],[113.041629,25.366027],[113.06462,25.381797],[113.080178,25.383358],[113.080638,25.390956],[113.088761,25.396524],[113.090447,25.406775],[113.096885,25.410729],[113.092363,25.417493],[113.114435,25.420562],[113.131525,25.414735],[113.126237,25.438406],[113.118497,25.44548],[113.127923,25.449693],[113.122329,25.455727],[113.134591,25.467688],[113.149995,25.468],[113.151987,25.492232],[113.169307,25.488021],[113.177048,25.471589],[113.200805,25.479389],[113.210692,25.496704],[113.226172,25.509701],[113.243263,25.515628],[113.249087,25.51412],[113.260813,25.49946],[113.269396,25.505282],[113.282654,25.494208],[113.291774,25.500915],[113.288785,25.50939],[113.29346,25.516771],[113.303347,25.515836],[113.296832,25.508402],[113.311393,25.490413],[113.309171,25.481001],[113.315992,25.467532],[113.313923,25.442931],[113.32971,25.450838],[113.340056,25.449901],[113.351705,25.437574],[113.359752,25.438406],[113.366956,25.431175],[113.373317,25.402612],[113.389334,25.403653],[113.393626,25.397565],[113.407037,25.401415],[113.424127,25.392673],[113.427729,25.373262],[113.442291,25.361291],[113.449878,25.359573],[113.462446,25.369827],[113.470187,25.365663],[113.480073,25.375187],[113.504137,25.374979],[113.518392,25.370555],[113.515096,25.360666],[113.524293,25.353587],[113.536095,25.368525],[113.544295,25.3666],[113.554565,25.351869],[113.581464,25.342707],[113.583304,25.331878],[113.579778,25.316622],[113.585986,25.307353],[113.61074,25.327036],[113.620473,25.325682],[113.631202,25.330576],[113.657489,25.329119],[113.663697,25.337709],[113.679101,25.334481],[113.685385,25.341249],[113.687148,25.352077],[113.707916,25.352598],[113.706537,25.360874],[113.725237,25.358636],[113.73451,25.348902],[113.744013,25.363945],[113.754129,25.361186],[113.758421,25.3438],[113.764168,25.333596],[113.758114,25.330004],[113.780186,25.334065],[113.814979,25.328702],[113.823179,25.33193],[113.832836,25.343904],[113.833449,25.353951],[113.839733,25.363477],[113.860962,25.369306],[113.876902,25.38034],[113.883263,25.395327],[113.881807,25.406931],[113.892077,25.411874],[113.88449,25.420302],[113.886865,25.436637],[113.913382,25.442775],[113.926564,25.442151],[113.93507,25.437522],[113.952544,25.443816],[113.961894,25.452554],[113.997913,25.444232],[114.002971,25.43284],[113.983275,25.415308],[113.98772,25.403497],[114.00573,25.396732],[114.010788,25.386429],[114.02305,25.384659],[114.0406,25.391216],[114.045122,25.384035],[114.024353,25.37399],[114.047881,25.367276],[114.041367,25.360666],[114.051406,25.34885],[114.049107,25.341874],[114.036768,25.342707],[114.029335,25.328338],[114.035466,25.320007],[114.056158,25.311884],[114.037228,25.308291],[114.027649,25.301833],[114.025503,25.28897],[114.01462,25.280532],[114.022131,25.269594],[114.031404,25.263655],[114.029105,25.254226],[114.039911,25.250735],[114.055928,25.277667],[114.064588,25.281105],[114.06865,25.273709],[114.076313,25.278501],[114.083517,25.275532],[114.10375,25.294438],[114.115629,25.301885],[114.126511,25.300531],[114.131339,25.308447],[114.144751,25.310634],[114.147203,25.305323],[114.158546,25.313602],[114.168508,25.312509],[114.173643,25.305062],[114.194105,25.317351],[114.204988,25.31027],[114.204681,25.299646],[114.215871,25.30074],[114.227749,25.295376],[114.236026,25.300115],[114.257025,25.29272],[114.265915,25.293813],[114.270973,25.302146],[114.287297,25.299698],[114.292891,25.289178],[114.302854,25.290845],[114.295727,25.299802],[114.312357,25.311832],[114.30477,25.314696],[114.306226,25.334117],[114.31481,25.338594],[114.338184,25.334065],[114.357344,25.326776],[114.372824,25.325422],[114.382941,25.317143],[114.387692,25.323548],[114.400874,25.327817],[114.403096,25.334273],[114.417581,25.335054],[114.430149,25.343852],[114.429919,25.349943],[114.438809,25.376072],[114.448006,25.386533],[114.458658,25.387834],[114.462644,25.381485],[114.477741,25.371544],[114.496977,25.377634],[114.508856,25.384659],[114.505944,25.39871],[114.520275,25.403289],[114.531311,25.414215],[114.540431,25.417025],[114.556755,25.406359],[114.579056,25.397617],[114.573385,25.395015],[114.573002,25.384503],[114.580972,25.384035],[114.580359,25.393506],[114.586183,25.3959],[114.599748,25.385856],[114.599518,25.359417],[114.61155,25.358272],[114.627568,25.330628],[114.636458,25.324537],[114.657073,25.328181],[114.664814,25.326776],[114.674393,25.317195],[114.685736,25.313706],[114.69225,25.322142],[114.702903,25.314123],[114.714398,25.315373],[114.713019,25.306208],[114.722828,25.302146],[114.723978,25.28397],[114.73463,25.283293],[114.742907,25.274542],[114.743597,25.24813],[114.749345,25.242555],[114.738386,25.240107],[114.738309,25.231978],[114.748425,25.235157],[114.740685,25.226246],[114.726277,25.233073],[114.712712,25.221817],[114.702213,25.221192],[114.693936,25.213635],[114.695162,25.195185],[114.680141,25.1931],[114.690334,25.179756],[114.685736,25.173188],[114.702596,25.163178],[114.724821,25.162813],[114.735014,25.155826],[114.732101,25.142478],[114.737696,25.130432],[114.735627,25.122035],[114.716084,25.114577],[114.712022,25.110039],[114.693936,25.104406],[114.679681,25.106806],[114.66512,25.101224],[114.665733,25.091104],[114.654238,25.080618],[114.640136,25.073888],[114.608715,25.075871],[114.604653,25.083696],[114.598369,25.071123],[114.584957,25.078688],[114.561583,25.077592],[114.546332,25.053382],[114.541121,25.049729],[114.539664,25.031619],[114.53269,25.022851],[114.516903,25.024573],[114.511385,25.006617],[114.506174,25.000091],[114.484639,25.001762],[114.479887,25.005781],[114.456666,24.99722],[114.456666,24.978528],[114.442181,24.972315],[114.423635,24.972576],[114.425551,24.959259],[114.395892,24.951112],[114.396199,24.937324],[114.402177,24.928444],[114.400031,24.919511],[114.390758,24.913138],[114.401027,24.902637],[114.404859,24.892605],[114.40302,24.877555],[114.387385,24.863341],[114.377882,24.860832],[114.356577,24.828999],[114.357497,24.818699],[114.349297,24.816922],[114.342399,24.807353],[114.344085,24.789574],[114.333892,24.7799],[114.341863,24.763686],[114.335808,24.749092],[114.319638,24.742291],[114.311744,24.734077],[114.293198,24.732037],[114.284385,24.72738],[114.279556,24.70802],[114.272506,24.700432],[114.257485,24.697292],[114.230815,24.697763],[114.210353,24.6885],[114.191576,24.694204],[114.169045,24.689651],[114.169811,24.682585],[114.189814,24.657983],[114.181537,24.653324],[114.175866,24.658978],[114.174563,24.645576],[114.193799,24.652643],[114.207134,24.653952],[114.208743,24.648665],[114.231581,24.640445],[114.242847,24.645419],[114.258481,24.641544],[114.265992,24.630915],[114.27902,24.631596],[114.281932,24.621019],[114.289749,24.618767],[114.291052,24.600175],[114.299942,24.58839],[114.301015,24.579067],[114.308142,24.574143],[114.310518,24.558583],[114.293275,24.551982],[114.288906,24.537991],[114.273732,24.533695],[114.280169,24.523109],[114.280399,24.511526],[114.286607,24.500572],[114.310595,24.480757],[114.306839,24.472998],[114.292968,24.468856],[114.283465,24.453965],[114.257868,24.435245],[114.242004,24.426014],[114.245683,24.411328],[114.254879,24.400155],[114.249898,24.386935],[114.249208,24.362695],[114.278637,24.364951],[114.293581,24.352672],[114.292508,24.346952],[114.280859,24.337348],[114.272966,24.324856],[114.280553,24.313098],[114.279326,24.303176],[114.263692,24.27829],[114.266451,24.272776],[114.254649,24.266055],[114.272889,24.257495],[114.254802,24.256707],[114.263156,24.246676],[114.274958,24.224195],[114.274192,24.212742],[114.290899,24.207594],[114.298026,24.195142],[114.289289,24.1819],[114.292891,24.175069],[114.306533,24.165399],[114.316419,24.147319],[114.33029,24.137279],[114.329831,24.126871],[114.337418,24.125294],[114.340713,24.135807],[114.352209,24.143219],[114.365161,24.132233],[114.378879,24.139172],[114.393517,24.140959],[114.419956,24.139329],[114.422179,24.131181],[114.433215,24.133337],[114.439499,24.121982],[114.446856,24.121245],[114.46387,24.110836],[114.479044,24.112939],[114.482953,24.118827],[114.474063,24.135229],[114.463946,24.14017],[114.469311,24.144376],[114.469848,24.162141],[114.46272,24.161931],[114.460574,24.169604],[114.470537,24.171811],[114.474216,24.16624],[114.48119,24.172284],[114.491613,24.192357],[114.511155,24.205335],[114.512458,24.210904],[114.548324,24.230603],[114.556065,24.245888],[114.566028,24.233019],[114.577293,24.227241],[114.591318,24.225981],[114.597602,24.21248],[114.590935,24.203653],[114.590782,24.187838],[114.600055,24.174911],[114.594077,24.164138],[114.568327,24.159303],[114.558134,24.15063],[114.565568,24.136175],[114.554226,24.124295],[114.546715,24.130393],[114.535833,24.124347],[114.533993,24.138856],[114.527939,24.135807],[114.522957,24.12419],[114.509469,24.106682],[114.495828,24.118617],[114.489697,24.114043],[114.493222,24.106787],[114.481267,24.086595],[114.46364,24.07592],[114.44586,24.07066],[114.437813,24.062192],[114.436587,24.048569],[114.440725,24.033208],[114.425628,24.032998],[114.420416,24.019582],[114.412523,24.027421],[114.398038,24.026],[114.399494,24.018003],[114.389685,24.012741],[114.385546,24.003901],[114.391984,23.991693],[114.385393,23.994482],[114.382941,23.981851],[114.389685,23.97043],[114.384856,23.967798],[114.386696,23.95627],[114.378036,23.942794],[114.382481,23.932159],[114.370449,23.92742],[114.36769,23.912519],[114.360486,23.910412],[114.362632,23.901091],[114.34991,23.887925],[114.331517,23.900512],[114.32163,23.894403],[114.303161,23.891454],[114.28814,23.90541],[114.279633,23.901091],[114.268367,23.902829],[114.263156,23.911044],[114.248671,23.906516],[114.236716,23.910676],[114.247905,23.929737],[114.254649,23.934686],[114.251047,23.940477],[114.271739,23.948479],[114.271816,23.959482],[114.263309,23.960218],[114.258711,23.952744],[114.244303,23.948269],[114.238479,23.941899],[114.21702,23.942636],[114.213341,23.946163],[114.201999,23.941267],[114.19196,23.9449],[114.186518,23.95627],[114.174333,23.959429],[114.16368,23.953586],[114.158162,23.939846],[114.142835,23.940425],[114.119844,23.936002],[114.117008,23.929737],[114.075624,23.924366],[114.074398,23.930895],[114.056771,23.935844],[114.04129,23.906937],[114.036232,23.901776],[114.031327,23.906305],[114.033856,23.91889],[114.017992,23.925261],[114.008413,23.933001],[113.984502,23.926157],[113.982126,23.929684],[113.952697,23.929632],[113.941201,23.923577],[113.93645,23.928737],[113.907787,23.924577],[113.892536,23.931685],[113.887478,23.923998],[113.879815,23.930369],[113.865177,23.928947],[113.851152,23.920312],[113.841496,23.918732],[113.807315,23.900407],[113.800265,23.902566]]]]}},{"type":"Feature","properties":{"adcode":440300,"name":"深圳市","center":[114.085947,22.547],"centroid":[114.14318,22.643377],"childrenNum":9,"level":"city","parent":{"adcode":440000},"subFeatureIndex":2,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.751447,22.715381],[113.762406,22.736899],[113.790838,22.75342],[113.791835,22.767655],[113.801874,22.777109],[113.802257,22.784863],[113.811071,22.782473],[113.813446,22.790439],[113.824942,22.792935],[113.837204,22.800901],[113.838737,22.819591],[113.834675,22.822193],[113.841496,22.833979],[113.851305,22.837483],[113.857053,22.832599],[113.872611,22.837271],[113.877669,22.85447],[113.883263,22.850542],[113.887325,22.858504],[113.89951,22.855478],[113.893916,22.846189],[113.904875,22.840137],[113.910929,22.829997],[113.937829,22.832705],[113.954613,22.821025],[113.954996,22.815078],[113.972393,22.812476],[113.978371,22.806529],[113.974999,22.798458],[113.984578,22.803662],[113.990863,22.800211],[113.995308,22.771267],[114.002971,22.763459],[114.017916,22.760219],[114.035236,22.766752],[114.039911,22.764309],[114.049797,22.771161],[114.049414,22.756448],[114.064588,22.755916],[114.074781,22.740883],[114.084437,22.750551],[114.098462,22.747205],[114.107198,22.722979],[114.117621,22.723244],[114.121989,22.716231],[114.144674,22.714159],[114.145057,22.701193],[114.151801,22.690139],[114.167436,22.680679],[114.16391,22.665372],[114.15548,22.668933],[114.172494,22.654368],[114.187515,22.666382],[114.187515,22.673557],[114.195332,22.680095],[114.19947,22.702043],[114.196711,22.710227],[114.208053,22.71469],[114.208513,22.729248],[114.215641,22.73557],[114.203149,22.75512],[114.201079,22.764787],[114.182073,22.765265],[114.187974,22.770364],[114.180847,22.775728],[114.189967,22.785713],[114.20721,22.789802],[114.215641,22.807751],[114.229205,22.81253],[114.234953,22.792989],[114.245529,22.790652],[114.250817,22.781677],[114.26147,22.781783],[114.282852,22.802388],[114.284844,22.808282],[114.294347,22.803397],[114.314503,22.800157],[114.318565,22.806583],[114.33052,22.809291],[114.353128,22.806636],[114.351136,22.789696],[114.342706,22.783642],[114.354125,22.778172],[114.355964,22.764893],[114.36562,22.766062],[114.386236,22.759635],[114.394819,22.759794],[114.396352,22.777322],[114.404706,22.781305],[114.418117,22.766593],[114.42057,22.753898],[114.414055,22.752251],[114.413902,22.736261],[114.403403,22.722926],[114.409227,22.713574],[114.42057,22.713999],[114.426394,22.699918],[114.442028,22.697579],[114.445324,22.68897],[114.441338,22.682167],[114.428157,22.676746],[114.431912,22.660907],[114.449692,22.665319],[114.453447,22.669943],[114.478278,22.661864],[114.481956,22.668136],[114.505867,22.668455],[114.514451,22.660747],[114.515217,22.655485],[114.553229,22.656229],[114.580282,22.661491],[114.60289,22.655272],[114.60312,22.638739],[114.58672,22.612845],[114.572312,22.602689],[114.559054,22.583277],[114.559743,22.573172],[114.568097,22.560778],[114.589632,22.549766],[114.614539,22.545191],[114.627031,22.519918],[114.627798,22.502996],[114.611397,22.482027],[114.585417,22.473405],[114.549244,22.46574],[114.539281,22.449237],[114.52541,22.440559],[114.50694,22.438589],[114.48985,22.443647],[114.48027,22.45291],[114.474446,22.464515],[114.468162,22.491395],[114.471917,22.522206],[114.467625,22.53338],[114.434748,22.566576],[114.430686,22.583384],[114.422562,22.592744],[114.398345,22.602848],[114.381868,22.601519],[114.359489,22.591574],[114.346997,22.588702],[114.325309,22.588649],[114.311821,22.578597],[114.304847,22.568704],[114.292432,22.562959],[114.258864,22.55881],[114.232578,22.54003],[114.223304,22.552745],[114.201463,22.554341],[114.182686,22.552798],[114.182303,22.556788],[114.165596,22.558916],[114.157166,22.551947],[114.153488,22.539285],[114.135094,22.53886],[114.117238,22.526942],[114.114862,22.532795],[114.094093,22.533593],[114.084284,22.52508],[114.090338,22.520982],[114.081601,22.512415],[114.077003,22.515502],[114.064588,22.510553],[114.054702,22.49959],[114.030867,22.504274],[114.024047,22.509808],[113.976531,22.510606],[113.959135,22.504912],[113.946873,22.477343],[113.915758,22.455945],[113.89177,22.442635],[113.881731,22.446788],[113.870005,22.459565],[113.862801,22.475853],[113.859352,22.495652],[113.864027,22.515981],[113.856593,22.539605],[113.851152,22.542584],[113.834675,22.539552],[113.838354,22.559342],[113.832223,22.570246],[113.803407,22.593169],[113.782255,22.625713],[113.773288,22.643205],[113.753133,22.698536],[113.751447,22.715381]]],[[[113.819961,22.396362],[113.807315,22.40025],[113.801338,22.407386],[113.7867,22.413563],[113.798885,22.422509],[113.811224,22.420432],[113.824176,22.40435],[113.819961,22.396362]]],[[[113.844485,22.510234],[113.842569,22.515821],[113.8569,22.509595],[113.856823,22.503582],[113.844485,22.510234]]],[[[113.839657,22.498526],[113.844485,22.503369],[113.851995,22.49661],[113.847244,22.491927],[113.839657,22.498526]]]]}},{"type":"Feature","properties":{"adcode":440400,"name":"珠海市","center":[113.553986,22.224979],"centroid":[113.337286,22.160135],"childrenNum":3,"level":"city","parent":{"adcode":440000},"subFeatureIndex":3,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.262652,22.392048],[113.273841,22.384751],[113.307178,22.346504],[113.32036,22.329561],[113.32128,22.312189],[113.336607,22.280105],[113.345114,22.258569],[113.352395,22.249133],[113.385272,22.230365],[113.390943,22.231858],[113.415774,22.202902],[113.430565,22.201302],[113.458384,22.213781],[113.462676,22.218847],[113.486357,22.227113],[113.478847,22.23831],[113.513027,22.249879],[113.514407,22.261555],[113.50475,22.266992],[113.496397,22.282237],[113.480456,22.303876],[113.470493,22.310377],[113.482985,22.318797],[113.493331,22.317998],[113.504137,22.324286],[113.494787,22.339684],[113.490342,22.34075],[113.493255,22.354069],[113.489193,22.365842],[113.491339,22.376922],[113.48697,22.390184],[113.495247,22.395403],[113.49586,22.407546],[113.508889,22.413403],[113.51433,22.408717],[113.537168,22.416332],[113.568743,22.411912],[113.585986,22.40041],[113.603766,22.403392],[113.608901,22.408824],[113.617791,22.436885],[113.624841,22.442955],[113.659098,22.441358],[113.669904,22.435607],[113.669368,22.416279],[113.649289,22.386243],[113.62806,22.349274],[113.604762,22.339897],[113.605299,22.329135],[113.616948,22.31885],[113.612809,22.308832],[113.595949,22.304249],[113.590124,22.29391],[113.595412,22.28245],[113.592194,22.268058],[113.599781,22.261128],[113.597175,22.234951],[113.589895,22.226793],[113.568819,22.22466],[113.558856,22.212395],[113.54943,22.213995],[113.538241,22.209409],[113.54077,22.199382],[113.534332,22.185622],[113.534562,22.1741],[113.544602,22.154095],[113.554641,22.142411],[113.554028,22.103884],[113.56583,22.091715],[113.565754,22.07266],[113.554488,22.069884],[113.530654,22.07362],[113.520308,22.069136],[113.503831,22.054722],[113.482679,22.054669],[113.459764,22.043724],[113.450567,22.032244],[113.448805,22.017079],[113.442214,22.009496],[113.410256,21.99091],[113.352165,21.974511],[113.33768,21.969009],[113.33017,21.961637],[113.328024,21.934442],[113.3199,21.909701],[113.300051,21.898958],[113.289399,21.883405],[113.26679,21.871645],[113.235216,21.887788],[113.218126,21.904998],[113.182106,21.952982],[113.159574,21.969009],[113.151451,21.979853],[113.147542,22.004689],[113.143097,22.011846],[113.10156,22.048262],[113.092057,22.065346],[113.087152,22.126137],[113.091903,22.136595],[113.097421,22.187702],[113.109453,22.204609],[113.106388,22.209355],[113.115584,22.215115],[113.120413,22.209622],[113.129686,22.218208],[113.158885,22.228712],[113.168541,22.238417],[113.176128,22.267792],[113.176281,22.280158],[113.185478,22.294762],[113.193065,22.358171],[113.183255,22.369837],[113.169154,22.377987],[113.1631,22.387947],[113.165399,22.40025],[113.181646,22.40238],[113.18839,22.394924],[113.192145,22.381662],[113.209389,22.388054],[113.212224,22.398599],[113.237285,22.391782],[113.24947,22.399344],[113.262652,22.392048]]],[[[114.051789,22.086324],[114.034546,22.091342],[114.026959,22.10319],[114.047651,22.108954],[114.056081,22.094277],[114.051789,22.086324]]],[[[114.231045,22.016332],[114.222615,22.018948],[114.227826,22.028827],[114.239781,22.035502],[114.267218,22.041268],[114.282852,22.049704],[114.302778,22.050505],[114.305537,22.060542],[114.32301,22.064172],[114.323623,22.056377],[114.308985,22.048636],[114.311361,22.041428],[114.299865,22.036142],[114.284231,22.036196],[114.266451,22.027599],[114.241238,22.023701],[114.231045,22.016332]]],[[[113.714584,22.007413],[113.705924,22.00784],[113.705694,22.016225],[113.695731,22.021565],[113.702628,22.029308],[113.723014,22.02872],[113.729988,22.016385],[113.714584,22.007413]]],[[[114.009945,21.853148],[114.010252,21.86368],[114.031557,21.873623],[114.016536,21.863145],[114.009945,21.853148]]],[[[113.824406,22.001271],[113.830767,21.996625],[113.842339,21.998868],[113.831763,21.98888],[113.825402,21.990536],[113.824406,22.001271]]],[[[113.815056,22.157136],[113.799575,22.166472],[113.808542,22.174207],[113.815056,22.157136]]],[[[113.999293,22.045273],[114.005424,22.045112],[114.001055,22.035929],[113.999293,22.045273]]],[[[113.765165,21.961958],[113.758191,21.965163],[113.755738,21.974672],[113.742403,21.987812],[113.750067,21.995129],[113.765855,21.992672],[113.772905,21.998761],[113.780109,21.989254],[113.778653,21.978357],[113.768154,21.972001],[113.765165,21.961958]]],[[[114.034469,21.886077],[114.042976,21.895431],[114.058687,21.902326],[114.063592,21.892384],[114.052862,21.893346],[114.04926,21.88271],[114.034469,21.886077]]],[[[113.722937,21.922152],[113.725083,21.932572],[113.71719,21.935244],[113.717956,21.951273],[113.727842,21.955119],[113.743093,21.950738],[113.751677,21.940747],[113.743476,21.928244],[113.722937,21.922152]]],[[[113.143251,21.831707],[113.138269,21.839193],[113.137043,21.868651],[113.144707,21.873516],[113.151221,21.864963],[113.167698,21.876563],[113.18088,21.862183],[113.191532,21.87234],[113.205787,21.871324],[113.203871,21.86122],[113.187624,21.848389],[113.179653,21.847373],[113.177431,21.854752],[113.159881,21.851864],[113.145856,21.838872],[113.143251,21.831707]]],[[[113.919436,22.036997],[113.922962,22.048583],[113.934687,22.043991],[113.937753,22.036249],[113.924111,22.032778],[113.919436,22.036997]]],[[[113.876979,22.117653],[113.88426,22.112583],[113.880581,22.10746],[113.869622,22.11301],[113.876979,22.117653]]],[[[113.828238,22.117919],[113.820727,22.120588],[113.816435,22.132327],[113.822413,22.136542],[113.818045,22.153295],[113.828544,22.156283],[113.83958,22.130993],[113.828238,22.117919]]],[[[114.18989,21.986423],[114.180847,21.988506],[114.178701,22.003034],[114.18192,22.010938],[114.217863,22.011098],[114.223841,22.007787],[114.220239,21.989842],[114.202689,21.991497],[114.18989,21.986423]]],[[[113.165399,21.953463],[113.172066,21.954745],[113.172373,21.941068],[113.165399,21.953463]]],[[[114.153947,21.975099],[114.144598,21.980441],[114.123675,21.97996],[114.124212,21.985248],[114.148276,21.99091],[114.152568,22.000524],[114.160308,21.995343],[114.17234,21.999776],[114.17395,21.992939],[114.167972,21.983111],[114.153947,21.975099]]],[[[113.138039,21.919213],[113.13597,21.925465],[113.144707,21.937007],[113.150455,21.937915],[113.158731,21.927015],[113.156202,21.919587],[113.141258,21.912854],[113.125164,21.896126],[113.127617,21.910395],[113.138039,21.919213]]],[[[113.665306,22.039239],[113.67136,22.045433],[113.675805,22.029361],[113.666532,22.02338],[113.670211,22.033419],[113.665306,22.039239]]],[[[113.683163,21.938824],[113.6814,21.949296],[113.692819,21.962973],[113.70669,21.957203],[113.709449,21.944968],[113.683163,21.938824]]],[[[113.901733,22.114184],[113.886405,22.111249],[113.890161,22.122775],[113.900047,22.123683],[113.901733,22.114184]]],[[[113.707687,22.143532],[113.722094,22.141878],[113.707993,22.134728],[113.707687,22.143532]]],[[[114.007493,22.026958],[114.013471,22.038225],[114.017992,22.028346],[114.007493,22.026958]]],[[[113.702705,22.101696],[113.711059,22.091769],[113.700866,22.094864],[113.702705,22.101696]]],[[[114.126664,21.961744],[114.139003,21.970345],[114.142835,21.965484],[114.126664,21.961744]]],[[[113.576866,22.212075],[113.590738,22.208982],[113.586523,22.201036],[113.576176,22.201036],[113.576866,22.212075]]]]}},{"type":"Feature","properties":{"adcode":440500,"name":"汕头市","center":[116.708463,23.37102],"centroid":[116.575091,23.322105],"childrenNum":7,"level":"city","parent":{"adcode":440000},"subFeatureIndex":4,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[116.630108,23.429378],[116.650264,23.426312],[116.654403,23.431069],[116.668504,23.428638],[116.681915,23.438627],[116.68659,23.429483],[116.702608,23.438204],[116.698469,23.446977],[116.702378,23.456172],[116.7128,23.459236],[116.717935,23.471072],[116.71326,23.493103],[116.70483,23.517561],[116.70621,23.542541],[116.719391,23.552522],[116.718701,23.563135],[116.702991,23.574433],[116.714946,23.584728],[116.71303,23.597925],[116.738934,23.60162],[116.747211,23.59233],[116.755794,23.575648],[116.761389,23.573958],[116.772578,23.584147],[116.785223,23.579554],[116.794496,23.589532],[116.791737,23.59935],[116.795799,23.610488],[116.805379,23.606793],[116.815035,23.612493],[116.827527,23.611807],[116.831895,23.622152],[116.822545,23.627429],[116.821319,23.635609],[116.830976,23.645793],[116.83818,23.644632],[116.863087,23.632601],[116.86278,23.623471],[116.874812,23.616082],[116.891289,23.622785],[116.900639,23.61946],[116.900563,23.611965],[116.911062,23.602201],[116.909146,23.58193],[116.918342,23.561603],[116.91704,23.531662],[116.899183,23.518881],[116.88853,23.501609],[116.882399,23.455115],[116.873433,23.445074],[116.8719,23.414631],[116.858488,23.408023],[116.833045,23.36578],[116.806452,23.347958],[116.782771,23.313842],[116.786986,23.288554],[116.791814,23.278236],[116.791277,23.265801],[116.799861,23.244209],[116.816644,23.243044],[116.823542,23.230447],[116.814728,23.207631],[116.806758,23.20096],[116.788518,23.199266],[116.744682,23.215042],[116.724756,23.214407],[116.71487,23.20996],[116.701458,23.198207],[116.676014,23.168078],[116.665285,23.158174],[116.651874,23.152931],[116.597691,23.146522],[116.577765,23.141755],[116.566423,23.134339],[116.552245,23.114527],[116.552551,23.105891],[116.520287,23.094553],[116.509787,23.100646],[116.478826,23.104249],[116.453919,23.091161],[116.445488,23.093281],[116.446561,23.085863],[116.437212,23.080246],[116.426865,23.063393],[116.405484,23.053959],[116.395904,23.044524],[116.3805,23.039807],[116.370077,23.046856],[116.374982,23.050408],[116.368314,23.05751],[116.346703,23.05857],[116.340648,23.086498],[116.327543,23.09646],[116.312829,23.102712],[116.302866,23.096036],[116.29137,23.099162],[116.29183,23.110501],[116.261558,23.12295],[116.244545,23.140431],[116.254891,23.152507],[116.252362,23.176286],[116.262325,23.175174],[116.252745,23.191536],[116.26447,23.196724],[116.269222,23.204984],[116.261328,23.205301],[116.259719,23.216842],[116.26677,23.227906],[116.279415,23.226],[116.294129,23.239815],[116.298727,23.263526],[116.305548,23.272839],[116.302406,23.279348],[116.312752,23.286649],[116.308997,23.296067],[116.323558,23.302839],[116.328846,23.299559],[116.330839,23.316487],[116.319343,23.325903],[116.319573,23.332303],[116.329689,23.336376],[116.348848,23.335794],[116.354903,23.347324],[116.349768,23.358112],[116.350994,23.386559],[116.34517,23.399565],[116.34563,23.408182],[116.331758,23.424409],[116.322868,23.421767],[116.316891,23.442273],[116.319649,23.449196],[116.332371,23.443647],[116.350764,23.449619],[116.355363,23.472288],[116.377051,23.500658],[116.401115,23.500394],[116.408856,23.512596],[116.41491,23.510271],[116.415676,23.479737],[116.426482,23.468642],[116.435832,23.473344],[116.448707,23.488349],[116.465797,23.497647],[116.482581,23.500552],[116.492314,23.492839],[116.491164,23.478734],[116.482658,23.465472],[116.472005,23.455802],[116.465721,23.442485],[116.469553,23.437622],[116.512316,23.439472],[116.523429,23.437517],[116.544887,23.424356],[116.553088,23.412305],[116.561978,23.38693],[116.568339,23.378258],[116.569105,23.388093],[116.577995,23.40316],[116.586348,23.409609],[116.577075,23.412252],[116.58198,23.423194],[116.591177,23.426524],[116.58949,23.443383],[116.579834,23.447981],[116.580294,23.461139],[116.588111,23.461984],[116.58995,23.453265],[116.605431,23.443013],[116.614015,23.433289],[116.630108,23.429378]]],[[[117.14542,23.456119],[117.145113,23.450095],[117.154769,23.445074],[117.148562,23.437992],[117.136836,23.439895],[117.135993,23.422665],[117.145496,23.411829],[117.142967,23.400411],[117.124268,23.389732],[117.114075,23.399459],[117.102196,23.393644],[117.098747,23.405063],[117.079128,23.409027],[117.051155,23.400781],[117.029927,23.406332],[117.028854,23.414789],[116.999502,23.416216],[116.981722,23.414525],[116.964708,23.416375],[116.945089,23.422824],[116.944706,23.440001],[116.951067,23.44629],[116.961413,23.447241],[116.974441,23.457123],[116.98563,23.460822],[117.001341,23.457334],[117.016669,23.438785],[117.0228,23.43683],[117.051232,23.467849],[117.06449,23.475669],[117.079435,23.472922],[117.084569,23.461878],[117.093383,23.459395],[117.103882,23.464573],[117.109247,23.476831],[117.129479,23.48333],[117.132928,23.47271],[117.12764,23.458814],[117.141281,23.460029],[117.14542,23.456119]]]]}},{"type":"Feature","properties":{"adcode":440600,"name":"佛山市","center":[113.122717,23.028762],"centroid":[112.949778,23.004313],"childrenNum":5,"level":"city","parent":{"adcode":440000},"subFeatureIndex":5,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[112.975184,23.463622],[112.972962,23.450042],[112.961926,23.44444],[112.96024,23.425995],[112.974188,23.434081],[112.978633,23.441586],[112.989132,23.443277],[112.982771,23.434451],[112.988673,23.419811],[113.001088,23.406332],[112.990588,23.402631],[112.988366,23.390102],[112.980626,23.380268],[112.989822,23.354728],[113.012583,23.352612],[113.018331,23.341347],[113.034808,23.357372],[113.043392,23.351131],[113.027604,23.33352],[113.023466,23.324898],[113.037567,23.320084],[113.032509,23.300881],[113.042549,23.283422],[113.051439,23.278395],[113.052742,23.26342],[113.044925,23.2522],[113.053508,23.253418],[113.070215,23.248813],[113.079795,23.250083],[113.081941,23.261726],[113.072284,23.284268],[113.086156,23.285274],[113.090524,23.28993],[113.105545,23.289718],[113.11022,23.295961],[113.105775,23.302733],[113.124704,23.307653],[113.128,23.31453],[113.150838,23.297972],[113.150608,23.289983],[113.160877,23.286649],[113.177738,23.271304],[113.182029,23.251459],[113.176511,23.236587],[113.177508,23.220866],[113.191072,23.214937],[113.204867,23.201172],[113.209006,23.192171],[113.209465,23.17708],[113.1877,23.159127],[113.186857,23.14827],[113.191992,23.14345],[113.211535,23.142603],[113.209695,23.121838],[113.203718,23.121891],[113.208163,23.099692],[113.215826,23.100646],[113.208776,23.083531],[113.193678,23.083902],[113.177201,23.076695],[113.184865,23.05963],[113.195747,23.056185],[113.211688,23.043305],[113.225713,23.041874],[113.254912,23.044842],[113.25836,23.013989],[113.250007,23.009058],[113.251923,22.970348],[113.267557,22.958786],[113.285183,22.951095],[113.298212,22.934014],[113.282424,22.927383],[113.28595,22.901438],[113.27706,22.894699],[113.300434,22.87708],[113.301354,22.866094],[113.296296,22.862485],[113.309631,22.851179],[113.312083,22.830369],[113.335994,22.817945],[113.364273,22.823467],[113.37439,22.822618],[113.393396,22.809822],[113.38305,22.799308],[113.356533,22.792989],[113.365116,22.772595],[113.358756,22.764893],[113.342432,22.758254],[113.329327,22.749011],[113.329097,22.741255],[113.301431,22.736261],[113.284877,22.738864],[113.270546,22.726485],[113.260889,22.730311],[113.254069,22.74083],[113.243033,22.745345],[113.236289,22.740777],[113.222264,22.712246],[113.204254,22.697314],[113.199273,22.682539],[113.201035,22.675949],[113.189386,22.673876],[113.17199,22.680679],[113.161414,22.673717],[113.113362,22.701618],[113.102096,22.698536],[113.087228,22.717878],[113.075273,22.777959],[113.059562,22.801219],[113.049523,22.807751],[113.025229,22.802335],[112.988596,22.800423],[112.980396,22.802759],[112.963995,22.826971],[112.923454,22.856274],[112.905904,22.851444],[112.900463,22.845286],[112.888967,22.845764],[112.883679,22.852187],[112.873639,22.848206],[112.867892,22.835412],[112.860305,22.833767],[112.851491,22.839978],[112.844594,22.835306],[112.850648,22.830157],[112.852947,22.809609],[112.843061,22.810671],[112.835857,22.803821],[112.819303,22.803025],[112.812099,22.791714],[112.822369,22.784545],[112.818001,22.765424],[112.811486,22.765318],[112.803899,22.752145],[112.810413,22.750498],[112.807961,22.72877],[112.778302,22.715221],[112.769489,22.701246],[112.755771,22.692425],[112.744505,22.696729],[112.741286,22.691362],[112.734082,22.698217],[112.717989,22.691681],[112.708256,22.71028],[112.69538,22.695613],[112.692392,22.705232],[112.706646,22.718303],[112.709022,22.729567],[112.698599,22.733764],[112.707796,22.74407],[112.702891,22.756395],[112.69653,22.75905],[112.680436,22.747045],[112.687563,22.737164],[112.701128,22.728398],[112.690322,22.726379],[112.683885,22.733923],[112.675914,22.727495],[112.682659,22.72165],[112.680053,22.713999],[112.665109,22.724041],[112.672083,22.713521],[112.664649,22.713043],[112.660127,22.727335],[112.646256,22.726698],[112.641044,22.712883],[112.625104,22.711077],[112.620965,22.70114],[112.616674,22.707995],[112.604182,22.706241],[112.587321,22.696357],[112.600273,22.688439],[112.595981,22.680786],[112.584716,22.677809],[112.583566,22.664362],[112.577359,22.656388],[112.546474,22.642248],[112.536281,22.648627],[112.540189,22.661864],[112.535591,22.67765],[112.554214,22.682061],[112.560038,22.695826],[112.549462,22.70098],[112.53835,22.71825],[112.523176,22.728079],[112.507542,22.723457],[112.500108,22.728664],[112.47704,22.715912],[112.47658,22.704009],[112.463168,22.711661],[112.448607,22.70842],[112.435809,22.680998],[112.426306,22.670847],[112.411898,22.671219],[112.401475,22.690565],[112.403085,22.700183],[112.410748,22.704488],[112.399023,22.726485],[112.392739,22.744442],[112.392509,22.76978],[112.413507,22.774454],[112.441403,22.787731],[112.443779,22.791661],[112.463398,22.789271],[112.482788,22.795006],[112.489992,22.809131],[112.500414,22.812476],[112.499035,22.826918],[112.510531,22.823042],[112.52034,22.82729],[112.527544,22.815131],[112.532449,22.822883],[112.557433,22.826122],[112.571841,22.833077],[112.57414,22.84741],[112.563104,22.854151],[112.557816,22.863387],[112.561648,22.873312],[112.587168,22.862962],[112.591613,22.869809],[112.604258,22.870552],[112.632384,22.877664],[112.635526,22.883714],[112.659284,22.887163],[112.676374,22.895442],[112.677524,22.902764],[112.685418,22.89836],[112.692468,22.901969],[112.68649,22.907593],[112.696683,22.917196],[112.690092,22.927277],[112.672696,22.940486],[112.686874,22.948443],[112.699749,22.94839],[112.708869,22.927754],[112.734082,22.940751],[112.74144,22.962923],[112.736228,22.963878],[112.734772,22.98122],[112.751556,22.99103],[112.759679,22.979735],[112.777076,22.996545],[112.787882,23.000999],[112.788572,23.001158],[112.789721,23.00137],[112.790564,23.00206],[112.788189,22.991879],[112.794856,22.990394],[112.820453,23.010225],[112.834094,23.014784],[112.819227,23.052051],[112.818767,23.072614],[112.805355,23.091426],[112.799684,23.109971],[112.798458,23.13863],[112.793936,23.150071],[112.775773,23.166754],[112.771941,23.191694],[112.772938,23.199742],[112.764431,23.202919],[112.766347,23.21356],[112.772861,23.215678],[112.769412,23.223354],[112.781521,23.225842],[112.786349,23.205937],[112.7934,23.208213],[112.795316,23.226318],[112.799837,23.228224],[112.806582,23.212395],[112.80091,23.200431],[112.810873,23.200378],[112.815012,23.217107],[112.831949,23.215678],[112.842984,23.224465],[112.8472,23.238651],[112.823595,23.24569],[112.844977,23.263314],[112.847966,23.275061],[112.857546,23.287231],[112.866895,23.293263],[112.87134,23.315588],[112.883296,23.347324],[112.863907,23.349122],[112.859691,23.364563],[112.838386,23.387352],[112.814092,23.391793],[112.805892,23.387511],[112.810107,23.371332],[112.806582,23.367419],[112.787269,23.371173],[112.785736,23.394173],[112.794166,23.407547],[112.796389,23.429113],[112.803669,23.435773],[112.802673,23.444229],[112.811793,23.462513],[112.831029,23.468114],[112.838156,23.484704],[112.845743,23.487134],[112.845284,23.502929],[112.850418,23.527596],[112.840762,23.536046],[112.831642,23.537577],[112.830493,23.545762],[112.827197,23.567042],[112.848502,23.566936],[112.86291,23.57343],[112.871647,23.570896],[112.893412,23.55268],[112.900309,23.566725],[112.91533,23.55231],[112.911192,23.541643],[112.893259,23.526434],[112.887741,23.517402],[112.903298,23.488613],[112.928435,23.483488],[112.925753,23.472393],[112.933493,23.47065],[112.930198,23.463094],[112.94223,23.460188],[112.957634,23.447558],[112.965835,23.452155],[112.966294,23.460663],[112.975184,23.463622]]],[[[112.789721,23.00137],[112.788572,23.001158],[112.787882,23.000999],[112.790564,23.00206],[112.789721,23.00137]]]]}},{"type":"Feature","properties":{"adcode":440700,"name":"江门市","center":[113.094942,22.590431],"centroid":[112.67645,22.284349],"childrenNum":7,"level":"city","parent":{"adcode":440000},"subFeatureIndex":6,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[112.47658,22.704009],[112.47704,22.715912],[112.500108,22.728664],[112.507542,22.723457],[112.523176,22.728079],[112.53835,22.71825],[112.549462,22.70098],[112.560038,22.695826],[112.554214,22.682061],[112.535591,22.67765],[112.540189,22.661864],[112.536281,22.648627],[112.546474,22.642248],[112.577359,22.656388],[112.583566,22.664362],[112.584716,22.677809],[112.595981,22.680786],[112.600273,22.688439],[112.587321,22.696357],[112.604182,22.706241],[112.616674,22.707995],[112.620965,22.70114],[112.625104,22.711077],[112.641044,22.712883],[112.646256,22.726698],[112.660127,22.727335],[112.664649,22.713043],[112.672083,22.713521],[112.665109,22.724041],[112.680053,22.713999],[112.682659,22.72165],[112.675914,22.727495],[112.683885,22.733923],[112.690322,22.726379],[112.701128,22.728398],[112.687563,22.737164],[112.680436,22.747045],[112.69653,22.75905],[112.702891,22.756395],[112.707796,22.74407],[112.698599,22.733764],[112.709022,22.729567],[112.706646,22.718303],[112.692392,22.705232],[112.69538,22.695613],[112.708256,22.71028],[112.717989,22.691681],[112.734082,22.698217],[112.741286,22.691362],[112.744505,22.696729],[112.755771,22.692425],[112.769489,22.701246],[112.778302,22.715221],[112.807961,22.72877],[112.810413,22.750498],[112.803899,22.752145],[112.811486,22.765318],[112.818001,22.765424],[112.822369,22.784545],[112.812099,22.791714],[112.819303,22.803025],[112.835857,22.803821],[112.843061,22.810671],[112.852947,22.809609],[112.850648,22.830157],[112.844594,22.835306],[112.851491,22.839978],[112.860305,22.833767],[112.867892,22.835412],[112.873639,22.848206],[112.883679,22.852187],[112.888967,22.845764],[112.900463,22.845286],[112.905904,22.851444],[112.923454,22.856274],[112.963995,22.826971],[112.980396,22.802759],[112.988596,22.800423],[113.025229,22.802335],[113.049523,22.807751],[113.059562,22.801219],[113.075273,22.777959],[113.087228,22.717878],[113.102096,22.698536],[113.113362,22.701618],[113.161414,22.673717],[113.160801,22.665425],[113.17061,22.651392],[113.163176,22.651392],[113.157199,22.63204],[113.157045,22.614228],[113.176358,22.590032],[113.185095,22.574289],[113.188697,22.552798],[113.187087,22.539924],[113.215367,22.513107],[113.2251,22.497142],[113.2251,22.497142],[113.240121,22.476172],[113.245179,22.457276],[113.256444,22.43779],[113.256368,22.410794],[113.262652,22.392048],[113.24947,22.399344],[113.237285,22.391782],[113.212224,22.398599],[113.209389,22.388054],[113.192145,22.381662],[113.18839,22.394924],[113.181646,22.40238],[113.165399,22.40025],[113.1631,22.387947],[113.169154,22.377987],[113.183255,22.369837],[113.193065,22.358171],[113.185478,22.294762],[113.176281,22.280158],[113.176128,22.267792],[113.168541,22.238417],[113.158885,22.228712],[113.129686,22.218208],[113.120413,22.209622],[113.115584,22.215115],[113.106388,22.209355],[113.109453,22.204609],[113.097421,22.187702],[113.091903,22.136595],[113.087152,22.126137],[113.078568,22.116212],[113.045844,22.088513],[113.035498,22.077357],[113.03067,22.066521],[113.032279,22.045753],[113.050672,22.018254],[113.054198,22.003835],[113.051822,21.977556],[113.04753,21.956455],[113.037797,21.935297],[112.989669,21.86956],[112.972042,21.857157],[112.944529,21.84208],[112.911345,21.838979],[112.893565,21.844326],[112.885135,21.852185],[112.86291,21.883084],[112.840915,21.920496],[112.832332,21.924557],[112.800374,21.924824],[112.792327,21.921297],[112.767113,21.89046],[112.737454,21.864214],[112.686031,21.810531],[112.651697,21.762124],[112.639358,21.756025],[112.598817,21.75014],[112.558812,21.750996],[112.535591,21.754099],[112.523406,21.761],[112.497502,21.785393],[112.47773,21.795663],[112.439411,21.803685],[112.427379,21.790207],[112.415806,21.734784],[112.409522,21.728417],[112.35327,21.707118],[112.323995,21.705994],[112.315105,21.700749],[112.307824,21.704174],[112.303456,21.71445],[112.310047,21.732483],[112.304529,21.744415],[112.313955,21.751263],[112.326754,21.767527],[112.333574,21.770844],[112.32775,21.799193],[112.34576,21.811814],[112.342464,21.818499],[112.358558,21.834006],[112.351737,21.849298],[112.370054,21.861434],[112.356872,21.872019],[112.343077,21.876723],[112.348365,21.885276],[112.350818,21.901631],[112.345147,21.906067],[112.346909,21.920442],[112.341085,21.919213],[112.340472,21.942831],[112.331045,21.9595],[112.323841,21.962919],[112.318477,21.976381],[112.299011,21.985248],[112.276939,21.982524],[112.273644,21.99358],[112.263757,22.001432],[112.239387,22.006185],[112.225669,22.012219],[112.232029,22.019589],[112.221607,22.01788],[112.216779,22.03956],[112.231263,22.0528],[112.226818,22.063585],[112.212334,22.069243],[112.199075,22.064706],[112.185051,22.066841],[112.173785,22.085204],[112.16773,22.085417],[112.156541,22.095718],[112.149721,22.090915],[112.143206,22.095185],[112.126116,22.096572],[112.126806,22.105538],[112.106727,22.125497],[112.105884,22.135795],[112.089867,22.137342],[112.086341,22.131313],[112.073236,22.130192],[112.072776,22.125177],[112.034381,22.113437],[112.027254,22.127044],[112.038826,22.131366],[112.051165,22.14684],[112.03668,22.168019],[112.041585,22.187489],[112.052161,22.194742],[112.051625,22.207542],[112.037906,22.215061],[112.037906,22.232178],[112.024112,22.235217],[112.021353,22.242842],[112.004262,22.248333],[112.010547,22.266193],[112.019973,22.268271],[112.036604,22.262781],[112.049479,22.270777],[112.061511,22.28357],[112.068332,22.295988],[112.062201,22.304515],[112.068945,22.318477],[112.065036,22.324392],[112.081896,22.351086],[112.098757,22.351618],[112.107877,22.347463],[112.119985,22.35636],[112.119832,22.337766],[112.128185,22.349754],[112.1347,22.349221],[112.13447,22.337233],[112.147268,22.339098],[112.150564,22.35327],[112.144433,22.358597],[112.153323,22.368452],[112.154012,22.37591],[112.165431,22.385018],[112.172022,22.381769],[112.175088,22.36989],[112.189189,22.36467],[112.186353,22.376069],[112.192791,22.384432],[112.188423,22.398066],[112.196163,22.404936],[112.211184,22.399078],[112.226895,22.408025],[112.243678,22.408238],[112.235938,22.427035],[112.242835,22.445191],[112.252875,22.458926],[112.262531,22.480803],[112.25732,22.500229],[112.275636,22.510659],[112.301233,22.515289],[112.307364,22.525399],[112.302153,22.544818],[112.307747,22.556841],[112.303609,22.560139],[112.309127,22.572427],[112.328133,22.569874],[112.331505,22.563916],[112.323918,22.554554],[112.33641,22.545457],[112.342541,22.55067],[112.358635,22.545563],[112.353577,22.556682],[112.342694,22.558065],[112.344533,22.564342],[112.364306,22.558544],[112.366835,22.550404],[112.377411,22.552479],[112.371127,22.558278],[112.379404,22.57881],[112.380247,22.594978],[112.390363,22.594765],[112.396034,22.602636],[112.398333,22.619917],[112.405077,22.618216],[112.407146,22.628425],[112.400402,22.635921],[112.416113,22.647723],[112.412741,22.656814],[112.419562,22.664202],[112.429218,22.666063],[112.435272,22.661279],[112.428375,22.657133],[112.443243,22.642248],[112.440867,22.627627],[112.435732,22.619971],[112.441787,22.606039],[112.456348,22.600562],[112.463552,22.584873],[112.475047,22.585511],[112.483171,22.592372],[112.505626,22.597849],[112.52172,22.607262],[112.515742,22.626617],[112.505243,22.638473],[112.506545,22.657664],[112.500261,22.668667],[112.489992,22.676215],[112.492674,22.686897],[112.47658,22.704009]]],[[[112.77539,21.564101],[112.761289,21.573743],[112.770255,21.583224],[112.76696,21.588099],[112.753548,21.583546],[112.756001,21.611932],[112.744888,21.604006],[112.735385,21.602506],[112.73094,21.613752],[112.738681,21.630353],[112.752399,21.649896],[112.77608,21.655625],[112.780295,21.671524],[112.763358,21.681802],[112.754621,21.682658],[112.749257,21.671417],[112.734542,21.666599],[112.727568,21.672381],[112.713467,21.673344],[112.70542,21.682605],[112.712164,21.688118],[112.707872,21.698501],[112.724196,21.719694],[112.740443,21.727507],[112.765351,21.733874],[112.77493,21.732269],[112.782287,21.737994],[112.776386,21.751103],[112.781368,21.768329],[112.789108,21.759556],[112.800067,21.759502],[112.806888,21.769346],[112.817311,21.767367],[112.840839,21.776674],[112.859232,21.770576],[112.876015,21.772716],[112.875785,21.750354],[112.866436,21.742542],[112.832945,21.736389],[112.826124,21.729005],[112.81869,21.712202],[112.811256,21.703746],[112.805432,21.68132],[112.813096,21.674843],[112.821066,21.653697],[112.805432,21.639509],[112.798611,21.618572],[112.798918,21.610861],[112.81164,21.599935],[112.817311,21.59008],[112.806735,21.578778],[112.77539,21.564101]]],[[[112.530993,21.583921],[112.524938,21.586277],[112.524249,21.596293],[112.535055,21.628479],[112.544328,21.638866],[112.550382,21.633726],[112.570461,21.64572],[112.570155,21.652787],[112.561648,21.657177],[112.559808,21.665475],[112.572377,21.672381],[112.589237,21.676128],[112.592303,21.693042],[112.610006,21.702676],[112.631465,21.706904],[112.648631,21.715092],[112.657215,21.708242],[112.664036,21.713754],[112.669707,21.693952],[112.665952,21.683943],[112.640431,21.673719],[112.639895,21.6545],[112.650241,21.646362],[112.665645,21.642507],[112.659821,21.630942],[112.637672,21.632655],[112.634683,21.623766],[112.62495,21.616162],[112.621502,21.606737],[112.610543,21.611396],[112.598817,21.606416],[112.595138,21.613324],[112.583566,21.613324],[112.568622,21.619429],[112.54701,21.60754],[112.544788,21.600631],[112.560881,21.59474],[112.562414,21.59008],[112.546703,21.586813],[112.53766,21.591259],[112.530993,21.583921]]],[[[112.435426,21.663548],[112.449987,21.673077],[112.458417,21.690098],[112.466081,21.686673],[112.468073,21.66692],[112.460869,21.660764],[112.456348,21.648772],[112.445772,21.649146],[112.435426,21.663548]]],[[[112.680513,21.69818],[112.6799,21.707493],[112.686184,21.713701],[112.690092,21.699893],[112.680513,21.69818]]],[[[113.025459,21.847801],[113.020247,21.849619],[113.007372,21.869186],[113.023466,21.879823],[113.045844,21.882763],[113.051975,21.868812],[113.04684,21.854752],[113.032663,21.854698],[113.025459,21.847801]]],[[[112.883449,21.593776],[112.867049,21.595597],[112.861991,21.60663],[112.883066,21.615466],[112.903222,21.610861],[112.902532,21.602292],[112.893105,21.594794],[112.883449,21.593776]]],[[[112.656372,21.595704],[112.65369,21.60588],[112.667025,21.607862],[112.656372,21.595704]]],[[[112.587934,21.58617],[112.579274,21.591634],[112.581727,21.600578],[112.59989,21.599185],[112.60035,21.591741],[112.587934,21.58617]]],[[[112.674228,21.610646],[112.664802,21.612467],[112.672312,21.617608],[112.674228,21.610646]]],[[[112.801677,21.564261],[112.794013,21.568922],[112.807195,21.577439],[112.818077,21.579635],[112.814245,21.569458],[112.801677,21.564261]]]]}},{"type":"Feature","properties":{"adcode":440800,"name":"湛江市","center":[110.364977,21.274898],"centroid":[110.109823,21.047897],"childrenNum":9,"level":"city","parent":{"adcode":440000},"subFeatureIndex":7,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[110.387592,21.890407],[110.398398,21.861755],[110.387362,21.852239],[110.372571,21.856355],[110.362532,21.868224],[110.350729,21.863947],[110.354255,21.856462],[110.351572,21.845663],[110.342606,21.837322],[110.339387,21.806359],[110.345901,21.800851],[110.348124,21.809354],[110.357857,21.815451],[110.365137,21.807055],[110.350193,21.809675],[110.348354,21.802509],[110.362225,21.797642],[110.377246,21.806627],[110.37556,21.798765],[110.386749,21.795556],[110.388359,21.789084],[110.380312,21.784484],[110.373184,21.784163],[110.370042,21.770148],[110.375177,21.760305],[110.365367,21.748],[110.368739,21.721835],[110.351419,21.713647],[110.369889,21.689349],[110.367666,21.683354],[110.385753,21.674736],[110.39242,21.681588],[110.396712,21.673612],[110.402843,21.689188],[110.40974,21.686619],[110.412346,21.675753],[110.382457,21.667456],[110.385753,21.657552],[110.407058,21.648611],[110.396865,21.633137],[110.405295,21.634636],[110.405525,21.61809],[110.412653,21.616966],[110.412653,21.60438],[110.406522,21.60181],[110.413342,21.586063],[110.42024,21.591312],[110.417481,21.598168],[110.427214,21.600096],[110.443154,21.58692],[110.439399,21.581082],[110.427904,21.580653],[110.429666,21.575725],[110.422692,21.562226],[110.434494,21.553868],[110.443768,21.556386],[110.450358,21.550439],[110.45534,21.554511],[110.470361,21.547546],[110.475572,21.554136],[110.483849,21.543849],[110.477718,21.526221],[110.485152,21.513735],[110.497567,21.517111],[110.510442,21.499587],[110.508373,21.490958],[110.508066,21.490583],[110.509063,21.479273],[110.490823,21.482811],[110.494118,21.474234],[110.484539,21.456705],[110.484002,21.447108],[110.49021,21.438744],[110.494348,21.443194],[110.508066,21.436439],[110.50845,21.427002],[110.521785,21.414132],[110.53305,21.411558],[110.531288,21.39874],[110.539258,21.376696],[110.546998,21.371547],[110.558801,21.37616],[110.558187,21.370581],[110.568457,21.361408],[110.556961,21.344455],[110.56041,21.337963],[110.548225,21.333456],[110.55152,21.32648],[110.538875,21.330183],[110.529755,21.318056],[110.523011,21.316607],[110.522168,21.303567],[110.555582,21.286929],[110.570296,21.281884],[110.592138,21.265351],[110.6126,21.286231],[110.62287,21.291062],[110.637967,21.289022],[110.644635,21.254507],[110.645401,21.227394],[110.626395,21.215688],[110.562786,21.211016],[110.534736,21.204411],[110.52439,21.206344],[110.501092,21.217514],[110.491896,21.216118],[110.481397,21.207579],[110.46331,21.203015],[110.460475,21.193079],[110.451125,21.186419],[110.439706,21.186312],[110.427674,21.193563],[110.422386,21.190716],[110.409894,21.146508],[110.401234,21.131088],[110.388282,21.125823],[110.37694,21.133345],[110.371498,21.131035],[110.359696,21.113894],[110.348967,21.106048],[110.334406,21.101427],[110.311644,21.099761],[110.29693,21.093795],[110.249644,21.045258],[110.247652,21.020741],[110.23424,21.014342],[110.216997,21.04058],[110.217993,21.053053],[110.211249,21.054182],[110.203739,21.040312],[110.201899,21.029344],[110.207264,21.009718],[110.205041,21.003426],[110.180747,20.981753],[110.179521,20.960453],[110.175689,20.94028],[110.177682,20.907083],[110.184196,20.891746],[110.20121,20.867312],[110.209716,20.860207],[110.233244,20.858485],[110.257691,20.843305],[110.269034,20.839698],[110.291489,20.848203],[110.321454,20.848634],[110.351189,20.841528],[110.364448,20.835337],[110.393723,20.816655],[110.404759,20.783269],[110.407748,20.764365],[110.407365,20.732098],[110.405295,20.721377],[110.392267,20.682905],[110.41135,20.671156],[110.442235,20.671479],[110.466146,20.680264],[110.486915,20.64011],[110.493275,20.613856],[110.49979,20.572443],[110.522934,20.514728],[110.546462,20.48079],[110.55175,20.462982],[110.545772,20.427521],[110.541557,20.420665],[110.516727,20.404361],[110.491666,20.374125],[110.483542,20.358302],[110.452274,20.311203],[110.43641,20.297157],[110.425145,20.291646],[110.404529,20.289161],[110.389585,20.293213],[110.376173,20.288621],[110.348814,20.25901],[110.327508,20.251552],[110.296777,20.249175],[110.285664,20.238312],[110.277464,20.24885],[110.258305,20.253174],[110.21646,20.250526],[110.192243,20.227664],[110.168639,20.219502],[110.146337,20.21761],[110.117981,20.219773],[110.082574,20.258686],[110.07652,20.259929],[110.026246,20.257389],[109.993368,20.254471],[109.986318,20.251714],[109.968461,20.228259],[109.949302,20.216691],[109.929223,20.211718],[109.913512,20.219448],[109.909297,20.230691],[109.91742,20.282407],[109.915811,20.316875],[109.902476,20.339508],[109.871131,20.361705],[109.861245,20.376663],[109.860709,20.391997],[109.864924,20.401716],[109.886612,20.410084],[109.895579,20.427521],[109.898798,20.447276],[109.896882,20.461848],[109.888298,20.475448],[109.83994,20.489478],[109.824459,20.502913],[109.816565,20.518774],[109.81212,20.541593],[109.813576,20.574655],[109.803,20.600754],[109.793344,20.615635],[109.77748,20.622536],[109.749124,20.617953],[109.745062,20.621134],[109.732724,20.674767],[109.729888,20.719653],[109.711725,20.774706],[109.693026,20.807394],[109.664823,20.862306],[109.657082,20.888033],[109.654937,20.903532],[109.655626,20.929251],[109.664133,21.010363],[109.673866,21.068265],[109.667122,21.112604],[109.667505,21.121793],[109.674939,21.136622],[109.720768,21.183734],[109.758551,21.21746],[109.763992,21.226266],[109.765218,21.262184],[109.760083,21.335548],[109.757478,21.346762],[109.770659,21.35953],[109.836798,21.359155],[109.862165,21.362642],[109.868832,21.365807],[109.889754,21.395898],[109.904699,21.430112],[109.894353,21.442283],[109.843465,21.442926],[109.819171,21.445285],[109.785604,21.456919],[109.788363,21.490476],[109.774185,21.507626],[109.772882,21.531258],[109.754795,21.556333],[109.752113,21.5776],[109.754489,21.582582],[109.743836,21.60106],[109.746212,21.622963],[109.753799,21.627836],[109.757018,21.644917],[109.765985,21.657231],[109.766368,21.668045],[109.777863,21.670507],[109.786064,21.646523],[109.784684,21.63817],[109.795183,21.63046],[109.807216,21.628907],[109.809055,21.642989],[109.820014,21.637849],[109.844615,21.638331],[109.853275,21.649949],[109.864157,21.646844],[109.874044,21.658087],[109.884773,21.648076],[109.898338,21.649628],[109.915811,21.668794],[109.906844,21.672488],[109.913742,21.683782],[109.904622,21.686994],[109.915351,21.705619],[109.923781,21.704442],[109.922632,21.727507],[109.941715,21.73671],[109.931292,21.752173],[109.939952,21.768115],[109.935584,21.798658],[109.940718,21.807964],[109.936197,21.81283],[109.946773,21.824328],[109.945393,21.830317],[109.953363,21.842294],[109.944933,21.846839],[109.978654,21.866246],[109.986241,21.879128],[110.005017,21.880198],[110.00655,21.875119],[110.022184,21.869667],[110.038048,21.869988],[110.054372,21.856837],[110.082038,21.864481],[110.092154,21.883993],[110.097212,21.886291],[110.101197,21.870255],[110.107942,21.870789],[110.107175,21.882603],[110.11982,21.901684],[110.133462,21.899867],[110.141815,21.881801],[110.150859,21.897088],[110.161281,21.894255],[110.18205,21.899653],[110.212015,21.893079],[110.210099,21.887467],[110.236003,21.878647],[110.254779,21.881694],[110.272482,21.895003],[110.283748,21.892224],[110.290416,21.917984],[110.312027,21.906601],[110.32383,21.892759],[110.337318,21.887841],[110.34866,21.890941],[110.368126,21.889017],[110.381001,21.892865],[110.387592,21.890407]]],[[[110.714758,21.526811],[110.729396,21.523863],[110.72817,21.531097],[110.735987,21.533348],[110.725257,21.547761],[110.727403,21.573636],[110.734301,21.575564],[110.736523,21.58542],[110.747176,21.588741],[110.743344,21.606201],[110.73683,21.609522],[110.736217,21.623874],[110.749858,21.635922],[110.75461,21.634797],[110.761507,21.647969],[110.771853,21.647808],[110.786874,21.633298],[110.798216,21.631852],[110.79883,21.619857],[110.793618,21.596025],[110.795611,21.579582],[110.813697,21.583064],[110.817759,21.569083],[110.826342,21.559815],[110.818679,21.551672],[110.822127,21.541974],[110.828872,21.542671],[110.848031,21.527668],[110.848721,21.517058],[110.856231,21.503714],[110.840674,21.493638],[110.857841,21.496103],[110.867344,21.506125],[110.876004,21.49814],[110.874471,21.484848],[110.877843,21.476754],[110.870409,21.471125],[110.883897,21.469678],[110.895316,21.460833],[110.895853,21.451236],[110.880449,21.444856],[110.893554,21.436653],[110.901907,21.425768],[110.910337,21.439817],[110.927121,21.441586],[110.929037,21.447912],[110.938233,21.441854],[110.950112,21.443731],[110.965363,21.433329],[110.977012,21.406785],[110.950879,21.388282],[110.929113,21.376052],[110.907272,21.369669],[110.888572,21.367577],[110.848414,21.369401],[110.796377,21.374765],[110.768558,21.364948],[110.741351,21.344133],[110.713149,21.312582],[110.688855,21.278126],[110.659579,21.239636],[110.645401,21.227394],[110.644635,21.254507],[110.637967,21.289022],[110.62287,21.291062],[110.6126,21.286231],[110.592138,21.265351],[110.570296,21.281884],[110.555582,21.286929],[110.522168,21.303567],[110.523011,21.316607],[110.529755,21.318056],[110.538875,21.330183],[110.55152,21.32648],[110.548225,21.333456],[110.56041,21.337963],[110.556961,21.344455],[110.568457,21.361408],[110.558187,21.370581],[110.558801,21.37616],[110.546998,21.371547],[110.539258,21.376696],[110.531288,21.39874],[110.53305,21.411558],[110.521785,21.414132],[110.50845,21.427002],[110.508066,21.436439],[110.494348,21.443194],[110.49021,21.438744],[110.484002,21.447108],[110.49044,21.456866],[110.484539,21.456705],[110.494118,21.474234],[110.506687,21.472251],[110.514044,21.480774],[110.508066,21.490583],[110.508373,21.490958],[110.517646,21.489725],[110.518183,21.480184],[110.532437,21.480345],[110.538875,21.473859],[110.545466,21.47922],[110.54171,21.493102],[110.557038,21.512663],[110.575201,21.515772],[110.577194,21.499158],[110.590069,21.500605],[110.599035,21.507304],[110.609381,21.498997],[110.621184,21.481042],[110.645478,21.482918],[110.645095,21.501248],[110.657893,21.503607],[110.656973,21.490904],[110.665863,21.497497],[110.683337,21.488332],[110.687935,21.49144],[110.681881,21.507519],[110.672148,21.51261],[110.677742,21.521398],[110.693453,21.513896],[110.706788,21.521023],[110.708014,21.519362],[110.713532,21.511752],[110.708474,21.500927],[110.723342,21.503553],[110.730775,21.501088],[110.717364,21.519684],[110.714758,21.526811]]],[[[110.396329,21.90612],[110.395946,21.91264],[110.384297,21.930595],[110.372954,21.93332],[110.391117,21.950258],[110.400007,21.955387],[110.412959,21.953837],[110.418477,21.944381],[110.442388,21.940854],[110.440702,21.93658],[110.414799,21.932732],[110.413419,21.915686],[110.400391,21.913976],[110.413726,21.911304],[110.396329,21.90612]]],[[[110.381078,21.783361],[110.391041,21.776674],[110.389048,21.762124],[110.379162,21.763675],[110.381078,21.783361]]],[[[110.545006,21.083853],[110.53466,21.088529],[110.528759,21.099922],[110.533357,21.108359],[110.530521,21.115667],[110.520405,21.114539],[110.510825,21.137858],[110.502012,21.142908],[110.489214,21.139094],[110.46331,21.14957],[110.451201,21.165203],[110.434188,21.168372],[110.431582,21.180941],[110.457409,21.184915],[110.465533,21.191683],[110.465073,21.198933],[110.482853,21.201028],[110.496034,21.212144],[110.506534,21.209781],[110.525463,21.190501],[110.557115,21.201618],[110.583018,21.201726],[110.589532,21.194529],[110.60394,21.198074],[110.613443,21.207633],[110.632373,21.21107],[110.635132,21.205807],[110.631606,21.190877],[110.615819,21.177718],[110.604247,21.155856],[110.582328,21.094763],[110.574971,21.087991],[110.545006,21.083853]]],[[[110.51757,21.078962],[110.530138,21.077457],[110.548838,21.069609],[110.560103,21.061385],[110.560717,21.048322],[110.539181,20.9874],[110.536576,20.961798],[110.538108,20.937644],[110.535809,20.92301],[110.526153,20.916284],[110.511822,20.916553],[110.501935,20.925593],[110.495651,20.950125],[110.47289,20.983151],[110.467372,20.987185],[110.451661,20.988368],[110.434341,20.985141],[110.407518,20.990466],[110.391654,20.985894],[110.363911,20.988046],[110.347664,20.984765],[110.309498,20.963358],[110.272253,20.952976],[110.241598,20.949372],[110.214468,20.937698],[110.20121,20.938397],[110.198451,20.956903],[110.205348,20.978526],[110.211096,20.986862],[110.227649,20.994876],[110.262673,21.025956],[110.275778,21.033591],[110.283595,21.053644],[110.306126,21.088099],[110.328964,21.088152],[110.334865,21.078585],[110.352492,21.079499],[110.383684,21.092774],[110.398551,21.096268],[110.413879,21.093688],[110.433881,21.078693],[110.459708,21.06289],[110.478944,21.062729],[110.497644,21.076059],[110.51757,21.078962]]],[[[110.714758,21.526811],[110.717364,21.519684],[110.708014,21.519362],[110.706788,21.521023],[110.714758,21.526811]]],[[[110.405372,20.678054],[110.401004,20.691581],[110.408744,20.695999],[110.41043,20.707908],[110.423842,20.71114],[110.435414,20.698747],[110.438786,20.679779],[110.428593,20.675198],[110.423995,20.683659],[110.42047,20.676977],[110.405372,20.678054]]],[[[110.645018,20.935654],[110.646321,20.917307],[110.634135,20.899011],[110.621107,20.87038],[110.611757,20.860046],[110.588536,20.856762],[110.562632,20.861068],[110.55152,20.872641],[110.546002,20.894975],[110.548914,20.908644],[110.567691,20.925324],[110.584091,20.948834],[110.589686,20.953084],[110.604553,20.952331],[110.639807,20.940173],[110.645018,20.935654]]],[[[110.556655,20.327463],[110.575891,20.350687],[110.58639,20.381091],[110.594284,20.371155],[110.593671,20.360678],[110.564548,20.325302],[110.556655,20.327463]]],[[[110.420776,21.159992],[110.42775,21.163323],[110.447753,21.160153],[110.442235,21.148281],[110.419473,21.151182],[110.420776,21.159992]]],[[[110.395409,21.104382],[110.416101,21.112389],[110.428593,21.105189],[110.426524,21.094602],[110.396099,21.098525],[110.395409,21.104382]]]]}},{"type":"Feature","properties":{"adcode":440900,"name":"茂名市","center":[110.919229,21.659751],"centroid":[110.958735,22.008883],"childrenNum":5,"level":"city","parent":{"adcode":440000},"subFeatureIndex":8,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[110.508373,21.490958],[110.510442,21.499587],[110.497567,21.517111],[110.485152,21.513735],[110.477718,21.526221],[110.483849,21.543849],[110.475572,21.554136],[110.470361,21.547546],[110.45534,21.554511],[110.450358,21.550439],[110.443768,21.556386],[110.434494,21.553868],[110.422692,21.562226],[110.429666,21.575725],[110.427904,21.580653],[110.439399,21.581082],[110.443154,21.58692],[110.427214,21.600096],[110.417481,21.598168],[110.42024,21.591312],[110.413342,21.586063],[110.406522,21.60181],[110.412653,21.60438],[110.412653,21.616966],[110.405525,21.61809],[110.405295,21.634636],[110.396865,21.633137],[110.407058,21.648611],[110.385753,21.657552],[110.382457,21.667456],[110.412346,21.675753],[110.40974,21.686619],[110.402843,21.689188],[110.396712,21.673612],[110.39242,21.681588],[110.385753,21.674736],[110.367666,21.683354],[110.369889,21.689349],[110.351419,21.713647],[110.368739,21.721835],[110.365367,21.748],[110.375177,21.760305],[110.379162,21.763675],[110.389048,21.762124],[110.391041,21.776674],[110.381078,21.783361],[110.380312,21.784484],[110.388359,21.789084],[110.386749,21.795556],[110.37556,21.798765],[110.377246,21.806627],[110.362225,21.797642],[110.348354,21.802509],[110.350193,21.809675],[110.365137,21.807055],[110.357857,21.815451],[110.348124,21.809354],[110.345901,21.800851],[110.339387,21.806359],[110.342606,21.837322],[110.351572,21.845663],[110.354255,21.856462],[110.350729,21.863947],[110.362532,21.868224],[110.372571,21.856355],[110.387362,21.852239],[110.398398,21.861755],[110.387592,21.890407],[110.396329,21.90612],[110.413726,21.911304],[110.400391,21.913976],[110.413419,21.915686],[110.414799,21.932732],[110.440702,21.93658],[110.442388,21.940854],[110.418477,21.944381],[110.412959,21.953837],[110.400007,21.955387],[110.391117,21.950258],[110.376786,21.967781],[110.352952,21.976595],[110.359926,21.993901],[110.356324,22.00736],[110.363528,22.005811],[110.347741,22.038972],[110.353105,22.043564],[110.355481,22.061556],[110.351726,22.074421],[110.358853,22.075916],[110.359236,22.084083],[110.351266,22.088993],[110.350806,22.096999],[110.365674,22.098707],[110.362915,22.110288],[110.364601,22.12523],[110.360922,22.132113],[110.352186,22.132487],[110.334329,22.149027],[110.326589,22.152655],[110.326052,22.164445],[110.334789,22.170366],[110.337471,22.184022],[110.342529,22.183435],[110.348507,22.195862],[110.375407,22.166312],[110.381078,22.164232],[110.393493,22.170473],[110.390964,22.179008],[110.399318,22.187382],[110.41066,22.190209],[110.409817,22.203276],[110.414569,22.208555],[110.430816,22.206209],[110.453501,22.192182],[110.460245,22.178581],[110.490133,22.155162],[110.483389,22.150521],[110.489444,22.144599],[110.510672,22.145026],[110.529448,22.154469],[110.529295,22.164392],[110.560333,22.196396],[110.585317,22.185088],[110.602484,22.183382],[110.598422,22.163431],[110.606009,22.155909],[110.6208,22.15783],[110.629077,22.14908],[110.653141,22.159377],[110.658123,22.167539],[110.66548,22.165192],[110.670462,22.17282],[110.678892,22.17266],[110.67529,22.188449],[110.664714,22.203382],[110.652835,22.207702],[110.646857,22.223007],[110.653525,22.238203],[110.664637,22.245348],[110.686019,22.248547],[110.694526,22.258249],[110.695445,22.272323],[110.711999,22.27776],[110.720966,22.294123],[110.725334,22.295615],[110.738899,22.281917],[110.758748,22.274668],[110.784498,22.280798],[110.78971,22.286661],[110.785571,22.294603],[110.772619,22.295562],[110.773233,22.307393],[110.760511,22.324818],[110.749398,22.329774],[110.750165,22.344799],[110.741275,22.362007],[110.729396,22.366375],[110.723801,22.359876],[110.711539,22.369624],[110.712382,22.395457],[110.706864,22.405362],[110.713992,22.417078],[110.713302,22.437471],[110.706711,22.446415],[110.693529,22.448279],[110.692686,22.457755],[110.68349,22.473405],[110.688241,22.477769],[110.698358,22.474469],[110.705102,22.466432],[110.725947,22.461215],[110.741351,22.464302],[110.747789,22.476119],[110.739972,22.488734],[110.740432,22.498845],[110.750471,22.517045],[110.760817,22.516779],[110.754303,22.536838],[110.756909,22.548436],[110.748095,22.554767],[110.761507,22.559607],[110.764496,22.565938],[110.760204,22.580777],[110.778674,22.585405],[110.793542,22.571363],[110.799213,22.556841],[110.805804,22.558916],[110.807566,22.570672],[110.81546,22.578065],[110.83324,22.584926],[110.853779,22.582267],[110.861213,22.587745],[110.87769,22.582692],[110.887269,22.583543],[110.897922,22.591999],[110.895853,22.613537],[110.941299,22.608113],[110.957699,22.616727],[110.961761,22.625766],[110.959002,22.636506],[110.977319,22.641557],[110.987358,22.640228],[110.997091,22.631349],[111.010043,22.644906],[111.027976,22.651551],[111.030735,22.646767],[111.055642,22.648521],[111.06208,22.666169],[111.074035,22.667232],[111.089669,22.694285],[111.104767,22.694869],[111.108369,22.704328],[111.123543,22.701459],[111.124539,22.695826],[111.136878,22.685941],[111.137108,22.674514],[111.127911,22.666169],[111.136418,22.643789],[111.143162,22.638686],[111.144235,22.625713],[111.161862,22.620236],[111.174737,22.605773],[111.185849,22.60439],[111.196732,22.61024],[111.215662,22.594659],[111.219187,22.58583],[111.249076,22.58365],[111.25352,22.589234],[111.279271,22.592053],[111.303105,22.580724],[111.303641,22.569448],[111.326633,22.557267],[111.322724,22.54966],[111.293909,22.547638],[111.285172,22.523856],[111.277278,22.517843],[111.272067,22.506136],[111.276972,22.491927],[111.293295,22.50603],[111.329852,22.516087],[111.338588,22.522951],[111.350084,22.506988],[111.373688,22.516034],[111.384647,22.509808],[111.403117,22.516087],[111.413387,22.512628],[111.410628,22.492033],[111.403347,22.479526],[111.408788,22.475268],[111.409631,22.457116],[111.421127,22.446948],[111.417065,22.431135],[111.421817,22.426662],[111.43952,22.427834],[111.446034,22.442209],[111.471325,22.441996],[111.480444,22.46015],[111.47347,22.474629],[111.476919,22.480164],[111.469409,22.490277],[111.486882,22.505551],[111.507804,22.493949],[111.525201,22.480164],[111.545433,22.499324],[111.54459,22.517364],[111.561144,22.523377],[111.559381,22.528804],[111.569344,22.540722],[111.59632,22.551362],[111.60682,22.54966],[111.612031,22.542584],[111.610269,22.534125],[111.618315,22.533912],[111.616093,22.521408],[111.621304,22.521195],[111.616016,22.508158],[111.619618,22.497302],[111.625673,22.510925],[111.633873,22.503262],[111.648128,22.498207],[111.671425,22.503262],[111.678553,22.496397],[111.680315,22.4824],[111.683381,22.468774],[111.679089,22.45685],[111.660083,22.434915],[111.649584,22.426716],[111.630884,22.402859],[111.616783,22.390504],[111.60728,22.39322],[111.600689,22.375537],[111.590266,22.369784],[111.57149,22.375217],[111.55256,22.364723],[111.542751,22.368079],[111.531102,22.358384],[111.517001,22.365309],[111.511176,22.349594],[111.494163,22.339418],[111.492247,22.333557],[111.479601,22.334143],[111.465807,22.33004],[111.468182,22.326683],[111.459369,22.309738],[111.46481,22.30217],[111.459446,22.296415],[111.453468,22.270297],[111.433389,22.275255],[111.42266,22.272643],[111.416835,22.263367],[111.401278,22.253025],[111.388556,22.251319],[111.381275,22.240869],[111.37683,22.243162],[111.360507,22.233938],[111.346099,22.211488],[111.354069,22.193356],[111.348091,22.181035],[111.327169,22.171326],[111.33445,22.160017],[111.331384,22.142198],[111.340657,22.129445],[111.337515,22.118453],[111.32441,22.113383],[111.327169,22.10303],[111.312685,22.088353],[111.316976,22.082641],[111.304561,22.084403],[111.298583,22.069991],[111.300653,22.064012],[111.288467,22.058299],[111.285325,22.048369],[111.295901,22.03139],[111.304638,22.029948],[111.305941,22.011846],[111.287624,22.000043],[111.283333,21.986797],[111.287624,21.977984],[111.283716,21.971841],[111.283409,21.952181],[111.294675,21.935885],[111.287241,21.924129],[111.290077,21.907991],[111.310922,21.893988],[111.320119,21.897836],[111.325177,21.886986],[111.340044,21.874424],[111.362499,21.877044],[111.367864,21.862557],[111.374608,21.860525],[111.40327,21.862183],[111.402887,21.854858],[111.417218,21.850154],[111.423503,21.81374],[111.401508,21.798337],[111.386947,21.780258],[111.374301,21.774374],[111.388786,21.756239],[111.383651,21.750247],[111.381275,21.734463],[111.389859,21.727132],[111.40304,21.728095],[111.431243,21.71857],[111.44067,21.69347],[111.428944,21.676984],[111.43155,21.670293],[111.42289,21.661353],[111.421587,21.648772],[111.416299,21.646898],[111.415456,21.632762],[111.42059,21.617394],[111.427718,21.614234],[111.416452,21.598061],[111.423809,21.591794],[111.418291,21.578671],[111.42151,21.573743],[111.430783,21.57985],[111.428944,21.570315],[111.439367,21.575725],[111.44703,21.570904],[111.458909,21.534151],[111.459139,21.524935],[111.452395,21.515182],[111.395837,21.501731],[111.382502,21.495514],[111.353149,21.464317],[111.329852,21.446787],[111.307627,21.433811],[111.301189,21.433704],[111.285862,21.419012],[111.263483,21.412684],[111.257352,21.415151],[111.257736,21.436546],[111.250532,21.449574],[111.253597,21.452577],[111.273829,21.443891],[111.2818,21.446518],[111.281493,21.458152],[111.295595,21.476271],[111.290536,21.484204],[111.276895,21.484955],[111.251605,21.48056],[111.239113,21.471769],[111.211983,21.469035],[111.171442,21.458474],[111.146611,21.459225],[111.116646,21.453167],[111.108599,21.455472],[111.076564,21.45247],[111.061313,21.449199],[111.034797,21.438744],[111.00077,21.417993],[110.977012,21.406785],[110.965363,21.433329],[110.950112,21.443731],[110.938233,21.441854],[110.929037,21.447912],[110.927121,21.441586],[110.910337,21.439817],[110.901907,21.425768],[110.893554,21.436653],[110.880449,21.444856],[110.895853,21.451236],[110.895316,21.460833],[110.883897,21.469678],[110.870409,21.471125],[110.877843,21.476754],[110.874471,21.484848],[110.876004,21.49814],[110.867344,21.506125],[110.857841,21.496103],[110.840674,21.493638],[110.856231,21.503714],[110.848721,21.517058],[110.848031,21.527668],[110.828872,21.542671],[110.822127,21.541974],[110.818679,21.551672],[110.826342,21.559815],[110.817759,21.569083],[110.813697,21.583064],[110.795611,21.579582],[110.793618,21.596025],[110.79883,21.619857],[110.798216,21.631852],[110.786874,21.633298],[110.771853,21.647808],[110.761507,21.647969],[110.75461,21.634797],[110.749858,21.635922],[110.736217,21.623874],[110.73683,21.609522],[110.743344,21.606201],[110.747176,21.588741],[110.736523,21.58542],[110.734301,21.575564],[110.727403,21.573636],[110.725257,21.547761],[110.735987,21.533348],[110.72817,21.531097],[110.729396,21.523863],[110.714758,21.526811],[110.706788,21.521023],[110.693453,21.513896],[110.677742,21.521398],[110.672148,21.51261],[110.681881,21.507519],[110.687935,21.49144],[110.683337,21.488332],[110.665863,21.497497],[110.656973,21.490904],[110.657893,21.503607],[110.645095,21.501248],[110.645478,21.482918],[110.621184,21.481042],[110.609381,21.498997],[110.599035,21.507304],[110.590069,21.500605],[110.577194,21.499158],[110.575201,21.515772],[110.557038,21.512663],[110.54171,21.493102],[110.545466,21.47922],[110.538875,21.473859],[110.532437,21.480345],[110.518183,21.480184],[110.517646,21.489725],[110.508373,21.490958]]],[[[110.508066,21.490583],[110.514044,21.480774],[110.506687,21.472251],[110.494118,21.474234],[110.490823,21.482811],[110.509063,21.479273],[110.508066,21.490583]]],[[[110.379162,21.763675],[110.375177,21.760305],[110.370042,21.770148],[110.373184,21.784163],[110.380312,21.784484],[110.381078,21.783361],[110.379162,21.763675]]],[[[110.717364,21.519684],[110.730775,21.501088],[110.723342,21.503553],[110.708474,21.500927],[110.713532,21.511752],[110.708014,21.519362],[110.717364,21.519684]]],[[[111.1847,21.37101],[111.1847,21.381953],[111.195659,21.391017],[111.194816,21.380075],[111.1847,21.37101]]],[[[110.484002,21.447108],[110.484539,21.456705],[110.49044,21.456866],[110.484002,21.447108]]]]}},{"type":"Feature","properties":{"adcode":441200,"name":"肇庆市","center":[112.472529,23.051546],"centroid":[112.210411,23.536359],"childrenNum":8,"level":"city","parent":{"adcode":440000},"subFeatureIndex":9,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[112.830493,23.545762],[112.831642,23.537577],[112.840762,23.536046],[112.850418,23.527596],[112.845284,23.502929],[112.845743,23.487134],[112.838156,23.484704],[112.831029,23.468114],[112.811793,23.462513],[112.802673,23.444229],[112.803669,23.435773],[112.796389,23.429113],[112.794166,23.407547],[112.785736,23.394173],[112.787269,23.371173],[112.806582,23.367419],[112.810107,23.371332],[112.805892,23.387511],[112.814092,23.391793],[112.838386,23.387352],[112.859691,23.364563],[112.863907,23.349122],[112.883296,23.347324],[112.87134,23.315588],[112.866895,23.293263],[112.857546,23.287231],[112.847966,23.275061],[112.844977,23.263314],[112.823595,23.24569],[112.8472,23.238651],[112.842984,23.224465],[112.831949,23.215678],[112.815012,23.217107],[112.810873,23.200378],[112.80091,23.200431],[112.806582,23.212395],[112.799837,23.228224],[112.795316,23.226318],[112.7934,23.208213],[112.786349,23.205937],[112.781521,23.225842],[112.769412,23.223354],[112.772861,23.215678],[112.766347,23.21356],[112.764431,23.202919],[112.772938,23.199742],[112.771941,23.191694],[112.775773,23.166754],[112.793936,23.150071],[112.798458,23.13863],[112.799684,23.109971],[112.805355,23.091426],[112.818767,23.072614],[112.819227,23.052051],[112.834094,23.014784],[112.820453,23.010225],[112.794856,22.990394],[112.788189,22.991879],[112.790564,23.00206],[112.787882,23.000999],[112.777076,22.996545],[112.759679,22.979735],[112.751556,22.99103],[112.734772,22.98122],[112.736228,22.963878],[112.74144,22.962923],[112.734082,22.940751],[112.708869,22.927754],[112.699749,22.94839],[112.686874,22.948443],[112.672696,22.940486],[112.690092,22.927277],[112.696683,22.917196],[112.68649,22.907593],[112.692468,22.901969],[112.685418,22.89836],[112.677524,22.902764],[112.676374,22.895442],[112.659284,22.887163],[112.635526,22.883714],[112.632384,22.877664],[112.604258,22.870552],[112.591613,22.869809],[112.587168,22.862962],[112.561648,22.873312],[112.557816,22.863387],[112.563104,22.854151],[112.57414,22.84741],[112.571841,22.833077],[112.557433,22.826122],[112.532449,22.822883],[112.527544,22.815131],[112.52034,22.82729],[112.510531,22.823042],[112.499035,22.826918],[112.500414,22.812476],[112.489992,22.809131],[112.482788,22.795006],[112.463398,22.789271],[112.443779,22.791661],[112.441403,22.787731],[112.413507,22.774454],[112.392509,22.76978],[112.382622,22.784545],[112.384232,22.792245],[112.374116,22.794369],[112.356336,22.787997],[112.32844,22.786722],[112.315488,22.790015],[112.323841,22.802706],[112.336257,22.806476],[112.319703,22.825378],[112.310353,22.824848],[112.312269,22.850489],[112.298704,22.865138],[112.296022,22.873312],[112.29993,22.89178],[112.305602,22.896132],[112.307364,22.911254],[112.295332,22.915605],[112.285369,22.911254],[112.278319,22.91465],[112.26598,22.906638],[112.257703,22.910564],[112.261075,22.918735],[112.262914,22.939796],[112.257167,22.951625],[112.270885,22.943775],[112.280158,22.949026],[112.283683,22.944518],[112.290197,22.952633],[112.277322,22.970613],[112.285369,22.976235],[112.286595,22.984985],[112.299087,23.010331],[112.286825,23.020033],[112.289814,23.024274],[112.285446,23.042563],[112.295869,23.060849],[112.301233,23.079557],[112.317634,23.080298],[112.32637,23.093599],[112.327137,23.104196],[112.312729,23.115163],[112.311886,23.121255],[112.301233,23.122315],[112.285676,23.129731],[112.265137,23.119507],[112.234712,23.114898],[112.191182,23.074522],[112.165431,23.075052],[112.133473,23.08581],[112.118299,23.083001],[112.099446,23.089943],[112.083736,23.079716],[112.047563,23.072349],[112.035761,23.07272],[112.025951,23.081199],[111.991464,23.087028],[111.982727,23.097308],[111.979049,23.119719],[111.967553,23.129678],[111.959353,23.130843],[111.9218,23.124857],[111.899192,23.125599],[111.884708,23.131267],[111.876737,23.138365],[111.860414,23.141225],[111.836963,23.131585],[111.814048,23.129943],[111.770441,23.13328],[111.753658,23.137994],[111.726988,23.150865],[111.707522,23.150971],[111.692118,23.157909],[111.679089,23.154732],[111.656098,23.158492],[111.649507,23.164741],[111.637781,23.185446],[111.624446,23.189894],[111.594251,23.188518],[111.575322,23.194077],[111.539839,23.212978],[111.533784,23.22113],[111.542598,23.234787],[111.569191,23.243097],[111.576318,23.253682],[111.573866,23.270881],[111.550185,23.298183],[111.532175,23.324634],[111.523898,23.322624],[111.52796,23.310351],[111.519989,23.305484],[111.515774,23.288448],[111.506348,23.282311],[111.49286,23.284586],[111.472551,23.275061],[111.456917,23.281729],[111.453391,23.289559],[111.437834,23.295115],[111.442202,23.301411],[111.421127,23.316276],[111.408712,23.315958],[111.392618,23.325586],[111.375757,23.319926],[111.375068,23.315271],[111.365565,23.31982],[111.361963,23.330293],[111.364722,23.343886],[111.373382,23.355203],[111.37798,23.369587],[111.389169,23.375985],[111.392081,23.391106],[111.383421,23.399671],[111.395607,23.43831],[111.392848,23.446712],[111.399975,23.456859],[111.399745,23.469382],[111.428867,23.466581],[111.433849,23.480266],[111.438754,23.481005],[111.452012,23.500975],[111.459599,23.49976],[111.464274,23.511486],[111.480215,23.532613],[111.478452,23.543914],[111.481901,23.558858],[111.489028,23.561339],[111.488951,23.592277],[111.482744,23.605684],[111.487035,23.626638],[111.508264,23.62574],[111.538382,23.630859],[111.551104,23.640464],[111.564286,23.633181],[111.584288,23.644685],[111.58858,23.638142],[111.594405,23.643471],[111.607433,23.637403],[111.615633,23.638986],[111.61479,23.658773],[111.625596,23.6765],[111.637092,23.678293],[111.635559,23.684518],[111.643223,23.696123],[111.665294,23.699973],[111.662689,23.706408],[111.66675,23.718907],[111.621611,23.725974],[111.618315,23.73478],[111.629351,23.736362],[111.628048,23.788607],[111.639161,23.786551],[111.641153,23.79704],[111.649354,23.811059],[111.645828,23.815327],[111.653722,23.821967],[111.654872,23.833296],[111.664451,23.834877],[111.693497,23.817277],[111.696946,23.835931],[111.714572,23.837195],[111.719707,23.825814],[111.737794,23.819227],[111.745994,23.820755],[111.752355,23.812745],[111.765843,23.815011],[111.774963,23.80816],[111.791593,23.809162],[111.796191,23.815696],[111.810599,23.807001],[111.815274,23.829081],[111.824777,23.832348],[111.820102,23.855372],[111.823781,23.871755],[111.816884,23.875073],[111.812668,23.887504],[111.822631,23.903567],[111.822861,23.911202],[111.838879,23.91136],[111.845929,23.904409],[111.857655,23.918311],[111.851294,23.93416],[111.854436,23.947427],[111.866085,23.946321],[111.87896,23.936213],[111.8867,23.944321],[111.897506,23.946637],[111.911991,23.943952],[111.910151,23.952164],[111.917585,23.95227],[111.940347,23.987746],[111.921494,24.012005],[111.921034,24.037364],[111.905783,24.046833],[111.89697,24.069608],[111.887927,24.07918],[111.88877,24.092064],[111.883482,24.095587],[111.878653,24.1101],[111.878807,24.126818],[111.88785,24.15473],[111.886777,24.163875],[111.87122,24.176593],[111.877887,24.228922],[111.912834,24.221726],[111.920804,24.233492],[111.942646,24.234858],[111.961575,24.234753],[111.978052,24.222671],[111.986866,24.205124],[111.994223,24.19861],[111.997672,24.186945],[112.006868,24.19015],[112.024955,24.188364],[112.041815,24.191516],[112.04603,24.197611],[112.041355,24.216682],[112.050398,24.224247],[112.053157,24.24594],[112.058369,24.247043],[112.067872,24.260698],[112.086878,24.256917],[112.106114,24.228555],[112.11508,24.229027],[112.122591,24.222986],[112.129258,24.207489],[112.144433,24.201394],[112.148341,24.190098],[112.157538,24.185841],[112.166658,24.187943],[112.169876,24.197454],[112.196929,24.204074],[112.215093,24.223459],[112.218311,24.244365],[112.235708,24.246203],[112.249503,24.243367],[112.256324,24.2597],[112.255557,24.279182],[112.261995,24.290576],[112.256937,24.320762],[112.258316,24.324279],[112.27441,24.320604],[112.293723,24.327585],[112.293646,24.344538],[112.284679,24.377334],[112.288971,24.388666],[112.307211,24.378593],[112.319703,24.380167],[112.342004,24.353512],[112.373732,24.347949],[112.384845,24.328373],[112.393888,24.326641],[112.401858,24.310211],[112.411285,24.307061],[112.423777,24.284958],[112.444239,24.287741],[112.449987,24.28102],[112.458723,24.238377],[112.453052,24.20938],[112.439564,24.19057],[112.439028,24.180324],[112.43144,24.173387],[112.434813,24.164453],[112.429525,24.160564],[112.434659,24.147529],[112.428452,24.139802],[112.429831,24.127081],[112.446921,24.121929],[112.455351,24.12482],[112.452516,24.115725],[112.463782,24.120772],[112.486696,24.114148],[112.49367,24.095377],[112.489532,24.086122],[112.500798,24.08081],[112.497885,24.064401],[112.507542,24.051778],[112.507618,24.043309],[112.518501,24.016635],[112.506469,24.007269],[112.511297,24.001376],[112.516125,23.977009],[112.535668,23.970746],[112.564253,23.977325],[112.567012,23.964903],[112.575136,23.967325],[112.588318,23.956692],[112.608167,23.952586],[112.622651,23.943636],[112.645106,23.941004],[112.662886,23.949585],[112.675838,23.939846],[112.682582,23.939056],[112.683272,23.92405],[112.693464,23.912729],[112.693235,23.904251],[112.685494,23.895351],[112.692162,23.88961],[112.672159,23.864801],[112.679516,23.857216],[112.672159,23.851473],[112.675225,23.831241],[112.661353,23.821651],[112.655376,23.812587],[112.675455,23.815169],[112.689479,23.806369],[112.70588,23.806369],[112.700668,23.793192],[112.704194,23.790557],[112.69768,23.765677],[112.706033,23.752813],[112.730021,23.758507],[112.743126,23.752444],[112.725882,23.725816],[112.711321,23.712104],[112.713467,23.706883],[112.724579,23.710258],[112.72159,23.698549],[112.715076,23.691639],[112.728718,23.678504],[112.744965,23.686523],[112.739907,23.672596],[112.744965,23.668481],[112.751249,23.675286],[112.75922,23.672332],[112.768646,23.677397],[112.780908,23.671224],[112.784663,23.655291],[112.778302,23.641255],[112.752092,23.628643],[112.750483,23.610065],[112.756844,23.603309],[112.772171,23.603309],[112.781828,23.588529],[112.799761,23.588951],[112.800144,23.571846],[112.7934,23.571688],[112.796772,23.551835],[112.802137,23.545551],[112.830493,23.545762]]]]}},{"type":"Feature","properties":{"adcode":441300,"name":"惠州市","center":[114.412599,23.079404],"centroid":[114.507031,23.234468],"childrenNum":5,"level":"city","parent":{"adcode":440000},"subFeatureIndex":10,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.229205,22.81253],[114.23388,22.816937],[114.235643,22.839872],[114.233114,22.842314],[114.2348,22.862962],[114.231198,22.880318],[114.236946,22.88589],[114.24484,22.88053],[114.251737,22.884351],[114.26032,22.899634],[114.259171,22.906054],[114.249208,22.905152],[114.245299,22.911732],[114.229742,22.914703],[114.213035,22.928444],[114.211349,22.953959],[114.223841,22.963719],[114.222385,22.980743],[114.212498,22.987796],[114.20039,22.986682],[114.185139,22.992727],[114.158546,22.978303],[114.15571,22.983129],[114.13816,22.986417],[114.132182,22.994424],[114.124442,22.994],[114.139233,23.023479],[114.151035,23.019079],[114.150269,23.024698],[114.120993,23.048022],[114.102217,23.058623],[114.091564,23.077331],[114.088959,23.094182],[114.065891,23.101441],[114.049797,23.097467],[114.029871,23.084379],[114.010252,23.083425],[113.993315,23.092645],[113.986418,23.10197],[113.970554,23.113308],[113.962737,23.114209],[113.938366,23.107534],[113.905565,23.11511],[113.894836,23.111295],[113.876596,23.124275],[113.863261,23.114633],[113.848163,23.116911],[113.844715,23.125599],[113.849849,23.148853],[113.858739,23.157221],[113.874757,23.165377],[113.895679,23.164529],[113.902116,23.177186],[113.889011,23.178616],[113.8838,23.191694],[113.893993,23.21266],[113.903802,23.212554],[113.890084,23.242144],[113.895142,23.253523],[113.877209,23.264213],[113.890314,23.282681],[113.888475,23.290512],[113.894989,23.314689],[113.889394,23.334154],[113.895985,23.34505],[113.927483,23.339972],[113.939285,23.342934],[113.958905,23.33262],[113.958445,23.314953],[113.977451,23.304849],[113.978217,23.30104],[113.996687,23.297443],[113.996151,23.309346],[113.984195,23.330505],[113.993928,23.333149],[114.000902,23.346636],[113.990556,23.354833],[113.982049,23.379369],[113.995997,23.386771],[114.000442,23.39338],[113.986801,23.405591],[113.984195,23.421238],[113.98795,23.431439],[113.975382,23.429378],[113.960054,23.43276],[113.952774,23.442907],[113.955456,23.466053],[113.974462,23.46489],[113.981743,23.472129],[113.974156,23.478839],[113.96105,23.480371],[113.938749,23.476726],[113.931162,23.483066],[113.940895,23.483594],[113.946643,23.492522],[113.929936,23.494213],[113.923115,23.503088],[113.911543,23.504144],[113.906408,23.511856],[113.89315,23.520254],[113.888168,23.535095],[113.871384,23.541327],[113.862495,23.566303],[113.852838,23.570579],[113.864027,23.587368],[113.858356,23.593491],[113.859582,23.60996],[113.843565,23.617877],[113.834215,23.61756],[113.832223,23.624263],[113.817432,23.623471],[113.816742,23.63582],[113.825555,23.639883],[113.827778,23.648009],[113.818811,23.656188],[113.839963,23.655449],[113.847857,23.679348],[113.881884,23.685151],[113.897595,23.700184],[113.900967,23.715426],[113.912386,23.716534],[113.920049,23.729454],[113.93645,23.732143],[113.940282,23.738155],[113.955916,23.732671],[113.96105,23.738207],[113.972853,23.739262],[113.976071,23.757716],[113.998756,23.762988],[114.013087,23.777959],[114.017686,23.778276],[114.009945,23.762988],[114.018222,23.76283],[114.02489,23.752549],[114.027419,23.760141],[114.038454,23.771212],[114.05999,23.775851],[114.056311,23.784021],[114.037228,23.793509],[114.047728,23.803312],[114.035312,23.813378],[114.040294,23.824444],[114.052249,23.830029],[114.057767,23.846784],[114.050487,23.85474],[114.047728,23.867488],[114.041827,23.871491],[114.04267,23.889874],[114.036232,23.901776],[114.04129,23.906937],[114.056771,23.935844],[114.074398,23.930895],[114.075624,23.924366],[114.117008,23.929737],[114.119844,23.936002],[114.142835,23.940425],[114.158162,23.939846],[114.16368,23.953586],[114.174333,23.959429],[114.186518,23.95627],[114.19196,23.9449],[114.201999,23.941267],[114.213341,23.946163],[114.21702,23.942636],[114.238479,23.941899],[114.244303,23.948269],[114.258711,23.952744],[114.263309,23.960218],[114.271816,23.959482],[114.271739,23.948479],[114.251047,23.940477],[114.254649,23.934686],[114.247905,23.929737],[114.236716,23.910676],[114.248671,23.906516],[114.263156,23.911044],[114.268367,23.902829],[114.279633,23.901091],[114.28814,23.90541],[114.303161,23.891454],[114.32163,23.894403],[114.331517,23.900512],[114.34991,23.887925],[114.346154,23.878392],[114.356347,23.869595],[114.343855,23.86654],[114.33029,23.852948],[114.326918,23.8324],[114.332666,23.808635],[114.34102,23.807844],[114.342706,23.796882],[114.348913,23.791453],[114.337954,23.770632],[114.341556,23.7516],[114.357267,23.747593],[114.355351,23.736046],[114.368839,23.725499],[114.378649,23.744693],[114.388612,23.739262],[114.405395,23.708201],[114.421413,23.709942],[114.424248,23.697178],[114.440112,23.687578],[114.473143,23.703349],[114.493529,23.699182],[114.512688,23.688527],[114.520428,23.668428],[114.530545,23.666634],[114.545872,23.631757],[114.557061,23.622204],[114.55047,23.605315],[114.556985,23.5965],[114.554609,23.590165],[114.567561,23.579554],[114.567637,23.570738],[114.57898,23.561498],[114.583041,23.563504],[114.600591,23.555214],[114.611321,23.544178],[114.606646,23.536838],[114.623583,23.529233],[114.625039,23.549406],[114.636764,23.548614],[114.6396,23.556429],[114.65554,23.562871],[114.661825,23.535623],[114.677076,23.529338],[114.692173,23.532402],[114.698764,23.520624],[114.685582,23.508317],[114.68267,23.493949],[114.698381,23.470438],[114.697155,23.46061],[114.676079,23.45522],[114.66673,23.447347],[114.642435,23.416956],[114.632779,23.407865],[114.650712,23.396922],[114.652858,23.411882],[114.659985,23.403318],[114.665657,23.409662],[114.686119,23.413521],[114.707501,23.40427],[114.693246,23.393538],[114.70022,23.389256],[114.703746,23.367578],[114.697461,23.366203],[114.719916,23.358588],[114.715854,23.347905],[114.727427,23.338333],[114.72758,23.327649],[114.73509,23.334366],[114.73693,23.328389],[114.75448,23.328812],[114.761684,23.314636],[114.776628,23.313472],[114.779617,23.294903],[114.768581,23.2794],[114.779234,23.275114],[114.78023,23.265801],[114.786821,23.266277],[114.786821,23.25654],[114.793258,23.23971],[114.786284,23.236269],[114.782989,23.224571],[114.786361,23.207101],[114.802455,23.205566],[114.804294,23.199795],[114.827362,23.184493],[114.834413,23.171784],[114.850353,23.165271],[114.856944,23.177451],[114.868823,23.189841],[114.861926,23.199901],[114.859933,23.211072],[114.87595,23.222877],[114.879629,23.241139],[114.898865,23.246643],[114.89488,23.254899],[114.91174,23.274532],[114.91174,23.295908],[114.919097,23.314848],[114.915419,23.316064],[114.913043,23.338756],[114.923236,23.338597],[114.944158,23.350179],[114.953891,23.343727],[114.948066,23.329606],[114.961631,23.326749],[114.970981,23.313631],[114.976116,23.316858],[114.971058,23.302469],[114.978032,23.294374],[114.992133,23.296755],[114.996884,23.31379],[115.007384,23.324475],[115.007154,23.332356],[115.031525,23.329235],[115.048768,23.320561],[115.056125,23.321195],[115.06126,23.331351],[115.069384,23.330875],[115.078274,23.344944],[115.087623,23.343886],[115.100269,23.355997],[115.11345,23.35954],[115.12234,23.368159],[115.141346,23.360809],[115.157517,23.362342],[115.169089,23.368794],[115.168553,23.377307],[115.17637,23.381008],[115.189551,23.376619],[115.197675,23.380796],[115.205799,23.377412],[115.221739,23.384445],[115.235457,23.385343],[115.240822,23.376725],[115.265039,23.384445],[115.277608,23.375879],[115.295618,23.357319],[115.306117,23.360597],[115.303282,23.346425],[115.306884,23.344415],[115.303665,23.324634],[115.310792,23.307971],[115.334856,23.322412],[115.345585,23.316964],[115.348191,23.308552],[115.362369,23.305114],[115.365971,23.299823],[115.377313,23.302892],[115.384517,23.289877],[115.39494,23.288342],[115.401378,23.276437],[115.403447,23.250083],[115.419311,23.243785],[115.425289,23.236322],[115.409655,23.237963],[115.40314,23.230658],[115.404443,23.21986],[115.388119,23.22023],[115.376241,23.205143],[115.342367,23.19413],[115.336925,23.170302],[115.325277,23.159392],[115.317076,23.163523],[115.311635,23.157645],[115.294468,23.160981],[115.283509,23.157433],[115.28167,23.145145],[115.285348,23.135505],[115.281363,23.125016],[115.287724,23.117865],[115.290253,23.095559],[115.262664,23.091426],[115.265882,23.084114],[115.251551,23.073568],[115.24588,23.061803],[115.22695,23.0538],[115.220743,23.054754],[115.20235,23.043835],[115.194226,23.045637],[115.180431,23.040337],[115.165947,23.027084],[115.163341,23.012558],[115.14878,23.000363],[115.146864,22.991136],[115.129467,23.003279],[115.110998,23.009589],[115.099349,22.996227],[115.085937,23.007733],[115.074901,22.999727],[115.075974,22.995219],[115.062333,22.994106],[115.047925,22.966848],[115.043557,22.969924],[115.020029,22.955498],[115.010066,22.955922],[114.99995,22.949504],[114.997804,22.938682],[114.986308,22.935075],[114.975962,22.938682],[114.965923,22.926693],[114.953507,22.928656],[114.946304,22.919372],[114.930363,22.920698],[114.917794,22.907009],[114.926225,22.900854],[114.926071,22.890454],[114.941245,22.877452],[114.939023,22.870075],[114.925075,22.868323],[114.932356,22.859035],[114.927987,22.849745],[114.931666,22.840456],[114.940556,22.842473],[114.950135,22.834722],[114.950595,22.81614],[114.944388,22.809397],[114.952741,22.794582],[114.974276,22.78805],[114.977725,22.776631],[114.992286,22.771055],[114.999797,22.773551],[114.994432,22.754376],[115.007154,22.740724],[115.009836,22.729248],[115.023094,22.717559],[115.02616,22.702149],[115.008533,22.698058],[114.997881,22.683071],[114.974353,22.668455],[114.945307,22.645491],[114.93772,22.637357],[114.924232,22.610878],[114.923236,22.58833],[114.927374,22.55849],[114.925305,22.551628],[114.914422,22.545776],[114.883614,22.540243],[114.885453,22.569182],[114.875184,22.590351],[114.842766,22.590351],[114.806517,22.584873],[114.747352,22.581628],[114.738999,22.606358],[114.743597,22.620183],[114.740915,22.638473],[114.728576,22.651285],[114.730492,22.671591],[114.738462,22.686047],[114.733941,22.719259],[114.739305,22.734242],[114.75241,22.759741],[114.749881,22.76399],[114.731335,22.771214],[114.709647,22.787678],[114.695545,22.784173],[114.693706,22.774507],[114.685966,22.765212],[114.601741,22.730736],[114.59423,22.721172],[114.6045,22.713202],[114.609098,22.700608],[114.604423,22.693062],[114.558441,22.682752],[114.532231,22.665691],[114.514451,22.660747],[114.505867,22.668455],[114.481956,22.668136],[114.478278,22.661864],[114.453447,22.669943],[114.449692,22.665319],[114.431912,22.660907],[114.428157,22.676746],[114.441338,22.682167],[114.445324,22.68897],[114.442028,22.697579],[114.426394,22.699918],[114.42057,22.713999],[114.409227,22.713574],[114.403403,22.722926],[114.413902,22.736261],[114.414055,22.752251],[114.42057,22.753898],[114.418117,22.766593],[114.404706,22.781305],[114.396352,22.777322],[114.394819,22.759794],[114.386236,22.759635],[114.36562,22.766062],[114.355964,22.764893],[114.354125,22.778172],[114.342706,22.783642],[114.351136,22.789696],[114.353128,22.806636],[114.33052,22.809291],[114.318565,22.806583],[114.314503,22.800157],[114.294347,22.803397],[114.284844,22.808282],[114.282852,22.802388],[114.26147,22.781783],[114.250817,22.781677],[114.245529,22.790652],[114.234953,22.792989],[114.229205,22.81253]]],[[[114.650482,22.573916],[114.641592,22.572799],[114.638144,22.585724],[114.657763,22.575565],[114.658913,22.560512],[114.650482,22.573916]]],[[[114.628947,22.448492],[114.620287,22.466325],[114.631783,22.468082],[114.657227,22.462439],[114.652092,22.454507],[114.638527,22.454241],[114.628947,22.448492]]],[[[114.609941,22.670262],[114.617988,22.669518],[114.61293,22.661704],[114.609941,22.670262]]],[[[114.840007,22.51199],[114.845908,22.516779],[114.855641,22.513799],[114.84062,22.502038],[114.840007,22.51199]]],[[[114.649409,22.675152],[114.653548,22.664043],[114.648107,22.664734],[114.649409,22.675152]]],[[[114.72689,22.577693],[114.719226,22.580246],[114.720836,22.588543],[114.72689,22.577693]]],[[[114.641286,22.429378],[114.654238,22.445138],[114.659602,22.444073],[114.650482,22.428739],[114.641286,22.429378]]]]}},{"type":"Feature","properties":{"adcode":441400,"name":"梅州市","center":[116.117582,24.299112],"centroid":[116.084478,24.201791],"childrenNum":8,"level":"city","parent":{"adcode":440000},"subFeatureIndex":11,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[116.368468,23.73304],[116.35475,23.743058],[116.350151,23.751969],[116.338732,23.758823],[116.335437,23.773953],[116.320033,23.775534],[116.306621,23.769841],[116.295892,23.759139],[116.288458,23.763199],[116.271215,23.757294],[116.271598,23.746433],[116.233126,23.718169],[116.236957,23.727608],[116.227684,23.728821],[116.214119,23.71896],[116.214349,23.702558],[116.19588,23.685784],[116.181089,23.68552],[116.183005,23.674442],[116.17764,23.657296],[116.187373,23.652336],[116.191358,23.641361],[116.179939,23.637139],[116.17787,23.628221],[116.165455,23.616082],[116.150664,23.616241],[116.133497,23.62421],[116.117326,23.620885],[116.106137,23.628379],[116.09878,23.622574],[116.087208,23.626426],[116.074256,23.636295],[116.072417,23.642785],[116.056476,23.646374],[116.055786,23.639514],[116.039386,23.648168],[116.021223,23.644685],[116.01126,23.654236],[116.017467,23.661939],[116.006585,23.675497],[115.985816,23.676974],[115.972328,23.664102],[115.95861,23.655871],[115.954471,23.64516],[115.923663,23.628168],[115.914696,23.630859],[115.897836,23.620093],[115.896227,23.625846],[115.876148,23.633973],[115.863656,23.646057],[115.86036,23.65756],[115.83461,23.660884],[115.81844,23.644632],[115.800047,23.615502],[115.808247,23.606687],[115.807787,23.59877],[115.798131,23.597133],[115.812309,23.578974],[115.802116,23.557168],[115.80794,23.554158],[115.801349,23.543122],[115.788398,23.539267],[115.793302,23.525694],[115.786175,23.517455],[115.776059,23.524638],[115.759735,23.522895],[115.751612,23.52749],[115.736437,23.525958],[115.733755,23.51624],[115.723179,23.514656],[115.713829,23.519092],[115.70195,23.534092],[115.69467,23.550092],[115.687389,23.557538],[115.669686,23.548403],[115.659493,23.532613],[115.639797,23.528758],[115.642096,23.513863],[115.637115,23.514972],[115.622094,23.507102],[115.623167,23.489934],[115.616116,23.475035],[115.606537,23.471865],[115.594964,23.469434],[115.596804,23.464838],[115.582013,23.448668],[115.561244,23.434557],[115.543234,23.436935],[115.527293,23.428743],[115.52668,23.421978],[115.518403,23.422506],[115.507827,23.411142],[115.513652,23.407177],[115.50936,23.399935],[115.510816,23.388621],[115.505068,23.378734],[115.475486,23.373658],[115.463914,23.375456],[115.457017,23.38381],[115.460082,23.400252],[115.454411,23.404904],[115.454871,23.418119],[115.435558,23.43165],[115.440693,23.447981],[115.432876,23.468906],[115.426208,23.468431],[115.426438,23.483119],[115.416858,23.484122],[115.418468,23.495956],[115.432569,23.495903],[115.440616,23.500975],[115.432569,23.516134],[115.435328,23.534356],[115.450349,23.555954],[115.436708,23.561762],[115.437781,23.571688],[115.428737,23.581138],[115.43142,23.600195],[115.432722,23.63772],[115.441919,23.643102],[115.448893,23.662888],[115.452648,23.663363],[115.451652,23.680509],[115.457093,23.696281],[115.454028,23.706672],[115.445981,23.709572],[115.443528,23.703349],[115.420231,23.696123],[115.407432,23.703349],[115.411724,23.707568],[115.412567,23.723021],[115.403677,23.724392],[115.388503,23.734516],[115.382985,23.748173],[115.399385,23.768734],[115.387276,23.778223],[115.365588,23.760246],[115.347961,23.75392],[115.325966,23.75761],[115.317153,23.761617],[115.349264,23.782545],[115.358461,23.792455],[115.35072,23.800677],[115.363136,23.80426],[115.349801,23.818489],[115.356315,23.829028],[115.354399,23.842411],[115.37647,23.851052],[115.371872,23.865223],[115.378846,23.867646],[115.381835,23.88034],[115.391875,23.881921],[115.391491,23.89672],[115.403524,23.909675],[115.400688,23.927999],[115.411877,23.939898],[115.408505,23.950585],[115.425212,23.953796],[115.453261,23.967009],[115.452495,23.983956],[115.446517,23.99364],[115.449889,24.012531],[115.445214,24.016109],[115.445598,24.038311],[115.426132,24.053934],[115.417778,24.068241],[115.428967,24.076708],[115.437551,24.104],[115.44874,24.112781],[115.442302,24.124452],[115.446824,24.130498],[115.453261,24.125504],[115.463301,24.130077],[115.473494,24.142168],[115.481387,24.143167],[115.480084,24.130761],[115.483763,24.123506],[115.494339,24.122297],[115.500393,24.128395],[115.508364,24.105157],[115.513192,24.099058],[115.529592,24.098479],[115.537409,24.108838],[115.532581,24.12256],[115.522235,24.128868],[115.521929,24.137122],[115.509897,24.140381],[115.520856,24.143324],[115.507061,24.165977],[115.510356,24.175542],[115.503612,24.187575],[115.515185,24.190728],[115.520626,24.182689],[115.545303,24.170234],[115.538789,24.179588],[115.538099,24.192777],[115.551204,24.198504],[115.557718,24.206333],[115.564156,24.200816],[115.571437,24.204231],[115.573276,24.227136],[115.570823,24.235751],[115.577874,24.242264],[115.590826,24.242894],[115.592205,24.255289],[115.576725,24.270098],[115.580863,24.277554],[115.577721,24.290313],[115.567758,24.295249],[115.571743,24.309948],[115.563619,24.312993],[115.560477,24.329002],[115.552737,24.333359],[115.550898,24.359914],[115.557948,24.386201],[115.576035,24.395801],[115.583852,24.411276],[115.582166,24.42271],[115.573812,24.42785],[115.575805,24.441747],[115.58891,24.45061],[115.593048,24.459733],[115.575728,24.461044],[115.576495,24.470953],[115.57067,24.478398],[115.560401,24.477035],[115.551511,24.469433],[115.554116,24.484427],[115.538712,24.48233],[115.530129,24.491661],[115.515951,24.495068],[115.505452,24.493181],[115.493266,24.498004],[115.486982,24.516348],[115.491427,24.522847],[115.485679,24.541502],[115.488055,24.547947],[115.483227,24.562722],[115.50024,24.562093],[115.493649,24.569166],[115.513882,24.576186],[115.506065,24.601485],[115.520702,24.618296],[115.520779,24.628507],[115.529056,24.634476],[115.559481,24.64301],[115.567681,24.631963],[115.570747,24.61929],[115.578181,24.615206],[115.594198,24.615206],[115.608682,24.62615],[115.629068,24.619762],[115.635582,24.612168],[115.649607,24.614735],[115.660566,24.606774],[115.671679,24.604732],[115.685167,24.585352],[115.687083,24.570633],[115.678269,24.56487],[115.686086,24.547004],[115.708541,24.544856],[115.717968,24.539721],[115.743948,24.543651],[115.759429,24.5502],[115.785102,24.56728],[115.806101,24.562932],[115.844113,24.562722],[115.848941,24.569952],[115.840971,24.576238],[115.840971,24.584043],[115.818056,24.603213],[115.796828,24.629606],[115.786712,24.634162],[115.789471,24.644895],[115.780197,24.663166],[115.761804,24.668139],[115.779584,24.677299],[115.798284,24.674944],[115.797747,24.682114],[115.805641,24.685883],[115.808017,24.697606],[115.801196,24.705665],[115.794988,24.70174],[115.780887,24.702054],[115.769162,24.709904],[115.771614,24.726282],[115.757359,24.73617],[115.757129,24.749929],[115.765406,24.76332],[115.776672,24.77446],[115.765406,24.79381],[115.774143,24.80453],[115.77284,24.814046],[115.779278,24.819797],[115.78081,24.835115],[115.791846,24.83867],[115.785562,24.846145],[115.79108,24.855083],[115.782573,24.862922],[115.796674,24.858584],[115.80725,24.862766],[115.805105,24.873218],[115.809243,24.892866],[115.819666,24.906816],[115.831621,24.908175],[115.850474,24.900338],[115.856145,24.891769],[115.865572,24.89041],[115.864729,24.876144],[115.8599,24.864804],[115.871779,24.868671],[115.893544,24.871075],[115.907033,24.880168],[115.904044,24.888007],[115.885421,24.898823],[115.882049,24.923847],[115.878447,24.932571],[115.8973,24.937115],[115.908412,24.923272],[115.954625,24.918519],[115.962748,24.91319],[115.976696,24.915959],[115.985586,24.899658],[116.00306,24.896471],[116.015245,24.905719],[116.023368,24.902166],[116.038313,24.886909],[116.043907,24.87165],[116.051648,24.862034],[116.06276,24.859891],[116.068891,24.84996],[116.083222,24.853515],[116.09058,24.838199],[116.094871,24.849229],[116.116023,24.851424],[116.139551,24.844681],[116.153269,24.846667],[116.181012,24.875099],[116.191741,24.877137],[116.200938,24.85801],[116.210901,24.854455],[116.22048,24.842642],[116.22117,24.830828],[116.229294,24.826019],[116.23895,24.83041],[116.250063,24.827901],[116.250906,24.822777],[116.23895,24.813262],[116.233049,24.80066],[116.251289,24.793392],[116.26493,24.799876],[116.29137,24.800242],[116.299954,24.802909],[116.318193,24.818176],[116.332295,24.826646],[116.345783,24.829103],[116.351071,24.848549],[116.349768,24.856703],[116.3618,24.869873],[116.374599,24.86841],[116.379274,24.877503],[116.394754,24.877869],[116.393911,24.856912],[116.407323,24.853253],[116.417822,24.840656],[116.377894,24.821836],[116.374905,24.807197],[116.38939,24.790359],[116.399659,24.794019],[116.40717,24.777808],[116.419125,24.767295],[116.41537,24.756467],[116.417209,24.743076],[116.437365,24.733606],[116.446102,24.714456],[116.455911,24.713724],[116.469706,24.719323],[116.486949,24.71859],[116.501511,24.698339],[116.504959,24.66704],[116.517681,24.651544],[116.513466,24.645052],[116.510477,24.615572],[116.530096,24.604941],[116.553318,24.613059],[116.570484,24.621752],[116.57217,24.628978],[116.586425,24.636727],[116.596465,24.654057],[116.624131,24.641387],[116.632101,24.640078],[116.635167,24.647722],[116.650954,24.651387],[116.667048,24.658611],[116.690116,24.659501],[116.700462,24.655732],[116.707282,24.665103],[116.741923,24.666568],[116.753802,24.654528],[116.777559,24.67955],[116.80124,24.678293],[116.815342,24.65458],[116.811969,24.644895],[116.798558,24.637146],[116.798864,24.624003],[116.787522,24.614735],[116.781621,24.603056],[116.761159,24.582943],[116.767826,24.564189],[116.757327,24.557483],[116.758323,24.546637],[116.772348,24.534743],[116.781085,24.533747],[116.783307,24.51834],[116.796795,24.50204],[116.816798,24.490403],[116.814269,24.483798],[116.832278,24.496117],[116.849369,24.47908],[116.860788,24.46225],[116.85343,24.453127],[116.841475,24.453389],[116.838946,24.442586],[116.848219,24.426906],[116.8555,24.423812],[116.863547,24.409807],[116.869448,24.407237],[116.87328,24.391132],[116.885235,24.396221],[116.903935,24.369883],[116.896961,24.360071],[116.896118,24.35073],[116.908226,24.341756],[116.909299,24.329212],[116.919569,24.320972],[116.912978,24.31147],[116.914281,24.287741],[116.918189,24.283383],[116.935892,24.284748],[116.939418,24.274561],[116.935203,24.249879],[116.939188,24.239585],[116.933363,24.222251],[116.917116,24.232809],[116.896577,24.218784],[116.904548,24.202813],[116.900333,24.196771],[116.884315,24.193671],[116.883856,24.181638],[116.878568,24.167817],[116.867072,24.163717],[116.859485,24.177276],[116.847836,24.182689],[116.836034,24.173387],[116.831819,24.161878],[116.809594,24.169183],[116.796872,24.157043],[116.789745,24.157095],[116.780241,24.147319],[116.76637,24.124032],[116.766447,24.107523],[116.772195,24.09401],[116.76752,24.074657],[116.75748,24.082125],[116.744069,24.061982],[116.734642,24.053619],[116.71257,24.062455],[116.700155,24.050094],[116.708662,24.033471],[116.708815,24.019161],[116.697166,24.002586],[116.690422,24.005375],[116.69548,23.991903],[116.68797,23.981062],[116.684751,23.989588],[116.657775,23.988588],[116.646969,23.994429],[116.641144,23.989588],[116.637312,23.968851],[116.628652,23.973693],[116.610796,23.968483],[116.60842,23.961166],[116.62574,23.950006],[116.623518,23.947269],[116.604205,23.950322],[116.608343,23.94153],[116.604205,23.929474],[116.604741,23.910781],[116.590487,23.900933],[116.575083,23.909149],[116.557992,23.907253],[116.558682,23.899037],[116.536304,23.886608],[116.535384,23.88171],[116.522279,23.882131],[116.514386,23.866698],[116.496989,23.869226],[116.498981,23.85848],[116.516608,23.845994],[116.525881,23.8324],[116.518371,23.823443],[116.509864,23.827764],[116.513389,23.815854],[116.510324,23.808793],[116.516761,23.802679],[116.505955,23.793614],[116.504729,23.763673],[116.496146,23.752496],[116.485187,23.751547],[116.464954,23.755238],[116.451849,23.76905],[116.439357,23.773584],[116.436215,23.780331],[116.416903,23.777854],[116.402955,23.769261],[116.401958,23.76225],[116.380883,23.737364],[116.373296,23.740264],[116.368468,23.73304]]]]}},{"type":"Feature","properties":{"adcode":441500,"name":"汕尾市","center":[115.364238,22.774485],"centroid":[115.537741,23.004576],"childrenNum":4,"level":"city","parent":{"adcode":440000},"subFeatureIndex":12,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[116.226918,22.914491],[116.21389,22.899262],[116.20408,22.892895],[116.192661,22.876019],[116.17672,22.860574],[116.155262,22.844384],[116.147675,22.843004],[116.138018,22.833607],[116.122538,22.82936],[116.106903,22.817892],[116.097094,22.816777],[116.088204,22.821609],[116.081077,22.834882],[116.070501,22.843588],[116.056093,22.844703],[116.038926,22.840774],[116.010647,22.828086],[115.997312,22.826865],[115.976083,22.812636],[115.959529,22.796175],[115.950563,22.795644],[115.942286,22.802759],[115.929487,22.801644],[115.909485,22.787147],[115.883352,22.785341],[115.86243,22.770789],[115.84488,22.749117],[115.829322,22.73472],[115.818746,22.731373],[115.805105,22.733711],[115.794222,22.744761],[115.793302,22.762397],[115.795985,22.783589],[115.794759,22.798883],[115.788398,22.809981],[115.755903,22.837324],[115.740116,22.840827],[115.696279,22.842791],[115.690301,22.857071],[115.682561,22.863918],[115.654205,22.865457],[115.63244,22.860043],[115.598949,22.842526],[115.583699,22.828564],[115.580173,22.80483],[115.570364,22.78651],[115.546376,22.766752],[115.541701,22.755492],[115.549595,22.749117],[115.573429,22.753101],[115.588067,22.744974],[115.602551,22.753898],[115.609142,22.752782],[115.607609,22.731533],[115.589063,22.724307],[115.567758,22.696251],[115.565382,22.685463],[115.581936,22.673185],[115.574195,22.650488],[115.559175,22.658515],[115.556722,22.665212],[115.537793,22.662927],[115.507827,22.682593],[115.493803,22.682805],[115.471731,22.697845],[115.441536,22.694285],[115.42912,22.683815],[115.396933,22.68525],[115.381375,22.683974],[115.378923,22.6937],[115.365741,22.698058],[115.35118,22.710545],[115.34183,22.72521],[115.346505,22.743008],[115.34344,22.768505],[115.337998,22.776684],[115.326886,22.781677],[115.310256,22.78412],[115.284429,22.783058],[115.235764,22.775569],[115.22902,22.782208],[115.233311,22.80175],[115.259521,22.817414],[115.244347,22.823945],[115.227947,22.825272],[115.198595,22.821874],[115.190241,22.818636],[115.18411,22.800635],[115.193307,22.791395],[115.194303,22.775463],[115.188402,22.772701],[115.173917,22.775357],[115.161195,22.786934],[115.154528,22.801644],[115.133376,22.799945],[115.106246,22.790174],[115.081799,22.789006],[115.066931,22.785607],[115.055129,22.778384],[115.050991,22.764628],[115.049918,22.746727],[115.034054,22.744442],[115.023784,22.736527],[115.023708,22.726167],[115.034513,22.721916],[115.039112,22.710811],[115.02616,22.702149],[115.023094,22.717559],[115.009836,22.729248],[115.007154,22.740724],[114.994432,22.754376],[114.999797,22.773551],[114.992286,22.771055],[114.977725,22.776631],[114.974276,22.78805],[114.952741,22.794582],[114.944388,22.809397],[114.950595,22.81614],[114.950135,22.834722],[114.940556,22.842473],[114.931666,22.840456],[114.927987,22.849745],[114.932356,22.859035],[114.925075,22.868323],[114.939023,22.870075],[114.941245,22.877452],[114.926071,22.890454],[114.926225,22.900854],[114.917794,22.907009],[114.930363,22.920698],[114.946304,22.919372],[114.953507,22.928656],[114.965923,22.926693],[114.975962,22.938682],[114.986308,22.935075],[114.997804,22.938682],[114.99995,22.949504],[115.010066,22.955922],[115.020029,22.955498],[115.043557,22.969924],[115.047925,22.966848],[115.062333,22.994106],[115.075974,22.995219],[115.074901,22.999727],[115.085937,23.007733],[115.099349,22.996227],[115.110998,23.009589],[115.129467,23.003279],[115.146864,22.991136],[115.14878,23.000363],[115.163341,23.012558],[115.165947,23.027084],[115.180431,23.040337],[115.194226,23.045637],[115.20235,23.043835],[115.220743,23.054754],[115.22695,23.0538],[115.24588,23.061803],[115.251551,23.073568],[115.265882,23.084114],[115.262664,23.091426],[115.290253,23.095559],[115.287724,23.117865],[115.281363,23.125016],[115.285348,23.135505],[115.28167,23.145145],[115.283509,23.157433],[115.294468,23.160981],[115.311635,23.157645],[115.317076,23.163523],[115.325277,23.159392],[115.336925,23.170302],[115.342367,23.19413],[115.376241,23.205143],[115.388119,23.22023],[115.404443,23.21986],[115.40314,23.230658],[115.409655,23.237963],[115.425289,23.236322],[115.419311,23.243785],[115.418161,23.25527],[115.430883,23.270617],[115.423909,23.277178],[115.437934,23.281993],[115.445674,23.279718],[115.459009,23.288554],[115.452342,23.29321],[115.460235,23.30067],[115.458396,23.312414],[115.468359,23.311409],[115.485756,23.315218],[115.497328,23.322465],[115.471348,23.327543],[115.47564,23.333467],[115.470888,23.35642],[115.475486,23.373658],[115.505068,23.378734],[115.510816,23.388621],[115.50936,23.399935],[115.513652,23.407177],[115.507827,23.411142],[115.518403,23.422506],[115.52668,23.421978],[115.527293,23.428743],[115.543234,23.436935],[115.561244,23.434557],[115.582013,23.448668],[115.596804,23.464838],[115.594964,23.469434],[115.606537,23.471865],[115.61443,23.469751],[115.625236,23.45168],[115.646235,23.439684],[115.648304,23.430329],[115.657884,23.420445],[115.682868,23.407759],[115.673058,23.395071],[115.671602,23.38344],[115.676813,23.354992],[115.694057,23.354675],[115.703023,23.368265],[115.725938,23.369375],[115.739886,23.379263],[115.777668,23.383651],[115.787401,23.368952],[115.811236,23.346689],[115.819666,23.335741],[115.812845,23.326696],[115.802039,23.324422],[115.797288,23.309134],[115.797671,23.286596],[115.824571,23.272416],[115.831621,23.258128],[115.810929,23.24876],[115.797288,23.249184],[115.768089,23.24442],[115.758126,23.244949],[115.749236,23.236375],[115.750079,23.225683],[115.757743,23.215942],[115.752148,23.193601],[115.73866,23.211125],[115.730613,23.199107],[115.733525,23.192806],[115.725631,23.183805],[115.752991,23.167813],[115.76349,23.159233],[115.780657,23.15828],[115.791386,23.13953],[115.79951,23.133015],[115.833154,23.122897],[115.832924,23.112196],[115.85147,23.098791],[115.864345,23.117865],[115.883505,23.11956],[115.898832,23.129466],[115.908795,23.125652],[115.916612,23.112302],[115.923126,23.110977],[115.920751,23.100116],[115.939833,23.082206],[115.937688,23.067156],[115.950333,23.06599],[115.951099,23.061273],[115.964741,23.052952],[115.966963,23.04728],[115.955314,23.038322],[115.950716,23.024327],[115.937688,23.030424],[115.923586,23.017594],[115.942209,23.006195],[115.954471,23.021571],[115.959989,23.017435],[115.945505,22.996015],[115.94949,22.990023],[115.941213,22.987053],[115.9488,22.972682],[115.943819,22.956293],[115.958993,22.957036],[115.963515,22.94961],[115.973247,22.969818],[115.977846,22.951838],[115.967116,22.943775],[115.979225,22.938629],[115.983287,22.925897],[116.0026,22.937409],[116.005665,22.945632],[116.017697,22.934067],[116.026894,22.939107],[116.055633,22.920433],[116.080234,22.915764],[116.086595,22.901491],[116.109969,22.891143],[116.124453,22.892523],[116.135106,22.900589],[116.143843,22.890294],[116.157178,22.886049],[116.16967,22.886367],[116.173272,22.900271],[116.16806,22.913695],[116.181549,22.92611],[116.198256,22.93168],[116.211667,22.926004],[116.223929,22.926852],[116.226918,22.914491]]],[[[115.107702,22.77132],[115.108622,22.783217],[115.117129,22.779712],[115.107702,22.77132]]],[[[115.185796,22.737695],[115.195146,22.741945],[115.196525,22.735889],[115.185796,22.737695]]]]}},{"type":"Feature","properties":{"adcode":441600,"name":"河源市","center":[114.697802,23.746266],"centroid":[114.962729,24.043541],"childrenNum":6,"level":"city","parent":{"adcode":440000},"subFeatureIndex":13,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[115.419311,23.243785],[115.403447,23.250083],[115.401378,23.276437],[115.39494,23.288342],[115.384517,23.289877],[115.377313,23.302892],[115.365971,23.299823],[115.362369,23.305114],[115.348191,23.308552],[115.345585,23.316964],[115.334856,23.322412],[115.310792,23.307971],[115.303665,23.324634],[115.306884,23.344415],[115.303282,23.346425],[115.306117,23.360597],[115.295618,23.357319],[115.277608,23.375879],[115.265039,23.384445],[115.240822,23.376725],[115.235457,23.385343],[115.221739,23.384445],[115.205799,23.377412],[115.197675,23.380796],[115.189551,23.376619],[115.17637,23.381008],[115.168553,23.377307],[115.169089,23.368794],[115.157517,23.362342],[115.141346,23.360809],[115.12234,23.368159],[115.11345,23.35954],[115.100269,23.355997],[115.087623,23.343886],[115.078274,23.344944],[115.069384,23.330875],[115.06126,23.331351],[115.056125,23.321195],[115.048768,23.320561],[115.031525,23.329235],[115.007154,23.332356],[115.007384,23.324475],[114.996884,23.31379],[114.992133,23.296755],[114.978032,23.294374],[114.971058,23.302469],[114.976116,23.316858],[114.970981,23.313631],[114.961631,23.326749],[114.948066,23.329606],[114.953891,23.343727],[114.944158,23.350179],[114.923236,23.338597],[114.913043,23.338756],[114.915419,23.316064],[114.919097,23.314848],[114.91174,23.295908],[114.91174,23.274532],[114.89488,23.254899],[114.898865,23.246643],[114.879629,23.241139],[114.87595,23.222877],[114.859933,23.211072],[114.861926,23.199901],[114.868823,23.189841],[114.856944,23.177451],[114.850353,23.165271],[114.834413,23.171784],[114.827362,23.184493],[114.804294,23.199795],[114.802455,23.205566],[114.786361,23.207101],[114.782989,23.224571],[114.786284,23.236269],[114.793258,23.23971],[114.786821,23.25654],[114.786821,23.266277],[114.78023,23.265801],[114.779234,23.275114],[114.768581,23.2794],[114.779617,23.294903],[114.776628,23.313472],[114.761684,23.314636],[114.75448,23.328812],[114.73693,23.328389],[114.73509,23.334366],[114.72758,23.327649],[114.727427,23.338333],[114.715854,23.347905],[114.719916,23.358588],[114.697461,23.366203],[114.703746,23.367578],[114.70022,23.389256],[114.693246,23.393538],[114.707501,23.40427],[114.686119,23.413521],[114.665657,23.409662],[114.659985,23.403318],[114.652858,23.411882],[114.650712,23.396922],[114.632779,23.407865],[114.642435,23.416956],[114.66673,23.447347],[114.676079,23.45522],[114.697155,23.46061],[114.698381,23.470438],[114.68267,23.493949],[114.685582,23.508317],[114.698764,23.520624],[114.692173,23.532402],[114.677076,23.529338],[114.661825,23.535623],[114.65554,23.562871],[114.6396,23.556429],[114.636764,23.548614],[114.625039,23.549406],[114.623583,23.529233],[114.606646,23.536838],[114.611321,23.544178],[114.600591,23.555214],[114.583041,23.563504],[114.57898,23.561498],[114.567637,23.570738],[114.567561,23.579554],[114.554609,23.590165],[114.556985,23.5965],[114.55047,23.605315],[114.557061,23.622204],[114.545872,23.631757],[114.530545,23.666634],[114.520428,23.668428],[114.512688,23.688527],[114.493529,23.699182],[114.473143,23.703349],[114.440112,23.687578],[114.424248,23.697178],[114.421413,23.709942],[114.405395,23.708201],[114.388612,23.739262],[114.378649,23.744693],[114.368839,23.725499],[114.355351,23.736046],[114.357267,23.747593],[114.341556,23.7516],[114.337954,23.770632],[114.348913,23.791453],[114.342706,23.796882],[114.34102,23.807844],[114.332666,23.808635],[114.326918,23.8324],[114.33029,23.852948],[114.343855,23.86654],[114.356347,23.869595],[114.346154,23.878392],[114.34991,23.887925],[114.362632,23.901091],[114.360486,23.910412],[114.36769,23.912519],[114.370449,23.92742],[114.382481,23.932159],[114.378036,23.942794],[114.386696,23.95627],[114.384856,23.967798],[114.389685,23.97043],[114.382941,23.981851],[114.385393,23.994482],[114.391984,23.991693],[114.385546,24.003901],[114.389685,24.012741],[114.399494,24.018003],[114.398038,24.026],[114.412523,24.027421],[114.420416,24.019582],[114.425628,24.032998],[114.440725,24.033208],[114.436587,24.048569],[114.437813,24.062192],[114.44586,24.07066],[114.46364,24.07592],[114.481267,24.086595],[114.493222,24.106787],[114.489697,24.114043],[114.495828,24.118617],[114.509469,24.106682],[114.522957,24.12419],[114.527939,24.135807],[114.533993,24.138856],[114.535833,24.124347],[114.546715,24.130393],[114.554226,24.124295],[114.565568,24.136175],[114.558134,24.15063],[114.568327,24.159303],[114.594077,24.164138],[114.600055,24.174911],[114.590782,24.187838],[114.590935,24.203653],[114.597602,24.21248],[114.591318,24.225981],[114.577293,24.227241],[114.566028,24.233019],[114.556065,24.245888],[114.548324,24.230603],[114.512458,24.210904],[114.511155,24.205335],[114.491613,24.192357],[114.48119,24.172284],[114.474216,24.16624],[114.470537,24.171811],[114.460574,24.169604],[114.46272,24.161931],[114.469848,24.162141],[114.469311,24.144376],[114.463946,24.14017],[114.474063,24.135229],[114.482953,24.118827],[114.479044,24.112939],[114.46387,24.110836],[114.446856,24.121245],[114.439499,24.121982],[114.433215,24.133337],[114.422179,24.131181],[114.419956,24.139329],[114.393517,24.140959],[114.378879,24.139172],[114.365161,24.132233],[114.352209,24.143219],[114.340713,24.135807],[114.337418,24.125294],[114.329831,24.126871],[114.33029,24.137279],[114.316419,24.147319],[114.306533,24.165399],[114.292891,24.175069],[114.289289,24.1819],[114.298026,24.195142],[114.290899,24.207594],[114.274192,24.212742],[114.274958,24.224195],[114.263156,24.246676],[114.254802,24.256707],[114.272889,24.257495],[114.254649,24.266055],[114.266451,24.272776],[114.263692,24.27829],[114.279326,24.303176],[114.280553,24.313098],[114.272966,24.324856],[114.280859,24.337348],[114.292508,24.346952],[114.293581,24.352672],[114.278637,24.364951],[114.249208,24.362695],[114.249898,24.386935],[114.254879,24.400155],[114.245683,24.411328],[114.242004,24.426014],[114.257868,24.435245],[114.283465,24.453965],[114.292968,24.468856],[114.306839,24.472998],[114.310595,24.480757],[114.286607,24.500572],[114.280399,24.511526],[114.280169,24.523109],[114.273732,24.533695],[114.288906,24.537991],[114.293275,24.551982],[114.310518,24.558583],[114.308142,24.574143],[114.324006,24.579538],[114.331593,24.576971],[114.338567,24.583362],[114.351059,24.57849],[114.363858,24.582524],[114.37658,24.571995],[114.379722,24.563403],[114.391677,24.563455],[114.387309,24.548],[114.390758,24.533537],[114.403403,24.528716],[114.406315,24.517973],[114.402023,24.498528],[114.41099,24.502564],[114.422256,24.496903],[114.42877,24.486262],[114.442718,24.498633],[114.451455,24.500362],[114.469924,24.510688],[114.481113,24.529974],[114.500656,24.534166],[114.534147,24.559002],[114.546715,24.542812],[114.562579,24.53752],[114.572159,24.542288],[114.592468,24.537991],[114.608255,24.563613],[114.624349,24.575662],[114.638604,24.570371],[114.665197,24.583676],[114.677842,24.553815],[114.686502,24.538568],[114.699914,24.537101],[114.705202,24.526096],[114.71869,24.55413],[114.72666,24.549781],[114.738079,24.56508],[114.732868,24.57519],[114.735703,24.582838],[114.730415,24.592424],[114.729879,24.608922],[114.752717,24.616253],[114.768964,24.605779],[114.781226,24.612954],[114.796017,24.602166],[114.804217,24.605413],[114.826366,24.588286],[114.83288,24.596352],[114.846675,24.60248],[114.859243,24.597295],[114.854262,24.582524],[114.861619,24.56728],[114.869053,24.562355],[114.882924,24.569218],[114.88668,24.580271],[114.89327,24.582367],[114.893807,24.590957],[114.901854,24.607926],[114.898558,24.623008],[114.905839,24.632538],[114.909594,24.661543],[114.919634,24.667092],[114.936801,24.665417],[114.937414,24.651911],[114.955194,24.655418],[114.962321,24.665155],[114.978875,24.673216],[114.991213,24.673321],[115.003858,24.679183],[115.007844,24.672431],[115.024857,24.669133],[115.030911,24.678136],[115.046699,24.688761],[115.045549,24.69792],[115.054899,24.709904],[115.059421,24.702735],[115.073829,24.704252],[115.074212,24.697972],[115.083255,24.700484],[115.08724,24.687087],[115.104943,24.667825],[115.111611,24.671437],[115.120731,24.66437],[115.125636,24.681486],[115.138511,24.681277],[115.14832,24.68986],[115.155448,24.688761],[115.168859,24.695094],[115.195146,24.691902],[115.188095,24.697135],[115.18434,24.711421],[115.200204,24.713671],[115.224575,24.726386],[115.233771,24.723508],[115.247566,24.731671],[115.258908,24.728793],[115.269944,24.749406],[115.278528,24.754113],[115.306654,24.758664],[115.321981,24.748725],[115.338995,24.749092],[115.358537,24.735176],[115.363749,24.739361],[115.362829,24.757461],[115.372562,24.774408],[115.389499,24.774408],[115.401301,24.790359],[115.41295,24.792869],[115.450962,24.766301],[115.465677,24.767243],[115.478705,24.761123],[115.48292,24.749667],[115.500087,24.74114],[115.496485,24.734077],[115.506601,24.724921],[115.507904,24.716497],[115.523691,24.717544],[115.52783,24.712573],[115.523078,24.703049],[115.534191,24.691954],[115.556186,24.68269],[115.555189,24.671803],[115.559634,24.660915],[115.559481,24.64301],[115.529056,24.634476],[115.520779,24.628507],[115.520702,24.618296],[115.506065,24.601485],[115.513882,24.576186],[115.493649,24.569166],[115.50024,24.562093],[115.483227,24.562722],[115.488055,24.547947],[115.485679,24.541502],[115.491427,24.522847],[115.486982,24.516348],[115.493266,24.498004],[115.505452,24.493181],[115.515951,24.495068],[115.530129,24.491661],[115.538712,24.48233],[115.554116,24.484427],[115.551511,24.469433],[115.560401,24.477035],[115.57067,24.478398],[115.576495,24.470953],[115.575728,24.461044],[115.593048,24.459733],[115.58891,24.45061],[115.575805,24.441747],[115.573812,24.42785],[115.582166,24.42271],[115.583852,24.411276],[115.576035,24.395801],[115.557948,24.386201],[115.550898,24.359914],[115.552737,24.333359],[115.560477,24.329002],[115.563619,24.312993],[115.571743,24.309948],[115.567758,24.295249],[115.577721,24.290313],[115.580863,24.277554],[115.576725,24.270098],[115.592205,24.255289],[115.590826,24.242894],[115.577874,24.242264],[115.570823,24.235751],[115.573276,24.227136],[115.571437,24.204231],[115.564156,24.200816],[115.557718,24.206333],[115.551204,24.198504],[115.538099,24.192777],[115.538789,24.179588],[115.545303,24.170234],[115.520626,24.182689],[115.515185,24.190728],[115.503612,24.187575],[115.510356,24.175542],[115.507061,24.165977],[115.520856,24.143324],[115.509897,24.140381],[115.521929,24.137122],[115.522235,24.128868],[115.532581,24.12256],[115.537409,24.108838],[115.529592,24.098479],[115.513192,24.099058],[115.508364,24.105157],[115.500393,24.128395],[115.494339,24.122297],[115.483763,24.123506],[115.480084,24.130761],[115.481387,24.143167],[115.473494,24.142168],[115.463301,24.130077],[115.453261,24.125504],[115.446824,24.130498],[115.442302,24.124452],[115.44874,24.112781],[115.437551,24.104],[115.428967,24.076708],[115.417778,24.068241],[115.426132,24.053934],[115.445598,24.038311],[115.445214,24.016109],[115.449889,24.012531],[115.446517,23.99364],[115.452495,23.983956],[115.453261,23.967009],[115.425212,23.953796],[115.408505,23.950585],[115.411877,23.939898],[115.400688,23.927999],[115.403524,23.909675],[115.391491,23.89672],[115.391875,23.881921],[115.381835,23.88034],[115.378846,23.867646],[115.371872,23.865223],[115.37647,23.851052],[115.354399,23.842411],[115.356315,23.829028],[115.349801,23.818489],[115.363136,23.80426],[115.35072,23.800677],[115.358461,23.792455],[115.349264,23.782545],[115.317153,23.761617],[115.325966,23.75761],[115.347961,23.75392],[115.365588,23.760246],[115.387276,23.778223],[115.399385,23.768734],[115.382985,23.748173],[115.388503,23.734516],[115.403677,23.724392],[115.412567,23.723021],[115.411724,23.707568],[115.407432,23.703349],[115.420231,23.696123],[115.443528,23.703349],[115.445981,23.709572],[115.454028,23.706672],[115.457093,23.696281],[115.451652,23.680509],[115.452648,23.663363],[115.448893,23.662888],[115.441919,23.643102],[115.432722,23.63772],[115.43142,23.600195],[115.428737,23.581138],[115.437781,23.571688],[115.436708,23.561762],[115.450349,23.555954],[115.435328,23.534356],[115.432569,23.516134],[115.440616,23.500975],[115.432569,23.495903],[115.418468,23.495956],[115.416858,23.484122],[115.426438,23.483119],[115.426208,23.468431],[115.432876,23.468906],[115.440693,23.447981],[115.435558,23.43165],[115.454871,23.418119],[115.454411,23.404904],[115.460082,23.400252],[115.457017,23.38381],[115.463914,23.375456],[115.475486,23.373658],[115.470888,23.35642],[115.47564,23.333467],[115.471348,23.327543],[115.497328,23.322465],[115.485756,23.315218],[115.468359,23.311409],[115.458396,23.312414],[115.460235,23.30067],[115.452342,23.29321],[115.459009,23.288554],[115.445674,23.279718],[115.437934,23.281993],[115.423909,23.277178],[115.430883,23.270617],[115.418161,23.25527],[115.419311,23.243785]]]]}},{"type":"Feature","properties":{"adcode":441700,"name":"阳江市","center":[111.975107,21.859222],"centroid":[111.779569,22.02617],"childrenNum":4,"level":"city","parent":{"adcode":440000},"subFeatureIndex":14,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[112.307824,21.704174],[112.292573,21.699465],[112.274103,21.699732],[112.263068,21.69347],[112.260232,21.698073],[112.240076,21.701606],[112.241073,21.71552],[112.231646,21.729594],[112.220381,21.726918],[112.208808,21.737085],[112.197006,21.736657],[112.192101,21.757684],[112.196163,21.779403],[112.192331,21.789351],[112.183901,21.796358],[112.171792,21.798444],[112.136539,21.793844],[112.063197,21.771325],[112.03645,21.761428],[112.001197,21.74281],[111.955981,21.710543],[111.949697,21.690848],[111.95031,21.675592],[111.954525,21.667723],[111.972228,21.653644],[112.001274,21.655946],[112.022196,21.645988],[112.024955,21.629764],[112.006178,21.614663],[111.999204,21.61793],[111.972458,21.603256],[111.947244,21.600417],[111.941726,21.606844],[111.921494,21.599507],[111.88762,21.578671],[111.868691,21.559172],[111.862789,21.556976],[111.854972,21.567261],[111.846772,21.567369],[111.829375,21.557994],[111.812822,21.555047],[111.80738,21.559065],[111.813665,21.57144],[111.830985,21.582849],[111.810293,21.604541],[111.794429,21.611289],[111.758716,21.613913],[111.736644,21.610004],[111.693727,21.590348],[111.68453,21.581403],[111.676407,21.565815],[111.677403,21.529758],[111.662382,21.525739],[111.650427,21.512288],[111.645139,21.519308],[111.615863,21.529597],[111.605977,21.529383],[111.579384,21.518237],[111.560684,21.505429],[111.547886,21.502642],[111.541755,21.506393],[111.539839,21.518987],[111.515851,21.514753],[111.495006,21.50157],[111.47577,21.50023],[111.452395,21.515182],[111.459139,21.524935],[111.458909,21.534151],[111.44703,21.570904],[111.439367,21.575725],[111.428944,21.570315],[111.430783,21.57985],[111.42151,21.573743],[111.418291,21.578671],[111.423809,21.591794],[111.416452,21.598061],[111.427718,21.614234],[111.42059,21.617394],[111.415456,21.632762],[111.416299,21.646898],[111.421587,21.648772],[111.42289,21.661353],[111.43155,21.670293],[111.428944,21.676984],[111.44067,21.69347],[111.431243,21.71857],[111.40304,21.728095],[111.389859,21.727132],[111.381275,21.734463],[111.383651,21.750247],[111.388786,21.756239],[111.374301,21.774374],[111.386947,21.780258],[111.401508,21.798337],[111.423503,21.81374],[111.417218,21.850154],[111.402887,21.854858],[111.40327,21.862183],[111.374608,21.860525],[111.367864,21.862557],[111.362499,21.877044],[111.340044,21.874424],[111.325177,21.886986],[111.320119,21.897836],[111.310922,21.893988],[111.290077,21.907991],[111.287241,21.924129],[111.294675,21.935885],[111.283409,21.952181],[111.283716,21.971841],[111.287624,21.977984],[111.283333,21.986797],[111.287624,22.000043],[111.305941,22.011846],[111.304638,22.029948],[111.295901,22.03139],[111.285325,22.048369],[111.288467,22.058299],[111.300653,22.064012],[111.298583,22.069991],[111.304561,22.084403],[111.316976,22.082641],[111.312685,22.088353],[111.327169,22.10303],[111.32441,22.113383],[111.337515,22.118453],[111.340657,22.129445],[111.331384,22.142198],[111.33445,22.160017],[111.327169,22.171326],[111.348091,22.181035],[111.354069,22.193356],[111.346099,22.211488],[111.360507,22.233938],[111.37683,22.243162],[111.381275,22.240869],[111.388556,22.251319],[111.401278,22.253025],[111.416835,22.263367],[111.42266,22.272643],[111.433389,22.275255],[111.453468,22.270297],[111.459446,22.296415],[111.46481,22.30217],[111.459369,22.309738],[111.468182,22.326683],[111.465807,22.33004],[111.479601,22.334143],[111.492247,22.333557],[111.494163,22.339418],[111.511176,22.349594],[111.517001,22.365309],[111.531102,22.358384],[111.542751,22.368079],[111.55256,22.364723],[111.57149,22.375217],[111.590266,22.369784],[111.600689,22.375537],[111.60728,22.39322],[111.616783,22.390504],[111.630884,22.402859],[111.649584,22.426716],[111.660083,22.434915],[111.679089,22.45685],[111.683381,22.468774],[111.680315,22.4824],[111.691198,22.482134],[111.713346,22.504699],[111.721393,22.525931],[111.719707,22.54035],[111.738023,22.570459],[111.764004,22.582692],[111.76408,22.588011],[111.780327,22.595988],[111.784313,22.607581],[111.802476,22.626192],[111.814508,22.633263],[111.807074,22.645384],[111.809756,22.656123],[111.820332,22.666701],[111.820102,22.676427],[111.833437,22.680732],[111.835277,22.68897],[111.84248,22.687801],[111.841331,22.679085],[111.850681,22.676268],[111.86256,22.658993],[111.870836,22.65979],[111.871296,22.633529],[111.857425,22.632731],[111.85344,22.624331],[111.86049,22.617099],[111.859111,22.605401],[111.846925,22.612207],[111.841178,22.605454],[111.831904,22.60891],[111.821788,22.59769],[111.83405,22.595829],[111.835736,22.585937],[111.859417,22.581575],[111.870836,22.571735],[111.873825,22.579288],[111.900265,22.570512],[111.902258,22.581469],[111.914213,22.593701],[111.918965,22.592106],[111.931227,22.606039],[111.939121,22.620875],[111.956517,22.633795],[111.96602,22.627521],[111.98518,22.593861],[111.998361,22.589287],[111.998591,22.575459],[111.989931,22.565033],[111.976366,22.562959],[111.969546,22.546468],[111.98403,22.515342],[111.983724,22.505391],[111.995373,22.492406],[112.008861,22.491075],[112.014302,22.484795],[112.012923,22.471755],[112.034534,22.466325],[112.045494,22.45307],[112.058828,22.451207],[112.073006,22.434969],[112.077375,22.420858],[112.086725,22.416226],[112.108949,22.41335],[112.13286,22.405842],[112.142057,22.41548],[112.161523,22.400676],[112.165431,22.385018],[112.154012,22.37591],[112.153323,22.368452],[112.144433,22.358597],[112.150564,22.35327],[112.147268,22.339098],[112.13447,22.337233],[112.1347,22.349221],[112.128185,22.349754],[112.119832,22.337766],[112.119985,22.35636],[112.107877,22.347463],[112.098757,22.351618],[112.081896,22.351086],[112.065036,22.324392],[112.068945,22.318477],[112.062201,22.304515],[112.068332,22.295988],[112.061511,22.28357],[112.049479,22.270777],[112.036604,22.262781],[112.019973,22.268271],[112.010547,22.266193],[112.004262,22.248333],[112.021353,22.242842],[112.024112,22.235217],[112.037906,22.232178],[112.037906,22.215061],[112.051625,22.207542],[112.052161,22.194742],[112.041585,22.187489],[112.03668,22.168019],[112.051165,22.14684],[112.038826,22.131366],[112.027254,22.127044],[112.034381,22.113437],[112.072776,22.125177],[112.073236,22.130192],[112.086341,22.131313],[112.089867,22.137342],[112.105884,22.135795],[112.106727,22.125497],[112.126806,22.105538],[112.126116,22.096572],[112.143206,22.095185],[112.149721,22.090915],[112.156541,22.095718],[112.16773,22.085417],[112.173785,22.085204],[112.185051,22.066841],[112.199075,22.064706],[112.212334,22.069243],[112.226818,22.063585],[112.231263,22.0528],[112.216779,22.03956],[112.221607,22.01788],[112.232029,22.019589],[112.225669,22.012219],[112.239387,22.006185],[112.263757,22.001432],[112.273644,21.99358],[112.276939,21.982524],[112.299011,21.985248],[112.318477,21.976381],[112.323841,21.962919],[112.331045,21.9595],[112.340472,21.942831],[112.341085,21.919213],[112.346909,21.920442],[112.345147,21.906067],[112.350818,21.901631],[112.348365,21.885276],[112.343077,21.876723],[112.356872,21.872019],[112.370054,21.861434],[112.351737,21.849298],[112.358558,21.834006],[112.342464,21.818499],[112.34576,21.811814],[112.32775,21.799193],[112.333574,21.770844],[112.326754,21.767527],[112.313955,21.751263],[112.304529,21.744415],[112.310047,21.732483],[112.303456,21.71445],[112.307824,21.704174]]],[[[112.181065,21.545885],[112.180836,21.554779],[112.189879,21.558315],[112.190952,21.5506],[112.204823,21.548189],[112.186813,21.543314],[112.181065,21.545885]]],[[[112.140601,21.601917],[112.144816,21.613913],[112.150104,21.601863],[112.140601,21.601917]]],[[[112.118146,21.633458],[112.118146,21.642829],[112.129258,21.640526],[112.118146,21.633458]]]]}},{"type":"Feature","properties":{"adcode":441800,"name":"清远市","center":[113.051227,23.685022],"centroid":[112.879385,24.313377],"childrenNum":8,"level":"city","parent":{"adcode":440000},"subFeatureIndex":15,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.800265,23.902566],[113.791605,23.903882],[113.781105,23.896299],[113.775358,23.877918],[113.767081,23.871439],[113.758191,23.857479],[113.749071,23.854371],[113.742327,23.859165],[113.733667,23.855003],[113.713511,23.862484],[113.709756,23.856267],[113.718033,23.843887],[113.714814,23.834982],[113.720178,23.825129],[113.706384,23.815275],[113.687378,23.825709],[113.684312,23.812956],[113.666379,23.813694],[113.651664,23.820123],[113.640245,23.814274],[113.633731,23.797198],[113.615185,23.779804],[113.626144,23.767416],[113.636414,23.750229],[113.630742,23.738946],[113.63649,23.731985],[113.631662,23.727872],[113.628137,23.711682],[113.638176,23.704562],[113.622619,23.699446],[113.623845,23.694699],[113.61166,23.686206],[113.615721,23.680192],[113.597252,23.664946],[113.587212,23.669008],[113.587289,23.675234],[113.568053,23.679454],[113.568053,23.690215],[113.55878,23.700712],[113.546901,23.702558],[113.545445,23.696387],[113.527052,23.686153],[113.510268,23.682461],[113.481069,23.684043],[113.468731,23.691006],[113.464286,23.70799],[113.443823,23.715901],[113.438459,23.727134],[113.404278,23.723495],[113.397841,23.730562],[113.378375,23.731511],[113.372397,23.709731],[113.366343,23.710311],[113.347413,23.667215],[113.338447,23.665737],[113.334845,23.656399],[113.327947,23.655502],[113.32833,23.645371],[113.31101,23.643313],[113.289245,23.644368],[113.299438,23.637456],[113.290548,23.617085],[113.280049,23.608957],[113.2766,23.615977],[113.248474,23.601567],[113.24035,23.606212],[113.245868,23.588265],[113.227859,23.594441],[113.227015,23.585731],[113.214524,23.584253],[113.202262,23.576492],[113.200805,23.561815],[113.210155,23.552997],[113.211918,23.543914],[113.191149,23.523212],[113.192069,23.514761],[113.172066,23.512384],[113.15352,23.502823],[113.128689,23.512596],[113.108994,23.497964],[113.083933,23.494266],[113.075503,23.484228],[113.063854,23.482537],[113.055884,23.471971],[113.042932,23.474137],[113.018025,23.469065],[113.00469,23.462037],[112.993347,23.466845],[112.975184,23.463622],[112.966294,23.460663],[112.965835,23.452155],[112.957634,23.447558],[112.94223,23.460188],[112.930198,23.463094],[112.933493,23.47065],[112.925753,23.472393],[112.928435,23.483488],[112.903298,23.488613],[112.887741,23.517402],[112.893259,23.526434],[112.911192,23.541643],[112.91533,23.55231],[112.900309,23.566725],[112.893412,23.55268],[112.871647,23.570896],[112.86291,23.57343],[112.848502,23.566936],[112.827197,23.567042],[112.830493,23.545762],[112.802137,23.545551],[112.796772,23.551835],[112.7934,23.571688],[112.800144,23.571846],[112.799761,23.588951],[112.781828,23.588529],[112.772171,23.603309],[112.756844,23.603309],[112.750483,23.610065],[112.752092,23.628643],[112.778302,23.641255],[112.784663,23.655291],[112.780908,23.671224],[112.768646,23.677397],[112.75922,23.672332],[112.751249,23.675286],[112.744965,23.668481],[112.739907,23.672596],[112.744965,23.686523],[112.728718,23.678504],[112.715076,23.691639],[112.72159,23.698549],[112.724579,23.710258],[112.713467,23.706883],[112.711321,23.712104],[112.725882,23.725816],[112.743126,23.752444],[112.730021,23.758507],[112.706033,23.752813],[112.69768,23.765677],[112.704194,23.790557],[112.700668,23.793192],[112.70588,23.806369],[112.689479,23.806369],[112.675455,23.815169],[112.655376,23.812587],[112.661353,23.821651],[112.675225,23.831241],[112.672159,23.851473],[112.679516,23.857216],[112.672159,23.864801],[112.692162,23.88961],[112.685494,23.895351],[112.693235,23.904251],[112.693464,23.912729],[112.683272,23.92405],[112.682582,23.939056],[112.675838,23.939846],[112.662886,23.949585],[112.645106,23.941004],[112.622651,23.943636],[112.608167,23.952586],[112.588318,23.956692],[112.575136,23.967325],[112.567012,23.964903],[112.564253,23.977325],[112.535668,23.970746],[112.516125,23.977009],[112.511297,24.001376],[112.506469,24.007269],[112.518501,24.016635],[112.507618,24.043309],[112.507542,24.051778],[112.497885,24.064401],[112.500798,24.08081],[112.489532,24.086122],[112.49367,24.095377],[112.486696,24.114148],[112.463782,24.120772],[112.452516,24.115725],[112.455351,24.12482],[112.446921,24.121929],[112.429831,24.127081],[112.428452,24.139802],[112.434659,24.147529],[112.429525,24.160564],[112.434813,24.164453],[112.43144,24.173387],[112.439028,24.180324],[112.439564,24.19057],[112.453052,24.20938],[112.458723,24.238377],[112.449987,24.28102],[112.444239,24.287741],[112.423777,24.284958],[112.411285,24.307061],[112.401858,24.310211],[112.393888,24.326641],[112.384845,24.328373],[112.373732,24.347949],[112.342004,24.353512],[112.319703,24.380167],[112.307211,24.378593],[112.288971,24.388666],[112.284679,24.377334],[112.293646,24.344538],[112.293723,24.327585],[112.27441,24.320604],[112.258316,24.324279],[112.256937,24.320762],[112.261995,24.290576],[112.255557,24.279182],[112.256324,24.2597],[112.249503,24.243367],[112.235708,24.246203],[112.218311,24.244365],[112.215093,24.223459],[112.196929,24.204074],[112.169876,24.197454],[112.166658,24.187943],[112.157538,24.185841],[112.148341,24.190098],[112.144433,24.201394],[112.129258,24.207489],[112.122591,24.222986],[112.11508,24.229027],[112.106114,24.228555],[112.086878,24.256917],[112.067872,24.260698],[112.058369,24.247043],[112.053157,24.24594],[112.050398,24.224247],[112.041355,24.216682],[112.04603,24.197611],[112.041815,24.191516],[112.024955,24.188364],[112.006868,24.19015],[111.997672,24.186945],[111.994223,24.19861],[111.986866,24.205124],[111.978052,24.222671],[111.961575,24.234753],[111.942646,24.234858],[111.94073,24.245153],[111.952685,24.25156],[111.956057,24.26033],[111.969009,24.263691],[111.975983,24.255079],[111.988015,24.259018],[111.990391,24.279812],[112.003113,24.28165],[112.015911,24.293989],[112.026104,24.295091],[112.033231,24.31336],[112.045187,24.320762],[112.050552,24.332572],[112.059442,24.339709],[112.061817,24.368152],[112.057679,24.387093],[112.043578,24.392706],[112.042121,24.410279],[112.023192,24.441538],[111.999741,24.450452],[111.996522,24.459261],[111.986636,24.464505],[111.987096,24.480862],[111.996369,24.494911],[112.009704,24.502878],[112.005259,24.512051],[112.007405,24.534533],[111.997825,24.551196],[111.989855,24.550776],[111.978282,24.56136],[111.971998,24.578648],[111.963338,24.5809],[111.948547,24.592686],[111.937128,24.595828],[111.938431,24.609498],[111.927472,24.629397],[111.934292,24.641911],[111.953528,24.647199],[111.947551,24.665364],[111.939197,24.6695],[111.944179,24.676409],[111.939657,24.686616],[111.952839,24.69635],[111.961345,24.721206],[111.972688,24.72738],[111.985026,24.727485],[111.999128,24.733135],[112.013919,24.731514],[112.030473,24.745064],[112.033845,24.771165],[112.05423,24.788895],[112.059212,24.79951],[112.083812,24.804844],[112.096458,24.817235],[112.097224,24.826385],[112.112628,24.831508],[112.124047,24.841074],[112.141444,24.844524],[112.149491,24.836945],[112.161063,24.844211],[112.171103,24.862713],[112.165661,24.867208],[112.16819,24.890828],[112.175164,24.927504],[112.15248,24.932414],[112.142134,24.937951],[112.120062,24.963698],[112.122744,24.990485],[112.134623,24.99581],[112.155698,25.026974],[112.148878,25.035429],[112.153553,25.045502],[112.152173,25.055939],[112.162749,25.068462],[112.165815,25.085001],[112.17708,25.107379],[112.174168,25.129493],[112.183901,25.14107],[112.183288,25.14884],[112.193174,25.172197],[112.18735,25.183092],[112.201758,25.185803],[112.23931,25.187419],[112.246591,25.184969],[112.255557,25.171571],[112.256094,25.159372],[112.281997,25.164742],[112.288435,25.15859],[112.302536,25.157182],[112.313648,25.173917],[112.332425,25.174543],[112.350894,25.187054],[112.364842,25.191693],[112.373732,25.177567],[112.393122,25.160154],[112.387374,25.152177],[112.399483,25.140653],[112.413354,25.141331],[112.426153,25.156244],[112.430674,25.175273],[112.443013,25.185594],[112.454815,25.1735],[112.452669,25.159841],[112.458264,25.152072],[112.4775,25.151394],[112.491065,25.144459],[112.502637,25.144616],[112.507695,25.136742],[112.537047,25.134239],[112.562644,25.124487],[112.596518,25.12626],[112.612765,25.133196],[112.624797,25.134082],[112.628169,25.140601],[112.648018,25.133613],[112.659821,25.132779],[112.667868,25.12214],[112.668864,25.113951],[112.679746,25.109935],[112.695227,25.095538],[112.697296,25.089957],[112.715613,25.078375],[112.719215,25.048268],[112.715153,25.026035],[112.725882,25.010062],[112.741823,24.998577],[112.745348,24.981348],[112.742206,24.977484],[112.746344,24.956492],[112.773474,24.949963],[112.784433,24.938577],[112.782211,24.922698],[112.786732,24.912406],[112.780755,24.897307],[112.788342,24.892396],[112.804436,24.890724],[112.842065,24.897151],[112.873486,24.89668],[112.879311,24.907809],[112.904371,24.92181],[112.924527,24.918884],[112.937402,24.920452],[112.94177,24.915907],[112.959244,24.923481],[112.966831,24.919302],[112.984457,24.921183],[112.994804,24.927347],[113.00515,24.914078],[113.004766,24.900129],[113.009901,24.896889],[113.010974,24.882781],[113.022163,24.870866],[113.019557,24.855971],[113.014729,24.851528],[112.998942,24.850483],[112.979246,24.832553],[112.95978,24.824241],[112.95158,24.815771],[112.960087,24.800974],[112.95112,24.788476],[112.954109,24.782201],[112.940161,24.757514],[112.933647,24.755369],[112.938781,24.73821],[112.930351,24.718695],[112.900616,24.713776],[112.914487,24.662695],[112.896401,24.650602],[112.89778,24.632277],[112.884599,24.616358],[112.887971,24.595304],[112.8987,24.600542],[112.902072,24.595671],[112.91717,24.60049],[112.926366,24.596457],[112.950507,24.59499],[112.964378,24.586138],[112.96139,24.570266],[112.96936,24.568118],[112.981928,24.542917],[112.991048,24.544751],[112.999708,24.528716],[113.02063,24.513675],[113.025612,24.493863],[113.047377,24.475515],[113.063701,24.468804],[113.087305,24.471583],[113.096808,24.496431],[113.114128,24.502983],[113.13712,24.482907],[113.151451,24.478713],[113.153367,24.467703],[113.16195,24.479027],[113.174979,24.475882],[113.186781,24.480705],[113.19705,24.474676],[113.20617,24.476458],[113.216516,24.495697],[113.230158,24.498475],[113.235829,24.505866],[113.244642,24.502144],[113.25108,24.510216],[113.252766,24.497794],[113.261809,24.482225],[113.270392,24.47672],[113.272155,24.466969],[113.294993,24.457164],[113.31944,24.465291],[113.331243,24.472579],[113.350632,24.472159],[113.362051,24.47908],[113.37416,24.49402],[113.379754,24.485213],[113.415544,24.485266],[113.412172,24.472526],[113.419223,24.459943],[113.440988,24.453703],[113.467428,24.461726],[113.478847,24.477769],[113.489269,24.471006],[113.499309,24.473785],[113.507816,24.484007],[113.518852,24.469852],[113.530271,24.479551],[113.531343,24.489826],[113.540463,24.506233],[113.552572,24.511055],[113.57564,24.509115],[113.579548,24.50052],[113.589665,24.515248],[113.599628,24.512994],[113.596792,24.500886],[113.609667,24.489983],[113.625761,24.491923],[113.63718,24.486471],[113.643234,24.477717],[113.656799,24.468227],[113.666072,24.467493],[113.683163,24.454175],[113.686381,24.437709],[113.709909,24.412377],[113.722248,24.414633],[113.723934,24.43493],[113.726999,24.437028],[113.753439,24.437185],[113.762866,24.43299],[113.765318,24.417727],[113.77827,24.410909],[113.803867,24.401781],[113.805553,24.384364],[113.800955,24.377334],[113.818581,24.3522],[113.817048,24.34459],[113.831303,24.33656],[113.8405,24.336246],[113.850462,24.318872],[113.844791,24.304541],[113.844715,24.279707],[113.850003,24.274561],[113.84004,24.265109],[113.855827,24.252926],[113.862878,24.259018],[113.872074,24.253976],[113.870541,24.242264],[113.88311,24.245415],[113.890774,24.241476],[113.890391,24.229763],[113.896522,24.210326],[113.921199,24.200974],[113.922119,24.19304],[113.930319,24.19593],[113.930242,24.188416],[113.909167,24.184318],[113.901043,24.188521],[113.880045,24.174123],[113.857053,24.16151],[113.862265,24.147319],[113.870465,24.141169],[113.86464,24.133021],[113.853911,24.132811],[113.850999,24.124978],[113.839273,24.119931],[113.836974,24.111729],[113.842415,24.104053],[113.836668,24.098637],[113.836821,24.088331],[113.845711,24.086806],[113.837434,24.072764],[113.828467,24.069608],[113.83115,24.063507],[113.813063,24.052567],[113.803637,24.053566],[113.790379,24.034471],[113.790608,24.025106],[113.784171,24.022317],[113.772982,24.026947],[113.763555,24.02137],[113.753592,24.026842],[113.747078,24.023212],[113.728149,23.997166],[113.718646,23.993008],[113.732364,23.981114],[113.730448,23.974641],[113.739415,23.969588],[113.744703,23.95906],[113.766468,23.96085],[113.774285,23.952691],[113.775358,23.938424],[113.792294,23.931527],[113.799345,23.923524],[113.800265,23.902566]]]]}},{"type":"Feature","properties":{"adcode":441900,"name":"东莞市","center":[113.746262,23.046237],"centroid":[113.879968,22.931881],"childrenNum":0,"level":"city","parent":{"adcode":440000},"subFeatureIndex":16,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.229205,22.81253],[114.215641,22.807751],[114.20721,22.789802],[114.189967,22.785713],[114.180847,22.775728],[114.187974,22.770364],[114.182073,22.765265],[114.201079,22.764787],[114.203149,22.75512],[114.215641,22.73557],[114.208513,22.729248],[114.208053,22.71469],[114.196711,22.710227],[114.19947,22.702043],[114.195332,22.680095],[114.187515,22.673557],[114.187515,22.666382],[114.172494,22.654368],[114.15548,22.668933],[114.16391,22.665372],[114.167436,22.680679],[114.151801,22.690139],[114.145057,22.701193],[114.144674,22.714159],[114.121989,22.716231],[114.117621,22.723244],[114.107198,22.722979],[114.098462,22.747205],[114.084437,22.750551],[114.074781,22.740883],[114.064588,22.755916],[114.049414,22.756448],[114.049797,22.771161],[114.039911,22.764309],[114.035236,22.766752],[114.017916,22.760219],[114.002971,22.763459],[113.995308,22.771267],[113.990863,22.800211],[113.984578,22.803662],[113.974999,22.798458],[113.978371,22.806529],[113.972393,22.812476],[113.954996,22.815078],[113.954613,22.821025],[113.937829,22.832705],[113.910929,22.829997],[113.904875,22.840137],[113.893916,22.846189],[113.89951,22.855478],[113.887325,22.858504],[113.883263,22.850542],[113.877669,22.85447],[113.872611,22.837271],[113.857053,22.832599],[113.851305,22.837483],[113.841496,22.833979],[113.834675,22.822193],[113.838737,22.819591],[113.837204,22.800901],[113.824942,22.792935],[113.813446,22.790439],[113.811071,22.782473],[113.802257,22.784863],[113.801874,22.777109],[113.791835,22.767655],[113.790838,22.75342],[113.762406,22.736899],[113.751447,22.715381],[113.746005,22.72606],[113.733743,22.736367],[113.723934,22.73828],[113.697724,22.73743],[113.678181,22.726113],[113.648139,22.761759],[113.612119,22.802281],[113.58407,22.831325],[113.571195,22.853143],[113.575104,22.888331],[113.564298,22.906903],[113.550503,22.936189],[113.541766,22.959369],[113.529198,22.982599],[113.52299,23.011338],[113.522913,23.037262],[113.531957,23.050938],[113.543759,23.06228],[113.54897,23.076006],[113.556327,23.081252],[113.586446,23.08777],[113.60139,23.0954],[113.610433,23.103772],[113.640245,23.103878],[113.642698,23.113467],[113.651281,23.119295],[113.661244,23.117971],[113.662011,23.111454],[113.670671,23.116434],[113.687837,23.119772],[113.71696,23.138895],[113.738572,23.141331],[113.754052,23.129572],[113.777427,23.131108],[113.791298,23.127665],[113.814673,23.127771],[113.841113,23.116169],[113.844715,23.125599],[113.848163,23.116911],[113.863261,23.114633],[113.876596,23.124275],[113.894836,23.111295],[113.905565,23.11511],[113.938366,23.107534],[113.962737,23.114209],[113.970554,23.113308],[113.986418,23.10197],[113.993315,23.092645],[114.010252,23.083425],[114.029871,23.084379],[114.049797,23.097467],[114.065891,23.101441],[114.088959,23.094182],[114.091564,23.077331],[114.102217,23.058623],[114.120993,23.048022],[114.150269,23.024698],[114.151035,23.019079],[114.139233,23.023479],[114.124442,22.994],[114.132182,22.994424],[114.13816,22.986417],[114.15571,22.983129],[114.158546,22.978303],[114.185139,22.992727],[114.20039,22.986682],[114.212498,22.987796],[114.222385,22.980743],[114.223841,22.963719],[114.211349,22.953959],[114.213035,22.928444],[114.229742,22.914703],[114.245299,22.911732],[114.249208,22.905152],[114.259171,22.906054],[114.26032,22.899634],[114.251737,22.884351],[114.24484,22.88053],[114.236946,22.88589],[114.231198,22.880318],[114.2348,22.862962],[114.233114,22.842314],[114.235643,22.839872],[114.23388,22.816937],[114.229205,22.81253]]]]}},{"type":"Feature","properties":{"adcode":442000,"name":"中山市","center":[113.382391,22.521113],"centroid":[113.398784,22.517323],"childrenNum":0,"level":"city","parent":{"adcode":440000},"subFeatureIndex":17,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.568743,22.411912],[113.537168,22.416332],[113.51433,22.408717],[113.508889,22.413403],[113.49586,22.407546],[113.495247,22.395403],[113.48697,22.390184],[113.491339,22.376922],[113.489193,22.365842],[113.493255,22.354069],[113.490342,22.34075],[113.494787,22.339684],[113.504137,22.324286],[113.493331,22.317998],[113.482985,22.318797],[113.470493,22.310377],[113.480456,22.303876],[113.496397,22.282237],[113.50475,22.266992],[113.514407,22.261555],[113.513027,22.249879],[113.478847,22.23831],[113.486357,22.227113],[113.462676,22.218847],[113.458384,22.213781],[113.430565,22.201302],[113.415774,22.202902],[113.390943,22.231858],[113.385272,22.230365],[113.352395,22.249133],[113.345114,22.258569],[113.336607,22.280105],[113.32128,22.312189],[113.32036,22.329561],[113.307178,22.346504],[113.273841,22.384751],[113.262652,22.392048],[113.256368,22.410794],[113.256444,22.43779],[113.245179,22.457276],[113.240121,22.476172],[113.2251,22.497142],[113.2251,22.497142],[113.215367,22.513107],[113.187087,22.539924],[113.188697,22.552798],[113.185095,22.574289],[113.176358,22.590032],[113.157045,22.614228],[113.157199,22.63204],[113.163176,22.651392],[113.17061,22.651392],[113.160801,22.665425],[113.161414,22.673717],[113.17199,22.680679],[113.189386,22.673876],[113.201035,22.675949],[113.199273,22.682539],[113.204254,22.697314],[113.222264,22.712246],[113.236289,22.740777],[113.243033,22.745345],[113.254069,22.74083],[113.260889,22.730311],[113.270546,22.726485],[113.284877,22.738864],[113.301431,22.736261],[113.329097,22.741255],[113.329327,22.749011],[113.342432,22.758254],[113.358756,22.764893],[113.365116,22.772595],[113.412172,22.742849],[113.42612,22.738014],[113.447808,22.735836],[113.467964,22.728504],[113.464822,22.72096],[113.491875,22.699811],[113.523373,22.679297],[113.540693,22.666222],[113.533106,22.656388],[113.536861,22.647511],[113.561615,22.607528],[113.578552,22.604603],[113.589971,22.59519],[113.599628,22.594393],[113.62078,22.579554],[113.639326,22.548276],[113.651588,22.515715],[113.692052,22.515129],[113.668448,22.480431],[113.631509,22.47596],[113.610127,22.445723],[113.573724,22.411699],[113.568743,22.411912]]]]}},{"type":"Feature","properties":{"adcode":442100,"name":"东沙群岛","center":[116.887312,20.617512],"childrenNum":0,"level":"city","parent":{"adcode":440000},"subFeatureIndex":18,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[116.769589,20.771743],[116.820093,20.780414],[116.845307,20.778529],[116.860328,20.779876],[116.886001,20.775514],[116.90677,20.762049],[116.911982,20.755908],[116.9257,20.726765],[116.933747,20.67633],[116.931831,20.666198],[116.917729,20.637037],[116.904931,20.619301],[116.887151,20.604043],[116.862933,20.588891],[116.825611,20.583714],[116.796029,20.582636],[116.770355,20.58792],[116.749586,20.600915],[116.748667,20.612292],[116.758476,20.618438],[116.791737,20.613155],[116.82791,20.619732],[116.848832,20.628304],[116.874506,20.650621],[116.88991,20.683066],[116.888301,20.713996],[116.880943,20.733499],[116.872513,20.738294],[116.831129,20.741526],[116.809747,20.738401],[116.797638,20.745458],[116.768976,20.743896],[116.761005,20.750306],[116.769742,20.75817],[116.769589,20.771743]]],[[[116.735562,20.694544],[116.71441,20.700256],[116.72238,20.707476],[116.736788,20.701118],[116.735562,20.694544]]],[[[115.943359,21.09745],[115.950026,21.110616],[115.965047,21.12362],[116.000301,21.126951],[116.024441,21.124211],[116.043831,21.110186],[116.057549,21.087507],[116.065749,21.064879],[116.067358,21.040419],[116.055096,21.027408],[116.040075,21.020472],[116.016931,21.023214],[115.989188,21.035473],[115.953322,21.064288],[115.944125,21.08267],[115.943359,21.09745]]],[[[115.926728,20.981538],[115.931557,20.992993],[115.954088,20.999823],[115.987196,20.966693],[116.000914,20.948404],[115.998844,20.922956],[115.969875,20.919513],[115.953168,20.928337],[115.939374,20.945821],[115.931173,20.964057],[115.926728,20.981538]]]]}},{"type":"Feature","properties":{"adcode":445100,"name":"潮州市","center":[116.632301,23.661701],"centroid":[116.790217,23.783155],"childrenNum":3,"level":"city","parent":{"adcode":440000},"subFeatureIndex":19,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[116.91704,23.531662],[116.918342,23.561603],[116.909146,23.58193],[116.911062,23.602201],[116.900563,23.611965],[116.900639,23.61946],[116.891289,23.622785],[116.874812,23.616082],[116.86278,23.623471],[116.863087,23.632601],[116.83818,23.644632],[116.830976,23.645793],[116.821319,23.635609],[116.822545,23.627429],[116.831895,23.622152],[116.827527,23.611807],[116.815035,23.612493],[116.805379,23.606793],[116.795799,23.610488],[116.791737,23.59935],[116.794496,23.589532],[116.785223,23.579554],[116.772578,23.584147],[116.761389,23.573958],[116.755794,23.575648],[116.747211,23.59233],[116.738934,23.60162],[116.71303,23.597925],[116.714946,23.584728],[116.702991,23.574433],[116.718701,23.563135],[116.719391,23.552522],[116.70621,23.542541],[116.70483,23.517561],[116.71326,23.493103],[116.717935,23.471072],[116.7128,23.459236],[116.702378,23.456172],[116.698469,23.446977],[116.702608,23.438204],[116.68659,23.429483],[116.681915,23.438627],[116.668504,23.428638],[116.654403,23.431069],[116.650264,23.426312],[116.630108,23.429378],[116.633557,23.45057],[116.619762,23.466423],[116.608343,23.464785],[116.586578,23.475563],[116.580754,23.473873],[116.559908,23.482432],[116.554774,23.495586],[116.543661,23.505623],[116.544811,23.528546],[116.554007,23.534356],[116.553624,23.541591],[116.570638,23.548614],[116.564966,23.557063],[116.567036,23.569207],[116.551555,23.579502],[116.542282,23.573694],[116.533315,23.581508],[116.533775,23.590113],[116.526264,23.590165],[116.527261,23.603309],[116.533698,23.606265],[116.533545,23.617296],[116.526111,23.626532],[116.527184,23.63429],[116.514156,23.655924],[116.48488,23.658879],[116.474534,23.655924],[116.470319,23.669589],[116.448477,23.677766],[116.444722,23.6698],[116.434376,23.67977],[116.43154,23.690637],[116.404104,23.694382],[116.385481,23.714688],[116.377741,23.712209],[116.37161,23.717431],[116.368468,23.73304],[116.373296,23.740264],[116.380883,23.737364],[116.401958,23.76225],[116.402955,23.769261],[116.416903,23.777854],[116.436215,23.780331],[116.439357,23.773584],[116.451849,23.76905],[116.464954,23.755238],[116.485187,23.751547],[116.496146,23.752496],[116.504729,23.763673],[116.505955,23.793614],[116.516761,23.802679],[116.510324,23.808793],[116.513389,23.815854],[116.509864,23.827764],[116.518371,23.823443],[116.525881,23.8324],[116.516608,23.845994],[116.498981,23.85848],[116.496989,23.869226],[116.514386,23.866698],[116.522279,23.882131],[116.535384,23.88171],[116.536304,23.886608],[116.558682,23.899037],[116.557992,23.907253],[116.575083,23.909149],[116.590487,23.900933],[116.604741,23.910781],[116.604205,23.929474],[116.608343,23.94153],[116.604205,23.950322],[116.623518,23.947269],[116.62574,23.950006],[116.60842,23.961166],[116.610796,23.968483],[116.628652,23.973693],[116.637312,23.968851],[116.641144,23.989588],[116.646969,23.994429],[116.657775,23.988588],[116.684751,23.989588],[116.68797,23.981062],[116.69548,23.991903],[116.690422,24.005375],[116.697166,24.002586],[116.708815,24.019161],[116.708662,24.033471],[116.700155,24.050094],[116.71257,24.062455],[116.734642,24.053619],[116.744069,24.061982],[116.75748,24.082125],[116.76752,24.074657],[116.772195,24.09401],[116.766447,24.107523],[116.76637,24.124032],[116.780241,24.147319],[116.789745,24.157095],[116.796872,24.157043],[116.809594,24.169183],[116.831819,24.161878],[116.836034,24.173387],[116.847836,24.182689],[116.859485,24.177276],[116.867072,24.163717],[116.878568,24.167817],[116.883856,24.181638],[116.884315,24.193671],[116.900333,24.196771],[116.904548,24.202813],[116.896577,24.218784],[116.917116,24.232809],[116.933363,24.222251],[116.94325,24.216262],[116.956125,24.216998],[116.971299,24.198084],[116.976357,24.199818],[116.991148,24.189887],[116.998659,24.17901],[116.990382,24.168342],[116.97881,24.162088],[116.972908,24.153521],[116.964785,24.153364],[116.947082,24.134914],[116.934896,24.126923],[116.926619,24.098585],[116.929455,24.091381],[116.929761,24.065453],[116.936965,24.054566],[116.952446,24.054723],[116.95007,24.040836],[116.939801,24.03305],[116.955129,24.020266],[116.954439,24.005954],[116.96011,24.002112],[116.96992,24.007427],[116.981339,23.996692],[116.975361,23.99064],[116.973138,23.97422],[116.982641,23.959324],[116.980189,23.941056],[116.973292,23.927052],[116.954745,23.920417],[116.959267,23.91452],[116.958807,23.90067],[116.972985,23.894824],[116.979269,23.884449],[116.975514,23.872281],[116.960033,23.868173],[116.962026,23.861377],[116.981568,23.855582],[116.989922,23.8628],[117.01207,23.855266],[117.022416,23.838776],[117.026785,23.819912],[117.018431,23.812218],[117.020041,23.800729],[117.031766,23.791348],[117.039353,23.778434],[117.042572,23.763779],[117.047783,23.758665],[117.051079,23.736731],[117.049929,23.721649],[117.053225,23.698391],[117.066636,23.688791],[117.07407,23.690954],[117.087941,23.669325],[117.115454,23.665263],[117.124881,23.646057],[117.132928,23.651439],[117.147489,23.653813],[117.159368,23.640094],[117.173699,23.634659],[117.185961,23.636242],[117.192552,23.629593],[117.192935,23.561656],[117.113002,23.542383],[117.09959,23.537577],[117.085566,23.536943],[117.069548,23.542277],[117.044795,23.539689],[117.031766,23.531293],[117.018125,23.505359],[117.010231,23.502665],[116.963405,23.506997],[116.940951,23.514656],[116.930528,23.528071],[116.91704,23.531662]]]]}},{"type":"Feature","properties":{"adcode":445200,"name":"揭阳市","center":[116.355733,23.543778],"centroid":[116.124312,23.334048],"childrenNum":5,"level":"city","parent":{"adcode":440000},"subFeatureIndex":20,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[116.226918,22.914491],[116.223929,22.926852],[116.211667,22.926004],[116.198256,22.93168],[116.181549,22.92611],[116.16806,22.913695],[116.173272,22.900271],[116.16967,22.886367],[116.157178,22.886049],[116.143843,22.890294],[116.135106,22.900589],[116.124453,22.892523],[116.109969,22.891143],[116.086595,22.901491],[116.080234,22.915764],[116.055633,22.920433],[116.026894,22.939107],[116.017697,22.934067],[116.005665,22.945632],[116.0026,22.937409],[115.983287,22.925897],[115.979225,22.938629],[115.967116,22.943775],[115.977846,22.951838],[115.973247,22.969818],[115.963515,22.94961],[115.958993,22.957036],[115.943819,22.956293],[115.9488,22.972682],[115.941213,22.987053],[115.94949,22.990023],[115.945505,22.996015],[115.959989,23.017435],[115.954471,23.021571],[115.942209,23.006195],[115.923586,23.017594],[115.937688,23.030424],[115.950716,23.024327],[115.955314,23.038322],[115.966963,23.04728],[115.964741,23.052952],[115.951099,23.061273],[115.950333,23.06599],[115.937688,23.067156],[115.939833,23.082206],[115.920751,23.100116],[115.923126,23.110977],[115.916612,23.112302],[115.908795,23.125652],[115.898832,23.129466],[115.883505,23.11956],[115.864345,23.117865],[115.85147,23.098791],[115.832924,23.112196],[115.833154,23.122897],[115.79951,23.133015],[115.791386,23.13953],[115.780657,23.15828],[115.76349,23.159233],[115.752991,23.167813],[115.725631,23.183805],[115.733525,23.192806],[115.730613,23.199107],[115.73866,23.211125],[115.752148,23.193601],[115.757743,23.215942],[115.750079,23.225683],[115.749236,23.236375],[115.758126,23.244949],[115.768089,23.24442],[115.797288,23.249184],[115.810929,23.24876],[115.831621,23.258128],[115.824571,23.272416],[115.797671,23.286596],[115.797288,23.309134],[115.802039,23.324422],[115.812845,23.326696],[115.819666,23.335741],[115.811236,23.346689],[115.787401,23.368952],[115.777668,23.383651],[115.739886,23.379263],[115.725938,23.369375],[115.703023,23.368265],[115.694057,23.354675],[115.676813,23.354992],[115.671602,23.38344],[115.673058,23.395071],[115.682868,23.407759],[115.657884,23.420445],[115.648304,23.430329],[115.646235,23.439684],[115.625236,23.45168],[115.61443,23.469751],[115.606537,23.471865],[115.616116,23.475035],[115.623167,23.489934],[115.622094,23.507102],[115.637115,23.514972],[115.642096,23.513863],[115.639797,23.528758],[115.659493,23.532613],[115.669686,23.548403],[115.687389,23.557538],[115.69467,23.550092],[115.70195,23.534092],[115.713829,23.519092],[115.723179,23.514656],[115.733755,23.51624],[115.736437,23.525958],[115.751612,23.52749],[115.759735,23.522895],[115.776059,23.524638],[115.786175,23.517455],[115.793302,23.525694],[115.788398,23.539267],[115.801349,23.543122],[115.80794,23.554158],[115.802116,23.557168],[115.812309,23.578974],[115.798131,23.597133],[115.807787,23.59877],[115.808247,23.606687],[115.800047,23.615502],[115.81844,23.644632],[115.83461,23.660884],[115.86036,23.65756],[115.863656,23.646057],[115.876148,23.633973],[115.896227,23.625846],[115.897836,23.620093],[115.914696,23.630859],[115.923663,23.628168],[115.954471,23.64516],[115.95861,23.655871],[115.972328,23.664102],[115.985816,23.676974],[116.006585,23.675497],[116.017467,23.661939],[116.01126,23.654236],[116.021223,23.644685],[116.039386,23.648168],[116.055786,23.639514],[116.056476,23.646374],[116.072417,23.642785],[116.074256,23.636295],[116.087208,23.626426],[116.09878,23.622574],[116.106137,23.628379],[116.117326,23.620885],[116.133497,23.62421],[116.150664,23.616241],[116.165455,23.616082],[116.17787,23.628221],[116.179939,23.637139],[116.191358,23.641361],[116.187373,23.652336],[116.17764,23.657296],[116.183005,23.674442],[116.181089,23.68552],[116.19588,23.685784],[116.214349,23.702558],[116.214119,23.71896],[116.227684,23.728821],[116.236957,23.727608],[116.233126,23.718169],[116.271598,23.746433],[116.271215,23.757294],[116.288458,23.763199],[116.295892,23.759139],[116.306621,23.769841],[116.320033,23.775534],[116.335437,23.773953],[116.338732,23.758823],[116.350151,23.751969],[116.35475,23.743058],[116.368468,23.73304],[116.37161,23.717431],[116.377741,23.712209],[116.385481,23.714688],[116.404104,23.694382],[116.43154,23.690637],[116.434376,23.67977],[116.444722,23.6698],[116.448477,23.677766],[116.470319,23.669589],[116.474534,23.655924],[116.48488,23.658879],[116.514156,23.655924],[116.527184,23.63429],[116.526111,23.626532],[116.533545,23.617296],[116.533698,23.606265],[116.527261,23.603309],[116.526264,23.590165],[116.533775,23.590113],[116.533315,23.581508],[116.542282,23.573694],[116.551555,23.579502],[116.567036,23.569207],[116.564966,23.557063],[116.570638,23.548614],[116.553624,23.541591],[116.554007,23.534356],[116.544811,23.528546],[116.543661,23.505623],[116.554774,23.495586],[116.559908,23.482432],[116.580754,23.473873],[116.586578,23.475563],[116.608343,23.464785],[116.619762,23.466423],[116.633557,23.45057],[116.630108,23.429378],[116.614015,23.433289],[116.605431,23.443013],[116.58995,23.453265],[116.588111,23.461984],[116.580294,23.461139],[116.579834,23.447981],[116.58949,23.443383],[116.591177,23.426524],[116.58198,23.423194],[116.577075,23.412252],[116.586348,23.409609],[116.577995,23.40316],[116.569105,23.388093],[116.568339,23.378258],[116.561978,23.38693],[116.553088,23.412305],[116.544887,23.424356],[116.523429,23.437517],[116.512316,23.439472],[116.469553,23.437622],[116.465721,23.442485],[116.472005,23.455802],[116.482658,23.465472],[116.491164,23.478734],[116.492314,23.492839],[116.482581,23.500552],[116.465797,23.497647],[116.448707,23.488349],[116.435832,23.473344],[116.426482,23.468642],[116.415676,23.479737],[116.41491,23.510271],[116.408856,23.512596],[116.401115,23.500394],[116.377051,23.500658],[116.355363,23.472288],[116.350764,23.449619],[116.332371,23.443647],[116.319649,23.449196],[116.316891,23.442273],[116.322868,23.421767],[116.331758,23.424409],[116.34563,23.408182],[116.34517,23.399565],[116.350994,23.386559],[116.349768,23.358112],[116.354903,23.347324],[116.348848,23.335794],[116.329689,23.336376],[116.319573,23.332303],[116.319343,23.325903],[116.330839,23.316487],[116.328846,23.299559],[116.323558,23.302839],[116.308997,23.296067],[116.312752,23.286649],[116.302406,23.279348],[116.305548,23.272839],[116.298727,23.263526],[116.294129,23.239815],[116.279415,23.226],[116.26677,23.227906],[116.259719,23.216842],[116.261328,23.205301],[116.269222,23.204984],[116.26447,23.196724],[116.252745,23.191536],[116.262325,23.175174],[116.252362,23.176286],[116.254891,23.152507],[116.244545,23.140431],[116.261558,23.12295],[116.29183,23.110501],[116.29137,23.099162],[116.302866,23.096036],[116.312829,23.102712],[116.327543,23.09646],[116.340648,23.086498],[116.346703,23.05857],[116.368314,23.05751],[116.374982,23.050408],[116.370077,23.046856],[116.3805,23.039807],[116.395904,23.044524],[116.405484,23.053959],[116.426865,23.063393],[116.437212,23.080246],[116.446561,23.085863],[116.445488,23.093281],[116.453919,23.091161],[116.478826,23.104249],[116.509787,23.100646],[116.520287,23.094553],[116.552551,23.105891],[116.56374,23.092963],[116.565809,23.08316],[116.557379,23.056238],[116.563204,23.025812],[116.576002,23.017117],[116.561978,23.006991],[116.563051,23.000734],[116.550405,22.993894],[116.540979,22.994583],[116.533162,22.984561],[116.52956,22.96531],[116.515995,22.939001],[116.505572,22.930884],[116.486949,22.93115],[116.473691,22.937728],[116.45024,22.936773],[116.382646,22.919213],[116.334977,22.938736],[116.31735,22.952845],[116.302789,22.951519],[116.269452,22.938364],[116.226918,22.914491]]]]}},{"type":"Feature","properties":{"adcode":445300,"name":"云浮市","center":[112.044439,22.929801],"centroid":[111.798789,22.813665],"childrenNum":5,"level":"city","parent":{"adcode":440000},"subFeatureIndex":21,"acroutes":[100000,440000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[111.375068,23.315271],[111.375757,23.319926],[111.392618,23.325586],[111.408712,23.315958],[111.421127,23.316276],[111.442202,23.301411],[111.437834,23.295115],[111.453391,23.289559],[111.456917,23.281729],[111.472551,23.275061],[111.49286,23.284586],[111.506348,23.282311],[111.515774,23.288448],[111.519989,23.305484],[111.52796,23.310351],[111.523898,23.322624],[111.532175,23.324634],[111.550185,23.298183],[111.573866,23.270881],[111.576318,23.253682],[111.569191,23.243097],[111.542598,23.234787],[111.533784,23.22113],[111.539839,23.212978],[111.575322,23.194077],[111.594251,23.188518],[111.624446,23.189894],[111.637781,23.185446],[111.649507,23.164741],[111.656098,23.158492],[111.679089,23.154732],[111.692118,23.157909],[111.707522,23.150971],[111.726988,23.150865],[111.753658,23.137994],[111.770441,23.13328],[111.814048,23.129943],[111.836963,23.131585],[111.860414,23.141225],[111.876737,23.138365],[111.884708,23.131267],[111.899192,23.125599],[111.9218,23.124857],[111.959353,23.130843],[111.967553,23.129678],[111.979049,23.119719],[111.982727,23.097308],[111.991464,23.087028],[112.025951,23.081199],[112.035761,23.07272],[112.047563,23.072349],[112.083736,23.079716],[112.099446,23.089943],[112.118299,23.083001],[112.133473,23.08581],[112.165431,23.075052],[112.191182,23.074522],[112.234712,23.114898],[112.265137,23.119507],[112.285676,23.129731],[112.301233,23.122315],[112.311886,23.121255],[112.312729,23.115163],[112.327137,23.104196],[112.32637,23.093599],[112.317634,23.080298],[112.301233,23.079557],[112.295869,23.060849],[112.285446,23.042563],[112.289814,23.024274],[112.286825,23.020033],[112.299087,23.010331],[112.286595,22.984985],[112.285369,22.976235],[112.277322,22.970613],[112.290197,22.952633],[112.283683,22.944518],[112.280158,22.949026],[112.270885,22.943775],[112.257167,22.951625],[112.262914,22.939796],[112.261075,22.918735],[112.257703,22.910564],[112.26598,22.906638],[112.278319,22.91465],[112.285369,22.911254],[112.295332,22.915605],[112.307364,22.911254],[112.305602,22.896132],[112.29993,22.89178],[112.296022,22.873312],[112.298704,22.865138],[112.312269,22.850489],[112.310353,22.824848],[112.319703,22.825378],[112.336257,22.806476],[112.323841,22.802706],[112.315488,22.790015],[112.32844,22.786722],[112.356336,22.787997],[112.374116,22.794369],[112.384232,22.792245],[112.382622,22.784545],[112.392509,22.76978],[112.392739,22.744442],[112.399023,22.726485],[112.410748,22.704488],[112.403085,22.700183],[112.401475,22.690565],[112.411898,22.671219],[112.426306,22.670847],[112.435809,22.680998],[112.448607,22.70842],[112.463168,22.711661],[112.47658,22.704009],[112.492674,22.686897],[112.489992,22.676215],[112.500261,22.668667],[112.506545,22.657664],[112.505243,22.638473],[112.515742,22.626617],[112.52172,22.607262],[112.505626,22.597849],[112.483171,22.592372],[112.475047,22.585511],[112.463552,22.584873],[112.456348,22.600562],[112.441787,22.606039],[112.435732,22.619971],[112.440867,22.627627],[112.443243,22.642248],[112.428375,22.657133],[112.435272,22.661279],[112.429218,22.666063],[112.419562,22.664202],[112.412741,22.656814],[112.416113,22.647723],[112.400402,22.635921],[112.407146,22.628425],[112.405077,22.618216],[112.398333,22.619917],[112.396034,22.602636],[112.390363,22.594765],[112.380247,22.594978],[112.379404,22.57881],[112.371127,22.558278],[112.377411,22.552479],[112.366835,22.550404],[112.364306,22.558544],[112.344533,22.564342],[112.342694,22.558065],[112.353577,22.556682],[112.358635,22.545563],[112.342541,22.55067],[112.33641,22.545457],[112.323918,22.554554],[112.331505,22.563916],[112.328133,22.569874],[112.309127,22.572427],[112.303609,22.560139],[112.307747,22.556841],[112.302153,22.544818],[112.307364,22.525399],[112.301233,22.515289],[112.275636,22.510659],[112.25732,22.500229],[112.262531,22.480803],[112.252875,22.458926],[112.242835,22.445191],[112.235938,22.427035],[112.243678,22.408238],[112.226895,22.408025],[112.211184,22.399078],[112.196163,22.404936],[112.188423,22.398066],[112.192791,22.384432],[112.186353,22.376069],[112.189189,22.36467],[112.175088,22.36989],[112.172022,22.381769],[112.165431,22.385018],[112.161523,22.400676],[112.142057,22.41548],[112.13286,22.405842],[112.108949,22.41335],[112.086725,22.416226],[112.077375,22.420858],[112.073006,22.434969],[112.058828,22.451207],[112.045494,22.45307],[112.034534,22.466325],[112.012923,22.471755],[112.014302,22.484795],[112.008861,22.491075],[111.995373,22.492406],[111.983724,22.505391],[111.98403,22.515342],[111.969546,22.546468],[111.976366,22.562959],[111.989931,22.565033],[111.998591,22.575459],[111.998361,22.589287],[111.98518,22.593861],[111.96602,22.627521],[111.956517,22.633795],[111.939121,22.620875],[111.931227,22.606039],[111.918965,22.592106],[111.914213,22.593701],[111.902258,22.581469],[111.900265,22.570512],[111.873825,22.579288],[111.870836,22.571735],[111.859417,22.581575],[111.835736,22.585937],[111.83405,22.595829],[111.821788,22.59769],[111.831904,22.60891],[111.841178,22.605454],[111.846925,22.612207],[111.859111,22.605401],[111.86049,22.617099],[111.85344,22.624331],[111.857425,22.632731],[111.871296,22.633529],[111.870836,22.65979],[111.86256,22.658993],[111.850681,22.676268],[111.841331,22.679085],[111.84248,22.687801],[111.835277,22.68897],[111.833437,22.680732],[111.820102,22.676427],[111.820332,22.666701],[111.809756,22.656123],[111.807074,22.645384],[111.814508,22.633263],[111.802476,22.626192],[111.784313,22.607581],[111.780327,22.595988],[111.76408,22.588011],[111.764004,22.582692],[111.738023,22.570459],[111.719707,22.54035],[111.721393,22.525931],[111.713346,22.504699],[111.691198,22.482134],[111.680315,22.4824],[111.678553,22.496397],[111.671425,22.503262],[111.648128,22.498207],[111.633873,22.503262],[111.625673,22.510925],[111.619618,22.497302],[111.616016,22.508158],[111.621304,22.521195],[111.616093,22.521408],[111.618315,22.533912],[111.610269,22.534125],[111.612031,22.542584],[111.60682,22.54966],[111.59632,22.551362],[111.569344,22.540722],[111.559381,22.528804],[111.561144,22.523377],[111.54459,22.517364],[111.545433,22.499324],[111.525201,22.480164],[111.507804,22.493949],[111.486882,22.505551],[111.469409,22.490277],[111.476919,22.480164],[111.47347,22.474629],[111.480444,22.46015],[111.471325,22.441996],[111.446034,22.442209],[111.43952,22.427834],[111.421817,22.426662],[111.417065,22.431135],[111.421127,22.446948],[111.409631,22.457116],[111.408788,22.475268],[111.403347,22.479526],[111.410628,22.492033],[111.413387,22.512628],[111.403117,22.516087],[111.384647,22.509808],[111.373688,22.516034],[111.350084,22.506988],[111.338588,22.522951],[111.329852,22.516087],[111.293295,22.50603],[111.276972,22.491927],[111.272067,22.506136],[111.277278,22.517843],[111.285172,22.523856],[111.293909,22.547638],[111.322724,22.54966],[111.326633,22.557267],[111.303641,22.569448],[111.303105,22.580724],[111.279271,22.592053],[111.25352,22.589234],[111.249076,22.58365],[111.219187,22.58583],[111.215662,22.594659],[111.196732,22.61024],[111.185849,22.60439],[111.174737,22.605773],[111.161862,22.620236],[111.144235,22.625713],[111.143162,22.638686],[111.136418,22.643789],[111.127911,22.666169],[111.137108,22.674514],[111.136878,22.685941],[111.124539,22.695826],[111.123543,22.701459],[111.108369,22.704328],[111.104767,22.694869],[111.089669,22.694285],[111.083155,22.708739],[111.063919,22.719897],[111.060547,22.731533],[111.085378,22.729673],[111.095111,22.733445],[111.099249,22.741786],[111.120094,22.742424],[111.146304,22.73727],[111.174737,22.740086],[111.176193,22.736261],[111.202097,22.740458],[111.204626,22.750126],[111.218497,22.748108],[111.232139,22.758997],[111.239036,22.768824],[111.241105,22.781305],[111.255207,22.787094],[111.256893,22.793838],[111.272143,22.790652],[111.272833,22.798883],[111.291609,22.807804],[111.287624,22.816087],[111.30663,22.839606],[111.303641,22.843959],[111.319659,22.851232],[111.330541,22.866094],[111.341577,22.870552],[111.35154,22.885147],[111.358744,22.889233],[111.361963,22.909981],[111.370316,22.915446],[111.375528,22.926534],[111.373995,22.939213],[111.364722,22.947594],[111.36932,22.951042],[111.363572,22.968598],[111.375374,22.967856],[111.37729,22.973265],[111.397216,22.981273],[111.40373,22.991242],[111.389629,23.005612],[111.396986,23.013353],[111.414,23.01611],[111.416069,23.025653],[111.434002,23.036202],[111.427181,23.060637],[111.434539,23.071555],[111.402044,23.066202],[111.394687,23.06811],[111.379513,23.081305],[111.374225,23.092539],[111.374991,23.111295],[111.379973,23.123162],[111.3766,23.14202],[111.366024,23.144721],[111.398672,23.159816],[111.392464,23.16956],[111.384341,23.167654],[111.384264,23.19413],[111.388862,23.210225],[111.377903,23.215784],[111.379206,23.221554],[111.365795,23.236904],[111.371926,23.264319],[111.36112,23.270564],[111.351233,23.266013],[111.349624,23.272786],[111.356598,23.283369],[111.353379,23.288977],[111.376524,23.304638],[111.375068,23.315271]]]]}}]};

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 33:
/*!*********************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/config/line.json ***!
  \*********************************************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"LineA":{"chartData":{"categories":["06-13","06-14","06-15","06-16","06-17","06-18"],"series":[{"name":"新增确诊","data":[35,20,25,37,4,20]},{"name":"新增治愈","data":[35,50,65,77,49,80]},{"name":"新增死亡","data":[100,20,5,3,4,40]}]}}}};

/***/ }),

/***/ 4:
/*!***************************************************************!*\
  !*** C:/Users/Mac/Desktop/广东新冠疫情追踪小程序/wx-epidemic/pages.json ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map