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















