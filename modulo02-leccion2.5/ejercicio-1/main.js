'use strict';

//Ejercicio 1

//elementos de HTML
const button = document.querySelector('.ole');
const text = document.querySelector('.text');

//handler
function changeText() {
    text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió';
}
//listerner
button.addEventListener('click', changeText);

