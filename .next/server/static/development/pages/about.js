module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.yml":
/*!***************************!*\
  !*** ./config/config.yml ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"config":({"author":"Your Name here", "siteName":"Your Site Name here", "siteDescription":"The personal blog of Your Name", "defaultPageTitle":"Add a default page title here", "blogTitle":"Blog", "baseUrl":"base url of your site here (e.g. www.mysite.com)", "websiteLogo":"https://cdn.auth0.com/blog/logos/nextjs-logo.png", "twitterHandle":"@your twitter handle", "twitterCardType":"summary", "navigation":[({"text":"Trang chủ", "link":"/", "key":0}), ({"text":"Bài viết", "link":"/blog", "key":1}), ({"text":"Về chúng tôi", "link":"/about", "key":2})], "css":({"primaryColor":"#536DFE", "accentColor":"#455A64", "lightGray":"#eeeeee", "backgroundColor":"#ffffff", "black":"#333"})})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles/index.js");
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const meta = {
  title: "About",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

function About() {
  return __jsx("div", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash}` + " " + "centered-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: `jsx-${_styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "About"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"]));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! exports provided: centeredPageStyles, globalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centeredPageStyles", function() { return centeredPageStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyles", function() { return globalStyles; });
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__);
// In an attempt to keep all configuration in one place, css variables
// are currently stored in config.yml. Move these variables into a
// variables file in this style/ directory if that is your preference.
 // used in pages/about.js, pages/index.js

const centeredPageStyles = new String(".centered-container.jsx-1100462982{height:80vh;width:98vw;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3N0eWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRcUMsQUFHcUIsWUFDRCxXQUNDLFlBQ0MsMEVBQ00sNkZBQ0ksbUdBQ0QsOEVBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3N0eWxlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5cbi8vIEluIGFuIGF0dGVtcHQgdG8ga2VlcCBhbGwgY29uZmlndXJhdGlvbiBpbiBvbmUgcGxhY2UsIGNzcyB2YXJpYWJsZXNcbi8vIGFyZSBjdXJyZW50bHkgc3RvcmVkIGluIGNvbmZpZy55bWwuIE1vdmUgdGhlc2UgdmFyaWFibGVzIGludG8gYVxuLy8gdmFyaWFibGVzIGZpbGUgaW4gdGhpcyBzdHlsZS8gZGlyZWN0b3J5IGlmIHRoYXQgaXMgeW91ciBwcmVmZXJlbmNlLlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWcueW1sXCI7XG5cbi8vIHVzZWQgaW4gcGFnZXMvYWJvdXQuanMsIHBhZ2VzL2luZGV4LmpzXG5leHBvcnQgY29uc3QgY2VudGVyZWRQYWdlU3R5bGVzID0gY3NzYFxuICAgIC5jZW50ZXJlZC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgIHdpZHRoOiA5OHZ3O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbmA7XG5cbi8vIHVzZWQgaW4gX2FwcC5qc1xuZXhwb3J0IGNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcy5nbG9iYWxgXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJBYnJpbCBGYXRmYWNlXCI7XG4gICAgZm9udC1kaXNwbGF5OiBhdXRvOyAvKiBJbXBvcnRhbnQgZm9yIHBlcmZvcm1hbmNlICovXG4gICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL0FicmlsLUZhdGZhY2Uud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke2NvbmZpZy5jc3MuYmxhY2t9O1xufVxuI19fbmV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJHtjb25maWcuY3NzLmxpZ2h0R3JheX07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xufVxuc3Ryb25nLFxuaDEsXG5oMSA+ICosXG5oMixcbmgyID4gKixcbmgzLFxuaDMgPiAqLFxuaDQsXG5oNCA+ICosXG5oNSxcbmg1ID4gKixcbmg2LFxuaDYgPiAqIHtcbiAgICBmb250LWZhbWlseTogXCJBYnJpbCBGYXRmYWNlXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbnN0cm9uZyB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5hY2NlbnRDb2xvcn1cbn1cbi5zZWFyY2gtbGF5b3V0LFxuLmJsb2ctbGF5b3V0LFxuLmJsb2ctcG9zdC1saXN0IHtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMjBweCAxMDBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ibG9nLWxheW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5pbWcuaW1nLWNlbnRlcmVkIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5pY29uLWJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogJHtjb25maWcuY3NzLmJhY2tncm91bmRDb2xvcn07XG59XG4uaWNvbi1idXR0b24uaGFtYnVyZ2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IDM7IC8qIHRoZSBuYXZpZ2F0aW9uIG1lbnUgaXMgei1pbmRleDogNCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29uZmlnLmNzcy5saWdodEdyYXl9O1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuYSB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5hY2NlbnRDb2xvcn07XG59XG5sYWJlbCB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5ibGFja307XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5wLFxucCBhLFxuYixcbmVtLFxuc3BhbixcbmxpLFxudWwsXG5vbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQgLyogVGhpcyBwcmV2ZW50cyBhIGJ1ZyB3aXRoIHRoZSByZWFkaW5nIHByb2dyZXNzIGJhci4gTGVhdmUgdGhpcyBzdHlsZSBoZXJlIHVubGVzcyB5b3UgYXJlIHJlbW92aW5nIHRoZSByZWFkaW5nIHByb2dyZXNzIGJhci4gKi9cbn1cblxuY29kZSA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsgLyogbWFrZSBzdXJlIGNvZGUgZm9udCBzaXplIGlzIHNldCBpbiA8Q29kZUJsb2NrIC8+ICovXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50OyAvKiBGaXhlcyBjb2RlIGJsb2NrIHN0eWxlIGJ1ZyovXG59XG5gO1xuIl19 */\n/*@ sourceURL=/Users/phamtien/Work/Nimbus/blog/styles/index.js */"); // used in _app.js

centeredPageStyles.__hash = "1100462982";
const globalStyles = new String(`@font-face{font-family:"Abril Fatface";font-display:auto;src:url("/static/fonts/Abril-Fatface.woff2") format("woff2");font-style:normal;}html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}body{position:relative;top:0;margin:0;padding:0;color:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.black};}#__next{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;min-height:100vh;}.footer{background:#fff;height:80px;width:100%;border-top:2px solid ${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.lightGray};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;position:absolute;bottom:0;}strong,h1,h1>*,h2,h2>*,h3,h3>*,h4,h4>*,h5,h5>*,h6,h6>*{font-family:"Abril Fatface";-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}strong{color:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.accentColor};}.search-layout,.blog-layout,.blog-post-list{max-width:740px;padding:40px 20px 100px 20px;position:relative;}.blog-layout{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img{max-width:100%;}img.img-centered{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:10px 0px;}.icon-button{outline:none;border:none;background:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.backgroundColor};}.icon-button.hamburger{position:fixed;left:0px;top:0px;z-index:3;border:1px solid ${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.lightGray};padding-top:4px;border-radius:3px;}a{color:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.accentColor};}label{color:${_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.black};font-weight:600;font-family:sans-serif;font-size:18px;}p,p a,b,em,span,li,ul,ol{font-size:18px;line-height:24px;word-break:break-word;}code>span{font-size:inherit;background:inherit !important;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3N0eWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnNDLEFBR2lDLEFBTUwsQUFHTCxBQU9MLEFBTUcsQUF3QlksQUFJTyxBQUluQixBQUtILEFBSUUsQUFHRyxBQUlMLEFBS0UsQUFTb0IsQUFHQSxBQWFwQixBQUtHLGFBbENOLEVBUGhCLEFBWWEsQUF5QlEsQ0E5RUwsQUFnQ2lCLEVBN0N2QixBQWdHd0IsTUEvRnJCLEFBa0VELENBTGdDLEdBdkV0QixBQXVCUCxBQXVCUSxJQStCVCxBQXdCNkksQ0ExRjdJLEVBc0MwQixBQW1DeEMsQUFHb0IsSUEvRGtDLEdBc0RKLENBbEVYLEVBMkNqQixDQXREMkMsRUF5R2pFLEdBbEIyQixHQWFpSSxTQTdDNUosRUFnQkEsTUFOb0IsR0FsRE0sQUEyQ0EsQUE4QlAsSUE1RW5CLFNBc0RBLENBWW9CLENBdERILEFBaUVqQixlQVZzQixHQTlFQSxFQUl0QixZQXlDQSxDQWtDQSxHQTlFQSwyQkFjVyxBQTJDWCxXQWxDMkIsc0JBUk4saUJBQ3JCLDREQVF1Qiw2RkFDSixlQUNHLGtCQUNULFNBQ2IiLCJmaWxlIjoiL1VzZXJzL3BoYW10aWVuL1dvcmsvTmltYnVzL2Jsb2cvc3R5bGVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuLy8gSW4gYW4gYXR0ZW1wdCB0byBrZWVwIGFsbCBjb25maWd1cmF0aW9uIGluIG9uZSBwbGFjZSwgY3NzIHZhcmlhYmxlc1xuLy8gYXJlIGN1cnJlbnRseSBzdG9yZWQgaW4gY29uZmlnLnltbC4gTW92ZSB0aGVzZSB2YXJpYWJsZXMgaW50byBhXG4vLyB2YXJpYWJsZXMgZmlsZSBpbiB0aGlzIHN0eWxlLyBkaXJlY3RvcnkgaWYgdGhhdCBpcyB5b3VyIHByZWZlcmVuY2UuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZy55bWxcIjtcblxuLy8gdXNlZCBpbiBwYWdlcy9hYm91dC5qcywgcGFnZXMvaW5kZXguanNcbmV4cG9ydCBjb25zdCBjZW50ZXJlZFBhZ2VTdHlsZXMgPSBjc3NgXG4gICAgLmNlbnRlcmVkLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgd2lkdGg6IDk4dnc7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuYDtcblxuLy8gdXNlZCBpbiBfYXBwLmpzXG5leHBvcnQgY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzLmdsb2JhbGBcbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFicmlsIEZhdGZhY2VcIjtcbiAgICBmb250LWRpc3BsYXk6IGF1dG87IC8qIEltcG9ydGFudCBmb3IgcGVyZm9ybWFuY2UgKi9cbiAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvQWJyaWwtRmF0ZmFjZS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5odG1sIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbmJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5ibGFja307XG59XG4jX19uZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAke2NvbmZpZy5jc3MubGlnaHRHcmF5fTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5zdHJvbmcsXG5oMSxcbmgxID4gKixcbmgyLFxuaDIgPiAqLFxuaDMsXG5oMyA+ICosXG5oNCxcbmg0ID4gKixcbmg1LFxuaDUgPiAqLFxuaDYsXG5oNiA+ICoge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFicmlsIEZhdGZhY2VcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuc3Ryb25nIHtcbiAgICBjb2xvcjogJHtjb25maWcuY3NzLmFjY2VudENvbG9yfVxufVxuLnNlYXJjaC1sYXlvdXQsXG4uYmxvZy1sYXlvdXQsXG4uYmxvZy1wb3N0LWxpc3Qge1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgcGFkZGluZzogNDBweCAyMHB4IDEwMHB4IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJsb2ctbGF5b3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbmltZy5pbWctY2VudGVyZWQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmljb24tYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbmZpZy5jc3MuYmFja2dyb3VuZENvbG9yfTtcbn1cbi5pY29uLWJ1dHRvbi5oYW1idXJnZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogMzsgLyogdGhlIG5hdmlnYXRpb24gbWVudSBpcyB6LWluZGV4OiA0ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtjb25maWcuY3NzLmxpZ2h0R3JheX07XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5hIHtcbiAgICBjb2xvcjogJHtjb25maWcuY3NzLmFjY2VudENvbG9yfTtcbn1cbmxhYmVsIHtcbiAgICBjb2xvcjogJHtjb25maWcuY3NzLmJsYWNrfTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbnAsXG5wIGEsXG5iLFxuZW0sXG5zcGFuLFxubGksXG51bCxcbm9sIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZCAvKiBUaGlzIHByZXZlbnRzIGEgYnVnIHdpdGggdGhlIHJlYWRpbmcgcHJvZ3Jlc3MgYmFyLiBMZWF2ZSB0aGlzIHN0eWxlIGhlcmUgdW5sZXNzIHlvdSBhcmUgcmVtb3ZpbmcgdGhlIHJlYWRpbmcgcHJvZ3Jlc3MgYmFyLiAqL1xufVxuXG5jb2RlID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0OyAvKiBtYWtlIHN1cmUgY29kZSBmb250IHNpemUgaXMgc2V0IGluIDxDb2RlQmxvY2sgLz4gKi9cbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7IC8qIEZpeGVzIGNvZGUgYmxvY2sgc3R5bGUgYnVnKi9cbn1cbmA7XG4iXX0= */
/*@ sourceURL=/Users/phamtien/Work/Nimbus/blog/styles/index.js */`);
globalStyles.__hash = "683095552";

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phamtien/Work/Nimbus/blog/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map