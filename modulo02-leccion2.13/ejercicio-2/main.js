'use strict';

//Versión 1
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const sayHi = names.map((name) => 'Bienvenida ' + name);
console.log(sayHi);

//Versión 2
const addGreetings = (name) => 'Bienvenida ' + name;
const sayHi2 = names.map(addGreetings);
console.log(sayHi2);
