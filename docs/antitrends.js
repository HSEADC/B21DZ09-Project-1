/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1655:
/***/ (() => {

var gallery = document.querySelector('.S_Gallery');
var antitrends = gallery.querySelectorAll('.M_Antitrend');
var background = document.querySelector('.Q_BackgroundBlur');
var options = document.querySelectorAll('.W_AntitrendOption');
var marginget = document.querySelector('.O_Footer');
var marginleft = parseInt(window.getComputedStyle(marginget).getPropertyValue('margin-left'));

function galleryInit() {
  var _loop = function _loop(i) {
    var option = options[i];
    option.addEventListener('click', function () {
      return search(option);
    });
  };

  for (var i = 0; i < options.length; i++) {
    _loop(i);
  }

  background.style.marginLeft = '-' + marginleft + 'px';
}

function search(option) {
  var antitrend = option.querySelector('.M_Antitrend');
  antitrend.classList.toggle('active');
  antitrend.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'end'
  });
  background.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', galleryInit());

/***/ }),

/***/ 7794:
/***/ (() => {

var scrollContainer = document.querySelector('.O_ScrollAntitrends'); // const scrollTopButton = document.querySelector('.A_ScrollToTop')

var sliderButton = document.querySelector('.O_ScrollAntitrends .M_ButtonSurvey');
var sliderRail = document.querySelector('.C_AntitrendsRail');
var marginget = document.querySelector('.O_NavBar');
var marginleft = parseInt(window.getComputedStyle(marginget).getPropertyValue('margin-left'));
var mediaphone = window.matchMedia('(min-width: 360px) and (max-width: 767px)');

function paddingsInit() {
  document.querySelector('.S_Scroll > .A_PageDescription').style.marginLeft = +marginleft + 'px';
  sliderRail.style.paddingRight = +marginleft + 'px';
  sliderRail.style.paddingLeft = +marginleft + 'px';
  sliderRail.style.gap = +marginleft / 2 + 'px';

  if (mediaphone.matches) {
    sliderRail.style.gap = +marginleft + 'px';
  } //
  // scrollTopButton.style.right = +marginleft + 'px'


  sliderButton.style.left = +marginleft + 'px';
}

function slide() {
  var n = 0;
  var slides = sliderRail.querySelectorAll('.M_Antitrend');
  var sliderLength = slides.length;
  var width = 0;

  if (mediaphone.matches) {
    width = parseInt(window.getComputedStyle(slides[0]).getPropertyValue('width')) + marginleft;
  } else {
    width = parseInt(window.getComputedStyle(slides[0]).getPropertyValue('width')) + marginleft / 2;
  }

  if (n == 0) {
    sliderRail.style.left = '0 px';
  }

  sliderButton.addEventListener('click', function () {
    console.log(width);
    console.log(marginleft);
    n++;

    if (n < sliderLength && n == 1) {
      sliderRail.style.left = '-' + width + 'px';
    }

    if (n < sliderLength && n != 1) {
      sliderRail.style.left = '-' + width * n + 'px';
    }

    if (n == sliderLength - 1) {
      n = -1;
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  paddingsInit(), slide();
}); // function scrollTopButtonInit() {
//   scrollTopButton.addEventListener('click', () => {
//     window.scrollTo(0, 0)
//     console.log('click')
//   })
// }
// function scrollInit() {
//   function horizontalScroll(e) {
//     e.preventDefault()
//     e = window.event || e
//     let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
//     scrollContainer.scrollLeft -= delta * 30
//   }
//   if (scrollContainer.addEventListener) {
//     scrollContainer.addEventListener('mousewheel', horizontalScroll, false)
//     scrollContainer.addEventListener('DOMMouseScroll', horizontalScroll, false)
//   } else {
//     scrollContainer.attachEvent('onmousewheel', horizontalScroll)
//   }
// }

/***/ }),

/***/ 6534:
/***/ (() => {

var sectionScroll = document.querySelector('.S_Scroll');
var sectionGallery = document.querySelector('.S_Gallery');
var runningLineOne = document.querySelector('.M_RunningLine');
var mediaphone = window.matchMedia('(min-width: 768px) and (max-width: 5000px)');
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
/* harmony import */ var _antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6534);
/* harmony import */ var _antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1655);
/* harmony import */ var _antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7794);
/* harmony import */ var _antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;