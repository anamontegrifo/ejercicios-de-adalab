'use strict';

//Ejercicio 4


let currentYear = 2017;
let nextYears = [];

for (let i = 0; i < 15; i++) {
    currentYear += 3;
    nextYears[i] = currentYear;

}
console.log(`Las próximas lunas del cazador se verán en los años ${nextYears}`);