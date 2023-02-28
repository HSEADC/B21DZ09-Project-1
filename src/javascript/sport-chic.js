console.error('=====================')

let slide = document.querySelectorAll('.O_SliderGallery > .Q_Image')
let currentslide = document.querySelectorAll(
  '.O_SliderGallery > .Q_Image > .active'
)
let sliderbutton = document.querySelectorAll('.A_SliderButton')

console.log(sliderbutton.length)

// for (let elem of currentslide) {
//   alert(elem.innerHTML)
// }
// sliderbutton.addEventListener('click', () => {
//   currentslide.removeClass('.active')
// })

// sliderbutton.addEventListener('click', () => alert('Спасибо!'))

sliderbutton.onclick = function () {
  console.log('klick')
}
