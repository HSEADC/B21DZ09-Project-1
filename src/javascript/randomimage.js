let titleImage = document.querySelector('.A_TitleImage')
let imagesInfluencers = [
  '../src/images/influencers/mainpage/billieeilish1.jpg',
  '../src/images/influencers/mainpage/freddymercury1.jpg',
  '../src/images/influencers/mainpage/harrystyles1.jpg',
  '../src/images/influencers/mainpage/jen1.jpg',
  '../src/images/influencers/mainpage/kanye1.jpg',
  '../src/images/influencers/mainpage/ladygaga1.jpg',
  '../src/images/influencers/mainpage/rihanna1.jpg',
  '../src/images/influencers/mainpage/timotheechalamet1.jpg',
  '../src/images/influencers/mainpage/zendaya1.jpg'
]

let randomImage = [Math.floor(Math.random() * imagesInfluencers.length)]
let randomImageSrc = imagesInfluencers[randomImage]
let img = document.createElement('img')

document.addEventListener('DOMContentLoaded', () => {
  console.log(randomImageSrc)
  img.src = randomImageSrc
  titleImage.appendChild(img)
})

// let images = [
//   'https://wowmag.adc.ac/share/metatagcover-twittersportchic.png',
//   'https://wowmag.adc.ac/share/metatagcover-twittersportchic.png'
// ]
// let randomIndex = Math.floor(Math.random() * images.length)
// let randomImage = images[randomIndex]
// let div = document.querySelector('.A_TitleImage')
// let img = document.createElement('img')
// img.src = randomImage
// div.appendChild(img)
