import { throttle } from "../functions/throttle";

const replaceElementsFunction = (
  element,
  parentDesktop,
  parentMobile,
  breakpoint,
  firstRule,
  lastRule
) => {
  let containerWidth = document.documentElement.clientWidth;

  if (element) {
    if (containerWidth <= `${breakpoint}`) {
      parentMobile.insertAdjacentElement(`${firstRule}`, element);
    }
    if (containerWidth > `${breakpoint}`) {
      parentDesktop.insertAdjacentElement(`${lastRule}`, element);
    }
  }
};

  const icon = document.querySelector('.footer__icons');
  const iconMobileParrent = document.querySelector('.footer__bottom');
  const iconDesktopParrent = document.querySelector('.footer__coll--icons');


  const navDesktopParrent = document.querySelector('.rating-tabs');
  const navMobileParrent = document.querySelector('.select__body');
  const nav = document.querySelector('.cabinet-nav');
  
  const bg = document.querySelector('.hero-section__bg-img');

  navDesktopParrent && window.addEventListener("DOMContentLoaded", () => {
    replaceElementsFunction(
      nav,
      navDesktopParrent,
      navMobileParrent,
      768,
      "afterbegin",
      "afterbegin"
    );
  });
  
  navDesktopParrent && window.addEventListener("resize", () => {
    throttle(
      replaceElementsFunction(
        nav,
        navDesktopParrent,
        navMobileParrent,
        768,
        "afterbegin",
        "afterbegin"
      )
    );
  });
  
window.addEventListener("DOMContentLoaded", () => {
  replaceElementsFunction(
    icon,
    iconDesktopParrent,
    iconMobileParrent,
    768,
    "afterbegin",
    "afterbegin"
  );
});

window.addEventListener("resize", () => {
  throttle(
    replaceElementsFunction(
      icon,
      iconDesktopParrent,
      iconMobileParrent,
      768,
      "afterbegin",
      "afterbegin"
    )
  );
});





// 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.
