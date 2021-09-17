'use strict';

//Ejercicio 1
document.querySelector('h2').innerHTML = 'Esta página no es compatible con la versión actual.';

//Ejercicio 2
const address = 'Calle Sevilla, 4';
// address = 'Calle Girona, 7';

const titleElement = document.querySelector('.header');
titleElement.innerHTML = 'Bienvenida ';
titleElement.innerHTML = titleElement.innerHTML + 'adalaber';


//Ejercicio 3
const mainText = document.querySelector('.text');
mainText.innerHTML = mainText.innerHTML + ' mundo';

//Ejercicio 4
let selectName = document.querySelector('.title');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
let chosenName = item1;
chosenName = item2;
selectName.innerHTML = selectName.innerHTML + chosenName.innerHTML;



//Ejercicio 5
const intro = document.querySelector('.intro');
let password = document.querySelector('.password');
password.innerHTML = '**';


//Ejercicio 6
const loremExercise = document.querySelector('.lorem');
const loremContent = '<h1>lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt=""><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sit iusto at libero eveniet distinctio!</p>';
loremExercise.innerHTML = loremContent;

//Ejercicio 7
const numberExercise = document.querySelector('.numberlist');
const numberContent = '<li>1</li><li>2</li><li>3</li>';
numberExercise.innerHTML = numberContent;

//Ejercicio 8

const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');

button1.classList.add('off-button');
button2.classList.add('special-button');
