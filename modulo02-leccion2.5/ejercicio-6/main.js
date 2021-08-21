'use strict';

const inputText = document.querySelector('.inputText');
const resultText = document.querySelector('.resultText');

function completeText(event) {
    resultText.innerHTML = event.currentTarget.value;
}

inputText.addEventListener('keyup', completeText);


