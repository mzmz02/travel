$(function(){

  $('.topButton').click(function(){
    $('html,body').scrollTop(0); //ページのトップに移動する
  });

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
    toggleChangeBtn();
  });
  
  $('.naviTitle').click(function(){
    if($('nav').hasClass('open')){
      $('nav').removeClass('open');
      $('nav').slideDown();
    }
    else{
      $('nav').addClass('open');
      $('nav').slideUp();
    }
  });


});