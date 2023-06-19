const scrollContainer = document.querySelector('.O_ScrollAntitrends')
// const scrollTopButton = document.querySelector('.A_ScrollToTop')
const sliderButton = document.querySelector(
  '.O_ScrollAntitrends .M_ButtonSurvey'
)
const sliderRail = document.querySelector('.C_AntitrendsRail')
const marginget = document.querySelector('.O_NavBar')
const marginleft = parseInt(
  window.getComputedStyle(marginget).getPropertyValue('margin-left')
)
const mediaphone = window.matchMedia(
  '(min-width: 360px) and (max-width: 767px)'
)

function paddingsInit() {
  document.querySelector('.S_Scroll > .A_PageDescription').style.marginLeft =
    +marginleft + 'px'

  sliderRail.style.paddingRight = +marginleft + 'px'

  sliderRail.style.paddingLeft = +marginleft + 'px'

  sliderRail.style.gap = +marginleft / 2 + 'px'

  if (mediaphone.matches) {
    sliderRail.style.gap = +marginleft + 'px'
  }
  //
  // scrollTopButton.style.right = +marginleft + 'px'
  sliderButton.style.left = +marginleft + 'px'
}

function slide() {
  let n = 0
  const slides = sliderRail.querySelectorAll('.M_Antitrend')
  const sliderLength = slides.length
  let width = 0

  if (mediaphone.matches) {
    width =
      parseInt(window.getComputedStyle(slides[0]).getPropertyValue('width')) +
      marginleft
  } else {
    width =
      parseInt(window.getComputedStyle(slides[0]).getPropertyValue('width')) +
      marginleft / 2
  }

  if (n == 0) {
    sliderRail.style.left = '0 px'
  }

  sliderButton.addEventListener('click', () => {
    console.log(width)
    console.log(marginleft)
    n++

    if (n < sliderLength && n == 1) {
      sliderRail.style.left = '-' + width + 'px'
    }

    if (n < sliderLength && n != 1) {
      sliderRail.style.left = '-' + width * n + 'px'
    }

    if (n == sliderLength - 1) {
      n = -1
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  paddingsInit(), slide()
})

// function scrollTopButtonInit() {
//   scrollTopButton.addEventListener('click', () => {
//     window.scrollTo(0, 0)
//     console.log('click')
//   })
// }

// function scrollInit() {
//   function horizontalScroll(e) {
//     e.preventDefault()
//     e = window.event || e
//     let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
//     scrollContainer.scrollLeft -= delta * 30
//   }
//   if (scrollContainer.addEventListener) {
//     scrollContainer.addEventListener('mousewheel', horizontalScroll, false)
//     scrollContainer.addEventListener('DOMMouseScroll', horizontalScroll, false)
//   } else {
//     scrollContainer.attachEvent('onmousewheel', horizontalScroll)
//   }
// }
