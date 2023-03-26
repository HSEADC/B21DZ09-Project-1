const mediaphone = window.matchMedia(
  '(min-width: 360px) and (max-width: 767px)'
)

const names = document.querySelectorAll('.M_InfluencerName')

function namesInit() {
  if (mediaphone.matches) {
    for (let i = 0; i < names.length; i++) {
      const name = names[i]
      nameInit(name)
    }
  }
}

function nameInit(name) {
  let nameParent = name.parentElement
  let fixedImage = nameParent.querySelector('.A_FixedImage > .Q_Image > img')
  const id = name.id
  let nameText = name.querySelector('.A_InfluencerName')
  document.addEventListener('scroll', () => {
    let coordinate = name.getBoundingClientRect().top
    if (coordinate > 272 && coordinate < 394) {
      displayName(id, fixedImage)
    } else {
      nameText.style.color = 'var(--white)'
    }
  })
}

function displayName(id, fixedImage) {
  let name = document.getElementById(id)
  let nameText = name.querySelector('.A_InfluencerName')
  nameText.style.color = 'var(--green)'
  let imgSrcDiv = name.querySelector('.Q_Image > img')
  let imgSrc = imgSrcDiv.src
  fixedImage.src = imgSrc
}

document.addEventListener('DOMContentLoaded', namesInit())
