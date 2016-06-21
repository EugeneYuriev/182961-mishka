var navMain = document.querySelector(".main-nav");
var navUser = document.querySelector(".user-nav");
var navToggle = document.querySelector(".page-header__toggle");

navToggle.classList.remove("page-header__toggle--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    navToggle.style.backgroundImage="url(img/icon-menu-close.svg)";
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    navToggle.style.backgroundImage="url(img/icon-menu-open.svg)";
  }
  if (navUser.classList.contains("user-nav--closed")) {
    navUser.classList.remove("user-nav--closed");
    navUser.classList.add("user-nav--opened");
  } else {
    navUser.classList.add("user-nav--closed");
    navUser.classList.remove("user-nav--opened");
  }
});

// Создание обработчика для события window.onLoad
YMaps.jQuery(function () {
  // Создание экземпляра карты и его привязка к созданному контейнеру
  var map = new YMaps.Map(YMaps.jQuery("#yandex-map")[0]);
  map.setCenter(new YMaps.GeoPoint(30.323054, 59.938631), 17);
  map.addControl(new YMaps.ToolBar());
  map.addControl(new YMaps.Zoom());

  // Создание стиля для значка метки
  var s = new YMaps.Style();
  s.iconStyle = new YMaps.IconStyle();
  s.iconStyle.href = "img/icon-map-pin.svg";
  s.iconStyle.size = new YMaps.Point(70, 100);
  s.iconStyle.offset = new YMaps.Point(-35, -100);

  // Создание метки и добавление ее на карту
  var placemark = new YMaps.Placemark(map.getCenter(), {style: s});
  map.addOverlay(placemark);
});
