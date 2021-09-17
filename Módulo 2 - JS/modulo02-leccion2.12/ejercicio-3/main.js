'use strict';

const users = [
	{
		name: 'Rosario',
		surname: 'García',
		phone: '876947342',
	},
	{
		name: 'Susana',
		surname: 'Martínez',
		phone: '650349821',
	},
	{
		name: 'Julia',
		surname: 'Maroto',
		phone: '239482749',
	},
];

//Función inicial para introducir las opciones en el select
const inputName = document.querySelector('.js-user');

function addSelectElements() {
	for (const user of users) {
		let newItem = document.createElement('option');
		let newContent = document.createTextNode(user.name);
		newItem.appendChild(newContent);
		newItem.value = user.name;
		inputName.appendChild(newItem);
	}
}
addSelectElements();

let textArea = document.querySelector('.js-text');

let nameContent = '';
let surnameContent = '';
let phoneContent = '';

function createElements() {
	textArea.innerHTML = '';
	let paragraph = document.createElement('p');
	paragraph.appendChild(nameContent);
	textArea.appendChild(paragraph);
	paragraph = document.createElement('p');
	paragraph.appendChild(surnameContent);
	textArea.appendChild(paragraph);
	paragraph = document.createElement('p');
	paragraph.appendChild(phoneContent);
	textArea.appendChild(paragraph);
}

//función handle

function autocomplete() {
	const selectedName = inputName.value;

	switch (selectedName) {
		case users[0].name:
			nameContent = document.createTextNode(users[0].name);
			surnameContent = document.createTextNode(users[0].surname);
			phoneContent = document.createTextNode(users[0].phone);
			createElements();
			break;
		case users[1].name:
			nameContent = document.createTextNode(users[1].name);
			surnameContent = document.createTextNode(users[1].surname);
			phoneContent = document.createTextNode(users[1].phone);
			createElements();
			break;
		case users[2].name:
			nameContent = document.createTextNode(users[2].name);
			surnameContent = document.createTextNode(users[2].surname);
			phoneContent = document.createTextNode(users[2].phone);
			createElements();
			break;
	}
}

inputName.addEventListener('change', autocomplete);
