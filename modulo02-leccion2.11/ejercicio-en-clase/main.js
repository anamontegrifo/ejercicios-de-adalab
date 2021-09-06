'use strict';

const allInput = document.querySelectorAll('.js-input');

function handleKeyUp() {
	const data = {};

	for (const eachInput of allInput) {
		const id = eachInput.id;
		const value = eachInput.value;

		data[id] = value;
	}
	//Convertimos los datos en cadena para poder usarlos en localStorage
	localStorage.setItem('userData', JSON.stringify(data));
}

for (const eachInput of allInput) {
	eachInput.addEventListener('keyup', handleKeyUp);
}

//cuando cargue la página
const initialDataText = localStorage.getItem('userData');
if (initialDataText !== null) {
	const initialData = JSON.parse(initialDataText);

	//recorremos las propiedades del objeto
	for (const id in initialData) {
		console.log(id);

		const input = document.querySelector('.${id}');
		input.value = initialData[id];
	}
}
