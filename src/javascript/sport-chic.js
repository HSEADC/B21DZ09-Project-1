// $(document).ready(function () {
//   let slide = $('.slideimg')
//   let delay = 1000
//   cicle()
//
//   function cicle() {
//     for (let i = 0; i < slide.length; i++) {
//       checker(slide[i], delay)
//       delay += 1000
//
//       if (slide.length - i === 1) cicle()
//     }
//   }
//
//   function checker(elem, delay) {
//     setTimeout(function () {
//       $(elem).addClass('current').siblings().removeClass('current')
//     }, delay)
//   }

  // function autoplay() {
  //   interval = setInterval(function () {
  //     var currentImage = $('.slideimg.current')
  //     var currentImageIndex = $('.slideimg.current').index()
  //     var nextImageIndex = currentImageIndex + 1
  //     var nextImage = $('.slideimg').eq(nextImageIndex)
  //     var count = $('.count input').val()
  //     currentImage.slideDown(1000)
  //     currentImage.removeClass('current')
  //
  //     if (nextImageIndex == $('.slideimg:last').index() + 1) {
  //       $('.slideimg').eq(0).slideUp(1000)
  //       $('.slideimg').eq(0).addClass('current')
  //       $('.count input').val(1)
  //     } else {
  //       nextImage.slideUp(1000)
  //       nextImage.addClass('current')
  //       $('.count input').val(++count)
  //     }
  //   }, 5000)
  // }
  // autoplay()
  //
  // $('.arrow').click(function () {
  //   var currentImage = $('.slideimg.current')
  //   var currentImageIndex = $('.slideimg.current').index()
  //   var nextImageIndex = currentImageIndex + 1
  //   var nextImage = $('.slideimg').eq(nextImageIndex)
  //   var count = $('.count input').val()
  //
  //   currentImage.slideDown(1000)
  //   currentImage.removeClass('current')
  //
  //   if (nextImageIndex == $('.slideimg:last').index() + 1) {
  //     $('.slideimg').eq(0).slideUp(1000)
  //     $('.slideimg').eq(0).addClass('current')
  //     $('.count input').val(1)
  //   } else {
  //     nextImage.slideUp(1000)
  //     nextImage.addClass('current')
  //     $('.count input').val(++count)
  //   }
  // })
})
