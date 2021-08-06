'use strict';

document.querySelector('h1').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente';

let officeAddress = 'Calle Leganitos, 24';
officeAddress = 'Calle Leganitos, 10';

const mainText = document.querySelector('.text');
mainText.innerHTML = mainText.innerHTML + ' mundo'

const selectName = document.querySelector('.title');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
selectName.innerHTML = selectName.innerHTML +  item2.innerHTML


const password = document.querySelector('.password');
password.innerHTML =  'Mi contraseña es: **********';

