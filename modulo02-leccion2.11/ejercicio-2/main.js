'use strict';
// const button = document.querySelector('.js-star');
const list = document.querySelector('.js-list');
const inputName = document.querySelector('.js-input');
// const starText = document.querySelector('.js-result');

function completeUrl() {
	let name = inputName.value;
	let url = 'https://swapi.dev/api/people/${id}';
	return url;
}

function getStar() {
	let url = completeUrl();

	fetch(url);
}

button.addEventListener('click', getStar);
