'use strict';

//Ejercicio en clase
const elemSaludo = document.querySelector('.js_saludo');

function saludar(nombre) {
    elemSaludo.innerHTML += `<p>Hola ${nombre}</p>`;
}

saludar('Ana');


//Ejercicio en clase 2

//Elementos de la página
const inputNombre = document.querySelector('.js_nombre');
const inputApellido = document.querySelector('.js_apellido');
const elemResultado = document.querySelector('.js_result');

//Funciones
function cogerNombre() {
    const nombre = inputNombre.value;
    return nombre;
}

function cogerApellido() {
    return inputApellido.value;
}

function formarNombreCompleto(nombre, apellido) {
    const nombreCompleto = `${nombre} ${apellido}`;
    return nombreCompleto;
}

function escribirNombreCompleto(nombreCompleto) {
    elemResultado.innerHTML = nombreCompleto;

}
//operaciones

const nombre = cogerNombre();
const apellido = cogerApellido();
const nombreCompleto = formarNombreCompleto(nombre, apellido);
escribirNombreCompleto(nombreCompleto);






