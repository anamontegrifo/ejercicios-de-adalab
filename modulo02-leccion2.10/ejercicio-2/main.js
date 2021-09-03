'use strict';
const image = document.querySelector('.js-image');


function getADog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(jsonData => image.src = jsonData.url);
}

document.querySelector('.js-dog').addEventListener("click", getADog);

