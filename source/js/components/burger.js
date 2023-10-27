import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleClassInArray, toggleCustomClass, removeCustomClass, removeClassInArray} from '../functions/customFunctions';
const {overlay, burger, mobileMenu, mainLinks, mobileSearch,headerBottom, asideMenu, asideMenuBtn, asideMenuClose,} = vars;

const asideMenuHandler = function (overlay, asideMenu, asideMenuBtn) {
  asideMenuBtn.addEventListener("click", function () {
    toggleCustomClass(asideMenu, "active");
    toggleCustomClass(asideMenuBtn, "active");
    toggleCustomClass(overlay, "active");
 
    if (asideMenuBtn.classList.contains("active")) {
      disableScroll();
    } else {
      enableScroll();
    }
  });
};

const mobileMenuHandler = function(overlay, mobileMenu, burger) {
  burger.forEach((btn) => {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      removeCustomClass(asideMenu);
      toggleCustomClass(mobileMenu);
      toggleClassInArray(burger);
      toggleCustomClass(overlay);

      btn.classList.contains('active') ? disableScroll() : enableScroll()

    })
  })
}

const hideMenuHandler = function(overlay, mobileMenu, burger) {
    removeCustomClass(mobileMenu);
    removeClassInArray(burger);
    removeCustomClass(overlay);
    enableScroll()
}

const hideAsideHandler = function (overlay, asideMenu, asideMenuBtn) {
  removeCustomClass(asideMenu);
  removeCustomClass(asideMenuBtn);
  removeCustomClass(overlay);
  enableScroll();
};

if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burger);
  overlay.addEventListener('click', function(e){
    e.target.classList.contains('overlay') ?
    hideMenuHandler(overlay,mobileMenu,burger) : null
  });
}


if(overlay && asideMenu){
  asideMenuHandler(overlay, asideMenu, asideMenuBtn);
  overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("overlay")) {
      hideMenuHandler(overlay, mobileMenu, burger);
      hideAsideHandler(overlay, asideMenu, asideMenuBtn);
    }
  });
}

if(asideMenuClose){
  asideMenuClose.forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      hideAsideHandler(overlay, asideMenu, asideMenuBtn);
    })
  })
}





