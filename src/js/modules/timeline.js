// const points = document.querySelectorAll(".timeline__item");

// points.forEach(item => {
//   item.addEventListener('click', (e) => {
//     points.forEach(item => item.classList.remove("_active"));
//       item.classList.add("_active");
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.timeline__list .timeline__item');
    var screenWidth = window.innerWidth;

    // Проверяем, существуют ли элементы на странице
    if (items.length > 0) {

      // Логика для мобильных устройств (780px и ниже)
      if (screenWidth <= 576) {
        var startIndex = items.length - 4; // Индекс для последних 4 элементов

        // Скрываем элементы до последних 4
        for (var i = 0; i < items.length; i++) {
          if (i < startIndex) {
            items[i].style.display = 'none'; // Скрываем элементы до последних 4
          } else {
            items[i].classList.add('_active'); // Добавляем класс active к последним 4
            // items[i].querySelector('.hidden-content').style.display = 'block'; // Показываем контент
          }
        }

        // Отключаем клики на мобильных устройствах
        items.forEach(item => {
          item.style.pointerEvents = 'none'; // Отключаем кликабельность
        });
      } else {
        // Логика для десктопа (ширина больше 780px)
        items.forEach(item => {
          item.addEventListener('click', function() {
            items.forEach(el => {
              el.classList.remove('_active'); // Убираем класс _active у всех элементов
              // el.querySelector('.hidden-content').style.display = 'none'; // Скрываем контент у всех элементов
            });

            item.classList.add('_active'); // Добавляем _active к текущему элементу
            // item.querySelector('.hidden-content').style.display = 'block'; // Показываем скрытый контент у активного элемента
          });
        });
      }
    }
  });