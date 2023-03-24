/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 401:
/***/ (() => {

var hints = document.getElementsByClassName('M_Hint');

function hintInit() {
  for (var i = 0; i < hints.length; i++) {
    var hint = hints[i];
    hintOpen(hint);
  }
}

function hintOpen(hint) {
  var hintButton = hint.querySelector('.Q_HintIcon');
  var hintText = hint.querySelector('.A_HintText');
  hintButton.addEventListener('click', function (e) {
    hintText.classList.toggle('hidden');
  });
}

document.addEventListener('DOMContentLoaded', hintInit());

/***/ }),

/***/ 982:
/***/ (() => {

var marginget = document.querySelector('.O_Footer');
var rails = document.querySelectorAll('.W_StylesRail');
var marginleft = window.getComputedStyle(marginget).getPropertyValue('margin-left');
var mediaphone = window.matchMedia('(min-width: 360px) and (max-width: 767px)');

function railMarginInit() {
  for (var i = 0; i < rails.length; i++) {
    var rail = rails[i];

    if (mediaphone.matches) {
      rail.style.width = 'calc(100vw - ' + marginleft + ')';
    } else {
      rail.style.width = '100%';
    }
  }
}

document.addEventListener('DOMContentLoaded', railMarginInit());

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
/* harmony import */ var _hint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var _hint_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hint_js__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;