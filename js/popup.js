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
$(".popup-area-sign-up").on("click", function () {
  $(".popup-sign-up").removeClass("sign-up-open");
});

$(".button-sign-up-link").on("click", function () {
  // запись на прием футер
  $(".popup-sign-up").addClass("sign-up-open");
});

// Контакты
$(".navbar-link-contacts").on("click", function () {
  $(".popup-contacts").addClass("is-open-contacts");
});
$(".popup-close img").on("click", function () {
  $(".popup-contacts").removeClass("is-open-contacts");
});
$(".popup-area-contacts").on("click", function () {
  $(".popup-contacts").removeClass("is-open-contacts");
});

// Массаж
$(".navbar-link-massage").on("click", function () {
  $(".popup-massage").addClass("is-open-massage");
});
$(".popup-close img").on("click", function () {
  $(".popup-massage").removeClass("is-open-massage");
});
$(".popup-area-massage").on("click", function () {
  $(".popup-massage").removeClass("is-open-massage");
});

// Косметология
$(".navbar-link-cosmetology").on("click", function () {
  $(".popup-cosmetology").addClass("is-open-cosmetology");
});
$(".popup-close img").on("click", function () {
  $(".popup-cosmetology").removeClass("is-open-cosmetology");
});
$(".popup-area-cosmetology").on("click", function () {
  $(".popup-cosmetology").removeClass("is-open-cosmetology");
});
