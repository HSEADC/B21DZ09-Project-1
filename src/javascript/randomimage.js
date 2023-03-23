let images = [
  'https://wowmag.adc.ac/share/metatagcover-twittersportchic.png',
  'https://wowmag.adc.ac/share/metatagcover-twittersportchic.png'
]
let randomIndex = Math.floor(Math.random() * images.length)
let randomImage = images[randomIndex]
let div = document.querySelector('.A_TitleImage')
let img = document.createElement('img')
img.src = randomImage
div.appendChild(img)
//тут все будет по-другому, это для презы
