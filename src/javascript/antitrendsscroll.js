const scrollContainer = document.querySelector('.O_ScrollAntitrends')
const scrollTopButton = document.querySelector('.A_ScrollToTop')
const marginget = document.querySelector('.O_NavBar')
const marginleft = parseInt(
  window.getComputedStyle(marginget).getPropertyValue('margin-left')
)

function paddingsInit() {
  document.querySelector('.S_Scroll > .A_PageDescription').style.marginLeft =
    +marginleft + 'px'

  document.querySelector('.C_AntitrendsRail').style.paddingRight =
    +marginleft + 'px'

  document.querySelector('.C_AntitrendsRail').style.paddingLeft =
    +marginleft + 'px'

  scrollTopButton.style.right = +marginleft + 'px'
}

function scrollTopButtonInit() {
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo(0, 0)
    console.log('click')
  })
}

function scrollInit() {
  function horizontalScroll(e) {
    e.preventDefault()
    e = window.event || e
    let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
    scrollContainer.scrollLeft -= delta * 30
  }
  if (scrollContainer.addEventListener) {
    scrollContainer.addEventListener('mousewheel', horizontalScroll, false)
    scrollContainer.addEventListener('DOMMouseScroll', horizontalScroll, false)
  } else {
    scrollContainer.attachEvent('onmousewheel', horizontalScroll)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  paddingsInit(), scrollInit(), scrollTopButtonInit()
})
