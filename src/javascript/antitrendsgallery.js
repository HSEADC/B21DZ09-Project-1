const gallery = document.querySelector('.S_Gallery')
const antitrends = gallery.querySelectorAll('.M_Antitrend')
const background = document.querySelector('.Q_BackgroundBlur')

const options = document.querySelectorAll('.W_AntitrendOption')

function galleryInit() {
  for (let i = 0; i < options.length; i++) {
    const option = options[i]
    searchInit(option)
  }
}

function searchInit(option) {
  let antitrend = option.querySelector('.M_Antitrend')

  function search() {
    antitrend.classList.toggle('active')
    antitrend.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end'
    })
    background.classList.toggle('active')
  }

  option.addEventListener('click', search)
}

document.addEventListener('DOMContentLoaded', galleryInit())
