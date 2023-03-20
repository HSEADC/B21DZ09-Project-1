/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 655:
/***/ (() => {

var gallery = document.querySelector('.S_Gallery');
var antitrends = gallery.querySelectorAll('.M_Antitrend');
var background = document.querySelector('.Q_BackgroundBlur');
var options = document.querySelectorAll('.W_AntitrendOption'); // for (let i = 0; i < options.length; i++) {
//   const option = options[i]
//   let optionId = option.id
//
//   function search() {
//     console.log(optionId)
//   }
//
//   option.addEventListener('click', search)
// }

var _loop = function _loop(i) {
  var option = options[i];

  function search() {
    option.querySelector('.M_Antitrend').classList.toggle('active');
    option.querySelector('.M_Antitrend').scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end'
    });
    background.classList.toggle('active');
  }

  option.addEventListener('click', search);
};

for (var i = 0; i < options.length; i++) {
  _loop(i);
}

/***/ }),

/***/ 794:
/***/ (() => {

var scrollContainer = document.querySelector('.O_ScrollAntitrends');
var marginget = document.querySelector('.O_NavBar');
var marginleft = parseInt(window.getComputedStyle(marginget).getPropertyValue('margin-left'));
document.querySelector('.S_Scroll > .A_PageDescription').style.marginLeft = +marginleft + 'px';
document.querySelector('.C_AntitrendsRail').style.paddingRight = +marginleft + 'px';
document.querySelector('.C_AntitrendsRail').style.paddingLeft = +marginleft + 'px';

(function () {
  function scrollH(e) {
    e.preventDefault();
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    scrollContainer.scrollLeft -= delta * 30;
  }

  if (scrollContainer.addEventListener) {
    // IE9, Chrome, Safari, Opera
    scrollContainer.addEventListener('mousewheel', scrollH, false); // Firefox

    scrollContainer.addEventListener('DOMMouseScroll', scrollH, false);
  } else {
    // IE 6/7/8
    scrollContainer.attachEvent('onmousewheel', scrollH);
  }
})();

/***/ }),

/***/ 534:
/***/ (() => {

var toggleSwitch = document.querySelector('.M_ToggleSwitch');
var toggleSwitchOption = document.querySelectorAll('.A_ToggleSwitchOption');
var scrollOption = document.querySelectorAll('.A_ToggleSwitchOption')[0];
var galleryOption = document.querySelectorAll('.A_ToggleSwitchOption')[1];
var sectionScroll = document.querySelector('.S_Scroll');
var sectionGallery = document.querySelector('.S_Gallery');

var _loop = function _loop(i) {
  toggleSwitch.addEventListener('click', function (e) {
    toggleSwitchOption[i].classList.toggle('active');

    if (scrollOption.classList.contains('active')) {
      sectionScroll.classList.add('active'), sectionGallery.classList.remove('active');
    } else {
      sectionGallery.classList.add('active'), sectionScroll.classList.remove('active');
    }
  });
};

for (var i = 0; i < toggleSwitchOption.length; i++) {
  _loop(i);
}

var runningLineOne = document.querySelector('.M_RunningLine');
var mediaphone = window.matchMedia('(min-width: 768px) and (max-width: 3000px)');

if (mediaphone.matches) {
  runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML;
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

/***/ 292:
/***/ (() => {

var titleImages = document.querySelectorAll('.A_TitleImage');

var _loop = function _loop(i) {
  var titleImage = titleImages[i];
  var titleImageContent = titleImage.querySelector('img');
  var imageHeight = titleImageContent.height;
  titleImage.addEventListener('mouseenter', function () {
    titleImageContent.style.objectPosition = '0px -' + imageHeight + 'px';
  });
  titleImage.addEventListener('mouseleave', function () {
    titleImageContent.style.objectPosition = '0px 0px';
  });
};

for (var i = 0; i < titleImages.length; i++) {
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
/* harmony import */ var _antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(534);
/* harmony import */ var _antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_antitrendstoggle_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(655);
/* harmony import */ var _antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antitrendsgallery_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(794);
/* harmony import */ var _antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antitrendsscroll_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _titleimage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(292);
/* harmony import */ var _titleimage_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_titleimage_js__WEBPACK_IMPORTED_MODULE_4__);






})();

/******/ })()
;