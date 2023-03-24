const runningLineImages = document.querySelectorAll(
  '.A_RunningLineImage > .Q_Image'
)

function imagesInit() {
  for (let i = 0; i < runningLineImages.length; i++) {
    const runningLineImage = runningLineImages[i]
    imagesAnimation(runningLineImage)
  }
}

function imagesAnimation(runningLineImage) {
  const runningLineImageContent = runningLineImage.querySelector('img')
  const imageHeight = runningLineImage.offsetHeight

  const heightGet = runningLineImage.parentElement

  // const heightImg = parseInt(
  //   window.getComputedStyle(heightGet).getPropertyValue('height')
  // )

  const heightImg = heightGet.clientHeight
  runningLineImage.addEventListener('mouseenter', () => {
    runningLineImageContent.style.objectPosition = '0px -' + imageHeight + 'px'
    console.log(heightImg)
  })

  runningLineImage.addEventListener('mouseleave', () => {
    runningLineImageContent.style.objectPosition = '0px 0px'
  })
}

document.addEventListener('DOMContentLoaded', imagesInit())
