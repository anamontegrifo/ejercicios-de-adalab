'use strict';

const userName = 'Ana';
const printMessage = document.querySelector('.js__name');
let inputName = 'Raquel'
inputName = 'ana';
inputName = 'Sofía';
inputName = 'Ana';

if (inputName.toLowerCase() === userName.toLowerCase()) {
    console.log(`Bienvenida ${inputName}`);
    printMessage.innerHTML = `Bienvenida ${inputName}`;

}
else {
    console.log(`Lo siento ${inputName}, pero el usuario que has introducido es erróneo`)
    printMessage.innerHTML = `Lo siento ${inputName}, pero el usuario que has introducido es erróneo`;
}
