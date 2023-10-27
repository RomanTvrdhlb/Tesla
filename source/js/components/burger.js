import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleClassInArray, toggleCustomClass, removeCustomClass, removeClassInArray} from '../functions/customFunctions';
const {overlay, burger, mobileMenu, links, header} = vars;


const mobileMenuHandler = function(overlay, mobileMenu, burger) {
  burger.forEach((btn) => {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      toggleCustomClass(mobileMenu);
      toggleClassInArray(burger);
      toggleCustomClass(overlay);

      btn.classList.contains('active') ? disableScroll() : enableScroll()

    })
  })
}

links.forEach(function(link){
  link.addEventListener('click', function(e){
    const id = e.target.getAttribute('href').replace('#', '');
    let headerHeight = header.clientHeight;

    removeCustomClass(mobileMenu);
    removeClassInArray(burger);
    removeCustomClass(overlay);
    enableScroll(document.getElementById(id).offsetTop - (headerHeight))
  })
})

const hideMenuHandler = function(overlay, mobileMenu, burger) {
    removeCustomClass(mobileMenu);
    removeClassInArray(burger);
    removeCustomClass(overlay);
    enableScroll()
}

if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burger);
  overlay.addEventListener('click', function(e){
    e.target.classList.contains('overlay') ?
    hideMenuHandler(overlay,mobileMenu,burger) : null
  });
}





