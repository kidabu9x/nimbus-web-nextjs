webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _utils_seo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/seo */ "./utils/seo.js");
/* harmony import */ var _utils_get_post_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/get-post-data */ "./utils/get-post-data.js");
/* harmony import */ var _utils_blog_engine__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/blog-engine */ "./utils/blog-engine.js");
/* harmony import */ var _utils_render_app_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/render-app-layout */ "./utils/render-app-layout.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _utils_check_for_sw__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/check-for-sw */ "./utils/check-for-sw.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../styles */ "./styles/index.js");









var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyApp);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToggleNavigation", function () {
      _this.setState({
        navOpen: !_this.state.navOpen
      });
    });

    _this.state = {
      navOpen: false,
      postData: props.postData
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_utils_check_for_sw__WEBPACK_IMPORTED_MODULE_20__["checkForSW"])());

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var postData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidUpdate$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_utils_get_post_data__WEBPACK_IMPORTED_MODULE_16__["default"])(this.props.router));

            case 2:
              postData = _context2.sent;

              if (!prevState.postData || postData.name !== this.state.postData.name) {
                this.setState({
                  postData: postData
                });
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var postData = this.state.postData;
      var seoData = Object(_utils_seo__WEBPACK_IMPORTED_MODULE_15__["createSEOConfig"])(postData);

      if (postData) {
        var tagsString = postData.tags.join(", ");
        return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 9
          }
        }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }
        }, __jsx("meta", {
          name: "keywords",
          content: tagsString,
          className: "jsx-2177872622",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }
        })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_13__["NextSeo"], {
          config: seoData,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }
        }), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_14__["default"], {
          open: this.state.navOpen,
          toggleNavigation: this.handleToggleNavigation,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 11
          }
        }), __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }
        }, Object(_utils_render_app_layout__WEBPACK_IMPORTED_MODULE_18__["renderLayout"])(this.props, this.state)), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }
        }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: _styles__WEBPACK_IMPORTED_MODULE_22__["globalStyles"].__hash,
          __self: this
        }, _styles__WEBPACK_IMPORTED_MODULE_22__["globalStyles"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "2177872622",
          __self: this
        }, ".icon-button.jsx-2177872622{margin:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZzQixBQUcyQixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY3JlYXRlU0VPQ29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL3Nlb1wiO1xuaW1wb3J0IGdldFBvc3REYXRhIGZyb20gXCIuLi91dGlscy9nZXQtcG9zdC1kYXRhXCI7XG5pbXBvcnQgQmxvZ0VuZ2luZSBmcm9tIFwiLi4vdXRpbHMvYmxvZy1lbmdpbmVcIjtcbmltcG9ydCB7IHJlbmRlckxheW91dCB9IGZyb20gXCIuLi91dGlscy9yZW5kZXItYXBwLWxheW91dFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7IGNoZWNrRm9yU1cgfSBmcm9tIFwiLi4vdXRpbHMvY2hlY2stZm9yLXN3XCI7XG5pbXBvcnQgeyBGYUJhcnMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGdsb2JhbFN0eWxlcyB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBuYXZPcGVuOiBmYWxzZSwgcG9zdERhdGE6IHByb3BzLnBvc3REYXRhIH07XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG5cbiAgICBjb25zdCBbYWxsRGF0YSwgcG9zdERhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgQmxvZ0VuZ2luZSgpLFxuICAgICAgZ2V0UG9zdERhdGEocm91dGVyKVxuICAgIF0pLmNhdGNoKGVycm9yID0+XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gX2FwcC5qcyBnZXRJbml0aWFsUHJvcHMoKVwiLCBlcnJvcilcbiAgICApO1xuXG4gICAgY29uc3QgcHJvcHNPYmogPSBPYmplY3QuYXNzaWduKHt9LCB7IHBvc3REYXRhLCBhbGxEYXRhLCAuLi5wYWdlUHJvcHMgfSk7XG5cbiAgICByZXR1cm4geyAuLi5wcm9wc09iaiB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXdhaXQgY2hlY2tGb3JTVygpO1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YSh0aGlzLnByb3BzLnJvdXRlcik7XG4gICAgaWYgKCFwcmV2U3RhdGUucG9zdERhdGEgfHwgcG9zdERhdGEubmFtZSAhPT0gdGhpcy5zdGF0ZS5wb3N0RGF0YS5uYW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcG9zdERhdGEgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hdk9wZW46ICF0aGlzLnN0YXRlLm5hdk9wZW5cbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwb3N0RGF0YSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHNlb0RhdGEgPSBjcmVhdGVTRU9Db25maWcocG9zdERhdGEpO1xuICAgIGlmIChwb3N0RGF0YSkge1xuICAgICAgY29uc3QgdGFnc1N0cmluZyA9IHBvc3REYXRhLnRhZ3Muam9pbihcIiwgXCIpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHsvKiAoMSkgU0VPICAqL31cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3RhZ3NTdHJpbmd9IC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxOZXh0U2VvIGNvbmZpZz17c2VvRGF0YX0gLz5cblxuICAgICAgICAgIHsvKiAoMikgbmF2aWdhdGlvbiAqL31cbiAgICAgICAgICA8TmF2aWdhdGlvblxuICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5uYXZPcGVufVxuICAgICAgICAgICAgdG9nZ2xlTmF2aWdhdGlvbj17dGhpcy5oYW5kbGVUb2dnbGVOYXZpZ2F0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnV0dG9uIGhhbWJ1cmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZU5hdmlnYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhQmFycyBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxuXG4gICAgICAgICAgey8qICgzKSBwYWdlIGJvZHkgKi99XG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3JlbmRlckxheW91dCh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICAgICAgey8qICg0KSBmb290ZXIgKi99XG4gICAgICAgICAgPEZvb3RlciAvPlxuXG4gICAgICAgICAgey8qICg1KSBnbG9iYWwgYW5kIGxvY2FsIHN0eWxlcyAqL31cbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICAgIHtnbG9iYWxTdHlsZXN9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaWNvbi1idXR0b24ge1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/phamtien/Work/Nimbus/blog/pages/_app.js */"));
      } else {
        return null;
      }
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var Component, router, ctx, pageProps, _await$Promise$all$ca, _await$Promise$all$ca2, allData, postData, propsObj;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInitialProps$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
              pageProps = {};

              if (!Component.getInitialProps) {
                _context3.next = 6;
                break;
              }

              _context3.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Component.getInitialProps(ctx));

            case 5:
              pageProps = _context3.sent;

            case 6:
              _context3.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Promise.all([Object(_utils_blog_engine__WEBPACK_IMPORTED_MODULE_17__["default"])(), Object(_utils_get_post_data__WEBPACK_IMPORTED_MODULE_16__["default"])(router)]).catch(function (error) {
                return console.error("Error in _app.js getInitialProps()", error);
              }));

            case 8:
              _await$Promise$all$ca = _context3.sent;
              _await$Promise$all$ca2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_await$Promise$all$ca, 2);
              allData = _await$Promise$all$ca2[0];
              postData = _await$Promise$all$ca2[1];
              propsObj = Object.assign({}, _objectSpread({
                postData: postData,
                allData: allData
              }, pageProps));
              return _context3.abrupt("return", _objectSpread({}, propsObj));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.03b508af7e6c50e91c3f.hot-update.js.map