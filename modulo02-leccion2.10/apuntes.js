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
    fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.js-result').innerHTML = data.result
        });
}
document.querySelector('.js-emoji').addEventListener("click", getEmoji);

//EJEMPLO DE JSON que devuelve el Dog CEO API:
// {
//     "status": "success",
//         "message": "https://dog.ceo/api/img/terrier-australian/n02096294_4492.jpg"
// }

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector("img");
            img.src = data.message;
            img.alt = "Un perro";
        });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);
