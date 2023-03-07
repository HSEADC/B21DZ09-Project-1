const galleries = document.getElementsByClassName('O_SliderGallery')

for (let i = 0; i < galleries.length; i++) {
  const gallery = galleries[i]
  const sliderRail = gallery.querySelector('.W_SliderRail')
  const slideWidth = sliderRail.querySelector('.A_Slide').offsetWidth + 20
  const slideNumber = sliderRail.querySelectorAll('.A_Slide').length - 1

  const sliderButton = gallery.querySelector('.A_SliderButton')
  const sliderDescription = gallery.querySelector('.W_SliderDescription')
  const descriptionHeight =
    gallery.querySelector('.W_SliderText').offsetHeight + 20
  const descriptionNumber = gallery.querySelectorAll('.W_SliderText').length - 1

  let currentSlide = 0
  let currentDescription = 0

  function slide() {
    if (currentSlide < slideNumber) {
      currentSlide++
      sliderRail.style.transform =
        'translateX(-' + currentSlide * slideWidth + 'px)'
      currentDescription++
      sliderDescription.style.transform =
        'translateY(-' + currentDescription * descriptionHeight + 'px)'
    } else {
      currentSlide = 0
      sliderRail.style.transform = 'translateX(0px)'

      currentDescription = 0
      sliderDescription.style.transform = 'translateY(0px)'
    }
  }

  sliderButton.addEventListener('click', slide)
}

const marginget = document.querySelector(
  '.O_RecomendationsBlock, .S_StyleCategory'
)
const rails = document.querySelectorAll('.W_StylesRail')
const marginleft = window
  .getComputedStyle(marginget)
  .getPropertyValue('margin-left')

for (let i = 0; i < rails.length; i++) {
  const rail = rails[i]
  const mediaphone = window.matchMedia(
    '(min-width: 360px) and (max-width: 767px)'
  )
  if (mediaphone.matches) {
    rail.style.width = 'calc(100vw - ' + marginleft + ')'
  } else {
    rail.style.width = '100%'
  }
}
