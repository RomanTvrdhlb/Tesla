import vars from "../_vars";
import { throttle } from "../functions/throttle";
import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
import {
  removeClassInArray,
  addCustomClass,
  removeCustomClass,
  toggleCustomClass,
} from "../functions/customFunctions";
import { data } from "autoprefixer";

export function modalClickHandler(attribute, activeClass) {
  const curentModal = hiddenWrapper.querySelector(`[data-mode-modal="${attribute}"]`);
  removeClassInArray(modals, activeClass);
  addCustomClass(overlay, activeClass);
  addCustomClass(curentModal, activeClass);
  addCustomClass(hiddenWrapper, activeClass);
  disableScroll();
  innerButton = overlay.querySelector(
    `${"[data-mode-modal]"}.${activeClass} .close`
  );
}

const {
  overlay,
  activeClass,
  modalsButton,
  modalsButtonMode,
  modals,
  modalsMode,
  innerButtonModal,
  activeMode,closeBtns,
  geoText, jobText,
  modalCity, modalChoose,
  closeInnerBtns
} = vars;
let innerButton;


const hiddenBtns = [...document.querySelectorAll("[data-btn-mode]")];
const hiddenWrapper = document.querySelector('.hidden-wrapper');
const hiddenModal = document.querySelector('[data-popup="task"]');


export function commonFunction() {
  removeCustomClass(overlay, activeMode);
  removeCustomClass(overlay, activeClass);
  removeClassInArray(modals, activeClass);
  removeClassInArray(modalsMode, activeClass);
  removeCustomClass(hiddenWrapper, activeClass);
  enableScroll();
};

closeBtns.forEach(function(closeBtn){
  closeBtn.addEventListener('click', function(e){
    e.preventDefault();
    commonFunction();
  })
})

function buttonClickHandler(e, buttonAttribute, activeClass) {
  e.preventDefault();
  const currentModalId = e.target.getAttribute(`${buttonAttribute}`);
  const curentModal = overlay.querySelector(`[data-popup="${currentModalId}"]`);

  if(currentModalId === 'info'){
    renderCurrentModal(e, curentModal);
  }

  
  removeClassInArray(modals, activeClass);
  addCustomClass(overlay, activeClass);
  addCustomClass(curentModal, activeClass);
  disableScroll();
  
  innerButton = overlay.querySelector(
    `${"[data-popup]"}.${activeClass} .close`
  );
}

function overlayClickHandler(e, activeClass) {
  if (e.target === overlay || e.target === innerButton) commonFunction();
}

function modalInit(buttonsArray, buttonAttribute, activeClass) {
  buttonsArray.map(function (btn) {
    btn.addEventListener("click", (e) =>
      buttonClickHandler(e, buttonAttribute, activeClass)
    );
  });
}

overlay &&
  overlay.addEventListener("click", function (e) {
    overlayClickHandler(e, activeClass);
  });
modalInit(modalsButton, "data-btn-modal", activeClass);

innerButtonModal &&
  innerButtonModal.map(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const currentModalId = e.target.getAttribute("data-btn-inner");
      const curentModal = overlay.querySelector(
        `[data-popup="${currentModalId}"]`
      );
      removeClassInArray(modals, activeClass);
      addCustomClass(overlay, activeClass);
      addCustomClass(overlay, activeMode);
      addCustomClass(curentModal, activeClass);
      innerButton = overlay.querySelector(
        `${"[data-popup]"}.${activeClass} .close`
      );
    });
  });


  closeInnerBtns &&  closeInnerBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      console.log('123');
      e.preventDefault();
      removeClassInArray(modals, activeClass);
      removeCustomClass(overlay, activeMode);
    })
  })

  function addSelectText(modal, text){
    modal.querySelector('.save').addEventListener('click', function(){
      text.innerHTML = modal.querySelector('.select__current').innerHTML;
      commonFunction();
    })
  }

  const checkWidthModal = (
    element,
    breakpoint,
    event
  ) => {
    let containerWidth = document.documentElement.clientWidth;
  
    if (element) {
      if (containerWidth <= `${breakpoint}`) {
        event;
      }
    }
  };

  function buttonModeClickHandler(e, buttonAttribute, activeClass) {
    e.preventDefault();
    e.stopPropagation();


    const targetButton = e.target.closest(`[${buttonAttribute}]`);

    console.log(targetButton)

    if (targetButton) {
      const currentModalId = targetButton.getAttribute(`${buttonAttribute}`);
      const curentModal = hiddenWrapper.querySelector(`[data-mode-modal="${currentModalId}"]`);

      removeClassInArray(modals, activeClass);
      addCustomClass(overlay, activeClass);
      addCustomClass(hiddenWrapper, activeClass);
      addCustomClass(curentModal, activeClass);
      disableScroll();
      innerButton = overlay.querySelector(
          `${"[data-mode-modal]"}.${activeClass} .close`
      );
    }


  }

  function modalModeInit(buttonsArray, buttonAttribute, activeClass) {
    buttonsArray.map(function (btn) {
      btn.addEventListener("click", (e) =>
      buttonModeClickHandler(e, buttonAttribute, activeClass)
      );
    });
  }

  function closeInnerModal(){
    hiddenWrapper.addEventListener("click", function (e) {
      if (e.target === hiddenWrapper && overlay.classList.contains(activeMode)){
        removeClassInArray(modals, activeClass);
        removeCustomClass(overlay, activeMode);
      };
    });   

    overlay.querySelector('[data-popup="calendar-task"] .main-button').onclick = function () {
      removeClassInArray(modals, activeClass);
      removeCustomClass(overlay, activeMode);
    }
  }
  
  modalModeInit(hiddenBtns, "data-btn-mode", activeClass);

  geoText && addSelectText(modalCity, geoText);
  jobText && addSelectText(modalChoose, jobText);
  
  window.addEventListener("DOMContentLoaded", () => {
    throttle(
      checkWidthModal(innerButtonModal, 768, closeInnerModal())
    );
  });

  innerButtonModal && window.addEventListener("resize", () => {
    throttle(
      checkWidthModal(innerButtonModal, 768, closeInnerModal())
    );
  });

  function renderCurrentModal(e, modal){
    const currentParent = e.target.closest('.price-list__item');

    const hiddenBox = currentParent.querySelector('.hidden-text');
    const newTitle = hiddenBox.dataset.title;
    const newText = hiddenBox.innerHTML;
    
    modal.querySelector('.modal-title').innerText = newTitle;
    modal.querySelector('.info-modal__inner').innerHTML = newText;
  }