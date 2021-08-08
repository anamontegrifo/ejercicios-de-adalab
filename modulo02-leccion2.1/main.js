'use strict';


//Esto es una sentencia que describe una acción
document.querySelector('h1').innerHTML = 'Título principal';


//Ejercicio 1
document.querySelector('h2').innerHTML = 'Esta página no es compatible con la versión actual.';

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

//Ejercicio 3
const mainText = document.querySelector('.text');
mainText.innerHTML = mainText.innerHTML + ' mundo'

//Ejercicio 4
const selectName = document.querySelector('.title');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
selectName.innerHTML = selectName.innerHTML + item2.innerHTML;

//Ejercicio 5
const password = document.querySelector('.password');
password.innerHTML =  'Mi contraseña es: *****';

//Podemos introducir HTML dentro de HTML
const listElement = document.querySelector('.list');
const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';
listElement.innerHTML = content;

//Ejercicio 6
const loremExercise = document.querySelector('.lorem');
const loremContent = '<h1>lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt=""><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sit iusto at libero eveniet distinctio!</p>';
loremExercise.innerHTML =loremContent;

//Ejercicio 7
const numberExercise = document.querySelector('.numberlist');
const numberContent = '<li>1</li><li>2</li><li>3</li>';
numberExercise.innerHTML = numberContent;

//Añadir o quitar clases a un elemento
const changeClass = document.querySelector('.redclass');
changeClass.classList.add('hidden', 'redstyle');
changeClass.classList.remove('hidden', 'redclass');

//Ejercicio 8
