const toggleSwitch = document.querySelector('.M_ToggleSwitch')
const toggleSwitchOption = document.querySelectorAll('.A_ToggleSwitchOption')
const influencerOption = document.querySelectorAll('.A_ToggleSwitchOption')[0]
const movieOption = document.querySelectorAll('.A_ToggleSwitchOption')[1]
const sectionInfluencers = document.querySelector('.S_Influencers')
const sectionMovies = document.querySelector('.S_Movies')

for (let i = 0; i < toggleSwitchOption.length; i++) {
  toggleSwitch.addEventListener('click', (e) => {
    toggleSwitchOption[i].classList.toggle('active')

    if (influencerOption.classList.contains('active')) {
      sectionInfluencers.classList.add('active'),
        sectionMovies.classList.remove('active')
    } else {
      sectionMovies.classList.add('active'),
        sectionInfluencers.classList.remove('active')
    }
  })
}

const runningLineOne = document.querySelector('.M_RunningLine')
const runningLineTwo = document.querySelector('.M_RunningLineTwo')

runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML
runningLineTwo.innerHTML = runningLineTwo.innerHTML + runningLineTwo.innerHTML
