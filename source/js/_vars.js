export default {
  activeMode: 'active-mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  tabsParrents: [...document.querySelectorAll("[data-tabs-parrent]")],
  accParrent: document.querySelectorAll('[data-accordion-init]'),
  burger: document.querySelectorAll('.burger'),
  mobileMenu: document.querySelector('.mobile-menu'),
  links: document.querySelectorAll('.main-nav__link'),
  header: document.querySelector('.header')
}





