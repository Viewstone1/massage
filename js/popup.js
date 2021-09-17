// Подробнее первая кнопка

$(".button-info-link button").on("click", function () {
  $(".popup-info-1").addClass("active");
});
$(".popup-close img").on("click", function () {
  $(".popup-info-1").removeClass("active");
});
$(".popup-area").on("click", function () {
  $(".popup-info-1").removeClass("active");
});

// Побробнее вторая кнопка со стрелкой

$(".arrow-button-link").on("click", function () {
  $(".popup-info-2").addClass("is-open");
});
$(".popup-close img").on("click", function () {
  $(".popup-info-2").removeClass("is-open");
});
$(".popup-area-2").on("click", function () {
  $(".popup-info-2").removeClass("is-open");
});

// Запись на прием
$(".button-sign-up").on("click", function () {
  $(".popup-sign-up").addClass("sign-up-open");
});
$(".popup-close img").on("click", function () {
  $(".popup-sign-up").removeClass("sign-up-open");
});
$(".popup-area-3").on("click", function () {
  $(".popup-sign-up").removeClass("sign-up-open");
});
