const stylesTitleImage = document.querySelector(
  '.S_Cover > .M_Title > .A_TitleImage > img'
)

import image1style from '../images/stylescatalog/animalism.jpg'
import image2style from '../images/stylescatalog/avangard.jpg'
import image3style from '../images/stylescatalog/classic.jpg'
import image4style from '../images/stylescatalog/colorblock.jpg'
import image5style from '../images/stylescatalog/country.jpg'
import image6style from '../images/stylescatalog/futurism.jpg'
import image7style from '../images/stylescatalog/goth.jpg'
import image8style from '../images/stylescatalog/grunge.jpg'
import image9style from '../images/stylescatalog/hip-hop.jpg'
import image10style from '../images/stylescatalog/lingerie.jpg'
import image11style from '../images/stylescatalog/minimalism.jpg'
import image12style from '../images/stylescatalog/preppy.jpg'
import image13style from '../images/stylescatalog/punk.jpg'
import image14style from '../images/stylescatalog/street-style.jpg'
import image15style from '../images/stylescatalog/y2k.jpg'

const imagesStyles = []

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function imagesInit() {
  imagesStyles.push(image1style)
  imagesStyles.push(image2style)
  imagesStyles.push(image3style)
  imagesStyles.push(image4style)
  imagesStyles.push(image5style)
  imagesStyles.push(image6style)
  imagesStyles.push(image7style)
  imagesStyles.push(image8style)
  imagesStyles.push(image9style)
  imagesStyles.push(image10style)
  imagesStyles.push(image11style)
  imagesStyles.push(image12style)
  imagesStyles.push(image13style)
  imagesStyles.push(image14style)
  imagesStyles.push(image15style)

  const imageStyle = sample(imagesStyles)
  stylesTitleImage.src = imageStyle
}

document.addEventListener('DOMContentLoaded', imagesInit())
