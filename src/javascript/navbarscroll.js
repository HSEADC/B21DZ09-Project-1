let prevScrollpos = window.pageYOffset
let navbarHeight = document.querySelector('.S_NavBar').offsetHeight
console.log(navbarHeight)
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.S_NavBar').style.top = '0'
  } else {
    document.querySelector('.S_NavBar').style.top = '-' + navbarHeight + 'px'
  }
  prevScrollpos = currentScrollPos
}
document.querySelectorAll('section')[1].style.marginTop = +navbarHeight + 'px'
// document.getElementById('FirstScreen').style.marginTop = +navbarHeight + 'px'
