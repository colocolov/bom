const quantity = document.querySelector(".quantity");
if (quantity) {

// отключения минуса при значении 1
const valueDefaul = document.querySelectorAll('.quantity__input');
  if (valueDefaul.length) {
    valueDefaul.forEach((item) => {
      if (item.children[0].value == 1) {
        let minusBtn = item.closest('.quantity').querySelector('.quantity__btn_minus');
        minusBtn.classList.add('no-active');
      }
    });
  }

// работа счетчика
let quantityBtns = document.querySelectorAll('.quantity__btn');
if (quantityBtns.length > 0) {
  for (let index = 0; index < quantityBtns.length; index++) {
    const quantityBtn = quantityBtns[index];
    quantityBtn.addEventListener('click', function (e) {
      let value = parseInt(quantityBtn.closest('.quantity').querySelector('input').value);
      if (quantityBtn.classList.contains('quantity__btn_plus')) {
        quantityBtn.closest('.quantity').querySelector('.quantity__btn_minus').classList.remove('no-active');
        value++;
      } else {
        --value;
        if (value <= 1) {
          value = 1;
          quantityBtn.closest('.quantity').querySelector('.quantity__btn_minus').classList.add('no-active');
        }
      }
      quantityBtn.closest('.quantity').querySelector('input').value = value;
    });

  }
  }

// end if .quantity
}