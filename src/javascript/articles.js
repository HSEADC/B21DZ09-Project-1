import './titleimage.js'
import './gallery-slider.js'
import './stylegalleryrail.js'

import anime from 'animejs/lib/anime.es.js'

// Wrap every letter in a span
let textWrapper = document.querySelector(
  '.S_Cover > .M_Title > .W_TitleText > .anim'
)
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='anim'>$&</span>"
// )

anime.timeline({ loop: false }).add({
  targets: '.S_Cover > .M_Title > .W_TitleText > .anim',
  translateY: ['4em', 0],
  translateX: ['1em', 0],
  translateZ: 0,
  rotateZ: [70, 0],
  duration: 700,
  easing: 'easeOutExpo',
  delay: (el, i) => 50 * i
})
