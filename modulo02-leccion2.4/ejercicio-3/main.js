'use strict';

//Ejercicio 3
function totalPrice(a) {
    const sinIva = (a - (a * 0.21));
    const iva = (a * 0.21);
    const totalPrice = (a);


    return (`Precio sin iva: ${sinIva}, IVA: ${iva} y Total: ${totalPrice}`);

}

console.log(totalPrice(800));


