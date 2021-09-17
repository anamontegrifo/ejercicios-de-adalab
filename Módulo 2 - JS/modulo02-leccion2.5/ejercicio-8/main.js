'use strict';

const buttonA = document.querySelector('.buttonA');
const buttonB = document.querySelector('.buttonB');

function changeClass(event) {

    event.currentTarget.classList.toggle('color2');
}

buttonA.addEventListener('click', changeClass);
buttonB.addEventListener('click', changeClass);