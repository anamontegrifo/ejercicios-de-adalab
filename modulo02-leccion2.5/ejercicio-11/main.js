'use strict';

const internationalLink = document.querySelector('.international');
const nationalLink = document.querySelector('.national');
const cultureLink = document.querySelector('.culture');

function handleLink(event) {
    event.preventDefault();
    console.log('Esta función evita acceder al link');
}

internationalLink.addEventListener('click', handleLink);
nationalLink.addEventListener('click', handleLink);
cultureLink.addEventListener('click', handleLink);



