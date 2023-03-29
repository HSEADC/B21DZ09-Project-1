/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var menuButton = document.querySelector('.Q_NavBarBurger');
var closeButton = document.querySelector('.Q_Close');
var menu = document.querySelector('.M_Menu');
var menuContent = document.querySelector('.M_Menu > .C_NavBarCategories');
var marginget = document.querySelector('.O_Footer');
var marginleft = parseInt(window.getComputedStyle(marginget).getPropertyValue('margin-left'));
var prevScrollpos = window.pageYOffset;
var navbarHeight = document.querySelector('.S_NavBar').offsetHeight;
var mediaphone = window.matchMedia('(min-width: 360px) and (max-width: 767px)');

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.S_NavBar').style.top = '0';
  } else if (currentScrollPos < 100) {
    document.querySelector('.S_NavBar').style.top = '0';
  } else {
    document.querySelector('.S_NavBar').style.top = '-' + navbarHeight + 'px';
  }

  prevScrollpos = currentScrollPos;
};

function marginInit() {
  document.querySelectorAll('section')[1].style.marginTop = +navbarHeight + 'px';
}

function menuInit() {
  menuContent.style.paddingLeft = +marginleft + 'px';
  closeButton.style.right = +marginleft + 'px';
  menuButton.addEventListener('click', menuOpen);
  closeButton.addEventListener('click', menuClose);
}

function menuOpen() {
  menu.style.right = '-' + marginleft + 'px';
  document.body.style.overflow = 'hidden';
}

function menuClose() {
  menu.style.right = '-120vw';
  document.body.style.overflow = 'scroll';
}

document.addEventListener('DOMContentLoaded', function () {
  marginInit();

  if (mediaphone.matches) {
    menuInit();
  }
});
/******/ })()
;