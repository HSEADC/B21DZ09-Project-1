/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 655:
/***/ (() => {

var gallery = document.querySelector('.S_Gallery');
var antitrends = gallery.querySelectorAll('.M_Antitrend');
var background = document.querySelector('.Q_BackgroundBlur');
var options = document.querySelectorAll('.W_AntitrendOption');

function galleryInit() {
  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    searchInit(option);
  }
}

function searchInit(option) {
  var antitrend = option.querySelector('.M_Antitrend');

  function search() {
    antitrend.classList.toggle('active');
    antitrend.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end'
    });
    background.classList.toggle('active');
  }

  option.addEventListener('click', search);
}

document.addEventListener('DOMContentLoaded', galleryInit());

/***/ }),

/***/ 794:
/***/ (() => {

var scrollContainer = document.querySelector('.O_ScrollAntitrends');
var marginget = document.querySelector('.O_NavBar');
var marginleft = parseInt(window.getComputedStyle(marginget).getPropertyValue('margin-left'));

function paddingsInit() {
  document.querySelector('.S_Scroll > .A_PageDescription').style.marginLeft = +marginleft + 'px';
  document.querySelector('.C_AntitrendsRail').style.paddingRight = +marginleft + 'px';
  document.querySelector('.C_AntitrendsRail').style.paddingLeft = +marginleft + 'px';
}

function scrollInit() {
  function horizontalScroll(e) {
    e.preventDefault();
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    scrollContainer.scrollLeft -= delta * 30;
  }

  if (scrollContainer.addEventListener) {
    scrollContainer.addEventListener('mousewheel', horizontalScroll, false);
    scrollContainer.addEventListener('DOMMouseScroll', horizontalScroll, false);
  } else {
    scrollContainer.attachEvent('onmousewheel', horizontalScroll);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  paddingsInit(), scrollInit();
});

/***/ }),

/***/ 534:
/***/ (() => {

var sectionScroll = document.querySelector('.S_Scroll');
var sectionGallery = document.querySelector('.S_Gallery');
var runningLineOne = document.querySelector('.M_RunningLine');
var mediaphone = window.matchMedia('(min-width: 768px) and (max-width: 3000px)');
var navbarHeight = document.querySelector('.S_NavBar').offsetHeight;
var gallery = document.getElementById('gallery');
var scroll = document.getElementById('scroll');
var toggleSwitch = document.querySelector('.M_ToggleSwitch');

function toggleSwitchInit() {
  sectionGallery.style.marginTop = +navbarHeight + 'px';
  gallery.addEventListener('click', function () {
    toggleSwitch.classList.add('off'), sectionGallery.classList.add('active'), sectionScroll.classList.remove('active');
  });
  scroll.addEventListener('click', function () {
    toggleSwitch.classList.remove('off');
    sectionScroll.classList.add('active'), sectionGallery.classList.remove('active');
  });
}

function runningLinesInit() {
  if (mediaphone.matches) {
    runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  runningLinesInit(), toggleSwitchInit();
}); // const toggleSwitch = document.querySelector('.M_ToggleSwitch')
// const toggleSwitchOption = document.querySelectorAll('.A_ToggleSwitchOption')
// const scrollOption = document.querySelectorAll('.A_ToggleSwitchOption')[0]
// const galleryOption = document.querySelectorAll('.A_ToggleSwitchOption')[1]
// const sectionScroll = document.querySelector('.S_Scroll')
// const sectionGallery = document.querySelector('.S_Gallery')
//
// for (let i = 0; i < toggleSwitchOption.length; i++) {
//   toggleSwitch.addEventListener('click', (e) => {
//     toggleSwitchOption[i].classList.toggle('active')
//
//     if (scrollOption.classList.contains('active')) {
//       sectionScroll.classList.add('active'),
//         sectionGallery.classList.remove('active')
//     } else {
//       sectionGallery.classList.add('active'),
//         sectionScroll.classList.remove('active')
//     }
//   })
// }
//
// const runningLineOne = document.querySelector('.M_RunningLine')
//
// const mediaphone = window.matchMedia(
//   '(min-width: 768px) and (max-width: 3000px)'
// )
//
// if (mediaphone.matches) {
//   runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML
// }

/***/ }),

/***/ 292:
/***/ (() => {

var titleImages = document.querySelectorAll('.A_TitleImage');

function imagesInit() {
  for (var i = 0; i < titleImages.length; i++) {
    var titleImage = titleImages[i];
    imagesAnimation(titleImage);
  }
}

function imagesAnimation(titleImage) {
  var titleImageContent = titleImage.querySelector('img');
  var imageHeight = titleImage.offsetHeight;
  var heightGet = titleImage.parentElement; // const heightImg = parseInt(
  //   window.getComputedStyle(heightGet).getPropertyValue('height')
  // )
  //

  var heightImg = titleImage.offsetHeight;
  titleImage.addEventListener('mouseenter', function () {
    titleImageContent.style.objectPosition = '0px -' + heightImg + 'px';
    console.log(heightImg);
  });
  titleImage.addEventListener('mouseleave', function () {
    titleImageContent.style.objectPosition = '0px 0px';
  });
}

document.addEventListener('DOMContentLoaded', imagesInit()); // const titleImages = document.querySelectorAll('.A_TitleImage')
//
// for (let i = 0; i < titleImages.length; i++) {
//   const titleImage = titleImages[i]
//   const titleImageContent = titleImage.querySelector('img')
//   const imageHeight = titleImageContent.height
// }
//
// function imageAnimation(titleImage) {
//   titleImage.addEventListener('mouseenter', () => {
//     titleImageContent.style.objectPosition = '0px -' + imageHeight + 'px'
//   })
//
//   titleImage.addEventListener('mouseleave', () => {
//     titleImageContent.style.objectPosition = '0px 0px'
//   })
// }

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
/* harmony import */ var _antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(534);
/* harmony import */ var _antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var _antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(794);
/* harmony import */ var _antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _titleimage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(292);
/* harmony import */ var _titleimage_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_titleimage_js__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;