$(function(){

  // 스크롤 유도 영역 숨기기

  $(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if ($(window).width() > 1280) {
      if (scroll >= 20) {
        $('#scroll').fadeOut();
      } else {
        $('#scroll').fadeIn();
      };
    };

  });

});