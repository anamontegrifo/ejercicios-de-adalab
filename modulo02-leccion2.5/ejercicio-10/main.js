'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const button = document.querySelector('.button');
const moviesList = document.querySelector('.moviesList');

function addMovies() {
    const content = `<li class="js_movie movieA">${inception}</li><li class="js_movie movieB">${theButterFlyEffect}</li><li class="js_movie movieC">${eternalSunshineOfTheSM}</li><li class="js_movie movieD">${blueVelvet}</li><li class="js_movie movieE">${split}</li>`;
    moviesList.innerHTML = content;

    const movieA = document.querySelector('.movieA');
    const movieB = document.querySelector('.movieB');
    const movieC = document.querySelector('.movieC');
    const movieD = document.querySelector('.movieD');
    const movieE = document.querySelector('.movieE');

    function printConsole(event) {
        console.log(event.currentTarget.innerHTML);

    }
    movieA.addEventListener('click', printConsole);
    movieB.addEventListener('click', printConsole);
    movieC.addEventListener('click', printConsole);
    movieD.addEventListener('click', printConsole);
    movieE.addEventListener('click', printConsole);
}

button.addEventListener('click', addMovies);





