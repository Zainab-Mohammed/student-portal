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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n// middleware.js\n\nfunction middleware(request) {\n    const { pathname } = request.nextUrl;\n    const token = request.cookies.get(\"token\");\n    // Check if the token exists and is valid\n    const user = token ? JSON.parse(atob(token.split(\".\")[1])) : null;\n    // If user is not admin and trying to access admin pages, redirect to 404 page\n    if (pathname.startsWith(\"/Admin\") && (!user || user.role !== \"admin\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/404\", request.url));\n    }\n    if (pathname.startsWith(\"/Admin\") && user.role == \"admin\") {\n        // Allow other requests to proceed\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/Admin\", request.url));\n    }\n}\nconst config = {\n    matcher: [\n        \"/Admin/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQkFBZ0I7QUFDMkI7QUFFcEMsU0FBU0MsV0FBV0MsT0FBTztJQUNoQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRCxRQUFRRSxPQUFPO0lBQ3BDLE1BQU1DLFFBQVFILFFBQVFJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBRWxDLHlDQUF5QztJQUN6QyxNQUFNQyxPQUFPSCxRQUFRSSxLQUFLQyxLQUFLLENBQUNDLEtBQUtOLE1BQU1PLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLO0lBRTdELDhFQUE4RTtJQUM5RSxJQUFJVCxTQUFTVSxVQUFVLENBQUMsYUFBYyxFQUFDTCxRQUFRQSxLQUFLTSxJQUFJLEtBQUssT0FBTSxHQUFJO1FBQ3JFLE9BQU9kLHFEQUFZQSxDQUFDZSxRQUFRLENBQUMsSUFBSUMsSUFBSSxRQUFRZCxRQUFRZSxHQUFHO0lBQzFEO0lBRUEsSUFBSWQsU0FBU1UsVUFBVSxDQUFDLGFBQWVMLEtBQUtNLElBQUksSUFBSSxTQUFVO1FBQzlELGtDQUFrQztRQUNsQyxPQUFPZCxxREFBWUEsQ0FBQ2UsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVWQsUUFBUWUsR0FBRztJQUMxRDtBQUNGO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQWdCO0FBQzVCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1pZGRsZXdhcmUuanNcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdCkge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJlcXVlc3QubmV4dFVybDtcclxuICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJyk7XHJcbiAgXHJcbiAgLy8gQ2hlY2sgaWYgdGhlIHRva2VuIGV4aXN0cyBhbmQgaXMgdmFsaWRcclxuICBjb25zdCB1c2VyID0gdG9rZW4gPyBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpIDogbnVsbDtcclxuXHJcbiAgLy8gSWYgdXNlciBpcyBub3QgYWRtaW4gYW5kIHRyeWluZyB0byBhY2Nlc3MgYWRtaW4gcGFnZXMsIHJlZGlyZWN0IHRvIDQwNCBwYWdlXHJcbiAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9BZG1pbicpICYmICghdXNlciB8fCB1c2VyLnJvbGUgIT09ICdhZG1pbicpKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy80MDQnLCByZXF1ZXN0LnVybCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9BZG1pbicpICYmICggdXNlci5yb2xlID09ICdhZG1pbicpKSB7XHJcbiAgLy8gQWxsb3cgb3RoZXIgcmVxdWVzdHMgdG8gcHJvY2VlZFxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL0FkbWluJywgcmVxdWVzdC51cmwpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvQWRtaW4vOnBhdGgqJ10sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsInBhdGhuYW1lIiwibmV4dFVybCIsInRva2VuIiwiY29va2llcyIsImdldCIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJhdG9iIiwic3BsaXQiLCJzdGFydHNXaXRoIiwicm9sZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});