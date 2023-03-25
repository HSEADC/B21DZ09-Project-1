function imagesInit() {
  const runningLineImages = document.querySelectorAll(
    '.A_RunningLineImage > .Q_Image'
  )

  for (let i = 0; i < runningLineImages.length; i++) {
    const runningLineImage = runningLineImages[i]
    imagesAnimation(runningLineImage)
  }
}

function imagesAnimation(runningLineImage) {
  const runningLineImageContent = runningLineImage.querySelector('img')
  runningLineImage.addEventListener('mouseenter', () => {
    const imageHeight = runningLineImage.offsetHeight
    runningLineImageContent.style.objectPosition =
      'center -' + imageHeight + 'px'
  })

  runningLineImage.addEventListener('mouseleave', () => {
    runningLineImageContent.style.objectPosition = 'center'
  })
}

document.addEventListener('DOMContentLoaded', imagesInit())
