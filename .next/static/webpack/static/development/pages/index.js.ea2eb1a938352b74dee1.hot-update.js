webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/HomeComponent.js":
/*!******************************************!*\
  !*** ./components/home/HomeComponent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/home/styles.js");
/* harmony import */ var _CardLeft_CardLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardLeft/CardLeft */ "./components/home/CardLeft/CardLeft.js");
/* harmony import */ var _CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardRight/CardRight */ "./components/home/CardRight/CardRight.js");
/* harmony import */ var _category_CategoryComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category/CategoryComponent */ "./components/category/CategoryComponent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/components/home/HomeComponent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  container: {
    paddingLeft: "5%",
    paddingRight: "5%"
  }
});
function Home(_ref) {
  var _this = this;

  var children = _ref.children,
      features = _ref.features;
  var highlights = features.highlights;
  var categoryFeatures = features.features;
  return __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, highlights && __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "container-highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "header-highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "N\u1ED5i b\u1EADt")), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui two column grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "stretched row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx(_CardLeft_CardLeft__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blog: highlights[0],
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
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "ui two column grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, __jsx(_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: highlights[1],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), __jsx(_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: highlights[2],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx(_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: highlights[3],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx(_CardRight_CardRight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: highlights[4],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }))))))), categoryFeatures.map(function (categoryFeature, index) {
    return __jsx(_category_CategoryComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index.toString(),
      categoryFeature: categoryFeature,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    });
  }), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
}

/***/ })

})
//# sourceMappingURL=index.js.ea2eb1a938352b74dee1.hot-update.js.map