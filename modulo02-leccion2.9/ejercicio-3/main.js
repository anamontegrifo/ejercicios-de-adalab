'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

const evenNumbers = [];
const multipleOfThree = [];


for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
        evenNumbers.push(lostNumbers[i])
    } else if (lostNumbers[i] % 3 === 0) {
        multipleOfThree.push(lostNumbers[i]);
    }
}

console.log(evenNumbers);
console.log(multipleOfThree);

const concatNumbers = evenNumbers.concat(multipleOfThree);
console.log(concatNumbers);












