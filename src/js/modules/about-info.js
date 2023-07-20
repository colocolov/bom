// https://swiperjs.com/swiper-api

// import _vars from "../_vars.js";
import Swiper, { Autoplay } from "swiper";

Swiper.use([Autoplay]);
// console.log(_vars.newGoodsEl);

// слайдер на главной
new Swiper(".about-info__slider", {
  loop: true,
  autoplay: {
    //пауза между прокруткой
    delay: 5000,
    //закончить на последнем слайде
    // stopOnLastSlide: false,
    //отключить после ручного переключения
    // disableOnInteraction: false,
  },
  // скорость переключения слайдов
  speed: 1000,
  // navigation: {
  //   nextEl: ".new-goods--next",
  //   prevEl: ".new-goods--prev",
  //   // disabledClass: "stories-button__unactive",
  //   clickable: true,
  //   // для ппрвильного направления
  // },

  //эффект перехода слайда (только если показ по 1-му слайду)
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  // показ кол-ва слайдов (работает, когда откл effect: "fade")
  slidesPerView: 2,
  // loopedSlides: 4,
  // расстояние между слайдами
  spaceBetween: 20,
  centeredSlides: true,

  // адаптив
  breakpoints: {
    // when window width is >= 320px
    
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3.2,
    },
    1152: {
      slidesPerView: 2,
    },
  },

  //отложенная загрузка:
  //отключаем презагрузку картинок
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: true,
  },
  // переключение при клике на слайд
  // slideToClickedSlide: true,
  // отключение прокрутки при наведении мыши
  // on: {
  //   init() {
  //     this.el.addEventListener("mouseenter", () => {
  //       this.autoplay.stop();
  //     });

  //     this.el.addEventListener("mouseleave", () => {
  //       this.autoplay.start();
  //     });
  //   },
  // },
  //
});
//----- END
