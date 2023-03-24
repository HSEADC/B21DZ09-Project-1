import './stylegalleryrail.js'

import anime from 'animejs/lib/anime.es.js'
// window.jQuery = window.$ = $
// Wrap every letter in a span
let textWrapper = document.querySelector(
  '.S_MainPageCover > .W_MainPageCoverText > .anim'
)
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='anim'>$&</span>"
// )

anime.timeline({ loop: false }).add({
  targets: '.S_MainPageCover > .W_MainPageCoverText > .anim',
  translateY: ['5em', 0],
  translateX: ['1em', 0],
  translateZ: 0,
  rotateZ: [90, 0],
  duration: 700,
  easing: 'easeOutExpo',
  delay: (el, i) => 50 * i
})
