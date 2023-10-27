import vars from "../_vars";
const { form } = vars;

const inputs = form && form.querySelectorAll('input');
let valueArr = [];

inputs && inputs.forEach(function(input){
    input.addEventListener('change', function(e){
        e.preventDefault();
        setValueArray(inputs, document.querySelector('.price-form__sum'));
    })
})

function setValueArray(array, block){
    valueArr = [];
    array.forEach(function(input){
        if (input.checked) valueArr.push(+input.value);
    })

    const  percentValue = valueArr[valueArr.length - 1];
    const currentValues = valueArr.slice(0, -1).reduce((a,b)=>a+b);

    block.innerText = (currentValues - ((currentValues / 100) * percentValue));
}

inputs && setValueArray(inputs, document.querySelector('.price-form__sum'));


