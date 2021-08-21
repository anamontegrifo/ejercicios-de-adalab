'use strict';

//ESCUCHAR EVENTOS

//Recogemos el elemento HTML sobre el que queremos escuchar el evento
const button = document.querySelector('.alert');

//Función manejadora o handler
function showAlert() {
    console.log('Alerta! alerta!');
}

// Listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);


//CALLBACK: FUNCIONES COMO ARGUMENTO

//con el nombre de una función ya declarada
button.addEventListener('click', showAlert);

//declarando la función directamente en el argumento
button.addEventListener('click', function showAlert() {
    console.log('Alerta! alerta!');
});

//y con una arrow function
button.addEventListener('click', () => console.log('alerta'));


//EVENTOS COMO ARGUMENTO DE LAS FUNCIONES

const buttonElement = document.querySelector('.button');

function handleButtonClick(event) {
    console.log(event);
}

buttonElement.addEventListener('click', handleButtonClick);


