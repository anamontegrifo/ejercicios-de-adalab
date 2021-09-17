'use strict';

//Ejercicio 6

function getEl(selector) {
    const shortHand = document.querySelector(selector);

    if (shortHand === null) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${shortHand}`);
    }
    else {
        return shortHand;
    }
}

const btnEl = getEl('.btn');
btnEl.innerHTML = 'Reset';

// const btnEl = getEl('.btn');
// btnEl.innerHTML = 'Reset';



