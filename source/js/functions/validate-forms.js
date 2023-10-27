import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules) => {
  const form = document?.querySelector(selector);

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  return validation.onSuccess((ev) => { return true})

};
