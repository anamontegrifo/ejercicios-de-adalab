'use strict';
let temp;
let counter = 0;
const time = document.querySelector('.js-time');
const stopBtn = document.querySelector('.js-stop');
const continueBtn = document.querySelector('.js-continue');
const timeArea = document.querySelector('.js-time');

const incrementAndShowCounter = () => {
	counter++;
	time.innerHTML = counter;
};

temp = setInterval(incrementAndShowCounter, 1000);

function stopInterval() {
	clearInterval(temp);
}

function restartInterval() {
	if (temp) {
		clearInterval(temp);
		temp = setInterval(incrementAndShowCounter, 1000);
		counter = counter + 1;
		time.innerHTML = counter;
	}
}

stopBtn.addEventListener('click', stopInterval);
continueBtn.addEventListener('click', restartInterval);
