'use strict';

const button = document.querySelector('.js_button');

function changeClass(event) {
    event.currentTarget.classList.toggle('color2');
}


button.addEventListener('click', changeClass);