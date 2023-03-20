const titleImages = document.querySelectorAll('.A_TitleImage')

for (let i = 0; i < titleImages.length; i++) {
  const titleImage = titleImages[i]
  const titleImageContent = titleImage.querySelector('img')
  const imageHeight = titleImageContent.height

  titleImage.addEventListener('mouseenter', () => {
    titleImageContent.style.objectPosition = '0px -' + imageHeight + 'px'
  })

  titleImage.addEventListener('mouseleave', () => {
    titleImageContent.style.objectPosition = '0px 0px'
  })
}
