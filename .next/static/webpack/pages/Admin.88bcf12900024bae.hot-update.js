"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Admin",{

/***/ "./hoc/withAdminAuth.js":
/*!******************************!*\
  !*** ./hoc/withAdminAuth.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst withAdminAuth = (WrappedComponent)=>{\n    var _s = $RefreshSig$();\n    return _s(function AdminProtected(props) {\n        _s();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            const userRole = localStorage.getItem(\"role\");\n            const user = localStorage.getItem(\"user\");\n            if (!user) {\n                router.replace(\"/404\");\n            }\n            if (userRole !== \"admin\") {\n                router.replace(\"/404\");\n            }\n        }, [\n            router\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, {\n            ...props\n        }, void 0, false, {\n            fileName: \"G:\\\\New folder\\\\student-portal\\\\hoc\\\\withAdminAuth.js\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this);\n    }, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n        ];\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (withAdminAuth);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob2Mvd2l0aEFkbWluQXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNNO0FBRXhDLE1BQU1FLGdCQUFnQixDQUFDQzs7SUFDckIsVUFBTyxTQUFTQyxlQUFlQyxLQUFLOztRQUNsQyxNQUFNQyxTQUFTTCxzREFBU0E7UUFFeEJELGdEQUFTQSxDQUFDO1lBQ1IsTUFBTU8sV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1lBQ3RDLE1BQU1DLE9BQU9GLGFBQWFDLE9BQU8sQ0FBQztZQUVsQyxJQUFHLENBQUNDLE1BQ0Y7Z0JBQ0lKLE9BQU9LLE9BQU8sQ0FBQztZQUNuQjtZQUNGLElBQUlKLGFBQWEsU0FBUztnQkFDeEJELE9BQU9LLE9BQU8sQ0FBQztZQUNqQjtRQUNGLEdBQUc7WUFBQ0w7U0FBTztRQUVYLHFCQUFPLDhEQUFDSDtZQUFrQixHQUFHRSxLQUFLOzs7Ozs7SUFDcEM7O1lBaEJpQkosa0RBQVNBOzs7QUFpQjVCO0FBRUEsK0RBQWVDLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9jL3dpdGhBZG1pbkF1dGguanM/MGNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IHdpdGhBZG1pbkF1dGggPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG4gIHJldHVybiBmdW5jdGlvbiBBZG1pblByb3RlY3RlZChwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgdXNlclJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScpOyBcclxuICAgICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7IFxyXG5cclxuICAgICAgaWYoIXVzZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLzQwNCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgaWYgKHVzZXJSb2xlICE9PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy80MDQnKTsgXHJcbiAgICAgIH1cclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFkbWluQXV0aDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIndpdGhBZG1pbkF1dGgiLCJXcmFwcGVkQ29tcG9uZW50IiwiQWRtaW5Qcm90ZWN0ZWQiLCJwcm9wcyIsInJvdXRlciIsInVzZXJSb2xlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hoc/withAdminAuth.js\n"));

/***/ })

});