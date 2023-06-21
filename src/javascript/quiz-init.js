import { getQuizCards } from './search-data.js'

let content

const results = document.querySelector('.S_QuizResults')
const buttonAgain = results.querySelector('.M_ButtonSurvey')
const cover = document.querySelector('.S_Cover')
const quizButton = document.querySelector('.S_Cover .M_ButtonSurvey')
const quiz = document.querySelector('.S_QuizBlock')
const tags = quiz.querySelectorAll('.M_SurveyTag')
const buttonNext = quiz.querySelector('.M_ButtonSurvey')
const buttonBack = quiz.querySelector('.A_ButtonBack')
const buttonClose = quiz.querySelector('.A_Close')
const counter = quiz.querySelector('.A_Counter')
const stage = quiz.querySelectorAll('.A_CircleStage')
const progressLine = quiz.querySelector('.A_ProgressLine')

let n = 1
let allActive = []
let activePlacesFin = []
let activeMoodsFin = []
let activeCharacterFin = []

function quizStart() {
  quizButton.addEventListener('click', () => {
    quiz.classList.remove('none')
  })
}

function tagSelect() {
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i]

    tag.addEventListener('click', () => {
      tag.classList.toggle('active')
    })
  }
}

function firstQuestionInit() {
  document.querySelector('.A_QuizText.place').classList.remove('none')
  document.querySelector('.A_QuizText.mood').classList.add('none')
  document.querySelector('.A_QuizText.character').classList.add('none')

  document.querySelector('.W_TagBar.place').classList.remove('none')
  document.querySelector('.W_TagBar.mood').classList.add('none')
  document.querySelector('.W_TagBar.character').classList.add('none')

  counter.innerHTML = '1/3'

  stage[0].classList.add('current')
  stage[0].classList.remove('active')
  stage[1].classList.add('disabled')
  stage[1].classList.remove('current')
  stage[2].classList.add('disabled')
  stage[2].classList.remove('current')

  progressLine.style.width = '0%'

  buttonNext.innerHTML = 'далее <div class="Q_Arrow black"></div>'
}

function secondQuestionInit() {
  document.querySelector('.A_QuizText.place').classList.add('none')
  document.querySelector('.A_QuizText.character').classList.add('none')
  document.querySelector('.A_QuizText.mood').classList.remove('none')

  document.querySelector('.W_TagBar.place').classList.add('none')
  document.querySelector('.W_TagBar.character').classList.add('none')
  document.querySelector('.W_TagBar.mood').classList.remove('none')

  counter.innerHTML = '2/3'

  stage[0].classList.remove('current')
  stage[0].classList.add('active')
  stage[1].classList.remove('disabled')
  stage[1].classList.remove('active')
  stage[1].classList.add('current')
  stage[2].classList.add('disabled')
  stage[2].classList.remove('current')

  progressLine.style.width = '20%'

  buttonNext.innerHTML = 'далее <div class="Q_Arrow black"></div>'
}

function thirdQuestionInit() {
  document.querySelector('.A_QuizText.mood').classList.add('none')
  document.querySelector('.A_QuizText.character').classList.remove('none')

  document.querySelector('.W_TagBar.mood').classList.add('none')
  document.querySelector('.W_TagBar.character').classList.remove('none')

  counter.innerHTML = '3/3'

  stage[1].classList.remove('current')
  stage[1].classList.add('active')
  stage[2].classList.remove('disabled')
  stage[2].classList.add('current')

  progressLine.style.width = '40%'

  buttonNext.innerHTML = 'завершить <div class="Q_Arrow black"></div>'
}

function devideTags(a, b, c) {
  for (let i = 0; i < allActive.length; i++) {
    const tag = allActive[i]
    if (tag.id == 'place') {
      a.push(tag.innerHTML)
    } else if (tag.id == 'mood') {
      b.push(tag.innerHTML)
    } else if (tag.id == 'character') {
      c.push(tag.innerHTML)
    }
  }
}

function createContentCard(contentItemData) {
  const contentItem = document.createElement('a')
  contentItem.classList.add('O_StyleCard')
  contentItem.href = contentItemData.link

  const contentItemCover = document.createElement('div')
  contentItemCover.classList.add('A_CardImage')
  const contentItemCoverQ = document.createElement('div')
  contentItemCoverQ.classList.add('Q_Image')
  contentItemCover.appendChild(contentItemCoverQ)
  const contentItemCoverImg = document.createElement('img')
  contentItemCoverImg.src = contentItemData.image
  contentItemCoverQ.appendChild(contentItemCoverImg)

  const contentItemTitle = document.createElement('div')
  contentItemTitle.classList.add('A_StyleName')
  contentItemTitle.innerText = contentItemData.name

  const contentItemTags = document.createElement('div')
  contentItemTags.classList.add('W_TagBar')

  contentItemData.mood.forEach((mood) => {
    const contentItemTag = document.createElement('div')
    contentItemTag.classList.add('M_Tag')
    contentItemTag.innerText = mood
    contentItemTags.appendChild(contentItemTag)
  })

  contentItem.appendChild(contentItemCover)
  contentItem.appendChild(contentItemTitle)
  contentItem.appendChild(contentItemTags)

  return contentItem
}

function renderCardsByIds(container, ids) {
  ids = [...new Set(ids)]

  ids.forEach((id) => {
    content.forEach((item) => {
      if (item.id === id && container.childElementCount < 3) {
        container.appendChild(createContentCard(item))
      }
    })
  })
}

function renderQuizContent() {
  results.classList.remove('none')
  cover.classList.add('none')
  const contentItemsContainer = results.querySelector('.C_Styles')
  contentItemsContainer.innerHTML = ''

  let contentItemIds = []

  content.forEach((contentItem) => {
    let { place, mood, character } = contentItem

    if (
      (place.some((r) => activePlacesFin.includes(r)) &&
        mood.some((r) => activeMoodsFin.includes(r)) &&
        character.some((r) => activeCharacterFin.includes(r)) &&
        contentItemIds.length < 3) ||
      (place.some((r) => activePlacesFin.includes(r)) &&
        mood.some((r) => activeMoodsFin.includes(r)) &&
        contentItemIds.length < 3) ||
      (mood.some((r) => activeMoodsFin.includes(r)) &&
        character.some((r) => activeCharacterFin.includes(r)) &&
        contentItemIds.length < 3)
    ) {
      contentItemIds.push(contentItem.id)
    }
  })

  renderCardsByIds(contentItemsContainer, contentItemIds)
}

function quizInit() {
  quizStart()
  tagSelect()
  // let n = 1

  buttonNext.addEventListener('click', () => {
    if (n < 5) {
      n++
    }

    //First question
    if (n == 2) {
      secondQuestionInit()
    }

    //Second question
    if (n == 3) {
      thirdQuestionInit()
    }

    //Third question
    if (n == 4) {
      n = 1
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        if (tag.classList.contains('active')) {
          allActive.push(tag)
        }
        tag.classList.remove('active')
      }
      firstQuestionInit()
      quiz.classList.add('none')
      devideTags(activePlacesFin, activeMoodsFin, activeCharacterFin)
      renderQuizContent()
    }
  })

  //Back
  buttonBack.addEventListener('click', () => {
    if (n > 1) {
      n--
    }

    if (n == 1) {
      firstQuestionInit()
    }

    if (n == 2) {
      secondQuestionInit()
    }
  })

  //Close
  buttonClose.addEventListener('click', () => {
    n = 1
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i]
      tag.classList.remove('active')
    }
    firstQuestionInit()
    quiz.classList.add('none')
  })

  //Again
  buttonAgain.addEventListener('click', () => {
    cover.classList.remove('none')
    results.classList.add('none')
    results.querySelector('.C_Styles').innerHTML = ''
  })
}

document.addEventListener('DOMContentLoaded', () => {
  getQuizCards().then((data) => {
    content = data
    quizInit()
  })
})
