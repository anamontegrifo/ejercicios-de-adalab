'use strict';

//Ejercicio en clase

// Elementos de la página:

const inputNombre = document.querySelector('.js_nombre');
const inputApellido = document.querySelector('.js_apellido');
const elemResultado = document.querySelector('.js_result');
const buttonGenerate = document.querySelector('.js_button');

// Funciones

/**
 * Usa el input con la clase js_nombre del HTML para recoger el valor
 * del nombre "tecleado" por la usuaria.
 * 
 * @returns Valor que contiene en <input> del nombre
 */

function cogerNombre() {
    const nombre = inputNombre.value;
    return nombre;
}

/**
 * Usa el input con la clase js_apellido del HTML para recoger el valor
 * del apellido "tecleado" por la usuaria.
 * 
 * @returns Valor que contiene en <input> del apellido
 */

function cogerApellido() {
    return inputApellido.value;
}

/**
 * Toma un nombre y un apellido de la usuaria y forma un nuevo string
 * con el nombre completo, uniéndo el nombre con un espacio en blanco
 * y el apellido proporcionados.
 * 
 * @param {str} nombre Nombre de la usuaria
 * @param {str} apellido Apellido de la usuaria
 * @returns Un string con el nombre completo de la usuaria (nombre + apellido)
 */

function formarNombreCompleto(nombre, apellido) {
    const nombreCompleto = `${nombre} ${apellido}`;
    return nombreCompleto;
}

/**
 * Escribe en el documento HTML el texto del parámetro en el elemento con la clase
 * js_result (para mostrar el resultado del ejercicio).
 * 
 * @param {str} nombreCompleto Nombre a mostrar
 */

function escribirNombreCompleto(nombreCompleto) {
    elemResultado.innerHTML = nombreCompleto;
}
function generarNombre() {
    // Se obtiene el nombre del input del HTML para usarlo más adelante.

    const nombre = cogerNombre();

    // Se obtiene el apellido del input del HTML para usarlo más adelante.

    const apellido = cogerApellido();

    // Con el nombre y el apellido obtenidos, se forma un nuevo string
    // con el nombre completo.

    const nombreCompleto = formarNombreCompleto(nombre, apellido);

    // Se escribe el nombre completo generado en el documento HTML.

    escribirNombreCompleto(nombreCompleto);
}

//   Operaciones principales
// ===========================

//Generar el cambio de nombre al accionar el botón
buttonGenerate.addEventListener('click', generarNombre);

//Genera el cambio de nombre y apellido al teclear en en input. Si usamos el event change solo cambio cuando sales del input (cambias el foco a otro elemento)
inputNombre.addEventListener('keyup', generarNombre);
inputApellido.addEventListener('keyup', generarNombre);