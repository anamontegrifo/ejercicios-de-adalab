'use strict';

//EJEMPLO DE PETICIÓN USANDO FETCH
// fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         document.body.innerHTML = data.result;
//     });
// O con arrow function
// fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//   .then(response => response.json())
//   .then(data => document.body.innerHTML = data.result);

//EJEMPLO DE PETICIÓN USANDO FETCH CON ADDEVENTLISTENER
function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);

//EJEMPLO DE JSON que devuelve el Dog CEO API:
// {
//     "status": "success",
//         "message": "https://dog.ceo/api/img/terrier-australian/n02096294_4492.jpg"
// }

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

//PETICIONES ENCADENADAS
function getBreedsImage() {
  fetch('https://dog.ceo/api/breeds/list')
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      const breeds = breedsData.message;
      return fetch('https://dog.ceo/api/breed/' + breeds[0] + '/images/random');
    })
    .then((imageResponse) => imageResponse.json())
    .then((imageData) => {
      const img = document.querySelector('.breedImage');
      img.src = imageData.message;
      img.alt = 'Un perro';
    });
}
const dogBtn = document.querySelector('.js-btn');
dogBtn.addEventListener('click', getBreedsImage);

//PETICIONES EN PARALELO
const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [createPromise(), createPromise()];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });
}
const btn3 = document.querySelector('.js-btn3');
btn3.addEventListener('click', getBreedImages);
