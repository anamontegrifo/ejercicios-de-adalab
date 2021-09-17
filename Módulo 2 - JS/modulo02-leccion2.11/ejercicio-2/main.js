'use strict';

const search = document.querySelector('.js-search');
const btn = document.querySelector('.js-star');
const list = document.querySelector('.js-list');
let content = '';

function findCharacter() {
	const textSearch = search.value;
	let url = `https://swapi.dev/api/people/?search=${textSearch}`;

	fetch(url)
		.then((result) => result.json())
		.then((data) => {
			console.log(data); // devuelve los elementos que coincide con la búsqueda como objeto
			console.log(data.results[0].name); //devuelve el nombre del elemento el la posición 0
			console.log(data.results[0].gender);

			const characters = data.results;
			console.log(characters); //devuelve el array de los elementos que coinciden con la búsqueda

			for (const name of characters) {
				if (name.gender === 'female') {
					const characterText = `<li>${name.name} es un personaje de género  femenino</li>`;
					content += characterText;
				} else {
					const characterText = `<li>${name.name} es un personaje de género masculino</li>`;
					content += characterText;
				}

				list.innerHTML = content;
			}
		});
}

btn.addEventListener('click', findCharacter);
