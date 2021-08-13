'use strict';

//declaro e inicializo
const lista = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco'];

//Usar el array
console.log(lista);
console.log(lista[0]);

//modificar
lista[1] = 'UNO';
lista[3] = 'TRES';
console.log(lista);

//indicamos el número de índice en el array con una variable que contenga un número
let numero = 2;
console.log(lista[numero]);

numero = numero + 1; //esto es igual a numero++
console.log(lista[numero]);

numero += 1;
console.log(lista[numero]);

//Otro ejemplo para vaciar la lista

numero = 0;
// lista[numero] = '';

// numero++;
// lista[numero] = '';

// numero++;
// lista[numero] = '';

// numero++;
// lista[numero] = '';

// numero++;
// lista[numero] = '';

// numero++;
// lista[numero] = '';

// console.log(lista);

//bucle for

for (let numero = 0; numero < lista.length; numero++) {
    console.log(lista[numero]);
    lista[numero] = '';
}
console.log(lista);


//Ejercicio adalabers

const listElement = document.querySelector('.js_list');
const listElement2 = document.querySelector('.js_list2');
const listElement3 = document.querySelector('.js_list3');
const listElement4 = document.querySelector('.js_list4');
const adalabers = [
    'Alexandra',
    'Ana',
    'Soraya',
    'María',
    'Sonia',
    'Daniela',
    'Tania'
];

const adalabers2 = [
    'Jorge',
    'Sergio',
    'Mariano',
    'Pepe',
    'Abel'
];

//dando una variable para guardar el nombre de la adalaber en cada vuelta del bucle
for (let number = 0; number < adalabers.length; number++) {
    const adalaberName = adalabers[number];
    listElement.innerHTML += `<li>${adalaberName}</li>`;
}

//directamente aplicando number a nuestro array, Iván recomienda hacerlo de la otra manera
for (let number = 0; number < adalabers2.length; number++) {
    listElement2.innerHTML += `<li>${adalabers2[number]}</li>`;
}



//Bucle for... of

for (const adaName of adalabers) {
    listElement3.innerHTML += `<li>${adaName}</li>`;

}

//Bucle for... of con condición
for (const adaName of adalabers) {
    if (adaName.startsWith('A')) {
        listElement4.innerHTML += `<li>${adaName}</li>`;
    }
}