"use strict";

//Loguear en Consola//
console.log('Hola');

const age = 56;
console.log(age);

const welcomeParagraph = document.querySelector('.welcomeText');

// Logueo el contenido de la constante welcomeParagraph en la consola y compruebo que tiene asignado el elemento de HTML que espero antes de cambiar su contenido
console.log('welcomeParagraph: ', welcomeParagraph);

welcomeParagraph.innerHTML = 'Bienvenida Adalaber';

//Suma, resta, multiplicación y división

1 + 2        // Devuelve 3
1.4 - 2.4    // Devuelve -1
    + 7          // Devuelve 7
    - 40          // Devuelve -40
    - +8          // Devuelve -8
30 + 20 - 4  // Devuelve 46
3 + 3 + 3    // Devuelve 9

4 * 4        // Devuelve 16
8 * -7       // Devuelve -56
4 * 2 / 8    // Devuelve 1
0 / 8        // Devuelve 0
1.6 / 0.2    // Devuelve 8

4 + 4 * 4 / 8;     // Devuelve 6
(4 + 4) * 4 / 8;   // Devuelve 4
(4 + 4) * (4 / 8); // Devuelve 4 también

// + con texto concatena
const name = 'Paquita';
const surname = ' Salas';
console.log(name + surname); // esto pinta en consola 'Paquita Salas'

// + con números suma
const price = 10;
const shipping = 3;
console.log(price + shipping); // esto pinta en consola 13

//String
//'Esto es un 'bug''
//"Esto es un "bug""
'I\'m a front-end developer'

"a"                                   // Devuelve "a"
'b'                                   // Devuelve "b"
"Hola"                                // Devuelve "Hola"
'¿Qué tal?   '                        // Devuelve "¿Qué tal?   " (nótese los espacios)
"%^%&^%Ω"                             // Devuelve "%^%&^%Ω"
"Lorem ipsum dolor"                   // Devuelve "Lorem ipsum dolor"
"123123"                              // Devuelve "123123"
'"Lorem ipsum dolor sit amet..."'     // Devuelve ""Lorem ipsum dolor sit amet...""
"\"Lorem ipsum dolor sit amet...\""   // Devuelve ""Lorem ipsum dolor sit amet...""
'It\'s ok'                            // Devuelve "It's ok"

//Concatenar cadenas
"Fecha de conexión: " + "jueves 15"  // Devuelve "Fecha de conexión: jueves 15"
'H' + 'o' + 'l' + 'a'                // Devuelve "Hola"
"Faltan " + "3" + " días"            // Devuelve "Faltan 3 días"

//Interpolación de cadenas
//Ejemplo 1
const stringName = 'Ada';
const stringSurname = 'Lovelace';

console.log(`My name is ${stringName} ${stringSurname}.`);
// 'My name is Ada Lovelace.'

//Ejemplo 2
const firstItemPrice = 5;
const secondItemPrice = 3;

console.log(`Total amount: ${firstItemPrice + secondItemPrice}€`);
// Total amount: 8€

//Ejemplo 3
const element = document.querySelector('#element');
const textToShow = 'Hey, this is important.';

element.innerHTML = `<div class="popup"><span>${textToShow}</span></div>`;

//Longitud de string
const browserName = 'Mozilla';

console.log('Mozilla is ' + browserName.length + ' code units long');

//Undefined
let notDefinedVar;

console.log(notDefinedVar); // undefined

//convertir strings en números con parteInt
const userAge = document.querySelector('.user__age');
console.log(userAge.innerHTML); // esto es un string
const yearsToRetirement = 67 - parseInt(userAge.innerHTML);
console.log(`Te quedan ${yearsToRetirement} años para jubilarte`);

//Type of
const text1 = '¿De qué tipo soy?'
console.log('Soy de tipo:', typeof (text1)) // con paréntesis
console.log('Soy de tipo:', typeof text1) // sin paréntesis

let text2 = '¿De qué tipo soy?'
console.log(text2 + ' es del tipo ' + typeof (text2))
text2 = 123
console.log('ahora ' + text2 + ' es del tipo ' + typeof (text2))
text2 = undefined
console.log('y ahora ' + text2 + ' es del tipo ' + typeof (text2))


//Nan

//     `mango` - 2 // NaN

//         `JavaScript loves HTML` * 100  // NaN

// 64 * undefined // NaN

let ladyAge = document.querySelector('.lady__age')

let numberAge = parseInt(ladyAge.value);
console.log(ladyAge.value);
console.log('La usuaria no ha introducido una edad válida:', isNaN(numberAge));