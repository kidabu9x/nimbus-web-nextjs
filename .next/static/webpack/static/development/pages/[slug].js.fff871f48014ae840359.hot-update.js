webpackHotUpdate("static/development/pages/[slug].js",{

/***/ "./components/list-blog/ListBlogsComponent.js":
/*!****************************************************!*\
  !*** ./components/list-blog/ListBlogsComponent.js ***!
  \****************************************************/
/*! exports provided: ListBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBlogComponent", function() { return ListBlogComponent; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/list-blog/styles.js");
/* harmony import */ var _item_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/Item */ "./components/list-blog/item/Item.js");
var _this = undefined,
    _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/list-blog/ListBlogsComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var ListBlogComponent = function ListBlogComponent(_ref) {
  var data = _ref.data,
      isSearch = _ref.isSearch,
      searchTitle = _ref.searchTitle;
  return __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, data.category.title, ":"), __jsx("div", {
    role: "list",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, data.blogs.map(function (blog, index) {
    return __jsx(_item_Item__WEBPACK_IMPORTED_MODULE_3__["ListBlogItemComponent"], {
      key: index.toString(),
      data: blog,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: _this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

/***/ })

})
//# sourceMappingURL=[slug].js.fff871f48014ae840359.hot-update.js.map