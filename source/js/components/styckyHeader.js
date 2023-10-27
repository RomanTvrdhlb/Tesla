import vars from "../_vars";
import { stickyHeader, addCustomClass, removeCustomClass } from "../functions/customFunctions";

const {header,styckyCartHead} = vars;

const headerHeight = header.offsetHeight;
let lastScrollPos = window.scrollY;

function setTopPosition(block, value){
  block.style.top = `${value}px`;
}

function onScroll() {
  const scrollPos = window.scrollY;

  const scrollFlg = scrollPos < lastScrollPos;

  if (scrollPos >= headerHeight) {
    addCustomClass(styckyCartHead);
    setTopPosition(styckyCartHead, 0);

    scrollFlg ? setTopPosition(styckyCartHead, headerHeight) : '';

  } else {
    scrollFlg ? setTopPosition(styckyCartHead, headerHeight) : '';
    removeCustomClass(styckyCartHead);
  }

  lastScrollPos = scrollPos;
}

styckyCartHead && window.addEventListener('scroll', onScroll);
stickyHeader(header, 400, 0, 'ease');



