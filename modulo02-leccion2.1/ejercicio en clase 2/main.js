"use strict";

const titleMain = document.querySelector('h1');
titleMain.innerHTML = "Lección 1";
titleMain.classList.add('red');
titleMain.innerHTML = titleMain.innerHTML + ': Intro a la programación'

let num1 = 5;
let num2 = 10;
let resultado = num1 * num2;

titleMain.innerHTML = resultado;

num1 = 10;
resultado = num1 * num2;
titleMain.innerHTML = resultado;
