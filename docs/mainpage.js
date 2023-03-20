/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 215:
/***/ (() => {

var prevScrollpos = window.pageYOffset;
var navbarHeight = document.querySelector('.S_NavBar').offsetHeight;
console.log(navbarHeight);

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.S_NavBar').style.top = '0';
  } else {
    document.querySelector('.S_NavBar').style.top = '-' + navbarHeight + 'px';
  }

  prevScrollpos = currentScrollPos;
};

document.querySelectorAll('section')[1].style.marginTop = +navbarHeight + 'px'; // document.getElementById('FirstScreen').style.marginTop = +navbarHeight + 'px'

/***/ }),

/***/ 982:
/***/ (() => {

var marginget = document.querySelector('.O_Footer');
var rails = document.querySelectorAll('.W_StylesRail');
var marginleft = window.getComputedStyle(marginget).getPropertyValue('margin-left');

for (var i = 0; i < rails.length; i++) {
  var rail = rails[i];
  var mediaphone = window.matchMedia('(min-width: 360px) and (max-width: 767px)');

  if (mediaphone.matches) {
    rail.style.width = 'calc(100vw - ' + marginleft + ')';
  } else {
    rail.style.width = '100%';
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _stylegalleryrail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(982);
/* harmony import */ var _stylegalleryrail_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylegalleryrail_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbarscroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(215);
/* harmony import */ var _navbarscroll_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbarscroll_js__WEBPACK_IMPORTED_MODULE_1__);



})();

/******/ })()
;