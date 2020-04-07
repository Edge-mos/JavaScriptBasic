'use strict';

let buttonsArray = document.querySelectorAll('.operations-block button');

let operation = document.querySelector('.operation-calc');
let firstNumInput = document.getElementById('first-num');
let secondNumInput = document.getElementById('second-num');
let resultInput = document.getElementById('calc-result');
let clearButton = document.getElementById('clear-btn');


function doOperation(event) {
    let operationFromButton = event.currentTarget.innerHTML;
    operation.innerHTML = operationFromButton;

    switch (operationFromButton) {
        case '+':
            resultInput.value = parseFloat(firstNumInput.value) + parseFloat(secondNumInput.value);
            break;
        case '-':
            resultInput.value = parseFloat(firstNumInput.value) - parseFloat(secondNumInput.value);
            break;
        case '*':
            resultInput.value = parseFloat(firstNumInput.value) * parseFloat(secondNumInput.value);
            break;
        case '/':
            resultInput.value = parseFloat(firstNumInput.value) / parseFloat(secondNumInput.value);
            break;
        default:
            resultInput.value = 'ERROR!';
            break;
    }
}

buttonsArray.forEach(button => button.addEventListener('click', doOperation));
clearButton.addEventListener('click', () => {
    resultInput.value = '';
    operation.innerHTML = '';
    firstNumInput.value = '';
    secondNumInput.value = '';
});
