'use strict';

//Ejercicio 1

//elementos de HTML
const button = document.querySelector('.ole');
const text = document.querySelector('.text');
//handler
function changeText() {
    text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió';
}
//listerner
button.addEventListener('click', changeText);


//Ejercicio 2
const clickHere = document.querySelector('.clickHere');
const inputName = document.querySelector('.name');

function sayHi() {
    console.log(`hola ${inputName.value}`);
}

clickHere.addEventListener('click', sayHi);

//ejercicio 3
const textLorem = document.querySelector('.textLorem');

function addParagraph() {
    textLorem.innerHTML += `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt asperiores quidem obcaecati,
    laudantium illo qui consectetur iste itaque commodi, quisquam culpa cum impedit consequuntur aut, veritatis
    minus ipsa atque repellat. Voluptate, quaerat maiores debitis vero non aliquid, adipisci animi exercitationem
    tenetur vitae libero quis necessitatibus, neque iure quod. Facere, quidem.</p>`;
}

textLorem.addEventListener('mouseover', addParagraph);

//Ejercicio 4  - en curso
const background = document.querySelector('.textSection');
const viewport = document.defaultView;

function changeColor() {
    if (window.scrollY > 500) {
        if (background.classList.contains('.colour1'));
        background.classList.remove('.colour1');
        background.classList.add('.colour2');
    } else {
        if (background.classList.contains('.colour2'));
        background.classList.remove('.colour2');
        background.classList.add('.colour1');
    }
}

viewport.addEventListener('scroll', changeColor);