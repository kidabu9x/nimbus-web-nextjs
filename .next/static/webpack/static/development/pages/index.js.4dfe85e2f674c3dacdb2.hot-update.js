webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/category/CategoryComponent.js":
/*!**************************************************!*\
  !*** ./components/category/CategoryComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/category/styles.js");
/* harmony import */ var _home_CardLeft_CardLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/CardLeft/CardLeft */ "./components/home/CardLeft/CardLeft.js");
/* harmony import */ var _home_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/CardRight/CardRight */ "./components/home/CardRight/CardRight.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/category/CategoryComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Category(_ref) {
  var categoryFeature = _ref.categoryFeature;
  return __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "header-highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, categoryFeature.category.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: categoryFeature.category.slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Xem th\xEAm >"))), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui two column grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "stretched row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(_home_CardLeft_CardLeft__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blog: categoryFeature.blogs[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui two column grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx(_home_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: categoryFeature.blogs[1],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx(_home_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: categoryFeature.blogs[2],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx(_home_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: categoryFeature.blogs[3],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx(_home_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: categoryFeature.blogs[4],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
}

/***/ })

})
//# sourceMappingURL=index.js.4dfe85e2f674c3dacdb2.hot-update.js.map