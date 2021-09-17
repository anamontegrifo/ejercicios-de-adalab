'use strict'

const buttonRed = document.querySelector('.js_button_red');
const buttonGreen = document.querySelector('.js_button_green');
const buttonBlue = document.querySelector('.js_button_blue');
const blockResult = document.querySelector('.js_result');

function handleClickButton(event) {

    console.log(event);
    console.log(event.currentTarget);

    const clickedButton = event.currentTarget;

    console.log(clickedButton.value);

    if (clickedButton.value === 'rojo') {
        blockResult.classList.remove('blue');
        blockResult.classList.remove('green');
        blockResult.classList.add('red');
    }
    else if (clickedButton.value === 'verde') {
        blockResult.classList.remove('blue');
        blockResult.classList.remove('red');
        blockResult.classList.add('green');
    }
    else if (clickedButton.value === 'azul') {
        blockResult.classList.remove('red');
        blockResult.classList.remove('green');
        blockResult.classList.add('blue');
    }

}

buttonRed.addEventListener('click', handleClickButton);
buttonGreen.addEventListener('click', handleClickButton);
buttonBlue.addEventListener('click', handleClickButton);

function handleOtherEvent(event) {
    console.log('Estás sobrevolando el azul');
}

buttonBlue.addEventListener('mouseover', handleOtherEvent);