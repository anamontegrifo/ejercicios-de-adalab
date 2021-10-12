const operations = require('./operations');

const numberA = 57;
const numberB = 32;
const sum = operations.sumOperation(numberA, numberB);
const sub = operations.subtractionOperation(numberA, numberB);

console.log(`La suma de ${numberA} y ${numberB} es ${sum}`);
console.log(`La resta de ${numberA} y ${numberB} es ${sub}`);
