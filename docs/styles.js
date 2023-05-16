/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6401:
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/images/stylescatalog/animalism.jpg
const animalism_namespaceObject = __webpack_require__.p + "images/815cecd8709c190383ab.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/avangard.jpg
const avangard_namespaceObject = __webpack_require__.p + "images/5c0e4c4bd1554c842079.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/classic.jpg
const classic_namespaceObject = __webpack_require__.p + "images/1ca834eef7cc846af012.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/colorblock.jpg
const colorblock_namespaceObject = __webpack_require__.p + "images/dc52d54d0d85b31bc2cc.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/country.jpg
const country_namespaceObject = __webpack_require__.p + "images/d469f35bab2c6053d3c0.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/futurism.jpg
const futurism_namespaceObject = __webpack_require__.p + "images/8abd1e346cafed834d2f.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/goth.jpg
const goth_namespaceObject = __webpack_require__.p + "images/d2ac33f6e02d9a8c21a6.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/grunge.jpg
const grunge_namespaceObject = __webpack_require__.p + "images/b8a1ccb43a3352718100.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/hip-hop.jpg
const hip_hop_namespaceObject = __webpack_require__.p + "images/4aa8e086d0eb308bc323.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/lingerie.jpg
const lingerie_namespaceObject = __webpack_require__.p + "images/39437a4ca842a36fc5b0.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/minimalism.jpg
const minimalism_namespaceObject = __webpack_require__.p + "images/085ecae93da1a6ce83f7.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/preppy.jpg
const preppy_namespaceObject = __webpack_require__.p + "images/7aac22ee38bce34f12ab.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/punk.jpg
const punk_namespaceObject = __webpack_require__.p + "images/2c521f92dea2d293624b.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/street-style.jpg
const street_style_namespaceObject = __webpack_require__.p + "images/5ea33b7f5d2e1ee8b011.jpg";
;// CONCATENATED MODULE: ./src/images/stylescatalog/y2k.jpg
const y2k_namespaceObject = __webpack_require__.p + "images/a3ab39a1f2b87622a54b.jpg";
;// CONCATENATED MODULE: ./src/javascript/randomimage.js
var stylesTitleImage = document.querySelector('.S_Cover > .M_Title > .A_TitleImage > img');















var imagesStyles = [];

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function imagesInit() {
  imagesStyles.push(animalism_namespaceObject);
  imagesStyles.push(avangard_namespaceObject);
  imagesStyles.push(classic_namespaceObject);
  imagesStyles.push(colorblock_namespaceObject);
  imagesStyles.push(country_namespaceObject);
  imagesStyles.push(futurism_namespaceObject);
  imagesStyles.push(goth_namespaceObject);
  imagesStyles.push(grunge_namespaceObject);
  imagesStyles.push(hip_hop_namespaceObject);
  imagesStyles.push(lingerie_namespaceObject);
  imagesStyles.push(minimalism_namespaceObject);
  imagesStyles.push(preppy_namespaceObject);
  imagesStyles.push(punk_namespaceObject);
  imagesStyles.push(street_style_namespaceObject);
  imagesStyles.push(y2k_namespaceObject);
  var imageStyle = sample(imagesStyles);
  stylesTitleImage.src = imageStyle;
}

document.addEventListener('DOMContentLoaded', imagesInit());
// EXTERNAL MODULE: ./src/javascript/stylegalleryrail.js
var stylegalleryrail = __webpack_require__(982);
// EXTERNAL MODULE: ./src/javascript/hint.js
var hint = __webpack_require__(6401);
;// CONCATENATED MODULE: ./src/javascript/styles.js



})();

/******/ })()
;