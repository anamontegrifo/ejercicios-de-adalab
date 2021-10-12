const math = require('./math');

const numberA = 57;
const numberB = 32;
const sum = math.mathAdd(numberA, numberB);
const sub = math.mathSub(numberA, numberB);

console.log(`La suma de ${numberA} y ${numberB} es ${sum}`);
console.log(`La resta de ${numberA} y ${numberB} es ${sub}`);
