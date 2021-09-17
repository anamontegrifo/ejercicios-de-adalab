'use strict';

//Ejercicio 1
// function multiplication(a, b) {
//     return a * b;
// }
const multiplication = (a, b) => a * b;

console.log(multiplication(4, 8));



//Ejercicio 2
// function average(a, b, c, d) {
//     return (a + b + c + d) / 4;
// }
const average = (a, b, c, d) => { return (a + b + c + d) / 4; }

average(23, 56, 43, 12);
console.log(average(23, 56, 43, 12));


//Ejercicio 3
// function totalPrice(a) {
//     const sinIva = (a - (a * 0.21));
//     const iva = (a * 0.21);
//     const fullPrice = (a);


//     return (`Precio sin iva: ${sinIva}, IVA: ${iva} y Total: ${fullPrice}`);

// }
const totalPrice = a => {
    const sinIva = (a - (a * 0.21));
    const iva = (a * 0.21);
    const fullPrice = (a);
    return (`Precio sin iva: ${sinIva}, IVA: ${iva} y Total: ${fullPrice}`);
}

console.log(totalPrice(800));


//Ejercicio 4
// function oddAndEven(a) {
//     const number = (a);

//     if (a % 2 === 0) {
//         console.log(`Is ${number} an even number? True`);
//     }
//     else {
//         console.log(`Is ${number} an even number? False`);
//     }
// }

const oddAndEven = a => {
    const number = (a);

    if (a % 2 === 0) {
        console.log(`Is ${number} an even number? True`);
    }
    else {
        console.log(`Is ${number} an even number? False`);
    }
}
oddAndEven(15);



