import _vars from "../_vars.js";
import Swiper, { Thumbs } from "swiper";

Swiper.use([Thumbs]);

if (_vars.productEl) {
  // subslider
  let imagesSubSlider = new Swiper(".image-product__subslider", {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 12,
    speed: 800,
    freeMode: true,
    watchSlidesProgress: true,
    // loop: true,
  }); 

  // main slider
  let imagesProductSlider = new Swiper(".image-product__mainslider", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // autoplay: {
      //   delay: 5000,
      // },
      // loop: true,
      thumbs: {
        swiper: imagesSubSlider,
      },
      speed: 800,
  }); 
}