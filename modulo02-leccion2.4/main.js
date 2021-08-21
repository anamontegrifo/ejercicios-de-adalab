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

//Ámbito de las variables

// Usamos una variable de ámbito global
const secretLetter = "y";
function mySecretLetter() {
    return secretLetter;
}
console.log(mySecretLetter()); // devuelve "y"
console.log(secretLetter); // devuelve "y"

// modificamos una variable de ámbito global
let secretLetter2 = "y";
function mySecretLetter2() {
    secretLetter2 = "x";
    return secretLetter2;
}
console.log(mySecretLetter2()); // devuelve "x"
console.log(secretLetter2); // devuelve "x"

// Usamos una variable de ámbito local que se llama igual que la global
const secretLetter3 = "y";
function mySecretLetter3() {
    const secretLetter3 = "x";
    return secretLetter3;
}
console.log(mySecretLetter3()); // devuelve "x"
console.log(secretLetter3); // devuelve "y"

// intentamos usar una variable local fuera de su ámbito
function mySecretLetter4() {
    const secretLetter4 = "x";
    return secretLetter4;
}
console.log(mySecretLetter4()); // devuelve "x"
// console.log(secretLetter4); // da un error porque la variable solo está definida dentro del bloque de la función

//ARROW FUNCTIONS
const sum3 = (a, b) => {
    return a + b;
};

// y la ejecutamos usando la variable a la que la hemos asignado:
sum3(2, 3); // devuelve 5;

// Anteriormente vimos esta misma función con la forma "normal"
const sum4 = function (a, b) {
    return a + b;
};

//Paréntesis opcionales
const getWaitingTime = minutes => {
    return `Please, wait ${minutes} minutes`;
};
console.log(getWaitingTime(10));

// equivale a
const getWaitingTime2 = (minutes) => {
    return `Please, wait ${minutes} minutes`;
};
console.log(getWaitingTime2(10));


//Llaves y return implícito
const getWaitingTime3 = (minutes) => `Please, wait ${minutes} minutes`;
console.log(getWaitingTime3(4));
// devuelve "Please, wait 4 minutes"

// equivale a
const getWaitingTime4 = (minutes) => {
    return `Please, wait ${minutes} minutes`;
};
console.log(getWaitingTime4(4));
// devuelve "Please, wait 4 minutes"





