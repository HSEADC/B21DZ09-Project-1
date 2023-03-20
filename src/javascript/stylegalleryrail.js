const marginget = document.querySelector('.O_Footer')
const rails = document.querySelectorAll('.W_StylesRail')
const marginleft = window
  .getComputedStyle(marginget)
  .getPropertyValue('margin-left')

for (let i = 0; i < rails.length; i++) {
  const rail = rails[i]
  const mediaphone = window.matchMedia(
    '(min-width: 360px) and (max-width: 767px)'
  )
  if (mediaphone.matches) {
    rail.style.width = 'calc(100vw - ' + marginleft + ')'
  } else {
    rail.style.width = '100%'
  }
}
