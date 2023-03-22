const sectionInfluencers = document.querySelector('.S_Influencers')
const sectionMovies = document.querySelector('.S_Movies')

const runningLineOne = document.querySelector('.M_RunningLine')
const runningLineTwo = document.querySelector('.M_RunningLineTwo')
const mediaphone = window.matchMedia(
  '(min-width: 768px) and (max-width: 3000px)'
)

let navbarHeight = document.querySelector('.S_NavBar').offsetHeight

let movie = document.getElementById('movie')
let influencer = document.getElementById('influencer')
let toggleSwitch = document.querySelector('.M_ToggleSwitch')

function toggleSwitchInit() {
  sectionMovies.style.marginTop = +navbarHeight + 'px'

  movie.addEventListener('click', () => {
    toggleSwitch.classList.add('off'),
      sectionMovies.classList.add('active'),
      sectionInfluencers.classList.remove('active')
  })

  influencer.addEventListener('click', () => {
    toggleSwitch.classList.remove('off')
    sectionInfluencers.classList.add('active'),
      sectionMovies.classList.remove('active')
  })
}

function runningLinesInit() {
  if (mediaphone.matches) {
    runningLineOne.innerHTML =
      runningLineOne.innerHTML + runningLineOne.innerHTML
    runningLineTwo.innerHTML =
      runningLineTwo.innerHTML + runningLineTwo.innerHTML
  }
}

document.addEventListener('DOMContentLoaded', () => {
  runningLinesInit(), toggleSwitchInit()
})

// const toggleSwitch = document.querySelector('.M_ToggleSwitch')
// const toggleSwitchOption = document.querySelectorAll('.A_ToggleSwitchOption')
// const influencerOption = document.querySelectorAll('.A_ToggleSwitchOption')[0]
// const movieOption = document.querySelectorAll('.A_ToggleSwitchOption')[1]
// const sectionInfluencers = document.querySelector('.S_Influencers')
// const sectionMovies = document.querySelector('.S_Movies')
//
// for (let i = 0; i < toggleSwitchOption.length; i++) {
//   toggleSwitch.addEventListener('click', (e) => {
//     toggleSwitchOption[i].classList.toggle('active')
//
//     if (influencerOption.classList.contains('active')) {
//       sectionInfluencers.classList.add('active'),
//         sectionMovies.classList.remove('active')
//     } else {
//       sectionMovies.classList.add('active'),
//         sectionInfluencers.classList.remove('active')
//     }
//   })
// }
//
// const runningLineOne = document.querySelector('.M_RunningLine')
// const runningLineTwo = document.querySelector('.M_RunningLineTwo')
//
// const mediaphone = window.matchMedia(
//   '(min-width: 768px) and (max-width: 3000px)'
// )
//
// if (mediaphone.matches) {
//   runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML
//   runningLineTwo.innerHTML = runningLineTwo.innerHTML + runningLineTwo.innerHTML
// }
