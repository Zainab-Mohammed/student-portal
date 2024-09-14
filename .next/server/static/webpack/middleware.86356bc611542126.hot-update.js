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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n// middleware.js\n\nfunction middleware(request) {\n    const { pathname } = request.nextUrl;\n    const token = request.cookies.get(\"token\");\n    // Check if the token exists and is valid\n    const user = token ? JSON.parse(atob(token.split(\".\")[1])) : null;\n    const user1 = JSON.parse(request.cookies.get(\"user\") || \"{}\");\n    // If user is not admin and trying to access admin pages, redirect to 404 page\n    if (pathname.startsWith(\"/Admin\") && (!user || user.role !== \"admin\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/pages/404\", request.url));\n    }\n    if (pathname.startsWith(\"/Admin\") && user1.role == \"admin\") {\n    // Allow other requests to proceed\n    // return NextResponse.redirect(new URL('/Admin', request.url));\n    }\n}\nconst config = {\n    matcher: [\n        \"/Admin/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQkFBZ0I7QUFDMkI7QUFFcEMsU0FBU0MsV0FBV0MsT0FBTztJQUNoQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRCxRQUFRRSxPQUFPO0lBQ3BDLE1BQU1DLFFBQVFILFFBQVFJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBRWxDLHlDQUF5QztJQUN6QyxNQUFNQyxPQUFPSCxRQUFRSSxLQUFLQyxLQUFLLENBQUNDLEtBQUtOLE1BQU1PLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLO0lBRTdELE1BQU1DLFFBQVFKLEtBQUtDLEtBQUssQ0FBQ1IsUUFBUUksT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVztJQUV4RCw4RUFBOEU7SUFDOUUsSUFBSUosU0FBU1csVUFBVSxDQUFDLGFBQWMsRUFBQ04sUUFBUUEsS0FBS08sSUFBSSxLQUFLLE9BQU0sR0FBSTtRQUNyRSxPQUFPZixxREFBWUEsQ0FBQ2dCLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGNBQWNmLFFBQVFnQixHQUFHO0lBQ2hFO0lBRUEsSUFBSWYsU0FBU1csVUFBVSxDQUFDLGFBQWVELE1BQU1FLElBQUksSUFBSSxTQUFVO0lBQy9ELGtDQUFrQztJQUNuQyxnRUFBZ0U7SUFDL0Q7QUFDRjtBQUVPLE1BQU1JLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUFnQjtBQUM1QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaWRkbGV3YXJlLmpzXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSByZXF1ZXN0Lm5leHRVcmw7XHJcbiAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gIFxyXG4gIC8vIENoZWNrIGlmIHRoZSB0b2tlbiBleGlzdHMgYW5kIGlzIHZhbGlkXHJcbiAgY29uc3QgdXNlciA9IHRva2VuID8gSlNPTi5wYXJzZShhdG9iKHRva2VuLnNwbGl0KCcuJylbMV0pKSA6IG51bGw7XHJcblxyXG4gIGNvbnN0IHVzZXIxID0gSlNPTi5wYXJzZShyZXF1ZXN0LmNvb2tpZXMuZ2V0KCd1c2VyJykgfHwgJ3t9Jyk7XHJcblxyXG4gIC8vIElmIHVzZXIgaXMgbm90IGFkbWluIGFuZCB0cnlpbmcgdG8gYWNjZXNzIGFkbWluIHBhZ2VzLCByZWRpcmVjdCB0byA0MDQgcGFnZVxyXG4gIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKCcvQWRtaW4nKSAmJiAoIXVzZXIgfHwgdXNlci5yb2xlICE9PSAnYWRtaW4nKSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvcGFnZXMvNDA0JywgcmVxdWVzdC51cmwpKTtcclxuICB9XHJcblxyXG4gIGlmIChwYXRobmFtZS5zdGFydHNXaXRoKCcvQWRtaW4nKSAmJiAoIHVzZXIxLnJvbGUgPT0gJ2FkbWluJykpIHtcclxuICAvLyBBbGxvdyBvdGhlciByZXF1ZXN0cyB0byBwcm9jZWVkXHJcbiAvLyByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9BZG1pbicsIHJlcXVlc3QudXJsKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFsnL0FkbWluLzpwYXRoKiddLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJwYXRobmFtZSIsIm5leHRVcmwiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwiYXRvYiIsInNwbGl0IiwidXNlcjEiLCJzdGFydHNXaXRoIiwicm9sZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});