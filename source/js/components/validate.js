import { validateForms } from '../functions/validate-forms';
import vars from '../_vars';
import {modalClickHandler} from '../components/modals'
import { removeClassInArray,addCustomClass, removeCustomClass } from "../functions/customFunctions";

const {overlay,formSite,formModal, activeClass, activeMode} = vars;


if(document.querySelector("html").getAttribute("lang") === 'Ru') {



  const afterForm = () => {
    modalClickHandler('done',activeClass);
  };

  const error = () => {
    modalClickHandler('error',activeClass);
  };

  if (document.querySelector(formSite)) {
    validateForms(formSite, rules1, afterForm, error);
  }

  // if (document.querySelector(formModal)) {
  //   validateForms(formModal, rules2, afterForm, error);
  // }

}











