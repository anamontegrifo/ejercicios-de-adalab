'use strict';

//parentElement - accedemos al elemento superior
const title = document.querySelector('.title');
console.log(title); //nos muestra el <h1></h1>

console.log(title.parentElement); //nos muestra el header

const header = title.parentElement;
console.log(header);

//closest - busca en su línea superior el primero que cumpla una condición
const text = document.querySelector('.text2');
console.log(text);

const subtitle = text.closest('h2');
console.log(subtitle);
//????

//createElement
let newElement = document.createElement('div');

//createTextNode
let newContent = document.createTextNode('Hola, estoy creando un nuevo texto');

//añadir contenido
newElement.appendChild(newContent);
console.log(newElement);

const article = document.querySelector('.article');
article.appendChild(newElement); //insertamos el nuevo elemento dentro de la sección elegida en HTML

//reutilizando las variables de newelement y newContent añadimos un nuevo elemento con su contenido
newElement = document.createElement('p');
newContent = document.createTextNode('Otro texto');
newElement.appendChild(newContent);
console.log(newElement);
article.appendChild(newElement);
