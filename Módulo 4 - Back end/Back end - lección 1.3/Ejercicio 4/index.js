const lodash = require('lodash');

const arrayA = [1, 2, 3];
const arrayB = [2, 3, 4];

const union = lodash.union(arrayA, arrayB);

console.log(`La unión de los arrays ${arrayA} y ${arrayB} es ${union}`);
