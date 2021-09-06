'use strict';

const search = document.querySelector('.js-search').value;
const btn = document.querySelector('.js-star');

function findCharacter(ev) {
	const textSearch = search;
	console.log(search);
	let url = 'https://swapi.dev/api/people/?search=' + textSearch;
	console.log(url);

	fetch(url)
		.then((result) => result.json())
		.then((data) => {
			console.log(data);
			console.log(data.results[0].name);
			console.log(data.results[0].gender);
		});
}

btn.addEventListener('click', findCharacter);
