webpackHotUpdate("static/development/pages/[slug].js",{

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/HeaderComponent */ "./components/header/HeaderComponent.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var _components_list_blog_ListBlogsComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/list-blog/ListBlogsComponent */ "./components/list-blog/ListBlogsComponent.js");
/* harmony import */ var _components_highlight_HighlightComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/highlight/HighlightComponent */ "./components/highlight/HighlightComponent.js");
var _this = undefined,
    _jsxFileName = "/Users/phamtien/Work/Nimbus/blog/pages/[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Slug = function Slug(_ref) {
  var categories = _ref.categories,
      highlights = _ref.highlights,
      type = _ref.type,
      dataPage = _ref.dataPage;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Nimbus Service"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_header_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: categories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "ui grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "left floated eleven wide column",
    style: {
      padding: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, type === _utils_constants__WEBPACK_IMPORTED_MODULE_6__["SLUG_TYPE"].CATEGORY && __jsx(_components_list_blog_ListBlogsComponent__WEBPACK_IMPORTED_MODULE_7__["ListBlogComponent"], {
    data: dataPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), type === _utils_constants__WEBPACK_IMPORTED_MODULE_6__["SLUG_TYPE"].BLOG && __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, "BLOG DETAILS")), __jsx(_components_highlight_HighlightComponent__WEBPACK_IMPORTED_MODULE_8__["HighlightComponent"], {
    data: highlights,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }))));
}; // export async function getStaticProps({ params }) {
//   const resCategories = await api.getCategories();
//   const categories = resCategories.data.data;
//   const resSlug = await api.getSlug(params.slug);
//   const slug = resSlug.data.data;
//   console.log("====================================");
//   console.log(slug.highlights);
//   console.log("====================================");
//   const highlights = slug.highlights;
//   const type = slug.type;
//   let dataPage = null;
//   if (type === SLUG_TYPE.CATEGORY) {
//     dataPage = {
//       category: slug.category,
//       blogs: slug.blogs,
//     };
//   }
//   if (type === SLUG_TYPE.BLOG) {
//     dataPage = {
//       blog: slug.blog,
//     };
//   }
//   return {
//     props: { categories, highlights, type, dataPage },
//   };
// }


// export async function getStaticPaths() {
//   const resCategories = await api.getCategories();
//   const categories = resCategories.data.data;
//   return {
//     paths: categories.map((category) => {
//       return {
//         params: {
//           slug: category.slug,
//         },
//       };
//     }),
//     fallback: true,
//   };
// }
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Slug);

/***/ })

})
//# sourceMappingURL=[slug].js.c65d1d7ae65c1ec497a7.hot-update.js.map