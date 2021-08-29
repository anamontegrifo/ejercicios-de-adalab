'use strict';

const container = document.querySelector('.js_container');
const selectSmile = document.querySelector('.js_select');

const UpdateButton = document.querySelector('.js_update');
const myDay = document.querySelector('.js_smile');


function UpdateSmile() {
    const selectedOption = selectSmile.options[selectSmile.selectedIndex];

    myDay.innerHTML = selectedOption.text;

    let randomNumber = Math.floor((Math.random() * 100) + 1);
    console.log(randomNumber);
    if (randomNumber % 2 === 0) {
        container.classList.remove('redBack');
        container.classList.add('yellowBack');
    } else {
        container.classList.remove('yellowBack');
        container.classList.add('redBack');
    }
}

UpdateButton.addEventListener('click', UpdateSmile);

