/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 530:
/***/ (() => {

var sectionInfluencers = document.querySelector('.S_Influencers');
var sectionMovies = document.querySelector('.S_Movies');
var runningLineOne = document.querySelector('.M_RunningLine');
var runningLineTwo = document.querySelector('.M_RunningLineTwo');
var mediaphone = window.matchMedia('(min-width: 768px) and (max-width: 3000px)');
var navbarHeight = document.querySelector('.S_NavBar').offsetHeight;
var movie = document.getElementById('movie');
var influencer = document.getElementById('influencer');
var toggleSwitch = document.querySelector('.M_ToggleSwitch');

function toggleSwitchInit() {
  sectionMovies.style.marginTop = +navbarHeight + 'px';
  movie.addEventListener('click', function () {
    toggleSwitch.classList.add('off'), sectionMovies.classList.add('active'), sectionInfluencers.classList.remove('active');
  });
  influencer.addEventListener('click', function () {
    toggleSwitch.classList.remove('off');
    sectionInfluencers.classList.add('active'), sectionMovies.classList.remove('active');
  });
}

function runningLinesInit() {
  if (mediaphone.matches) {
    runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML;
    runningLineTwo.innerHTML = runningLineTwo.innerHTML + runningLineTwo.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  runningLinesInit(), toggleSwitchInit();
}); // const toggleSwitch = document.querySelector('.M_ToggleSwitch')
// const toggleSwitchOption = document.querySelectorAll('.A_ToggleSwitchOption')
// const influencerOption = document.querySelectorAll('.A_ToggleSwitchOption')[0]
// const movieOption = document.querySelectorAll('.A_ToggleSwitchOption')[1]
// const sectionInfluencers = document.querySelector('.S_Influencers')
// const sectionMovies = document.querySelector('.S_Movies')
//
// for (let i = 0; i < toggleSwitchOption.length; i++) {
//   toggleSwitch.addEventListener('click', (e) => {
//     toggleSwitchOption[i].classList.toggle('active')
//
//     if (influencerOption.classList.contains('active')) {
//       sectionInfluencers.classList.add('active'),
//         sectionMovies.classList.remove('active')
//     } else {
//       sectionMovies.classList.add('active'),
//         sectionInfluencers.classList.remove('active')
//     }
//   })
// }
//
// const runningLineOne = document.querySelector('.M_RunningLine')
// const runningLineTwo = document.querySelector('.M_RunningLineTwo')
//
// const mediaphone = window.matchMedia(
//   '(min-width: 768px) and (max-width: 3000px)'
// )
//
// if (mediaphone.matches) {
//   runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML
//   runningLineTwo.innerHTML = runningLineTwo.innerHTML + runningLineTwo.innerHTML
// }

/***/ }),

/***/ 657:
/***/ (() => {

var runningLineImages = document.querySelectorAll('.A_RunningLineImage > .Q_Image');

function imagesInit() {
  for (var i = 0; i < runningLineImages.length; i++) {
    var runningLineImage = runningLineImages[i];
    imagesAnimation(runningLineImage);
  }
}

function imagesAnimation(runningLineImage) {
  var runningLineImageContent = runningLineImage.querySelector('img');
  var imageHeight = runningLineImage.offsetHeight;
  var heightGet = runningLineImage.parentElement; // const heightImg = parseInt(
  //   window.getComputedStyle(heightGet).getPropertyValue('height')
  // )

  var heightImg = heightGet.clientHeight;
  runningLineImage.addEventListener('mouseenter', function () {
    runningLineImageContent.style.objectPosition = '0px -' + imageHeight + 'px';
    console.log(heightImg);
  });
  runningLineImage.addEventListener('mouseleave', function () {
    runningLineImageContent.style.objectPosition = '0px 0px';
  });
}

document.addEventListener('DOMContentLoaded', imagesInit());

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
/* harmony import */ var _influencerstoggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _influencerstoggle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_influencerstoggle_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _runninglineimage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(657);
/* harmony import */ var _runninglineimage_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_runninglineimage_js__WEBPACK_IMPORTED_MODULE_1__);

 // import './randomimage.js'
})();

/******/ })()
;