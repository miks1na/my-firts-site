$(function () {
  $('.faq__box').on('click', function (e) {
    e.preventDefault()
    $(this).children('.faq__box-par').slideToggle()
  })
  setInterval(() => {
    if($(window).scrollTop() > 1 && window.matchMedia('(max-width: 1100px)').matches){
      $('.header').addClass('header__fixed')
      $('.start').addClass('start__margin')
    }else{
      $('.header').removeClass('header__fixed')
      $('.start').removeClass('start__margin')
    }
  }, 0)
  $('.footer__logo, .footer__nav-item, .header__nav-item').on('click', function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
    top=$(id).offset().top - 50
    $('body, html').animate({ scrollTop:top}, 800)
  })
  if(window.matchMedia('(max-width: 1000px)').matches){
    $('.burger').on('click', function (e) {
      e.preventDefault()
      $(this).next().next().slideToggle()
      $('.burger').toggleClass('burger--active')
    })}
    $('.header__nav-item').on('click', function(){
      $('.burger').next().next().slideToggle()
      $('.burger').toggleClass('burger--active')
    })
    if(window.matchMedia('(max-width: 800px)').matches){
        $('.howwork__span1').text("1")
        $('.howwork__span2').text("2")
        $('.howwork__span3').text("3")
        $('.howwork__span4').text("4")}
});