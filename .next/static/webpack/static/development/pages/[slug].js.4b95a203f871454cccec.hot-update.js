webpackHotUpdate("static/development/pages/[slug].js",{

/***/ "./components/highlight/HighlightComponent.js":
/*!****************************************************!*\
  !*** ./components/highlight/HighlightComponent.js ***!
  \****************************************************/
/*! exports provided: HighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightComponent", function() { return HighlightComponent; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/highlight/styles.js");
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item/Item */ "./components/highlight/Item/Item.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/highlight/HighlightComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var HighlightComponent = function HighlightComponent(_ref) {
  var data = _ref.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
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

  var onKeyDownSearch = function onKeyDownSearch(evt) {
    if (evt.key === "Enter") {
      onSearch();
    }
  };

  return __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "right floated five wide column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui icon input input-field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search...",
    onChange: onChangeTxtSearch,
    onKeyDown: onKeyDownSearch,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("i", {
    "aria-hidden": "true",
    onClick: onSearch,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "search circular link icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "B\xE0i vi\u1EBFt n\u1ED5i b\u1EADt:"), __jsx("div", {
    role: "list",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui list list-field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, data.map(function (highlight, index) {
    return __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_3__["HighlightItemComponent"], {
      key: index.toString(),
      data: highlight,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    });
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: _this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

/***/ })

})
//# sourceMappingURL=[slug].js.4b95a203f871454cccec.hot-update.js.map