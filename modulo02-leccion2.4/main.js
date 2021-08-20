'use strict';

//DECLARAR UNA FUNCIÓN
function saludar() {
    console.log('Hola');
}

//Función sin parámetros
function hi() {
    return "Hola";
}

//Función con parámetros
function sum(a, b) {
    return a + b;
}


//EJECUTAR O INVOCAR UNA FUNCIÓN
saludar();

console.log(hi());
//Muestra en la consola la palabra 'Hola'

console.log(sum(1, 4));
//Muestra en la consola un 5


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

//CREAR FUNCIONES ANÓNIMAS, DENTRO DE UNA VARIABLE
const sum1 = function (a, b) {
    return a + b;
}
sum1(2, 6);
console.log(sum1(2, 6));

//PARÁMETROS Y VALORES DE RETORNO
function operation(a, b) {
    const result = a + b;

    return result;
}

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












