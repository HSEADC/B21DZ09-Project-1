import './index.css'
import './javascript/sport-chic.js'

import $ from 'jquery'
import anime from 'animejs/lib/anime.es.js'

window.jQuery = window.$ = $
// Wrap every letter in a span
var textWrapper = document.querySelector('.cover .grid .name .letter')
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
)

anime.timeline({ loop: false }).add({
  targets: '.cover .grid .name .letter',
  translateY: ['10em', 0],
  translateX: ['0.55em', 0],
  translateZ: 0,
  rotateZ: [90, 0],
  duration: 750,
  easing: 'easeOutExpo',
  delay: (el, i) => 50 * i
})
