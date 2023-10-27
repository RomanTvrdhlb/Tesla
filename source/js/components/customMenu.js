import {addCustomClass, removeCustomClass} from '../functions/customFunctions';

const blocks = document.querySelectorAll('[data-menu-content]');
const items = document.querySelectorAll('[data-menu]');

items.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    const menuId = item.getAttribute('data-menu');
    const relatedBlocks = document.querySelectorAll(`[data-menu-content="${menuId}"]`);

    if (!item.classList.contains('active')) {
      addCustomClass(item);
    }

    relatedBlocks.forEach(function(block) {
      if (!block.classList.contains('active')) {
        addCustomClass(block);
      }
    });
  });

  item.addEventListener('mouseout', function() {
    const menuId = item.getAttribute('data-menu');
    const relatedBlocks = document.querySelectorAll(`[data-menu-content="${menuId}"]`);

    if (!item.matches(':hover')) { removeCustomClass(item)}

    relatedBlocks.forEach(function(block) {
      if (!block.matches(':hover')) {
        removeCustomClass(block);
      }
    });
  });
});

blocks.forEach(function(block) {
  block.addEventListener('mouseover', function() {
    const menuId = block.getAttribute('data-menu-content');
    const relatedItems = document.querySelectorAll(`[data-menu="${menuId}"]`);
    if (!block.classList.contains('active')) {addCustomClass(block)}

    relatedItems.forEach(function(item) {
      if (!item.classList.contains('active')) {addCustomClass(item)}
    });
  });

  block.addEventListener('mouseout', function() {
    const menuId = block.getAttribute('data-menu-content');
    const relatedItems = document.querySelectorAll(`[data-menu="${menuId}"]`);

    if (!block.matches(':hover')) {
      removeCustomClass(block);
    }

    relatedItems.forEach(function(item) {
      if (!item.matches(':hover')) {
        removeCustomClass(item);
      }
    });
  });
});

