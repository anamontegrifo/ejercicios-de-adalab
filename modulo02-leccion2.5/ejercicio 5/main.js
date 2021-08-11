'use strict';

const body = document.querySelector('.body');
function pulsarTecla(event) {
    console.log(event);
    if (event.key === 'r') {
        body.classList.remove('m');
        body.classList.add('r');
    }
    else if (event.key === 'm') {
        body.classList.remove('r');
        body.classList.add('m');
    }
}
document.addEventListener('keydown', pulsarTecla);
