const gallery = document.querySelector('.S_Gallery')
const antitrends = gallery.querySelectorAll('.M_Antitrend')
const background = document.querySelector('.Q_BackgroundBlur')

const options = document.querySelectorAll('.W_AntitrendOption')

for (let i = 0; i < options.length; i++) {
  const option = options[i]

  function search() {
    option.querySelector('.M_Antitrend').classList.toggle('active')
    option
      .querySelector('.M_Antitrend')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
    background.classList.toggle('active')
  }

  option.addEventListener('click', search)
}
