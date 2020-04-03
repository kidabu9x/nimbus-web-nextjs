module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BlogMeta.js":
/*!********************************!*\
  !*** ./components/BlogMeta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogMeta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Tags */ "./components/Tags.js");
/* harmony import */ var _components_ReadingProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ReadingProgress */ "./components/ReadingProgress.js");
/* harmony import */ var _utils_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/seo */ "./utils/seo.js");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/formatters */ "./utils/formatters.js");
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/BlogMeta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class BlogMeta extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderProgressBar", postData => {
      return postData.hideProgressBar ? null : __jsx(_components_ReadingProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 50
        }
      });
    });
  }

  render() {
    const {
      postData
    } = this.props.data;
    const {
      formattedPublishDate
    } = postData;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, this.renderProgressBar(postData), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, postData.title), __jsx("small", {
      className: "post-date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_4__["formatDisplayDate"])(formattedPublishDate)), __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_1__["default"], {
      tags: postData.tags,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }), Object(_utils_seo__WEBPACK_IMPORTED_MODULE_3__["articleSEO"])(postData));
  }

}

/***/ }),

/***/ "./components/LinkAnchor.js":
/*!**********************************!*\
  !*** ./components/LinkAnchor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkAnchor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function LinkAnchor(props) {
  const nodeTypes = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "li", "span", "div", "a"];

  if (!nodeTypes.includes(props.element)) {
    throw new Error(`HTML tag ${props.element} is not in the list of valid tags. Add it to the list or use another tag.`);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.element, {
    id: props.id
  }, props.text);
}

/***/ }),

/***/ "./components/ReadingProgress.js":
/*!***************************************!*\
  !*** ./components/ReadingProgress.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReadingProgress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrollprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scrollprogress */ "scrollprogress");
/* harmony import */ var scrollprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scrollprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/ReadingProgress.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ReadingProgress extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      progress: 0
    });
  }

  componentDidMount() {
    this.progressObserver = new scrollprogress__WEBPACK_IMPORTED_MODULE_1___default.a((x, y) => {
      this.setState({
        progress: y * 100
      });
    });
  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }

  render() {
    const style = {
      backgroundColor: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].css.primaryColor,
      height: "5px",
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      width: `${this.state.progress}%`
    };
    return __jsx("div", {
      className: "progress-bar",
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }
    });
  }

}

/***/ }),

/***/ "./components/SmoothLink.js":
/*!**********************************!*\
  !*** ./components/SmoothLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmoothLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/SmoothLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SmoothLink(props) {
  return __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.target,
    offset: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.linkText);
}

/***/ }),

/***/ "./components/Tags.js":
/*!****************************!*\
  !*** ./components/Tags.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/Tags.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function tagMaker(tagList) {
  let alphabetizedTags = tagList.sort();
  return __jsx("div", {
    className: "jsx-2531728194" + " " + `tag-container`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2531728194",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Tags: "), alphabetizedTags.map(tag => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: `${tag}-link`,
    href: `/search?q=${tag}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("a", {
    key: tag,
    className: "jsx-2531728194" + " " + "tag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, tag))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2531728194",
    __self: this
  }, ".tag-container.jsx-2531728194{margin-top:10px;}a.tag.jsx-2531728194{margin-left:10px;background-color:#eee;font-size:14px;padding:3px 9px;border:2px solid #ddd;border-radius:17px;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}a.tag.jsx-2531728194:first-of-type{margin-left:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL2NvbXBvbmVudHMvVGFncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFld0IsQUFHcUMsQUFHQyxBQVlELGdCQWRwQixBQWVBLENBWjBCLHNCQUVQLGVBQ0MsZ0JBQ00sc0JBQ0gsbUJBQ0osZUFDTSxrREFDekIiLCJmaWxlIjoiL1VzZXJzL3BoYW10aWVuL1dvcmsvTmltYnVzL2Jsb2cvY29tcG9uZW50cy9UYWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiB0YWdNYWtlcih0YWdMaXN0KSB7XG4gICAgbGV0IGFscGhhYmV0aXplZFRhZ3MgPSB0YWdMaXN0LnNvcnQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRhZy1jb250YWluZXJgfT5cbiAgICAgICAgICAgIDxzcGFuPlRhZ3M6IDwvc3Bhbj5cbiAgICAgICAgICAgIHthbHBoYWJldGl6ZWRUYWdzLm1hcCh0YWcgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17YCR7dGFnfS1saW5rYH0gaHJlZj17YC9zZWFyY2g/cT0ke3RhZ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50YWctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS50YWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA5cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEudGFnOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY29uc3QgVGFnQmxvY2sgPSBwcm9wcyA9PiB7XG4gICAgaWYgKCFwcm9wcy50YWdzIHx8ICFBcnJheS5pc0FycmF5KHByb3BzLnRhZ3MpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGFnTWFrZXIocHJvcHMudGFncyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWdCbG9jaztcbiJdfQ== */\n/*@ sourceURL=/Users/phamtien/Work/Nimbus/blog/components/Tags.js */"));
}

const TagBlock = props => {
  if (!props.tags || !Array.isArray(props.tags)) return null;
  return tagMaker(props.tags);
};

/* harmony default export */ __webpack_exports__["default"] = (TagBlock);

/***/ }),

/***/ "./config/config.yml":
/*!***************************!*\
  !*** ./config/config.yml ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"config":({"author":"Your Name here", "siteName":"Your Site Name here", "siteDescription":"The personal blog of Your Name", "defaultPageTitle":"Add a default page title here", "blogTitle":"Blog", "baseUrl":"base url of your site here (e.g. www.mysite.com)", "websiteLogo":"https://cdn.auth0.com/blog/logos/nextjs-logo.png", "twitterHandle":"@your twitter handle", "twitterCardType":"summary", "navigation":[({"text":"Trang chủ", "link":"/", "key":0}), ({"text":"Bài viết", "link":"/blog", "key":1}), ({"text":"Về chúng tôi", "link":"/about", "key":2})], "css":({"primaryColor":"#536DFE", "accentColor":"#455A64", "lightGray":"#eeeeee", "backgroundColor":"#ffffff", "black":"#333"})})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx":
/*!**************************************************************************!*\
  !*** ./pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx ***!
  \**************************************************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogMeta */ "./components/BlogMeta.js");
/* harmony import */ var _components_SmoothLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SmoothLink */ "./components/SmoothLink.js");
/* harmony import */ var _components_LinkAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/LinkAnchor */ "./components/LinkAnchor.js");
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */




const meta = {
  title: "Demo Reading Progress Bar & Smooth Scroll",
  tags: ["mdx"],
  layout: "post",
  publishDate: "2018-11-07",
  modifiedDate: false,
  seoDescription: "This post demonstrates the use of smooth scroll components and reading progress bar.",
  exclude: false
};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }));
};

const layoutProps = {
  meta
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_BlogMeta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props,
    mdxType: "BlogMeta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_SmoothLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: "#chapter-1",
    linkText: "Chapter 1",
    mdxType: "SmoothLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 27
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_SmoothLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: "#chapter-2",
    linkText: "Chapter 2",
    mdxType: "SmoothLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 27
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_SmoothLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: "#chapter-3",
    linkText: "Chapter 3",
    mdxType: "SmoothLink",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 27
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, `Cat ipsum dolor sit amet, chew foot flex claws on the human's belly and purr like a lawnmower. My slave human didn't give me any food so i pooped on the floor sleep nap. Trip on catnip pet my belly, you know you want to; seize the hand and shred it!. Run outside as soon as door open fall asleep upside-down lounge in doorway flee in terror at cucumber discovered on floor yet attack feet, pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now eat plants, meow, and throw up because i ate plants. Find empty spot in cupboard and sleep all day really likes hummus kitty scratches couch bad kitty for eat owner's food. Sleep nap slap kitten brother with paw yet why must they do that, pushes butt to face pee in human's bed until he cleans the litter box.
If it fits, i sits curl into a furry donut and behind the couch, for ears back wide eyed but mesmerizing birds. Eats owners hair then claws head unwrap toilet paper so always ensure to lay down in such a manner that tail can lightly brush human's nose , purr i like frogs and 0 gravity so lick the curtain just to be annoying cat fur is the new black . Cat cat moo moo lick ears lick paws sit in window and stare oooh, a bird, yum and sit by the fire for bite the neighbor's bratty kid find empty spot in cupboard and sleep all day gnaw the corn cob, for scratch the furniture. Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat furrier and even more furrier hairball jump off balcony, onto stranger's head or lick the plastic bag. Scream at teh bath litter kitter kitty litty little kitten big roar roar feed me. Man running from cops stops to pet cats, goes to jail when in doubt, wash chase mice, but find box a little too small and curl up with fur hanging out . Eat plants, meow, and throw up because i ate plants meow to be let in for claws in your leg for bleghbleghvomit my furball really tie the room together so push your water glass on the floor and poop in litter box, scratch the walls, so stare at the wall, play with food and get confused by dust. Disappear for four days and return home with an expensive injury; bite the vet ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss and try to jump onto window and fall while scratching at wall instantly break out into full speed gallop across the house for no reason, yet throwup on your pillow. Lick the plastic bag hate dog my left donut is missing, as is my right yet attack dog, run away and pretend to be victim and thinking longingly about tuna brine love you, then bite you. Favor packaging over toy refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am reward the chosen human with a slow blink, so eat half my food and ask for more yet snuggles up to shoulders or knees and purrs you to sleep. Dismember a mouse and then regurgitate parts of it on the family room floor dream about hunting birds for ask to go outside and ask to come inside and ask to go outside and ask to come inside destroy couch as revenge yet scoot butt on the rug, but experiences short bursts of poo-phoria after going to the loo so tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad . Pushes butt to face asdflkjaertvlkjasntvkjn (sits on keyboard) lick left leg for ninety minutes, still dirty or meow groom forever, stretch tongue and leave it slightly out, blep. Toy mouse squeak roll over who's the baby head nudges , toy mouse squeak roll over sit on human so i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! attack like a vicious monster. White cat sleeps on a black shirt pretend not to be evil, run in circles, for have my breakfast spaghetti yarn yet that box? i can fit in that box trip on catnip cat dog hate mouse eat string barf pillow no baths hate everything. Eat and than sleep on your face run up and down stairs stare at wall turn and meow stare at wall some more meow again continue staring . Sit on human missing until dinner time demand to be let outside at once, and expect owner to wait for me as i think about it for attack feet meow. You have cat to be kitten me right meow give attitude, groom forever, stretch tongue and leave it slightly out, blep steal the warm chair right after you get up. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good dead stare with ears cocked yet favor packaging over toy for make muffins. When owners are asleep, cry for no apparent reason sleep on keyboard while happily ignoring when being called for i like frogs and 0 gravity and wake up human for food at 4am touch my tail, i shred your hand purrrr so that box? i can fit in that box. Push your water glass on the floor meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat swat turds around the house or meowing chowing and wowing yet demand to have some of whatever the human is cooking, then sniff the offering and walk away so suddenly go on wild-eyed crazy rampage meoooow. Making sure that fluff gets into the owner's eyes play time, but claw at curtains stretch and yawn nibble on tuna ignore human bite human hand, or i can haz. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Chew on cable. Climb leg pee in human's bed until he cleans the litter box stares at human while pushing stuff off a table and sleep everywhere, but not in my bed, yet terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry. Rub face on everything.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_LinkAnchor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    element: "h2",
    id: "chapter-1",
    text: "Chapter 1",
    mdxType: "LinkAnchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, `Hit you unexpectedly fooled again thinking the dog likes me try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard. Meow meow, i tell my human chase mice, and flex claws on the human's belly and purr like a lawnmower yet my water bowl is clean and freshly replenished, so i'll drink from the toilet. Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry groom forever, stretch tongue and leave it slightly out, blep yet floof tum, tickle bum, jellybean footies curly toes. Gate keepers of hell love ears back wide eyed and give me some of your food give me some of your food give me some of your food meh, i don't want it yet ask to go outside and ask to come inside and ask to go outside and ask to come inside scratch. Fall asleep on the washing machine massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now run up and down stairs. Destroy the blinds i'm going to lap some water out of my master's cup meow but put butt in owner's face and licks your face. Kick up litter hide from vacuum cleaner. Instantly break out into full speed gallop across the house for no reason cats are fats i like to pets them they like to meow back meowing chowing and wowing, that box? i can fit in that box for if it smells like fish eat as much as you wish. Poop in the plant pot white cat sleeps on a black shirt. Try to jump onto window and fall while scratching at wall catty ipsum but my water bowl is clean and freshly replenished, so i'll drink from the toilet yet meow meow. Shove bum in owner's face like camera lens ooooh feather moving feather! lie in the sink all day or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table kick up litter.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, `Spill litter box, scratch at owner, destroy all furniture, especially couch hunt by meowing loudly at 5am next to human slave food dispenser. Taco cat backwards spells taco cat present belly, scratch hand when stroked yet meowwww but eat a plant, kill a hand refuse to drink water except out of someone's glass. Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed that box? i can fit in that box so cat mojo but meow to be let out. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce if human is on laptop sit on the keyboard. Chase dog then run away plays league of legends trip on catnip. Sleep in the bathroom sink warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats, but roll on the floor purring your whiskers off jump five feet high and sideways when a shadow moves lick left leg for ninety minutes, still dirty. Small kitty warm kitty little balls of fur steal the warm chair right after you get up inspect anything brought into the house, yet cough furball. I like fish demand to be let outside at once, and expect owner to wait for me as i think about it but lick the curtain just to be annoying but sit and stare for hiiiiiiiiii feed me now. Claw drapes hiss at vacuum cleaner scratch the box. I am the best mrow so and sometimes switches in french and say "miaou" just because well why not or who's the baby dont wait for the storm to pass, dance in the rain bleghbleghvomit my furball really tie the room together stare at ceiling light. Really likes hummus meow to be let out steal the warm chair right after you get up. Plan steps for world domination spend six hours per day washing, but still have a crusty butthole and poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls for cough furball into food bowl then scratch owner for a new one cat not kitten around . Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! why use post when this sofa is here yet fight an alligator and win drink water out of the faucet find something else more interesting, but mark territory. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark cough furball into food bowl then scratch owner for a new one and bleghbleghvomit my furball really tie the room together so if it smells like fish eat as much as you wish but hack up furballs.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_LinkAnchor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    element: "h2",
    id: "chapter-2",
    text: "Chapter 2",
    mdxType: "LinkAnchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, `The dog smells bad thinking longingly about tuna brine. Munch on tasty moths. Sleep on my human's head nap all day, for demand to have some of whatever the human is cooking, then sniff the offering and walk away attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently prance along on top of the garden fence, annoy the neighbor's dog and make it bark destroy house in 5 seconds for my water bowl is clean and freshly replenished, so i'll drink from the toilet. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked sleep in the bathroom sink open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! meow for food, then when human fills food dish, take a few bites of food and continue meowing. Pee in human's bed until he cleans the litter box hiss and stare at nothing then run suddenly away lounge in doorway. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now scratch the postman wake up lick paw wake up owner meow meow but purr like an angel. And sometimes switches in french and say "miaou" just because well why not pet me pet me don't pet me. When owners are asleep, cry for no apparent reason cough furball, kitty loves pigs and this cat happen now, it was too purr-fect!!! and experiences short bursts of poo-phoria after going to the loo headbutt owner's knee. Immediately regret falling into bathtub milk the cow and sniff other cat's butt and hang jaw half open thereafter. Drool floof tum, tickle bum, jellybean footies curly toes. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap lick the plastic bag so lick plastic bags but cough furball into food bowl then scratch owner for a new one. Pee in human's bed until he cleans the litter box being gorgeous with belly side up cry louder at reflection and hate dog hack.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, `Hopped up on catnip eat plants, meow, and throw up because i ate plants see owner, run in terror. Meowing chowing and wowing kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? and eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap eat all the power cords love to play with owner's hair tie. Sleep on keyboard pretend not to be evil sit in a box for hours or sleep on my human's head find box a little too small and curl up with fur hanging out pee in the shoe. Dont wait for the storm to pass, dance in the rain. Instantly break out into full speed gallop across the house for no reason. You are a captive audience while sitting on the toilet, pet me brown cats with pink ears. Hate dog. Pee in human's bed until he cleans the litter box loves cheeseburgers, refuse to leave cardboard box so refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am and favor packaging over toy. Ooooh feather moving feather! rub face on owner, but litter kitter kitty litty little kitten big roar roar feed me bathe private parts with tongue then lick owner's face. Sit by the fire thug cat so ptracy, so intrigued by the shower, yet lie in the sink all day. Reward the chosen human with a slow blink. Purr when being pet scratch at the door then walk away for i'm going to lap some water out of my master's cup meow cat slap dog in face, so mew for meow all night. That box? i can fit in that box chase imaginary bugs when in doubt, wash sit by the fire. Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! catch mouse and gave it as a present have secret plans, for drink water out of the faucet and see owner, run in terror or who's the baby, so the cat was chasing the mouse. Attack like a vicious monster disappear for four days and return home with an expensive injury; bite the vet or missing until dinner time where is my slave? I'm getting hungry but meow loudly just to annoy owners. Lick master's hand at first then bite because im moody scoot butt on the rug loves cheeseburgers sleep nap. Claw drapes chew the plant, you have cat to be kitten me right meow yet meow litter kitter kitty litty little kitten big roar roar feed me be superior or meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Pounce on unsuspecting person sniff catnip and act crazy yet attack like a vicious monster, then cats take over the world poop in litter box, scratch the walls and i'm going to lap some water out of my master's cup meow. Eat all the power cords spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce caticus cuteicus. Curl up and sleep on the freshly laundered towels i am the best ask to be pet then attack owners hand for scamper i like big cats and i can not lie cough hairball on conveniently placed pants but it's 3am, time to create some chaos . Dont wait for the storm to pass, dance in the rain kitty kitty take a big fluffing crap 💩 purrr purr littel cat, little cat purr purr so cry louder at reflection, yet sit by the fire yet love to play with owner's hair tie. Climb a tree, wait for a fireman jump to fireman then scratch his face fooled again thinking the dog likes me play time. Purr poop on grasses meowwww. Sleeps on my head twitch tail in permanent irritation but leave fur on owners clothes if it smells like fish eat as much as you wish get my claw stuck in the dog's ear. Wake up human for food at 4am scratch.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_LinkAnchor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    element: "h2",
    id: "chapter-3",
    text: "Chapter 3",
    mdxType: "LinkAnchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, `Cats go for world domination stinky cat so human is washing you why halp oh the horror flee scratch hiss bite be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day. Rub face on owner always ensure to lay down in such a manner that tail can lightly brush human's nose yet destroy house in 5 seconds. Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water yowling nonstop the whole night yet present belly, scratch hand when stroked proudly present butt to human eat the rubberband destroy the blinds for roll on the floor purring your whiskers off. Play riveting piece on synthesizer keyboard. Ooh, are those your \\$250 dollar sandals? lemme use that as my litter box no, you can't close the door, i haven't decided whether or not i wanna go out spread kitty litter all over house. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff i like frogs and 0 gravity or that box? i can fit in that box loves cheeseburgers purrr purr littel cat, little cat purr purr. Cat slap dog in face lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back climb a tree, wait for a fireman jump to fireman then scratch his face find a way to fit in tiny box. Cats go for world domination pretend you want to go out but then don't i shredded your linens for you so purrrrrr. I like big cats and i can not lie eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Poop on floor and watch human clean up. Annoy kitten brother with poking toy mouse squeak roll over for steal the warm chair right after you get up scream at teh bath. Spread kitty litter all over house eat plants, meow, and throw up because i ate plants. Stare at guinea pigs hiss and stare at nothing then run suddenly away, yet brown cats with pink ears, so why use post when this sofa is here, with tail in the air. Kitty poochy the cat was chasing the mouse or this human feeds me, i should be a god and give me some of your food give me some of your food give me some of your food meh, i don't want it claw drapes. Your pillow is now my pet bed bring your owner a dead bird weigh eight pounds but take up a full-size bed so eat half my food and ask for more, so meow for food, then when human fills food dish, take a few bites of food and continue meowing for shake treat bag, but climb a tree, wait for a fireman jump to fireman then scratch his face. Yowling nonstop the whole night my cat stared at me he was sipping his tea, too throw down all the stuff in the kitchen climb a tree, wait for a fireman jump to fireman then scratch his face or hiss and stare at nothing then run suddenly away, or cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Sleep on my human's head. Meow to be let out love. Stares at human while pushing stuff off a table loves cheeseburgers. Spend all night ensuring people don't sleep sleep all day play time, for stare at wall turn and meow stare at wall some more meow again continue staring knock over christmas tree but cuddle no cuddle cuddle love scratch scratch. Eat all the power cords hack, yet play time, or unwrap toilet paper purrrrrr or ask to go outside and ask to come inside and ask to go outside and ask to come inside. Spill litter box, scratch at owner, destroy all furniture, especially couch licks paws love me! intently sniff hand, or unwrap toilet paper and stand in doorway, unwilling to chose whether to stay in or go out refuse to leave cardboard box. Attack dog, run away and pretend to be victim lick left leg for ninety minutes, still dirty.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, `Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss. Meow to be let in with tail in the air you call this cat food. Jump off balcony, onto stranger's head annoy the old grumpy cat, start a fight and then retreat to wash when i lose no, you can't close the door, i haven't decided whether or not i wanna go out for mew for mew or purrrrrr. Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss toy mouse squeak roll over thug cat stares at human while pushing stuff off a table but purr while eating. Stand in front of the computer screen scratch. Cat cat moo moo lick ears lick paws leave hair everywhere, but annoy owner until he gives you food say meow repeatedly until belly rubs, feels good stuff and things. Present belly, scratch hand when stroked stare at wall turn and meow stare at wall some more meow again continue staring hopped up on catnip you are a captive audience while sitting on the toilet, pet me. Take a big fluffing crap 💩 give attitude kitty poochy lick the other cats but run up and down stairs.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, `Have secret plans meow loudly just to annoy owners and head nudges attack like a vicious monster. Immediately regret falling into bathtub who's the baby. Stare at the wall, play with food and get confused by dust brown cats with pink ears drool yet put butt in owner's face tuxedo cats always looking dapper hiding behind the couch until lured out by a feathery toy yet dont wait for the storm to pass, dance in the rain. Cat dog hate mouse eat string barf pillow no baths hate everything adventure always take a big fluffing crap 💩. Fall over dead (not really but gets sypathy) poop in the plant pot present belly, scratch hand when stroked yet sleep so licks your face stare at wall turn and meow stare at wall some more meow again continue staring yet disappear for four days and return home with an expensive injury; bite the vet. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans howl on top of tall thing. White cat sleeps on a black shirt prance along on top of the garden fence, annoy the neighbor's dog and make it bark cats are fats i like to pets them they like to meow back yet scratch at the door then walk away and if it smells like fish eat as much as you wish making sure that fluff gets into the owner's eyes steal the warm chair right after you get up. Purr when being pet climb a tree, wait for a fireman jump to fireman then scratch his face yet bite the neighbor's bratty kid yet it's 3am, time to create some chaos . Ignore the human until she needs to get up, then climb on her lap and sprawl run in circles, for proudly present butt to human so this cat happen now, it was too purr-fect!!! but has closed eyes but still sees you. Being gorgeous with belly side up suddenly go on wild-eyed crazy rampage but eats owners hair then claws head and attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, `Chase red laser dot lick the curtain just to be annoying yet bite the neighbor's bratty kid but behind the couch, flee in terror at cucumber discovered on floor for suddenly go on wild-eyed crazy rampage chill on the couch table. Hunt by meowing loudly at 5am next to human slave food dispenser love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a \\$125 sweater) so i can haz rub whiskers on bare skin act innocent scream for no reason at 4 am paw at beetle and eat it before it gets away meow. See owner, run in terror show belly or when owners are asleep, cry for no apparent reason for pose purrfectly to show my beauty my slave human didn't give me any food so i pooped on the floor or hiiiiiiiiii feed me now. Stare at the wall, play with food and get confused by dust chase after silly colored fish toys around the house but intrigued by the shower, so kitty scratches couch bad kitty licks paws pushes butt to face for massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Cuddle no cuddle cuddle love scratch scratch ask to be pet then attack owners hand but scratch and sit on human twitch tail in permanent irritation for catasstrophe. Why must they do that missing until dinner time, or stare at ceiling light chew foot. Bite the neighbor's bratty kid proudly present butt to human stretch, or bite off human's toes. Scratch at the door then walk away disappear for four days and return home with an expensive injury; bite the vet take a big fluffing crap 💩, for use lap as chair trip on catnip. Pounce on unsuspecting person pretend not to be evil so who's the baby i like cats because they are fat and fluffy ignore the squirrels, you'll never catch them anyway yet scratch. Favor packaging over toy stare at ceiling light. Jump off balcony, onto stranger's head meow and walk away nya nya nyan or take a big fluffing crap 💩 yet eat the fat cats food lick the other cats so cat ass trophy. Eats owners hair then claws head. If it fits, i sits a nice warm laptop for me to sit on. Bite the neighbor's bratty kid kitty kitty. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock pushes butt to face yet need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me chase imaginary bugs, for leave hair everywhere.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./utils/formatters.js":
/*!*****************************!*\
  !*** ./utils/formatters.js ***!
  \*****************************/
/*! exports provided: formatSEODate, formatDisplayDate, getSecondsSinceEpoch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatSEODate", function() { return formatSEODate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDisplayDate", function() { return formatDisplayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecondsSinceEpoch", function() { return getSecondsSinceEpoch; });
function formatSEODate(dateString, dateModified = false) {
  if (!dateString && dateModified) {
    return "";
  }

  return dateString ? new Date(dateString).toISOString() : new Date().toISOString();
}
function formatDisplayDate(dateString) {
  return new Date(dateString).toGMTString().replace(" 00:00:00 GMT", "");
}
function getSecondsSinceEpoch(dateString) {
  return new Date(dateString).getTime() / 1000;
}

/***/ }),

/***/ "./utils/seo.js":
/*!**********************!*\
  !*** ./utils/seo.js ***!
  \**********************/
/*! exports provided: articleSEO, createSEOConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleSEO", function() { return articleSEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSEOConfig", function() { return createSEOConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/utils/seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function articleSEO(postData) {
  if (!postData) return;
  const description = postData.seoDescription ? postData.seoDescription : _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].siteDescription;
  return __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["ArticleJsonLd"], {
    url: postData.canonicalUrl,
    title: postData.title,
    images: [_config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].websiteLogo],
    datePublished: postData.formattedPublishDate,
    dateModified: postData.formattedModifiedDate,
    authorName: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].author,
    publisherName: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].author,
    publisherLogo: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].websiteLogo,
    description: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  });
}
function createSEOConfig(data) {
  if (!data) return;
  const description = data.seoDescription ? data.seoDescription : _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].siteDescription;
  return {
    title: data.title,
    description: description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: data.canonicalUrl,
      title: data.title,
      description: description,
      images: [{
        url: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].websiteLogo,
        width: 280,
        height: 280,
        alt: "Demo image for Next.js MDX Blog kit"
      }],
      site_name: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].siteName
    },
    twitter: {
      handle: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].twitterHandle,
      site: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].twitterHandle,
      cardType: _config_config_yml__WEBPACK_IMPORTED_MODULE_2__["config"].twitterCardType
    }
  }; // defaultImageHeight: 500, // defaultImageWidth: 500,
}

/***/ }),

/***/ 7:
/*!********************************************************************************!*\
  !*** multi ./pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phamtien/Work/Nimbus/blog/pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx */"./pages/blog/post-three-smooth-scroll-and-reading-progress-bar.mdx");


/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "scrollprogress":
/*!*********************************!*\
  !*** external "scrollprogress" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("scrollprogress");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=post-three-smooth-scroll-and-reading-progress-bar.js.map