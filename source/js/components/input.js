import {addCustomClass, toggleCustomClass, removeCustomClass } from "../functions/customFunctions";

const forms = document.querySelectorAll('.search-form');

forms.forEach(function(item){
  const input =  item.querySelector('input');
  const inputClear =  item.querySelector('.clear');

  inputClear && inputClear.addEventListener('click', function(e){
    e.preventDefault();
    input.value = "";
  });

  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
      item.submit();
    }
  });

})
