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

//FILTER
//Versión con bucle normal
const longNames = [];
for (const name of names) {
	const nameLength = name.length; // ¡Sí, podemos usar .length con strings para saber su longitud!
	if (nameLength > 5) {
		longNames.push(name);
	}
}
console.log(longNames);

//Con filter
const longNames2 = names.filter((name) => name.length > 5);
console.log(longNames2);

//REDUCE
//Versión con bucle normal
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
let result = 0;
for (let i = 0; i < scores.length; i++) {
	result += scores[i];
}
console.log(result);

//Con reduce
const result2 = scores.reduce((acc, number) => acc + number, 0);
console.log(result2);

//ENCADENAR MÉTODOS

const longNames3 = names
	.filter((name) => name.length > 5)
	.map((name) => name.toUpperCase());

console.log(longNames3);

//FIND Y FINDINDEX
//Con bucle normal:
let longName;
for (const name of names) {
	const nameLength = name.length;
	if (nameLength > 5 && longName === undefined) {
		longName = name;
	}
}
console.log(longName);

//Con find
const longName2 = names.find((name) => name.length > 5);
console.log(longName2);

//FindIndex
const index = names.findIndex((name) => name.length > 5);

console.log(index);

//SORT
names.sort();
console.log(names);

const times = [56, 9, 45, 28, 35];
times.sort((a, b) => a - b);
console.log(times);

//OBJECT.KEY
const book = {
	title: 'Harry Potter and the Deathly Hallows',
	ds_title: 'Harry Potter 7',
	author: 'J. K. Rowling',
	ds_author: 'Rowling',
};

const keys = Object.keys(book);
console.log(keys); //['title', 'ds_title', 'author', 'ds_author', ...]
