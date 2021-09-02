'use strict';

function getACountry() {
    fetch("https://api.rand.fun/country/name")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.js-result').innerHTML = data.result
        });
}
document.querySelector('.js-country').addEventListener("click", getACountry);

