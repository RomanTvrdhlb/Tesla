import { createPopper, top, right, left} from '@popperjs/core';
import vars from '../_vars';

const items = [...document.querySelectorAll('[data-tooltip-text]')];

function toolTipInit(items) {
 items.map(function(item){
    const itemsDataText = item.getAttribute('data-tooltip-text');
    const tooltip = document.createElement('span');
    tooltip.append(`${itemsDataText}`);
    item.append(tooltip);
    tooltip.setAttribute('data-tooltip', "");
    const popperInstance = createPopper(item, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });

    function show() {
        tooltip.setAttribute('data-show', '');
        popperInstance.update();
      }
      
      function hide() {
        tooltip.removeAttribute('data-show');
      }
      
      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];
      
      showEvents.forEach((event) => {
        item.addEventListener(event, show);
      });
      
      hideEvents.forEach((event) => {
        item.addEventListener(event, hide);
      });
  })
}

toolTipInit(items);