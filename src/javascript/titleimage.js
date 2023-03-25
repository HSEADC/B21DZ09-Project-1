function stylesImagesInit() {
  const titleImages = document.querySelectorAll('.A_TitleImage')

  for (let i = 0; i < titleImages.length; i++) {
    const titleImage = titleImages[i]
    stylesImagesAnimation(titleImage)
  }
}

function stylesImagesAnimation(titleImage) {
  const titleImageContent = titleImage.querySelector('img')

  titleImage.addEventListener('mouseenter', () => {
    const imageHeight = titleImage.offsetHeight
    titleImageContent.style.objectPosition = 'center -' + imageHeight + 'px'
  })

  titleImage.addEventListener('mouseleave', () => {
    titleImageContent.style.objectPosition = 'center'
  })
}

document.addEventListener('DOMContentLoaded', stylesImagesInit())
