const galleries = document.getElementsByClassName('O_SliderGallery')

function sliderGallery() {
  for (let i = 0; i < galleries.length; i++) {
    const gallery = galleries[i]
    const sliderRail = gallery.querySelector('.W_SliderRail')
    const slideWidth = sliderRail.querySelector('.A_Slide').offsetWidth + 20
    const slideNumber = sliderRail.querySelectorAll('.A_Slide').length - 1

    const sliderButton = gallery.querySelector('.A_SliderButton')
    const sliderDescription = gallery.querySelector('.W_SliderDescription')
    const descriptionHeight =
      gallery.querySelector('.W_SliderText').offsetHeight + 20
    const descriptionNumber =
      gallery.querySelectorAll('.W_SliderText').length - 1

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
}

document.addEventListener('DOMContentLoaded', sliderGallery)
