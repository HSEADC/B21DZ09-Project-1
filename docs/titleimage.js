/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function stylesImagesInit() {
  var titleImages = document.querySelectorAll('.A_TitleImage');

  for (var i = 0; i < titleImages.length; i++) {
    var titleImage = titleImages[i];
    stylesImagesAnimation(titleImage);
  }
}

function stylesImagesAnimation(titleImage) {
  var titleImageContent = titleImage.querySelector('img');
  titleImage.addEventListener('mouseenter', function () {
    var imageHeight = titleImage.offsetHeight;
    titleImageContent.style.objectPosition = 'center -' + imageHeight + 'px';
  });
  titleImage.addEventListener('mouseleave', function () {
    titleImageContent.style.objectPosition = 'center';
  });
}

document.addEventListener('DOMContentLoaded', stylesImagesInit());
/******/ })()
;