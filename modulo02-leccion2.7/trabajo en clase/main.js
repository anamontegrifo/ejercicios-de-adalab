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
lista[numero] = '';

numero++;
lista[numero] = '';

numero++;
lista[numero] = '';

numero++;
lista[numero] = '';

numero++;
lista[numero] = '';

numero++;
lista[numero] = '';

console.log(lista);

