'use strict';

const firstName = document.querySelector('.js-firstname');
const lastName = document.querySelector('.js-lastname');
const completeName = document.querySelector('.js-completename');

const lista = [
    ['Ana', 'Montegrifo'],
    ['Ana', 'Redondo'],
    ['Clara', 'Juarros'],
    ['Daniela', 'Darnea'],
    ['María', 'García'],
];

//Para extraer el primer elemento de cada array de nombres
for (const nombreCompleto of lista) {
    const html = `<li>${nombreCompleto[0]}</li>`;
    firstName.innerHTML += html;
}

//Para extraer el segundo elemento de cada array de nombres
for (const nombreCompleto of lista) {
    const html = `<li>${nombreCompleto[1]}</li>`;
    lastName.innerHTML += html;
}

// Para añadir los nombres completos
for (const listaNombreCompleto of lista) {
    let html = '<li>';

    for (const texto of listaNombreCompleto) {
        html += texto + ' ';
    }
    html += '</li>';
    completeName.innerHTML += html;
}