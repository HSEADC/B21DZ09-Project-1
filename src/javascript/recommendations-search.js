function findRecommendation() {
  const pageTags = document.querySelectorAll('.S_Cover .W_TagBar .M_Tag')
  let pageTagsText = []
  for (let i = 0; i < pageTags.length; i++) {
    const pageTag = pageTags[i]
    const text = pageTag.innerHTML.replaceAll('\n ', '').replaceAll(' ', '')
    pageTagsText.push(text)
  }
  return pageTagsText
}

export { findRecommendation }
