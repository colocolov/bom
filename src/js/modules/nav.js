// мобильное меню

// меню бургер
const body = document.querySelector("body");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelectorAll(".menu__item");
const menuSub = document.querySelector(".menu__submenu");
const menuArrow = document.querySelector(".menu__arrow");


if (iconMenu) {
  iconMenu.addEventListener("click", (e) => {
    menuSub.classList.remove("_active");
    menuArrow.classList.remove("_active");
    // console.log(iconMenu);
    body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}


// клик по доп меню
document.addEventListener("click", documentActions);
function documentActions(el) {
  const targetElement = el.target;
  if (targetElement.parentNode.classList.contains("menu__submenu")) {
    el.preventDefault();
    // console.log(targetElement);
    targetElement.classList.toggle("_active");
    targetElement.closest(".menu__item").classList.toggle("_active");
    menuArrow.classList.toggle('_active');
  } 
}


// закрытие при клике
if (menuLink.length) {
  menuLink.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!e.target.parentNode.classList.contains("menu__submenu")) {
        // console.log(e.target.parentNode.classList);
        removeActiveClass();
      }
      // else if (targetElement.classList.contains('menu_sub-link')) {
      //   //removeActiveClass();
      //   console.log(targetElement);
        
      // }
    });
  });
}

function removeActiveClass() {
  body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
  menuSub.classList.remove("_active");
  menuArrow.classList.remove("_active");
}

// const subIcon = document.querySelector('.menu__arrow');
// if (subIcon) {
//   subIcon.addEventListener("click", (e) => { 
//     subIcon.preventDefault;
//     console.log('yes');
//   })
// }



