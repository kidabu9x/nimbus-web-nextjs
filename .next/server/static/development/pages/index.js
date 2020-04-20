module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _serverapi_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serverapi_ajax */ "./serverapi_ajax.js");
/* harmony import */ var _serverapi_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverapi_localstorage */ "./serverapi_localstorage.js");
/* App configuration.
 *
 * Currently only selects between AJAX and localstorage API class.
 */
var IS_API_LOCALSTORAGE = false;


var api = null;

if (IS_API_LOCALSTORAGE) {
  api = _serverapi_localstorage__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  api = _serverapi_ajax__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/pages/index.jsx";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* The home page.
 *
 * Loads and displays the movie list.
 */






var About = /*#__PURE__*/function (_React$Component) {
  _inherits(About, _React$Component);

  var _super = _createSuper(About);

  function About() {
    _classCallCheck(this, About);

    return _super.apply(this, arguments);
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.info("index did mount"); // query movies and put into store, whenever this page gets activated
      // api.getDashboard()
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, "List of movies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, _store__WEBPACK_IMPORTED_MODULE_3__["default"].movielist.map(function (movie) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: movie.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/moviedetails?id=" + movie.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }
        }, movie.title)), "by ", movie.director || "Unknown");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/movieedit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "but",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, "Add a new movie")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // mark as mobx observer


/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(About)); // debug in console
//window.store = store;

/***/ }),

/***/ "./serverapi_ajax.js":
/*!***************************!*\
  !*** ./serverapi_ajax.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* ServerAPI talks REST with the backend server.
 *
 * All server communication takes place via this singleton module!
 *
 * Calls return promises.
 *
 * (Wish I could use async/await but browser support is still lacking.)
 *
 * My Python REST API server implements this simple movie API:
 * https://github.com/tomimick/restpie3
 */

var URL_MOVIES = "http://api-uat.nimbus.com.vn/v1";

var ServerAPI = /*#__PURE__*/function () {
  function ServerAPI() {
    _classCallCheck(this, ServerAPI);

    this.client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      withCredentials: true // pass cookies to cross-site api

    });
  }

  _createClass(ServerAPI, [{
    key: "query_movies",
    value: function query_movies() {
      var url = URL_MOVIES;
      return this.client.get(url).then(function (reply) {
        return reply.data;
      }); // have a cache here so the request would not always reach server
    }
  }, {
    key: "get_movie",
    value: function get_movie(id) {
      var url = "".concat(URL_MOVIES).concat(id);
      return this.client.get(url).then(function (reply) {
        return reply.data;
      });
    }
  }, {
    key: "save_movie",
    value: function save_movie(item) {
      if (!item.id) {
        // create
        var url = URL_MOVIES;
        return this.client.post(url, item);
      } else {
        // update
        var _url = "".concat(URL_MOVIES).concat(item.id);

        return this.client.put(_url, item);
      }
    }
  }, {
    key: "delete_movie",
    value: function delete_movie(id) {
      var url = "".concat(URL_MOVIES).concat(id);
      return this.client.delete(url);
    }
  }, {
    key: "getDashboard",
    value: function getDashboard() {
      var url = "".concat(URL_MOVIES);
      return this.client.get(url).then(function (data) {
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      });
    }
  }]);

  return ServerAPI;
}(); // export singleton API


var api = new ServerAPI();
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./serverapi_localstorage.js":
/*!***********************************!*\
  !*** ./serverapi_localstorage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* ServerAPI mockup - backed by localStorage for demo purposes only.
 *
 * Not efficient for large data because of localStorage limitations.
 */

var KEY = "movies";

var LocalStorageAPI = /*#__PURE__*/function () {
  function LocalStorageAPI() {
    _classCallCheck(this, LocalStorageAPI);
  }

  _createClass(LocalStorageAPI, [{
    key: "query_movies",
    value: function query_movies() {
      return new Promise(function (resolve, reject) {
        //localStorage.removeItem("movies") // to remove all
        var value = localStorage.getItem(KEY);

        if (!value) {
          // load initial data
          var url = "/static/exampledata/movies.json";
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (reply) {
            localStorage.setItem(KEY, JSON.stringify(reply.data));
            resolve(reply.data);
          });
        } else {
          var data = JSON.parse(value);
          resolve(data);
        }
      });
    }
  }, {
    key: "get_movie",
    value: function get_movie(id) {
      return new Promise(function (resolve, reject) {
        id = parseInt(id);
        var value = localStorage.getItem(KEY);
        var data = JSON.parse(value) || []; // search for id

        var _iterator = _createForOfIteratorHelper(data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var x = _step.value;

            if (x.id == id) {
              resolve(x);
              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        reject();
      });
    }
  }, {
    key: "save_movie",
    value: function save_movie(item) {
      return new Promise(function (resolve, reject) {
        var value = localStorage.getItem(KEY);
        var moviearray = JSON.parse(value);

        if (!item.id) {
          // create object
          var seconds = Math.floor(Date.now() / 1000);
          item.id = seconds;
          moviearray.push(item);
        } else {
          // edit object
          var _iterator2 = _createForOfIteratorHelper(moviearray),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var x = _step2.value;

              if (x.id == item.id) {
                x.title = item.title;
                x.director = item.director;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        localStorage.setItem(KEY, JSON.stringify(moviearray));
        resolve(item);
      });
    }
  }, {
    key: "delete_movie",
    value: function delete_movie(id) {
      return new Promise(function (resolve, reject) {
        id = parseInt(id);
        var value = localStorage.getItem(KEY);
        var moviearray = JSON.parse(value);
        moviearray = moviearray.filter(function (item) {
          return item.id !== id;
        });
        localStorage.setItem(KEY, JSON.stringify(moviearray));
        resolve();
      });
    }
  }]);

  return LocalStorageAPI;
}(); // export singleton object


var api_mockup = new LocalStorageAPI();
/* harmony default export */ __webpack_exports__["default"] = (api_mockup);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Data store, managed by Mobx - https://mobx.js.org
 *
 * Currently just holds our list of movies.
 */



var MyStore = /*#__PURE__*/function () {
  function MyStore() {
    _classCallCheck(this, MyStore);

    this.movielist = [];
  } // a property for count


  _createClass(MyStore, [{
    key: "set_movies",
    // replace the whole movielist
    value: function set_movies(array) {
      this.movielist = array || [];
    } // add a single movie

  }, {
    key: "add_movie",
    value: function add_movie(obj) {
      this.movielist.push(obj);
    }
  }, {
    key: "count",
    get: function get() {
      return this.movielist.length;
    }
  }]);

  return MyStore;
}(); // attach mobx to the store
// (not using decorators since they require extra babel)


Object(mobx__WEBPACK_IMPORTED_MODULE_0__["decorate"])(MyStore, {
  // our data
  movielist: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  count: mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
  // actions
  set_movies: mobx__WEBPACK_IMPORTED_MODULE_0__["action"],
  add_movie: mobx__WEBPACK_IMPORTED_MODULE_0__["action"]
}); // log mobx errors

Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["onError"])(function (error) {
  console.log(error);
}); // export singleton store

var store = new MyStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map