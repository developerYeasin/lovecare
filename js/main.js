new WOW().init();

window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 100);
});

var header = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  header.classList.toggle("backtotop", window.scrollY > 500);
});

header.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

jQuery(document).ready(function ($) {
  $(".counter").counterUp({ delay: 10, time: 1000 });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTime: 500,
  nav: false,
  dots: true,
  responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
});
