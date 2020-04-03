webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./utils/page-list.js":
/*!****************************!*\
  !*** ./utils/page-list.js ***!
  \****************************/
/*! exports provided: pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatters */ "./utils/formatters.js");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // _app.js and _document.js are next.js specific files, and should be ignored
// the blog directory is ignored here, but is processed in post-list.js

var ignoreList = ["_app.js", "_document.js", "blog"];

var pageFileNames = function pageFileNames() {
  var allPageFileNames = ["_app.js", "_document.js", "about.js", "blog", "blog.js", "index.mdx", "search.js"] || false;
  var filteredFileNames = allPageFileNames.filter(function (name) {
    return !name || !ignoreList.includes(name);
  });
  return Promise.resolve(filteredFileNames);
};

var createPageList = function createPageList(fileNameList) {
  return fileNameList.reduce(function (collection, name) {
    // These are properties we want to extract from the file's meta export.
    // This data is returned is added to the `collection` array below.
    var _require = __webpack_require__("./pages sync recursive ^\\.\\/.*$")("./".concat(name)),
        Component = _require.default;

    var _require$meta = __webpack_require__("./pages sync recursive ^\\.\\/.*$")("./".concat(name)).meta,
        title = _require$meta.title,
        tags = _require$meta.tags,
        layout = _require$meta.layout,
        publishDate = _require$meta.publishDate,
        modifiedDate = _require$meta.modifiedDate,
        seoDescription = _require$meta.seoDescription,
        _require$meta$hidePro = _require$meta.hideProgressBar,
        hideProgressBar = _require$meta$hidePro === void 0 ? false : _require$meta$hidePro,
        moreMeta = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_require$meta, ["title", "tags", "layout", "publishDate", "modifiedDate", "seoDescription", "hideProgressBar"]); // remove the extension from the file name to make a component name string


    var cleaned_name = name.split(".")[0]; // format dates for SEO, but preserve publishDate as the latter is
    // displayed on the blog post. Currently not displaying modifiedDate, but
    // preserving it for possible future use.

    var formattedPublishDate = Object(_formatters__WEBPACK_IMPORTED_MODULE_2__["formatSEODate"])(publishDate);
    var formattedModifiedDate = Object(_formatters__WEBPACK_IMPORTED_MODULE_2__["formatSEODate"])(modifiedDate, true); // This is used to sort pages/posts

    var secondsSinceEpoch = Object(_formatters__WEBPACK_IMPORTED_MODULE_2__["getSecondsSinceEpoch"])(formattedPublishDate); // data that is returned for each page

    collection.push(_objectSpread({
      Component: Component,
      title: title,
      tags: tags,
      layout: layout,
      publishDate: publishDate,
      formattedPublishDate: formattedPublishDate,
      modifiedDate: modifiedDate,
      formattedModifiedDate: formattedModifiedDate,
      seoDescription: seoDescription,
      urlPath: "/".concat(cleaned_name === "index" ? "" : cleaned_name),
      canonicalUrl: "".concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_3__["config"].baseUrl, "/").concat(cleaned_name === "index" ? "" : cleaned_name),
      hideProgressBar: hideProgressBar,
      name: cleaned_name,
      type: "page",
      secondsSinceEpoch: secondsSinceEpoch
    }, moreMeta));
    return collection;
  }, []);
};

function pages() {
  return pageFileNames().then(function (fileNameList) {
    var pageList = createPageList(fileNameList);
    var sortedList = pageList.sort(function (a, b) {
      return a.secondsSinceEpoch - b.secondsSinceEpoch;
    }).reverse();
    return sortedList;
  }).catch(function (error) {
    return console.log("Error creating pageList", error);
  });
}

/***/ }),

/***/ "./utils/post-list.js":
/*!****************************!*\
  !*** ./utils/post-list.js ***!
  \****************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatters */ "./utils/formatters.js");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.yml */ "./config/config.yml");
/* harmony import */ var _config_config_yml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config_yml__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var postFileNames = function postFileNames() {
  var postFileNames = ["post-four-link-on-twitter.mdx", "post-one-code-block-demo.mdx", "post-three-smooth-scroll-and-reading-progress-bar.mdx", "post-two-image-demo.mdx"] || false;
  return Promise.resolve(postFileNames);
};

var createPostList = function createPostList(fileNameList) {
  return fileNameList.reduce(function (collection, name) {
    // These are properties we want to extract from the file's meta export.
    // This data is returned is added to the `collection` array below.
    var _require = __webpack_require__("./pages/blog sync recursive ^\\.\\/.*$")("./".concat(name)),
        Component = _require.default;

    var _require$meta = __webpack_require__("./pages/blog sync recursive ^\\.\\/.*$")("./".concat(name)).meta,
        title = _require$meta.title,
        tags = _require$meta.tags,
        layout = _require$meta.layout,
        publishDate = _require$meta.publishDate,
        modifiedDate = _require$meta.modifiedDate,
        seoDescription = _require$meta.seoDescription,
        _require$meta$hidePro = _require$meta.hideProgressBar,
        hideProgressBar = _require$meta$hidePro === void 0 ? false : _require$meta$hidePro,
        _require$meta$exclude = _require$meta.exclude,
        exclude = _require$meta$exclude === void 0 ? false : _require$meta$exclude,
        moreMeta = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_require$meta, ["title", "tags", "layout", "publishDate", "modifiedDate", "seoDescription", "hideProgressBar", "exclude"]);

    if (exclude) return collection; // remove the extension from the file name to make a component name string

    var cleaned_name = name.split(".")[0]; // format dates for SEO, but preserve publishDate as the latter is
    // displayed on the blog post. Currently not displaying modifiedDate, but
    // preserving it for possible future use.

    var formattedPublishDate = Object(_formatters__WEBPACK_IMPORTED_MODULE_2__["formatSEODate"])(publishDate);
    var formattedModifiedDate = Object(_formatters__WEBPACK_IMPORTED_MODULE_2__["formatSEODate"])(modifiedDate, true); // This is used to sort pages/posts

    var secondsSinceEpoch = Object(_formatters__WEBPACK_IMPORTED_MODULE_2__["getSecondsSinceEpoch"])(formattedPublishDate); // data that is returned for each page

    collection.push(_objectSpread({
      Component: Component,
      title: title,
      tags: tags,
      layout: layout,
      publishDate: publishDate,
      formattedPublishDate: formattedPublishDate,
      modifiedDate: modifiedDate,
      formattedModifiedDate: formattedModifiedDate,
      seoDescription: seoDescription,
      exclude: exclude,
      urlPath: "/".concat(cleaned_name),
      fullUrlPath: "/blog/".concat(cleaned_name),
      canonicalUrl: "".concat(_config_config_yml__WEBPACK_IMPORTED_MODULE_3__["config"].baseUrl, "/").concat(cleaned_name),
      hideProgressBar: hideProgressBar,
      name: cleaned_name,
      type: "post",
      secondsSinceEpoch: secondsSinceEpoch
    }, moreMeta));
    return collection;
  }, []);
};

function posts() {
  return postFileNames().then(function (fileNameList) {
    var postList = createPostList(fileNameList);
    var sortedList = postList.sort(function (a, b) {
      return a.secondsSinceEpoch - b.secondsSinceEpoch;
    }).reverse();
    return sortedList;
  }).catch(function (error) {
    return console.log("Error creating postList", error);
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.61aa99da2847adb2ab6c.hot-update.js.map