'use strict';

//Booleanos
const filled = false; // Este booleano es falso
const solved = true; // Este booleano es verdadero

//Operador de igualdad (===)
const currentVegetable = 'lettuce';
const isLettuce = currentVegetable === 'lettuce';// true
console.log(isLettuce);
const isTomato = currentVegetable === 'tomato';// false
console.log(isTomato);

//Operador de desigualdad (!==)
const result = 5;
console.log(result !== 4 + 5); // true
console.log(result !== 0 + 5); // false

//Mayor - menor - mayor o igual - menor o igual
console.log(result > 4 + 5); // false
console.log(result < 4 + 5); // true
console.log(result >= 4 + 5); // false
console.log(result <= 0 + 5); // true

//Operador de negación (!)

const emptyNameField1 = true; // true
const nameIsFilled1 = !emptyNameField1; // false

const nameField2 = document.querySelector('.input-name').value; // Accedemos al valor de un input que está en la página, y está vacío (falsy)
console.log(nameField2.value);
const emptyNameField2 = !nameField2; // true
console.log(emptyNameField2);
const nameIsFilled2 = !emptyNameField2; // false
console.log(nameIsFilled2);

// Con doble negación (!!)

const nameField3 = document.querySelector('.input-name').value; // '' (falsy)
console.log(nameField3.value);
const nameIsFilled3 = !!nameField3; // false
console.log(nameIsFilled3);

// And (&&)

//Con booleanos
const firstName = 'María';
const age = 35;

firstName === 'María' && age >= 30; // true
firstName === 'Marta' && age >= 30; // false
firstName === 'María' && age >= 40; // false
firstName === 'Marta' && age >= 40; // false
console.log(firstName === 'María' && age >= 30);

//Con no booleanos
const isModerator = true;
const isAdmin = false;
const userName = 'Layla';

// Como la primera expresión es `truthy`, se devuelve la segunda expresión
const moderatorName = isModerator && userName; // Layla
console.log(moderatorName);

// Como la primera expresión es `falsy`, se devuelve esta, y la segunda ni siquiera llega a evaluarse.
const adminName = isAdmin && userName; // false
console.log(adminName);

// or (||)

//Con booleanos
const name2 = 'María';
const age2 = 35;

name2 === 'María' || age2 >= 30; // true
name2 === 'Marta' || age2 >= 30; // true
name2 === 'María' || age2 >= 40; // true
name2 === 'Marta' || age2 >= 40; // false
console.log(name2 === 'María' || age2 >= 30);

//Con no booleanos
const welcomeMessageElement = document.querySelector('.welcome__text');

const isAdmin2 = false;
const adminText2 = isAdmin2 && 'administradora';
const isModerator2 = true;
const moderatorText2 = isModerator2 && 'moderadora';

// Como la primera expresión es `falsy`, se devuelve la segunda expresión
welcomeMessageElement.innerHTML = `Bienvenida ${adminText2 || moderatorText2}. ¡Es genial verte de nuevo!`;





