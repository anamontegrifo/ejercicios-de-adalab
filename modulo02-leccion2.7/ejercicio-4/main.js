'use strict';

//Ejercicio 4

// for (let moon = 2017 + 3; moon < 2062; moon = moon + 3) {
//     console.log('La luna del cazador se verá el año:  ' + moon);
// }

let currentYear = 2017;
let nextYears = [];

for (let i = 0; i < 15; i++) {
    currentYear += 3;
    nextYears[i] = currentYear;

}
console.log(`Las próximas lunas del cazador se verán en los años ${nextYears}`);