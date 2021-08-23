'use strict';

//Ejercicio 6
const movieA = document.querySelector('.js_movieA');
const movieB = document.querySelector('.js_movieB');
const button = document.querySelector('.js_button');
const message = document.querySelector('.js_message');

const movies = [];

function movieHandler() {
    movies[0] = movieA.value;
    movies[1] = movieB.value;

    for (const list of movies) {
        console.log(`¡A mi también me encantó ${list}`);
        message.innerHTML = `A mi también me encantó ${movies[0]}`;
    }

}
button.addEventListener('click', movieHandler);
