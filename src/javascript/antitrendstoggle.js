const sectionScroll = document.querySelector('.S_Scroll')
const sectionGallery = document.querySelector('.S_Gallery')

const runningLineOne = document.querySelector('.M_RunningLine')
const mediaphone = window.matchMedia(
  '(min-width: 768px) and (max-width: 5000px)'
)

let navbarHeight = document.querySelector('.S_NavBar').offsetHeight

let gallery = document.getElementById('gallery')
let scroll = document.getElementById('scroll')
let toggleSwitch = document.querySelector('.M_ToggleSwitch')

function toggleSwitchInit() {
  sectionGallery.style.marginTop = +navbarHeight + 'px'

  gallery.addEventListener('click', () => {
    toggleSwitch.classList.add('off'),
      sectionGallery.classList.add('active'),
      sectionScroll.classList.remove('active')
  })

  scroll.addEventListener('click', () => {
    toggleSwitch.classList.remove('off')
    sectionScroll.classList.add('active'),
      sectionGallery.classList.remove('active')
  })
}

function runningLinesInit() {
  if (mediaphone.matches) {
    runningLineOne.innerHTML =
      runningLineOne.innerHTML + runningLineOne.innerHTML
  }
}

document.addEventListener('DOMContentLoaded', () => {
  runningLinesInit(), toggleSwitchInit()
})

// const toggleSwitch = document.querySelector('.M_ToggleSwitch')
// const toggleSwitchOption = document.querySelectorAll('.A_ToggleSwitchOption')
// const scrollOption = document.querySelectorAll('.A_ToggleSwitchOption')[0]
// const galleryOption = document.querySelectorAll('.A_ToggleSwitchOption')[1]
// const sectionScroll = document.querySelector('.S_Scroll')
// const sectionGallery = document.querySelector('.S_Gallery')
//
// for (let i = 0; i < toggleSwitchOption.length; i++) {
//   toggleSwitch.addEventListener('click', (e) => {
//     toggleSwitchOption[i].classList.toggle('active')
//
//     if (scrollOption.classList.contains('active')) {
//       sectionScroll.classList.add('active'),
//         sectionGallery.classList.remove('active')
//     } else {
//       sectionGallery.classList.add('active'),
//         sectionScroll.classList.remove('active')
//     }
//   })
// }
//
// const runningLineOne = document.querySelector('.M_RunningLine')
//
// const mediaphone = window.matchMedia(
//   '(min-width: 768px) and (max-width: 3000px)'
// )
//
// if (mediaphone.matches) {
//   runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML
// }
