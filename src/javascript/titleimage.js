const titleImages = document.querySelectorAll('.A_TitleImage')

function imagesInit() {
  for (let i = 0; i < titleImages.length; i++) {
    const titleImage = titleImages[i]
    imagesAnimation(titleImage)
  }
}

function imagesAnimation(titleImage) {
  const titleImageContent = titleImage.querySelector('img')
  const imageHeight = titleImage.offsetHeight

  const heightGet = titleImage.parentElement

  // const heightImg = parseInt(
  //   window.getComputedStyle(heightGet).getPropertyValue('height')
  // )
  //
  const heightImg = titleImage.offsetHeight
  titleImage.addEventListener('mouseenter', () => {
    titleImageContent.style.objectPosition = '0px -' + heightImg + 'px'
    console.log(heightImg)
  })

  titleImage.addEventListener('mouseleave', () => {
    titleImageContent.style.objectPosition = '0px 0px'
  })
}

document.addEventListener('DOMContentLoaded', imagesInit())

// const titleImages = document.querySelectorAll('.A_TitleImage')
//
// for (let i = 0; i < titleImages.length; i++) {
//   const titleImage = titleImages[i]
//   const titleImageContent = titleImage.querySelector('img')
//   const imageHeight = titleImageContent.height
// }
//
// function imageAnimation(titleImage) {
//   titleImage.addEventListener('mouseenter', () => {
//     titleImageContent.style.objectPosition = '0px -' + imageHeight + 'px'
//   })
//
//   titleImage.addEventListener('mouseleave', () => {
//     titleImageContent.style.objectPosition = '0px 0px'
//   })
// }
