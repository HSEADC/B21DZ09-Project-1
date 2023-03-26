const texts = document.querySelectorAll('p')
const lists = document.querySelectorAll('li')
const height = window.innerHeight
function textsInit() {
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i]
    textInit(text)
  }
}

function textInit(text) {
  document.addEventListener('scroll', () => {
    let coordinate = text.getBoundingClientRect().y
    if (coordinate < height) {
      text.style.opacity = '100%'
    } else {
      text.style.opacity = '0%'
    }
  })
}

function listsInit() {
  for (let i = 0; i < lists.length; i++) {
    const list = lists[i]
    listInit(list)
  }
}

function listInit(list) {
  document.addEventListener('scroll', () => {
    let coordinate = list.getBoundingClientRect().y
    if (coordinate < height) {
      list.style.opacity = '100%'
    } else {
      list.style.opacity = '0%'
    }
  })
}

document.addEventListener('DOMContentLoaded', textsInit(), listsInit())
