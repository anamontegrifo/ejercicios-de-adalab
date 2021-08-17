'use strict';

const numberA = document.querySelector('.js-number-a');
const numberB = document.querySelector('.js-number-b');
const result = document.querySelector('.js-result');

const add = function () {
    let numberAValue = numberA.value;
    numberAValue = parseInt(numberAValue);

    let numberBValue = numberB.value;
    numberBValue = parseInt(numberBValue);

    const resultValue = numberAValue + numberBValue;

    if (isNaN(resultValue)) {
        result.classList.add('text--error');
        result.innerHTML = 'Datos inválidos';
    }
    else {
        result.classList.remove('text--error');
        result.innerHTML = resultValue;
    }
};

numberA.addEventListener('change', add);
numberB.addEventListener('change', add);

//reset button

const resetButton = document.querySelector('.js-reset');

const reset = function () {
    numberA.value = '';
    numberB.value = '';
    result.innerHTML = '';
}
resetButton.addEventListener('click', reset);