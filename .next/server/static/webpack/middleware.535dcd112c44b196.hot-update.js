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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nfunction middleware(request) {\n    const url = request.nextUrl.clone();\n    const role = request.cookies.get(\"role\"); // Fetch user role from cookies\n    // Redirect to Not Found page if the user is not admin\n    if (url.pathname.startsWith(\"/Admin\") && role !== \"admin\") {\n        console.log(\"role\", role);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/404-errorpage.png\", request.url));\n    }\n    // Continue with the request if the user is admin\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n// Apply middleware to specific paths\nconst config = {\n    matcher: [\n        \"/Admin/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDRDtBQUVuQyxTQUFTRSxXQUFXQyxPQUFPO0lBQ2hDLE1BQU1DLE1BQU1ELFFBQVFFLE9BQU8sQ0FBQ0MsS0FBSztJQUNqQyxNQUFNQyxPQUFPSixRQUFRSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLCtCQUErQjtJQUV6RSxzREFBc0Q7SUFDdEQsSUFBSUwsSUFBSU0sUUFBUSxDQUFDQyxVQUFVLENBQUMsYUFBYUosU0FBUyxTQUFTO1FBQ3pESyxRQUFRQyxHQUFHLENBQUMsUUFBT047UUFDbkIsT0FBT1AscURBQVlBLENBQUNjLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLHNCQUFzQlosUUFBUUMsR0FBRztJQUN4RTtJQUVBLGlEQUFpRDtJQUNqRCxPQUFPSixxREFBWUEsQ0FBQ2dCLElBQUk7QUFDMUI7QUFFQSxxQ0FBcUM7QUFDOUIsTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQWdCO0FBQzVCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0KSB7XHJcbiAgY29uc3QgdXJsID0gcmVxdWVzdC5uZXh0VXJsLmNsb25lKCk7XHJcbiAgY29uc3Qgcm9sZSA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3JvbGUnKTsgLy8gRmV0Y2ggdXNlciByb2xlIGZyb20gY29va2llc1xyXG5cclxuICAvLyBSZWRpcmVjdCB0byBOb3QgRm91bmQgcGFnZSBpZiB0aGUgdXNlciBpcyBub3QgYWRtaW5cclxuICBpZiAodXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9BZG1pbicpICYmIHJvbGUgIT09ICdhZG1pbicpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicm9sZVwiLHJvbGUpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy80MDQtZXJyb3JwYWdlLnBuZycsIHJlcXVlc3QudXJsKSk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250aW51ZSB3aXRoIHRoZSByZXF1ZXN0IGlmIHRoZSB1c2VyIGlzIGFkbWluXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbn1cclxuXHJcbi8vIEFwcGx5IG1pZGRsZXdhcmUgdG8gc3BlY2lmaWMgcGF0aHNcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbJy9BZG1pbi86cGF0aConXSxcclxufTtcclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIk5leHRSZXF1ZXN0IiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ1cmwiLCJuZXh0VXJsIiwiY2xvbmUiLCJyb2xlIiwiY29va2llcyIsImdldCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsIlVSTCIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});