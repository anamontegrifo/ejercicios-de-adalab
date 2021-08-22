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

//event.currentTarget - contiene el elemento sobre el que pusimos el listener

const buttonElement2 = document.querySelector('.button');

function handleButtonClick(event) {
    console.log(event.currentTarget);
}

buttonElement2.addEventListener('click', handleButtonClick);

//Ejemplo de uso de event.currentTarget para aplicar a varios elementos

const strawberry = document.querySelector('.fruit-strawberry');
const banana = document.querySelector('.fruit-banana');
const kiwi = document.querySelector('.fruit-kiwi');

function handleFruitClick(event) {
    // Asignamos a una constante el elemento
    // sobre el que pusimos el `listener`
    // para trabajar cómodamente con él
    const selectedFruit = event.currentTarget;

    selectedFruit.classList.toggle('fruit--selected');
}

strawberry.addEventListener('click', handleFruitClick);
banana.addEventListener('click', handleFruitClick);
kiwi.addEventListener('click', handleFruitClick);

//event.preventDefault()



