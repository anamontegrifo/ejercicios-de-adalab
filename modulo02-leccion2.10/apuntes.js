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


