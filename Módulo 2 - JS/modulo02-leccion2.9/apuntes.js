'use strict';

//MÉTODOS DE ARRAY


//PUSH
const arr = [1, 2, 3];
const newLength = arr.push(3, 5, 6, 7);
console.log(newLength); // Loguea 7, la nueva longitud de arr
console.log(arr); // Loguea 1,2,3,3,5,6,7

var arr2 = [1, 2, 3];
arr2.push(3, 5, 6, 7, 23, 34, 35, 34, 54, 34, 3434, 34); // Esto es totalmente válido
console.log(arr2.length);
console.log(arr2);


//REVERSE
const arr3 = [1, 2, 3];
console.log(arr3.reverse()); // Loguea 3,2,1
console.log(arr3); // Loguea también 3,2,1 porque reverse modifica arr

//CONCAT
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
const booleans = [true, false];

const result = letters.concat(numbers, booleans);
console.log(result);
// result tendrá ['a', 'b', 'c', 1, 2, 3, true, false]


//SLICE
const names = ['Rita', 'María', 'Lucía', 'Ana', 'Vanesa'];
console.log(names.slice(1, 3)); // ["María", "Lucía"]
console.log(names.slice(1)); // ["María", "Lucía","Ana", "Vanesa"]

//SPLICE
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const springMonths = months.splice(2, 4);
//borra march, april, june
console.log(months);
console.log(springMonths);


const springMonths2 = months.splice(2, 4, 'MARCH', 'APRIL', 'MAY', 'JUNE');
//añade en su lugar los escritos a continuación
console.log(months);
console.log(springMonths2);

//INDEX OF
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const indexOfApril = months.indexOf('April');
console.log(indexOfApril); // esto muestra 3 que es la posición de April

const indexOfOctober = months.indexOf('October');
console.log(indexOfOctober); // esto muestra -1 porque October no está dentro de months

const groceries = ['Eggs', 'Milk'];
const newItem = 'Beer';
if (groceries.indexOf(newItem) === -1) {
    groceries.push(newItem);
}
console.log(groceries); // esto muestra ['Eggs', 'Milk', 'Beer'] porque indexOf ha devuelto -1

//TRABAJO CON ARRAYS ANIDADOS

//Declaración
const coordinates = [
    [4, 3],
    [9, 2],
    [2, 6]
];

//Acceder al valor de un array anidado

const firstcoordinate = coordinates[1]; // De las coordenadas obtenemos el segundo valor ([9,2])
const x = firstcoordinate[0]; // De la primera coordenada obtenemos el primer valor (9)
/*
Ese mismo proceso podemos hacerlo en un paso:
De las coordenadas obtenemos el primer valor y de ese valor obtenemos el primer valor también
*/
const firstElemX = coordinates[1][0]; // firstElemX es igual a 9


//Modificar arrays anidados
coordinates[1][0] = 8;
/*
coordinates = [
  [4,3],
  [8,2],
  [2,6]
];
*/

//Recorrer el array anidado
const schedule = [
    ['Kahoot', 'Pair programming'],
    ['Kahoot', 'Project'],
    ['Pair programming', 'Kahoot'],
    ['Agile', 'Interviews'],
    ['Project', 'Beers']
];

for (let day = 0; day < schedule.length; day += 1) {
    for (let hour = 0; hour < schedule[day].length; hour += 1) {
        console.log(`On day ${day} at hour ${hour} we have ${schedule[day][hour]}`);
    }
}














