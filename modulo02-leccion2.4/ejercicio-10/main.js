'use strict';

function calculator(borderBox, width, padding, border) {
    if (borderBox) {
        console.log(`El elemento es border-box, el ancho de su contenido es ${width} y el ancho total es el mismo`);
    } else {
        console.log(`El elemento es content-box, el ancho de su contenido es ${width} y el ancho total es ${width + padding * 2 + border * 2}`);
    }
}

const boxSize = calculator(false, 100, 5, 1);




