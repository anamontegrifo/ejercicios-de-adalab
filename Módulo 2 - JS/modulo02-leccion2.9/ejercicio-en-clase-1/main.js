'use strict';

const main = document.querySelector('.js-main');

const lista = [
    'Ana',
    'Ana',
    'Clara',
    'Daniela',
    'Irene',
    'Paloma'
];

console.log(lista.length); //Cuántos elementos tiene la lista
console.log(lista);

lista.reverse();
console.log(lista);

lista.push('Tania', 'Sheila', 'Veves');
console.log(lista);

console.log(lista.reverse());
console.log(lista);

console.log(lista.pop());
console.log(lista);

//Vamos a recorrer el array para introducir cada uno de los nombres entre etiquetas <li> e introducirlas en el <ul> de HTML

for (const nombre of lista) {
    const html = `<li>${nombre}</li>`;
    main.innerHTML += html;
}

//Si tenemos un <li></li> de inicio 

main.innerHTML = '';//Se borra todo lo anterior

for (const nombre of lista) {
    const html = `<li>${nombre}</li>`;
    main.innerHTML += html;
}











