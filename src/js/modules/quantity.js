const quantity = document.querySelector(".quantity");
const btnUpdate = document.querySelector('.btn--update');
const mainSite = document.querySelector('main.page__main');
  
if (quantity) {
let quantityBtns = document.querySelectorAll('.quantity__btn');

  mainSite.addEventListener('click', function (event) {
    if (event.target.matches('.quantity .quantity__btn')) {
    
  
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
          if ( btnUpdate ) {
            btnUpdate.disabled = false;
          }
        });

      }
    }
  }
});

// end if .quantity
}