const cartProducts = document.querySelectorAll('.cart-product');

cartProducts && cartProducts.forEach(function(el){

  const input = el.querySelector('.input-count');
  const plusBtn = el.querySelector('.plus');
  const minusBtn = el.querySelector('.minus');

  input && input.addEventListener('input', function () {
    if (parseInt(input.value) < 0) {
      input.value = 0;
    }
  });

  minusBtn && minusBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const currentValue = parseInt(input.value);
    if (currentValue > 0) {
      input.value = currentValue - 1;
    }
  });

  plusBtn && plusBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const currentValue = parseInt(input.value);
    input.value = currentValue + 1;
  });

})



