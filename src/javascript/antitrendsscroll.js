const scrollContainer = document.querySelector('.O_ScrollAntitrends')
const marginget = document.querySelector('.O_NavBar')
const marginleft = parseInt(
  window.getComputedStyle(marginget).getPropertyValue('margin-left')
)

document.querySelector('.S_Scroll > .A_PageDescription').style.marginLeft =
  +marginleft + 'px'

document.querySelector('.C_AntitrendsRail').style.paddingRight =
  +marginleft + 'px'

document.querySelector('.C_AntitrendsRail').style.paddingLeft =
  +marginleft + 'px'
;(function () {
  function scrollH(e) {
    e.preventDefault()
    e = window.event || e
    let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
    scrollContainer.scrollLeft -= delta * 40
  }
  if (scrollContainer.addEventListener) {
    // IE9, Chrome, Safari, Opera
    scrollContainer.addEventListener('mousewheel', scrollH, false)
    // Firefox
    scrollContainer.addEventListener('DOMMouseScroll', scrollH, false)
  } else {
    // IE 6/7/8
    scrollContainer.attachEvent('onmousewheel', scrollH)
  }
})()
