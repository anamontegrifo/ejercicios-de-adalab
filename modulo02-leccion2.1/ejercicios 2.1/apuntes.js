'use strict';

//Esto es una sentencia que describe una acción
document.querySelector('h1').innerHTML = 'Título principal';

//Declarar variable
let myAddress;
let totalHours;

//Declarar y asignar valor a una variable
let officeAddress = 'Calle Leganitos, 24';

//Asignar o reasignar un valor o una operación
officeAddress = 'Calle Leganitos, 10';
totalHours = 10 + 20 + 30;

//Utilizar variables en otras
let earnings = 12020;
let expenses = 5342;
let benefits = earnings - expenses;

//Declarar y asignar valor a una constante
const homeAddress = 'Calle Leganitos, 24';

//Obtener el primer elemento con esa etiqueta
document.querySelector('h1');

//Asignar un elemento a una constante
const mainTitle = document.querySelector('#mainTitle');

//Modificar el contenido de un elemento HTML: declaramos la constante y después cambiamos con contenido
const titleElement = document.querySelector('.adalaber');
titleElement.innerHTML = 'Bienvenida';

//Recogemos el valor actual del elemento y añadimos algo más
titleElement.innerHTML = titleElement.innerHTML + ' adalaber';

//Podemos introducir HTML dentro de HTML
const listElement = document.querySelector('.list');
const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';
listElement.innerHTML = content;

//Añadir o quitar clases a un elemento
const changeClass = document.querySelector('.redclass');
changeClass.classList.add('hidden', 'redstyle');
changeClass.classList.remove('hidden', 'redclass');

//getElementByID - en desuso
const mainTitle = document.querySelector('#mainTitle');
const mainTitle = document.getElementById('mainTitle');

//var - en desuso
var pageBgColor;
pageBgColor = '#3d7e9a';
var DAYS_PER_WEEK = 7; //las constantes en mayúsculas





