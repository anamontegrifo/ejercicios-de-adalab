"use strict";

const item1 = 'Yogures';
const precio1 = 1.30;
const item2 = 'Leche';
const precio2 = 1.05;
const item3 = 'Tomates';
const precio3 = 1.20;

// const lista = document.querySelector('.js_lista');
// lista.innerHTML = '<li>' + item1 +  '<span>' + precio1 + '</span>' + '</li>';


const lista = document.querySelector('.js_lista');

// lista.innerHTML = `<li>${item1} <span>${precio1}</span></li>`;


// estas dos formas funcionan igual:
// lista.innerHTML = lista.innerHTML + `<li>${item2} <span>${precio2}</span></li>`;

// lista.innerHTML += `<li>${item2} <span>${precio2}</span></li>`;


let html = `<li>${item1}<span>${precio1}</span></li>`;
html += `<li>${item2}<span>${precio2}</span></li>`;
html += `<li>${item3}<span>${precio3}</span></li>`;

const totalIva = precio1 * 0.21 + precio2 * 0.4 + precio3 * 0.4;
const total = precio1 + precio2 + precio3;

html += `<li>IVA<span>${totalIva}</span></li>`;
html += `<li>TOTAL<span>${total}</span></li>`;

lista.innerHTML = html;

