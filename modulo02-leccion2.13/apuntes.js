'use strict';

//MÉTODOS FUNCIONALES DE ARRAY

//MAP
//Comparando bucle normal
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const capitalNames = [];

for (let i = 0; i < names.length; i++) {
	const capitalName = names[i].toUpperCase();
	capitalNames.push(capitalName);
}
console.log(capitalNames);

//Usando map
const capitalName = names.map((name) => name.toUpperCase()); //con arrow function integrada
console.log(capitalName);
//otro ejemplo declarando una función y luego la aplica
const getUperCaseName = (name) => name.toUpperCase();
const capitalNames2 = names.map(getUperCaseName);
console.log(capitalNames);
