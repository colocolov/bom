// https://swiperjs.com/swiper-api

// import _vars from "../_vars.js";
import Swiper, { Navigation, Autoplay, EffectFade  } from "swiper";

Swiper.use([Navigation, Autoplay, EffectFade ]);
// console.log('----');

// слайдер на главной
new Swiper(".project-mission__slider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // скорость переключения слайдов
  speed: 800,
  navigation: {
    nextEl: ".project-mission--next",
    prevEl: ".project-mission--prev",
    // disabledClass: "stories-button__unactive",
    // clickable: true,
    // для ппрвильного направления
  },

  //эффект перехода слайда (только если показ по 1-му слайду)
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // показ кол-ва слайдов (работает, когда откл effect: "fade")
  // slidesPerView: 1,
  // spaceBetween: 10,
  // loopedSlides: 4,
  // расстояние между слайдами
  // centeredSlides: true,
  
  // адаптив
  // breakpoints: {
    // when window width is >= 320px
    
    // 576: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
  // },

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
