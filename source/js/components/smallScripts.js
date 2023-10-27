import { throttle } from "../functions/throttle";
import {
  addCustomClass,
  toggleCustomClass,
  removeClassInArray
} from "../functions/customFunctions";
import vars from "../_vars";

const { parrents, rows, parrentInners, langBtns, orders, tasks, tasksParrent, servicesBtns, infoModal, currentText, input, mainText} = vars;

parrents &&
  parrents.forEach(function (parrent) {
    const btn = parrent.querySelector(".main-button");
    if (btn) {
      addCustomClass(parrent, "mode");
    }
  });

rows &&
  rows.forEach(function (row) {
    if (row.querySelector(".download-button")) {
      addCustomClass(row, "mode");
    }
  });

parrentInners &&
  parrentInners.forEach(function (parrentInner) {
    if (!parrentInner.querySelector(".subscription-form__discount")) {
      addCustomClass(parrentInner, "mode");
    }
  });

orders &&
  orders.forEach(function (card) {
    const btn = card.querySelector(".main-order__close");
    btn &&
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        card.parentNode.remove();
      });
  });

tasks &&
  tasks.forEach(function (item) {
    item
      .querySelector(".main-task__close")
      .addEventListener("click", function (e) {
        e.preventDefault();
        item.remove();
      });
  });

langBtns &&
  langBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      toggleCustomClass(btn, "active");
    });
  });

  tasksParrent && langBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      removeClassInArray(langBtns, 'active');
      toggleCustomClass(btn, "active");
    })
  })

  servicesBtns &&
  servicesBtns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
      e.preventDefault;
      removeClassInArray(servicesBtns, 'active');
      toggleCustomClass(btn, 'active');
    })
  });


  document.querySelectorAll('.calendar-modal__label').forEach(function(time){
    time.querySelector('.calendar-modal__time').addEventListener('click', function(){
      addCustomClass(time.querySelector('.calendar-modal__time'), 'active');
      addCustomClass(time.querySelector('.calendar-modal__time-text'), 'active');
    })
  })



  input && input.addEventListener('change', function(e){
  getFileName(input, currentText);
})

function getFileName(input, el) {
  const files = input.files[0];

  if (files) {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
        el.innerText = files.name;
    });    
  }
}

mainText && mainText.nextElementSibling.addEventListener('click', function(e){
  e.preventDefault();
  addCustomClass(mainText, 'active');
  addCustomClass(mainText.nextElementSibling, 'active');
})

