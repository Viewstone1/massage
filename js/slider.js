const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 10,
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  margin: 0,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
