webpackHotUpdate("static/development/pages/[slug].js",{

/***/ "./components/blog/BlogComponent.js":
/*!******************************************!*\
  !*** ./components/blog/BlogComponent.js ***!
  \******************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/blog/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/blog/BlogComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var BlogComponent = function BlogComponent(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    role: "listitem",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2___default.a.__hash) + " " + "item container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2___default.a.__hash) + " " + "ui padded two column grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      paddingLeft: 0
    },
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2___default.a.__hash) + " " + "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: data.thumbnail ? data.thumbnail : "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2___default.a.__hash) + " " + "ui image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      paddingLeft: 0
    },
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2___default.a.__hash) + " " + "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2___default.a.__hash),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, data.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2___default.a.__hash,
    __self: _this
  }, _styles__WEBPACK_IMPORTED_MODULE_2___default.a));
};

/***/ }),

/***/ "./components/blog/styles.js":
/*!***********************************!*\
  !*** ./components/blog/styles.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/HeaderComponent */ "./components/header/HeaderComponent.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var _components_list_blog_ListBlogsComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/list-blog/ListBlogsComponent */ "./components/list-blog/ListBlogsComponent.js");
/* harmony import */ var _components_highlight_HighlightComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/highlight/HighlightComponent */ "./components/highlight/HighlightComponent.js");
/* harmony import */ var _components_blog_BlogComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/blog/BlogComponent */ "./components/blog/BlogComponent.js");
var _this = undefined,
    _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/pages/[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Slug = function Slug(_ref) {
  var categories = _ref.categories,
      highlights = _ref.highlights,
      type = _ref.type,
      dataPage = _ref.dataPage;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Nimbus Service"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_components_header_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: categories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "ui grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left floated eleven wide column",
    style: {
      padding: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, type === _utils_constants__WEBPACK_IMPORTED_MODULE_6__["SLUG_TYPE"].CATEGORY && __jsx(_components_list_blog_ListBlogsComponent__WEBPACK_IMPORTED_MODULE_7__["ListBlogComponent"], {
    data: dataPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), type === _utils_constants__WEBPACK_IMPORTED_MODULE_6__["SLUG_TYPE"].BLOG && __jsx(_components_blog_BlogComponent__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"], {
    data: dataPage.blog,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 41
    }
  })), __jsx(_components_highlight_HighlightComponent__WEBPACK_IMPORTED_MODULE_8__["HighlightComponent"], {
    data: highlights,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Slug);

/***/ })

})
//# sourceMappingURL=[slug].js.68f0e43a91ee032ebe4c.hot-update.js.map