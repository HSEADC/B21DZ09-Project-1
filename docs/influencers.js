/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 530:
/***/ (() => {

var toggleSwitch = document.querySelector('.M_ToggleSwitch');
var toggleSwitchOption = document.querySelectorAll('.A_ToggleSwitchOption');
var influencerOption = document.querySelectorAll('.A_ToggleSwitchOption')[0];
var movieOption = document.querySelectorAll('.A_ToggleSwitchOption')[1];
var sectionInfluencers = document.querySelector('.S_Influencers');
var sectionMovies = document.querySelector('.S_Movies');

var _loop = function _loop(i) {
  toggleSwitch.addEventListener('click', function (e) {
    toggleSwitchOption[i].classList.toggle('active');

    if (influencerOption.classList.contains('active')) {
      sectionInfluencers.classList.add('active'), sectionMovies.classList.remove('active');
    } else {
      sectionMovies.classList.add('active'), sectionInfluencers.classList.remove('active');
    }
  });
};

for (var i = 0; i < toggleSwitchOption.length; i++) {
  _loop(i);
}

var runningLineOne = document.querySelector('.M_RunningLine');
var runningLineTwo = document.querySelector('.M_RunningLineTwo');
var mediaphone = window.matchMedia('(min-width: 768px) and (max-width: 3000px)');

if (mediaphone.matches) {
  runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML;
  runningLineTwo.innerHTML = runningLineTwo.innerHTML + runningLineTwo.innerHTML;
}

/***/ }),

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

/***/ 657:
/***/ (() => {

var runningLineImages = document.querySelectorAll('.A_RunningLineImage > .Q_Image');

var _loop = function _loop(i) {
  var runningLineImage = runningLineImages[i];
  var runningLineImageContent = runningLineImage.querySelector('img');
  var imageHeight = runningLineImageContent.height;
  runningLineImage.addEventListener('mouseenter', function () {
    runningLineImageContent.style.objectPosition = '0px -' + imageHeight + 'px';
  });
  runningLineImage.addEventListener('mouseleave', function () {
    runningLineImageContent.style.objectPosition = '0px 0px';
  });
};

for (var i = 0; i < runningLineImages.length; i++) {
  _loop(i);
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
/* harmony import */ var _navbarscroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _navbarscroll_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbarscroll_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _influencerstoggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _influencerstoggle_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_influencerstoggle_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _runninglineimage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(657);
/* harmony import */ var _runninglineimage_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_runninglineimage_js__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;