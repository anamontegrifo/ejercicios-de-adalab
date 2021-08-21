'use strict';

//Ejercicio 4
const background = document.querySelector('.textSection');
const viewport = document.defaultView;


function changeColor() {
    if (viewport.scrollY > 250) {
        background.classList.remove('colour1');
        background.classList.add('colour2');
    }
    else {
        background.classList.remove('colour2');
        background.classList.add('colour1');
    }
}

viewport.addEventListener('scroll', changeColor);