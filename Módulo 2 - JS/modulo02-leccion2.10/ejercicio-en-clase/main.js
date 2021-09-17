'use strict';

const image = document.querySelector('.js-image');

function convertToJs(response) {
    return response.json();
}

function renderToHTML(jsonData) {
    console.log(jsonData);
    image.src = jsonData.url
}

fetch('https://random.dog/woof.json')
    .then(convertToJs)
    .then(renderToHTML);


