'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.button');
const moviesList = document.querySelector('.moviesList');

function addMovies(event) {
    const content = `<li>${inception}</li>`;
    moviesList.innerHTML = content;

}



button.addEventListener('click', addMovies);



