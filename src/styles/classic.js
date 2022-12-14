$(document).ready(function () {
  function autoplay() {
    interval = setInterval(function () {
      var currentImage = $('.image.current')
      var currentImageIndex = $('.image.current').index()
      var nextImageIndex = currentImageIndex + 1
      var nextImage = $('.image').eq(nextImageIndex)
      var count = $('.count input').val()
      currentImage.slideDown(1000)
      currentImage.removeClass('current')

      if (nextImageIndex == $('.image:last').index() + 1) {
        $('.image').eq(0).slideUp(1000)
        $('.image').eq(0).addClass('current')
        $('.count input').val(1)
      } else {
        nextImage.slideUp(1000)
        nextImage.addClass('current')
        $('.count input').val(++count)
      }
    }, 5000)
  }
  autoplay()

  $('.button-arrow').click(function () {
    var currentImage = $('.image.current')
    var currentImageIndex = $('.image.current').index()
    var nextImageIndex = currentImageIndex + 1
    var nextImage = $('.image').eq(nextImageIndex)
    var count = $('.count input').val()

    currentImage.slideDown(1000)
    currentImage.removeClass('current')

    if (nextImageIndex == $('.image:last').index() + 1) {
      $('.image').eq(0).slideUp(1000)
      $('.image').eq(0).addClass('current')
      $('.count input').val(1)
    } else {
      nextImage.slideUp(1000)
      nextImage.addClass('current')
      $('.count input').val(++count)
    }
  })
})
