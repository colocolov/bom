const points = document.querySelectorAll(".timeline__item");

points.forEach(item => {
  item.addEventListener('click', (e) => {
    points.forEach(item => item.classList.remove("_active"));
      item.classList.add("_active");
  });
});