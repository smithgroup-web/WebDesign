"use strict";
//Плавная прокрутка
$("body").on('click', '[href*="#"]', function (e) {
    let fixedOffset = 82;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 1000);
    e.preventDefault();
});
// Затемнение хедера при скролле
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if (window.pageYOffset > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

};
// Параллакс
if (document.documentElement.clientWidth > 1199) {
    document.addEventListener('mousemove', parallax);
    function parallax(e) {
        this.querySelectorAll('.parallax').forEach(item => {
            var speed = item.getAttribute('data-speed');
            var x = (window.innerWidth - e.pageX * speed) / 300;
            var y = (window.innerWidth - e.pageY * speed) / 300;
            item.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
}
/* POPUP */
// открыть по кнопке
$('.js-button-campaign').click(function () {
    $('.js-overlay-campaign').fadeIn();
    $('.html').addClass('lock');
});
// закрыть на крестик
$('.js-close-campaign').click(function () {
    $('.js-overlay-campaign').fadeOut();
    $('.html').removeClass('lock');
});
// Закрытие thank-popup
$('#thank-close').click(function () {
    $('.thank-popup').fadeOut();
    $(".html").removeClass("lock");
});
// Меню и бургер для телефонов
$(document).ready(function () {
    let header = document.querySelector('.header');
    $(".header__burger").click(function (e) {
        $(".header__burger, .menu").toggleClass("active");
        header.classList.toggle('active');
        $(".html").toggleClass('lock');
    });
    $(".menu__link").click(function (e) {
        $(".header__burger").removeClass("active");
        $(".menu").removeClass("active");
        header.classList.add('active');
        $(".html").removeClass("lock");
    });
});
// Замена стрелки на телефонах
let introButtonArrow = document.querySelector('.intro-button__arrow');
if (document.documentElement.clientWidth < 767) {
    introButtonArrow.setAttribute('src', 'img/intro/arrowMobile.svg');
}