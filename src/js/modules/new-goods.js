import _vars from "../_vars.js";
import Swiper, { Navigation, Autoplay } from "swiper";

Swiper.use([Navigation, Autoplay]);

if (_vars.newGoodsEl) {

  new Swiper(".new-goods__product", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    navigation: {
      nextEl: ".new-goods--next",
      prevEl: ".new-goods--prev",
      clickable: true,
    },

    slidesPerView: 1.5,
    spaceBetween: 20,

    // адаптив
    breakpoints: {
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
        slidesPerView: 4,
      },
    },

    //отложенная загрузка:
    preloadImages: false,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
    },
  });
}