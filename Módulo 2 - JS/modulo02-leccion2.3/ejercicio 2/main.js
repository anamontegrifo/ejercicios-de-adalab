'use strict';

const firstUSer = 'ana'
const secondUSer = 'manuela'
let inputUser = 'Manuela';
inputUser = "Sara";
inputUser = 'Ana';

const printMessage = document.querySelector('.js__name');

if (inputUser.toLowerCase() === firstUSer || inputUser.toLowerCase() === secondUSer) {
    console.log(`Bienvenida ${inputUser}`);
    printMessage.innerHTML = `Bienvenida ${inputUser}`;

}
else {
    console.log(`Lo siento ${inputUser}, pero el usuario que has introducido es erróneo`)
    printMessage.innerHTML = `Lo siento ${inputUser}, pero el usuario que has introducido es erróneo`;
}

