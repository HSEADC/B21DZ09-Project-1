/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 890:
/***/ (() => {

var mediaphone = window.matchMedia('(min-width: 360px) and (max-width: 767px)');
var names = document.querySelectorAll('.M_InfluencerName');

function namesInit() {
  if (mediaphone.matches) {
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      nameInit(name);
    }
  }
}

function nameInit(name) {
  var nameParent = name.parentElement;
  var fixedImage = nameParent.querySelector('.A_FixedImage > .Q_Image > img');
  var id = name.id;
  var nameText = name.querySelector('.A_InfluencerName');
  document.addEventListener('scroll', function () {
    var coordinate = name.getBoundingClientRect().top;

    if (coordinate > 272 && coordinate < 394) {
      displayName(id, fixedImage);
    } else {
      nameText.style.color = 'var(--white)';
    }
  });
}

function displayName(id, fixedImage) {
  var name = document.getElementById(id);
  var nameText = name.querySelector('.A_InfluencerName');
  nameText.style.color = 'var(--green)';
  var imgSrcDiv = name.querySelector('.Q_Image > img');
  var imgSrc = imgSrcDiv.src;
  fixedImage.src = imgSrc;
}

document.addEventListener('DOMContentLoaded', namesInit());

/***/ }),

/***/ 530:
/***/ (() => {

var sectionInfluencers = document.querySelector('.S_Influencers');
var sectionMovies = document.querySelector('.S_Movies');
var runningLineOne = document.querySelector('.M_RunningLine');
var runningLineTwo = document.querySelector('.M_RunningLineTwo');
var mediaphone = window.matchMedia('(min-width: 768px) and (max-width: 5000px)');
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

function imagesInit() {
  var runningLineImages = document.querySelectorAll('.A_RunningLineImage > .Q_Image');

  for (var i = 0; i < runningLineImages.length; i++) {
    var runningLineImage = runningLineImages[i];
    imagesAnimation(runningLineImage);
  }
}

function imagesAnimation(runningLineImage) {
  var runningLineImageContent = runningLineImage.querySelector('img');
  runningLineImage.addEventListener('mouseenter', function () {
    var imageHeight = runningLineImage.offsetHeight;
    runningLineImageContent.style.objectPosition = 'center -' + imageHeight + 'px';
  });
  runningLineImage.addEventListener('mouseleave', function () {
    runningLineImageContent.style.objectPosition = 'center';
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

;// CONCATENATED MODULE: ./src/images/influencers/mainpage/billieeilish1.jpg
const billieeilish1_namespaceObject = __webpack_require__.p + "images/c5c06f5e502d4d151660.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/freddymercury1.jpg
const freddymercury1_namespaceObject = __webpack_require__.p + "images/c5eada7c5096ec45283f.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/harrystyles2.jpg
const harrystyles2_namespaceObject = __webpack_require__.p + "images/7d99566ab641ed3156de.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/jen1.jpg
const jen1_namespaceObject = __webpack_require__.p + "images/f49da440ccb746a61ec3.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/kanye1.jpg
const kanye1_namespaceObject = __webpack_require__.p + "images/176531b7eeb4a3ef0ed3.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/ladygaga1.jpg
const ladygaga1_namespaceObject = __webpack_require__.p + "images/f88a5024a667c1956bab.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/rihanna1.jpg
const rihanna1_namespaceObject = __webpack_require__.p + "images/1858eca8f12c4304be90.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/timotheechalamet1.jpg
const timotheechalamet1_namespaceObject = __webpack_require__.p + "images/091bbb5bbbf351ba023a.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/zendaya1.jpg
const zendaya1_namespaceObject = __webpack_require__.p + "images/af470a7f7804b6a10a2d.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/lilnasx1.png
const lilnasx1_namespaceObject = __webpack_require__.p + "images/5926477db4ce1d6d6e33.png";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/devilwearsprada1.jpg
const devilwearsprada1_namespaceObject = __webpack_require__.p + "images/df57fd6b9ac8155bb842.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/euphoria3.jpg
const euphoria3_namespaceObject = __webpack_require__.p + "images/91f23ab9b95e08b0a7c2.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/sexeducation3.jpg
const sexeducation3_namespaceObject = __webpack_require__.p + "images/1567f0886c063cf3440f.jpg";
;// CONCATENATED MODULE: ./src/images/influencers/mainpage/sexandthecity3.jpg
const sexandthecity3_namespaceObject = __webpack_require__.p + "images/b5f46fe0bc78ae82ff5a.jpg";
;// CONCATENATED MODULE: ./src/javascript/randomimageinfluencers.js
var influencersTitleImage = document.querySelector('.S_Influencers > .O_RunningLine > .A_RunningLineImage > .Q_Image > img');
var moviesTitleImage = document.querySelector('.S_Movies > .O_RunningLine > .A_RunningLineImage > .Q_Image > img');














var imagesInfluencers = [];
var imagesMovies = [];

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function imagesInit() {
  imagesInfluencers.push(billieeilish1_namespaceObject);
  imagesInfluencers.push(freddymercury1_namespaceObject);
  imagesInfluencers.push(harrystyles2_namespaceObject);
  imagesInfluencers.push(jen1_namespaceObject);
  imagesInfluencers.push(kanye1_namespaceObject);
  imagesInfluencers.push(ladygaga1_namespaceObject);
  imagesInfluencers.push(rihanna1_namespaceObject);
  imagesInfluencers.push(timotheechalamet1_namespaceObject);
  imagesInfluencers.push(zendaya1_namespaceObject);
  imagesInfluencers.push(lilnasx1_namespaceObject);
  imagesMovies.push(devilwearsprada1_namespaceObject);
  imagesMovies.push(euphoria3_namespaceObject);
  imagesMovies.push(sexeducation3_namespaceObject);
  imagesMovies.push(sexandthecity3_namespaceObject);
  var imageInfluencer = sample(imagesInfluencers);
  influencersTitleImage.src = imageInfluencer;
  var imageMovie = sample(imagesMovies);
  moviesTitleImage.src = imageMovie;
}

document.addEventListener('DOMContentLoaded', imagesInit());
// EXTERNAL MODULE: ./src/javascript/influencerstoggle.js
var influencerstoggle = __webpack_require__(530);
// EXTERNAL MODULE: ./src/javascript/runninglineimage.js
var runninglineimage = __webpack_require__(657);
// EXTERNAL MODULE: ./src/javascript/influencersmobilescroll.js
var influencersmobilescroll = __webpack_require__(890);
;// CONCATENATED MODULE: ./src/javascript/influencers.js




})();

/******/ })()
;