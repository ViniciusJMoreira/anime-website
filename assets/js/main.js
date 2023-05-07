/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close'),
navLink = document.querySelectorAll('.nav-link')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
function hiddenMenu() {
  navMenu.classList.remove('show-menu')
}
if(navClose) {
  navClose.addEventListener('click', hiddenMenu)
}
function activeLink() {
  navLink.forEach((link) =>
  link.classList.remove('active-link'))
  this.classList.add('active-link')
}
navLink.forEach((item) => {
  item.addEventListener('click', hiddenMenu)
  item.addEventListener('click', activeLink)
})
/*=============== SCROLL HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater then 80 viewport height, add the scroll-header class to header tag
  if(this.scrollY >= 80) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== BRAND SWIPER ===============*/
var brandSwiper = new Swiper(".brand-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});
/*=============== ANIME SWIPER ===============*/
var animeSwiper = new Swiper(".anime-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});
/*=============== TRENDING SWIPER ===============*/
var animeSwiper = new Swiper(".trending-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});