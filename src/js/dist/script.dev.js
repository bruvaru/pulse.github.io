"use strict";

$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/chevron left solid.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/chevron right solid.png"></button>',
    //  адаптация
    responsive: [{
      breakpoint: 991,
      settings: {
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }]
  }); // скрипт для табов

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active').closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  }); // // скрипт для подробнее
  //     $('.catalog-item__link').each(function(i) {
  //         $(this).on('click',function(e) {
  //             e.preventDefault();
  //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //             $('.catalog-item__list').eq(i).toggleClass ('catalog-item__list_active');
  //         })
  //     });
  // // срипт для кнопки НАЗАД
  //     $('.catalog-item__back').each(function(i) {
  //         $(this).on('click',function(e) {
  //             e.preventDefault();
  //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //             $('.catalog-item__list').eq(i).toggleClass ('catalog-item__list_active');
  //         })
  //     });
  // объеденили кнопку поднобнее и кнопку назад в функцию

  function toggleClass(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  ;
  toggleClass('.catalog-item__link');
  toggleClass('.catalog-item__back');
});