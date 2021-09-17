'use strict';

//ejercicio 5

//con 5 valores
let myNumbers = [25, 5, 65, 40, 70];

let add = 0;

for (let i = 0; i < myNumbers.length; i++) {
    add += myNumbers[i];

}
let media = add / 5;
console.log('La media de mis números es: ' + media);

//con más valores
myNumbers = [25, 5, 65, 40, 70];

add = 0;

myNumbers[5] = 35;
myNumbers[6] = 21;

for (let i = 0; i < myNumbers.length; i++) {
    add += myNumbers[i];

}

media = add / 7;
console.log('La media de mis números es: ' + media);


//Con función

function average(myNumbers) {
    let add = 0;
    for (let i = 0; i < myNumbers.length; i++) {
        add += myNumbers[i];
    }
    let media = add / myNumbers.length;
    console.log('La media de mis números es: ' + media);
}
average(myNumbers);

