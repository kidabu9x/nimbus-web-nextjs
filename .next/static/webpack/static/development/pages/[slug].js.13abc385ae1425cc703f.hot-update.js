webpackHotUpdate("static/development/pages/[slug].js",{

/***/ "./components/header/HeaderComponent.js":
/*!**********************************************!*\
  !*** ./components/header/HeaderComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/header/styles.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/header/HeaderComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Header(_ref) {
  var _this = this;

  var categories = _ref.categories;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      txtSearch = _useState[0],
      setTxtSearch = _useState[1];

  var onSearch = function onSearch() {
    if (txtSearch !== "") {
      console.log(txtSearch);
      router.push("/search?query=".concat(txtSearch));
    }
  };

  var onChangeTxtSearch = function onChangeTxtSearch(evt) {
    setTxtSearch(evt.target.value);
  };

  var onKeyDownSearch = function onKeyDownSearch(evt) {};

  return __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "ui dividing header container-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "header-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "logo",
    src: "/static/assets/images/logo.png",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "ui icon input transparent header-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search...",
    onChange: onChangeTxtSearch,
    onKeyDown: onKeyDownSearch,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("i", {
    "aria-hidden": "true",
    onClick: onSearch,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "search circular link icon icon-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "ui secondary menu nav-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "".concat(router.asPath.substring(1) === "" ? "active" : "", " item"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Trang ch\u1EE7")), categories && categories.map(function (category) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: category.id,
      href: "/".concat(category.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash) + " " + "".concat(router.asPath.substring(1) === category.slug ? "active" : "", " item"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, category.title));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_3__["default"]));
}

/***/ })

})
//# sourceMappingURL=[slug].js.13abc385ae1425cc703f.hot-update.js.map