// фоновое изображение на Tabara на первом экране
const dataImg = document.querySelector('[data-img]');
if (dataImg) {
  const tabHeroImg = `url("${dataImg.dataset.img}")`;
  // const prop = document.documentElement.style.setProperty();
  // console.log(prop);
  // if () {

  // }
  document.documentElement.style.setProperty('--projectBgImg', tabHeroImg);
}
