'use strict';

//Ejercicio 2
const clickHere = document.querySelector('.clickHere');
const inputName = document.querySelector('.name');

function sayHi() {
    console.log(`Hola ${inputName.value}`);
}

clickHere.addEventListener('click', sayHi);

