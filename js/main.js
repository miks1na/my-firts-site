$(function () {
  var $rateYo = $("#rateYo").rateYo({"rating": 4.5});
  /* set the option `onChange` */
  $rateYo.rateYo("option", "onChange", function () {
    /* get the rated fill at the current point of time */
    var ratedFill = $rateYo.rateYo("option", "ratedFill");
    console.log("The color of rating is " + ratedFill);
  });
  /* set the option `multiColor` to show Multi Color Rating */
  $rateYo.rateYo("option", "multiColor", true);

});
$(function () {
  $(".header__left--btn-play").fancybox();
});
$(function () {
  var mixer = mixitup('.blog__items',{
    selectors: {
      target: '.blog__item'
  },
  animation: {
      duration: 1000
  }
  });
});
$(function () {
  setInterval(() => {
    if(window.matchMedia('(max-width: 700px)').matches){
      $('.review__boxes').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true, 
      })
    } else {
        $('.review__boxes').slick({
          slidesToShow: 2,
          arrows: false,
          infinite: true, 
          dots: true,
        })
      }
  }, 1000)
$('.review__btn--prev').on('click', function (e) {
    e.preventDefault()
    $('.review__boxes').slick('slickPrev')
  })
$('.review__btn--next').on('click', function (e) {
    e.preventDefault()
    $('.review__boxes').slick('slickNext')
  })
});
$(function () {
  $('.questions__block').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('questions__block--active')
    $(this).children('.questions__block-par').slideToggle()
  })
});
$(function () {
  $('.header__top-logo, .footer__bottom-logo, .footer__bottom-item, .header__top-item').on('click', function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
    top=$(id).offset().top -50
    $('body, html').animate({ scrollTop:top}, 800)
  })
});
$(function () {
  $('.burger-menu').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
  })
});
$(function () {
  setInterval(() => {
    if($(window).scrollTop() > 0){
      $('.media__top').addClass('media__top--follow')
    }else{
      $('.media__top').removeClass('media__top--follow')
    }
  }, 0)
});
$(function () {
  $('.burger-menu').on('click', function(){
    if($('.header__top').hasClass('header__top--open')){
      $('.overlay').addClass('overlay__active')
    }else{
      $('.overlay').removeClass('overlay__active')
    }})
});
$(function () {
  $('.overlay, .header__top-logo, .header__top-item').on('click', function(){
    $('.overlay').removeClass('overlay__active'),
    $('.header__top').removeClass('header__top--open')
    })
})