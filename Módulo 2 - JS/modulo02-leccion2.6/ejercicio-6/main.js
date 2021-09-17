'use strict';

const pearsBasket = {
    maxNumber: 10,
    minNumber: 2,
    currentNumber: 4,
    initialNumber: 0
}
pearsBasket.add = function (number) {
    return `Si sumamos ${number} a la cantidad actual tenemos ${this.currentNumber + number}`;
}
pearsBasket.sub = function (number) {
    return `Si restamos ${number} a la cantidad actual tenemos ${this.currentNumber - number}`;
}
pearsBasket.start = function () {
    this.currentNumber = this.initialNumber;
    return `El valor inicial es ${this.currentNumber}`;
}


console.log(pearsBasket.add(7));
console.log(pearsBasket.sub(3));
console.log(pearsBasket.start());