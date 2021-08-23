'use strict';

//Ejercicio 7

const adalabers = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'
    }
];

//Adalabers en el listado
function countAdalabers() {
    const howMany = adalabers.length;
    return howMany;

}
console.log(`Hay ${countAdalabers()} adalabers en el listado`);

//Media de edad de las adalabers
let add = 0;

function averageAge() {
    for (let i = 0; i < adalabers.length; i++) {
        add += adalabers[i].age;
    }
    let media = add / adalabers.length;
    console.log('La media de edad es ' + media);

}
averageAge();

//adalaber más joven



function theYoungest() {
    const youngest = adalabers.sort(function (a, b) {
        return (a.age - b.age)

    })
    console.log(`La adalaber más joven es ${adalabers[0].name} y tiene ${adalabers[0].age} años`);
}

theYoungest();

//adalabers diseñadoras

add = 0;

function countDesigners() {
    for (let i = 0; i < adalabers.length; i++) {
        if (adalabers[i].job === 'diseñadora') {
            add += 1;
        }
    }
    return add;
}
console.log('Número de diseñadoras: ' + countDesigners());






