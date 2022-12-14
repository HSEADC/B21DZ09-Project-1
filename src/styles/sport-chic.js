$(document).ready(function () {
  function autoplay() {
    interval = setInterval(function () {
      var currentImage = $('.slideimg.current')
      var currentImageIndex = $('.slideimg.current').index()
      var nextImageIndex = currentImageIndex + 1
      var nextImage = $('.slideimg').eq(nextImageIndex)
      var count = $('.count input').val()
      currentImage.slideDown(1000)
      currentImage.removeClass('current')

      if (nextImageIndex == $('.slideimg:last').index() + 1) {
        $('.slideimg').eq(0).slideUp(1000)
        $('.slideimg').eq(0).addClass('current')
        $('.count input').val(1)
      } else {
        nextImage.slideUp(1000)
        nextImage.addClass('current')
        $('.count input').val(++count)
      }
    }, 5000)
  }
  autoplay()

  $('.arrow').click(function () {
    var currentImage = $('.slideimg.current')
    var currentImageIndex = $('.slideimg.current').index()
    var nextImageIndex = currentImageIndex + 1
    var nextImage = $('.slideimg').eq(nextImageIndex)
    var count = $('.count input').val()

    currentImage.slideDown(1000)
    currentImage.removeClass('current')

    if (nextImageIndex == $('.slideimg:last').index() + 1) {
      $('.slideimg').eq(0).slideUp(1000)
      $('.slideimg').eq(0).addClass('current')
      $('.count input').val(1)
    } else {
      nextImage.slideUp(1000)
      nextImage.addClass('current')
      $('.count input').val(++count)
    }
  })
})
