import { generateHash } from './generateHash.js'

const galleriesState = []
const galleries = document.getElementsByClassName('O_SliderGallery')

function galleriesInit() {
  for (let i = 0; i < galleries.length; i++) {
    const gallery = galleries[i]
    galleryInit(gallery)
  }
}

function galleryInit(gallery) {
  const sliderButton = gallery.querySelector('.A_SliderButton')

  const id = generateHash()
  gallery.id = id

  const galleryData = {
    id,
    currentSlide: 0,
    currentDescription: 0
  }

  galleriesState.push(galleryData)
  sliderButton.addEventListener('click', () => gallerySlide(id))
}

function gallerySlide(id) {
  const gallery = document.getElementById(id)
  const sliderDescription = gallery.querySelector('.W_SliderDescription')
  const sliderRail = gallery.querySelector('.W_SliderRail')
  const slideWidth = sliderRail.querySelector('.A_Slide').offsetWidth + 20
  const slideNumber = sliderRail.querySelectorAll('.A_Slide').length - 1

  const descriptionHeight =
    gallery.querySelector('.W_SliderText').offsetHeight + 20

  const galleryData = galleriesState.find((data) => data.id === id)
  let { currentSlide } = galleryData
  let { currentDescription } = galleryData

  if (currentSlide < slideNumber) {
    currentSlide++

    sliderRail.style.transform =
      'translateX(-' + currentSlide * slideWidth + 'px)'

    currentDescription++

    sliderDescription.style.transform =
      'translateY(-' + currentDescription * descriptionHeight + 'px)'

    galleryData.currentSlide = currentSlide
    galleryData.currentDescription = currentDescription
  } else {
    currentSlide = 0
    sliderRail.style.transform = 'translateX(0px)'

    currentDescription = 0
    sliderDescription.style.transform = 'translateY(0px)'

    galleryData.currentSlide = currentSlide
    galleryData.currentDescription = currentDescription
  }
}

document.addEventListener('DOMContentLoaded', galleriesInit)
