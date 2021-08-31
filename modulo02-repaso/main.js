'use strict';

//Called HTML element variables
const container = document.querySelector('.js-container');
const selectedSmile = document.querySelector('.js-select');
const UpdateButton = document.querySelector('.js-update');
const myFaceToday = document.querySelector('.js-smile');

//Function to change smiley faces
function updateSmile() {
    myFaceToday.innerHTML = selectedSmile.value;

    //Otra opción más complicada
    //const selectedOption = selectedSmile.options[selectedSmile.selectedIndex];
    //myFaceToday.innerHTML = selectedOption.text;
}

//Function to calculate the random number
function random() {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
}

//Function to change the background colour
function changeColour() {
    const selectedNumber = random();
    console.log(selectedNumber);

    if (selectedNumber % 2 === 0) {
        container.classList.remove('orangeBack');
        container.classList.add('yellowBack');
    } else {
        container.classList.remove('yellowBack');
        container.classList.add('orangeBack');
    }
}

function handleUpdateBtn() {
    updateSmile();
    changeColour();
}

UpdateButton.addEventListener('click', handleUpdateBtn);

