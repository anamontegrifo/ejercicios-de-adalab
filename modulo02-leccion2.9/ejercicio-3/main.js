'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];
const myEvenArray = [];
const myMultiplyArray = [];
function bestLostNumber() {
    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 === 0) {
            myEvenArray.push(lostNumbers[i]);
        } else if (lostNumbers[i] % 3 === 0) {
            myMultiplyArray.push(lostNumbers[i]);
        }
    } const newArray = myEvenArray.concat(myMultiplyArray);
    return newArray;
}
console.log(bestLostNumber());













