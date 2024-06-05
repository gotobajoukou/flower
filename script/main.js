//メニューの装飾
$(function () {
  $('.menu-content ul li a').on('click', function (event) {
    $('#menu-btn-check').prop('checked', false);
  });
});
//トップタイトルの装飾
function BgFadeAnime() {

  $('.bgLRextendTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgLRextend');
    } else {
      $(this).removeClass('bgLRextend');
    }
  });

  $('.bgappearTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgappear');
    } else {
      $(this).removeClass('bgappear');
    }
  });
}
$(window).on('load', function () {
  BgFadeAnime();
});
$(".openbtn").click(function () {
  $(this).toggleClass('active');
});
//ページトップ
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if ($('#page-top').hasClass('UpMove')) {
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove');
    }
  }
}


$(window).scroll(function () {
  PageTopAnime();
});



$('#page-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
//背景と文字の動き
function delayScrollAnime() {
  var time = 0.2;
  var value = time;
  $('.delayScroll').each(function () {
    var parent = this;
    var elemPos = $(this).offset().top - 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {

        if (!$(this).hasClass("fadeUp")) {
          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s");
          $(this).addClass("fadeUp");
          value = value + time;


          var index = $(childs).index(this);
          if ((childs.length - 1) == index) {
            $(parent).removeClass("play");
          }
        }
      })
    }
  })
}


$(window).scroll(function () {
  delayScrollAnime();
});