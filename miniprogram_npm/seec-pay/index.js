module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this = {
  self: {
    show: function show() {}
  }
};
wx.seecRequestPayment = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$timeStamp = _ref.timeStamp,
      timeStamp = _ref$timeStamp === undefined ? '' : _ref$timeStamp,
      _ref$nonceStr = _ref.nonceStr,
      nonceStr = _ref$nonceStr === undefined ? '' : _ref$nonceStr,
      _ref$_package = _ref._package,
      _package = _ref$_package === undefined ? '' : _ref$_package,
      _ref$signType = _ref.signType,
      signType = _ref$signType === undefined ? '' : _ref$signType,
      _ref$paySign = _ref.paySign,
      paySign = _ref$paySign === undefined ? '' : _ref$paySign,
      _ref$success = _ref.success,
      success = _ref$success === undefined ? function () {} : _ref$success,
      _ref$fail = _ref.fail,
      fail = _ref$fail === undefined ? function () {} : _ref$fail,
      _ref$complete = _ref.complete,
      complete = _ref$complete === undefined ? function () {} : _ref$complete;

  _this.timeStamp = timeStamp;
  _this.nonceStr = nonceStr;
  _this._package = _package;
  _this.signType = signType;
  _this.paySign = paySign;
  _this.success = success;
  _this.fail = fail;
  _this.complete = complete;
  if (_package.split('=').length !== 2 || paySign.split('##').length !== 6) {
    _this.fail({
      errMsg: '参数错误'
    });
    _this.complete({
      errMsg: '参数错误'
    });
    return;
  }
  _this.self.show();
};

Component({
  data: {
    title: '',
    total: '0.00',
    show: false,
    open: false,
    success: false,
    pw: [],
    tempRes: null
  },
  lifetimes: {
    created: function created() {
      _this.self = this;
    }
  },
  methods: {
    show: function show() {
      var _this2 = this;

      var arr = _this.paySign.split('##');
      this.setData({
        title: decodeURIComponent(arr[4]),
        total: Number(arr[3]).toFixed(2),
        show: true
      });
      setTimeout(function () {
        _this2.setData({
          open: true
        });
      }, 300);
    },
    hide: function hide() {
      this.setData({
        title: '',
        total: '0.00',
        show: false,
        open: false,
        success: false,
        pw: [],
        tempRes: null
      });
    },
    close: function close() {
      _this.fail({
        errMsg: '支付未完成'
      });
      _this.complete({
        errMsg: '支付未完成'
      });
      this.hide();
    },
    keyboard: function keyboard(_ref2) {
      var num = _ref2.target.dataset.num;

      if (num === undefined) return;
      if (num === '-1' && this.data.pw.length) {
        this.data.pw.pop();
      }
      if (num !== undefined && num !== '-1' && this.data.pw.length < 6) {
        this.data.pw.push(num);
      }
      this.setData({
        pw: this.data.pw
      });
      this.check();
    },
    check: function check() {
      if (this.data.pw.length === 6) {
        wx.showLoading({
          title: '正在支付',
          mask: true
        });
        var arr = _this.paySign.split('##');
        var self = this;
        wx.request({
          method: 'POST',
          url: decodeURIComponent(arr[5]),
          header: {
            token: arr[2]
          },
          data: {
            id: Number(arr[1]),
            order_number: _this._package.split('=')[1]
          },
          success: function success(res) {
            self.setData({
              success: true
            });
            self.data.tempRes = res;
            wx.hideLoading();
          },
          fail: function fail(err) {
            _this.fail(err);
            _this.complete(err);
            wx.hideLoading();
            self.hide();
          }
        });
      }
    },
    success: function success() {
      var res = this.data.tempRes;
      _this.success(res);
      _this.complete(res);
      this.hide();
    }
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map