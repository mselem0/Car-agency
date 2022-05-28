// General
const $ = function (element) {
  return document.querySelector(element);
}

// Navbar
let sticky = $('.navbar').offsetTop;
if (!$('.navbar').classList.contains('sticky-active')) {
  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      $('.navbar').classList.add("sticky")
    } else {
      $('.navbar').classList.remove("sticky");
    }
  };
}

// Mobile Navbar
$('.menu-icon').onclick = function () {
  $('.mob-navbar').classList.remove('hide-mob-nav')
}
$('.mob-navbar .close').onclick = function () {
  $('.mob-navbar').classList.add('hide-mob-nav')
}