const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//tabs
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.content-btn').forEach(function (e) {
        e.addEventListener('click', function (e) {
            const tab = e.currentTarget.dataset.path;
            document.querySelectorAll('.tab-text').forEach(function(e) {
                e.classList.remove('tab-text--active')
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-text--active');
            })
        })
        e.addEventListener('click', function (e) {
            const tabDefault = e.currentTarget.dataset.default;
            document.querySelectorAll('.content-btn').forEach(function(e) {
                e.classList.remove('content-btn--default')
                document.querySelector(`[data-path='${tabDefault}']`).classList.add('content-btn--default');
            })
        })
    })
})
//incide
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.inside-btn').forEach(function (q) {
        q.addEventListener('click', function (q) {
            const tab = q.currentTarget.dataset.path;
            document.querySelectorAll('.tab-inside').forEach(function(q) {
                q.classList.remove('tab-inside--active')
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-inside--active');
            })
        })
        q.addEventListener('click', function (q) {
            const tabDefault = q.currentTarget.dataset.default;
            document.querySelectorAll('.inside-btn').forEach(function(q) {
                q.classList.remove('inside-btn--default')
                document.querySelector(`[data-path='${tabDefault}']`).classList.add('inside-btn--default');
            })
        })
    })
})
//incide
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.pract-btn').forEach(function (w) {
        w.addEventListener('click', function (w) {
            const tab = w.currentTarget.dataset.path;
            document.querySelectorAll('.tab-pract').forEach(function(w) {
                w.classList.remove('tab-pract--active')
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-pract--active');
            })
        })
        w.addEventListener('click', function (w) {
            const tabDefault = w.currentTarget.dataset.default;
            document.querySelectorAll('.pract-btn').forEach(function(w) {
                w.classList.remove('pract-btn--default')
                document.querySelector(`[data-path='${tabDefault}']`).classList.add('pract-btn--default');
            })
        })
    })
})
// burger
const burgerBtn = document.querySelector('.burger');
const navClose = document.querySelector('.nav-close');
const navBurger = document.querySelector('.header-item');
burgerBtn.addEventListener('click', () => {
    navBurger.classList.add('burger-active');
})
navClose.addEventListener('click', () => {
    navBurger.classList.remove('burger-active');
})