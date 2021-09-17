'use strict';
const box = document.querySelector('.box');
const title = document.querySelector('.title');
const parrafo = document.querySelector('.text');

if (box.classList.contains('success')) {
    title.innerHTML = 'Correcto';
    parrafo.innerHTML = 'Los datos son correctos';
}
else if (box.classList.contains('error')) {
    title.innerHTML = 'Error';
    parrafo.innerHTML = 'Ha surgido un error';
}
else if (box.classList.contains('warning')) {
    title.innerHTML = 'Aviso';
    parrafo.innerHTML = 'Tenga cuidado';
}
