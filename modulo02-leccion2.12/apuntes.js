'use strict';

//NUEVAS FORMAS DE SELECCIONAR, CREAR, AÑADIR O BORRAR ELEMENTOS

//parentElement => seleccionamos un elemento y vamos a por su contenedor madre
const item1 = document.querySelector('.item--1');
console.log(item1); // Devuelve una representación del elemento como HTML
console.dir(item1); // Devuelve una representación del elemento como objeto

const mother = item1.parentElement;

console.log(
	`La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${
		mother.className
	}`
);
// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"

//CREAR ELEMENTOS CON .createElement() y .createTextNode()
// Creamos un elemento nuevo, un <li>
const newItem = document.createElement('li');
console.log(newItem); // Devuelve "<li></li>"

// Ahora creamos algo de contenido
const newContent = document.createTextNode('Item nuevo');

// Y se lo añadimos a nuestro <li>
newItem.appendChild(newContent);
console.log(newItem); // Devuelve "<li>Item nuevo</li>"

//AÑADIR ELEMENTOS con .appendChild
const items = document.querySelector('.items');
items.appendChild(newItem);

//ELIMINAR ELEMENTOS con remove()

// items.remove(); // elimina los tres elementos del listado

//ELIMINAR HIJOS con .removeChild()
const itemList = document.querySelector('.items');
const item2 = itemList.querySelector('.item--2');
itemList.removeChild(item2);
// Elimina el elemento con clase .item--2 que es descendiente de .items

//OBTENER INFORMACIÓN DE LOS ATRIBUTOS DE UN ELEMENTO Y MODIFICARLOS (Para src, value, type, style, href)
// Si tenemos <input type="text" name="firstname" id="firstname" value="Ada">
const nameInput = document.querySelector('#firstname');

console.log(nameInput.value); // Pintará el valor actual, 'Ada'
nameInput.value = 'Joan'; // Rellenará el input con el valor 'Joan'

/*
Para poner un estilo, lo asignaremos usando la siguiente notación
style.propiedadCSS = 'valor'

De esta forma no modificaremos los estilos previamente asignados

Si la propiedad CSS tiene un guión (background-color) lo convertiremos a camelcase
backgroundColor
*/
nameInput.style.backgroundColor = 'red';

/*
Si queremos poner varios estilos a la vez o sobreescribir los anteriores,
usaremos esta notación
*/
nameInput.style = 'color: red; color: blue;';

//PARA OTRAS PROPIEDADES
// Si tenemos <label class="firstname-label" for="firstname"></label>
const label = document.querySelector('.firstname-label');
label.getAttribute('for'); // devolverá firstname

label.setAttribute('for', 'firstname'); // asignará for="firstname" al label
