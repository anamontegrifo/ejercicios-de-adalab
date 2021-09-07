'use strict';

const users = [
	{
		name: 'Rosario',
		surName: 'García',
		phone: '876947342',
	},
	{
		name: 'Susana',
		surName: 'Martínez',
		phone: '650349821',
	},
	{
		name: 'Julia',
		surName: 'Maroto',
		phone: '239482749',
	},
];

//Función inicial para introducir las opciones en el select
const selectName = document.querySelector('.js-user');

function addSelectElements() {
	for (const user of users) {
		let newItem = document.createElement('option');
		let newContent = document.createTextNode(user.name);
		newItem.appendChild(newContent);
		selectName.appendChild(newItem);
	}
}
addSelectElements();

//
const textArea = document.querySelector('.js-text');
