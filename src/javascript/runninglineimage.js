const runningLineImages = document.querySelectorAll(
  '.A_RunningLineImage > .Q_Image'
)

for (let i = 0; i < runningLineImages.length; i++) {
  const runningLineImage = runningLineImages[i]
  const runningLineImageContent = runningLineImage.querySelector('img')
  const imageHeight = runningLineImageContent.height

  runningLineImage.addEventListener('mouseenter', () => {
    runningLineImageContent.style.objectPosition = '0px -' + imageHeight + 'px'
  })

  runningLineImage.addEventListener('mouseleave', () => {
    runningLineImageContent.style.objectPosition = '0px 0px'
  })
}
