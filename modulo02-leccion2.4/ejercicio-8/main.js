'use strict';

//Ejercicio 8

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
    secretLetter = "x";
    return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"
//Así nos devuelve el valor de la variable después de ser modificada dentro de la función, al estar declarada en el console.log anterior.

console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"
//De esta manera nos trae la información de la variable global antes de ser modificada dentro de la función