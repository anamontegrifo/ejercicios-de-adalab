'use strict';

//OBJETOS LITERALES: VARIABLE, CONTENIDO ENTRE LLAVES Y DENTRO PAREJAS DE CLAVE(propiedad):VALOR(cualquier tipo de datos)
const adalaber = {
    name: 'María',
    age: 31,
    isMarried: false
};
console.log(adalaber);

//Una propiedad de un objeto puede ser otro objeto
const adalaber2 = {
    name: 'María',
    age: 31,
    isMarried: false,
    address: {
        street: 'Colegiata',
        number: 9
    }
};
console.log(adalaber2);

//Acceder al valor de una propiedad de un objeto
// Muestra en la consola 'María'
console.log(adalaber.name);

// Muestra en la consola 'María'
console.log(adalaber['name']);

// Muestra en la consola 'María'
const nameKey = 'name';
console.log(adalaber[nameKey]);

//Actualizar el valor de una propiedad de un objeto
adalaber.name = 'Lucía';

// Muestra en la consola 'Lucía'
console.log(adalaber.name);

//CREAR OBJETOS VACÍOS Y LUEGO AÑADIR LAS PROPIEDADES
const adalaber3 = {};
adalaber3.name = 'María';
adalaber3.age = 31;
adalaber3.isMarried = false;

// Muestra en la consola 31
console.log(adalaber3.age);

//MÉTODOS - funciones asociadas a la propiedad de un objeto
const adalaber4 = {};
adalaber4.name = 'María';
adalaber4.speak = phrase => `Yo digo: ${phrase}`;

// Muestra en la consola 'Yo digo: Hola'
console.log(adalaber4.speak('Hola'));

//THIS - acceder al resto de propiedades de un objeto desde un método
const adalaber5 = {};
adalaber5.name = 'María';
adalaber5.sayHello = function () {
    return 'Hola, me llamo ' + this.name;
};

// Muestra en la consola 'Hola, me llamo María'
console.log(adalaber5.sayHello());

