/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// const astroApp = document.getElementById(\"astro-app\");\nfunction test() {\n  //     const element = document.createElement('div');\n\n  //    // Lodash, currently included via a script, is required for this line to work\n  //    // Lodash, now imported by this script\n  //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n  //     return element;\n\n  const h1 = document.createElement(\"h1\");\n  const text = document.createTextNode(\"Testing script\");\n  h1.appendChild(text);\n  // astroApp.appendChild(h1);\n\n  return h1;\n}\n\ndocument.body.appendChild(test());\n\n\n//# sourceURL=webpack://astro-starter-kit/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;