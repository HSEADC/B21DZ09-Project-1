const hints = document.getElementsByClassName('M_Hint')

function hintInit() {
  for (let i = 0; i < hints.length; i++) {
    const hint = hints[i]
    hintOpen(hint)
  }
}

function hintOpen(hint) {
  const hintButton = hint.querySelector('.Q_HintIcon')
  const hintText = hint.querySelector('.A_HintText')

  hintButton.addEventListener('click', (e) => {
    hintText.classList.toggle('hidden')
  })
}

document.addEventListener('DOMContentLoaded', hintInit())
