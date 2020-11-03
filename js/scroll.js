$(document).ready(function () {
  $(window).scroll(function () {
    var windScroll = $(window).scrollTop();
    if (windScroll >= 1) {
      $('.header').addClass("scroll");
    } else {
      $('.header').removeClass("scroll");
    }
  }).scroll();
});
