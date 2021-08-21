'use strict';

//ejercicio 3
const textLorem = document.querySelector('.textLorem');
const newText = document.querySelector('.newText');

function addParagraph() {
    newText.innerHTML += `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt asperiores quidem obcaecati,
    laudantium illo qui consectetur iste itaque commodi, quisquam culpa cum impedit consequuntur aut, veritatis
    minus ipsa atque repellat. Voluptate, quaerat maiores debitis vero non aliquid, adipisci animi exercitationem
    tenetur vitae libero quis necessitatibus, neque iure quod. Facere, quidem.</p>`;
}

textLorem.addEventListener('mouseover', addParagraph);

