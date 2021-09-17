'use strict';

//FIND Y FINDINDEX

const nombres = ['Ana', 'Clara', 'Daniela', 'Irene', 'Paloma'];
const nombreAQuitar = 'Ivan';

const indiceAQuitar = nombres.findIndex((n) => n === nombreAQuitar);
console.log(indiceAQuitar);

//Para que splice no nos elimine elementos al buscar uno que no está en el listado tenemos que limitar las posibilidades a los que tengan un indice a partir de 0
if (indiceAQuitar !== -1) {
	nombres.splice(indiceAQuitar, 1);
}
console.log(nombres);

// --------------------------------------------------//

//Vamos a hacer métodos con un array usando una api y fetch

const listElement = document.querySelector('.js-list');
const userInput = document.querySelector('.js-search');

let data = [];

fetch('//api.igarrido.es/promo-nerea.json')
	.then((response) => response.json())
	.then((dataApi) => {
		data = dataApi;

		render();
	});

function render() {
	// console.log(data);
	// console.table(data);

	//Usamos un método filter para encontrar las adalabers que cumplan una condición y nos lo devuelve en otro array
	const dataFiltered = data.filter((adalaberData) =>
		adalaberData.name.toLocaleLowerCase().includes(userInput.value)
	);
	listElement.innerHTML = '';
	for (const adalaberData of dataFiltered) {
		const html = `<li>${adalaberData.name}</li>`;
		listElement.innerHTML += html;
	}

	//hacemos un filtro para devolver las adalaber que cumplan una condición
	// const selectedAdalaber = data.find(
	// 	(adalaber) => adalaber.name === 'Daniela Salazar'
	// );
	// const html = `<li>${selectedAdalaber.name}</li>`;
	// listElement.innerHTML += html;

	//Otro ejemplo, el primer nombre que contenga el string que indiquemos
	// const selectedAdalaber = data.find((adalaber) =>
	// 	adalaber.name.toLowerCase().includes('i')
	// );
	// const html = `<li>${selectedAdalaber.name}</li>`;
	// listElement.innerHTML += html;

	//devolvemos el listado de adalaber el elementos <li></li>
	// for (const adalaberData of data) {
	// 	const html = `<li>${adalaberData.name}</li>`;
	// 	listElement.innerHTML += html;
	// }
}

function handleType() {
	render();
}

userInput.addEventListener('keyup', handleType);

// --------------------------------------------------//
//MAP
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => n * n);
const vatNumber = numbers.map((n) => n * 1, 21);

console.log(squares);
console.log(vatNumber);

//Extraemos solo el nombre de cada objeto del array
const users = [
	{ name: 'María', isPremium: false },
	{ name: 'Lucía', isPremium: true },
	{ name: 'Susana', isPremium: true },
	{ name: 'Rocío', isPremium: false },
	{ name: 'Inmaculada', isPremium: false },
];
const nameList = users.map((user) => user.name);
console.log(nameList);
