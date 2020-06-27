$(function(){

  //トップに戻る
  $('.topButton').click(function(){
    $('html,body').scrollTop(0); //ページのトップに移動する
  });

  //navigationの操作
  $('.naviTop').click(function(){
    // メニューバーが開かれているなら
    if($('nav').hasClass('open')){
      $('nav').removeClass('open');
      $('nav').slideDown();

      // Font Awesomeを×にする
      $('.navigation').children('span').removeClass().addClass('fas fa-times naviTop');

    }
    // メニューバーが開かれていないなら
    else{
      $('nav').addClass('open');
      $('nav').slideUp();

      // Font Awesomeをメニューバーにする
      $('.navigation').children('span').removeClass().addClass('fas fa-bars naviTop');
    }
  });


  //Icelandのとこ
  function buttonActionI() {
    var slideIndex = $('.slideI').index($('.activeI'));
    $('.buttonFirstI').show();
    if (slideIndex == 0) {
      $('.prevI').hide();
    } 
    //最後の写真のときnextのスライドを表示しない
    else if (slideIndex == ($('.slideI').length)-1 ) {
      $('.nextI').hide();
    }
  }

  $('.buttonFirstI').click(function() {
    var $displaySlide = $('.activeI');
    $displaySlide.removeClass('activeI');
    if ($(this).hasClass('nextI')) {
      $displaySlide.next().addClass('activeI');
    } else {
      $displaySlide.prev().addClass('activeI');
    }
    buttonActionI();
  });

  $('.buttonSecondI').click(function() {
    $('.activeI').removeClass('activeI');
    var clickedIndex = $('.buttonSecondI').index($(this));
    $('.slideI').eq(clickedIndex).addClass('activeI');
    buttonActionI();
  });

  //Auroraのとこ
  function buttonAction() {
    var slideIndex = $('.slide').index($('.active'));
    $('.buttonFirst').show();
    if (slideIndex == 0) {
      $('.prev').hide();
    } 
    //最後の写真のときnextのスライドを表示しない
    else if (slideIndex == ($('.slide').length)-1 ) {
      $('.next').hide();
    }
  }

  $('.buttonFirst').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    buttonAction();
  });

  $('.buttonSecond').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.buttonSecond').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    buttonAction();
  });


  //bluelagoonのとこ
  function buttonActionBlue() {
    var slideIndex = $('.slideBlue').index($('.activeBlue'));
    $('.buttonFirstBlue').show();
    if (slideIndex == 0) {
      $('.prevBlue').hide();
    } 
    //最後の写真のときnextのスライドを表示しない
    else if (slideIndex == ($('.slideBlue').length)-1 ) {
      $('.nextBlue').hide();
    }
  }

  $('.buttonFirstBlue').click(function() {
    var $displaySlide = $('.activeBlue');
    $displaySlide.removeClass('activeBlue');
    if ($(this).hasClass('nextBlue')) {
      $displaySlide.next().addClass('activeBlue');
    } else {
      $displaySlide.prev().addClass('activeBlue');
    }
    buttonActionBlue();
  });

  $('.buttonSecondBlue').click(function() {
    $('.activeBlue').removeClass('activeBlue');
    var clickedIndex = $('.buttonSecondBlue').index($(this));
    $('.slideBlue').eq(clickedIndex).addClass('activeBlue');
    buttonActionBlue();
  });

  //Londonのとこ
  function buttonActionLondon() {
    var slideIndex = $('.slideLondon').index($('.activeLondon'));
    $('.buttonFirstLondon').show();
    if (slideIndex == 0) {
      $('.prevLondon').hide();
    } 
    //最後の写真のときnextのスライドを表示しない
    else if (slideIndex == ($('.slideLondon').length)-1 ) {
      $('.nextLondon').hide();
    }
  }

  $('.buttonFirstLondon').click(function() {
    var $displaySlide = $('.activeLondon');
    $displaySlide.removeClass('activeLondon');
    if ($(this).hasClass('nextLondon')) {
      $displaySlide.next().addClass('activeLondon');
    } else {
      $displaySlide.prev().addClass('activeLondon');
    }
    buttonActionLondon();
  });

  $('.buttonSecondLondon').click(function() {
    $('.activeLondon').removeClass('activeLondon');
    var clickedIndex = $('.buttonSecondLondon').index($(this));
    $('.slideLondon').eq(clickedIndex).addClass('activeLondon');
    buttonActionLondon();
  });

  //Parisのとこ
  function buttonActionP() {
    var slideIndex = $('.slideP').index($('.activeP'));
    $('.buttonFirstP').show();
    if (slideIndex == 0) {
      $('.prevP').hide();
    } 
    //最後の写真のときnextのスライドを表示しない
    else if (slideIndex == ($('.slideP').length)-1 ) {
      $('.nextP').hide();
    }
  }

  $('.buttonFirstP').click(function() {
    var $displaySlide = $('.activeP');
    $displaySlide.removeClass('activeP');
    if ($(this).hasClass('nextP')) {
      $displaySlide.next().addClass('activeP');
    } else {
      $displaySlide.prev().addClass('activeP');
    }
    buttonActionP();
  });

  $('.buttonSecondP').click(function() {
    $('.activeP').removeClass('activeP');
    var clickedIndex = $('.buttonSecondP').index($(this));
    $('.slideP').eq(clickedIndex).addClass('activeP');
    buttonActionP();
  });

  //Spainのとこ
  function buttonActionS() {
    var slideIndex = $('.slideS').index($('.activeS'));
    $('.buttonFirstS').show();
    if (slideIndex == 0) {
      $('.prevS').hide();
    } 
    //最後の写真のときnextのスライドを表示しない
    else if (slideIndex == ($('.slideS').length)-1 ) {
      $('.nextS').hide();
    }
  }

  $('.buttonFirstS').click(function() {
    var $displaySlide = $('.activeS');
    $displaySlide.removeClass('activeS');
    if ($(this).hasClass('nextS')) {
      $displaySlide.next().addClass('activeS');
    } else {
      $displaySlide.prev().addClass('activeS');
    }
    buttonActionS();
  });

  $('.buttonSecondS').click(function() {
    $('.activeS').removeClass('activeS');
    var clickedIndex = $('.buttonSecondS').index($(this));
    $('.slideS').eq(clickedIndex).addClass('activeS');
    buttonActionS();
  });

});