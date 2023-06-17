function findRecommendation() {
  const pageTagsStyles = document.querySelectorAll('.S_Cover .W_TagBar .M_Tag')
  const pageTagsInfluencers = document.querySelectorAll(
    '.S_Character .W_TagBar .M_Tag'
  )
  let pageTagsText = []
  for (let i = 0; i < pageTagsStyles.length; i++) {
    const pageTag = pageTagsStyles[i]
    const text = pageTag.innerHTML.replaceAll('\n ', '').replaceAll(' ', '')
    pageTagsText.push(text)
  }

  for (let j = 0; j < pageTagsInfluencers.length; j++) {
    const pageTag = pageTagsInfluencers[j]
    const text = pageTag.innerHTML.replaceAll('\n ', '').replaceAll(' ', '')
    pageTagsText.push(text)
  }
  return pageTagsText
}

export { findRecommendation }
