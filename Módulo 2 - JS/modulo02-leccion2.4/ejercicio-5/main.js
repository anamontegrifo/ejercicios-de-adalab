'use strict';

//Ejercicio 5

function getEl(selector) {
    const shortHand = document.querySelector(selector);
    return shortHand;
}

const btnEl = getEl('.btn');
btnEl.innerHTML = 'Reset';


const textEl = getEl('.text');
textEl.innerHTML = 'Hola amigo';


