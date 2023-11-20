$(function(){
  

  // 인트로 애니메이션

  function introAni() {
    $('.intro').css({background: 'transparent', border: '24px solid var(--point)'});
  }
  
  setTimeout(() => {
    $('.intro .txt_area').css({opacity: 0});
  }, 400 );

  setTimeout(() => {
    introAni()
  }, 600 );

  setTimeout(() => {
    $('.intro').css({display: 'none'})
  }, 1000 );


  // 작업물 변경

  $('.work._1 button').click(function(){
    $(this).parents('.work').removeClass('on');
    $('.work._2').addClass('on');
  });

  $('.work._2 button').click(function(){
    $(this).parents('.work').removeClass('on');
    $('.work._1').addClass('on');
  });


  // 좌측 하단 메뉴 숨기기

  $(window).scroll(function () {

    var foot = $('#contact').position().top - 760;
    var scroll = $(window).scrollTop();

    if (scroll >= foot) {
      $('nav').addClass('off');
    } else {
      $('nav').removeClass('off');
    }

  });

});