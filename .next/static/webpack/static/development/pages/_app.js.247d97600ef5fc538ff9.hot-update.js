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
            lineNumber: 66,
            columnNumber: 17
          }
        }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }
        }, __jsx("meta", {
          name: "keywords",
          content: tagsString,
          className: "jsx-4102332743",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }
        })), __jsx(next_seo__WEBPACK_IMPORTED_MODULE_13__["NextSeo"], {
          config: seoData,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 21
          }
        }), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_14__["default"], {
          open: this.state.navOpen,
          toggleNavigation: this.handleToggleNavigation,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 21
          }
        }), __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 21
          }
        }, Object(_utils_render_app_layout__WEBPACK_IMPORTED_MODULE_18__["renderLayout"])(this.props, this.state)), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }
        }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: _styles__WEBPACK_IMPORTED_MODULE_22__["globalStyles"].__hash,
          __self: this
        }, _styles__WEBPACK_IMPORTED_MODULE_22__["globalStyles"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "4102332743",
          __self: this
        }, ".icon-button.jsx-4102332743{margin:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0dnQyxBQUd5QyxZQUNoQiIsImZpbGUiOiIvVXNlcnMvcGhhbXRpZW4vV29yay9OaW1idXMvYmxvZy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IGNyZWF0ZVNFT0NvbmZpZyB9IGZyb20gXCIuLi91dGlscy9zZW9cIjtcbmltcG9ydCBnZXRQb3N0RGF0YSBmcm9tIFwiLi4vdXRpbHMvZ2V0LXBvc3QtZGF0YVwiO1xuaW1wb3J0IEJsb2dFbmdpbmUgZnJvbSBcIi4uL3V0aWxzL2Jsb2ctZW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJMYXlvdXQgfSBmcm9tIFwiLi4vdXRpbHMvcmVuZGVyLWFwcC1sYXlvdXRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgeyBjaGVja0ZvclNXIH0gZnJvbSBcIi4uL3V0aWxzL2NoZWNrLWZvci1zd1wiO1xuaW1wb3J0IHsgRmFCYXJzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBnbG9iYWxTdHlsZXMgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG5hdk9wZW46IGZhbHNlLCBwb3N0RGF0YTogcHJvcHMucG9zdERhdGEgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICAgICAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgW2FsbERhdGEsIHBvc3REYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIEJsb2dFbmdpbmUoKSxcbiAgICAgICAgICAgIGdldFBvc3REYXRhKHJvdXRlcilcbiAgICAgICAgXSkuY2F0Y2goZXJyb3IgPT5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBfYXBwLmpzIGdldEluaXRpYWxQcm9wcygpXCIsIGVycm9yKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb3BzT2JqID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgeyBwb3N0RGF0YSwgYWxsRGF0YSwgLi4ucGFnZVByb3BzIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4geyAuLi5wcm9wc09iaiB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBhd2FpdCBjaGVja0ZvclNXKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEodGhpcy5wcm9wcy5yb3V0ZXIpO1xuICAgICAgICBpZiAoIXByZXZTdGF0ZS5wb3N0RGF0YSB8fCBwb3N0RGF0YS5uYW1lICE9PSB0aGlzLnN0YXRlLnBvc3REYXRhLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3N0RGF0YSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRvZ2dsZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmF2T3BlbjogIXRoaXMuc3RhdGUubmF2T3BlblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBvc3REYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHNlb0RhdGEgPSBjcmVhdGVTRU9Db25maWcocG9zdERhdGEpO1xuICAgICAgICBpZiAocG9zdERhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ3NTdHJpbmcgPSBwb3N0RGF0YS50YWdzLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICB7LyogKDEpIFNFTyAgKi99XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17dGFnc1N0cmluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFNlbyBjb25maWc9e3Nlb0RhdGF9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qICgyKSBuYXZpZ2F0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5uYXZPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTmF2aWdhdGlvbj17dGhpcy5oYW5kbGVUb2dnbGVOYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b24gaGFtYnVyZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlTmF2aWdhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFCYXJzIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qICgzKSBwYWdlIGJvZHkgKi99XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJMYXlvdXQodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qICg0KSBmb290ZXIgKi99XG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICB7LyogKDUpIGdsb2JhbCBhbmQgbG9jYWwgc3R5bGVzICovfVxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxTdHlsZXN9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/phamtien/Work/Nimbus/blog/pages/_app.js */"));
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
//# sourceMappingURL=_app.js.247d97600ef5fc538ff9.hot-update.js.map