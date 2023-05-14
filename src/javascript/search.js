import { getPostTeasers } from './search-data.js'

let content

function getSearchRequest() {
  const url = new URL(window.location.href)
  // const url = new URL('http://localhost:8080/search.html')
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

function setSearchRequest(requestText) {
  const url = getPathFromUrl(window.location.href)
  // const url = getPathFromUrl('http://localhost:8080/search.html')
  window.location.href = url + '?request=' + requestText
}

function getPathFromUrl(url) {
  return url.split('?')[0]
}

function createContentCard(contentItemData) {
  const contentItem = document.createElement('a')
  contentItem.classList.add('O_StyleCard')
  contentItem.href = contentItemData.link

  // const contentItemCover = document.createElement('img')
  // contentItemCover.classList.add('A_ContentItemCover')
  // contentItemCover.src = contentItemData.image

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
  contentItemTitle.innerText = contentItemData.title

  const contentItemTags = document.createElement('div')
  contentItemTags.classList.add('W_TagBar')

  contentItemData.tags.forEach((tag) => {
    const contentItemTag = document.createElement('div')
    contentItemTag.classList.add('M_Tag')
    contentItemTag.innerText = tag
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
      if (item.id === id) {
        container.appendChild(createContentCard(item))
      }
    })
  })
}

function rerenderSearchedContent(requestText) {
  const contentItemsContainer = document.querySelector('.C_Styles')
  contentItemsContainer.innerHTML = ''

  let contentItemIds = []

  content.forEach((contentItem) => {
    const nbspRegex = /[\u202F\u00A0]/gm
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm
    let { title } = contentItem

    title = title.replaceAll(nbspRegex, ' ')
    title = title.replaceAll(punctuationRegex, '')

    if (requestText.length >= 1) {
      if (title.includes(requestText)) {
        contentItemIds.push(contentItem.id)
      }
    } else {
      contentItemIds.push(contentItem.id)
    }
  })

  if (contentItemIds.length > 0) {
    renderCardsByIds(contentItemsContainer, contentItemIds)
  } else {
    renderNothingFound()
  }
}

function renderNothingFound() {
  const contentItemsContainer = document.querySelector('.C_Styles')
  contentItemsContainer.innerHTML = 'Ничего не найдено'
}

function initSearch() {
  const O_SearchBar = document.querySelector('.O_SearchBar')
  const A_Input = O_SearchBar.querySelector('.A_Input')
  const A_Button = O_SearchBar.querySelector('.A_Button')
  let requestText = getSearchRequest()

  if (requestText != undefined) {
    A_Input.value = requestText

    if (content) {
      rerenderSearchedContent(requestText)
    }
  } else {
    A_Input.value = ''
  }

  A_Input.addEventListener('input', (e) => {
    requestText = e.target.value

    // if (requestText.length >= 3) {
    //   A_Button.classList.remove('disabled')
    // } else {
    //   A_Button.classList.add('disabled')
    // }

    console.log(content)
  })

  A_Input.addEventListener('keydown', (e) => {
    requestText = e.target.value

    if (e.key === 'Enter') {
      setSearchRequest(requestText)
    }
  })

  A_Button.addEventListener('click', (e) => {
    // if (!e.target.classList.contains('disabled')) {
    requestText = A_Input.value
    setSearchRequest(requestText)
    rerenderSearchedContent(requestText)
    // }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data
    initSearch()
  })
})

// export { setSearchRequest , rerenderSearchedContent }
