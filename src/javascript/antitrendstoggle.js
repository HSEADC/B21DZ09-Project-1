const toggleSwitch = document.querySelector('.M_ToggleSwitch')
const toggleSwitchOption = document.querySelectorAll('.A_ToggleSwitchOption')
const scrollOption = document.querySelectorAll('.A_ToggleSwitchOption')[0]
const galleryOption = document.querySelectorAll('.A_ToggleSwitchOption')[1]
const sectionScroll = document.querySelector('.S_Scroll')
const sectionGallery = document.querySelector('.S_Gallery')

for (let i = 0; i < toggleSwitchOption.length; i++) {
  toggleSwitch.addEventListener('click', (e) => {
    toggleSwitchOption[i].classList.toggle('active')

    if (scrollOption.classList.contains('active')) {
      sectionScroll.classList.add('active'),
        sectionGallery.classList.remove('active')
    } else {
      sectionGallery.classList.add('active'),
        sectionScroll.classList.remove('active')
    }
  })
}

const runningLineOne = document.querySelector('.M_RunningLine')

runningLineOne.innerHTML = runningLineOne.innerHTML + runningLineOne.innerHTML
