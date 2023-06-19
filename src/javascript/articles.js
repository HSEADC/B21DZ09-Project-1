// import './titleimage.js'
import './gallery-slider.js'
import './stylegalleryrail.js'
import './articletext.js'
import './recommendations.jsx'
import './recommendations-search.js'

import anime from 'animejs/lib/anime.es.js'

let textWrapper = document.querySelector(
  '.S_Cover > .M_Title > .W_TitleText > .anim'
)

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
