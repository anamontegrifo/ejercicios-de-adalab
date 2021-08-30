'use strict';

//Ejercicio 10

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
        mother: 'Anna Isabella',
        father: 'Lord Byron'
    }
];

for (let i = 0; i < items.length; i++) {

    if (i === 3) {
        for (const item in items[i]) {
            console.log(`El dato ${item} está en la posición ${i} y es de tipo ${typeof items[i]}`);
        }
    } else {
        console.log(`El dato valor ${items[i]} está en la posición ${i} y es de tipo ${typeof items[i]} `);
    }
}





