/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

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