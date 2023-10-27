import vars from "../_vars";
import { editorInit } from './ckeditor'

const { editBtns, editItems } = vars;



editBtns && editBtns.forEach(function (btn) {

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const editItem = document.createElement("li");
    editItem.className = "edit-content__item";
    editItem.innerHTML = `
            <input type="text" class="edit-content__input" 
            placeholder="____________________________">
            <button class="edit-content__close"></button>
            `;
    btn.parentElement.querySelector('.edit-content__list').appendChild(editItem);

    const close = editItem.querySelector('.edit-content__close');
    close.addEventListener("click", function (e) {
      e.preventDefault();
      editItem.remove();
  })
});
})

let counter = 1;
let step = 2;

document.addEventListener('click', function (e) {
  e.target.hasAttribute('data-stage') && renderNewItem(e)
 
  if(e.target.hasAttribute('data-stage')){
    counter++;
    step++;
  }

  function renderNewItem(e) {

    const parrent = e.target.closest('.main-form__content');

    e.preventDefault();

    

    const newItem = `
        <div class="main-form__content">
        <div class="main-form__top main-form__top--mode">
          <span class="main-form__title">Етапи ${step}</span>
        </div>
        <div class="form-stage">
          <div class="form-stage__inner">
            <label for="stage_${counter}" class="form-stage__label">
              <input type="text" name="stage_${counter}" id="stage_${counter}" class="form-stage__input"
                placeholder="Введіть назву етапу">
            </label>
            <textarea id="about_${counter}" name="about_${counter}" class="form-stage__area" data-editor placeholder="Описання етапу"></textarea>       
          </div>
          <div class="form-stage__wrapp">
            <label for="term_${counter}" class="form-stage__label">
              <input type="text" name="term_${counter}" id="term_${counter}" class="form-stage__input"
                placeholder="Термін реалізації">
            </label>
            <div class="form-stage__content">
              <span class="form-stage__text form-stage__text--mode">Вартість етапу на ринку від</span>
              <label for="price-from_${counter}" class="form-stage__label">
                <input type="text" name="price-from_${counter}" id="price-from_${counter}" class="form-stage__input" placeholder="5000 грн">
              </label>
              <span class="form-stage__text">до</span>
              <label for="price-to_${counter}" class="form-stage__label">
                <input type="text" name="price-to_${counter}" id="price-to_${counter}" class="form-stage__input"
                  placeholder="5000 грн">
              </label>
            </div>
            <label for="your-price_${counter}" class="form-stage__label">
              <input type="text" name="your-price_${counter}" id="your-price_${counter}" class="form-stage__input"
                placeholder="Ваша вартість">
            </label>
            <label class="main-textarea" for="descr_${counter}" data-area>
              <textarea id="descr_${counter}" name="descr_${counter}" class="main-textarea__area" placeholder="Поле для обгрунтування вашої ціни"></textarea>
          </label>
          </div>
        </div>
        </div>
        `;
    parrent.insertAdjacentHTML('afterend', newItem)

    ClassicEditor.create(parrent.nextElementSibling.querySelector("[data-editor]"), {
    }).catch((error) => {
      console.error(error);
    });
  }
})
