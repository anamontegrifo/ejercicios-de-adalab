'use strict';

//Ejercicio en clase

const entrada1 = document.querySelector('.js_entrada1');
const entrada2 = document.querySelector('.js_entrada2');
const salida = document.querySelector('.js_salida');
console.log(entrada1);


const alimento1 = entrada1.innerHTML;
const alimento2 = entrada2.innerHTML;

if (alimento1 === 'Tomate') {
    salida.innerHTML = 'Hoy comemos ensalada';

    if (alimento2 === 'Pan') {
        salida.innerHTML = 'Hoy comemos pan amb tumaca';
    }
    else if (alimento2 === 'Pepino') {
        salida.innerHTML = 'Hoy comemos gazpacho';
    }
    else if (alimento2 === 'Pasta') {
        salida.innerHTML = 'Hoy comemos spaguetti'
    }
}
else {
    salida.innerHTML = 'Hoy no comemos';
}