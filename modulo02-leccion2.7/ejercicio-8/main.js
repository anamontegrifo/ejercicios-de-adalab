'use strict';

//Ejercicio 8

// const alarmButton = document.querySelector('.buttonA');
// const alarmMain = document.querySelector('.alarm__main');

// function changeColor() {
//     alarmMain.classList.toggle('redback');
// }

// alarmButton.addEventListener('click', changeColor);


const alarmButton = document.querySelectorAll('.button');
const alarmMain = document.querySelector('.alarm__main');

alarmButton[0].innerHTML = '1ª alarma';
alarmButton[1].innerHTML = '2ª alarma';
alarmButton[2].innerHTML = '3ª alarma';

for (let i = 0; i < alarmButton.length; i++) {
    alarmButton[i].addEventListener('click', function () {
        alarmMain.classList.toggle('redback');
    });
}





