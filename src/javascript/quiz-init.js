const quizButton = document.querySelector('.S_Cover .M_ButtonSurvey')
const quiz = document.querySelector('.S_QuizBlock')
const tags = document.querySelectorAll('.M_SurveyTag')
const buttonNext = document.querySelector('.O_QuizBlock .M_ButtonSurvey')
const buttonBack = document.querySelector('.O_QuizBlock .A_ButtonBack')

function quizInit() {
  quizButton.addEventListener('click', () => {
    quiz.classList.remove('none')
  })
}
function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value
  })
}

function tagSelect() {
  console.log(tags)

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i]

    tag.addEventListener('click', () => {
      tag.classList.toggle('active')
    })
  }
}

function handleNext() {
  let n = 1
  let activePlaces = []

  buttonNext.addEventListener('click', () => {
    console.log('click')
    if (n < 4) {
      n++
    }

    if (n == 2) {
      activePlaces = []
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        const tagText = tag.innerHTML
        if (
          tag.id == 'place' &&
          tag.classList.contains('active') &&
          !activePlaces.includes(tagText)
        ) {
          console.log(tagText)
          activePlaces.push(tagText)
        }
      }
      console.log(activePlaces)
    }
  })

  buttonBack.addEventListener('click', () => {
    console.log(activePlaces)
    if (n > 1) {
      n--
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  quizInit(), tagSelect(), handleNext()
})
