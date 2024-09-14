"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n// middleware.js\n\nfunction middleware(request) {\n    const { pathname } = request.nextUrl;\n    const token = request.cookies.get(\"token\");\n    const [role, setRole] = useState(null);\n    const userRole = localStorage.getItem(\"role\");\n    setRole(userRole);\n    // Check if the token exists and is valid\n    const user = token ? JSON.parse(atob(token.split(\".\")[1])) : null;\n    const user1 = JSON.parse(request.cookies.get(\"user\") || \"{}\");\n    // If user is not admin and trying to access admin pages, redirect to 404 page\n    if (pathname.startsWith(\"/Admin\") && (!user || user.role !== \"admin\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/404\", request.url));\n    }\n    if (pathname.startsWith(\"/Admin\") && user1.role == \"admin\") {\n        // Allow other requests to proceed\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/Admin\", request.url));\n    }\n}\nconst config = {\n    matcher: [\n        \"/Admin/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQkFBZ0I7QUFDMkI7QUFFcEMsU0FBU0MsV0FBV0MsT0FBTztJQUNoQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRCxRQUFRRSxPQUFPO0lBQ3BDLE1BQU1DLFFBQVFILFFBQVFJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHQyxTQUFTO0lBQ2pDLE1BQU1DLFdBQVdDLGFBQWFDLE9BQU8sQ0FBQztJQUN0Q0osUUFBUUU7SUFFUix5Q0FBeUM7SUFDekMsTUFBTUcsT0FBT1QsUUFBUVUsS0FBS0MsS0FBSyxDQUFDQyxLQUFLWixNQUFNYSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSztJQUU3RCxNQUFNQyxRQUFRSixLQUFLQyxLQUFLLENBQUNkLFFBQVFJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVc7SUFFeEQsOEVBQThFO0lBQzlFLElBQUlKLFNBQVNpQixVQUFVLENBQUMsYUFBYyxFQUFDTixRQUFRQSxLQUFLTixJQUFJLEtBQUssT0FBTSxHQUFJO1FBQ3JFLE9BQU9SLHFEQUFZQSxDQUFDcUIsUUFBUSxDQUFDLElBQUlDLElBQUksUUFBUXBCLFFBQVFxQixHQUFHO0lBQzFEO0lBRUEsSUFBSXBCLFNBQVNpQixVQUFVLENBQUMsYUFBZUQsTUFBTVgsSUFBSSxJQUFJLFNBQVU7UUFDL0Qsa0NBQWtDO1FBQ2xDLE9BQU9SLHFEQUFZQSxDQUFDcUIsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVXBCLFFBQVFxQixHQUFHO0lBQzFEO0FBQ0Y7QUFFTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7S0FBZ0I7QUFDNUIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbWlkZGxld2FyZS5qc1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcmVxdWVzdC5uZXh0VXJsO1xyXG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKTtcclxuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB1c2VyUm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2xlJyk7XHJcbiAgc2V0Um9sZSh1c2VyUm9sZSk7XHJcbiAgXHJcbiAgLy8gQ2hlY2sgaWYgdGhlIHRva2VuIGV4aXN0cyBhbmQgaXMgdmFsaWRcclxuICBjb25zdCB1c2VyID0gdG9rZW4gPyBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpIDogbnVsbDtcclxuXHJcbiAgY29uc3QgdXNlcjEgPSBKU09OLnBhcnNlKHJlcXVlc3QuY29va2llcy5nZXQoJ3VzZXInKSB8fCAne30nKTtcclxuXHJcbiAgLy8gSWYgdXNlciBpcyBub3QgYWRtaW4gYW5kIHRyeWluZyB0byBhY2Nlc3MgYWRtaW4gcGFnZXMsIHJlZGlyZWN0IHRvIDQwNCBwYWdlXHJcbiAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9BZG1pbicpICYmICghdXNlciB8fCB1c2VyLnJvbGUgIT09ICdhZG1pbicpKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy80MDQnLCByZXF1ZXN0LnVybCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9BZG1pbicpICYmICggdXNlcjEucm9sZSA9PSAnYWRtaW4nKSkge1xyXG4gIC8vIEFsbG93IG90aGVyIHJlcXVlc3RzIHRvIHByb2NlZWRcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9BZG1pbicsIHJlcXVlc3QudXJsKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFsnL0FkbWluLzpwYXRoKiddLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJwYXRobmFtZSIsIm5leHRVcmwiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJyb2xlIiwic2V0Um9sZSIsInVzZVN0YXRlIiwidXNlclJvbGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImF0b2IiLCJzcGxpdCIsInVzZXIxIiwic3RhcnRzV2l0aCIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});