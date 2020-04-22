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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
var _this = undefined,
    _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/blog/BlogComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var BlogComponent = function BlogComponent(_ref) {
  var data = _ref.data;
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui breadcrumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Trang ch\u1EE7")), __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "right angle icon divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, data.title)), __jsx("h2", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, data.title.toUpperCase()), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "tag-and-author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, data.tags.map(function (tag) {
    return __jsx("button", {
      key: tag.title,
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui grey button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, tag.title);
  }), "\u2003", __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "user icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), "\u2003", __jsx("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "".concat(data.authors[0].first_name, " ").concat(data.authors[0].last_name))), data.content[0].content, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: _this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

/***/ })

})
//# sourceMappingURL=[slug].js.0335f308a08d912d214f.hot-update.js.map