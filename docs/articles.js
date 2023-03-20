/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 345:
/***/ (() => {

var galleries = document.getElementsByClassName('O_SliderGallery');

var _loop = function _loop(i) {
  var gallery = galleries[i];
  var sliderRail = gallery.querySelector('.W_SliderRail');
  var slideWidth = sliderRail.querySelector('.A_Slide').offsetWidth + 20;
  var slideNumber = sliderRail.querySelectorAll('.A_Slide').length - 1;
  var sliderButton = gallery.querySelector('.A_SliderButton');
  var sliderDescription = gallery.querySelector('.W_SliderDescription');
  var descriptionHeight = gallery.querySelector('.W_SliderText').offsetHeight + 20;
  var descriptionNumber = gallery.querySelectorAll('.W_SliderText').length - 1;
  var currentSlide = 0;
  var currentDescription = 0;

  function slide() {
    if (currentSlide < slideNumber) {
      currentSlide++;
      sliderRail.style.transform = 'translateX(-' + currentSlide * slideWidth + 'px)';
      currentDescription++;
      sliderDescription.style.transform = 'translateY(-' + currentDescription * descriptionHeight + 'px)';
    } else {
      currentSlide = 0;
      sliderRail.style.transform = 'translateX(0px)';
      currentDescription = 0;
      sliderDescription.style.transform = 'translateY(0px)';
    }
  }

  sliderButton.addEventListener('click', slide);
};

for (var i = 0; i < galleries.length; i++) {
  _loop(i);
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
/* harmony import */ var _titleimage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(292);
/* harmony import */ var _titleimage_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_titleimage_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gallery_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345);
/* harmony import */ var _gallery_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gallery_slider_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylegalleryrail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(982);
/* harmony import */ var _stylegalleryrail_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylegalleryrail_js__WEBPACK_IMPORTED_MODULE_3__);





})();

/******/ })()
;