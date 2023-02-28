const galleries = document.getElementsByClassName('O_SliderGallery')

function sliderGallery() {
  for (let i = 0; i < galleries.length; i++) {
    const gallery = galleries[i]
    const sliderRail = gallery.querySelector('.W_SliderRail')
    const slideWidth = sliderRail.querySelector('.Q_Image').offsetWidth + 20
    const slideNumber = sliderRail.querySelectorAll('.Q_Image').length - 1
    const sliderButton = gallery.querySelector('.A_SliderButton')

    let currentSlide = 0

    function slide() {
      if (currentSlide < slideNumber) {
        currentSlide++
        sliderRail.style.transform =
          'translateX(-' + currentSlide * slideWidth + 'px)'
      } else {
        currentSlide = 0
        sliderRail.style.transform = 'translateX(0px)'
      }
    }

    sliderButton.addEventListener('click', slide)
  }
}

document.addEventListener('DOMContentLoaded', sliderGallery)
