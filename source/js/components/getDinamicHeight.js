import vars from '../_vars';
import { elementHeight } from '../functions/customFunctions';

const {header,mainNav} = vars;

// elementHeight(header, "header-height");
// elementHeight(mainNav, "main-nav");


const item = document.getElementById('textCopy');
elementHeight(item , "area");
console.log(item);
document.addEventListener('DOMContentLoaded', () => {
    textArea.addEventListener('change', autosize, false)
    textArea.addEventListener('keydown', autosize, false)
    textArea.addEventListener('keyup', autosize, false)
    autosize()
}, false)

function autosize() {
    // Copy textarea contents to div browser will calculate correct height
    // of copy, which will make overall container taller, which will make
    // textarea taller.
    textCopy.innerHTML = textArea.value.replace(/\n/g, '<br/>')
}


