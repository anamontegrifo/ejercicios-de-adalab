'use strict';

// Un array con distintos datos (poco recomendable)
// const madrid = ['Madrid', 40.4893538, -3.6827461];

// Tiene más sentido como objeto
const madrid = {
    name: 'Madrid',
    latitude: 40.4893538,
    longitude: -3.6827461
};

// Crea una variable con un array vacío
const arr1 = [];

// Crea un array con dos números
const arr2 = [1, 2];

// Crea un array con cuatro datos
const arr3 = ['Laura', 'Pedro', 'Marta', 'Diego'];

//Obtener información de un array con el índice
const fruits = ['pera', 'manzana', 'naranja', 'plátano'];
console.log(fruits); // Muestra el array completo: 'pera', 'manzana', 'naranja', 'plátano'
console.log(fruits[1]); // Muestra 'manzana' (recordemos que el primer índice es 0)
console.log(fruits[3]); // Muestra 'plátano'



//Obtener información de un array sustituyendo el número del índice por una variable
const options = ['coche', 'viaje', 'crucero', 'llavero'];
const lotteryNumberInput = document.querySelector('#lotteryNumber');

function handleLotteryNumberChange(event) {
    const input = event.currentTarget;
    const selectedNumber = parseInt(input.value);
    const ind = selectedNumber - 1; // El índice empieza en 0
    const result = options[ind]; // Utilizamos una constante que contiene un número como valor
    console.log('Premio: ', result);
}

lotteryNumberInput.addEventListener('keyup', handleLotteryNumberChange);

//Añadir un elemento
const arrA = []; // Creamos un array vacío
arrA[0] = 'Hola'; // Añadimos un elemento en el índice 0, la primera posición del array
arrA[1] = '¿qué tal?'; // Añadimos un elemento en el índice 1, la segunda posición del array
console.log(arrA);
// Tras los pasos anteriores arr será igual a  ['Hola', '¿qué tal?']


//Modificar un valor
const arrB = ['plátano', 'manzana', 'pera']; // Creamos un array con tres elementos
arrB[1] = 'limón'; // Sobrescribimos el valor que hay en la segunda posición del array
console.log(arrB);
// Tras los pasos anteriores arr será igual a  ['plátano', 'limón', 'pera']


//Arrays es un tipo de datos object, al modificar una constante que lo contiene, se modificará en otras que también lo contengan.
const arrX = [1, 2, 3, 4];
const arrZ = arrX;

arrX[4] = 5;

console.log(arrX[4]); // Imprime 5 en la consola
console.log(arrZ[4]); // Imprime también 5 en la consola

//Propiedad length

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers.length); // Mostrará un mensaje con la longitud del array (3)


//Función type of (tipo de variable) y Array.isArray (array true o false)   

const list = [1, 2, 3];
console.log(typeof (list)); //object
Array.isArray(list); // true
console.log(Array.isArray(list)); //true

const firstName = 'Ada';
console.log(typeof (firstName)); //string
Array.isArray(firstName); // false
console.log(Array.isArray(firstName)); //false


//estructura de bucle for

for (let i = 0; i < 20; i++) {
    console.log('Me encantan los bucles 💪');
}


for (let i = 0; i < 20; i++) {
    console.log('Voy por la vuelta ' + i);
}

//Iterando sobre los elementos de un array

const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
let acc = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < scores.length; i++) {
    acc += scores[i];
    // Sumamos a `acc` el valor actual del array en cada iteración del bucle
    // acc += arr[i] es igual a acc = acc + arr[i]
}

console.log('La puntuación final es ' + acc);

//Aplicar Bucle for... of

const bestAnimatedFeature2016Nominees = ['Zootopia', 'Kubo and the Two Strings', 'La tortue rouge', 'Ma vie de Courgette', 'Moana'];

// bucle for
for (let i = 0; i < bestAnimatedFeature2016Nominees.length; i++) {
    console.log(`"${bestAnimatedFeature2016Nominees[i]}" was nominated to 89th Academy Awards`);
}

// bucle for...of
for (const movie of bestAnimatedFeature2016Nominees) {
    console.log(`"${movie}" was nominated to 89th Academy Awards`);
}


//Combinando arrays con objetos
// Lista de contactos (array con objetos dentro)
const contacts = [
    {
        name: 'Raquel',
        phone: '915552323',
        email: 'raquel@inbox.com'
    },
    {
        name: 'Pedro',
        phone: '915554564',
        email: 'pedro@inbox.com'
    },
    {
        name: 'Laura',
        phone: '915555656',
        email: 'raquel@inbox.com'
    }
];

console.log(contacts[0].name); // Muestra el nombre del primer contacto (Raquel)
contacts[2].email = 'laura@inbox.com'; // Cambia el email del tercer contacto
console.log(contacts[2].email); // Muestra el email del tercer contacto ('laura@inbox.com')

// Tarea con participantes (objeto con array dentro)
const task = {
    name: 'Crear un repositorio',
    participants: ['Raquel', 'Pedro', 'Laura']
};

console.log(task.participants[0]); // Muestra el nombre del primer participante (Raquel)
task.participants.push('Diego'); // Añade un nuevo participante a la lista
task.participants[0] = 'Andrea'; // Cambia el nombre del primer participante
console.log(task.participants); // Muestra Andrea, Pedro, Laura, Diego

//querySelectorAll

// Guardamos una lista de todos los parrafos de la página
const paragraphs = document.querySelectorAll('p');

// Modificamos el primer párrafo
paragraphs[0].innerHTML = 'Soy el primero';

// Muestra el número de parráfos que hay en nuestra web
console.log(paragraphs.length);

// Iteramos sobre todos los párrafos para asignarles a todos una clase
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add('highlight');
}

//usar for... in
const userData = {
    email: 'info@email.com',
    password: 'mi-contraseña-super-secreta'
};
for (let item in userData) {
    const inputElement = document.querySelector(`.js-${item}`);
    inputElement.value = userData[item];
}











//Ejercicio 3


for (let acc = 0; acc < 20; acc = acc + 2) {
    console.log('El resultado es:  ' + acc);
}

//Ejercicio 4

for (let moon = 2017 + 3; moon < 2062; moon = moon + 3) {
    console.log('La luna del cazador se verá el año:  ' + moon);
}

//ejercicio 5

const myNumbers = [25, 5, 65, 40, 70];

let add = 0;

for (let i = 0; i < myNumbers.length; i++) {
    add += myNumbers[i] / 5;
}
console.log('La media de mis números es: ' + add);

