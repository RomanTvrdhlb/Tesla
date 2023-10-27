export default {
  activeMode: 'active-mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  tabsParrents: [...document.querySelectorAll("[data-tabs-parrent]")],
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsMode: [...document.querySelectorAll('[data-mode-modal]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  accParrent: document.querySelectorAll('[data-accordion-init]'),
  accParrentTest: document.querySelectorAll('[data-accordion-calendar]'),
  innerButtonModal: [...document.querySelectorAll("[data-btn-inner]")],
  closeBtns: document.querySelectorAll('.close'),

  burger: document.querySelectorAll('.burger'),
  mobileMenu: document.querySelector('.mobile-menu'),
  header: document.querySelector("header"),
  balanceSlider: document.querySelector('.balance-slider'),
  ratingSliders: document.querySelectorAll('.rating-slider'),
  choiceSlider: document.querySelector('.choice-slider'),
  form: document.querySelector('.price-form'),

  parrents: document.querySelectorAll('.main-top'),
  rows: document.querySelectorAll('.main-transactions__inner'),
  parrentInners: document.querySelectorAll('.subscription-form__inner'),
  langBtns: document.querySelectorAll('.lang-form__btn'),
  orders: document.querySelectorAll('.main-order'),
  tasks: document.querySelectorAll('.tasks-list__item'),
  tasksParrent: document.querySelectorAll('.tasks-section--all'),
  editBtns: document.querySelectorAll('.edit-content__link'),
  areaParrents: document.querySelectorAll('[data-area]'),
  geoText: document.querySelector('.hero-section__geo-text'),  
  jobText: document.querySelector('.hero-section__job-text'),  
  modalCity: document.querySelector('[data-popup="city"]'),
  modalChoose: document.querySelector('[data-popup="choose"]'),

  closeInnerBtns: document.querySelectorAll('[data-close]'),
  parrentsImg: document.querySelectorAll('.download-image'),
  servicesBtns: document.querySelectorAll(".services-btn"),
  infoModal: document.querySelector('[data-popup="info"]'),
  editItems: document.querySelectorAll('.edit-content__item'),
  currentText: document.querySelector('.main-form__upload-name'),
  input: document.querySelector('.main-form__upload-input'),
  asideMenuBtn: document.querySelector('.filter-btn'),
  asideMenu: document.querySelector('.aside-menu.filter'),
  asideMenuClose: document.querySelectorAll('.aside-menu__close'),
  mainText: document.querySelector('.main-text'),
}




