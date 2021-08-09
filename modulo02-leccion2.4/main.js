'use strict';

//declarar una función
function saludar() {
    console.log('Hola');
}

//ejecutar o invocar a la función
saludar();

//con parámetros
function saludarUsuario(user) {
    console.log(`Hola ${user}`);
}
saludarUsuario('Manolo');

//varios parámetros
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(2, 3));

suma(2, 4);

//crear funciones sin nombre, usando el nombre de la variable
const sum = function (a, b) {
    return a + b;
}
sum(2, 6);
console.log(sum(2, 6));

//Valores de retorno
function operation(a, b) {
    const result = a + b;

    return result;
}
console.log(operation(2, 9));

const operationResult = operation(3, 4); //operationResult vale 7
console.log(operationResult);

//uso de parámetros
function sum2(a, b, c) {
    return a + b + c;
}

const amount = sum2(3, 56, 12);
console.log('Cantidad', amount);

const totalAges = sum2(35, 26, 30);
console.log('totalAges', totalAges);

console.log('Exercises completed', sum2(2, 6, 9));


//Ejercicio 1
function multiplication(a, b) {
    return a * b;
}
multiplication(4, 8);
console.log(multiplication(4, 8));

//Ejercicio 2
function average(a, b, c, d) {
    return (a + b + c + d) / 4;
}
average(23, 56, 43, 12);
console.log(average(23, 56, 43, 12));

//Ejercicio 3
function totalPrice(a) {

    return (`Precio sin iva: ${a - (a * 0.21)}, IVA: ${a * 0.21} y Total: ${a} `);

}
totalPrice(100);
console.log(totalPrice(100));

//Ejercicio 4
function oddAndEven(a) {
    if (a % 2 === 0) {
        console.log('True');
    }
    else {
        console.log('False')
    }
}
oddAndEven(11);





