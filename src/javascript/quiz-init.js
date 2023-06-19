const quizButton = document.querySelector('.S_Cover .M_ButtonSurvey')
const quizWrapper = document.querySelector('.W_QuizBlock')

function quizInit() {
  quizButton.addEventListener('click', () => {
    quizWrapper.classList.remove('none')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  quizInit()
})
