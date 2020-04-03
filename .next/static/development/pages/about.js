(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/about.js"],{

/***/ "./config/config.yml":
/*!***************************!*\
  !*** ./config/config.yml ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const doc = [({"config":({"author":"Your Name here", "siteName":"Your Site Name here", "siteDescription":"The personal blog of Your Name", "defaultPageTitle":"Add a default page title here", "blogTitle":"Blog", "baseUrl":"base url of your site here (e.g. www.mysite.com)", "websiteLogo":"https://cdn.auth0.com/blog/logos/nextjs-logo.png", "twitterHandle":"@your twitter handle", "twitterCardType":"summary", "navigation":[({"text":"Trang chủ", "link":"/", "key":0}), ({"text":"Bài viết", "link":"/blog", "key":1}), ({"text":"Về chúng tôi", "link":"/about", "key":2})], "css":({"primaryColor":"#536DFE", "accentColor":"#455A64", "lightGray":"#eeeeee", "backgroundColor":"#ffffff", "black":"#333"})})})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Fphamtien%2FWork%2FNimbus%2Fblog%2Fpages%2Fabout.js!./":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Fphamtien%2FWork%2FNimbus%2Fblog%2Fpages%2Fabout.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/about", function() {
      var mod = __webpack_require__(/*! ./pages/about.js */ "./pages/about.js")
      if(true) {
        module.hot.accept(/*! ./pages/about.js */ "./pages/about.js", function() {
          if(!next.router.components["/about"]) return
          var updatedPage = __webpack_require__(/*! ./pages/about.js */ "./pages/about.js")
          next.router.update("/about", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles/index.js");
var _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var meta = {
  title: "About",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

function About() {
  return __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash) + " " + "centered-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "About"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["centeredPageStyles"]));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! exports provided: centeredPageStyles, globalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centeredPageStyles", function() { return centeredPageStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyles", function() { return globalStyles; });
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__);
// In an attempt to keep all configuration in one place, css variables
// are currently stored in config.yml. Move these variables into a
// variables file in this style/ directory if that is your preference.
 // used in pages/about.js, pages/index.js

var centeredPageStyles = new String(".centered-container.jsx-1100462982{height:80vh;width:98vw;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3N0eWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRcUMsQUFHcUIsWUFDRCxXQUNDLFlBQ0MsMEVBQ00sNkZBQ0ksbUdBQ0QsOEVBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3N0eWxlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5cbi8vIEluIGFuIGF0dGVtcHQgdG8ga2VlcCBhbGwgY29uZmlndXJhdGlvbiBpbiBvbmUgcGxhY2UsIGNzcyB2YXJpYWJsZXNcbi8vIGFyZSBjdXJyZW50bHkgc3RvcmVkIGluIGNvbmZpZy55bWwuIE1vdmUgdGhlc2UgdmFyaWFibGVzIGludG8gYVxuLy8gdmFyaWFibGVzIGZpbGUgaW4gdGhpcyBzdHlsZS8gZGlyZWN0b3J5IGlmIHRoYXQgaXMgeW91ciBwcmVmZXJlbmNlLlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWcueW1sXCI7XG5cbi8vIHVzZWQgaW4gcGFnZXMvYWJvdXQuanMsIHBhZ2VzL2luZGV4LmpzXG5leHBvcnQgY29uc3QgY2VudGVyZWRQYWdlU3R5bGVzID0gY3NzYFxuICAgIC5jZW50ZXJlZC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgIHdpZHRoOiA5OHZ3O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbmA7XG5cbi8vIHVzZWQgaW4gX2FwcC5qc1xuZXhwb3J0IGNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzcy5nbG9iYWxgXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJBYnJpbCBGYXRmYWNlXCI7XG4gICAgZm9udC1kaXNwbGF5OiBhdXRvOyAvKiBJbXBvcnRhbnQgZm9yIHBlcmZvcm1hbmNlICovXG4gICAgc3JjOiB1cmwoXCIvc3RhdGljL2ZvbnRzL0FicmlsLUZhdGZhY2Uud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaHRtbCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiAke2NvbmZpZy5jc3MuYmxhY2t9O1xufVxuI19fbmV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgJHtjb25maWcuY3NzLmxpZ2h0R3JheX07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xufVxuc3Ryb25nLFxuaDEsXG5oMSA+ICosXG5oMixcbmgyID4gKixcbmgzLFxuaDMgPiAqLFxuaDQsXG5oNCA+ICosXG5oNSxcbmg1ID4gKixcbmg2LFxuaDYgPiAqIHtcbiAgICBmb250LWZhbWlseTogXCJBYnJpbCBGYXRmYWNlXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbnN0cm9uZyB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5hY2NlbnRDb2xvcn1cbn1cbi5zZWFyY2gtbGF5b3V0LFxuLmJsb2ctbGF5b3V0LFxuLmJsb2ctcG9zdC1saXN0IHtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMjBweCAxMDBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ibG9nLWxheW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5pbWcuaW1nLWNlbnRlcmVkIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5pY29uLWJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogJHtjb25maWcuY3NzLmJhY2tncm91bmRDb2xvcn07XG59XG4uaWNvbi1idXR0b24uaGFtYnVyZ2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IDM7IC8qIHRoZSBuYXZpZ2F0aW9uIG1lbnUgaXMgei1pbmRleDogNCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29uZmlnLmNzcy5saWdodEdyYXl9O1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuYSB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5hY2NlbnRDb2xvcn07XG59XG5sYWJlbCB7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5ibGFja307XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5wLFxucCBhLFxuYixcbmVtLFxuc3BhbixcbmxpLFxudWwsXG5vbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQgLyogVGhpcyBwcmV2ZW50cyBhIGJ1ZyB3aXRoIHRoZSByZWFkaW5nIHByb2dyZXNzIGJhci4gTGVhdmUgdGhpcyBzdHlsZSBoZXJlIHVubGVzcyB5b3UgYXJlIHJlbW92aW5nIHRoZSByZWFkaW5nIHByb2dyZXNzIGJhci4gKi9cbn1cblxuY29kZSA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsgLyogbWFrZSBzdXJlIGNvZGUgZm9udCBzaXplIGlzIHNldCBpbiA8Q29kZUJsb2NrIC8+ICovXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50OyAvKiBGaXhlcyBjb2RlIGJsb2NrIHN0eWxlIGJ1ZyovXG59XG5gO1xuIl19 */\n/*@ sourceURL=/Users/phamtien/Work/Nimbus/blog/styles/index.js */"); // used in _app.js

centeredPageStyles.__hash = "1100462982";
var globalStyles = new String("@font-face{font-family:\"Abril Fatface\";font-display:auto;src:url(\"/static/fonts/Abril-Fatface.woff2\") format(\"woff2\");font-style:normal;}html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}body{position:relative;top:0;margin:0;padding:0;color:".concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.black, ";}#__next{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;min-height:100vh;}.footer{background:#fff;height:80px;width:100%;border-top:2px solid ").concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.lightGray, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;position:absolute;bottom:0;}strong,h1,h1>*,h2,h2>*,h3,h3>*,h4,h4>*,h5,h5>*,h6,h6>*{font-family:\"Abril Fatface\";-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}strong{color:").concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.accentColor, ";}.search-layout,.blog-layout,.blog-post-list{max-width:740px;padding:40px 20px 100px 20px;position:relative;}.blog-layout{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img{max-width:100%;}img.img-centered{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:10px 0px;}.icon-button{outline:none;border:none;background:").concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.backgroundColor, ";}.icon-button.hamburger{position:fixed;left:0px;top:0px;z-index:3;border:1px solid ").concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.lightGray, ";padding-top:4px;border-radius:3px;}a{color:").concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.accentColor, ";}label{color:").concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_0__["config"].css.black, ";font-weight:600;font-family:sans-serif;font-size:18px;}p,p a,b,em,span,li,ul,ol{font-size:18px;line-height:24px;word-break:break-word;}code>span{font-size:inherit;background:inherit !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFtdGllbi9Xb3JrL05pbWJ1cy9ibG9nL3N0eWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnNDLEFBR2lDLEFBTUwsQUFHTCxBQU9MLEFBTUcsQUF3QlksQUFJTyxBQUluQixBQUtILEFBSUUsQUFHRyxBQUlMLEFBS0UsQUFTb0IsQUFHQSxBQWFwQixBQUtHLGFBbENOLEVBUGhCLEFBWWEsQUF5QlEsQ0E5RUwsQUFnQ2lCLEVBN0N2QixBQWdHd0IsTUEvRnJCLEFBa0VELENBTGdDLEdBdkV0QixBQXVCUCxBQXVCUSxJQStCVCxBQXdCNkksQ0ExRjdJLEVBc0MwQixBQW1DeEMsQUFHb0IsSUEvRGtDLEdBc0RKLENBbEVYLEVBMkNqQixDQXREMkMsRUF5R2pFLEdBbEIyQixHQWFpSSxTQTdDNUosRUFnQkEsTUFOb0IsR0FsRE0sQUEyQ0EsQUE4QlAsSUE1RW5CLFNBc0RBLENBWW9CLENBdERILEFBaUVqQixlQVZzQixHQTlFQSxFQUl0QixZQXlDQSxDQWtDQSxHQTlFQSwyQkFjVyxBQTJDWCxXQWxDMkIsc0JBUk4saUJBQ3JCLDREQVF1Qiw2RkFDSixlQUNHLGtCQUNULFNBQ2IiLCJmaWxlIjoiL1VzZXJzL3BoYW10aWVuL1dvcmsvTmltYnVzL2Jsb2cvc3R5bGVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuLy8gSW4gYW4gYXR0ZW1wdCB0byBrZWVwIGFsbCBjb25maWd1cmF0aW9uIGluIG9uZSBwbGFjZSwgY3NzIHZhcmlhYmxlc1xuLy8gYXJlIGN1cnJlbnRseSBzdG9yZWQgaW4gY29uZmlnLnltbC4gTW92ZSB0aGVzZSB2YXJpYWJsZXMgaW50byBhXG4vLyB2YXJpYWJsZXMgZmlsZSBpbiB0aGlzIHN0eWxlLyBkaXJlY3RvcnkgaWYgdGhhdCBpcyB5b3VyIHByZWZlcmVuY2UuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZy55bWxcIjtcblxuLy8gdXNlZCBpbiBwYWdlcy9hYm91dC5qcywgcGFnZXMvaW5kZXguanNcbmV4cG9ydCBjb25zdCBjZW50ZXJlZFBhZ2VTdHlsZXMgPSBjc3NgXG4gICAgLmNlbnRlcmVkLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgd2lkdGg6IDk4dnc7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuYDtcblxuLy8gdXNlZCBpbiBfYXBwLmpzXG5leHBvcnQgY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzLmdsb2JhbGBcbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFicmlsIEZhdGZhY2VcIjtcbiAgICBmb250LWRpc3BsYXk6IGF1dG87IC8qIEltcG9ydGFudCBmb3IgcGVyZm9ybWFuY2UgKi9cbiAgICBzcmM6IHVybChcIi9zdGF0aWMvZm9udHMvQWJyaWwtRmF0ZmFjZS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5odG1sIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbmJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICR7Y29uZmlnLmNzcy5ibGFja307XG59XG4jX19uZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAke2NvbmZpZy5jc3MubGlnaHRHcmF5fTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5zdHJvbmcsXG5oMSxcbmgxID4gKixcbmgyLFxuaDIgPiAqLFxuaDMsXG5oMyA+ICosXG5oNCxcbmg0ID4gKixcbmg1LFxuaDUgPiAqLFxuaDYsXG5oNiA+ICoge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFicmlsIEZhdGZhY2VcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuc3Ryb25nIHtcbiAgICBjb2xvcjogJHtjb25maWcuY3NzLmFjY2VudENvbG9yfVxufVxuLnNlYXJjaC1sYXlvdXQsXG4uYmxvZy1sYXlvdXQsXG4uYmxvZy1wb3N0LWxpc3Qge1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgcGFkZGluZzogNDBweCAyMHB4IDEwMHB4IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJsb2ctbGF5b3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbmltZy5pbWctY2VudGVyZWQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmljb24tYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbmZpZy5jc3MuYmFja2dyb3VuZENvbG9yfTtcbn1cbi5pY29uLWJ1dHRvbi5oYW1idXJnZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogMzsgLyogdGhlIG5hdmlnYXRpb24gbWVudSBpcyB6LWluZGV4OiA0ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtjb25maWcuY3NzLmxpZ2h0R3JheX07XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5hIHtcbiAgICBjb2xvcjogJHtjb25maWcuY3NzLmFjY2VudENvbG9yfTtcbn1cbmxhYmVsIHtcbiAgICBjb2xvcjogJHtjb25maWcuY3NzLmJsYWNrfTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbnAsXG5wIGEsXG5iLFxuZW0sXG5zcGFuLFxubGksXG51bCxcbm9sIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZCAvKiBUaGlzIHByZXZlbnRzIGEgYnVnIHdpdGggdGhlIHJlYWRpbmcgcHJvZ3Jlc3MgYmFyLiBMZWF2ZSB0aGlzIHN0eWxlIGhlcmUgdW5sZXNzIHlvdSBhcmUgcmVtb3ZpbmcgdGhlIHJlYWRpbmcgcHJvZ3Jlc3MgYmFyLiAqL1xufVxuXG5jb2RlID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0OyAvKiBtYWtlIHN1cmUgY29kZSBmb250IHNpemUgaXMgc2V0IGluIDxDb2RlQmxvY2sgLz4gKi9cbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7IC8qIEZpeGVzIGNvZGUgYmxvY2sgc3R5bGUgYnVnKi9cbn1cbmA7XG4iXX0= */\n/*@ sourceURL=/Users/phamtien/Work/Nimbus/blog/styles/index.js */"));
globalStyles.__hash = "683095552";

/***/ }),

/***/ 3:
/*!***********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fabout&absolutePagePath=%2FUsers%2Fphamtien%2FWork%2FNimbus%2Fblog%2Fpages%2Fabout.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fabout&absolutePagePath=%2FUsers%2Fphamtien%2FWork%2FNimbus%2Fblog%2Fpages%2Fabout.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Fphamtien%2FWork%2FNimbus%2Fblog%2Fpages%2Fabout.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=about.js.map