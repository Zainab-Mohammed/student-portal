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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nfunction middleware(request) {\n    const url = request.nextUrl.clone();\n    const role = request.cookies.get(\"role\"); // Fetch user role from cookies\n    // Redirect to Not Found page if the user is not admin\n    if (url.pathname.startsWith(\"/Admin\") && role !== \"admin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/404-errorpage.png\", request.url));\n    }\n    // Continue with the request if the user is admin\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n// Apply middleware to specific paths\nconst config = {\n    matcher: [\n        \"/Admin\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDRDtBQUVuQyxTQUFTRSxXQUFXQyxPQUFPO0lBQ2hDLE1BQU1DLE1BQU1ELFFBQVFFLE9BQU8sQ0FBQ0MsS0FBSztJQUNqQyxNQUFNQyxPQUFPSixRQUFRSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLCtCQUErQjtJQUV6RSxzREFBc0Q7SUFDdEQsSUFBSUwsSUFBSU0sUUFBUSxDQUFDQyxVQUFVLENBQUMsYUFBYUosU0FBUyxTQUFTO1FBQ3pELE9BQU9QLHFEQUFZQSxDQUFDWSxRQUFRLENBQUMsSUFBSUMsSUFBSSxzQkFBc0JWLFFBQVFDLEdBQUc7SUFDeEU7SUFFQSxpREFBaUQ7SUFDakQsT0FBT0oscURBQVlBLENBQUNjLElBQUk7QUFDMUI7QUFFQSxxQ0FBcUM7QUFDOUIsTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQVM7QUFDckIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcclxuICBjb25zdCB1cmwgPSByZXF1ZXN0Lm5leHRVcmwuY2xvbmUoKTtcclxuICBjb25zdCByb2xlID0gcmVxdWVzdC5jb29raWVzLmdldCgncm9sZScpOyAvLyBGZXRjaCB1c2VyIHJvbGUgZnJvbSBjb29raWVzXHJcblxyXG4gIC8vIFJlZGlyZWN0IHRvIE5vdCBGb3VuZCBwYWdlIGlmIHRoZSB1c2VyIGlzIG5vdCBhZG1pblxyXG4gIGlmICh1cmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL0FkbWluJykgJiYgcm9sZSAhPT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvNDA0LWVycm9ycGFnZS5wbmcnLCByZXF1ZXN0LnVybCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udGludWUgd2l0aCB0aGUgcmVxdWVzdCBpZiB0aGUgdXNlciBpcyBhZG1pblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG59XHJcblxyXG4vLyBBcHBseSBtaWRkbGV3YXJlIHRvIHNwZWNpZmljIHBhdGhzXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvQWRtaW4nXSxcclxufTtcclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIk5leHRSZXF1ZXN0IiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ1cmwiLCJuZXh0VXJsIiwiY2xvbmUiLCJyb2xlIiwiY29va2llcyIsImdldCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInJlZGlyZWN0IiwiVVJMIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});