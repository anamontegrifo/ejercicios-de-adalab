'use strict';

//Ejercicio 3
function totalPrice(a) {
    const sinIva = (a - (a * 0.21));
    const iva = (a * 0.21);
    const fullPrice = (a);


    return (`Precio sin iva: ${sinIva}, IVA: ${iva} y Total: ${fullPrice}`);

}

console.log(totalPrice(800));


