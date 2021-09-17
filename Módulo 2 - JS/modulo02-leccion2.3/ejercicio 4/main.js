'use strict';

let dogAge = 4;
const firstYear = 15;
const secondYear = 9;
const nextYear = 5;
console.log(nextYear);

if (dogAge === 1) {
    console.log(`La edad del perro equivale a ${firstYear} años de humano.`);
}
else if (dogAge === 2) {
    console.log(`La edad del perro equivale a ${secondYear + firstYear} años de humano.`);
}
else {
    console.log(`La edad del perro equivale a ${(dogAge - 2) * nextYear + secondYear + firstYear} años de humano.`)
}

