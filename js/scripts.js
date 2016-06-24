var navMain = document.querySelector(".main-nav");
var navUser = document.querySelector(".user-nav");
var navToggle = document.querySelector(".page-header__toggle");

navToggle.classList.remove("page-header__toggle--nojs");
navMain.classList.add("main-nav--closed");
navMain.classList.remove("main-nav--opened");
navToggle.style.backgroundImage="url(img/icon-menu-open.svg)";
navUser.classList.add("user-nav--closed");
navUser.classList.remove("user-nav--opened");


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


if(document.querySelector("#yandex-map")) {
  ymaps.ready(function () {
      var myMap = new ymaps.Map('yandex-map', {
              center: [59.938631, 30.323054],
              zoom: 17
          }, {
              searchControlProvider: 'yandex#search'
          }),
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Мишка - Милые штуки ручной работы для дома',
              balloonContent: 'Мишка'
          }, {
              // Опции:
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/icon-map-pin.svg',
              // Размеры метки.
              iconImageSize: [70, 100],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-35, -100]
          });

      myMap.geoObjects.add(myPlacemark);
  });
}
