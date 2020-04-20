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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/HeaderComponent.jsx":
/*!***********************************************!*\
  !*** ./components/Header/HeaderComponent.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/Header/styles.js");
var _this = undefined,
    _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/Header/HeaderComponent.jsx";



/*
 * Header component of the site, observes the count of the movies
 *
 */





var HeaderComponent = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "ui dividing header container-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "header-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "logo",
    src: "static/assets/images/logo4.png",
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "ui small left icon transparent input header-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Search...",
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    "aria-hidden": "true",
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "search icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "ui secondary menu nav-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "active item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Trang ch\u1EE7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __self: _this,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Danh m\u1EE5c"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _styles__WEBPACK_IMPORTED_MODULE_5__["default"].__hash,
    css: _styles__WEBPACK_IMPORTED_MODULE_5__["default"]
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./components/Header/styles.js":
/*!*************************************!*\
  !*** ./components/Header/styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".container.jsx-2772814533{width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}.container-search.jsx-2772814533{width:86%;margin:auto;}.header-logo.jsx-2772814533{margin-top:14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.logo.jsx-2772814533{height:37px;}.header-search.jsx-2772814533{height:30px;border-color:#fff;margin-left:40px;}.btn-write.jsx-2772814533{border-radius:20px;margin-left:20px;margin-top:10px;margin-bottom:10px;}.nav-menu.jsx-2772814533{width:86%;padding-left:7%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFHZ0IsQUFNRCxBQUlNLEFBSUosQUFHQSxBQUtPLEFBTVQsVUFyQkUsQUFzQkksQ0E1QkcsQ0FjckIsQUFHb0IsSUFQTCxHQVlJLEdBZm5CLElBc0JBLElBWG1CLE1BS0QsV0FKbEIsS0FLcUIsbUJBQ3JCLG1CQWRBLGNBVnlCLG1HQUNxRCxxRUFDOUUiLCJmaWxlIjoiL1VzZXJzL3BoYW10aWVuL1dvcmsvTmltYnVzL2Jsb2cvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIH1cbiAgLmNvbnRhaW5lci1zZWFyY2gge1xuICAgIHdpZHRoOiA4NiU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5oZWFkZXItbG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gIH1cbiAgLmhlYWRlci1zZWFyY2gge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLmJ0bi13cml0ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLm5hdi1tZW51IHtcbiAgICB3aWR0aDogODYlO1xuICAgIHBhZGRpbmctbGVmdDogNyU7XG4gIH1cbmA7XG4iXX0= */\n/*@ sourceURL=/Users/phamtien/Work/Nimbus/blog/components/Header/styles.js */");

_defaultExport.__hash = "2772814533";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _serverapi_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serverapi_ajax */ "./serverapi_ajax.js");
/* harmony import */ var _serverapi_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverapi_localstorage */ "./serverapi_localstorage.js");
/* App configuration.
 *
 * Currently only selects between AJAX and localstorage API class.
 */
var IS_API_LOCALSTORAGE = false;


var api = null;

if (IS_API_LOCALSTORAGE) {
  api = _serverapi_localstorage__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  api = _serverapi_ajax__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_HeaderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/HeaderComponent */ "./components/Header/HeaderComponent.jsx");
/* harmony import */ var _styles_layout_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/layout.sass */ "./styles/layout.sass");
/* harmony import */ var _styles_layout_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/pages/_app.jsx";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * Top level app & layout, loaded ONCE at the start
 */




 // required here for hot reload





var MyApp = /*#__PURE__*/function (_App) {
  _inherits(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _super.apply(this, arguments);
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.info("app did mount"); // always query movies at the start of the app, no matter what page
      // gets loaded first (actually we just need the count in the header
      // but for simplicity there is no separate API for count only)
      // api.query_movies().then(movies => store.set_movies(movies));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      }, "Nimbus Service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_HeaderComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }, " ", "Footer", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }
      }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "right",
        href: "https://github.com/tomimick/tm-nextjs-starter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, "Source at Github"))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);



/***/ }),

/***/ "./serverapi_ajax.js":
/*!***************************!*\
  !*** ./serverapi_ajax.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* ServerAPI talks REST with the backend server.
 *
 * All server communication takes place via this singleton module!
 *
 * Calls return promises.
 *
 * (Wish I could use async/await but browser support is still lacking.)
 *
 * My Python REST API server implements this simple movie API:
 * https://github.com/tomimick/restpie3
 */

var URL_MOVIES = "http://api-uat.nimbus.com.vn/v1";

var ServerAPI = /*#__PURE__*/function () {
  function ServerAPI() {
    _classCallCheck(this, ServerAPI);

    this.client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      withCredentials: true // pass cookies to cross-site api

    });
  }

  _createClass(ServerAPI, [{
    key: "query_movies",
    value: function query_movies() {
      var url = URL_MOVIES;
      return this.client.get(url).then(function (reply) {
        return reply.data;
      }); // have a cache here so the request would not always reach server
    }
  }, {
    key: "get_movie",
    value: function get_movie(id) {
      var url = "".concat(URL_MOVIES).concat(id);
      return this.client.get(url).then(function (reply) {
        return reply.data;
      });
    }
  }, {
    key: "save_movie",
    value: function save_movie(item) {
      if (!item.id) {
        // create
        var url = URL_MOVIES;
        return this.client.post(url, item);
      } else {
        // update
        var _url = "".concat(URL_MOVIES).concat(item.id);

        return this.client.put(_url, item);
      }
    }
  }, {
    key: "delete_movie",
    value: function delete_movie(id) {
      var url = "".concat(URL_MOVIES).concat(id);
      return this.client.delete(url);
    }
  }, {
    key: "getDashboard",
    value: function getDashboard() {
      var url = "".concat(URL_MOVIES);
      return this.client.get(url).then(function (data) {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      });
    }
  }]);

  return ServerAPI;
}(); // export singleton API


var api = new ServerAPI();
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./serverapi_localstorage.js":
/*!***********************************!*\
  !*** ./serverapi_localstorage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* ServerAPI mockup - backed by localStorage for demo purposes only.
 *
 * Not efficient for large data because of localStorage limitations.
 */

var KEY = "movies";

var LocalStorageAPI = /*#__PURE__*/function () {
  function LocalStorageAPI() {
    _classCallCheck(this, LocalStorageAPI);
  }

  _createClass(LocalStorageAPI, [{
    key: "query_movies",
    value: function query_movies() {
      return new Promise(function (resolve, reject) {
        //localStorage.removeItem("movies") // to remove all
        var value = localStorage.getItem(KEY);

        if (!value) {
          // load initial data
          var url = "/static/exampledata/movies.json";
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (reply) {
            localStorage.setItem(KEY, JSON.stringify(reply.data));
            resolve(reply.data);
          });
        } else {
          var data = JSON.parse(value);
          resolve(data);
        }
      });
    }
  }, {
    key: "get_movie",
    value: function get_movie(id) {
      return new Promise(function (resolve, reject) {
        id = parseInt(id);
        var value = localStorage.getItem(KEY);
        var data = JSON.parse(value) || []; // search for id

        var _iterator = _createForOfIteratorHelper(data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var x = _step.value;

            if (x.id == id) {
              resolve(x);
              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        reject();
      });
    }
  }, {
    key: "save_movie",
    value: function save_movie(item) {
      return new Promise(function (resolve, reject) {
        var value = localStorage.getItem(KEY);
        var moviearray = JSON.parse(value);

        if (!item.id) {
          // create object
          var seconds = Math.floor(Date.now() / 1000);
          item.id = seconds;
          moviearray.push(item);
        } else {
          // edit object
          var _iterator2 = _createForOfIteratorHelper(moviearray),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var x = _step2.value;

              if (x.id == item.id) {
                x.title = item.title;
                x.director = item.director;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        localStorage.setItem(KEY, JSON.stringify(moviearray));
        resolve(item);
      });
    }
  }, {
    key: "delete_movie",
    value: function delete_movie(id) {
      return new Promise(function (resolve, reject) {
        id = parseInt(id);
        var value = localStorage.getItem(KEY);
        var moviearray = JSON.parse(value);
        moviearray = moviearray.filter(function (item) {
          return item.id !== id;
        });
        localStorage.setItem(KEY, JSON.stringify(moviearray));
        resolve();
      });
    }
  }]);

  return LocalStorageAPI;
}(); // export singleton object


var api_mockup = new LocalStorageAPI();
/* harmony default export */ __webpack_exports__["default"] = (api_mockup);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Data store, managed by Mobx - https://mobx.js.org
 *
 * Currently just holds our list of movies.
 */



var MyStore = /*#__PURE__*/function () {
  function MyStore() {
    _classCallCheck(this, MyStore);

    this.movielist = [];
  } // a property for count


  _createClass(MyStore, [{
    key: "set_movies",
    // replace the whole movielist
    value: function set_movies(array) {
      this.movielist = array || [];
    } // add a single movie

  }, {
    key: "add_movie",
    value: function add_movie(obj) {
      this.movielist.push(obj);
    }
  }, {
    key: "count",
    get: function get() {
      return this.movielist.length;
    }
  }]);

  return MyStore;
}(); // attach mobx to the store
// (not using decorators since they require extra babel)


Object(mobx__WEBPACK_IMPORTED_MODULE_0__["decorate"])(MyStore, {
  // our data
  movielist: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  count: mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
  // actions
  set_movies: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  add_movie: mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
}); // log mobx errors

Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["onError"])(function (error) {
  console.log(error);
}); // export singleton store

var store = new MyStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./styles/layout.sass":
/*!****************************!*\
  !*** ./styles/layout.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./pages/_app.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

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
//# sourceMappingURL=_app.js.map