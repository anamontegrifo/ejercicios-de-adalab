'use strict';

const inputText = document.querySelector('.inputText');
const button = document.querySelector('.button');

function print(event) {
    console.dir(event.currentTarget);

}
inputText.addEventListener('keyup', print);
button.addEventListener('click', print);

//Value es el contenido tecleado en el input, nodeName es el tipo de etiqueta y required, si el input tiene ese atributo.